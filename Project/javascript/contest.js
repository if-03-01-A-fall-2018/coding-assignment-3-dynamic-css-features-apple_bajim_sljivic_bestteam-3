var pics= [];

window.onload = function (){
  readJson();
  loadPictures();
}



function parse(json){
  for (var i = 0; i < json.length; i++) {
    var newPic = "{ \"path\": \""+ json[i].path +", \"model\": \""+ json[i].model +"\",\"description\": \""+ json[i].description +"\",\"likes\": " + json[i].likes + ",\"dislikes\": " + json[i].dislikes + ",\"liked\": " + json[i].liked + " , disliked \":" + json[i].disliked "+ ",\"aproved\": + json[i].aproved +",\"firstName\": \""+json[i].firstName+"\",\"lastName\": \""+ json[i].lastName +"\"}";
    console.log(newPic);
    pics[i]=JSON.parse(newPic);
  }
}

function readJson(){

  fetch('http://localhost:3000/submition')
     .then(response => {
         if (!response.ok) {
             throw new Error("HTTP error " + response.status);
         }
         return response.json();
     })
     .then(json => {
         parse(json);
     })
     .catch(function () {
         this.dataError = true;
     });
}

function getLenghtOfAproved(){
  var count=0;
  for (var i = 0; i < pics.length; i++) {
    if(pics[i].aproved)
    {
      count++;
    }
  }
  return count;
}

function getAprovedArray(){
  var aproved=new Array(getLenghtOfAproved());
  var index=0;

  for (var i = 0; i < pics.length; i++) {
    if(pics[i].aproved)
    {
      aproved[index]=pics[i];
      index++;
    }
  }
  return aproved;
}


function likepic(i){
  var pictures=getAprovedArray();

  if(!pictures[i].liked)
  {
    pictures[i].liked=true;
    document.getElementById("like"+i).style.color="#29b23d";
    if(pictures[i].disliked)
    {
      document.getElementById("dislike"+i).style.color="#000";
      pictures[i].disliked=false;
    }
  }

  else{
    document.getElementById("like"+i).style.color="#000";
    pictures[i].liked=false;
  }
}

function dblikepic(i){
  var pictures=getAprovedArray();

  if(!pictures[i].liked)
  {
    pictures[i].liked=true;
    document.getElementById("like"+i).style.color="#29b23d";
    if(pictures[i].disliked)
    {
      document.getElementById("dislike"+i).style.color="#000";
      pictures[i].disliked=false;
    }
  }
}

function dislikepic(i){
  var pictures=getAprovedArray();

  if(!pictures[i].disliked)
  {
    pictures[i].disliked=true;
    document.getElementById("dislike"+i).style.color="#db2727";
    if(pictures[i].liked)
    {
      document.getElementById("like"+i).style.color="#000";
      pictures[i].liked=false;
    }
  }
  else {
    document.getElementById("dislike"+i).style.color="#000";
    pictures[i].disliked=false;
  }
}


function loadPictures(){
  var pictures=getAprovedArray();
  var section = document.getElementById("gallery");
  var text='';

  for (var i = 0; i < pictures.length; i++) {
      text+= "<section class=\"card\"> <img ondblclick=\"dblikepic("+i+")\" class=\"card-img-top img-fluid\" src=\""+ pictures[i].path +"\"> <i id=\"like"+ i +"\" class=\"center heart fas fa-heart\" onclick=\"likepic("+ i +")\"></i> <i id=\"dislike"+ i +"\"  class=\"center crossmark fas fa-times\" onclick=\"dislikepic("+ i +")\"></i> <p class=\"center likes\">"+ pictures[i].likes +"</p> <p class=\"center dislikes\">"+ pictures[i].likes +"</p> <p class=\"model center\">"+ pictures[i].model+"</p><p class=\"description center\">"+ pictures[i].description +"</p></section>";
  }


  section.innerHTML=text;
}

function showList(){

  document.getElementById('list').style.cssText='display: block !important';
  if(document.getElementById('password').value=="Emina")
  {
    var section = document.getElementById('list');
    var text='';
    document.getElementById('gallery').style.cssText='display: none !important';
    document.getElementById('submition').style.cssText='display: none !important';
    for (var i = 0; i < pics.length; i++) {
      text+="<article class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark text-white\"><img src=\""+pics[i].path+"\" class=\"littlepics\"> <p class=\"description\">First name: "+ pics[i].firstName + "</p> <p class=\"description\">Last name: "+ pics[i].lastName+"</p> <p class=\"description\">model: "+ pics[i].model +"</p> <p class=\"description\">Description: "+ pics[i].description +"</p>";

      if(pics[i].aproved){
          text+="<input id=\"aproved\" type=\"checkbox\" checked onclick=(changeValue("+ i +"))> <label class=\"description\" for=\"aproved\">Aproved</label></article>";
      }

      else {
        text+="<input id=\"aproved\" type=\"checkbox\" onclick=(changeValue("+ i +"))> <label for=\"aproved\" class=\"description\">Aproved</label></article>";

      }
    }

    section.innerHTML=text;
  }

}

function changeValue(i){
  if(pics[i].aproved)
  {
    pics[i].aproved=false;
  }

  else {
    pics[i].aproved=true;
  }
}

function goBack(){
  document.getElementsByClassName('password')[0].value='';
  document.getElementById('list').style.cssText='display: none !important';
  document.getElementById('gallery').style.cssText='display: block !important';
  document.getElementById('submition').style.cssText='display: block !important';
  loadPictures();
}
