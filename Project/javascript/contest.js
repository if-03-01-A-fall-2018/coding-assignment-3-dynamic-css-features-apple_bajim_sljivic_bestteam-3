var up1=0;
var down1=0;
var like=false;
var dislike=false;

window.onload = function (){
  var left =  document.getElementById('left').offsetLeft;
  var right =  document.getElementById('right').offsetLeft;
  var a = window.innerWidth/2-70;
  var b = window.innerWidth/2+40;
  var c = window.innerWidth/2-85;
  var d = window.innerWidth/2+60;
  document.getElementById('vote1').style.cssText='left:' + a +'px!important;';
  document.getElementById('vote2').style.cssText='left:' + b +'px!important;';
  document.getElementById('thumbs-up').style.cssText='left:' + c +'px!important;';
  document.getElementById('thumbs-down').style.cssText='left:' + d +'px!important;';
}

function up(){
  console.log(like);
  console.log(dislike);
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
    console.log(like);
    console.log(dislike);
}

function down(){
  console.log(like);
  console.log(dislike);
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
    console.log(like);
    console.log(dislike);
}
