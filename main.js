const Postre = function (nombre,precio,stock){ // funcion constructora

    this.nombre= nombre
    this.precio= precio
    this.stock= stock

}

let postre1 = new Postre ("budin",1000,10)
let postre2 = new Postre ("macarron",700,40)
let postre3 = new Postre ("hojaldre",250,20)
let postre4 = new Postre ("carrotCake",1500,8)


let menu = [postre1,postre2,postre3,postre4]

let nombre = "Mailin Sweet"
let presentacion = document.getElementById("presentacion")

presentacion.innerHTML = `<h1>${nombre}</h1>`

let informacion = "Los productos disponibles son: Budin, Macarron, Hojaldre, CarrotCake"
let disponibilidad = document.getElementById("disponibilidad")

disponibilidad.innerHTML = `<h2>${informacion}</h2>`



function filtrarPostre(){

    const body = document.querySelector("body")
    const input1 = document.getElementById("postre").value
    const input2 = document.getElementById("cantidad").value

    const postreSeleccionado = input1.trim().toUpperCase()
    const unidades = parseInt(input2)

    const resultado = menu.filter((x)=>x.nombre.toUpperCase().includes(postreSeleccionado.toUpperCase()))

    if(resultado.length > 0){
            const container = document.createElement("div")

            resultado.forEach( (resultado)=>{
                
                const card = document.createElement("div")

                const nombre = document.createElement("h3")
                nombre.innerHTML =`Postre: ${resultado.nombre} ` 
                card.appendChild(nombre)

                let monto = document.createElement("p")
                monto.innerHTML =`Monto: ${resultado.precio * unidades}` 
                card.appendChild(monto)

                const iva = document.createElement("p")
                iva.innerHTML = `IVA: ${(resultado.precio * unidades)*0.21}`
                card.appendChild(iva)
                
                let total = document.createElement("p")
                total.innerHTML = `Total: ${((resultado.precio * unidades)*0.21) + (resultado.precio * unidades)}`
                card.appendChild(total)

                container.appendChild(card)  

            })
            
            body.appendChild(container)

            }else{
                alert("el producto no esta en la lista")
            }

}   



//botonera

let btnAceptar = document.getElementById("pedido")

btnAceptar.addEventListener("click",filtrarPostre)



localStorage.setItem("disponible", JSON.stringify(menu))
alert("disponible guardado")

localStorage.clear()







