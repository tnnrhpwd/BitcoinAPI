const getPrice = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(data => data.json())
    .then(data => console.log(data))
};

getPrice();
console.log("hi")
