import './intro.css'
import coding from '../../img/coding.jpg'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>Hossam Abdel Nasser</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Software Engineer</div>            
                  </div>
                </div>
                <p className="i-desc">
                  MERN Stack Developer
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img className='i-image' src={coding} />
        </div>
    </div>
  )
}

export default Intro