const URL = "https://restcountries.com/v3.1/all";
const req = new XMLHttpRequest();
req.addEventListener("load",function(){
    const data=JSON.parse(this.response)
  data.filter((val) => console.log(val.continents))
 let populations= data.filter((obj)=>{ if(obj.population<200000) return obj.population })
 populations.filter((val)=> console.log(val.population,val.region))
});
req.open("GET",URL);
req.send();