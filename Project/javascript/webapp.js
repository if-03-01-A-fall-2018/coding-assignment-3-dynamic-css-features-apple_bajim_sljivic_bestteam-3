var products;
var deleted1=false;
var deleted2=false;

function readJson(){
  fetch('http://cfg.wllgrsrv.cf/json/'+document.getElementById("Products").value)
     .then(response => {
         if (!response.ok) {
             throw new Error("HTTP error " + response.status);
         }
         return response.json();
     })
     .then(json => {
         products=json;
         hideSelect();
     })
     .catch(function () {
         this.dataError = true;
     });
}

function hideSelect() {
  var selectedIndex=document.getElementById("Products").selectedIndex-1;
  if(selectedIndex!==-1)
  {
    document.getElementById("selectProduct").style.cssText='display: none !important';
    for(i = 0; i < products.length; i++) {
      document.getElementById('model1').options[document.getElementById('model1').options.length] = new Option( products[i].model, i);
    }
    for(i = 0; i < products.length; i++) {
      document.getElementById('model2').options[document.getElementById('model2').options.length] = new Option( products[i].model, i);
    }
    document.getElementById("iPhoneSelction").style.cssText = 'display:flex !important';
  }
}

function showFacts(select){
  var selectedIndex=document.getElementById("Products").selectedIndex-1;
  var selectedModel=document.getElementById('model'+select).selectedIndex+1;
  var facts=document.getElementById('facts'+select);
  if(selectedModel!==0)
  {
    if(deleted1==false && select==1)
    {
      document.getElementById('model'+select).remove(0);
      selectedModel=selectedModel-1;
      deleted1=true;
    }
    if(deleted2==false && select==2)
    {
      document.getElementById('model'+select).remove(0);

      selectedModel=selectedModel-1;
      deleted2=true;
    }
    document.getElementById('header'+select).innerHTML=products[selectedModel].model;
    var out="";

console.log(products[selectedModel]);
    if(selectedIndex==0)
    {
    out +=  '</br><b>' + products[selectedModel].dimensions + '</b></br><sup>Dimensions</sup></br><b>' + products[selectedModel].ram + '</b></br><sup>Ram</sup></br><b>' + products[selectedModel].internalStoage + '</b></br><sup>Internal Stoage</sup></br><b>' + products[selectedModel].colors + '</b></br><sup>Colors</sup></br><b>' + products[selectedModel].display + '</b></br><sup>Display</sup></br><b>' + products[selectedModel].camera + '</b></br><sup>Camera</sup></br><b>' + products[selectedModel].frontCamera + '</b></br><sup>Front Camera</sup></br><b>' + products[selectedModel].releaseDate + '</b></br><sup>Realese Date</sup></br>';
    }
    if(selectedIndex==1)
    {
    out += '</br><b>' + products[selectedModel].dispaly + '</b></br><sup>Display</sup></br><b>' + products[selectedModel].batteryRuntime + '</b></br><sup>Battery Runtime</sup></br><b>' + products[selectedModel].weight + '</b></br><sup>Weight</sup></br><b>' + products[selectedModel].storage + '</b></br><sup>Stroage</sup></br><b>' + products[selectedModel].equipment + '</b></br><sup>Equipement</sup></br>';
    }
    if(selectedIndex==2)
    {
    out += '</br><b>' + products[selectedModel].cpu + '</b></br><sup>CPU</sup></br><b>' + products[selectedModel].storage + '</b></br><sup>Storage</sup></br><b>' + products[selectedModel].color + '</b></br><sup>Color</sup></br><b>' + products[selectedModel].ram + '</b></br><sup>RAM</sup></br>';
    }
    if(selectedIndex==3)
    {
      out += '</br><b>' + products[selectedModel].cpu + '</b></br><sup>CPU</sup></br><b>' + products[selectedModel].storage + '</b></br><sup>Storage</sup></br><b>' + products[selectedModel].variations + '</b></br><sup>Variations</sup></br><b>' + products[selectedModel].ram + '</b></br><sup>RAM</sup></br><b>'+ products[selectedModel].wifi + '</b></br><sup>Wifi</sup></br>';
    }
    if(selectedIndex==4)
    {
      out += '</br><b>' + products[selectedModel].year + '</b></br><sup>Year</sup></br><b>' + products[selectedModel].internalStorage + '</b></br><sup>Internal Storage</sup></br><b>' + products[selectedModel].cpu + '</b></br><sup>CPU</sup></br><b>' + products[selectedModel].ram + '</b></br><sup>RAM</sup></br><b>'+ products[selectedModel].display + '</b></br><sup>Display</sup></br><b>'+ products[selectedModel].display + '</b></br><sup>Display</sup></br><b>'+ products[selectedModel].wifi + '</b></br><sup>Wifi</sup></br><b>';
    }
    facts.innerHTML=out;
  }
}
