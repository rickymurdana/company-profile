import React from "react";
import './Corporate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import COBCE from "../../../../file/ethic-compliance/Updated-COBCE.pdf";
import BAB from "../../../../file/ethic-compliance/BAB-ABC-Policy-Aug-2021.pdf";
import COBCEFD from "../../../../file/ethic-compliance/Directors-Code_Business_Conduct_and_Ethics.pdf";
import FIT from "../../../../file/ethic-compliance/Fit-and-Proper-Policy.pdf";
import GIFT from "../../../../file/ethic-compliance/Gifts-and-Hospitality.pdf";
import SPEAKUP from "../../../../file/ethic-compliance/Speak-Up-Policy-Nov-2021.pdf";

function ContainerOne() {
    return (
        <div className="container-corporate-one">
            <div className="container-bg"></div>
        </div>
    )
}

function ContainerTwo() {
    return (
        <div className="container-corporate-two">
            <h1>CORPORATE GOVERNANCE</h1>
            <div className="container-corporate-two-content">
                <div className="img-corporate-two"></div>
                <div className="container-corporate-two-text">
                    <p>The Board of Directors (the “Board”) recognises the importance of good Corporate Governance in directing the businesses of the Group. The Board is committed to the highest standards of the Malaysian Code of Corporate Governance (“the Code”) and leading by example throughout its business operations.

                    The Board further acknowledges the importance of the Internal Audit, Risk Management and Compliance functions toward the attainment of highest standards of the Code. It is also the Board’s belief that Corporate Governance is synonymous with the key concepts of transparency, accountability, integrity and corporate performance.

                    The Board demands all staff operates to the highest standards of business integrity and enforce strictly the standards of business conduct, the Group’s Code of Business Conduct and Ethics, and standard operating policies and procedures (SOP) that instils and cultivates Corporate Governance and Speak Up culture. Our aim is to encourage a universal respect for high business standards.</p>
                </div>
            </div>
        </div>
    )
}

function ContainerThree() {
    return (
        <div className="container-corporate-three">
            <h1>INTERNAL AUDIT</h1>
            <div className="container-corporate-three-content">
                <div className="img-corporate-three"></div>
                <div className="container-corporate-three-text">
                    <p>The Internal Audit is conducted by the Group’s Internal Audit Department (IAD) which has been established by the Audit Committee (AC). The IAD is independent of the activities it audits. Audits are performed with impartiality, proficiency, and due professional care.

                    Internal Audit Reports are tabled at the audit committee meeting. The AC will review, assess and approve the internal audit plans and programmes and provides guidance to the IAD as and when necessary. The AC also reviews and monitors the responsiveness of the management to significant audit findings and the recommendations of the IAD.
                    AC has directed that part of the management’s annual key performance indicators to include the proper close out of key audit findings as to ensure that management effectively close out all significant audit findings in a timely manner.

                    The IAD attempts to assist the Group in accomplishing its goals by bringing a systematic and disciplined approach to evaluate and improve the effectiveness of the various processes and controls within the Group. The IAD maintains its impartiality and proficiency and due professional care by having its plans and reports directly under the purview of the AC.

                    The reports from any reviews performed by the IAD are also forwarded to the auditee’s management and shared with the Head of business units, the CEO and CFO. Management is responsible for ensuring that corrective actions are taken within the stipulated time frame and all outstanding/open items are reported.

                    The IAD adopts the main standards and principles outlines in the International Professional Practices Framework of The Institute of Internal Auditors and this has been incorporated in the practical IAD methodology that is used to guide the ways of working of the IAD.

                    </p>
                </div>
            </div>
        </div>
    )
}

