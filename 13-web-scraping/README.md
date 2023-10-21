# Web Scraping

Web scraper is taking a website and sort of parsing it into data that you can use, like machine readable data, like titles, images, not something for humans to consume. So inherently we are taking things from a format that's not meant for computers and trying to pass it into a computer. 

Before you even start to make a web scraper for a site, you should always check if the site has an **API** that you can use instead. That goes either by a totally public API that site is advertising that you can use, or if you do a little like reverse engineering on the site's source, then you get to a API that you can use.  

The order of things that you should try to do;
1. It is always to try to get an API.
2. If you can't get an API from the site, if it doesn't have an API, not event if you look inside of the source of the website, then try and go for using request only. 
3. Then use web scraping.

> If you can't get an API, go for request because request is using a lot less resources that puppeteer or something like nightmareJS, selenium and so on and solutions like automated browsers, like puppeter, selenium, nighmareJS and so on. They are using a lot of CPU, a lot of memory. They are prone to crashing. It's a lot more complex than using request.

However if you have a site, that doesn't have a public API you can access right away or it is not easy for you to reverse engineer how to use the API and the site requires JavaScript to render, which means you can't use request because request doesn't have a JS rendering enabled, it is just fetching the data on the URL. Then the last option is to use an automated browser such as puppeteer.

## Intro to CSS Selectors

```js
const h1Element = document.querySelector("h1") // Takes first h1
```

We use jQuery selectors instead of these vanilla JS selectors. So jQuery is a library for JS that was quite popular some years ago. Not it's not so populat because we have things like React for making web apps, but we can still use jQuery to select elements and it's quite handy to do that compared to using vanilla JS selectors.

There is a chrome extension that called **jQuery Injector**. With it we can simply type in a dolar sign and then put in my CSS selector, which is going to be `h1`. Then you can put in a dot text to get the text from this element.

```js
$("h1").textContent // Is is easier from vanilla JS.
```

### Multiple Selectors

```js
$("h2").each((index, element) => console.log($(element).text()))
$("#red").text()
$(".red").each(element => console.log($(element).text()))
$("[data-customer='22293']").text()
```

### HTML Tables

When you are inspecting the site with developer tools, you can copy with selectors an any element an it gives you it's path.

```css
body > table > tbody > tr:nth-child(2) > td:nth-child(3)
```

We can select it with jQuery:

```js
$("body > table > tbody > tr:nth-child(2) > td:nth-child(3)").text()
// 'Mexico'
```

And we can take all items in one:

```js
$("body > table > tbody > tr > td").text()
// 'Alfred FutterkisteMaria AndersGermanyBerglunds snabbköpChristina BerglundSwedenCentro comercial MoctezumaFrancisco ChangMexicoErnst HandelRoland MendelAustriaIsland TradingHelen BennettUK'
```

We can modify the data with our functions as well:

```js
$("body > table > tbody > tr > td").each((index, element) => {
  console.log($(element).text())
})
```

## Scraping on Craigslist using Puppeteer

### <a href="https://sfbay.craigslist.org">What data are we scraping?</a>

