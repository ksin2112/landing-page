import React from 'react'
import bgelement4 from '../img/bg-element2.svg';
import bgelement5 from '../img/bg-element3.svg';
import bgelement6 from '../img/bg-element5.svg';
import bgelement1 from '../img/bg-element1.svg';
import plan1 from '../img/plan1.png';
import plan2 from '../img/plan2.png';

function Plans() {
    return (
        <div>
        <div id="plans" className="heading61" style={{width:'100%'}}>
          
        {/* <img style={{marginRight:'20vw',marginLeft:'-40vw',marginTop:'-30rem',width:'40rem', zIndex:'-1'}} 
          src={bgelement4}></img> */}
        <img  style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'-40vw',marginTop:'7rem'}} src={bgelement6}>
          </img>
          
          <p > Our Plans </p>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20rem'}} src={bgelement5}>
          </img>
          
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'20vw',marginTop:'-7rem'}} src={bgelement4}></img>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20remx'}} src={bgelement1}></img></div>
        
        <div className="grid3"  >
        <div className="grid1-3">
          <img width="auto" height="80%" src={plan1}></img>
          <div className="heading4"  id="details"> <button className="heading4-bt"  style={{boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)',width:'18rem'}}><p><a href="https://prepnjob.typeform.com/to/ySvT3ePm" target="blank" style={{color:'black', textDecoration:'none'}}>Book Your Seat !!</a></p></button></div>
           <p style={{fontSize:'2vh',marginTop:'-5vh'}}>Limited Seats</p>
         

          
          {/* <div className='top'>
            <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● Job Opportunities at Top companies</p> </div>
            <div className="free">
              <p><strike>3,999/-</strike>  1,999/-</p>
              </div> */}
              </div>
              {/* <div className="grid2-3">
              
               <div  style={{ borderTopLeftRadius: '30px',
  borderTopRightRadius:' 30px',backgroundColor: '#92ffa9',
  width: '100%'}}>
            <p>Recommended</p>
              </div>
          <div className='top'>
          
          <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● <b>Job Opportunities at Top companies</b></p>
            <p>● <b>Unlimited Guaranteed Interviews</b></p>
            <p>● Free GD, HR & Technical Interview Practice</p></div>
            <div className="free">
            <p><strike>7,999/-</strike>  3,999/-</p>
              </div> 
              </div> */}
           <div className="grid3-3">

           <img width="auto" height="80%" src={plan2}></img>
           <div className="heading4"  id="details"> <button  className="heading4-bt" style={{boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)',width:'18rem'}}><p><a href="https://prepnjob.typeform.com/to/BWoXT64i" target="blank" style={{color:'black', textDecoration:'none'}}>Start Your Test !!</a></p></button></div>
    
    
          {/* <div className='top'>
          <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● Job Opportunities at Top companies</p>
            <p>● <b>1 on 1 Placement Assistance</b></p>
            <p>● <b>Guaranteed Job</b></p>
            <p>● <b>Assured Money Back</b></p>
            <p>● Free GD, HR & Technical Interview Practice</p> </div>
            <div className="free">
            <p><strike>15,999/-</strike>  7,999/-</p>
              </div> */}
              </div> 
       </div>
            
        </div>
    )
}

export default Plans