function ContainerFour() {
    return (
        <div className="container-corporate-four">
            <h1>ENTERPRISE RISK MANAGEMENT</h1>
            <div className="container-corporate-four-content">
                <div className="container-corporate-four-box">
                    <h2>Enterprise Risk Management</h2>
                    <p>The Board places strong dedication and commitment of the highest standards towards effective enterprise risk management in-line with best practices in corporate governance guided by the Malaysian Code of Corporate Governance (“MCCG”). An enterprise risk management approach aligns strategy, processes, people, technology and knowledge with the purpose of evaluating and managing potential risks to the company that may be exposed to. It enhances and encourages the identification of opportunities through continuous improvement and innovation.</p>
                </div>
                <div className="container-corporate-four-box">
                    <h2>Risk Management System</h2>
                    <p>Bumi Armada Berhad Group is committed to implement an effective enterprise risk management framework to ensure sustainable business growth and promote a proactive approach in reporting, evaluating and managing risks associated within the Company, in-line with risk framework agreed to and accepted by the Risk Management Committee and approved by the Board of Directors.”</p>
                </div>
            </div>
        </div>
    )
}

function ContainerFive() {
    const arr = [
        { title: 'Code of Business Conduct & Ethics Policy', file: COBCE },
        { title: 'Bumi Armada Berhad Anti-Bribery and Corruption Policy', file: BAB },
        { title: 'Code of Business Conduct & Ethics For Directors Poliycy', file: COBCEFD },
        { title: 'Fit and Proper Policy', file: FIT },
        { title: 'Gifts and Hospitality', file: GIFT },
        { title: 'Speak Up Policy', file: SPEAKUP },
    ]
    return (
        <div className="container-corporate-five">
            <h1>ETHICS & COMPLIANCE</h1>
            <div className="img-corporate-five"></div>
            <p>The Board of Directors (the “Board”) places strong dedication and commitment to the highest standards toward an effective Compliance function in-line with the Malaysian Code on Corporate Governance 2017. The Board also supports the Compliance role in reviewing the adequacy and integrity of the company’s internal control systems and management of information system for compliance with Standard Operating Policies (SOP), relevant laws and regulations, rules and guidelines and industry directives.</p>
            <div className="container-corporate-content">
                {arr.map((el, id) => {
                    return (
                    <div key={id} className="container-corporate-five-box" onClick={ () => window.open(el.file)}>
                        <div style={{
                            height: '100%',
                            cursor: 'pointer'
                        }}>
                            <FontAwesomeIcon icon={faBookmark} size="5x" />
                        </div>
                        <div style={{
                            height: '100%',
                            cursor: 'pointer'
                        }}>
                            <h3>{el.title}</h3>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}


function ContainerSix() {
    const arr = [
        { title: 'Reports of Constitution' },
        { title: 'Reports of Constitution' },
        { title: 'Reports of Constitution' },
    ]
    return (
        <div className="container-corporate-six">
            <h1>CONSTITUTION</h1>
            <div className="container-corporate-six-content">
                {arr.map(el => {
                    return (
                    <div className="container-corporate-six-box">
                        <div className="img-box"></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function ContainerSeven() {
    const arr = [
        { title: 'Reports of Board Charter' },
        { title: 'Reports of Board Charter' },
        { title: 'Reports of Board Charter' },
    ]
    return (
        <div className="container-corporate-six">
            <h1>BOARD CHARTER</h1>
            <div className="container-corporate-six-content">
                {arr.map(el => {
                    return (
                    <div className="container-corporate-six-box">
                        <div className="img-box"></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function ContainerEigth() {
    const arr = [
        { title: 'Reports of Board Commitee' },
        { title: 'Reports of Board Commitee' },
        { title: 'Reports of Board Commitee' },
    ]
    return (
        <div className="container-corporate-six">
            <h1>BOARD COMMITTEES' TERMS OF REFERENCE</h1>
            <div className="container-corporate-six-content">
                {arr.map(el => {
                    return (
                    <div className="container-corporate-six-box">
                        <div className="img-box"></div>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 17, color: '#260A87' }}>{el.title}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

function CorporatePage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />
            <ContainerFive />
            {/* <ContainerSix />
            <ContainerSeven />
            <ContainerEigth /> */}
        </>
    )
}

export default CorporatePage;