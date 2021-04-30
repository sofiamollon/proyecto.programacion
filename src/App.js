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
    if ((numero <= 10 && numero > 0)) {
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
      return usuario.name.first.toLowerCase() === nombreUsuarios.toLowerCase() ||
      usuario.name.last.toLowerCase() === nombreUsuarios.toLowerCase() ||
      parseInt(usuario.dob.age) === parseInt(nombreUsuarios)
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

  ordenAscApellido(){
    let ordenAscApellido = this.state.arrayTarjeta.sort((a, b) => (a.name.last > b.name.last)? 1: -1)
    this.setState({arrayTarjeta: ordenAscApellido});
  }

  ordenDesApellido(){
    let ordenDesApellido = this.state.arrayTarjeta.sort((a, b) => (a.name.last < b.name.last)? 1: -1)
    this.setState({arrayTarjeta: ordenDesApellido});
  }

  ordenAscEdad(){
    let ordenAscEdad = this.state.arrayTarjeta.sort((a, b) => (a.dob.age > b.dob.age)? 1: -1)
    this.setState({arrayTarjeta: ordenAscEdad});
  }

  ordenDesEdad(){
    let ordenDesEdad = this.state.arrayTarjeta.sort((a, b) => (a.dob.age < b.dob.age)? 1: -1)
    this.setState({arrayTarjeta: ordenDesEdad});
  }

  ordenAscRegistro(){
    let ordenAscRegistro = this.state.arrayTarjeta.sort((a, b) => (a.registered.date > b.registered.date)? 1: -1)
    this.setState({arrayTarjeta: ordenAscRegistro});
  }

  ordenDesRegistro(){
    let ordenDesRegistro = this.state.arrayTarjeta.sort((a, b) => (a.registered.date < b.registered.date)? 1: -1)
    this.setState({arrayTarjeta: ordenDesRegistro});
  }


 visualizacionHorizontal () {
  let vistaHorizontal = document.getElementsByClassName("cards flip-card");
    this.setState ({
      arrayTarjeta: vistaHorizontal
    })
}  

visualizacionVertical () {
  let vistaVertical = document.getElementsByClassName("cards flip-card");
  this.setState ({
    arrayTarjeta: vistaVertical
  })
}    



  render(){


    return (
      <body> 
        <div className="wrapper">  
          <div className="App">

            <Header/>

            <div className='container mx-auto'>

              <div className = "ordenarFiltrar">              
                <div className = "filtrarTarjetas"> 
                  Texto a buscar: 
                  <input type="text" className="nombreUsuario" onChange = {(evento) => this.setState({search: evento.target.value})}/> 
                  <button className="botonBuscar" onClick = {() => this.filtrarTarjetas(document.querySelector('.nombreUsuario').value)}> 
                    Buscar 
                  </button> 
                </div>
                  
                <div className="dropdown">
                  <button className="dropbtn">
                    Ordenar por:
                  </button>
                  <div className="dropdown-content">
                    <button onClick={this.ordenAsc.bind(this)}>Nombre ascendente</button>
                    <button onClick={this.ordenDes.bind(this)}>Nombre descendente</button>
                    <button onClick={this.ordenAscApellido.bind(this)}> Apellido ascendente</button>
                    <button onClick={this.ordenDesApellido.bind(this)}> Apellido descendente</button>
                    <button onClick={this.ordenAscEdad.bind(this)}> Edad ascendente</button>
                    <button onClick={this.ordenDesEdad.bind(this)}> Edad descendente</button>
                    <button onClick={this.ordenAscRegistro.bind(this)}> Registro ascendente</button>
                    <button onClick={this.ordenDesRegistro.bind(this)}> Registro descendente</button>
                  </div>
                </div>  
              </div>         

              <div className="my-5 flex flex-wrap -mx-2">
                {this.state.arrayTarjeta.map((item, idx) => {
                  return <Card 
                  key = {idx} 
                  elemento = {item} 
                  onDelete = {this.borrarTarjeta.bind(this)}/>
                })}

                  <div className = "filtrarTarjetas" style={{width: "100%"}}> 
                    Texto a buscar:
                    <input type="text" className="nombreUsuario" onChange = {(evento) => this.setState({search: evento.target.value})}/> 
                    
                    <button className="botonBuscar" onClick = {() => this.filtrarTarjetas(document.querySelector('.nombreUsuario').value)}> 
                      Buscar 
                    </button> 

                  </div>

                  <div className="dropdown">
                  <button className="dropbtn">
                    Cambiar Orden
                    </button>
                  <div className="dropdown-content">
                    <button onClick={() => this.visualizacionHorizontal.bind(this)}>Horizontal </button>
                    <button onClick={() => this.visualizacionVertical.bind(this)} > Vertical </button>
                  </div>
                  
                 
                  </div>

                  

              </div>

                </div>

              </div>      

              <div className="agregarTarjetas">
                <label>¿Queres agregar más contactos?</label>
                <br></br>
                <input type="number" className="cantidadTarjetas"  placeholder="Cantidad de usuarios"/>
                <button className="botonAgregar" onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
                  Añadir
                </button>
              <div/>
                
              </div>
            </div>
              
              <div className="footer">  
                <Footer/>

              </div> 
      </body>
    );
  }
}
