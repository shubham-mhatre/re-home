import React from 'react'

const Aboutus = () => {
    document.body.classList.remove('dashboard-background');
    document.body.classList.add('home-background');
    return (
        <div className="about_container">
            <section className="aboutin">
                <div className="about">
                    <div className="about-content">
                        <h2 style={{ textAlign: "center" }}>ABOUT US</h2>
                        <p style={{ color: "#fff" }}>Greetings from the ReHome! At ReHome, we strive to create a vibrant and inclusive platform for the international student community at the University of Texas at Arlington.
                            Our mission is to facilitate a seamless buying and selling experience for students, enabling them to connect,
                            transact, and enrich their university life. We envision a global community at UTA where international students can easily access essential items and services they need during their academic journey.
                            We aim to foster a sense of belonging and camaraderie by providing a trusted and user-friendly marketplace.</p>
                        <div class="icons">
                            <img src="Pictures/facebook.png" />
                            <img src="Pictures/instagram.png" />
                            <img src="Pictures/thread.png" />
                            <img src="Pictures/twitter.png" />
                        </div>
                    </div>
                    <div className="about-img"></div>
                </div>
            </section>

        </div>
    )
}

export default Aboutus
