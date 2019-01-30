---
layout: default
---
<nav id="dropdown">
  <div id="dropbtn">
    <span></span>
    <span></span>
  </div>
  <div id="dropdown-container">
    <div id="dropdown-content">
      <ul>
        <li><a href="#">Top</a></li>
	<li><a href="https://translate.google.com/translate?sl=en&tl=pt&js=y&prev=_t&hl=en&ie=UTF-8&u=https%3A%2F%2Fnanolinks.info&edit-text=&act=url">Translated Site</a></li>
        <li><a href="#latest-additions">Latest Additions</a></li>
        <li><a href="#information--education">Information &amp; Education</a></li>
        <li><a href="#market">Market</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#entertainment">Entertainment</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contribution">Contribution</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id="logo-click" class="first-header">
  <img id="logo" src="src/logo_links.png" alt="Logo"/>
</div>

<button class="site-btn collapse">What is Nano?</button>
<div class="collapse-content">
<p class="intro"><strong>Nano is a 3rd generation cryptocurrency with zero fees, super quick transactions and high scalability. Each account is part of a Directed Acyclic Graph (DAG), which results in lightweight nodes that requires no mining, thus very low environmental impact. These features makes Nano ideal for peer-to-peer transactions, donations and purchases in everyday life all around the world! Feel free to browse this page to know more about Nano, how it can be used and how to obtain it.</strong></p>

<h3><strong>Simple Comparison</strong></h3>
<table id="intro-table">
  <tr>
    <th>Coin</th>
    <th>Fee</th> 
    <th>Speed [Sec]</th>
    <th>Scalability [TPS]</th>
    <th>Energy [Wh/Tx]</th>
  </tr>
  <tr>
    <td>Nano</td>
    <td>0<span class="stext2">*1</span></td>
    <td>3-20<span class="stext2">*3</span></td>
    <td>100-1000<span class="stext2">*5</span></td>
    <td>0.032<span class="stext2">*7</span></td>
  </tr>
  <tr>
    <td>Bitcoin</td>
    <td>Fee market<span class="stext2">*2</span></td>
    <td>600-3600<span class="stext2">*4</span></td>
    <td>10<span class="stext2">*6</span></td>
    <td>950,000<span class="stext2">*8</span></td>
  </tr>
  <tr>
    <td><strong>Multipliers</strong></td>
    <td><strong>Infinite</strong></td>
    <td><strong>200x</strong></td>
    <td><strong>10-100x</strong></td>
    <td><strong>1/30,000,000x</strong></td>
  </tr>
</table>
<div class="stext">
  <p>*1 No mining, no fees.</p>
  <p>*2 Typically around 0.1-1 USD/transaction but was $37 while network was saturated. No upper limit and controlled by demand.</p>
  <p>*3 Depends on wallet and node hardware. Transaction Proof of Work can be pre-calculated making the transactions very fast.</p>
  <p>*4 Depends on the fee. A high fee typically results in transactions to be cleared in 10min but with lower fee take 1h or more.</p>
  <p>*5 Only limited by node hardware. 7000 TPS was done in early lab. No real test on mainnet has been made yet but will be as soon as planned protocol optimizations have been done. 100 TPS has already been seen on the network.</p>
  <p>*6 Estimated hardcoded maximum allowed per block with Segwit.</p>
  <p>*7 Mid 2018 value based on PoW needed for each tx. Reference: GTX1070 GPU at 100W + 100W computer.</p>
  <p>*8 Mid 2018 value. Depends on hashrate which depends on market. Also depends of current tps.</p>
</div>
<br>
<h3><strong>The Green Choice</strong></h3>
<p><ul>
  <li>A Vestas V164 wind turbine can power 400,000 nano transactions, per revolution! Enough to power 80,000 tx/sec</li>
  <li>4 square meters of solar panels can power 7 tx/sec</li>
  <li>1 nano tx is equivalent of a 2W LED lamp to shine for 1 sec</li>
</ul></p>
<br>
<h3><strong>Test Nano</strong></h3>
<div class="first-para">
  <p>Without the need to own any nano you can try the power of fast and fee-less transactions on the real live network!<br>
	  If you want to transact with your own nano you can easily create a wallet and obtain some free nano from any of the faucets find below.</p>
  <a href="http://nanospeed.live" class="site-btn btn-external" onclick="window.open(this.href); return false;">SPEED TEST FROM A TO B</a><br>
  <a href="#faucets-free-nano" class="site-btn">GET FREE NANO</a><br>
  <a href="https://nanomate.co/" class="site-btn btn-external" onclick="window.open(this.href); return false;">SEND TO ANYONE</a>
</div>

<div class="line"></div>
</div>

