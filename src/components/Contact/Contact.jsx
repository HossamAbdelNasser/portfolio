import './contact.css'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";

import {useRef} from 'react';

const Contact = () => {

  const formRef = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              01092480781
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              hossamabdelnasser9@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              5 Ahmed El Sallab, Zahraa Nasr City
            </div>
            <div className="c-social">
                <a href='https://github.com/HossamAbdelNasser'><img src={Github} alt="Github"/></a>

                </div>
          </div>
                </div>
                
            </div>
    </div>
  )
}

export default Contact