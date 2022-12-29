import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import './Home.css';
import { Fade } from 'react-slideshow-image';

function ContainerOne() {
  const arr = [
    { img: '/images/P7180242.jpg',
      title: 'Kapal 3'
    },
    { img: '/images/P7100055.jpg',
      title: 'Kapal 4'
    },
    { img: '/images/P7180244.jpg',
      title: 'Kapal 1'
    },
    { img: '/images/P7100098.jpg',
      title: 'Kapal 2'
    },
  ];
  const properties = {
    prevArrow: <button style={{ display: 'none' }}></button>,
    nextArrow: <button style={{ display: 'none' }}></button>
  }
  return (
      <div className='slide-container'>
        <Fade {...properties} autoplay={true} indicators={true} scale={1.4}>
          {arr.map((el, idx) => {
            return (
              <div className='fade-container' key={idx}>
                <div style={{
                  background: `url(${el.img}) center/cover no-repeat`,
                  width: '100%',
                  height: '100%'
                }}>
                  <div className='container-bg'>
                    <div className='hero-text'>
                     <h1>DISCOVER THE WORLD OF ARMADA GEMA NUSANTARA</h1>
                     <p>ARMADA GEMA is an Indonesian Based offshore energy facilities and services provider with a presence in over 10 countries spread across three continents, supported by over 929 people from over 27 nationalities. </p>
                     <div className='hero-btns'>
                       <Link to='/about-us' className='btn-link'>
                         See Corporate Profile
                       </Link>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Fade>
      </div>
    // <div className='hero-container'>
    //   <div className='container-bg'>
    //     <div className='hero-text'>
    //       <h1>DISCOVER THE WORLD OF ARMADA GEMA NUSANTARA</h1>
    //       <p>ARMADA GEMA is an Indonesian Based offshore energy facilities and services provider with a presence in over 10 countries spread across three continents, supported by over 929 people from over 27 nationalities. </p>
    //       <div className='hero-btns'>
    //         <Link to='/sign-up' className='btn-link'>
    //           See Corporate Profile
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

function ContainerTwo() {
  return (
    <div className='container-two'>
      <div className='container-two-center'>
        <div className='container-two-text'>
          <h1>An All in One Solutions for Your <span style={{color: '#00C04C'}}>FPO Needs</span> </h1>
          <p>The FPO business specialises in engineering, procurement, construction, commissioning, and the operations of floating oil and gas facilities as per the specific requirements of clients.</p>
          <div className='btn'>
            <Link to='/operations' className='btn-link'>
              See FPO Lists
            </Link>
          </div>
        </div>
        <div className='container-two-image'>
          <div className='img-1'>
            <div className='img-2'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContainerThree() {
  const Safety = () => {
    return (
      <svg width="88" height="110" viewBox="0 0 88 110" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0214511 36.5981C0.0214511 30.0294 0.0397858 23.4608 1.52588e-05 16.8921C1.52588e-05 16.0402 0.217203 15.6386 1.04933 15.3405C15.0282 10.3204 28.9988 5.27297 42.9614 0.198151C43.6615 -0.0726094 44.4397 -0.0638653 45.1335 0.222514C59.0226 5.26691 72.9188 10.289 86.8222 15.2887C87.74 15.6173 88.0092 16.0311 88.0061 16.9773C87.9725 29.2019 88.0551 41.4295 87.9664 53.6541C87.844 70.056 81.1136 83.2055 67.8883 92.9931C60.3289 98.5851 52.6501 104.022 45.0509 109.565C44.2769 110.131 43.7813 110.156 42.9889 109.565C35.0868 103.785 27.0562 98.1896 19.2459 92.2933C7.88068 83.7197 1.35834 72.2618 0.309005 58.0992C-0.21719 50.9646 0.217212 43.76 0.217212 36.5859L0.0214511 36.5981ZM3.21838 17.2785V18.6141C3.21838 30.4128 3.12654 42.2145 3.23974 54.0101C3.38964 69.2589 9.704 81.4926 21.9962 90.6443C26.7136 94.1583 31.5289 97.5446 36.3013 100.989C38.8691 102.843 41.4399 104.694 44.0137 106.544C51.616 101.068 59.2367 95.7648 66.6188 90.1636C78.501 81.1518 84.5706 69.0824 84.748 54.2444C84.8918 42.321 84.7755 30.3945 84.7755 18.4681V17.3363C84.5338 17.2177 84.3533 17.1081 84.1636 17.0321C71.0149 12.2859 57.86 7.55076 44.699 2.82684C44.1881 2.67723 43.6424 2.6943 43.1419 2.87553C33.7275 6.24657 24.3233 9.63686 14.9293 13.0464C11.044 14.4581 7.14648 15.8607 3.21838 17.2815V17.2785Z"/>
        <path d="M23.327 50.8759L28.2524 45.9867L39.125 56.8057L59.3591 36.6768L64.5599 41.8489L39.4065 66.8701L23.327 50.8759Z"/>
    </svg>
    )
  }
  return (
    <div className='container-three-img-bg'>
      <div className='container-three'>
        <div className='container-three-content'>
            <h1> OUR CORE VALUES</h1>
            <div className='container-three-content-2'>
              <div className='container-three-icon'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                  <Safety />
                  <p style={{ textAlign: 'center', color: 'black' }}>Safe</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                  <div className='img-world'></div>
                  <p style={{ textAlign: 'center', color: 'black' }}>United</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                  <div className='img-teamwork'></div>
                  <p style={{ textAlign: 'center', color: 'black' }}>Responsible</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                  <div className='img-excellence'></div>
                  <p style={{ textAlign: 'center', color: 'black' }}>Excellent</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='btn'>
                  <Link to='/contact' className='btn-link'>
                    Speak Up-Report Wrongdoings
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

function ContainerFour() {
  const list = [
    { 
      title: 'BUMI ARMADA REPORTS 2nd QUARTER 2022 NET PROFIT AFTER TAX OF RM186.3 MILLION',
      word: '. 26/08'
    },
    { 
      title: 'BUMI ARMADA REPORTS 2nd QUARTER 2022 NET PROFIT AFTER TAX OF RM186.3 MILLION',
      word: '. 26/08'
    },
    { 
      title: 'BUMI ARMADA REPORTS 2nd QUARTER 2022 NET PROFIT AFTER TAX OF RM186.3 MILLION',
      word: '. 26/08'
    },
    { 
      title: 'BUMI ARMADA REPORTS 2nd QUARTER 2022 NET PROFIT AFTER TAX OF RM186.3 MILLION',
      word: '. 26/08'
    },
  ]
  return (
    <div className='container-four'>
      <div className='container-four-content'>
        {list.map(el => {
          return (
            <>
              <div style={{ display: 'flex', flexDirection: 'row', height: '100px', alignItems: 'center', justifyContent: 'center' }}>
                <div className='container-four-text'>
                  {el.title}
                </div>
                <div className='container-four-btn'>
                  {el.word}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <ContainerOne />
      <ContainerTwo />
      <ContainerThree />
      <ContainerFour />
    </>
  );
}

export default Home;