<div class="index-text" id="div-left">
  <h2 id="quick-index">Quick Index</h2>
  <ul>
    <li><a class="int-link" href="/news">News Archive</a></li>
    <li><a class="int-link" href="https://translate.google.com/translate?sl=en&tl=pt&js=y&prev=_t&hl=en&ie=UTF-8&u=https%3A%2F%2Fnanolinks.info&edit-text=&act=url">Google Translate This Site</a></li>
    <li><a class="int-link" href="#latest-additions">Latest Additions</a></li>
    <li><a class="int-link" href="#information--education">Information &amp; Education</a></li>
    <li><a class="int-link" href="#market">Market</a></li>
    <li><a class="int-link" href="#development">Development</a></li>
    <li><a class="int-link" href="#entertainment">Entertainment</a></li>
    <li><a class="int-link" href="#services">Services</a></li>
    <li><a class="int-link" href="#contribution">Contribution</a></li>
  </ul>
  
  <select id="help-select">
    <option selected disabled>What are you looking for?</option>
    <option value="1">Send or Receive Nano</option>
    <option value="2">Buy or Trade Nano</option>
    <option value="3">Track Transactions or check Stats</option>
    <option value="4">Accept Nano in a Shop</option>
    <option value="5">Set up a Node or Representative</option>
    <option value="6">Participate in the Beta Network</option>
    <option value="7">Join our Community</option>
  </select>
  
  <div class="help" id="help1">
    <ul>
      <li><a class="int-link" href="#wallets">Wallets</a></li>
      <li><a class="int-link" href="#faucets-free-nano">Faucets (Free nano)</a></li>
      <li><a href="https://youtu.be/qSsIXy-NimE">Video Guide: Get Free Nano and Share with Anyone</a></li>
    </ul>
  </div>
  
  <div class="help" id="help2">
    <ul>
      <li><a class="int-link" href="#exchanges">Exchanges</a></li>
      <li><a class="int-link" href="#related-mobile-apps">Mobile Apps</a></li>
      <li><a class="int-link" href="#market-data-analysis--tickers">Market Data, Analysis & Tickers</a></li>
      <li><a href="https://youtu.be/FE5yUT4-UYk">Guide: How to buy NANO with Coinbase and Binance</a></li>
    </ul>
  </div>

  <div class="help" id="help3">
    <ul>
      <li><a class="int-link" href="#network-stats-and-explorers">Network Stats and Explorers</a></li>
      <li><a href="https://distributedpow.tk/">Distributed PoW System - Dashboard</a></li>
    </ul>
  </div>
  
  <div class="help" id="help4">
    <ul>
      <li><a class="int-link" href="#merchant--donation-related-no-shops-too-many">Payment Services</a></li>
      <li><a class="int-link" href="#point-of-sale">Point of Sale Services</a></li>
    </ul>
  </div>
  
  <div class="help" id="help5">
    <ul>
      <li><a href="https://youtu.be/k1RlrlaKOCg">Video Guide: How to setup a Nano node</a></li>
      <li><a href="https://1nano.co/support-the-network">Text Guide: How to Setup a Node at DigitalOcean</a></li>
      <li><a href="https://github.com/nanocurrency/nano-node/wiki">Nano Main Github Wiki</a></li>
      <li><a href="https://nanoo.tools/docker-node">Community Developer Wiki</a></li>
      <li><a href="https://github.com/lephleg/nano-node-docker">Quick Setup: Nano Node Docker</a></li>
      <li><a href="https://nanotools.github.io/easy-nano-node">Quick Setup: Easy Nano Node</a></li>
      <li><a href="https://github.com/NanoTools/nanoNodeMonitor">Nano Node Monitor</a></li>
      <li><a href="https://github.com/Joohansson/NanoNodeGraphics">Nano Node Graphics - Realtime Charts</a></li>
      <li><a href="https://github.com/georgehara/nano/wiki/unofficial">Advanced Community Documentation</a></li>
    </ul>
  </div>

  <div class="help" id="help6">
    <ul>
      <li><a class="int-link" href="#beta-network">Beta Network Resources</a></li>
    </ul>
  </div>
  
  <div class="help" id="help7">
    <ul>
      <li><a class="int-link" href="#core-social-media--contribution-channels">Social Media Channels</a></li>
      <li><a class="int-link" href="#project-specific-development-channels">Development Channels</a></li>
      <li><a href="https://nanocenter.org/">The Nano Center</a></li>
    </ul>
  </div>
</div>

<div id="div-left" markdown="1">

## Latest Additions

