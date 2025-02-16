import React from "react";
import Banner from './Images/Clothes2.jpg';
import Men from './Images/Men1.jpg';
import Women from './Images/Women4.jpg';
import Kid from './Images/kids1.webp';
function Home(){
    return(
        <div className="container">
            <div className="row">
            <div className="col-12 Banner1">
                <img src={Banner} width="100%"></img>
            </div>
            </div>
            <div className="row">
                <div className="col-12 home1">
                    <div className="row home2">
                        <div className="left col-6"><q>SHEIN</q><br/> <strong className="f1">Your One-Stop Style Destination</strong></div>
                        <div className="right col-6">SHEIN is a global fashion and lifestyle ONLINE retailer COMMITTED TO making the beauty of fashion accessible to ALL. The fashion industry has always struggled to match supply and demand.</div>
                    </div>
                    <div className="row home2">
                        <div className="col-4">
                            <img src={Men} className="I1 img-fluid"></img>
                        </div>
                        <div className="col-4">
                            <img src={Women} className="I2 img-fluid"></img>
                        </div>
                        <div className="col-4">
                        <img src={Kid} className="I2 img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Home