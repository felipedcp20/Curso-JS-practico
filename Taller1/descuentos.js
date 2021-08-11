
function calcdescuento(precio, descuento){
    return (precio *(100-descuento)/100)
}

function calculadescuento(){
    const inputprecio = document.getElementById("precio");
    const precio = inputprecio.value;
    const inputcupon = document.getElementById("cupon");
    const cupon = inputcupon.value;
    const resultp = document.getElementById("resultprice");

    if (cupon == "felipe"){
        descuento = 10;
    }else if (cupon === "rodriguez"){
        descuento = 20;
    }else {
        resultp.innerText = `el cupon ${cupon} no es valido`
    }

    const resultado = calcdescuento(precio,descuento)

    
    resultp.innerText = `el precio que debes pagar es ${resultado} usd`

}