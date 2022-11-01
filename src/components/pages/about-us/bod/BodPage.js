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
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
        { 
            photo: 'https://www.bumiarmada.com/wp-content/uploads/2021/03/BOD-5.jpg',
            name: 'Sultan Yam Tuhuku Ali Bin Sabarudin',
            position: 'Board of director CEO COO OPT SE'
        },
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
            <div className='container-bod-two'>
                <div className='container-bod-two-content'>
                    <h1>BOARD OF DIRECTORS</h1>
                    <div className="container-bod-two-photo">
                        {arr.map((el, id) => {
                            return (
                                <div key={id} className="container-bod-two-box">
                                    <div style={{ background: `url('${el.photo}') center/cover`, width: 250, height: 350 }}></div>
                                    <h2 style={{ textAlign: 'center' }}>{el.name}</h2>
                                    <div style={{ textAlign: 'center' }}>{el.position}</div>
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