var products;
var deleted1=false;
var deleted2=false;

function readJson(){
  fetch('http://localhost:3000/'+document.getElementById("Products").value)
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

    out += products[selectedModel].model + '</br>' + products[selectedModel].dimensions + '</br>' + products[selectedModel].ram + '</br>' + products[selectedModel].internalStoage + '</br>' + products[selectedModel].colors + '</br>' + products[selectedModel].display + '</br>' + products[selectedModel].camera + '</br>' + products[selectedModel].frontCamera + '</br>' + products[selectedModel].releaseDate + '</br>';
    facts.innerHTML=out;
  }
}
