import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Pagina de prueba de APIS</h1>
      <Header/> 
      <Main/>
      <Footer/>  
    </div>
  );
}

export default App;
