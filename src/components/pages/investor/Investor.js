import React from "react";
import './Investor.css';

function ContainerOne() {
    return (
        <div className="container-inv-one">
            <h1>INVESTOR <span style={{color: '#00C04C'}}>RELATIONS</span></h1>
            <div className="container-inv-one-content">
                <div className="img-inv1">
                    <div className="text-title">FINANCIAL INFORMATION</div>
                </div>
                <div className="img-inv2">
                    <div style={{ 
                        background: '#260A87',
                        width: '100%',
                        height: '100%',
                        opacity: 0.8,
                        display: 'flex',
                        alignItems: 'flex-end' 
                    }}>
                        <div style={{
                            fontSize: 30,
                            fontWeight: 700,
                            paddingLeft: '1rem',
                            color: '#ffff'
                        }}>BURSA INFORMATION</div>
                    </div>
                </div>
                <div className="img-inv3">
                    <div className="text-title">INFO REQUEST</div>
                </div>
            </div>
        </div>
    )
}

function InvestorPage() {
    return(
        <>
            <ContainerOne />
        </>
    )
}

export default InvestorPage;