import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import React, {Component} from "react";

fetch("https://randomuser.me/api/?results=10")
.then(r => r.json())
.then((resultado)=>{
  console.log(resultado)
})
.catch((e)=> console.log(e))


const Tarjeta = [{name:{title:"Sr", first:"Sofia", last:"Mollón"}, id:"0", gender:"female", picture:"https://i.blogs.es/4f0662/consejos-foto-movil-01/450_1000.jpg", location:{street:{number:1305, name:"Av. Santa Fe"}, city:"CABA", state:"Buenos Aires", postcode:"1234", country: "Argentina"}, email:"smollon@udesa.edu.ar", phone:"112233445566", registered:{date:"30/03/2021"}, nat:"IE", dob:{date:"05/11/1999", age:21}}]

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      arrayTarjeta: Tarjeta
    }
  };

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

              {this.state.arrayTarjeta.map((item, idx) => {
                return <Card key = {idx} elemento = {item} onDelete = {this.borrarTarjeta.bind(this)}/>
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
