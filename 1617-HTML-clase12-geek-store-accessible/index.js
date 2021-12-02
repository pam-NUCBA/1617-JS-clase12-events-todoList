const menuDropdown = document.getElementById("menuDropdown");
const heart = document.getElementsByClassName("heart"); //hay muchos corazones. No nos conviene un id en ese caso!
//lo que vamos a repetir muchas veces nos lo podemos guardar
const dropHasClass = menuDropdown.classList;
//para la cart:
const total = document.getElementById("total");
const buyBtn = document.getElementsByClassName("buyBtn"); //generamos un array!
console.log(buyBtn)

//*si no guardáramos en constantes!
const changeColor = () => {
  document.getElementById("menu").style.color = "red";
};

changeColor();

const dropdown = () => {
  if (dropHasClass.contains("hide")) {
    dropHasClass.remove("hide");
  } else {
    dropHasClass.add("hide");
  }
};

//*la forma más larga del mundo:
// const dropdown = ()=> {
//     if(document.getElementById("menuDropdown").classList.contains("hide")) {
//         console.log('oh mis ojos')
//     }
// }

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}

//funcion cart: es una iife!
//*la idea acá es que no necesito ejecutarla después, no necesito nombres ni nada. Entonces la creo y ejecuto todo en 1
(function () {
  total.innerHTML = 0;
  //podemos usar el + para convertir a número, pero es un poco más limitado y no permite parámetros
  let acumulador = +total.innerHTML;
  // console.log(typeof acumulador)

  for (let j = 0; j < buyBtn.length; j++) { //itero para que esto pueda suceder con cada uno de los botones del array
    //esto es un callback: el primer param es qué tipo de evento va a pasar (un click), el segundo, es qué va a hacer, que en este caso es una funcion
    buyBtn[j].addEventListener("click", function () { //el evento se produce acá! al agregarle el event listener
      //acá guardo el valor que voy a querer sumarle, el valor del producto del botón que apreté
      let newProd = +buyBtn[j].innerHTML; //va a tomar el precio y convertirlo a numero. Al usar la j, sabe qué botón toqué
      // console.log(typeof newProd, newProd)
      acumulador = acumulador + newProd; //acumulador va a mantener el valor con lo que hayamos sumado, y va a sumar lo nuevo

      console.log(acumulador);
      total.innerHTML = acumulador;
    });
  }
})(); //ese segundo paréntesis es el que la hace ejecutar!

//*esto daría error, porque acumulador fuera de la iife no está definida! está fuera de scope
//console.log(acumulador)
//*total está creada afuera, entonces sí la podemos ver fuera del scope!
//console.log(total.innerHTML)
