import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact =() =>{
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_6tghhdi', 'template_iartypg', form.current, 'HgH9hGV7KcSNj7qWH')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};
    return(
        <div id="page">
            <div id="body">
				<div id="contact">
					<div style={{"marginBottom":"150px"}}>
						<div class="figure">
							<img src="images/family3.jpg" alt=""/>
							<p>
							Always have a strong connection bewteen me and my children with me they are living the language not only studing it.
							</p>
						</div>
						<div class="section">
							<p>
								i have a 9 years experience worked at El-Nasr school and El-gehad school,
								Experience in new method of teaching,
								took courses in newest English curriculum, 
								working at speak-Out English courses, 
								working at privat center, 
								owned private center for years, 
								Working with Primary students till Higi-school students.
							</p>
							<ul>
								<li>
									<span>location</span> Tanta, Entrance of street hadeekt el tafl  .
								</li>
								<li>
									<span>Email</span>nadaahmedmorsy.95@gmail.com
								</li>
								<li>
									<span>call</span> +201145318184
								</li>
								<li>
									
								</li>
							</ul>
						</div>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<div className="group" style={{width:"700px" , "marginBottom":"20px"}}>
							<h2>Send A Message</h2>
						</div>
						<div class="group">      
						<input type="text" required name="name" minLength={3}/>
						<span class="highlight"></span>
						<span class="bar"></span>
						<label>Name</label>
						</div>
						<div class="group">      
						<input type="email" required name="email"/>
						<span class="highlight"></span>
						<span class="bar"></span>
						<label>Email</label>
						</div>
						<div class="group">      
						<input type="text" required minLength={5} name="message"/>
						<span class="highlight"></span>
						<span class="bar"></span>
						<label>Message</label>
						</div>
						<input type="submit" value="send" className="btn" />
					</form>
				</div>
			</div>
        </div>
    )
}
export default Contact;