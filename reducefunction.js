const URLData = "https://restcountries.com/v3.1/all";
const req = new XMLHttpRequest();
req.addEventListener("load",function(){
    const data=JSON.parse(this.response)
    const totalPopulation = data.reduce((val1, val2) => val1 + val2.population,0);
console.log(totalPopulation,"total populations");
const usDollar = data.filter((country) => {
    const currencies = country.currencies;
    return currencies && currencies.USD;
  });

console.log(usDollar);
});
req.open("GET",URLData);
req.send();