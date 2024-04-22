import './App.css';
import HelloWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'
//daqui para baixo o nivel é maior
import Eventos from './components/Eventos';
import Form from './components/Form';

function App() {

  const name = "Fernanda";

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Olá React !</h1>

      <h3>Testendo CSS</h3>

      <Frase/>

      <div className="fernanda">
          <h1>{name}</h1>

          <p>Soma: {2 + 2}</p>

          <img src={url} alt='teste'></img>    
      </div>
      <HelloWorld/>
      <SayMyName nome={name}/>
      <Pessoa
        nome="Feh"
        idade="24"
        profissao="Programadora Front-End"
        foto="https://via.placeholder.com/150"
      />

    <List/>





    <div className='Space'>
        <h1>Testnado Eventos</h1>
        <Eventos numero={2 + 4}/>
        <Form />
    </div>
    </div>
    
  );
}

export default App;
