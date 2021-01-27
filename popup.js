
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;

let websites = [], urls = [];

let jarirURL = "https://www.jarir.com/sa-en/catalogsearch/result/?order=priority&dir=asc&q=";
let noonURL = "https://www.noon.com/saudi-en/search?q=";
let aswaqURL = "https://www.aswaq.com/en/search/?market=0&q=";
let namshiURL = "https://en-sa.namshi.com/catalog/?q=";
let aliExpressURL = "https://ar.aliexpress.com/premium/iphone.html?d=y&origin=y&catId=0&initiative_id=SB_20201204141855&SearchText=";
let jollyChicURL = "https://www.jollychic.com/s/";
let amazonURL = "https://www.amazon.sa/s?k=";

let amazon = addWebsite("amazon", amazonURL);
let jarir = addWebsite("jarir", jarirURL)
let noon = addWebsite("noon", noonURL)
let aswaq = addWebsite("aswaq", aswaqURL)
let namshi = addWebsite("namshi", namshiURL)
let aliExpress = addWebsite("aliExpress", aliExpressURL)
let jollyChic = addWebsite("jollyChic", jollyChicURL)

let urlSearch = "";
// Add Event Listener to each website in popup.html 
for (var i = 0; i < websites.length; i++) {
  (function(index) {
    document.getElementById(websites[index].id).addEventListener("click", function() {
      console.log("you clicked region number " + websites[index].id);
      urlSearch = websites[index].url + word;
      chrome.tabs.create({url:urlSearch, active: false})
      console.log(urlSearch)
    })
  })(i);
}

function addWebsite(websiteID, websiteURL){
  let website = {
    id: websiteID,
    url: websiteURL
  }
  websites.push(website)
  urls.push(websiteURL)
  return website
}


