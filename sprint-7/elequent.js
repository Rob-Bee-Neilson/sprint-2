//Exercise 1

function min(a, b) {
    if (a < b) {
      return a;
  } else {
      return b;
  }
  }


  //Exercise 2

  function isEven(N) {
    if (N === 0) {
     return true;
   } else if (N === 1) {
     return false;
   } else if (((N-2) % 2) == 0) {
     return true;
   } else if (((N-2) % 2) == 1) {
     return false;
   } else {
     return "N must be a positive value"
   }
 }

 //Exercise 3
// I had to look this one up and work backwards. I'm still not sure on it.

function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, chr) {
    var counter = 0
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {counter++;}
    }
    return counter;
  }
