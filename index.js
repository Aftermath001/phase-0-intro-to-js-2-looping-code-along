// the for loop
// for (let age = 30; age<40; age++){
//     console.log(`I am ${age}. Happy Birthday to me!`);
//     // debugger;
// }
//  Using For with Arrays\
//  const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// function writeCards(Ada,Brendan,Ali){
//     for(let i=0;)
//  return 'Th'
// }
const names = ["Ada", "Brendan", "Ali",];
function writeCards(names, birthday) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
  return names;
}
writeCards(names);

function countDown(num) {
   while(num >= 0) {
       console.log(num);
              num--;
     }
   }
   countDown(10);