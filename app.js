//Ej1-----------------------------------------//

function llenarArreglo(cant, letra) {
    let vArrelgo = [];

    for (var i = 0; i < cant; i++) {
        vArrelgo[i] = letra;
    }

    return vArrelgo;
}

console.log(llenarArreglo(3, 'i'))

//Ej2-----------------------------------------//
function revertirArreglo(arreglo) {
    arreglo.reverse()

}

const arreglo = [1, 2, 3];
revertirArreglo(arreglo);
console.log(arreglo)

//Ej3-----------------------------------------//

function revisarIgualdadArreglos(arreglo1, arreglo2) {
    if (arreglo1.length === arreglo2.length) {
        for (let i = 0; i < arreglo1.length; i++) {
            if (arreglo1[i] !== arreglo2[i]) {
                return false;
            }
        }
        return true
    }

}
const arr1 = [1, 2];
const arr2 = [1, 2];;
console.log(revisarIgualdadArreglos(arr1, arr2));

//Ej4-----------------------------------------//
function revertirLlaveValor(arreglo) {
    return Object.fromEntries(arreglo);
}

const arregloLlaveValor = [
    ['nombre', 'Carlos'],
    ['apellido', 'Zepeda']
];
console.log(revertirLlaveValor(arregloLlaveValor))
//Ej5-----------------------------------------//

function removerDuplicados(arreglo) {
    return arreglo.filter((value, index) =>
        arreglo.indexOf(value) === index);
}

const arregloDup = [1, 2, 3, 1, 2];
console.log(removerDuplicados(arregloDup))

//Ej6-----------------------------------------//
function encontrarInterseccion(arreglo1, arreglo2) {
    return arreglo1.filter((value, index) => arreglo2.indexOf(value) != -1);
}

const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];
console.log(encontrarInterseccion(a1, a2))

//Ej7-----------------------------------------//
function esArreglo(arreglo7) {
    return Array.isArray(arreglo7);
}

const arreglo7 = [];
console.log(esArreglo(arreglo7))

//Ej8-----------------------------------------//
function clonarArreglo(arreglo) {
    let arregloClon = [];
    arregloClon = [...arreglo];

    return arregloClon;
}

const arreglo8 = [1, 2, 3, 4];
console.log(clonarArreglo(arreglo8))

//Ej9-----------------------------------------//
function concatenarStrings(arreglo) {
    return arreglo.join(' ');
}

const arregloConcat = ['Hola', 'Mundo', '!'];
console.log(concatenarStrings(arregloConcat))

//Ej10-----------------------------------------//

//Ej11-----------------------------------------//
function barajarArreglo(arreglo) {
    return arreglo.sort(function () {
        return Math.random() - 0.5
    });
}

const arregloBara = [1, 2, 3, 4];
console.log(barajarArreglo(arregloBara))

//Ej12-----------------------------------------//
//Ejercicio #12
function valoresRepetidos(arreglo) {
    return arreglo.filter((value, index) =>
        arreglo.indexOf(value) !== index);
}

const arregloRep = [2, 2, 3, 1, 3];
console.log(valoresRepetidos(arregloRep))

//Ej13-----------------------------------------//
function encontrarDiferencia(arreglo1, arreglo2) {
    let Arreglotemporal = [];
    Arreglotemporal = arreglo1.filter((value, index) =>
        arreglo2.indexOf(value) === -1);

    return Arreglotemporal.concat(arreglo2.filter((value, index) =>
        arreglo1.indexOf(value) === -1));
}

const arreDif1 = [7, 5, 8, 4];
const arreDif2 = [8, 4, 5, 6];
console.log(encontrarDiferencia(arreDif1, arreDif2))
//Ej14-----------------------------------------//
//Ej15-----------------------------------------//

function imprimir() {
    return "holaMundo"
}
let valorDeFuncion = imprimir();
console.log(valorDeFuncion)


//Ej16-----------------------------------------//
function revisaString(cadena) {
    return cadena === '';
}
console.log(revisaString(''))

//Ej17-----------------------------------------//
function extraerCarcter(cantidad, cadena) {
    return cadena.substring(0, cantidad);
}
console.log(extraerCarcter(5, "extraer caracteres"))

//Ej18-----------------------------------------//
function letraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

console.log(letraMayuscula("letras"))

//Ej19-----------------------------------------//
function ordenar(arreglo) {
    let arregloOrdenar = [];
    arregloOrdenar = arreglo.sort(function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    });

    return arregloOrdenar;
}

var items = [{
        id: 5,
        articulo: 'Lapiz'
    },
    {
        id: 3,
        articulo: 'cuaderno'
    },
    {
        id: 6,
        articulo: 'borrador'
    }

];

console.log(ordenar(items))

//Ej20-----------------------------------------//
function numeroRevertido(numero) {
    return numero.split("").reverse().join("");
}

console.log(numeroRevertido("123456789"))

//Ej21-----------------------------------------//
function validarPalindrome(pablabra) {
    return pablabra === pablabra.split("").reverse().join("");
}

console.log(validarPalindrome("somos"))
console.log(validarPalindrome("perro"))

//Ej22-----------------------------------------//
function Pablabra(cadena) {
    var ordenarPalabra = cadena.split(' ')
        .sort(function (a, b) {
            return b.length - a.length;
        });
    return ordenarPalabra[0];
}

console.log(Pablabra("Curso Java Script"))

//Ej23-----------------------------------------//

function forEach(arreglo, funcion) {
    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];
        funcion(elemento, i, arreglo);
    }
}

const arreglo23 = [1, 2, 3];

function elementoFuncion(elemento) {
    console.log(elemento);
}

forEach(arreglo23, elementoFuncion)


