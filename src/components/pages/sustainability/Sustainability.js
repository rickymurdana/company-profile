import React from "react";
import './Sustainability.css';

function ContainerOne() {
    return (
        <div className="container-sustain-one">
            <div className="container-bg">
                <div className='container-sustain-one-content'>
                    <h1>ARMADA GEMA NUSANTARA</h1>
                    <p>PT. Armada Gema Nusantara, we strive to meet, and where possible exceed, all our client’s expectations and values within the everchanging Oil, Gas and Energy industry. We engage with the correct technologies to further grow and keep sustainability in balance.</p>
                </div> 
            </div>
        </div>
    )
}

function ContainerTwo() {
    return (
        <div className="container-sustain-two">
            <div className="text-title-purple">SUSTAINABILITY</div>
            <div className="container-sustain-two-text">
                <p>As a part of the energy industry, Bumi Armada recognizes that its business activities may have environmental, social and Governance risks and it believes that it has a responsibility to work towards minimizing or mitigating negative impacts and, where possible, implementing sustainable practices in selected areas. Our Sustainability philosophy is outlined below:</p>
                <p>1. We will strive to build quality assets (vessels and floating production facilities) that meet international environmental standards and provide environmentally and socially responsible operations.</p>
                <p>2. We aim to conduct and manage our business operations in a responsible manner with safety, reliability, good corporate governance and transparency as over-riding principles.</p>
                <p>3. We aim to minimize our ecological footprint on the environment, including; prevention of pollution, sustainable resource use, conservation of energy and resources.</p>
                <p>4. Wherever we operate, we believe it is important to play a role in the social and economic upliftment of the people and communities.</p>
                <p>5. We aim to provide a safe and equitable working environment for our people that is conducive to their professional development and to enhanced employer-employee relationships; in line with our core values.</p>
                <p>6. We will work towards engaging and building trust with stakeholders through two-way dialogues; understanding expectations, communicating our company’s goals and where possible, collaborating for mutual benefit.</p>
            </div>
            <div className="container-sustain-two-content">
                <div className="img-sus1">
                    <div className="content-title">ENVIRONTMENT</div>
                    <div className="content-text">Minimising Operational Impact</div>
                </div>
                <div className="img-sus2">
                    <div style={{ 
                        background: '#260A87',
                        width: '100%',
                        height: '100%',
                        opacity: 0.8,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        justifyContent: 'end',
                        padding: '1rem'
                    }}>
                        <div className="content-title">SOCIAL</div>
                        <div className="content-text">Safeguarding Our Stakeholders</div>
                    </div>
                </div>
                <div className="img-sus3">
                    <div className="content-title">GOVERNANCE RISKS</div>
                    <div className="content-text">Corporate Accountability</div>
                </div>
            </div>
            <div style={{ marginTop: '2rem', width: '100%' }}>
                <div className="text-title-purple">ENVIRONTMENT</div>
                <p style={{ marginTop: 10 }}>Bumi Armada aims to minimise the environmental impact from our activities. It is important that we protect the well-being and livelihoods of local communities where we operate. We are also keenly aware of climate change concerns surrounding the energy and offshore industry and seek to contribute positively where possible. </p>
            </div>
        </div>
    )
}

function ContainerThree() {
    return (
        <div className="container-sus-three">
            <div className="container-sus-three-bg">
                <div className="container-sus-three-title">
                    SEA TURTLES SANCTUARY
                </div>
                <div className="container-sus-three-text">
                    <p>Malaysia had been recognized as one of major nesting location for sea turtles in the Southeast Asian region. Four species were confirmed to land and nest in Malaysia. These species namely; Green turtle (Chelonia mydas), Leatherback (Dermochelys coriacea), Hawksbill (Eremochelys imbricata), and Olive ridley (Lepidochelys olivacea).</p>
 
                    <p>Turtles play a crucial role in marine ecosystems, helping to maintain the health of sea grass beds and coral reefs. Furthermore, they are often culturally important to coastal communities in Malaysia and can provide substantial tourism value. However, despite their iconic status and importance to people and the marine environment, sea turtles are now at risk of extinction. Their populations continue to decline because of the trade in sea turtle product and the loss of essential habitats. As a result, population of sea turtles worldwide have dropped by 80% to 90% since the 60s.</p>
                    
                    <p>Continuous conservation measures were essential to ensure the survival of sea turtles in future. Therefore, aligned with our commitment to support the Sustainable Development Goals (SDG) 14, Life below water, Bumi Armada had established a collaboration with Department of Fisheries Malaysia on the “Conservation and Management of Sea Turtles at Turtle Conservation and Information Center, Cherating, Pahang”. This collaboration, which has been renewed from 2019 till 2022 aims to enhance the conservation efforts and improves Sea turtle hatchery activities at Cherating Beach. Our participation in conserving marine species for the well-being of marine ecosystem and society at large are supported by active involvements from our employees. However, in 2020, due to the COVID-19 global pandemic and the safety restrictions enforced, our employees were unable to participate physically at site. Some of the key activities planned include upgrading of infrastructure at Sea Turtle Information and Conservation Centre Cherating, education and community awareness, as well as research activity.</p>
                    
                    <div>
                        <p>Ref:</p>
                        <p>http://marinepark.dof.gov.my/kenapa-kita-perlu-melindungi-penyu.html?uweb=jtl&lang=en</p>
                        <p>BAB Corporation Agreement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContainerFour() {
    const arr = [
        { title: '2022 Reports of Armada' },
        { title: '2022 Reports of Armada' },
        { title: '2022 Reports of Armada' },
    ]
    return (
        <div className="container-sus-four">
            <div className="text-title-purple">SUSTAINABILITY REPORT</div>
            <div className="container-sus-four-content">
                {arr.map(el => {
                    return (
                    <div className="container-sus-four-box">
                        <div className="img-box"></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function ContainerSus() {
    return (
        <div className="container-sustain-two">
            <div className="text-title-purple">REDUCE REUSE RECYCLE (3R) INTITATIVE</div>
            <div className="container-sustain-two-text">
                <p>Responding to the environmental initiative from the Municipality of Surabaya where plastic bottle waste can be exchanged with bus tickets (Suroboyo Bus), since mid-2022 the staffs of PT Armada Gema Nusantara (AGN) Branch Office in Surabaya have been regularly collecting their plastic waste bottle to be exchanged with bus tickets. The tickets are used by the staffs who commute using public transportation. The initiative is the company’s contribution to the waste Reduce Reuse Recycle (3R) program where we believe that recycling of waste can eventually contribute to minimizing greenhouse gas emission.</p>
            </div>
            <div className="container-sustain-two-content">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className="img-sus4"></div>
                    <p>July 2022</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className="img-sus5"></div>
                    <p>October 2022</p>
                </div>
            </div>
        </div>
    )
}

function SustainabilityPage() {
    return (
        <>
            <ContainerOne />
            <ContainerSus />
            {/* <ContainerTwo />
            <ContainerThree />
            <ContainerFour /> */}
        </>
    )
}

export default SustainabilityPage;