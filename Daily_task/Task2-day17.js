 // Lecture Day 17...
 // Simple Array method...

  /*const currencies = new Map(
    ['USD' , 'United State Dollar'],
    ['EUR' , 'EURO'],
    ['GBP' , 'Pound Sterling'],
  );*/
 const movements = [200 , 450 , -400 , 3000 , -650 , -130 , 70 ,1300];
 let arr = ['a' , 'b' , 'c' , 'd' , 'e'];
  // Slice Method...
  console.log(arr.slice(2));
  console.log(arr.slice(2, 4));
  console.log(arr.slice(-2));
  console.log(arr.slice(-1));
  console.log(arr.slice(-1 , -2));
  console.log(arr.slice());
  console.log(arr.slice([...arr]));
  
  // Splice Method...
  //They can extact those element which is gone from an array splice can delete them.

 //  console.log(arr.splice(2));
  // Splice Method...
  //They can extact those element which is gone from array

  // Splice Method...
  //They can extact those element which is gone from array

  //console.log(arr.splice(2));
  arr.splice(-1);
  console.log(arr.splice(arr));
  arr.splice(1,2);
  console.log(arr.splice(arr));
  
   // Reverse Method...
  let arr1 = ['a' , 'b' , 'c' , 'd' , 'e'];
  let arr2 = ['j' , 'i' , 'h' , 'g' , 'k'];
  console.log(arr2.reverse());

   // Concatenate Method
   const letter = arr1.concat(arr2);
   console.log(letter);
   console.log(...arr1 , ...arr2);

   // Join Method...