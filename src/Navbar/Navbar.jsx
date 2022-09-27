import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar =() => {
	const [active, setActive] = useState(null)
	const navElement = [
		{id:1,title:"Home", link:"/Home"},
		{id:2,title:"Blog" , link:"/Blog"},
		{id:4,title:"Contact",link:"/Contact"}
	]
  return (
    <div id="nav">
    <div id="header">
				<Link to={'/Home'} className="logo">Nada's class</Link>
				<ul>
					{navElement.map((ele,index)=>{
						return(
							<li key={ele.id}
							onClick={() => setActive(index)}
							className={` ${active  === index ? "selected" : ""}`}>
						<Link to={ele.link}>{ele.title}</Link>
					</li>
						)
					})}
				</ul>
			</div>
    </div>
  );
}
export default Navbar;
