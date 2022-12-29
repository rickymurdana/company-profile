import React from "react";
import './Hsseq.css';
import ASSET from '../../../../file/hsseq/Asset-Policy.pdf';
import DRUG from '../../../../file/hsseq/Drug-Alcohol-Policy.pdf';
import HSSEQ from '../../../../file/hsseq/HSSEQ-Policy.pdf';
import SMOKING from '../../../../file/hsseq/Smoking-Policy.pdf';
import STOPWORK from '../../../../file/hsseq/Stop-Work-Policy.pdf';

function ContainerOne() {
    return (
        <div className='container-hsseq-one'>
            <div className='container-bg'>
                {/* <div className='container-hsseq-one-content'>
                <h1>ARMADA GEMA NUSANTARA</h1>
                <p>At PT. Armada Gema Nusantara, we strive to meet, and where possible exceed, all our client’s expectations and values within the everchanging Oil, Gas and Energy industry. We engage with the correct technologies to further grow and keep sustainability in balance.</p>
                </div> */}
            </div>
        </div>
    )
}

function ContainerTwo() {
    const arr = [
        { title: 'Asset Management Policy', file: ASSET },
        { title: 'Drug and Alcohol Policy', file: DRUG },
        { title: 'HSSEQ Policy', file: HSSEQ },
        { title: 'Smoking Policy', file: SMOKING },
        { title: 'Stop Work Policy', file: STOPWORK },
    ]
    return (
        <>
            <div className="container-hsseq-two">
                <h1>HSSEQ MANAGEMENT POLICY</h1>
                <h2>COMMITMENTS</h2>
                <div className="container-hsseq-two-content">
                    <div className="img-hsseq-two"></div>
                    <div className="container-hsseq-two-text">
                        <p>PT Armada Gema Nusantara (PT AGN) is committed to operating our business with the objective of safeguarding the people, environment, assets and reputation in locations where we operate. The “Company” shall manage HSSE in line with this policy to ensure: </p>
                        <ul style={{
                            margin: '1rem'
                        }}>
                            <li>Health and Safety of our employees, contractors and those (including the communities) who could be directly impacted by our business activities.</li>
                            <li>Compliance with all relevant HSSE regulations and local governmental rules, and to adopt existing standards in regions where laws and regulations do not exist.</li>
                            <li>Protection of the environment and the communities in which we operate through pollution prevention, waste management and emission minimization.</li>
                            <li>Mitigation of physical security risks to our employees, contractors, and assets through adoption of relevant international security standards and statutory compliance.</li>
                            <li>Continual improvement in HSSE performance through implementation of Integrated Management System (IMS) for all activities.</li>
                            <li>Ensure operation integrity through the development and implementation of Process Safety Management (PSM) to reduce, and ultimately eliminate, fatal and high severity Process Safety Event (PSE).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-hsseq-two">
                <h2>PRINCIPLES</h2>
                <div className="container-hsseq-two-content">
                    <div className="container-hsseq-two-text">
                        <p>To achieve these key objectives, the “Company” will operate with the following principles: </p>
                        <ul style={{
                            margin: '1rem'
                        }}>
                            <li>Demonstrate and promote visible leadership commitment and employee participation to ensure health and safety of employee, the protection of the environment and the delivery of quality products / services.</li>
                            <li>Encourage consultation and participation of workers, and, where they exist, workers’ representatives on HSSE related matters.</li>
                            <li>Promote and foster a culture of collaboration and participation among all employees in the implementation of our HSSE commitments.</li>
                            <li>Eliminate identified hazards and reduce HSSE risks, including associated Cyber Security risks to As Low as Reasonably Practicable (ALARP) throughout the asset lifecycle by providing safe and reliable design and operational asset integrity processes.</li>
                            <li>Demonstrate our capability to plan for, respond to, and recover from any HSSE emergency or crisis.</li>
                            <li>Monitor and report our HSSE performance throughout the “Company” as a means of providing feedback and promote continuous improvement across the organization.</li>
                        </ul>
                    </div>
                    <div className="img-hsseq-three"></div>
                </div>
            </div>
            <div className="container-hsseq-two-more">
                <h2>MORE HSSEQ POLICY:</h2>
                <div className="container-hsseq-two-more-content">
                    {arr.map(el => {
                        return (
                        <div className="container-hsseq-two-more-box" onClick={() => window.open(el.file)}>
                            <div className="img-box"></div>
                            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

function ContainerThree() {
    return (
      <div className='container-hsseq-three'>
            <h1>SECURITY COMMITMENT</h1>
            <p>PT Armada Gema Nusantara (PTAGN) is committed to ensuring the protection of all Company related interests, both tangible and intangible, against negative security incidents that have the potential to cause unacceptable adverse impacts on the business. Aligned to the Company’s mission, vision and core values, the security function inherently provides a means through which the Company business strategy and current and future objectives can be maintained.</p>
            <p>The security of all Company personnel and assets is paramount, facilitating operational integrity and business continuity across the Group’s global portfolio. The Company shall endeavor to conduct these protective activities in a manner commensurate with international best management practice and statutory compliance.</p>
            <p>PT AGN considers effective security a major business enabler, as it provides assurance that we have identified security risks and implemented controls that protect our personnel, clients and shareholders, whilst also supporting future growth opportunities in ever more challenging business environments.</p>
      </div>
    )
}

function ContainerFour() {
    return (
        <div className="container-hsseq-four">
            <h1>LIFE SAVING RULES</h1>
            <div className="img-lsr"></div>
        </div>
    )
}

function ContainerFive() {
    const arr = [
        { title: 'British Safety Council (BSC) International Safety Award (ISA) 2019', img: '/images/KAS3-BSC-ISA.jpg' },
        { title: 'Safe Manhours – Gold Category from Husky-CNOOC Madura Limited (HCML)', img: '/images/Safe-Manhours-Gold.jpg' },
        { title: '5-Year Operations without Lost Time Incident (LTI)', img: '/images/PIC-01-Group-Photo.jpg' },
    ]
    return (
        <div className="container-hsseq-five">
            <h1>AWARDS</h1>
            <div className="container-hsseq-two-more-content">
                {arr.map(el => {
                    return (
                    <div className="container-hsseq-two-more-box" onClick={() => window.open(el.img)}>
                        <div style={{
                            background: `url(${el.img}) center/contain no-repeat`,
                            width: '200px',
                            height: '250px',
                            cursor: 'pointer',
                            // border: '1px solid #260A87',
                        }}></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function ContainerSix() {
    return (
        <div className="container-hsseq-six">
            <h1>QUALITY</h1>
            <div className="img-hsseq-q"></div>
            <div>
                <p>PT Armada Gema Nusantara quality objectives include:</p>
                <ul style={{
                    margin: '1rem'
                }}>
                    <li>Establishing a strong quality and compliance culture among all levels of employees and leadership.</li>
                    <li>To continually improve our quality management system to meet international quality standards requirements such as ISO 9001:2015</li>
                </ul>
            </div>
        </div>
    )
}

function ContainerSeven() {
    const arr = [
        { title: 'ISO 9001', img: '/images/ISO-9001.jpg' },
        { title: 'ISO 14001', img: '/images/ISO-14001.jpg' },
        { title: 'ISO 45001', img: '/images/ISO-45001.jpg' },
    ]
    return (
        <div className="container-hsseq-five">
            <h1>CERTIFICATIONS</h1>
            <p>PT Armada Gema Nusantara offshore operation (FPSO Karapan Armada Sterling III) is certified to ISO 9001:2015 Quality Management System (QMS) Standard, ISO 14001:2015 Environment Management System (EMS) Standard and ISO 45001:2018 Occupational Health and Safety Management System Standard. </p>
            <p>The scope of the ISO certifications of FPSO Karapan Armada Sterling III includes:
            FPSO Operations, Oil and Gas production, Water Injection, Gas Compression and Export
            Marine Operation: Storage Crude Oil Condensate, Crude Oil Condenstae Offtake, storage Molten Sulphur, molten sulphur offtake. Boat operation for logistic movement.”</p>
            <p>Notes: ISO 45001:2018 standard has now superseded OHSAS 18001 standard.</p>
            <div className="container-hsseq-two-more-content">
                {arr.map(el => {
                    return (
                    <div className="container-hsseq-two-more-box" onClick={() => window.open(el.img)}>
                        <div style={{
                            background: `url(${el.img}) center/contain no-repeat`,
                            width: '200px',
                            height: '250px',
                            cursor: 'pointer',
                            border: '1px solid #260A87',
                        }}></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function HsseqPage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />
            <ContainerFive />
            <ContainerSix />
            <ContainerSeven />
        </>
    )
}

export default HsseqPage;