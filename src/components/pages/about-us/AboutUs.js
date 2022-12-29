import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './AboutUs.css';

function ContainerOne() {
    return (
      <div className='container-aboutus-one'>
        <div className='container-bg'>
            <div className='container-aboutus-one-content'>
            <h1>ARMADA GEMA NUSANTARA</h1>
            <p>At PT. Armada Gema Nusantara, we strive to meet, and where possible exceed, all our client’s expectations and values within the everchanging Oil, Gas and Energy industry. We engage with the correct technologies to further grow and keep sustainability in balance.</p>
            </div>
        </div>
      </div>
    )
}

function ContainerTwo() {
    return (
      <div className='container-aboutus-two'>
        <div className='container-aboutus-two-content'>
            <h1>CORPORATE <span style={{color: '#00C04C'}}>PROFILE</span></h1>
            <p>At PT. Armada Gema Nusantara, we strive to meet, and where possible exceed, all our client’s expectations and values within the everchanging Oil, Gas and Energy industry. We engage with the correct technologies to further grow and keep sustainability in balance.</p>
            <p>PT. ARMADA GEMA NUSANTARA (PT. AGN) is a JV Company with Bumi Armada, a Malaysian based international company.  We are operating FPSO (Floating Production, Storage and Offloading) “Karapan Armada Sterling III” to support gas development located in Madura Strait, Indonesia.</p>
        </div>
      </div>
    )
}

