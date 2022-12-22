import logo from './logo.svg';
import './App.css';
import TopHeader from './components/header/TopHeader';
import MiddleHeader from './components/header/MiddleHeader';
import BottomHeader from './components/header/BottomHeader';
import Carusel from './corusel/Carusel'
import CardCarusel from './components/card/CardCarusel';
import CardCarusel2 from './components/card/CardCarusel2';
import RightButton from './components/header/RightButton';
import CaruselBrands from './components/header/CaruselBrands';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';
import Footer from './components/card/Footer';

function App() {
  return (
    <div className="app">
    <TopHeader/>
    <MiddleHeader/>
    <BottomHeader/>
    <Carusel/>
    <CardCarusel/>
    <CardCarusel2/>
    <img src="https://cdn.goodzone.uz/goodzone/838692df-09a0-403c-81b6-e588a76869e1" alt="" width={1500} />
    <RightButton/>
    <CaruselBrands/>
    <div className='yy'>
      <h2 style={{height:'1000'}}>Ilova orqali <br></br>buyurtma berish <br /> ham osonroq</h2>
      <p>O'rnatish:</p>
      <a href="https://play.google.com/store/apps/details?id=uz.goodzone&hl=ru&gl=US">
      <img src="https://goodzone.uz/images/google-play.png" alt="" width={200}/>
      </a>
      < a href='https://apps.apple.com/nz/app/goodzone-store/id1538968188'>
      <img src="https://goodzone.uz/images/app-store.jpg" alt="" width={200} />   </a> 
    <img  src="https://cdn.goodzone.uz/goodzone/deff8a92-5161-49d6-bb28-e97cd717744f" alt="" width={450} />

    </div>
    <Footer/>
    </div>
  );
}

export default App;
