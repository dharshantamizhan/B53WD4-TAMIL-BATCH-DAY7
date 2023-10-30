const URLData = "https://restcountries.com/v3.1/all";
const req = new XMLHttpRequest();
req.addEventListener("load",function(){
    const data=JSON.parse(this.response)
    data.forEach((element) => console.log(element.name,element.capital,element.flags));

});
req.open("GET",URLData);
req.send();