var up1=0;
var down1=0;
var like=false;
var dislike=false;

var pics=[{
    path: "../../contest/pic1.jpg",
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
      path: "../../contest/pic2.jpg",
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
      path: "../../contest/pic3.jpg",
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
        path: "../../contest/pic4.jpg",
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
              path: "../../contest/pic5.jpg",
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
              path: "../../contest/pic6.jpg",
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
              path: "../../contest/pic7.jpg",
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
              path: "../../contest/pic8.jpg",
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

]

window.onload = function (){
  loadPictures();
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

function getRandomSize(min, max) {
return Math.round(Math.random() * (max - min) + min);
}

function loadPictures(){

  var allImages = "";

  for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height =  getRandomSize(200, 400);
    allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
}

$('#gallery').append(allImages);
  var pictures=getAprovedArray();
  var section = document.getElementById("gallery");
  console.log(section);
  var text='';

  for (var i = 0; i < pictures.length; i++) {
      text+= "<section class=\"card\"> <img class=\"card-img-top img-fluid\" src=\""+ pictures[i].path +"\"> </section>";
      console.log("ey");
  }

  console.log(text);

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
  document.getElementById('gallery').style.cssText='display: block !important';
  document.getElementById('submition').style.cssText='display: block !important';
  loadPictures();
}
