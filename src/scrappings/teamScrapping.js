import puppeteer from "puppeteer";

const mySearch = "brasileirao+2023";  // Faça sua pesquisa por ex: brasileirao 2023 => brasileirao+2023

const scrap = async function (mySearch) {

    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto(
        `https://www.google.com/search?q=${mySearch}`
    );

    const standings = "[data-tab_type='STANDINGS']";

    await page.waitForSelector(standings);
    await page.click(standings);

    await page.waitForSelector(".fbf28d.B1pJhb.e9fBA.fI7lFd.n1i1Xc.tcwpB span");

    const teams = await page.$$eval(".fbf28d.B1pJhb.e9fBA.fI7lFd.n1i1Xc.tcwpB span", Teams => {
        return Teams.map(team => team.innerHTML);
    });

    const dataTeams = await page.$$eval("td.xkW0Cc.snctkc.e9fBA div", arr => {
        return arr.map(el => el.innerText);
    });

    const validTable = (value) => {
        let response = false;

        if (value != '' && value != 'Partida mais recente') {
            response = true;
        };

        return response;
    };

    const preTable = dataTeams.filter(validTable);

    const organizedTable = teams.map( function (el, i) {
        let size = 13;
        let piece = preTable.slice(i*size, i*size + size);
        let _ = [el];
    
        piece.forEach(el => _.push(el))

        return _
    });

    const table = organizedTable.map(el => {
        const obj = {
            name: el[0],
            pts: el[1],
            matchPlayed: el[2],
            wins: el[3],
            draws: el[4],
            losses: el[5],
            goalsScored: el[6],
            goalsAgainst: el[7],
            goalDifference: el[8],
            lastMatches: el.slice(9)
        };

        return obj;
        // return JSON.stringify(obj);
    })
    
    console.log(table.slice(3, 4));
    await browser.close();
};


scrap(mySearch);