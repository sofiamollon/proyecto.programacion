import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import React, {Component} from "react";


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      arrayTarjeta: [],
      search: " ",
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
    let nuevaTarjeta = this.state.arrayTarjeta.filter((tarjeta) => {
      return tarjeta.id !== idTarjeta 
    })
    this.setState({
      arrayTarjeta: nuevaTarjeta
    })
    console.log(nuevaTarjeta);
  };

  agregarTarjetas(numero){
    if ((numero <= 15 && numero > 0)) {
      fetch("https://randomuser.me/api/?results=" + numero)
      .then(r => r.json())
      .then((resultado)=>{
      this.setState({
        arrayTarjeta: this.state.arrayTarjeta.concat(resultado.results)});
      })
      .catch((e)=> console.log(e))
    }else{
      alert("Por favor, inserta un valor entre 1 y 10.")
    }  
  }
  
  filtrarTarjetas(nombreUsuarios) {
    let nombresFiltrados = this.state.arrayTarjeta.filter ((usuario) => {
      return usuario.name.first.toLowerCase() === nombreUsuarios.toLowerCase()
    })
    this.setState ({
      arrayTarjeta: nombresFiltrados
    })
    console.log(nombresFiltrados);
  }
  
  ordenAsc(){
    let ordenAsc = this.state.arrayTarjeta.sort(function (a, b) {
      if (a.name.first > b.name.first) {
        return 1;
      }if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
    this.setState({
      arrayTarjeta: ordenAsc});
  };
  
  ordenDes(){
    let ordenDes = this.state.arrayTarjeta.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return 1;
      }if (a.name.first > b.name.first) {
        return -1;
      }
      return 0;
    });
    this.setState({
      arrayTarjeta: ordenDes});
  }
 

  render(){
    return (
      <body>
       
      <div className="wrapper">
      
        <div className="App">
        <Header/>
          <div className='container mx-auto'>

            
              <div className="agregarTarjetas">
                <input type="number" className="cantidadTarjetas"  placeholder="Cantidad de usuarios"/>
                <button className="botonAgregar" onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
                  Añadir
                </button>
              <div/>
              <div className="dropdown">
                <button className="dropbtn">
                  Ordenar por:
                </button>
                <div className="dropdown-content">
                  <button onClick={this.ordenAsc.bind(this)}>Nombre ascendente</button>
                  <button onClick={this.ordenDes.bind(this)}>Nombre descendente</button>
                </div>
            
              </div>           

            <div className="my-5 flex flex-wrap -mx-2">

              {this.state.arrayTarjeta.map((item) => {
                return <Card 
                key = {item.id} 
                elemento = {item} 
                onDelete = {this.borrarTarjeta.bind(this)}/>
              })}

                <div className = "filtrarTarjetas" style={{width: "100%"}}> 
                  <input type="text" className="nombreUsuario" placeholder="Nombre de usuario"/> 
                  <button className="botonBuscar" onClick = {() => this.filtrarTarjetas(document.querySelector('.nombreUsuario').value)}> 
                    Buscar 
                  </button>
                
                </div>
              </div>

              </div>

            </div>
            
            <div className="footer">  
              <Footer/>

            </div>          
          </div>

        </div>
        
      
      </body>
    );
  }
}
