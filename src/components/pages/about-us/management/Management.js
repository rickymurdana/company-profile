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
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 1
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 2
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 3
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 4
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 5
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 6
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 7
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 8
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE',
            id: 9
        }
    ];

    const closeModal = () => {
        setModal(false)
    }

    const Modal = ({ item: {id, name, position, photo} }) => {    
        return (
            <>
                <div id="detailModal" className="container-modal">
                    <div className="modal-main">
                        {id}, {name}, {position}
                        <button type="button" onClick={closeModal}>
                            Close
                        </button>
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
                        {arr.map(({ id, name, photo, position}) => {
                            return (
                                <div key={id} className="container-management-two-box">
                                    <div style={{ background: `url('${photo}') center/cover`, width: 250, height: 350 }}></div>
                                    <h2 style={{ textAlign: 'center' }}>{name}</h2>
                                    <div style={{ textAlign: 'center' }}>{position}</div>
                                    <div className="container-management-two-btn" onClick={() => { setModal(true); setObj({ id, name, position, photo }); }}> Read More </div>
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