import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import React, {Component} from "react";


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      arrayTarjeta: [],
    }
  };

componentDidMount(){
  fetch("https://randomuser.me/api/?results=21")
  .then(r => r.json())
  .then((resultado)=>{
    //console.log(resultado)
    this.setState({
      arrayTarjeta: resultado.results});
    
  })
  .catch((e)=> console.log(e))
}


  borrarTarjeta(idTarjeta){
    console.log("El id de la tarjeta a eliminar es: " + idTarjeta);
    let nuevaTarjeta = this.state.arrayTarjeta.filter((tarjeta) => {
      return tarjeta.id !== idTarjeta
    })
    this.setState({
      arrayTarjeta: nuevaTarjeta
    })
    console.log(nuevaTarjeta);
  };

  agregarTarjetas(cantidadTarjetas){
    fetch("https://randomuser.me/api/?results=" + cantidadTarjetas)
    .then(r => r.json())
    .then((resultado)=>{
    this.setState({
      arrayTarjeta: this.state.arrayTarjeta.concat(resultado.results)});
  })
    .catch((e)=> console.log(e))
  }

  render(){
    return (
      <body>
      <div class="wrapper">
        <div className="App">
          <Header/>
          <div className='container mx-auto'>

            <div className="my-5 flex flex-wrap -mx-2">

              {this.state.arrayTarjeta.map((item) => {
                return <Card key = {item.id} elemento = {item} onDelete = {this.borrarTarjeta.bind(this)}/>
              })}

              <div className="agregarTarjetas" style={{width:"100%"}}>
                <input type="number" className="cantidadTarjetas"  placeholder="Insertar cantidad de usuarios" />
                <button onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
                  Añadir
                </button>
              </div>

              <div class="push">
                
              </div>
            </div>

          </div>
          
          <div class="footer">  
            <Footer/>

          </div>          
        </div>

      </div>
        
      
      </body>
    );
  }
}
