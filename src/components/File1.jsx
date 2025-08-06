import React, { useRef, useState,useEffect } from 'react'
import logo from '../assets/logo.png'; // correct relative path
import logo2 from '../assets/logo2.png'
import image from '../assets/image.png'
import mrlogo2 from '../assets/mrlogo2.svg'
import mrlogo3 from '../assets/mrlogo3.png'

import './File_sty.css'

const File1 = () => {

    const [logopic,setlogo] = useState(mrlogo2);
    const logobutRef = useRef(null)
    

        function changelogo(){
          if (logobutRef.current) {
              logobutRef.current.style.backgroundColor = 'skyblue'
              // logobutRef.current.style.boxShadow = 'inset 0px 0px 99px white ';
              logobutRef.current.style.transform = 'scale(1.2)';
              logobutRef.current.style.transition = 'all 0.75s ease-in-out';
              
          }
          setTimeout(() => {
            logobutRef.current.style.transform = 'scale(1)';
            logobutRef.current.style.boxShadow = ' 0px 0px 0px';
            if (logopic === mrlogo2)
              setlogo(mrlogo3)
            else setlogo(mrlogo2)
          }, 750);
        }
    

  function changetheme(){

  }

console.log('here we are')
const [titleText, setTitleText] = useState('MR - Coders');

    useEffect(() => {
    const interval = setInterval(() => {
      
      setTitleText((prev) => (prev === 'MR - Coders' ? 'IIITians' : 'MR - Coders'));
    }, 6000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className='outcontain'>
        <div className="outmost">
          <div className="Head">

              <div className="logo">
                <button onClick={changelogo} className='logobut' ref={logobutRef}><img src={logopic} alt="logo" className='logimg'/></button>
              </div>

            
              <div className="Tittle" id='MrTittle'>{titleText}</div>
            
              <div className="extra">
                  <div className="know"><a href='/Info.html' rel="noopener noreferrer">Know more</a>
                  </div>
                  <div className="theme">
                    <button onClick={changetheme}>Change Theme</button>
                  </div>
                  
              </div>
          </div>
          <div className="form">
             <div className="arr">You can apply to join Mr-Coders by filling the given form</div> <a href="/form.html" rel="noopener noreferrer">Click to apply</a>
          </div>


          <div className="body" >
                <div className="btext"><h2 id='bthead'>About &nbsp;&nbsp;MrCoders</h2>
                    <div className="descrip">
                        Mr - Coders is a group of students at IIIT-G. It was originally created in August 2k24 with 5 founding members.
                        <br /><br />
                        1) The Om Nimbarte (Omni) <br />
                        2) Anuj Parota (Parota) <br />
                        3) Mohit Soni (Mohit bhai) <br /> 
                        4) Suyash Pawar (Sushi) <br />
                        5) Vishal Pandey (Pandey) <br /> <br />

                        It's been almost a year now and we are still together enjoying studing vibing with each other. We later add 2 more members in our friend circle who are Pankaj_Sharma and Kshitij_Jha.
                        <br />
                        <br />
                       <div className='km'> Please click on <a href="/Info.html" className='kma'>Know more</a> button for more info.</div>
                    </div>
                </div>   
                  <div className="grp">
                    <img src={image} alt="img"/>
                  </div>
          </div>

            <div className="memories">
                  <div className="mtext">
                    Memories that we have created till now: &nbsp;&nbsp;&nbsp;
                      
                      <a href='./memories.html'target="_blank" rel="noopener noreferrer" className='glow-button'>Click Here</a>
                  </div>
            </div>
              <br /><br />
            <div className="copy">
              © 2025 presents MR-Coders. All rights reserved by Om IIITG
            </div>
        </div>
    </div>
  )
}

export default File1