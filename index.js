let display=document.getElementById("input-txt")

document.addEventListener('keypress',(event) =>{
    console.log(event)
    var key=event.key
    if(isNumeric(key) || issymbol(key)){
        display.value += key
    }

    else if (key == '=' || key == 'Enter'){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error "
        }
    }

    else if( key == 'c' || key == 'C'){
        display.value ='';
    }

    else if( key == 'd' || key == 'D'){
        display.value = display.value.toString().slice(0,-1);
    }
});

function isNumeric(key){
    return !isNaN(key) && !isNaN(parseFloat(key));
}

function issymbol(key){
    const symbols = ['*', '(', ')', '-','+',  '.', '/', ];
    return symbols.includes(key);
}






function appendDisplay(input){
    display.value+= input
}

function calculate(){
    try{
        display.value = eval(display.value)
    }

    catch(error){
        display.value="Error"

    }
    
}

let clearDisplay= ()=>{
    display.value= ''
}   

let DeleteDisplay=()=>{
    display.value= display.value.toString().slice(0,-1)
}

