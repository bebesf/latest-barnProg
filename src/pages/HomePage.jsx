import React from 'react'
import "../style/HomePage.css";

import RainAccumulation from "../components/RainAccumulation";
import ThermalSum from "../components/ThermalSum";
import SummerRain from '../components/SummerRain';
import TemperatureData from "../components/TemperatureData";




import KannusImage from "../assests/Kannus.png" ;
import VaisalaImage from "../assests/Vaisala.png" ;
import KpeduImage from '../assests/Kpedu.png';



const HomePage = () => {

    return (
        <div className="home-page-container">

          <div className="homeHeader">
          <div className="logoWrapper">
             
              <div className="vaisalaLogo">
                <img src={VaisalaImage} alt="vaisala"/>
              </div>
              </div>

              <div className="headerTitle">
                <h2>OLLIKKALAN SÄÄ HOME</h2>
                <p>keskiviiko <span>25.3</span></p>
              </div>

              <div className="logoWrapper">
             <div className="kpepuLogo">
              <img src={KpeduImage} alt="kpedu"/>
             </div>
             </div>

          </div>
          
          <div className="row-container">

            <div className="child_container">
              <div className="comp_child_large">
               <TemperatureData /> 
              </div>
            </div>
             
            <div className="child_container2">
              <div className="comp_child">
              <SummerRain />  
              </div>
              <div className="comp_child">
                <SummerRain />
              </div>
              <div className="comp_child">
                 <RainAccumulation  /> 
              </div>
              <div className="comp_child">
                 <ThermalSum /> 
              </div>
            </div>
            
            
            
          </div>


          <div className="footer">
            <div className="footerImg">
              <img src={KannusImage} alt="kannus"/>
            </div>
          </div>
        </div>
      );
}

export default HomePage
