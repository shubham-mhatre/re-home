import React from 'react'

const Services = () => {
  return (
    <div className="about_container">
		<section className="aboutin">
			<div className="about">
				<div className="about-content">
					<h2 style={{textAlign:"center"}}>SERVICES</h2>
					<p>Welcome to our Services Page! At ReHome, 
						we're all about simplifying the lives of international students at the University of Texas at Arlington. Our core service is a dedicated buy-and-sell marketplace, 
						connecting students for seamless transactions. Safety is paramount, so we ensure all profiles and transactions are verified for your peace of mind. 
						With a diverse range of categories, tailored recommendations, and a strong sense of community, we aim to make your time at UT Arlington a little easier and a lot more enjoyable. 
						Explore the possibilities and connect with fellow students today!</p>
				</div>
				<div className="acad-img"></div>
				<div style={{display:'flex',justifyContent:'center'}}>
					{/* <a href="Academic_Institution_registration.html" class="button">Register</a> */}
					<a href="Job_view.html"><button className="dashbutton">Register</button></a>
				</div>
			</div>

		</section>
	</div>
  )
}

export default Services
