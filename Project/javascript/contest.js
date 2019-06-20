

function readJson(){

  fetch('http://localhost:3000/submition')
     .then(response => {
         return response.json();
     })
     .then(json => {
         pics=json;
         loadPictures();
     });
}

function reset(){
  var input = $("#file");

  input.replaceWith(input.val('').clone(true));
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
      text+= "<section class=\"card\"> <img ondblclick=\"dblikepic("+i+")\" class=\"card-img-top img-fluid\" src=\""+ pictures[i].path +"\"> <i id=\"like"+ i +"\" class=\"center heart fas fa-heart\" onclick=\"likepic("+ i +")\"></i> <i id=\"dislike"+ i +"\"  class=\"center crossmark fas fa-times\" onclick=\"dislikepic("+ i +")\"></i> <p class=\" likes\">"+ pictures[i].likes +"</p> <p class=\" dislikes\">"+ pictures[i].likes +"</p> <p class=\"model\">"+ pictures[i].model+"</p><p class=\"description\">"+ pictures[i].description +"</p></section>";
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


var pics;

function Post(firstName, lastName, description, model, file, likes, dislikes, aproved) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.description = description;
  this.model = model;
  this.file = file;
  this.likes = likes;
  this.dislikes = dislikes;
  this.aproved = aproved;
}

window.onload = function (){
  readJson();
  loadPhones();
}

function show(){
  var phones;
  fetch('http://localhost:3000/handymodels')
     .then(response => {
         return response.json();
     })
     .then(json => {
       if(document.getElementById("model").selectedIndex==0)
       {
         document.getElementById("model2").style.cssText = 'display:none';
       }
       else{

       document.getElementById('model2').options.length=1;
       document.getElementById("model2").style.cssText = 'display:flex !important; margin:0 0 1rem 0!important';
         phones=json[0];
         phones=phones[Object.getOwnPropertyNames(phones)[document.getElementById("model").selectedIndex-1]];

         for (var i = 0; i < phones.length; i++) {
           document.getElementById('model2').options[document.getElementById('model2').options.length] = new Option( phones[i],phones[i]);
         }
       }
     });

}

function loadPhones(){
  var phones;
  fetch('http://localhost:3000/handymodels')
     .then(response => {
         return response.json();
     })
     .then(json => {
         phones=json[0];

         for (var i = 0; i < 2; i++) {
           document.getElementById('model').options[document.getElementById('model').options.length] = new Option( Object.getOwnPropertyNames(phones)[i]);
         }
     });


}

function submitnow(){
  if(document.getElementById('firstName').value=="")
  {
    document.getElementById('firstName').classList.add("is-invalid");
  }
  else {
    document.getElementById('firstName').classList.remove("is-invalid");
  }
  if(document.getElementById('lastName').value=="")
  {
    document.getElementById('lastName').classList.add("is-invalid");
  }
  else {
    document.getElementById('lastName').classList.remove("is-invalid");
  }
  if(document.getElementById('description').value=="")
  {
    document.getElementById('description').classList.add("is-invalid");
  }
  else {
    document.getElementById('description').classList.remove("is-invalid");
  }
  if(document.getElementById('model').value=="")
  {
    document.getElementById('model').classList.add("is-invalid");
  }
  else {
    document.getElementById('model').classList.remove("is-invalid");
  }
  if(document.getElementById('file').value=="")
  {
    document.getElementById('file').classList.add("is-invalid");
  }
  else {
    document.getElementById('file').classList.remove("is-invalid");
  }

  if(document.getElementById('model2').value=="")
  {
    document.getElementById('model2').classList.add("is-invalid");
  }
  else {
    document.getElementById('model2').classList.remove("is-invalid");
  }

  if (document.getElementById('firstName').value!="" && document.getElementById('lastName').value!="" && document.getElementById('description').value!="" && document.getElementById('model').value!="" && document.getElementById('file').value!="") {
      var file = document.getElementById("file").files[0];
      var reader = new FileReader();
      console.log("pl");
      reader.onload=function(event)
      {
        console.log("");
        var newPost=new Post(document.getElementById('firstName').value,document.getElementById('lastName').value,document.getElementById('description').value,document.getElementById('model2').value,event.target.result,0,0,false);
        console.log(newPost);
        fetch('http://localhost:3000/submition', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

    }

    reader.readAsDataURL(file);
  }
}
