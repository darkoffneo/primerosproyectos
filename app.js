console.log("Hola coder, este es mi primer proyecto en html, css y javascript")
const input = document.querySelector('input');
const container = document.querySelector('.container');
const button = document.querySelector('.btn-container button')
const btnContainer = document.querySelector('.btn-container')
const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

// tema obscuro
input.addEventListener('click', function() {
    if(input.checked) {
        container.classList.add('dark')
    } else {
        container.classList.remove('dark')
    }
});

//funcionalidad
buttons.forEach((btn)=>{
    btn.onclick = ()=>{
        if (btn.id == "btn-c") {
            display.innerText="";
        } else if (btn.id=="btn-R") {
            let string = display.innerText
            display.innerText = display.innerText.substr(0,string.length-1)
        } else if (display.innerText != "" && btn.id=="btn-e") {
            display.innerText = eval(display.innerText)
        } else if (display.innerText =="" && btn.id=="btn-e") {
            display.innerText="NULL"
            setTimeout(() => {
                display.innerText=""
            }, 1000);
        } else {
            display.innerText=display.innerText+btn.textContent
        }
    }
})

document.addEventListener('keydown',(key)=>{
    if(key.code=="Backspace"){
        let string = display.innerText
        display.innerText = display.innerText.substr(0,string.length-1)
    } else if (display.innerText=="" && key.key == 'Enter'){
        display.style.color="red"
        display.innerText="Null"
            setTimeout(() => {
                display.style.color="black"
                display.innerText=""
            }, 1000);
    } else if (display.innerText!="" && key.key == 'Enter'){
        try {
            display.innerText = eval(display.innerText)
        } catch (error) {
            display.style.color="red"
            display.innerText="Error de Sintaxis"
            setTimeout(() => {
                display.style.color="black"
                display.innerText=""
            }, 3000); 
        } 
    } else if (key.key=='Delete'){
        display.innerText="";
    } else if (key.key=='1'){
        display.innerText=display.innerText+"1"
    } else if (key.key=='0'){
        display.innerText=display.innerText+"0"
    } else if (key.key=='2'){
        display.innerText=display.innerText+"2"
    }  else if (key.key=='3'){
        display.innerText=display.innerText+"3"
    }  else if (key.key=='4'){
        display.innerText=display.innerText+"4"
    }  else if (key.key=='5'){
        display.innerText=display.innerText+"5"
    }  else if (key.key=='6'){
        display.innerText=display.innerText+"6"
    }  else if (key.key=='7'){
        display.innerText=display.innerText+"7"
    }  else if (key.key=='8'){
        display.innerText=display.innerText+"8"
    }  else if (key.key=='9'){
        display.innerText=display.innerText+"9"
    }  else if (key.code=="NumpadDecimal"){
        display.innerText=display.innerText+"."
    }  else if (key.code=="NumpadAdd"){
        display.innerText=display.innerText+"+"
    }  else if (key.code=="NumpadSubtract"){
        display.innerText=display.innerText+"-"
    }  else if (key.code=="NumpadMultiply"){
        display.innerText=display.innerText+"*"
    }  else if (key.code=="NumpadDivide"){
        display.innerText=display.innerText+"/"
    }
})





