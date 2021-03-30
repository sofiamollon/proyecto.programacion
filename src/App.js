// IMPORTO LOS ARCHIVOS DE LA CARPETA COMPONENTS
import Header from "./components/Header"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mx-auto'>

        <div className="my-5 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
              <Card photo='https://picsum.photos/800/600' />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
              <Card photo='https://picsum.photos/800/600' />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
              <Card photo='https://picsum.photos/800/600' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
