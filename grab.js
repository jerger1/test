const puppeteer = require('puppeteer');
  function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://portal.mvp.bafin.de/database/DealingsInfo/sucheForm.do?meldepflichtigerName=&zeitraum=2&emittentButton=Search%20for%20issuer&emittentName=&zeitraumVon=&emittentIsin=&zeitraumBis=&locale=en_GB", { waitUntil: 'networkidle2' });
            
            let urls = await page.evaluate(() => {
                var myTableArray = [];

$("table#emittent tr").each(function() {
    var arrayOfThisRow = [];
    var tableData = $(this).find('td');
    if (tableData.length > 0) {
        tableData.each(function() { arrayOfThisRow.push($(this).text().trim()); });
        myTableArray.push(arrayOfThisRow);
    }
});
return myTableArray; 
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);


