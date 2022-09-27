import "./Home.css"
const Home =()=>{
    return(
        <div id="page">
            <div id="body">
				<div id="figure">
					<img src="images/real1.jfif" alt=""/>
				</div>
				<div id="section">
					<h1>time table for lessons </h1>
					<div>
						<div className="article">
						<div class='tab'>
  <table border='0' cellpadding='0' cellspacing='0'>
    <tr class='days'>
      <th></th>
      <th>Saturday</th>
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
    </tr>
    <tr>
      <td class='time'>2.15</td>
      <td></td>
      <td></td>
      <td class='md303 green' data-tooltip='Governmental School'>5th primary</td>
      <td></td>
      <td></td>
      <td class='md303 green' data-tooltip='Governmental School'>5th primary</td>
    </tr>
    <tr>
      <td class='time'>4.30</td>
      <td class='md303 blue' data-tooltip='Governmental School'>2nd preparatory</td>
      <td></td>
      <td></td>
      <td class='md303 blue' data-tooltip='Governmental School'>2nd preparatory</td>
      <td></td>
      <td>-</td>
    </tr>
    <tr>
      <td class='time'>5.00</td>
      <td></td>
      <td class='md303 navy' data-tooltip='Governmental School'>4th primary</td>
      <td></td>
      <td></td>
      <td class='md303 navy' data-tooltip='Governmental School'>4th primary</td>
      <td>-</td>
    </tr>
    <tr>
      <td class='time'>5.30</td>
      <td class='cs426 purple' data-tooltip='Governmental School'>6th primary</td>
      <td></td>
      <td></td>
      <td class='cs426 purple' data-tooltip='Governmental School '>6th primary</td>
      <td></td>
      <td>-</td>
    </tr>
    <tr>
      <td class='time'>6.30</td>
      <td class='cs240 orange' data-tooltip='Governmental School'>1st preparatory</td>
      <td class='md303 gray' data-tooltip='Language School '>2nd primary </td>
      <td></td>
      <td class='cs240 orange' data-tooltip='Governmental School'>1st preparatory</td>
      <td class='md303 gray' data-tooltip='Language School'>2nd primary </td>
      <td>-</td>
    </tr>
    <tr>
      <td class='time'>7.30</td>
      <td class='md313 red' data-tooltip='Governmental School'>1st high school</td>
      <td class='cs240 orange' data-tooltip='Governmental Schools'>1st prepratory</td>
      <td></td>
	  <td class='md313 red' data-tooltip='Governmental School'>1st high school</td>      
	  <td class='cs240 orange' data-tooltip='Governmental School'>1st prepratory</td>
      <td>-</td>
    </tr>
    <tr>
      <td class='time'>8.00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>-</td>
    </tr>

  </table>
</div>
						</div>
						<div className="aside">
							<div>
								<h3>twitter updates</h3>
								<ul>
									<li>
										<p>
											{/* <a href="#">&#64;themepark</a> This is just a place holder, so you can see what the site would look like. Nov 2012 */}
										</p>
									</li>
									<li>
										<p>
											{/* <a href="#">&#64;themepark</a> This is just a place holder, so you can see what the site would look like. Nov 2012 */}
										</p>
									</li>
								</ul>
							</div>
							<div>
								<h3>newsletter</h3>
								<p>
									{/* This is just a place holder, so you can see what the site would look like. */}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}
export default Home;