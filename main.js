//Listado de productos que vende la empresa con los precios iniciales
let productos = ["Tenedores", "Cucharas", "Cuchillos", "Platos", "Vasos"];
let precios = [50, 80, 90, 100, 60];
let cantidades = [0, 0 , 0 , 0, 0];
let precioFinal;

//Mostrar el menu inicial
while(true){
    let opcion = prompt("¿Qué desea hacer? 1: Nuevo Pedido / 2: Ver precios. / 3: Modificar precios.");
    if(opcion == 1){
        crearPedido();
    }
    else if(opcion == 2){
        mostrarPrecios(productos, precios);
    }
    else if(opcion == 3){
        modificarPrecios();
    }
    else{
        alert("Por favor ingrese un valor correcto.");
    }
}

//Funcion para crear pedido: Pide las cantidades de cada producto que se incluyen en el pedido y muestra el detalle. Si esta ok llama a calcularYmostrar, si no, reinicia el pedido.
function crearPedido(){
    let listo = 0;
    while(listo == 0){
        for(let i=0; i<productos.length ; i++){
            do{
                cantidades[i] = prompt("Ingrese la cantidad de " + productos[i].toUpperCase() + " en el pedido.");
                if(cantidades[i] === null){
                    alert("Pedido cancelado.");
                    return;
                }
                cantidades[i] = parseInt(cantidades[i]);
            } while(isNaN(cantidades[i]) || cantidades[i] < 0);
        }
        let mensaje = "Las cantidades en el pedido son: \n"
        for(let i=0; i<productos.length ; i++){
            mensaje = mensaje + "    -" + productos[i] + ": " + cantidades[i] + ". \n";
        }
        alert(mensaje);
        listo = prompt("El pedido se cargo correctamente? 1: si / 2: no");
        if (listo == 1){break;}
        else{listo = 0;}
    }
    alert("pedido creado!");
    calcularYmostrar();
    return;
}

//Función para mostrar los precios actuales
function mostrarPrecios(productos, precios){
    let mensaje = "Listado de precios actuales \n";
    for(let i=0;i<productos.length;i++){
        mensaje = mensaje + "    -" + productos[i] + ": $" + precios[i] + ". \n"
    }
    alert(mensaje);
    return;
}

//Funcion para modificar precios: Pide el nuevo precio de cada producto y al final muestra el detalle.
function modificarPrecios(){
    let listo = 0;
    while(listo == 0){
        for(let i=0; i<productos.length ; i++){
            do{
                precios[i] = prompt("Ingrese el nuevo precio de " + productos[i].toUpperCase());
                if(precios[i] === null){
                    alert("Ha cancelado la carga de precios. Los precios guardados quedarán con el último valor ingresado.");
                    return;
                }
                precios[i] = parseInt(precios[i]);
            }while(isNaN(precios[i]) || precios[i] < 0);
        }
        let mensaje = "Los nuevos precios son: \n"
        for(let i=0; i<productos.length ; i++){
            mensaje = mensaje + "    -" + productos[i] + ": $" + precios[i] + ". \n";
        }
        alert(mensaje);
        listo = prompt("Los precios son correctos? 1: si / 2: no");
        if (listo == 1){break;}
        else{listo = 0;}
    }
    return;
}

//Funcion para calcular el total del pedido: Pregunta el descuento a realizar en porcentaje, y devuelve el total final.
function calcularYmostrar(){
    let precioFinal = 0;
    for(let i=0;i<productos.length; i++){
        precioFinal = precioFinal + precios[i] * cantidades[i];
    }
    let descontar = prompt("¿Desea aplicar un descuento? 1: si / Otro o Cancelar: no");
    if(descontar == 1){
        let descuento;
        do{
            descuento = Number(prompt("Ingrese el porcentaje de descuento o presione cancelar para no descontar."));
            if(descuento > 100){alert("El descuento no puede ser mayor a 100%");descuento=null;}
        }while(isNaN(descuento) || descuento < 0 || descuento === null);

        descuento = descuento / 100;
        precioFinal = precioFinal - (descuento * precioFinal);
        alert("El total del pedido es: " + precioFinal + ".");
        return;
    }
    else{
        alert("El total del pedido es: $" + precioFinal + ".");
        return;
    }
    
}
