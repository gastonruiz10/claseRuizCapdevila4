//Los productos de mi tienda
const productos = [
    { nombre: "Remera Estampada", precio: 500 },
    { nombre: "Buzo con Capucha", precio: 1500 },
    { nombre: "Remera Lisa", precio: 400 },
]
//Carrito y proceso de compra
let carrito = []

let seleccion = prompt("Desea comprar algun producto? Si  -  No").toLowerCase()

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingrese: Si o No")
    seleccion = prompt("Hola! Desea comprar algo de la tienda?")
}

if (seleccion == "si") {
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
    alert("Elegi uno de los productos: " + todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitarnos!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto al carrito").toLowerCase()
    let precio = 0
    const prodElegido = productos.filter(item => item.nombre.toLowerCase() == producto)
    console.log(prodElegido)
    console.log(prodElegido.length>=1)
   
    let unidades = parseInt(prompt("Cuantas unidades desea comprar?"))
    prodElegido[0]={...prodElegido[0],cantidad:unidades}
    console.log(prodElegido);
   

    seleccion = prompt("Desea continuar con la compra?")

    while (seleccion == "no") {
        alert(`"Gracias por la compra!"
            Producto = ${prodElegido[0].nombre}, 
            Unidades: ${prodElegido[0].cantidad},
            Total a Pagar ${prodElegido[0].cantidad * prodElegido[0].precio}
             `)
        break;
    }

}