import Nav from './Component/NavBar/Nav';
import NavHead from './Component/NavBar/NavHead';
import HomeHeader from './Component/HomeHeader/HomeHeader';
import Investor from './Component/Investor/Investor';
import Description from './Component/Description/Description';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Fix from './Component/WhyFix/Fix';
import Solution from './Component/Solution/Solution';
import Install from './Component/WhatWeDo/Install';
import Review from './Component/Review/Review';
import Brand from './Component/Brands/Brand';
import Billboard from './Component/BillBoard/Billboard';
import Subscribe from './Component/Subscribe/Subscribe';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
         <Nav/>
         <NavHead/>
         <HomeHeader/>
         <Investor/>
         <Description/>
         <Fix/>
         <Solution/>
         <Install/>
         <Review/>
         <Brand/>
         <Billboard/>
         <Subscribe/>
         <Footer/>
  
         


    </div>
  );
}

export default App;
