var up1=0;
var down1=0;
var like=false;
var dislike=false;

var pics=[{
    path: "../../images/other/image2.jpeg",
    modle: "Iphone7",
    description: "is toll",
    likes:0,
    dislike:0,
    liked:false,
    disliked:false,
    aproved:true,
    firstName: "Emina",
    lastName: "Sljivic",
  },
  {
        path: "../../images/other/image1.jpeg",
        modle: "Nadia",
        description: "is toll",
        likes:0,
        dislike:0,
        liked:false,
        disliked:false,
        aproved:true,
        firstName: "Nadia",
        lastName: "Bajim",
    },
    {
          path: "../../images/other/image1.jpeg",
          modle: "Nadia2",
          description: "is toll",
          likes:0,
          dislike:0,
          liked:false,
          disliked:false,
          aproved:false,
          firstName: "Selma",
          lastName: "Bacinovic",
      },
]

window.onload = function (){
  loadPictures();
  var left =  document.getElementsByClassName('left')[0].offsetLeft + document.getElementById('margin').offsetWidth;
  var right =  document.getElementsByClassName('right')[0].offsetLeft +document.getElementById('margin').offsetWidth;
  var a = left-20 ;
  var b = right + 40;
  var c = left - 35;
  var d = right +60;
  document.getElementById('vote1').style.cssText='left:' + a +'px!important;';
  document.getElementById('vote2').style.cssText='left:' + b +'px!important;';
  document.getElementById('thumbs-up').style.cssText='left:' + c +'px!important;';
  document.getElementById('thumbs-down').style.cssText='left:' + d +'px!important;';


}

window.onresize = function (){
  var left =  document.getElementsByClassName('left')[0].offsetLeft + document.getElementById('margin').offsetWidth;
  var right =  document.getElementsByClassName('right')[0].offsetLeft +document.getElementById('margin').offsetWidth;
  var a = left-20 ;
  var b = right + 40;
  var c = left - 35;
  var d = right +60;
  document.getElementById('vote1').style.cssText='left:' + a +'px!important;';
  document.getElementById('vote2').style.cssText='left:' + b +'px!important;';
  document.getElementById('thumbs-up').style.cssText='left:' + c +'px!important;';
  document.getElementById('thumbs-down').style.cssText='left:' + d +'px!important;';

}

$('#Carousel').on('slide.bs.carousel', function (ev) {
  var id = ev.relatedTarget.id;

  document.getElementById('thumbs-up').innerHTML=pics[id].likes;

    document.getElementById('thumbs-down').innerHTML=pics[id].dislike;

})

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

function loadPictures(){
  pictures=getAprovedArray();
  var section = document.getElementsByClassName("carousel-inner");
  var text="<div class=\"carousel-item active\"> <img src=\""+pictures[0].path +"\" width=\"100%\"> <div class=\"carousel-caption\"> <h3>" + pictures[0].modle +"</h3> <p>"+pictures[0].description+"</p></div></div>";

  for (var i = 1; i < pictures.length; i++) {
      text+="<div class=\"carousel-item\"> <img src=\""+pictures[i].path +"\" width=\"100%\"> <div class=\"carousel-caption\"> <h3>" + pictures[i].modle +"</h3> <p>"+pictures[i].description+"</p></div></div>";
  }
  section[0].innerHTML=text;

  section=document.getElementsByClassName("carousel-indicators");
  text="<li class=\"left\" data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>";

  if(pictures.length==1)
  {
    text="<li class=\"left right\" data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>";
  }

  for (var i = 1; i < pictures.length; i++) {
    if(i==pictures.length-1)
    {
        text+="<li class=\"right\" data-target=\"#demo\" data-slide-to=\""+i+"\" class=\"active\"></li>";
    }
    else{
        text+="<li data-target=\"#demo\" data-slide-to=\""+ i + "\"></li>";
    }
  }
  section[0].innerHTML=text;
}

function up(){
  if(like===false && dislike===false)
  {
    like=true;
    document.getElementById('vote1').style.color="#32CD32";
    document.getElementById('thumbs-up').style.color="#32CD32";
    up1++;
    document.getElementById('thumbs-up').innerHTML=up1;

  }
  if(like===false && dislike===true)
  {
    like=true;
    dislike=false;
    document.getElementById('vote2').style.color="#fff";
    document.getElementById('thumbs-down').style.color="#fff";
    down1--;
    document.getElementById('thumbs-down').innerHTML=down1;
    like=true;
    document.getElementById('vote1').style.color="#32CD32";
    document.getElementById('thumbs-up').style.color="#32CD32";
    up1++;
    document.getElementById('thumbs-up').innerHTML=up1;
  }
}

function showList(){

  document.getElementById('list').style.cssText='display: block !important';
  if(document.getElementById('password').value=="Emina")
  {
    var section = document.getElementById('list');
    var text='';
    document.getElementById('demo').style.cssText='display: none !important';
    document.getElementById('submition').style.cssText='display: none !important';
    for (var i = 0; i < pics.length; i++) {
      text+="<article class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark text-white\"><img src=\""+pics[i].path+"\" class=\"littlepics\"> <p class=\"description\">First name: "+ pics[i].firstName + "</p> <p class=\"description\">Last name: "+ pics[i].lastName+"</p> <p class=\"description\">Modle: "+ pics[i].modle +"</p> <p class=\"description\">Description: "+ pics[i].description +"</p>";

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
  document.getElementById('demo').style.cssText='display: block !important';
  document.getElementById('submition').style.cssText='display: block !important';
  loadPictures();
  var left =  document.getElementsByClassName('left')[0].offsetLeft + document.getElementById('margin').offsetWidth;
  var right =  document.getElementsByClassName('right')[0].offsetLeft +document.getElementById('margin').offsetWidth;
  var a = left-20 ;
  var b = right + 40;
  var c = left - 35;
  var d = right +60;
  document.getElementById('vote1').style.cssText='left:' + a +'px!important;';
  document.getElementById('vote2').style.cssText='left:' + b +'px!important;';
  document.getElementById('thumbs-up').style.cssText='left:' + c +'px!important;';
  document.getElementById('thumbs-down').style.cssText='left:' + d +'px!important;';
}

function down(){
  if(dislike===false && like===false)
  {
    dislike=true;
    document.getElementById('vote2').style.color="#FF0000";
    document.getElementById('thumbs-down').style.color="#FF0000";
    down1++;
    document.getElementById('thumbs-down').innerHTML=down1;
  }if(dislike===false && like===true)
  {
    dislike=true;
    like=false;
    document.getElementById('vote1').style.color="#fff";
    document.getElementById('thumbs-up').style.color="#fff";
    up1--;
    document.getElementById('thumbs-up').innerHTML=up1;
    document.getElementById('vote2').style.color="#FF0000";
    document.getElementById('thumbs-down').style.color="#FF0000";
    down1++;
    document.getElementById('thumbs-down').innerHTML=down1;
  }
}
