function Calculate () {
    let getedValue = document.getElementById("myinput").value;
    let result = eval(getedValue);
    console.log(typeof(result));
    document.getElementById('myinput').value = result; 
    
}
function show() { 
   let number;
   while(true){
    numer 
   }
}
function one() {
    let number = 1; 
}
function two() {
    let number = 2; 
}
function display(obj) {
    
    console.log(obj);
    console.log(typeof(obj))
    console.log(document.getElementById('one'))
    if (document.getElementById('myinput').value == '0' || document.getElementById('myinput').value == '')
        {
        if(document.getElementById('one') == obj){
            document.getElementById('myinput').value = 1; 
        }
        if(document.getElementById('two') == obj){
            document.getElementById('myinput').value = 2; 
        }
        if(document.getElementById('three') == obj){
            document.getElementById('myinput').value = 3; 
        }
        if(document.getElementById('four') == obj){
            document.getElementById('myinput').value = 4; 
        }
        if(document.getElementById('five') == obj){
            document.getElementById('myinput').value = 5; 
        }
        if(document.getElementById('six') == obj){
            document.getElementById('myinput').value = 6; 
        }
        if(document.getElementById('seven') == obj){
            document.getElementById('myinput').value = 7; 
        }
        if(document.getElementById('eight') == obj){
            document.getElementById('myinput').value = 8; 
        }
        if(document.getElementById('nine') == obj){
            document.getElementById('myinput').value = 9; 
        }
        if(document.getElementById('zero') == obj){
            document.getElementById('myinput').value =0; 
        }
    }
    else {
        if(document.getElementById('one') == obj){
            document.getElementById('myinput').value += 1; 
        }
        if(document.getElementById('two') == obj){
            document.getElementById('myinput').value += 2; 
        }
        if(document.getElementById('three') == obj){
            document.getElementById('myinput').value += 3; 
        }
        if(document.getElementById('four') == obj){
            document.getElementById('myinput').value += 4; 
        }
        if(document.getElementById('five') == obj){
            document.getElementById('myinput').value += 5; 
        }
        if(document.getElementById('six') == obj){
            document.getElementById('myinput').value += 6; 
        }
        if(document.getElementById('seven') == obj){
            document.getElementById('myinput').value += 7; 
        }
        if(document.getElementById('eight') == obj){
            document.getElementById('myinput').value += 8; 
        }
        if(document.getElementById('nine') == obj){
            document.getElementById('myinput').value += 9; 
        }
        if(document.getElementById('zero') == obj){
            document.getElementById('myinput').value += 0; 
        }
        if(document.getElementById('plus') == obj){
            document.getElementById('myinput').value += '+'; 
        }
        if(document.getElementById('minus') == obj){
            document.getElementById('myinput').value += '-'; 
        }
        if(document.getElementById('multiplicate') == obj){
            document.getElementById('myinput').value += '*'; 
        }
        if(document.getElementById('division') == obj){
            document.getElementById('myinput').value += '/'; 
        }
        if(document.getElementById('clear') == obj){
            document.getElementById('myinput').value = '0'; 
        }
    }
}