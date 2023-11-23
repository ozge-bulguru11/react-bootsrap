
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/style.scss';
import Navbar from './sections/navbar';
import Section from './sections/section';
import Header from './sections/header';
import Footer from './sections/footer';




function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Section />
      <Footer />
    </div>
  );
 
}

export default App;


 