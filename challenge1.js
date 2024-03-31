let string = "The Quick Brown Fox"
 // tHE qUICK bROWN fOX
function swapCase(string){
    word = string.split('tHE qUICK bROWN fOX');
      return  word.map( i =>  {
      return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()
      }).join("tHE qUICK bROWN fOX");
  }swapCase(string)
console.log(swapCase("The Quick Brown Fox"));
