import React, { useState } from "react";
import './BodPage.css';

function ContainerOne() {
    return (
      <div className='container-bod-one'>
        <div className="container-bg">
        </div>
      </div>
    )
}

function ContainerTwo() {
    const [showModal, setModal] = useState(false);
    const [obj, setObj] = useState(null);
    const arr = [
        { 
            photo: '/images/FM.jpg',
            name: 'Fadel Muhammad',
            position: 'President Commissioner',
            country: 'Indonesia',
            age: '70',
            gender: 'Male',
            dates_appointment: '-',
            qualification: [
                'Bandung Institute of Technology, Engineering Physics (1973-1978)',
                'Gajah Mada University, Doctorate Public Administration (2009-2011)',
                'Brawijaya University, Professor'
            ],
            experience: `He had a long and successful history as an entrepreneur which led him to serve as the Vice President of Indonesia Chamber of Commerce and Industry (Kadin).
                He also has been a member of People’s Consultative Assembly since 1992 and now appointed as the Deputy Chairman.
                On 1994, he was awarded the Lee Kuan Yew Fellowship Award by the Republic of Singapore for his contribution to the development as well as the relationship and goodwill between both countries.
                He was appointed as the first Governor of the-newest Indonesia province, Gorontalo, after winning first Governor election from 2001-2009.
                From October 22, 2009-2011 he was appointed as Minister of Maritime Affairs and Fisheries.
                His contribution to the country were recognized by the government with some Presidential Award and the highest recognition is BINTANG MAHAPUTRA ADIPRADANA.`
        },
        { 
            photo: '/images/presdir.jpeg',
            name: 'Agung Sembodo',
            position: 'General Manager / President Director',
            country: 'Indonesia',
            age: '41',
            gender: 'Male',
            dates_appointment: '1 July 2016',
            qualification: [
                'Industrial Management and Engineering',
                'Petroleum Technology ',
                'Naval and Mechanical Architecture'
            ],
            experience: `Have more than 20 years of working experience in the Oil and Gas industry with onshore and offshore experiences. 
                Start working in Bumi Armada Berhad in May 2016 for the Karapan Armada Sterling III project. Since November 2016, assigned as The President Director of PT Armada Gema Nusantara (AGN) and appointed as the General Manager of Operations Indonesia in 2020. 
                Working experiences with Total E&P; Amerada HESS; Qatar Petroleum, BW Offshore and M3NERGY 
                We are ready and capable to provide hands-on oil and gas floating facilities such as FPSO/FPU and open the opportunity for FLNG/FSRU projects in Indonesia. `
        },
    ];

    const closeModal = () => {
        setModal(false)
    }

    const Modal = ({item}) => {    
        return (
            <>
                <div id="detailModal" className="container-modal">
                    <div className="modal-main">
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="modal-body">
                                <h1>
                                    {item.name}
                                </h1>
                                <h2>
                                    {item.position}
                                </h2>
                                <div>
                                    <h4>Country: {item.country}</h4>
                                    <h4>Age: {item.age}</h4>
                                    <h4>Gender: {item.gender}</h4>
                                    <h4>Dates of Appointment: {item.dates_appointment}</h4>
                                </div>
                                <div>
                                    <h4>Qualification: </h4>
                                    <ul style={{ padding: '1rem' }}>
                                        {item.qualification.map((el) => {
                                            return (
                                                <li>{el}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Experience: </h4>
                                    <p>{item.experience}</p>
                                </div>
                            </div>
                            <div style={{ position: 'relative', padding: '1rem', float: 'right' }}>
                                <button type="button" onClick={closeModal}>
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='container-bod-two'>
                <div className='container-bod-two-content'>
                    <h1>BOARD OF DIRECTORS</h1>
                    <div className="container-bod-two-photo">
                        {arr.map((el, id) => {
                            return (
                                <div key={id} className="container-bod-two-box">
                                    <div style={{ background: `url('${el.photo}') center/cover`, width: 250, height: 350 }}></div>
                                    <h2 style={{ height: '50px', textAlign: 'center' }}>{el.name}</h2>
                                    <div style={{ height: '50px', textAlign: 'center' }}>{el.position}</div>
                                    <div className="container-bod-two-btn" onClick={() => { setModal(true); setObj(el); }}> Read More </div>
                                </div>
                            )
                        })}
                    </div>
                    { showModal && <Modal item={obj} /> }
                </div>
            </div>
        </>
    )
}

function BodPage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
        </>
    )
}

export default BodPage;