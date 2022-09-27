import "./Footer.css"
import { FaFacebookSquare , FaTwitterSquare , FaInstagramSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer =() =>{
    return(
        <div id="page">
            <div id="footer">
				<div>
					<div>
						<h3>blog</h3>
						<p>
							<a href="blog.html"><span>sept 2012</span> This is just a place holder, so you can see what the site would look like.</a>
						</p>
					</div>
					<div>
						<h3>categories</h3>
						<ul className="category">
							<li>
								<Link to={'/Home'}>Home</Link>
							</li>
							<li>
							<Link to={'/Blog'}>Blog</Link>
							</li>
							<li>
							<Link to={'/Contact'}>Contact</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3>connect</h3>
						<ul className="connect">
							<li>
								<a href="https://www.facebook.com/nany.ahmedmorsy">
									<FaFacebookSquare />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/AhmedNny?s=08">
									<FaTwitterSquare />
								</a>
							</li>
							<li>
								<a href="https://instagram.com/nnyahmedmorsy?igshid=NzNkNDdiOGI=">
									<FaInstagramSquare />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
        </div>
    )
}
export default Footer;