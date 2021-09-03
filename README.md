# test 
the table from https://portal.mvp.bafin.de/database/DealingsInfo/sucheForm.do?meldepflichtigerName=&zeitraum=2&emittentButton=Search%20for%20issuer&emittentName=&zeitraumVon=&emittentIsin=&zeitraumBis=&locale=en_GB 
is added to the grab.js file via puppeteer.js(node webscraper). afterwards the json should go into index.js "ajax":


the code in grab.js kind of works(command: node grab.js) but some things are missing:
- dont include the rows of BaFin-ID & Date of activation & include price and volume(you can see these categories when you click twice on the name category and then its in 4 c))
- render the data from grab.js as json into index.js "ajax":


P.S You can see the data-changes directly here, once you pushed the updates to github: https://quizzical-hodgkin-9649e6.netlify.app/





