import React from "react";
import { useState } from "react";
import './Management.css';

function ContainerOne() {
    return (
      <div className='container-management-one'>
        <div className='container-bg'>
        </div>
      </div>
    )
}

function ContainerTwo() {
    const [showModal, setModal] = useState(false);
    const [obj, setObj] = useState(null);
    const arr = [
        { 
            photo: '/images/image00002.jpeg',
            name: 'Welly Ario Tarigan',
            position: 'Technical Operation Superintendent',
            country: 'Indonesia',
            age: '37',
            gender: 'Male',
            dates_appointment: '10 January 2019',
            qualification: [
                'Diploma in chemical engineering majoring industrial chemical technology',
                'Graduated from development program of PEC-Tech Indonesia majored instrumentation focusing on construction and commissioning',
                'Basic oil and gas qualification for process and utility technology by Aramis – Premier Oil Indonesia',
                'Hold bachelor’s Degree in industrial engineering'
            ],
            experience: `Welly responsible for Operation and Technical department in AGN focusing on any technical matters liaise with offshore operations, Bumi Armada team in headquarter including engineering, Client, external parties including regulatory and contractor. He also involves in maintaining day to day offshore operation, procurement side, asset integrity management of KAS3 facility in a safe, compliant, and efficient manner.
                Welly has 15 years of experience in the oil and gas industry including in operation, construction, and commissioning phase.            
                He started his career as a Jr. Instrument engineer serving construction and commissioning in Pulp and Paper industry including Santos Sampang onshore facility. In 2010 he moved to Central processing platform of Premier Oil in south china sea and continue his carrer in BW Offshore Indonesia. He continues his career to involve in Project phase of Karapan Armada Sterling 3 in 2016 under Bumi Armada and continue in AGN offshore operation until mid-2018. He moved to Schlumberger early production facility in east raudhatain Kuwait until 2019 before joined back to AGN in onshore base.`,
            id: 1
        },
        { 
            photo: '/images/image00010.jpeg',
            name: 'Arimunanto',
            position: 'Sr. Manager Human Resources & Administration',
            country: 'Indonesia',
            age: '52',
            gender: 'Male',
            dates_appointment: '13 May 2019',
            qualification: [
                'Master of Business, HR Management and Industrial Relations Victoria University of Technology, Melbourne, 1998-1999',
                'Bachelor Degree, International Law, University of Trisakti in 1996',
            ],
            experience: `Ari has 26 years working experience in HR field with various industries including oil & gas Companies. He was working with Baker & Hughes and HR Manager of PT. M3 Ketapang Sejahtera for 4 years. `,
            id: 2
        },
        { 
            photo: '/images/image00012.jpeg',
            name: 'Yance Dapot Panangian Gultom',
            position: 'Sr. Manager HSSEQ & Compliance',
            country: 'Indonesia',
            age: '42',
            gender: 'Male',
            dates_appointment: '9 February 2017',
            qualification: [
                'Bachelor of Engineering, University of Indonesia, Gas & Petrochemical Engineering 1998 – 2002',
                'Master of Environmental Business Administration, University of Twente, the Netherlands 2003 - 2004',
            ],
            experience: `Prior to joining PT. Armada Gema Nusantara, Dapot was HSE Team Lead at ConocoPhillips Indonesia & Medco E&P Natuna and had a total of 12 years experience in various HSE roles in production facilities, well operation and projects. He held NEBOSH and MIGAS HSE Supervisor (Pengawas K3 MIGAS) certifications as well as TÜV Functional Safety Engineer in Process Hazard and Safety Analysis.`,
            id: 3
        },
        { 
            photo: '/images/image00008.jpeg',
            name: 'Nitin Sharma',
            position: 'Sr. Manager Finance',
            country: 'India',
            age: '43',
            gender: 'Male',
            dates_appointment: '13 December 2022',
            qualification: [
                'Chartered Accountant (CA) | Institute of Chartered Accountant of India (ICAI), 2007',
                'Master’s in Commerce (M.Com.) | Rajasthan University 2003',
                'Bachelor’s in Commerce (B.Com.) | Rajasthan University 2001',
                'CWA Intermediate | Institute of Cost & Works Accountants of India 2010'
            ],
            experience: `Seasoned Chartered Accountant and Finance Professional with 15 years of proven expertise in Financial Planning & Analysis, Auditing & Taxation, Compliance Management, Reporting and Revenue Assurance; lay a keen eye on the accuracy and authenticity with a reputation of unwavering precision, credibility and integrity.`,
            id: 4
        },
        { 
            photo: '/images/image00004.jpeg',
            name: 'Y. Joseph Chandran',
            position: 'Offshore Installation Manager',
            country: 'India',
            age: '55',
            gender: 'Male',
            dates_appointment: '07 August 2022',
            qualification: [
                'Bachelor’s degree in Chemical Engineering in CMJ University, Shillong, India',
            ],
            experience: `Joseph has 35 years in oil / gas industry exploration, Surface Operation, Production and Commissioning. Contributed as OIM, Field PIC, Production Superintendent, Operations consultant/specialist, Subsea Installation Engineer, TAR (shutdown) Coordinator. His working area were covering Desert gathering stations / gas oil separation plants / central production facilities, Offshore platforms, FPSO, FDPSO, MOPU, FSO, semi floating Early Production Facility, Jack-up EPF, Onshore EPF, MPF and floating / semi floating / jack up / onshore drilling rigs.`,
            id: 5
        },
        { 
            photo: '/images/image00006.jpeg',
            name: 'Iwan Julianto',
            position: 'Offshore Installation Manager',
            country: 'Indonesia',
            age: '42',
            gender: 'Male',
            dates_appointment: '14 March 2022',
            qualification: [
                'Bachelor of Physic Engineering from Gajah Mada University Jogjakarta',
            ],
            experience: `Prior to joining AGN, Iwan has work with HBA Offshore Pte, Ltd, Ophir Energy, Santos Pty Ltd and Total Indonesia. Bringing along more than 20 years working experience in the Oil and Gas industry both onshore and offshore environment.`,
            id: 6
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
            <div className='container-management-two'>
                <div className='container-management-two-content'>
                    <h1>MANAGEMENT TEAM</h1>
                    <div className="container-management-two-photo">
                        {arr.map((el, id) => {
                            return (
                                <div key={id} className="container-management-two-box">
                                    <div style={{ background: `url('${el.photo}') center/cover`, width: 250, height: 350 }}></div>
                                    <h2 style={{ height: '50px', textAlign: 'center' }}>{el.name}</h2>
                                    <div style={{ height: '50px', textAlign: 'center' }}>{el.position}</div>
                                    <div className="container-management-two-btn" onClick={() => { setModal(true); setObj(el); }}> Read More </div>
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

function ManagementPage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
        </>
    )
}

export default ManagementPage;