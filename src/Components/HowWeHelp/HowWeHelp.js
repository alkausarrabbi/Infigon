import React from 'react';
import Header from '../../Shared/Header';
import img from "../../images/all-devices-black.png"

const HowWeHelp = () => {
    return (
        <>
        <Header></Header>
        <div className='container-fluid h-100 mb-5'>
            <div className='row p-5' style={{backgroundColor:"#0f3b88"}}>
                <div className='col-lg-2 col-md-2 col-sm-2 mb-5'>
                   <div className="ms-5" style={{borderLeft:"3px solid #12d0d1",height:"100%"}}></div>
                </div>
                <div className='col-lg-5 col-md-10 col-sm-10 mt-5 mb-5'>
                    <div className='d-flex justify-content-center d-flex align-items-start  flex-column '>
                    <h2 className='text-white mt-5'>How We Can Help</h2>
                    <p className='text-white p-3 text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum id aspernatur fuga, autem molestias error beatae iusto, impedit debitis, omnis cumque! Quasi aspernatur ullam mollitia maiores. Fugiat quas officia quam!</p>
                    <div className='d-flex  justify-content-center align-items-center text-white p-3'>Step 1 &nbsp; <h3 style={{color:"#12d0d1"}}>SELF ANALYSIS</h3></div>
                    <div className='d-flex  justify-content-center align-items-center text-white p-3'>Step 2 &nbsp; <h3 style={{color:"#12d0d1"}}>SELF ANALYSIS</h3></div>
                    <div className='d-flex  justify-content-center align-items-center text-white p-3'>Step 3 &nbsp; <h3 style={{color:"#12d0d1"}}>SELF ANALYSIS</h3></div>
                    <div className='d-flex  justify-content-center align-items-center text-white p-3'>Step 4 &nbsp; <h3 style={{color:"#12d0d1"}}>SELF ANALYSIS</h3></div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 mt-5 mb-5'>
                    <div className='mt-5'>
                    <img src={img} alt="" className='img-fluid mt-5 ' />
                    </div>
                    
                </div>

            </div>
           
            
        </div>
       
            
        </>
    );
};

export default HowWeHelp;