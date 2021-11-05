let inputText = document.getElementById('query');
let input = '';
const key = document.querySelectorAll(".key");
   for(item of key){
       item.addEventListener('click', (e) =>{
           buttonText = e.target.innerText;
           
          
        if(buttonText == 'x')
          { buttonText = '*';
          input += buttonText;
              inputText.value += buttonText;
          }
          else  if(buttonText == '÷')
          { buttonText = '/';
          input += buttonText;
              inputText.value += buttonText;
          }
          else if(buttonText == '=')
          {
             input =   eval(input);
               inputText.value = input;
          }
          else if(buttonText == 'AC')
          {
                inputText.value = "";
                input = "";
          }
          else{
            input += buttonText;
            inputText.value = input;
          }
       })
   }