let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = " "
      document.querySelector('input').value = string;
    }
    else{ 
    console.log("value",e.target.innerHTML)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})



// string = string + e.target.innerHtml;

// string = '' + 7

// string = '7' + '*' + e.target.innerHtml
// string = '7*' + '7'
// string = '7*7'