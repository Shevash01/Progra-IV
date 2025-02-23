// ---1--
// let x = 5;
// let y = x++;
// console.log(y);

// -> 5
// es es y, ya que el valor x se esta usando para la asignacion antes de incrementarse
// es decir primero y toma el valor actual de x que es 5 y luego ese 5 se incrementa a 6.

//--- 2--- 
// const arr = [1, 2, 3];
// const [x, y] = arr;
// console.log(y);

// -> 2
// en la segunda linea se realiza una destructuracion de arreglos en la que x se asigna al prime elemento
// del arreglo y y al segundo elemento del arreglo

// --3.--
// console.log(typeof null);

// -> object
// retorna un objeto, ya que null representa un objeto y 
// al ser un valor primario de js typeof null retornara un objeto

// --4 --
// console.log(1 + '1' - 1);

// ->10
// js convierte el numero 1 a una cadena antes de hacer la concatenacion 
// esto debido a que hay una cadena '1' en la operacion y entonces resulta una cadena '11'
// luego esa cadena la convierte a un numero para restarle el numero por lo que resulta en 11-1 = 10

// ---5--
//  console.log(0 == '0');

//  -> true
// el operador == convierte ambos en numeros por lo que la cadena '0' a un numero es 0 y 
// entonces compara 0 == 0 que es true

// --6--
//  let x = 10;
//  (function() {
//    console.log(x);
//    let x = 20;
//  })();

// -> ReferenceError 
// debido a que se esta intenado acceder a la variable x antes de su declaracion dentro de la funcion
// no retorna 10, ya que let x = 20;  crea una nueva variable x  en el ambto de la funcion ocultando 
// la varible x que esta fuera de la funcion

// --7--
//console.log(typeof NaN);

// -> Number
// NaN es una propiedad que se utiliza como respueta a calculos imposibles como indeterminaciones. 
// En javascript se puede utilizar para determinar si un valor es legal o invalido

//--8--
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a)

// -> [1, 2, 3, 4]
// b esta apuntando al mismo arreglo de a, por lo que al hacer un push a b lo agrega al mismo arreglo

//--9--
// console.log([] == false);
// -> true
// el operador == convierte abos a numeros al [] ser un objeto como arreglo con js usa el metodo 
// toString que devuelve una cadena vacia "", al convertir esta cadena a numero es 0 y false en numero es 0

//--10--
// let a = {};
// let b = a;
// console.log(a === b);

// -> true 
// retorna true debido a que en js let = {} esta creando una referencia de objeto, pero vacio
// y en let b = a, b esta haciendo referencia a ese mismo objeto que a por lo que al comparar 
// da true porque ambos se refieren al mismo objeto en persona
