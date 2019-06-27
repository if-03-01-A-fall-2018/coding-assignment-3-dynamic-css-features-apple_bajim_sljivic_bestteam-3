function readJson(){

  fetch('http://webt.wllgrsrv.cf/json/submition')
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
  var pics;

  fetch('http://webt.wllgrsrv.cf/json/submition')
     .then(response => {
         return response.json();
     })
     .then(json => {
         pics=json;
         var count=0;
         for (var i = 0; i < pics.length; i++) {
           if(pics[i].approved)
           {
             count++;
           }
         }
         return count;
     });
}


function likepic(i){
  var likes;
  fetch('http://webt.wllgrsrv.cf/json/submition/'+i)
     .then(response => {
         return response.json();
     })
     .then(json => {
         likes=json.likes;
     })
     .then(function(){
       if(document.getElementById("like"+i).style.color=="rgb(0, 0, 0)" || document.getElementById("like"+i).style.color=="")
       {
         document.getElementById("like"+i).style.color="rgb(41, 178, 61)";
         likes=likes+1;
         fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
         method: 'PATCH',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             "likes": likes
           })
         }).then(function(){
           if(document.getElementById("fullheart"+i).style.color=="rgb(219, 39, 39)")
           {
             likes=likes-2;
             document.getElementById("fullheart"+i).style.color="#000";
             fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
             method: 'PATCH',
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 "likes": likes
               })
             });
           }
         });
       }
       else {
         likes=likes-1;
         document.getElementById("like"+i).style.color="#000";
         fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
         method: 'PATCH',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             "likes": likes
           })
         });
       }
     });
}

function dblikepic(i){
  var likes;
  fetch('http://webt.wllgrsrv.cf/json/submition/'+i)
     .then(response => {
         return response.json();
     })
     .then(json => {
         likes=json.likes;
     }).then(function(){
    if(document.getElementById("fullheart"+i).style.color=="rgb(0, 0, 0)" || document.getElementById("fullheart"+i).style.color=="")
    {
      document.getElementById("fullheart"+i).style.color="rgb(219, 39, 39)";
      likes=likes+2;
      fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "likes": likes
        })
      }).then(function(){
        if(document.getElementById("like"+i).style.color=="rgb(41, 178, 61)")
        {
          likes=likes-1;
          document.getElementById("like"+i).style.color="#000";
          fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "likes": likes
            })
          });

        }
      })
    }
  });
}

function deleteimg(i){
  fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
  method: 'DELETE'
  });
}

function fullheartlike(i){
  var likes;
  fetch('http://webt.wllgrsrv.cf/json/submition/'+i)
     .then(response => {
         return response.json();
     })
     .then(json => {
         likes=json.likes;
     }).then(function(){
       if(document.getElementById("fullheart"+i).style.color=="rgb(0, 0, 0)" || document.getElementById("fullheart"+i).style.color=="")
       {
         likes=likes+2;
         document.getElementById("fullheart"+i).style.color="#db2727";
         fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
         method: 'PATCH',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             "likes": likes
           })
         }).then(function(){
           if(document.getElementById("like"+i).style.color=="rgb(41, 178, 61)")
           {
             likes=likes-1;
             document.getElementById("like"+i).style.color="#000";
             fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
             method: 'PATCH',
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 "likes": likes
               })
             });
           }
         });
       }
       else {
         likes=likes-2;
         document.getElementById("fullheart"+i).style.color="#000";
         fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
         method: 'PATCH',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             "likes": likes
           })
         });
       }
   });
}


function loadPictures(){
  var pictures=new Array(getLenghtOfAproved());

  var pics;
  fetch('http://webt.wllgrsrv.cf/json/submition')
     .then(response => {
         return response.json();
     })
     .then(json => {
         pics=json;
         var approved;
         var index=0;

         for (var i = 0; i < pics.length; i++) {
           if(pics[i].approved)
           {
             pictures[index]=pics[i];
             index++;
           }
         }
         var section = document.getElementById("gallery");
         var text='';

         for (var i = 0; i < pictures.length; i++) {
             text+= "<section class=\"card\"> <img ondblclick=\"dblikepic("+pictures[i].id+")\" class=\"card-img-top img-fluid\" src=\""+ pictures[i].file +"\"> <i id=\"like"+ pictures[i].id +"\" class=\"center heart far fa-heart\" onclick=\"likepic("+ pictures[i].id +")\"></i> <i id=\"fullheart"+ pictures[i].id +"\"  class=\"center fullheart fas fa-heart\" onclick=\"fullheartlike("+ pictures[i].id +")\"></i></section>";
         }


         section.innerHTML=text;
     });


}

