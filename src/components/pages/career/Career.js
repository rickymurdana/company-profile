import React from "react";
import './Career.css';

function ContainerOne() {
    return (
        <div className="container-career-one-img">
            <div className="container-career-one-bg">
                <div className="container-career-one-content">
                    <h1>JOIN US</h1>
                    <p>Discover a great career in Oil & Gas around the world with Bumi Armada. With offices around the globe, we offer the best opportunities for you to realise your dreams.</p>
                    <p>We are inviting the best to join our world-class team to help transform the Oil and Gas industry. If you are the right individual, get ready to take on the world and make your mark.</p>
                    <p>If you’re interested in joining us, please visit the following links:</p>
                    <div className="container-career-one-btn">
                        APPLY FOR AVAILABLE POSITION
                    </div>
                    <p>Should there be no available vacancies, please do drop your CVs here and we will contact you when relevant position is available!</p>
                </div>
            </div>
        </div>
    )
}

function CareerPage() {
    return (
        <>
            <ContainerOne />
        </>
    )
}

export default CareerPage;