import { Fragment , useState} from "react";

function Main () {

    const [cantidadGlobosRosa, setCantidadGlobosRosa] = useState(0);
    const [cantidadGlobosAzules, setCantidadGlobosAzules] = useState(0);
    const [cantidadGlobosBlancos, setCantidadGlobosBlancos] = useState(0);

    const agregarGlobosRosa = () => {
        setCantidadGlobosRosa(cantidadGlobosRosa + 1);
    };
    
    const agregarGlobosAzules = () => {
        setCantidadGlobosAzules(cantidadGlobosAzules + 1);
    };

    const agregarGlobosBlancos = () => {
        setCantidadGlobosBlancos(cantidadGlobosBlancos + 1);
    };

    return (
        <Fragment>
            <center><h2 className="catalogoP">Productos</h2></center>
            
            <div id="catalogoGeneral">
                <section>
                    <center><h3 className="globosT">Globos Rosa</h3></center>
                    <img src="./Assets/GlobosRosa.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra" onClick={agregarGlobosRosa}>Agregar al carrito</button></center>
                    <center><p>Cantidad en carrito: {cantidadGlobosRosa}</p></center>
                </section>
                <section>
                    <center><h3 className="globosT">Globos Azules</h3></center>
                    <img src="./Assets/GlobosBlancos.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra" onClick={agregarGlobosAzules}>Agregar al carrito</button></center>
                    <center><p>Cantidad en carrito: {cantidadGlobosAzules}</p></center>
                </section>
                <section>
                    <center><h3 className="globosT">Globos Blancos</h3></center>
                    <img src="./Assets/GlobosBlancos.jpg" alt="" />
                    <center><p className="precioG">Valor: $5000</p></center>
                    <center><button className="botonCompra" onClick={agregarGlobosBlancos}>Agregar al carrito</button></center>
                    <center><p>Cantidad en carrito: {cantidadGlobosBlancos}</p></center>
                </section>
            </div>
        </Fragment>
    )
}

export default Main;