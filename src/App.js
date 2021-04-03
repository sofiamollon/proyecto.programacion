// IMPORTO LOS ARCHIVOS DE LA CARPETA COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

const Tarjeta = [{name:{title:"Sr", first:"Sofia", last:"Mollón"}, gender:"female", picture:"https://i.blogs.es/4f0662/consejos-foto-movil-01/450_1000.jpg", location:{street:{number:1305, name:"Av. Santa Fe"}, city:"CABA", state:"Buenos Aires", postcode:"1234", country: "Argentina"}, email:"smollon@udesa.edu.ar", phone:"112233445566", registered:{date:"30/03/2021"}, nat:"IE", dob:{date:"05/11/1999", age:21}}]

function App() {
  return (
    <body>
    <div class="wrapper">
      <div className="App">
        <Header/>
        <div className='container mx-auto'>

        <div className="my-5 flex flex-wrap -mx-2">
          {Tarjeta.map(function(item, idx){
            return(
              <Card key={idx} elemento={item}/>
            )
          })}
        <div class="push"></div>
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

export default App;
