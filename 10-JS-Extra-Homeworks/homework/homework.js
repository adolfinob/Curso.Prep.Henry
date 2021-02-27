// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
    for (let i = 0; i < Object.keys(objeto).length; i ++) {
      matriz.push([Object.keys(objeto)[i], Object.values(objeto)[i]]);
    }
    return matriz;
  }
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};
      for (let i = 0; i < string.length; i ++) {
       if (obj[string[i]]) {
      obj[string[i]] ++;
    } else {
      obj[string[i]] = 1;
  }
} 
return obj;
}
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let capitalFirst = [];
  let capitals = [];
  let letters = [];
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === s[i].toUpperCase()){
       capitals.push(s[i]);
    } else {
       letters.push(s[i]);
    }
    
  }
    capitalFirst = capitals.concat(letters);
    return capitalFirst.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let firstArray = str.split(' ');
  for (let i = 0; i < firstArray.length; i ++) {
    firstArray[i] = firstArray[i].split('').reverse().join(''); 
  }
  firstArray = firstArray.join(' ');
  return firstArray;
}  


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let ingreso = numero.toString();
  for (let i = 0; i < ingreso.length; i ++){
      if (ingreso === ingreso.split('').reverse().join('')) {
      return 'Es capicua';
      } else {
      return 'No es capicua';
      }
    }
  }

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newString = [];
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i ++) {
  if (cadena[i] !== 'a' && cadena[i] !== 'á' && cadena[i] !== 'b' && cadena[i] !== 'c') {
     newString.push(cadena[i]);
   } 
  } return newString.join('');
 }


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 1; i < arr.length; i ++){
    for (let j = 0; j < arr.length - 1; j ++) {
      if (arr[j].length > arr[j + 1].length) {
        k = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = k;
      }
    } 
  } return arr;
 }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let resultado = [];
    for (let j = 0; j < arreglo1.length; j ++) {
       for (let i = 0; i < arreglo2.length; i ++) {
           if(arreglo1[j] === arreglo2[i]) {
             resultado.push(arreglo1[j])
           }
       }
    } return resultado
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