function showDetails(id){
  if(document.getElementById("details"+id).style.cssText=='display: block !important;')
  {
    document.getElementById("details"+id).style.cssText='display: none !important';
  }
  else {
      document.getElementById("details"+id).style.cssText='display: block !important';
  }
}

function showList(){
  var pics;
  fetch('http://webt.wllgrsrv.cf/json/submition')
     .then(response => {
         return response.json();
     })
     .then(json => {
         pics=json;

         document.getElementById('list').style.cssText='display: block !important';
         if(document.getElementById('password').value=="Emina")
         {
           var section = document.getElementById('list');
           var text='';
           document.getElementById('gallery').style.cssText='display: none !important';
           document.getElementById('submition').style.cssText='display: none !important';
           for (var i = 0; i < pics.length; i++) {
             text+="<article class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark text-white\"><img src=\""+pics[i].file+"\" class=\"littlepics\"> <p class=\"description\">First name: "+ pics[i].firstName + "</p> <p class=\"description\">Last name: "+ pics[i].lastName+"</p> <p class=\"description\">model: "+ pics[i].model +"</p> <p class=\"description\">Description: "+ pics[i].description +"</p><button onclick=\"deleteimg("+pics[i].id+")\">Delete</button>";

             if(pics[i].approved){
                 text+="<input id=\"approved\" type=\"checkbox\" checked onclick=(changeValue("+ pics[i].id +"))> <label class=\"description\" for=\"approved\">Aproved</label></article>";
             }

             else {
               text+="<input id=\"approved\" type=\"checkbox\" onclick=(changeValue("+ pics[i].id +"))> <label for=\"approved\" class=\"description\">Aproved</label></article>";

             }
           }

           section.innerHTML=text;
         }
     });


}
function changeValue(i){
  fetch('http://webt.wllgrsrv.cf/json/submition/'+i)
     .then(response => {
         return response.json();
     })
     .then(json => {
         approved=json.approved;
     }).then(function(){
      fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "approved": !approved
      })
      });
    });

  var pics;
  fetch('http://webt.wllgrsrv.cf/json/submition')
     .then(response => {
         return response.json();
     })
     .then(json => {
         pics=json;

         if(pics[i-1].approved)
         {
           fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
           method: 'PATCH',
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               "approved": false
             })
         });
         }

         else {
           fetch('http://webt.wllgrsrv.cf/json/submition/'+i, {
           method: 'PATCH',
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               "approved": true
             })
         });
         }
     });

}

function goBack(){
  document.getElementsByClassName('password')[0].value='';
  document.getElementById('list').style.cssText='display: none !important';
  document.getElementById('gallery').style.cssText='display: block !important';
  document.getElementById('submition').style.cssText='display: block !important';
  loadPictures();
}

function Post(firstName, lastName, description, model, file, likes, approved) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.description = description;
  this.model = model;
  this.file = file;
  this.likes = likes;
  this.approved = approved;
}

window.onload = function (){
  readJson();
  loadPhones();
}

function show(){
  var phones;
  fetch('http://webt.wllgrsrv.cf/json/handymodels')
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
  fetch('http://webt.wllgrsrv.cf/json/handymodels')
     .then(response => {
         return response.json();
     })
     .then(json => {
         phones=json[0];

         for (var i = 0; i < 4; i++) {
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
      reader.onload=function(event)
      {
        var newPost=new Post(document.getElementById('firstName').value,document.getElementById('lastName').value,document.getElementById('description').value,document.getElementById('model').value +" "+ document.getElementById('model2').value,event.target.result,0,false);
        fetch('http://webt.wllgrsrv.cf/json/submition', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      }).then(function(){
        alert("Before you can see your post, it must be approved.");
        location.reload();
      });
    }

    reader.readAsDataURL(file);
  }


}
