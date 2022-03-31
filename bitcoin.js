const url = "https://api.coindesk.com/v1/bpi/currentprice.json";        // Initialize the API URL
let priceSpace= document.getElementById("price");                       // Initialize the price HTML ID variable
let price;                                                              // Initialize the price string variable 

// returns float of bitcoin price
async function getPrice(){                                              // Async function(waits for data to execute) that returns the price of Bitcoin
    const response = await fetch(url);                                  // fetch json
    const data = await response.json();                                 // assign json to variable
    //price = (data.bpi.USD.rate);                                        // assign the price string to variable
    publishPrice((data.bpi.USD.rate_float.toFixed(2)));

}

// function that outputs its input to the html page
function publishPrice(prc){
    priceSpace.innerHTML = `<div>`+"$ "+prc+`</div>`; // ID price section
}

getPrice();