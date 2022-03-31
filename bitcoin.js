// const getPrice = () => {
//     fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))
// };

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function getPrice(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}


getPrice();
console.log("hi")
