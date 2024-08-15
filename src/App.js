import './App.css';
import Navbar from './components/Navbar/Navbar';
import Head from './components/Head/Head';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Head></Head>
      <About></About>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
