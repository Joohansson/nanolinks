#Check list for invalid URLs by testing connectivity
#HOW TO (needs at least python3)
#pip install asyncio
#pip install aiohttp
#pip install async_timeout
#git clone https://github.com/Joohansson/nanolinks.git
#cd nanolinks/src
#python3 checkValidLinks.py

import asyncio
import aiohttp
import async_timeout
import sys

async def fetch(session, url):
    try:
        async with session.get(url) as response:
            try:
                status = response.status
                #r = await response.text()
                #await asyncio.sleep(5) #cause timeout 1
            except:
                return
            return {'url':url, 'status':status}
    except aiohttp.client_exceptions.ClientConnectorError:
        print('Failed to connect: ' + url)
    except aiohttp.client_exceptions.InvalidURL:
        print('Invalid URL: ' + url)
    except:
        return

async def getData(url):
    try:
        #await asyncio.sleep(5) #cause timeout 2, working
        with async_timeout.timeout(10):
            async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False)) as session:
                r = await fetch(session, url)
                return r

    except asyncio.TimeoutError as t:
        print('Timeout: ' + url)

async def main():
    links = []
    file = open('../index.md', 'r') #File to check

    #Filters to find URL from markdown syntax
    start = '* ['
    end = ')'
    startURL = ']('
    ignore = '#'

    #Loop text file
    badURL = 0
    URLs = 0
    for line in file:
      #Find every URL on the format "* [Description](URL)"
      if len(line) >= 10: #Minimum URL is http://x.x
        if(line.find(start) == 0 and line.find(ignore) == -1):
          url = line[line.find(start)+len(start):line.rfind(end)]
          urlFinal = url[url.find(startURL) + len(startURL):]
          links.append(urlFinal)

    tasks = []
    print('Start checking ' + str(len(links)) + ' links')

    for url in links:
        tasks.append(asyncio.ensure_future(getData(url)))
    try:
        with async_timeout.timeout(30):
            await asyncio.gather(*tasks)
    except asyncio.TimeoutError as t:
        print('Main Timeout')
        return

    okLinks = 0
    badLinks = 0
    for task in tasks:
        if task.result() == None:
            continue
        url = task.result()['url']
        code = task.result()['status']
        if code < 400:
            print('OK: ' + url)
            okLinks += 1

        elif code == 404:
            print('Not Found: ' + url)
            badLinks += 1

        elif code == 503:
            print('Service Unavailable: ' + url)
            badLinks += 1

        else:
            print('Error ' + str(code) + ': ' + url)
            badLinks += 1

    print("OK links: " + str(okLinks))
    print("Strange links: " + str(badLinks))

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
