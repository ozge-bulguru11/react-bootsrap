
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import Card from './components/card';
import Section from './sections/section';
import Header from './sections/header';
import Footer from './sections/footer';



function App() {
  return (
    <div>
      <Header />
      <Card />
      <Section />
      <Footer />
    </div>
  );
}

export default App;


