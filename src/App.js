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


  filtrarTarjeta (idTarjeta) { /* en idTarjeta tendria que ingresar lo que filtro el usuario */  
    const filtroTarjeta = this.state.arrayTarjeta.filter(function(tarjeta) {
      return  tarjeta.nombre === idTarjeta/*aca tendria que ir la operacion de comparacion*/
    }) 
    this.setState ({
          arrayTarjeta: filtroTarjeta
    })
  }
  


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


  render(){
    return (
      <body>
       
      <div class="wrapper">
      
        <div className="App">
        <Header/>
          <div className='container mx-auto'>

            <div className="my-5 flex flex-wrap -mx-2">

              {this.state.arrayTarjeta.map((item) => {
                return <Card 
                key = {item.id} 
                elemento = {item} 
                onDelete = {this.borrarTarjeta.bind(this)}
                onFilter = {this.filtrarTarjeta.bind(this)}/>
              })}

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