function ContainerThree() {
    return (
        <div className='container-aboutus-three-img-bg'>
            <div className='container-aboutus-three'>
                <div className='container-aboutus-three-content'>
                    <h1>OUR BEGINNING</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 40 }}>
                        <p>Established since 2011, we are committed to bring innovative solutions to provide high quality and reliable facilities and services while incorporating leading and proven technologies for a sustainable tomorrow.</p>
                        {/* <p>In December 1995, the company was incorporated as a public limited company (under the Companies Act, 1965). The Bumi Armada Group includes diversified subsidiaries as well as joint venture companies.</p>
                        <p>Since then, our businesses have evolved from managing smaller tonnage vessels in the 1970s to being able to design, build and operate FPSOs with increasing complexity, functional capability, and size.</p>
                        <p>Drawing on our decades of experience, we have developed a positive reputation for our project management capabilities. We deliver innovative solutions and quality facilities that incorporate leading and proven technologies to cater for the needs of our clients.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContainerFour() {
    const arr = [
        {
            value: 'safety',
            class: 'img-safety',
            title: 'Safe',
            text1: 'We care for the safety of each other and lead by example.',
            text2: 'We aim to take a proactive approach in protecting the environment, maintaining our assets and safeguarding information.'
        },
        {
            value: 'united',
            class: 'img-united',
            title: 'United',
            text1: 'We place a high importance on working as one team and want to pursue and achieve results together.',
            text2: 'We seek the participation of others in resolving problems, encourage mutual respect and always welcome feedback.'
        },
        {
            value: 'responsibility',
            class: 'img-responsibility',
            title: 'Responsibility',
            text1: 'We take responsibility in always delivering on our promises and we commit ourselves personally in adding value to our stakeholders.',
            text2: 'We want to conduct our business in good governance and with a strong moral compass.'
        },
        {
            value: 'excellence',
            class: 'img-excellence',
            title: 'Excellent',
            text1: 'We are driven by our ambition to continuously improve.',
            text2: 'We seek to learn from others, we challenge others constructively and have the discipline to make the extra effort each time.'
        },
    ]
    const Safety = () => {
        return (
          <svg width="88" height="110" viewBox="0 0 88 110" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0214511 36.5981C0.0214511 30.0294 0.0397858 23.4608 1.52588e-05 16.8921C1.52588e-05 16.0402 0.217203 15.6386 1.04933 15.3405C15.0282 10.3204 28.9988 5.27297 42.9614 0.198151C43.6615 -0.0726094 44.4397 -0.0638653 45.1335 0.222514C59.0226 5.26691 72.9188 10.289 86.8222 15.2887C87.74 15.6173 88.0092 16.0311 88.0061 16.9773C87.9725 29.2019 88.0551 41.4295 87.9664 53.6541C87.844 70.056 81.1136 83.2055 67.8883 92.9931C60.3289 98.5851 52.6501 104.022 45.0509 109.565C44.2769 110.131 43.7813 110.156 42.9889 109.565C35.0868 103.785 27.0562 98.1896 19.2459 92.2933C7.88068 83.7197 1.35834 72.2618 0.309005 58.0992C-0.21719 50.9646 0.217212 43.76 0.217212 36.5859L0.0214511 36.5981ZM3.21838 17.2785V18.6141C3.21838 30.4128 3.12654 42.2145 3.23974 54.0101C3.38964 69.2589 9.704 81.4926 21.9962 90.6443C26.7136 94.1583 31.5289 97.5446 36.3013 100.989C38.8691 102.843 41.4399 104.694 44.0137 106.544C51.616 101.068 59.2367 95.7648 66.6188 90.1636C78.501 81.1518 84.5706 69.0824 84.748 54.2444C84.8918 42.321 84.7755 30.3945 84.7755 18.4681V17.3363C84.5338 17.2177 84.3533 17.1081 84.1636 17.0321C71.0149 12.2859 57.86 7.55076 44.699 2.82684C44.1881 2.67723 43.6424 2.6943 43.1419 2.87553C33.7275 6.24657 24.3233 9.63686 14.9293 13.0464C11.044 14.4581 7.14648 15.8607 3.21838 17.2815V17.2785Z"/>
            <path d="M23.327 50.8759L28.2524 45.9867L39.125 56.8057L59.3591 36.6768L64.5599 41.8489L39.4065 66.8701L23.327 50.8759Z"/>
        </svg>
        )
      }
    return (
        <div className='container-aboutus-four'>
            <div className='container-aboutus-four-content'>
                <h1>OUR CORE VALUES</h1>
                <div className='container-aboutus-four-icon'>
                    {arr.map(item => {
                        return (
                            <>
                                <div className='container-aboutus-four-box'>
                                    { item.value === 'safety' ? <Safety /> : <div className={item.class}></div> }
                                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: 40, fontWeight: 700 }}>{item.title}</h1>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <p>{item.text1}</p>
                                        <p>{item.text2}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function ContainerFive() {
    return (
        <>
            <div className='container-aboutus-five'>
                <div className='container-aboutus-five-img2'>
                    <div style={{ background: 'linear-gradient(0deg, #260A87 0%, rgba(217, 217, 217, 0) 100%)', width: '100%', height: '100%', padding: 20 }}>
                        <div className='vision-text'>VISION</div>
                        <div className='vision-text-p'>To be the preferred provider of offshore production and support services to our clients.</div>
                    </div>
                </div>
                <div className='container-aboutus-five-img1'>
                    <div style={{ background: 'linear-gradient(0deg, #260A87 0%, rgba(217, 217, 217, 0) 100%)', width: '100%', height: '100%', padding: 20 }}>
                        <div className='vision-text'>MISSION</div>
                        <div className='vision-text-p2'>1. To operate and deliver on our commitments to the satisfaction of our stakeholders, safely, on time and within budget.</div>
                        <div className='vision-text-p2'>2. To add value by effectively managing risks through a hands-on approach.</div>
                        <div className='vision-text-p2'>3. To continuously improve our capabilities and to apply the lessons learnt to the way we work.</div>
                        <div className='vision-text-p2'>4. To ensure good governance in all our practices, reduce our environmental footprint, support our local communities and promote social sustainability awareness wherever we operate.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ContainerSix() {
    const arr = [
        { 
            img: '/images/img-award1.jpg',
            title: 'Award 1',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award2.jpg',
            title: 'Award 2',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award3.jpg',
            title: 'Award 3',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award4.jpg',
            title: 'Award 4',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award5.jpg',
            title: 'Award 5',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award1.jpg',
            title: 'Award 6',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award2.jpg',
            title: 'Award 7',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award3.jpg',
            title: 'Award 8',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award4.jpg',
            title: 'Award 9',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
        { 
            img: '/images/img-award5.jpg',
            title: 'Award 10',
            desc: '2017 Marine Safety and Operational Recognition by Repsol for Armada Tuah 26 and its shore management' 
        },
    ]
    return (
        <div className='container-aboutus-six'>
            <div className='container-aboutus-six-content'>
                <h1>CORPORATE AWARD</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='container-award'>
                        <Slide autoplay={true} slidesToScroll={1} slidesToShow={5}>
                            {arr.map((el, i) => {
                                return (
                                    <div key={i} className='container-award-box'>
                                        <div style={{
                                            background: `url(${el.img}) center/contain no-repeat`,
                                            width: '100%',
                                            height: '100%'
                                            }}></div>
                                        <div className='container-award-title'>{el.title}</div>
                                        <div className='container-award-desc'>{el.desc}</div>
                                    </div>
                                )
                            })}
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutUs() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />
            <ContainerFive />
            <ContainerSix />
        </>
    )
}

export default AboutUs;