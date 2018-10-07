#Check list for invalid URLs by testing connectivity
#HOW TO (needs at least python3)
#pip install httplib2
#pip install requests
#git clone https://github.com/Joohansson/nanolinks.git
#cd nanolinks/src
#python3 checkValidLinks.py

import httplib2
import requests
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
  urlOK = False
  #Find every URL on the format "* [Description](URL)" 
  if len(line) >= 10: #Minimum URL is http://x.x
    if(line.find(start) == 0 and line.find(ignore) == -1):
      url = line[line.find(start)+len(start):line.rfind(end)]
      urlFinal = url[url.find(startURL) + len(startURL):]
      #Check connectivity by only checking HEAD (fast method)
      h = httplib2.Http(".cache", disable_ssl_certificate_validation=True)
      try:
        resp = h.request(urlFinal, 'HEAD')
        httpCode = int(resp[0]['status'])
      except Exception as e:
        #print('Failed to check link. Error: %r' %e)
        httpCode = 504

      if(httpCode < 400):
        urlOK = True
      elif(httpCode == 404):
        badURL = badURL + 1
        print('Not Found: %s' % (urlFinal))
      elif(httpCode == 503):
        badURL = badURL + 1
        print('Service Unavailable: %s' % (urlFinal))
      else:
        #Try connect with request instead (download site, slow method)
        try:
          response = requests.get(urlFinal)
          httpCode = response.status_code
        except Exception as e:
          #print('Failed to check link. Error: %r' %e)
          httpCode = 504

        if(httpCode < 400):
          urlOK = True
        #Everything has failed
        else:
          urlOK = False

      #Print result (if not already printed)
      if(httpCode != 404 and httpCode != 503):
        if(urlOK):
          URLs = URLs + 1
          print('OK: %s' % (urlFinal))
        else:
          badURL = badURL + 1
          print('BAD, HTTP=%s %s' % (httpCode,urlFinal))

print('Ok: %s' % (URLs))
print('Error: %s' % (badURL))
