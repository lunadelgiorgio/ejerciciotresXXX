import "./styles.css";
/*
Realizar una página con un script que calcule el valor de la letra de un número 
de DNI (Documento nacional de indentidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe tener entre 7 y 8 digitos sin puntos
Debemos calcular el resto de la división entera entre el número y el 
número 23. E.g: 31391317 mod 23 = 20
Según el resultado, de 0 a 22, le corresponderá una letra de las 
siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver 
a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar»
*/
const calculo: number = Number(document.getElementById("dato"));
const btnEnv = document.getElementById("btnEnviar");
//const dni = document.getElementById("texto");
const dniResultado = document.getElementById("resultDni");
let modulo: number;

//declaro el array que contendra las letras
const letras: string[] = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];
//declaro un nuevo array que va a contener las letras asignadas.
const newArray: string[] = new Array(modulo);

//declaro el parrafo para luego ponerle texto
dniResultado?.innerHTML;

btnEnv.addEventListener("click", () => {
  //obtengo el resultado
  modulo = calculo.value % 23;
  console.log(modulo);
  console.log(calculo);
  dniResultado?.innerHTML = `el resultado es ${modulo}.`;

  //ciclo for
  for (let i = 0; i < modulo; i++) {
    newArray[i] = letras[i];
  }
  dniResultado?.innerHTML = `la letra segun el modulo de tu D.N.I es ${newArray}.`;
});
