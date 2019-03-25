var lastYear='1976';

function showYear(obj, id){
  document.getElementById(lastYear).style.cssText='display: none !important';
  document.getElementById(id).style.cssText='display: block !important';
  var margin =  document.getElementById(obj).offsetLeft-5;
  document.getElementById('triangleYear').style.cssText='margin-left:' + margin +'px!important; display: block !important';
  lastYear=id;
}

function hoverYear(obj, text){
  document.getElementById('hoverText').innerHTML = text;
  var margin =  document.getElementById(obj).offsetLeft-15;
  document.getElementById('hoverYear').style.cssText='margin-left:' + margin +'px!important; display: block !important';
}

function hideYear() {
  document.getElementById('hoverYear').style.cssText='display: none !important';
}
