// IMPORTO LOS ARCHIVOS DE LA CARPETA COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

const Tarjeta = [{name:{title:"Sr", first:"Sofia", last:"Mollón"}, gender:"female", picture:"https://i.blogs.es/4f0662/consejos-foto-movil-01/450_1000.jpg", location:{street:"Av. Santa Fe", city:"CABA", state:"Buenos Aires", postcode:"1234"}, email:"smollon@udesa.edu.ar", phone:"112233445566", registered:{date:"30/03/2021"}, nat:"IE", dob:{date:"05/11/1999", age:21}}]

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mx-auto'>

        <div className="my-5 flex flex-wrap -mx-2">
          {Tarjeta.map(function(item, idx){
            return(
              <Card key={idx} elemento={item}/>
            )
          })}

        </div>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
