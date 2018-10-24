
////////////1
// var li;
// var arr = ["Home","Catalog","About Us","Contacts","Portfolio"];
// var navigation = document.getElementById('navigation');
// console.log(document.getElementById('navigation'));
// for (i=0;i<arr.length;i++){
//   li = document.createElement('li');
//   li.innerHTML = arr[i];
//   navigation.appendChild(li);

// }



//////////////////////2
// var li, a;
// var navigation = document.getElementById("navigation");
//  var names = ["home","catalog","about us","portfolio","contacts"]
//  console.log(navigation);

//  for(var i=0; i < names.length; i++ ){
//    li = document.createElement("li");
//    a = document.createElement("a");
//    a.innerHTML = names[i];
//    a.setAttribute("class","nav-link");
//    a.setAttribute("href","#");
//    li.setAttribute("class","nav-item");
//    li.appendChild(a);
//    navigation.appendChild(li);
//  }

//  document.getElementsByClassName('nav-item')[0].setAttribute("class","active");



///////////////////3

var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
               {"name":"Home","href":"index.html"},
               {"name":"Catalog","href":"catalog.html"},
               {"name":"About us","href":"about_us.html"},
               {"name":"Contacats","href":"contacts.html"},
               {"name":"Portfolio","href":"portfolio.html"},
               {"name":"Blog","href":"blog.html"}
             ];


for (var i=0;i<names.length;i++){
li = document.createElement("li");
a = document.createElement("a");
a.innerHTML = names[i].name;
a.setAttribute("class","nav-link");
a.setAttribute("href", names[i].href);
li.setAttribute("class","nav-item")
li.appendChild(a);
navigation.appendChild(li);

if (document.location.href.indexOf(names[i].href) != -1){
  h1 = document.getElementById("h1");
  h1.innerHTML = names[i].name;
  document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
};

}




// document.getElementsByClassName("nav-item")[0].setAttribute("class","active");

//////////////////////////////// попытка 1
// var text;
// function getValue(value){
//   var value = textSlash(textSplit(lowerWords(document.getElementById("input_form").value)));
//   var obj=document.getElementById("total");
//   obj.value =  value;
//   alert(value);

// }


function someFunc(){
  var obj=document.getElementById("total");
  obj.value = textSlash(textSplit(lowerWords(document.getElementById("txt").value)));
  }
  document.getElementById("btn").onclick = someFunc;
  


///////////////////////////////////////

// var text = "Hello!! my name is Vova";
// var arr_text = text.split(' ');
// var text = "Hello! My name is vova.";
// var text1;
// var positiveText;
function textSplit(text){
    console.log("Entered 1");
    console.log(text);
   return text.split(' ');
}

function lowerWords(text){
    console.log(text);
       return text.toLocaleLowerCase();         
    }


// function lowerWords(text){
//     console.log("Entered 2");
//     text.forEach(function(el,i,arr){
//         arr[i]=(el.toLocaleLowerCase());         
// });
// return text;
// }

// function deleteSign(text){
//     console.log("Entered 2");
//     console.log(text);
//     var positiveText = text.filter(function(el) {
//         console.log(el);
//         return  el != "." || el != "!";
//       });
     
//     return positiveText.join('');
// }

function textSlash(text){
    console.log("Entered 3");
    console.log(text);
return text.join('-');
}



// function getValue(){
//     var text = document.getElementById("input_form").value;
//     return text;
//   }
// function putValue(){
//   var obj=document.getElementById("total");
//     obj.value=text;
// }
// console.log(textSlash(textSplit(lowerWords(text))));

// var text1 = "Hello! My name is vova.";
//  var arr_text1 = text1.split('');
// var re = /\.\ /;
 
// // // // console.log(arr_text1);
// // // z="!";

// // // arr_text1.forEach(function(el,i,arr){   
   
// // //     if (el==="!")
// // //     {
// // //         console.log("Zashlo");
// // //         arr.pop();
// // //     }   
// // // });
// // // console.log(arr_text1);
// // // console.log(arr_text1.pop());
// // // console.log(arr_text1);



// var positiveArr = arr_text1.filter(function(el) {
//   return el != "!" ;
// });
// var positiveArr = arr_text1.filter(function(el) {
//     return  el != "!";
//   });
//   console.log( text1.match(re) );

//   var str = "+7(903)-123-45-67";

// alert( text1.replace(/\S\S\S\S /) ); // 79031234567