* [Jan 06: How to setup a Nano node](https://youtu.be/k1RlrlaKOCg)
* [Jan 07: Best Practices When Using a Hardware Wallet](https://medium.com/ledger-on-security-and-blockchain/ledger-101-part-3-best-practices-when-using-a-hardware-wallet-198b60df2681)
* [Jan 09: Wordpress Plugin - Nano, IOTA, XLM, XRP, SEPA Payment Service](https://wordpress.org/plugins/bitvolo-trustless-crypto-payment-gateway/)
* [Jan 19: Coinall - Exchange](https://www.coinall.com/market?product=nano_btc)
* [Jan 22: A Lil Nano - Free Nano](https://www.alilnano.com/)
* [Jan 22: Coingate - Nano FIAT Gateway](https://coingate.com/buy/nano)
* [Jan 25: Beta Net Wiki, Guide](https://github.com/NanoTools/wiki/blob/master/Beta-Network.md)
* [Jan 27: Video Guide: Get Free Nano and Share with Anyone](https://youtu.be/qSsIXy-NimE)
* [Jan 28: NanoStream - Transaction Visualizer](https://nanostream.eu/)
* [Jan 28: Game: Player Killers Exchange](https://playerkillers.exchange)

</div>

<div class="line"></div>

<div id="div-full" markdown="1">

## Information & Education
Learn everything there is to know about Nano!

### Core Team

* [Main Site - nano.org](https://nano.org)
* [Roadmap, Guides, Docs](https://developers.nano.org/roadmap)
* [Whitepaper (Eng)](https://nano.org/en/whitepaper)
* [Official Nano GitHub Wiki](https://github.com/nanocurrency/raiblocks/wiki)
* [Medium Channel](https://medium.com/@nanocurrency)
* [FAQ](https://nano.org/en/faq)

### Core Social Media & Contribution Channels
* [Reddit](https://www.reddit.com/r/nanocurrency/)
* [Discord: Main](https://discordapp.com/invite/JphbBas)
* [Discord: The Nano Center](https://discord.gg/yhBuXMm)
* [Twitter](https://twitter.com/nano)
* [Facebook](https://www.facebook.com/nanofoundation/)
* [LinkedIn](https://www.linkedin.com/company/nano-foundation/)

### Scientific Papers
* [Distributed Ledger Technology: Blockchain Compared to Directed Acyclic Graph](https://www.researchgate.net/publication/324793344_Distributed_Ledger_Technology_Blockchain_Compared_to_Directed_Acyclic_Graph)

### Education & Adoption
* [Getting Started with Nano](https://gettingstarted.nanocenter.org/)
* [What is Nano](https://www.tokendaily.co/blog/what-is-nano)
* [Learn Nano](https://learnnano.com/)
* [Guide - Get, Use, Accept & Support Nano](https://1nano.co/)
* [Third Generation Cryptocurrencies](https://hackernoon.com/why-third-generation-cryptocurrencies-are-game-changers-for-venezuela-cb8c9b016f9d)
* [Nano4mythoughts - A blog centered around Nano adoption](https://www.nano4mythoughts.com)
* [Informative Articles - Colin LeMahieu (Founder)](https://medium.com/@clemahieu)
* [Informative Articles - Bruno Garcia (Community Manager)](https://medium.com/@brunoerg)
* [Informative Articles - Audrey Helpburn (Crypto Copywriter)](https://steemit.com/@audreyhelpburn)
* [Guide: How to secure your Nano](https://medium.com/@d84/how-to-secure-your-cryptocurrency-nano-7a83b194e474)
* [Best Practices When Using a Hardware Wallet](https://medium.com/ledger-on-security-and-blockchain/ledger-101-part-3-best-practices-when-using-a-hardware-wallet-198b60df2681)
* [Frequently Asked Questions and Anti-FUD](https://wiki.nanocenter.org/index.php?title=FAQ)

#### Targeted Countries
* [Nano Venezuela 1](https://nano.org.ve/)
* [Nano Venezuela 2](http://www.nanovenezuela.org/)
* [Nano China](https://nanochina.co/)
* [Nano Brazil Facebook Group](https://www.facebook.com/groups/RaiBlocksBrasil/)

### Video Channels
* [Nano](https://www.youtube.com/channel/UCFxXo3z9k4yvxSboEEjXO2w)
* [NanoCast](https://www.youtube.com/channel/UC_KCdNCWQcb5Z4vsPBY18yQ)
* [The Nano Center](https://www.youtube.com/channel/UCwB_g6LBPGv_anMhywH4BWA)
* [Nano Blackbox](https://www.youtube.com/channel/UCehRwOEJsNb_0c6CwVSmCxw)
* [Jolt Wallet](https://www.youtube.com/channel/UCLfilzzY4NmwNjWtEIibdkA)
* [Brainblocks](https://www.youtube.com/channel/UCToyZ7QLqVX9mHWPTM8MNwg)

### Interesting Videos [Not in channels above]
* [Nano Speed Test](https://youtu.be/e7jLFroW_NE)
* [Colin LeMahieu Interview by The Crypto Lark Feb 18](https://youtu.be/hAy4GDV7tvQ)
* [Colin LeMahieu Interview by DataDash Oct 18](https://youtu.be/eWdOkIev_xM)
* [Everything you need to know about Nano](https://youtu.be/ywgMlJBli7g)
* [Nano simply explained](https://youtu.be/dlRhUwLQWXc)
* [Nano explained (Deep dive)](https://youtu.be/LcqPLlduE0w)
* [Nano explained (Another deep dive)](https://youtu.be/1ciokw6ZQvE)
* [Nano Development 2014-2018](https://youtu.be/br8tcS8gcqE)
* [Nano Development 2018](https://www.youtube.com/watch?v=FqLe12zJKEE)
* [Why Change Your Nano Representative?](https://youtu.be/dnOTiixhPrk)
* [Guide: How to setup a Nano node](https://youtu.be/k1RlrlaKOCg)
* [Guide: Get Free Nano and Share with Anyone with Zero Fees](https://youtu.be/qSsIXy-NimE)
* [Guide: How to buy NANO with Coinbase and Binance](https://youtu.be/FE5yUT4-UYk)

### Video Advertisement
* [Nano The Future of Money](https://youtu.be/lw-rpO0jqYQ)
* [Nano Overview](https://youtu.be/JynwiU2D_K0)
* [Nano is Green](https://youtu.be/JChBTohSHlM)

### Network Stats and Explorers
* [Nanode.co - Explorer, Stats](https://www.nanode.co/)
* [NanoCrawler.cc - Explorer, Stats, Account list](https://nanocrawler.cc/)
* [Nanocrawler Backup](https://explorer.nano-node.space/)
* [Nano-Faucet.org - Explorer, Stats, Map, Account list](https://nano-faucet.org/stats/)
* [Repnode.org - Explorer, Stats, Reps](https://repnode.org/)
* [Nanowatch - Explorer, Graphic Visualizer](https://nanowat.ch/)
* [My Nano Ninja - Representatives, Stats, Explorer](https://mynano.ninja/)
* [Nanoodle - Live Stat Charts](https://nanoodle.io/live)
* [Cryptolights - Flow Visualizer](https://cryptolights.info/)
* [TX Highway - Nano Vs BTC Visualizer](https://bitdesert.github.io/txhighway-nano/)
* [NanoStream - Transaction Visualizer](https://nanostream.eu/)
* [Nano fees tracker =)](http://nanofees.live/)
* [Are We Decentralized Yet](https://arewedecentralizedyet.com/)
* [Blocktivity - Utilization Comparision](https://blocktivity.info/)
* [Nano Charts - Representative stats](https://nanocharts.info/)
* [Nano SpeedTest - Test real nano transactions](https://nanospeed.live)

</div>
<div class="line"></div>
<div id="div-full" markdown="1">

## Market
Are you ready to obtain or spend some Nano? Find your market or merchant here.

### Exchanges
#### Dedicated for Nano
* [Nanex](https://nanex.co/)
* [Brainex](https://www.brainex.io/)

#### Multiple cryptos
* [Binance](https://www.binance.com)
* [KuCoin](https://www.kucoin.com)
* [OkEx](https://www.okex.com/)
* [Huobi](https://www.huobi.com/en-us/)
* [CoinFalcon](https://coinfalcon.com/)
* [Mercatox](https://mercatox.com/)
* [Bitflip](https://bitflip.li/)
* [Cryptowolf](https://cryptowolf.eu/)
* [RightBTC](https://www.rightbtc.com)
* [Bit-Z](https://www.bit-z.com/)
* [LBX](https://lbx.com)
* [Coindeal](https://coindeal.com/)
* [Gate.io](https://gate.io/)
* [Koinex](https://koinex.in/)
* [Coinbene](https://www.coinbene.com)
* [Bitinka](https://www.bitinka.com)
* [Bitladon](https://www.bitladon.com/nano)
* [Coinall](https://www.coinall.com/market?product=nano_btc)

#### Quick Crypto Swap/Buy
##### Simple way but normally a bit worse exchange rate than a large exchange and often includes fees. Use with common sense and caution. None of these sites have been vetted by NanoLinks.

* [Coingate](https://coingate.com/buy/nano)
* [N.Exchange](https://n.exchange/)
* [Swaplab](https://swaplab.cc/)
* [FastX](https://fastx.io/)
* [One Page Exchange](https://onepagex.com)
* [Cryptowolf](https://cryptowolf.eu/)
* [Coinsave](https://coinsave.io/)
* [Nanotrade.co.uk](https://nanotrade.co.uk/)
* [SimpleSwap.io](https://simpleswap.io/)
* [changeNOW.io](https://changenow.io/?to=nano)

#### Escrow and Peer-to-peer
* [Localnano](https://www.localnano.com/)
* [Localnanos](https://www.localnanos.com/)
* [PayFair](https://payfair.io/)

### Wallets
* [**Nano Wallet Company** - OSX,Win,Linux,iOS,Android](https://nanowalletcompany.com/)
* [**Canoe** - OSX,Win,Linux,iOS,Android,WinPhone](https://getcanoe.io/)
* [**Nanowallet** - Web](https://nanowallet.io/)
* [**Nanovault** - Web,Linux,Mac](https://nanovault.io/)
* [**Ninjavault** - Web](https://vault.mynano.ninja/)
* [**Nanollet** - Windows,Linux,Darwin](https://github.com/brokenbydefault/Nanollet)
* [**Nanoblocks** - iOS](https://itunes.apple.com/us/app/nano-blocks/id1378558905?ls=1&mt=8)
* [**Natrium** - Android,iOS(soon)](https://natrium.io/)

#### Address Generators, Paper Wallets
* [Nano Paper Wallet 1](https://vitorcremonez.github.io/nano-paper-wallet/)
* [Nano Paper Wallet 2](https://jelofsson.github.io/nano-paper-wallet/)
* [RaiPaper](https://blootoon.github.io/rai-paper/)
* [Rai Paper Wallet](https://numtel.github.io/rai-paper-wallet/)
* [NanoWarpWallet](https://termhn.github.io/nanowarpwallet/)
* [Dropil - Graphical Templates](https://paper.dropil.com)

### Hardware Wallets and Nodes
* [Ledger Nano S](https://www.ledger.fr/)
* [Ledger Nano - Text Guide](http://blog.nanovault.io/guides/use-your-ledger-device-with-nanovault/)
* [Ledger Nano - Video Guide](https://youtu.be/OoTfRjXsxNk)
* [Jolt](https://www.joltwallet.com/)
* [Brainblocks Pod - Hardware Node](https://nexus.brainblocks.io/store/brainblocks-pods)

### Related Mobile Apps
* [Nano Track - Nano Ticker](https://itunes.apple.com/us/app/nano-track-%24nano-price/id1324787752?mt=8)
* [Coin Stats - Multi-coin, Portfolio, Stats](https://coinstats.app/)
* [Cold Crypto - Multi-coin, Address Tracker, Balance](https://itunes.apple.com/us/app/cold-crypto-coin-tracker/id1375812090?mt=8)
* [Tradingview - Advanced Real-time Trading Tool](https://www.tradingview.com/features/)

### Market Data, Analysis & Tickers
* [Coinmarketcap](https://coinmarketcap.com/currencies/nano/)
* [Coinpaprika](https://coinpaprika.com/coin/nano-nano/)
* [Coinlore](https://www.coinlore.com/coin/nano)
* [Bitscreener](https://bitscreener.com/coins/nano)
* [CoinFYI](https://coin.fyi/coins/nano)
* [Cryptoreport](https://cryptoreport.com/nano/NANO)
* [WorldCoinIndex](https://www.worldcoinindex.com/coin/nano)
* [Cryptowat.ch - Nano/BTC Binance](https://cryptowat.ch/markets/binance/nano/btc/5m)
* [Tradingview - Nano/BTC Binance](https://www.tradingview.com/symbols/NANOBTC/)
* [Nanoticker - Price and TPS](https://nanoticker.info/)
* [Coinyep - Multi-Currencies Converter](https://coinyep.com/)
* [Livecoins - Nano/BRL/USD/BTC Converter](https://livecoins.com.br/nano-hoje-cotacao-nano/)
* [Nano/USD Converter](http://raiw.krampe.se/value.html?currency=raiblocks&to=usd&value=100)
* [Niuyan Market Data](https://niuyan.com/currencies/nano)

### Merchant & Donation Related [No shops, too many]
* [Brainblocks - Nano Payment Service](https://brainblocks.io/)
* [CoinGate - Nano Payment Service & Gateway](https://coingate.com/)
* [ArrowPay - Nano Payment Service](https://arrowpay.io/)
* [KitePay - Nano Payment Service](https://kitepay.io/)
* [Wordpress Plugin - Nano, IOTA, XLM, XRP, SEPA Payment Service](https://wordpress.org/plugins/bitvolo-trustless-crypto-payment-gateway/)
* [NanoCashier - Nano Payment Service](https://nanocashier.com/)
* [Bitback - Payment Service, Address book](https://bitback.me/)
* [NanoMate - Nano Send Service](https://nanomate.co/)
* [Nanote - Hosted Payment Forms](https://nanote.net/)
* [Nano Twitter Tip Bot - Donation service](https://nanotipbot.com/)
* [NanoTwitch - Gaming donation service](https://nanotwit.ch/)
* [UseNano - Merchant Directory](https://usenano.org/)
* [Nexus - Marketplace](https://nexus.brainblocks.io/)
* [Nanobox - Marketplace](https://nanobox.es/)
* [Eutrino - Ebay with Nano](https://eutrino.com/)
* [Nanotify - Account Notifications](https://nanotify.co/)
* [Nanotifier - Account Notifications](https://nanotifier.com/)
* [Coinbates - Crypto Cashback Service](https://www.coinbateslaunch.com/)
* [Nano Giftcard](https://jiikuy.github.io/nano-giftcard/)
* [Nanogate - Giftcards](https://nanogate.io/)
* [The Micrypto Marketplace - Hash Power Trading](https://www.micrypto.co)

### Faucets (Free Nano)
* [Nano-Faucet.org](https://nano-faucet.org/)
* [FreeNanoFaucet.com ](https://www.freenanofaucet.com/)
* [A Lil Nano](https://www.alilnano.com/)
* [NanoFaucet.org](https://www.nanofaucet.org/)
* [NanoFaucet.co](https://nanofaucet.co/)
* [GetFreeNano - Nano China](https://getfreenano.com/)
* [NanoQuake - Faucet feature](https://wiki.nanocenter.org/index.php?title=Nano_Quake)

### Point of Sale
* [Brainblocks Web PoS](https://pos.brainblocks.io/)
* [Nano Blackbox - PoS Software](https://www.nanoblackbox.net/)
* [Paytomat - Payment Service. Terminal, Web, QR, Fiat gateway](https://paytomat.com/)

</div>
<div class="line"></div>

<div id="div-full" markdown="1">

## Development
Have a great idea? Jump in and start coding. Anyone can join!
* [The Nano Center - Community Driven Projects](https://nanocenter.org/)

### Nano Main Protocol
* [Nano Source Code Main Repositories](https://github.com/nanocurrency)
* [Node Milestones](https://github.com/nanocurrency/nano-node/milestones)
* [Bug Bounty](https://hackerone.com/nano)
* [Unofficial Nano Community Wiki](https://github.com/georgehara/nano/wiki/unofficial)
* [Nanoo Tools - Unofficial Developer Wiki + Toolbox](https://nanoo.tools/)
* [Docker Repo](https://hub.docker.com/u/nanocurrency/)

### Project Specific Development Channels
* [Discord: Canoe Wallet](https://discord.gg/ecVcJM3)
* [Discord: Nanoblocks Wallet](https://discord.gg/n76DkEt)
* [Discord: My Nano Ninja](https://discord.me/nanonodeninja)
* [Discord: Brainblocks](https://discord.gg/MwaQcVM)
* [Reddit: Jolt Wallet](https://www.reddit.com/r/joltwallet)

### Node & Account Applications
* [Brainblocks](https://github.com/brainblocks)
* [Nanode.co](https://github.com/mikepaszkiewicz/nanode)
* [Nano Node Monitor](https://github.com/NanoTools/nanoNodeMonitor)
* [Nano Node Graphics - Realtime Charts](https://github.com/Joohansson/NanoNodeGraphics)
* [Nano Node Scripts](https://github.com/dbachm123/nanoNodeScripts)
* [Easy Nano Node](https://nanotools.github.io/easy-nano-node/)
* [Nano Node Docker](https://github.com/lephleg/nano-node-docker)
* [Guide - How to Setup a Node at DigitalOcean](https://1nano.co/support-the-network/)
* [Ogdolo - Crypto Address Alias](https://ogdolo.com)
* [BIP39 Demo](https://github.com/roosmaa/nano-bip39-demo)
* [Telegram Bot Source Code](https://github.com/SergiySW/NanoWalletBot)
* [Nano Vanity Generator (njakob)](https://nanoaddr.io/)
* [Nano Vanity Generator (frankh)](https://github.com/frankh/nano-vanity)
* [Nano Vanity Generator (PlasmaPower)](https://github.com/PlasmaPower/nano-vanity)
* [Nano Vanity Generator (vitorcremonez)](https://github.com/vitorcremonez/nano-vanity)
* [Raimixer - Scrambler](https://github.com/juanjux/raimixer)
* [EZNano - Mine ZCash](https://github.com/Ankonian1/EZNANO)
* [NanoStatus - Price in macOS Menu Bar](https://github.com/schenkty/nanostatus)
* [Daily Update of Nano Database - Quick Sync](https://yadi.sk/d/fcZgyES73Jzj5T)
* [Nanoodle - Account Toolbox](https://nanoodle.io/home)
* [Stylish QR Code Guide](https://www.reddit.com/r/nanocurrency/comments/8ym9cr/stylish_nano_qr_code_generator/)
* [Custom QR Generator](http://nanosign.org)
* [Nanofy - File Signing](https://nanofy.org/)
* [Nano Paywall - Pay to unlock wordpress content](https://github.com/nanoble-org/nano-paywall)
* [247 Node - Free Nano Node Domain](https://247node.net/)

### Wallets [Source Code]
* [Nano Wallet Company](https://github.com/nano-wallet-company)
* [Canoe](https://github.com/getcanoe/canoe)
* [Nanowallet Source Code](https://github.com/jaimehgb/RaiWalletV2)
* [Nanovault](https://github.com/cronoh/nanovault)
* [Nanollet](https://github.com/brokenbydefault/Nanollet)
* [Nanoblocks](https://github.com/nebyark/nano-blocks)
* [Natrium](https://github.com/BananoCoin/natrium-android-wallet)
* [Rain - Light Raiblocks Wallet](https://github.com/thehen101/Rain)
* [Nano Light Wallet - NodeJS](https://github.com/NanoDevs/NanoLightWallet)
* [Nano Light Wallet](https://github.com/numtel/open-nano-wallet)
* [Nano Paper Wallet 1](https://github.com/vitorcremonez/nano-paper-wallet)
* [Nano Paper Wallet 2](https://github.com/jelofsson/nano-paper-wallet)

### Protocol, RPC, Libraries, Tools, Servers
* [RaiSharp - C# Lib for RPC](https://github.com/vardthomas/Aggrex.RaiSharp)
* [Prailude - Nano node in Lua and C](https://github.com/slact/prailude)
* [RaiBlocksJS - JS Lib for RPC](https://github.com/orrybaram/RaiBlocksJS)
* [RaiBlocksJS 2 - JS Lib for RPC](https://github.com/SergiySW/RaiBlocksJS)
* [JS Toolkit](https://github.com/marvinroger/nanocurrency-js)
* [JNano - Java RPC Client](https://github.com/rotilho/jnano-client)
* [SwiftyRai - Swift Lib for RPC](https://github.com/xcadaverx/SwiftyRai)
* [RAI - Pythonic Lib for RPC](https://github.com/kennell/rai)
* [Python Nano Tools](https://github.com/paulmelis/nano-tools)
* [PRai - Python RPC Client](https://github.com/jxub/prai)
* [PyRai](https://github.com/icarusglider/PyRai)
* [Easyraikit - Python](https://github.com/AuliaYF/easyraikit-python)
* [Nano Python - RPC Client](https://github.com/dourvaris/nano-python)
* [NanoPy - Functions and Tools](https://github.com/nano128/nanopy)
* [Nawano - Lightweight REPL-type Python CLI wallet](https://github.com/rbw/nawano)
* [Nanio - RPC Gateway, API Browser](https://github.com/rbw/nanio)
* [Nanook - Ruby Lib for RPC](https://github.com/lukes/nanook)
* [Ruby Nano RPC - RPC Wrapper for Ruby](https://github.com/jcraigk/ruby_nano_rpc)
* [Raiblocks PHP](https://github.com/jaimehgb/RaiBlocksPHP)
* [Easy Rai Kit PHP](https://github.com/SergiySW/easyraikitphp)
* [Nano protocol in Golang](https://github.com/frankh/nano)
* [NanoDotNet - .Net Lib](https://github.com/Flufd/NanoDotNet)
* [Nano-rs - Nano in Rust](https://github.com/termhn/nano-rs)
* [Nanopow-rs-node - JS Wrapper for Nanopow-rs](https://github.com/termhn/nanopow-rs-node)
* [RainServer - Wallet/Node Communicator](https://github.com/thehen101/RainServer)
* [NanoLightServer](https://github.com/NanoDevs/NanoLightServer)
* [RaiBlocksWebAssemblyPoW](https://github.com/jaimehgb/RaiBlocksWebAssemblyPoW)
* [Nano Work Server](https://github.com/nanocurrency/nano-work-server)
* [Rai Ex - Elixir Client](https://github.com/willHol/rai_ex)
* [NanoPoW - PoW Generator in Golang](https://github.com/serdaroquai/nanopow)
* [Distributed PoW System - Python Client](https://github.com/jamescoxon/nano_distributed_pow_client)
* [Distributed PoW System - Web Client](https://nanopow.github.io/web/)
* [Distributed PoW System - Server](https://github.com/jamescoxon/nano_dpow_server)
* [Distributed PoW System - Work Server](https://github.com/guilhermelawless/dpow-work-server)
* [Distributed PoW System - Dashboard](https://distributedpow.tk/)
* [Node Raiblocks POW](https://github.com/numtel/node-raiblocks-pow)
* [Betsy - Nano/Banano PoW Middleware](https://github.com/bbedward/betsy-middleware)
* [Nano-Prettify - Format Nano Raw Amounts in JavaScript](https://github.com/kilkelly/nano-prettify)
* [Nanocap - Protocol Analyzer](https://github.com/cryptocode/nanocap)
* [Wireshark Raiblocks Dissector](https://gist.github.com/slact/63571aad31d8f445ac045391a7857ef5)

### Beta Network
* [Nano Beta Network Resources](https://beta.nano.org/)
* [Beta Net Explorer - NanoCrawler](https://beta.nanocrawler.cc/)
* [Beta Net Graph - Nanowat.ch](https://beta.nanowat.ch/graph)
* [Beta Net Stats - Nanode21](https://nanode21.cloud/testnetstats.php)
* [Beta Net TPS Monitor](https://beta.nanoticker.info)
* [Beta Net Wiki, Guide](https://github.com/NanoTools/wiki/blob/master/Beta-Network.md)

</div>
<div class="line"></div>
<div id="div-full" markdown="1">

## Entertainment
Do you have some free time? There are much fun to do but please proceed with caution.
### Gambling, Betting
* [PVP - Betting](https://pvp.me/)
* [Nano Games - Betting](https://nanogames.io/)
* [LuckyNano - Gambling](https://luckynano.com/)
* [Raffle Miner](https://www.raffleminer.com/)
* [Luckygames.io - Gambling](https://luckygames.io/)

### Games
* [NanoQuake - Quake II multiplayer](https://github.com/Nanoquake/yquake2)
* [Eternity Tower](https://eternitytower.net/)
* [Player Killers Exchange](https://playerkillers.exchange)

### Video, Music, Art
* [The Nanoji Generator](https://www.nanojigenerator.com/)
* [Nano Wallpapers](https://www.nano-wallpapers.com/)

## Services
* [Put.io - File Serving](https://put.io)
* [Wall of Nano](https://wallofnano.com/)

</div>
<div class="line"></div>

## Contribution
Want to add a link to your own project or you found something else? Just clone repo at [Github](https://github.com/Joohansson/nanolinks) , edit index.md and make a pull request. You can also contact me at [Reddit](https://www.reddit.com/user/Joohansson/).
<br><br>
**You can also fill in form below to send a link submission. Your email will only be used in case of contact, not on the site or shared in any way. All content will be evaluated.**
<br>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div id="contact-area">
	<form accept-charset="UTF-8" action="https://usebasin.com/f/716ec11da426" enctype="multipart/form-data" method="POST">
	<label for="email">Your Email</label>
	<input type="email" id="email" name="Email" required>
	<br>
	<label for="url">Link URL</label>
	<input type="url" id="url" name="URL" required>
	<br>
	<label for="display-name">Display Name</label>
	<input type="text" id="display-name" name="Display name" required>
	<br>
	<label for="description">Description</label>
	<textarea rows="4" cols="50" id="description" name="Description" required></textarea>
	<br>
	<div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy">
	</div>
	<br>
	<button type="submit" class="site-btn">Submit Link</button>
  </form>
</div>
<br>


### Voting Representative
<div class="first-para" markdown="1">
If you have a nano account you can help decentralize the network by choosing a representative other than the official reps that is default. Best is to choose someone you really trust. If you want you can choose [This Node](https://nanonode.ninja/account/xrb_1iuz18n4g4wfp9gf7p1s8qkygxw7wx9qfjq6a9aq68uyrdnningdcjontgar) that has been running 24/7 since Feb 2018. I intend to keep it running for a long time and upgrade hardware when necessary! Graphical stats of this monitor [here](https://node.nanolinks.info/nano.html).

[Video about reps and why it matters](https://youtu.be/dnOTiixhPrk)
</div>

### Donations
<div class="first-para" markdown="1">
Maintaining this content requires some effort. If you want to contribute to this cause then any small donation is greatly appreciated!
<br>
</div>
<figure>
	<img id="qrImage" src="https://raw.githubusercontent.com/Joohansson/nanolinks/master/src/qr_new.png" alt="Nano Donation" />
	<br><figcaption class="subtext">xrb_1gur37mt5cawjg5844bmpg8upo4hbgnbbuwcerdobqoeny4ewoqshowfakfo</figcaption>
</figure>

<div class="line"></div>

<img id="bottom-logo" src="https://raw.githubusercontent.com/Joohansson/nanolinks/master/src/nanolinks_simple.png" alt="NanoLinks" />

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="src/index.js"></script>

<!-- Track link submissions -->
<script src="https://usebasin.com/f/716ec11da426/ahoy.js" async defer></script>
