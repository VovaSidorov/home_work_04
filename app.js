console.log("Was load...");

// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// console.log(arr.reverse());


// function reverseArr(data){
//     var temp =[];
//     for(var i = data.length - 1; i >= 0; i--){
//         // console.log(data[i]);
//         temp.push(data[i]);
//     }
//     return temp;

// }
//// разобрать
// function reverseArr(data){
//     console.log("length:" + arr.length)
//     // var temp =[];
//     var tempElement;
//     for (var i=0; i<arr.length/2;i++){
//         console.log('left '+ data[i]);
//         console.log('right '+ data[arr.length - i -1]);

//         tempElement = data[i];
//         data[i] = data[arr.length-i-1];
//         data[arr.length-i-1]=tempElement;
//     }
//     return data;
// }

// reverseArr(arr);

// // for (i=0; i < arr.length; i++){
// //     if (arr[i]%2==1){
// //         console.log(arr[i])
// //     }
// // }

// var odd_arr=[];

// // arr.forEach(function(el,i,dif_arr){
// //     if (arr[i]%2==1){
// //         console.log(arr[i]);
// //         odd_arr.push(arr[i]);
// //     }
// // });


// // arr.forEach(function(el,i,dif_arr){
// //     if (arr[i]%2==1){
// //         console.log(arr[i])
// //     }
// // });

// // var odd_arr = arr.map(function(el,i,dif_arr){
// //     if (arr[i]%2==1){
// //         console.log(arr[i])
// //     }
// // });

// // console.log(odd_arr);

// var odd_arr = arr.filter(function(el,i,dif_arr){
//    return dif_arr[i]%2==0;
// });

// console.log(odd_arr);

// var arr = [12,3,5,9,1,2,4,10,6,8,7,11];
// new_arr = [];


// function sortArr(data){
//     var tempEl;

//     for (var i = 0; i<data.length; i++){
// console.log("Main loop:" + data[i]);
// for (var j=0;j<data.length;j++){

//  if (data[i]<data[j]){
//      console.log("Lefr" + data[i]);
//      console.log("Right" + data[j]);
//      tempEl = data[i];
//      data[i] = data[j];
//      data[j] = tempEl;

//      console.log("Array: " + data);
//      continue;
//  }
// }
//     }
// return data;
// }

// найи в уроке, переписать что бы заработало, разобраться Снимок экрана от 2018-10-21 17-03-13
// function sortArr(data){

//     for (var i = data.legth; i > 0; i--){
//         for (var j = 0;j<i;j++){
//             console.log(data[j]);

//             if (data[i]<data[j]){
//                 tempEl = data[i]; // From left to temp
//                 data[i] = data[j]; // From Rigth to Left
//                 data[j] = tempEl;
//             }
//         }

//     console.log('-----------------');
//     }
// return data;
// }

// console.log(sortArr(arr));

// console.log(arr.sort(function(a,b){
//     return b - a;
//   }));


//   function arrElementGretThan(data, condition){
//       var state = true;

//       for (var i=0; i<data.length;i++){
//           if(data[i]<=0)
//           {
//               state = false;
//               break;
//           }
//       }
//       return state;
//   }



  var arr = [12,3,5,9,1,2,4,10,6,8,7,11];

  state = arr.every(function(el){
    return el>5;
  });

  if (state){
      console.log("Yes")
  }
  else{
      console.log("No")
  }
    