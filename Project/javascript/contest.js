var up1=0;
var down1=0;
var like=false;
var dislike=false;

var pics=[{
      path: "../../images/other/image1.jpeg",
      title: "Nadia",
      subtitle: "is toll",
      likes:0,
      dislike:0,
      liked:false,
      disliked:false,
  },
  {
        path: "../../images/other/image1.jpeg",
        title: "Nadia",
        subtitle: "is toll",
        likes:0,
        dislike:0,
        liked:false,
        disliked:false,
    },
    {
          path: "../../images/other/image1.jpeg",
          title: "Nadia",
          subtitle: "is toll",
          likes:0,
          dislike:0,
          liked:false,
          disliked:false,
      },
  {
      path: "../../images/other/image2.jpeg",
      title: "Emina",
      subtitle: "is toll",
      likes:0,
      dislike:0,
      liked:false,
      disliked:false,
  },
]

window.onload = function (){

    loadPictures();
  var left =  document.getElementById('left').offsetLeft + document.getElementById('margin').offsetWidth;
  var right =  document.getElementById('right').offsetLeft +document.getElementById('margin').offsetWidth;
  console.log(document.getElementById('margin').offsetWidth);
  console.log(right);
  console.log(left);
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

function loadPictures(){
  var section = document.getElementsByClassName("carousel-inner");
  var text="<div class=\"carousel-item active\"> <img src=\""+pics[0].path +"\" width=\"100%\"> <div class=\"carousel-caption\"> <h3>" + pics[0].title +"</h3> <p>"+pics[0].subtitle+"</p></div></div>";

  for (var i = 1; i < pics.length; i++) {
      text+="<div class=\"carousel-item\"> <img src=\""+pics[i].path +"\" width=\"100%\"> <div class=\"carousel-caption\"> <h3>" + pics[i].title +"</h3> <p>"+pics[i].subtitle+"</p></div></div>";
  }
  section[0].innerHTML=text;

  section=document.getElementsByClassName("carousel-indicators");
  text="<li id=\"left\" data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>";

  for (var i = 1; i < pics.length; i++) {
    if(i==pics.length-1)
    {
      text+="<li id=\"right\" data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>";
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
