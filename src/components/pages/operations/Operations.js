import React from "react";
import './Operations.css';

function ContainerOne() {
    return (
        <div className="container-ops-one">
            <div className="bg-white">
                <div className="text">
                    OUR <span style={{ color: '#00C04C' }}>OPERATIONS</span>
                </div>
            </div>
        </div>
    )
}

function ContainerTwo() {
    return (
        <div className="container-ops-two">
            <p>Armada Gema Nusantara (AGN) currently provide the service to one of PSC in Madura Strait. The field is located offshore in the Madura Strait East Java, about 65 km east of Surabaya and about 16 km south of Madura Island.
                The facility that AGN provided is FPSO Karapan Armada Sterling 3 designed for 110 MMscfd sales gas. The FPSO is located at 125 m from unmanned wellhead platform with four well slots.</p>
            {/* <p>Bumi Armada Berhad provides services throughout the oil and gas value chain – from exploration through to field development construction, production and operations – via four main business units and three support units:</p>
            <p>Business Units</p>
            <div>
                <p>- Floating Production, Storage and Offloading (FPSO)</p>
                <p>- Offshore Marine Services (OMS)</p>
            </div>
            <p>Having simultaneously managed and delivered several large projects safely, the company has developed a reputation for its project management capabilities. We deliver innovative solutions and quality facilities that incorporate leading technologies to cater for your needs field development, production and storage.</p>
            <p>Wherever your company is, in terms of field development and production, as an integrated oilfield services provider, Bumi Armada offers a range of capabilities from life of field surveys, drilling support, production facilities, installation and operations. Drawing on our decades of experience we will bring innovative solutions to bear, provide quality facilities safely and services as well as incorporate leading technologies where appropriate.</p> */}
        </div>
    )
}

function ContainerThree() {
    return (
        <div className='container-ops-three-img-bg'>
            <div className='container-ops-three'>
                <div className='container-ops-three-content'>
                    <div style={{ width: '50%', heigth: '100%' }}>
                        <h1>FLOATING PRODUCTION AND OPERATIONS</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', heigth: '100%' }}>
                        <p>At FPSO Karapan Armada Sterling 3, the main process components of the gas processing facilities would include: fluids inlet separation, gas sweetening, gas dehydration and hydrocarbon dew point control equipment, condensate stabilization, condensate storage and export, produced water treating and disposal, and sulfur recovery with molten Sulphur export.</p>
                        <p>The gas is separated from the liquids through three stages of separation. The sour gas is treated with an amine solution to remove all H2S and some of CO2. The sweet gas is transported through a 16” flexible riser to WHP from WHP treated gas flows through 52-kilometre-long carbon steel pipeline to a gas metering at onshore and distribution system in East Java near Pasuruan.</p>
                        {/* <p>The FPO business specialises in engineering, procurement, construction, commissioning, and the operations of floating oil and gas facilities as per the specific requirements of clients.</p>
                        <p>Since then, our businesses have evolved from managing smaller tonnage vessels in the 1970s to being able to design, build and operate FPSOs with increasing complexity, functional capability, and size.</p>
                        <p>Drawing on our decades of experience, we have developed a positive reputation for our project management capabilities. We deliver innovative solutions and quality facilities that incorporate leading and proven technologies to cater for the needs of our clients.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContainerFour() {
    return (
        <div className="container-ops-four">
            <h1>LIST OF <span style={{ color: '#00C04C' }}>FPO'S</span></h1>
            <div className="img-ops1"></div>
            <div className="img-ops2"></div>
            {/* <div className="loc-contact">
                <p>For further information, you may contact: </p>
                <h2>FPSO <span style={{ color: '#00C04C' }}>Operations</span> </h2>
                <p>Level 21, Menara Perak, 24, Jalan Perak, 50450 Kuala Lumpur</p>
                <div>
                    <p>Tel: +603-2171 5799</p>
                    <p>Fax: +603-2163 5799</p>
                </div>
                <p>Email: <span style={{ fontWeight: 700 , color: '#260A87' }}>fpso@bumiarmada.com</span> </p>
            </div> */}
        </div>
    )
}

function OperationsPage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />
        </>
    )
}

export default OperationsPage;