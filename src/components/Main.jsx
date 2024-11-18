import { Fragment } from "react";

function Main () {
    return (
        <Fragment>
            <center><h2 className="catalogoP">Productos</h2></center>
            
            <div id="catalogoGeneral">
                <section>
                    <center><h3 className="globosT">Globos Rosa</h3></center>
                    <img src="./Assets/GlobosRosa.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra">Agregar al carrito</button></center>
                </section>
                <section>
                    <center><h3 className="globosT">Globos Azules</h3></center>
                    <img src="./Assets/GlobosBlancos.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra">Agregar al carrito</button></center>
                </section>
                <section>
                    <center><h3 className="globosT">Globos Blancos</h3></center>
                    <img src="./Assets/GlobosBlancos.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra">Agregar al carrito</button></center>
                </section>
            </div>
        </Fragment>
    )
}

export default Main;