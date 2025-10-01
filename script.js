const usuario = "Cristian";
const password = "pururu";
alert("Bienvenido, tienes 3 intentos para logear tu cuenta de lo contrario sera bloqueada");
let logueado = false;

function login() {
    for (let i = 1; i <= 3; i++) {

        let usuarioIngresado = prompt("Ingresa tu usuario");
        while (usuarioIngresado === "") {
            alert("Debes ingresar un usuario");
            usuarioIngresado = prompt("Ingresa tu usuario");
        }
        let passwordIngresado = prompt("Ingresa tu contraseña");
        while (passwordIngresado === "") {
            alert("Debes ingresar una contraseña");
            passwordIngresado = prompt("Ingresa tu contraseña");
        }
        if (usuarioIngresado === usuario && passwordIngresado === password) {
            alert(`Bienvenido ${usuario}, puedes empezar a realizar tus compras`);
            return true

        } else {
            alert(`Usuario o contraseña incorrecto. Intento ${i} de 3`);
        }

    }

    if (!logueado) {
        alert("Tu cuenta ha sido bloqueada por demasiados intentos fallidos");
    }
}


function carrito() {
    let carrito;
    let limpieza;
    let perfumeria;
    let almacen;
    let productoLimpieza = 0;
    let productoAlmacen = 0;
    let productoPerfumeria = 0;
    let jabonEnPolvo = 0;
    let suavizante = 0;
    let lavandina = 0;
    let azucar = 0;
    let yerba = 0;
    let vino = 0;
    let perfume = 0;
    let algodon = 0;
    let desodorante = 0;
    let totalCompra = 0;
    do {
        carrito = parseInt(prompt("Bienvenido a tu tienda nube, que deseas comprar? \n----------------\n 1) Articulos de Limpieza \n 2) Articulos de Almacen \n 3) Articulos de perfumeria \n 4) Pagar \n 5) Salir"))
        switch (carrito) {
            case 1:
                do {
                    limpieza = parseInt(prompt("Articulos de limpieza \n ----------------\n 1) Jabon en polvo $500 \n 2) Suavizante $400 \n 3) Lavandina $750\n 4) Quitar un prodcuto \n 5) Volver"))
                    switch (limpieza) {
                        case 1:
                            productoLimpieza = agregarProducto(productoLimpieza, 500, "Jabon en polvo");
                            jabonEnPolvo++;
                            break;
                        case 2:
                            productoLimpieza = agregarProducto(productoLimpieza, 400, "Suavizante");
                            suavizante++;
                            break;
                        case 3:
                            productoLimpieza = agregarProducto(productoLimpieza, 750, "Lavandina");
                            lavandina++;
                            break;
                        case 4:
                            do {
                                if (confirm("¿Desea quitar un producto?")) {
                                    limpieza = parseInt(prompt("Articulos de Limpieza \n ----------------\n 1) Jabon en polvo $500 \n 2) Suavizante $400 \n 3) Lavandina $750\n 4) Volver"))
                                    switch (limpieza) {
                                        case 1:
                                            jabonEnPolvo = controlDeProductos(jabonEnPolvo);
                                            jabonEnPolvo--;
                                            productoLimpieza = quitarProducto(productoLimpieza, 500, "Jabon en polvo")
                                            break;
                                        case 2:
                                            suavizante = controlDeProductos(suavizante);
                                            suavizante--;
                                            productoLimpieza = quitarProducto(productoLimpieza, 400, "Suavizante")
                                            break;
                                        case 3:
                                            productoLimpieza = quitarProducto(productoLimpieza, 750, "Lavandina")
                                            lavandina--;
                                            lavandina = controlDeProductos(lavandina)
                                            break;
                                        case 4:
                                            alert(`En Productos de Limpieza gastate $ ${productoLimpieza}`)
                                            break;
                                        default:
                                            alert("Opción ingresada incorrecta")
                                            break;
                                    }
                                }
                                else {
                                    limpieza = 4
                                }
                            } while (limpieza != 4);
                            break
                        case 5:
                            alert(`En productos de Limpieza gastate $ ${productoLimpieza}`)
                            break;
                        default:
                            alert("Opción ingresada incorrecta")
                            break;
                    }
                } while (limpieza != 5);

                break;

            case 2:
                do {
                    almacen = parseInt(prompt("Articulos de Almacen \n ----------------\n 1) Azucar $1000 \n 2) Yerba $1500 \n 3) Vino $7000\n 4) Quitar un producto \n 5) Volver"))
                    switch (almacen) {
                        case 1:
                            productoAlmacen = agregarProducto(productoAlmacen, 1000, "Azucar");
                            azucar++;
                            break;
                        case 2:
                            productoAlmacen = agregarProducto(productoAlmacen, 1500, "Yerba");
                            yerba++;
                            break;
                        case 3:
                            productoAlmacen = agregarProducto(productoAlmacen, 7000, "Vino");
                            vino++;
                            break;
                        case 4:
                            do {
                                if (confirm("¿Desea quitar un producto?")) {
                                    almacen = parseInt(prompt("Que producto desea quitar? \n ----------------\n 1) Azucar $1000 \n 2) Yerba $1500 \n 3) Vino $7000\n  4) Volver"))
                                    switch (almacen) {
                                        case 1:
                                            azucar = controlDeProductos(azucar);
                                            azucar--;
                                            productoAlmacen = quitarProducto(productoAlmacen, 1000, "Azucar");
                                            break;
                                        case 2:
                                            yerba = controlDeProductos(yerba);
                                            yerba--;
                                            productoAlmacen = quitarProducto(productoAlmacen, 1500, "Yerba");
                                            break;
                                        case 3:
                                            vino = controlDeProductos(vino);
                                            vino--;
                                            productoAlmacen = quitarProducto(productoAlmacen, 7000, "Vino");
                                            break;
                                        case 4:
                                            alert(`En productos de Almacen gastate $${productoAlmacen}`)
                                            break;
                                        default:
                                            alert("Opción ingresada incorrecta")
                                            break;
                                    }
                                }
                                else {
                                    almacen = 4
                                }
                            } while (almacen != 4);
                            break
                        case 5:
                            alert(`En productos de almacen gastate $ ${productoAlmacen}`)
                            break;
                        default:
                            alert("Opción ingresada incorrecta")
                            break;
                    }
                } while (almacen != 5);
                break

            case 3:
                do {
                    perfumeria = parseInt(prompt("Articulos de Perfumeria \n----------------\n 1) Perfume $10000 \n 2) Algodon $1500 \n 3) Desodorante $5000\n 4) Quitar un producto \n 5) Volver"))
                    switch (perfumeria) {
                        case 1:
                            productoPerfumeria = agregarProducto(productoPerfumeria, 10000, "Perfume");
                            perfume++;
                            break;
                        case 2:
                            productoPerfumeria = agregarProducto(productoPerfumeria, 1500, "Algodon");
                            algodon++;
                            break;
                        case 3:
                            productoPerfumeria = agregarProducto(productoPerfumeria, 5000, "Desodorante");
                            desodorante++;
                            break;
                        case 4:
                            do {
                                if (confirm("¿Desea quitar un producto?")) {
                                    perfumeria = parseInt(prompt("Articulos de Perfumeria  \n ----------------\n 1) Perfume $10000 \n 2) Algodon $1500 \n 3) Desodorante $5000\n 4) Volver"))
                                    switch (perfumeria) {
                                        case 1:
                                            perfume = controlDeProductos(perfume);
                                            perfume--;
                                            productoPerfumeria = quitarProducto(productoPerfumeria, 10000, "Perfume");
                                            break;
                                        case 2:
                                            algodon = controlDeProductos(algodon);
                                            algodon--;
                                            productoPerfumeria = quitarProducto(productoPerfumeria, 1500, "Algodón");
                                            break;
                                        case 3:
                                            desodorante = controlDeProductos(desodorante);
                                            desodorante--;
                                            productoPerfumeria = quitarProducto(productoPerfumeria, 5000, "Desodorante");
                                            break;
                                        case 4:
                                            alert(`En productos de Perfumeria gastate $${productoPerfumeria}`)
                                            break;
                                        default:
                                            alert("Opción ingresada incorrecta")
                                            break;
                                    }
                                } else {
                                    perfumeria = 4
                                }
                            } while (perfumeria != 4);
                            break
                        case 5:
                            alert(`En productos de Perfumeria gastate $ ${productoPerfumeria}`)
                            break;
                        default:
                            alert("Opción ingresada incorrecta")
                            break;
                    }
                } while (perfumeria != 5);
                break
            case 4:
                function sumarProductos(producto1, producto2, producto3) {
                    return producto1 + producto2 + producto3
                }
                totalCompra = sumarProductos(productoAlmacen, productoLimpieza, productoPerfumeria)
                if (totalCompra <= 0) {
                    alert("No agregaste ningún producto al carrito");
                } else {
                    alert(`Tus gastos fueron:\nArticulos de Limpieza  $${productoLimpieza}\nDetalle: \n-- ${jabonEnPolvo} Jabon en Polvo \n-- ${suavizante} Suavizante \n-- ${lavandina} Lavandina \nArticulos de Almacen $${productoAlmacen} \n-- ${azucar} Azucar \n-- ${yerba} Yerba \n-- ${vino} Vino \nArticulos de Perfumeria $${productoPerfumeria} \n-- ${perfume} Perfume \n-- ${algodon} Algodon \n-- ${desodorante} Desodorante \n ===================\n TOTAL $${totalCompra}`)
                }
                break
            case 5:
                alert("Gracias por usar nuestro carrito de compras")
                break;
            default:
                alert("Opción incorrecta ingresada")
                break;
        }

    } while (carrito != 5);
    alert("Te esperamos pronto nuevamente")
}
function controlDeProductos(producto) {
    producto = producto + 1;
    if (producto < 0) {
        alert("No puede quitar más productos");
    }
}
function agregarProducto(total, producto, nombreProducto) {
    alert(`Sumaste un ${nombreProducto}, Llevas gastado $${total + producto}`);
    return total + producto;
}
function quitarProducto(total, precio, nombreProducto) {
    if (total >= precio) {
        return total - precio;
    } else {
        alert(`No podés quitar ${nombreProducto}, no lo tenés en el carrito`);
        return total;
    }
}

if (login(true)) {
    carrito()
}

