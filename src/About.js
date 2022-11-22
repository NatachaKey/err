import video from './VideoOne.mp4';
const About = ()=>{
    return(
    
            <div >
                <div className='aboutLines'>
               <p className='par'>CANDYSHOP</p>
               <p className='par'>Your favourite genuine sweets</p>
            <p className='par italic'>Since 1948</p>  
            </div>
            <video autoPlay muted loop className='background-video'>
                <source src={video} type="video/mp4" />
                 </video>    
           
            
       
        </div>
       
      
    
    )
}

export default About;
