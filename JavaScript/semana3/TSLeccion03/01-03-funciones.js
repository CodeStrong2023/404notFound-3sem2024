miFunction(8,2); //esto se le conoce como hosting
function miFunction(a,b){
    //console.log("sumamos: "+(a+b));
    return a+b;
}

//llamamos la funcion
miFunction(3,5);

let resultado=miFunction(6,7);
console.log(resultado);

// Funciones de tipo expresión o anónima.
x = function(a, b){ return a + b};
resultado = x(5, 6);
console.log(resultado);