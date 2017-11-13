import React, { Component } from 'react';
import { auth } from '../data/authData';
import { __CLIENT__ } from '../../../globals';


export default class AuthPage extends Component {

	componentWillMount() {
		if (__CLIENT__) {
			window.scrollTo(0,0);
		}
	}

	render() {
		return (
			<div id="AuthPage" className="card dashboard-height mobileFull">
				<div className="h20 fw fjc fac mobileHeads">
					<h1 className="heading-32">{auth.welcome}</h1>
				</div>
				<div className="h80 fw fjsa dashboardMobile">
					{auth.concepts.map((ele, idx) => (
						<div key={idx} className="w50 mobileOneDiv">
							<h2 className="tc h10 heading-24">{ele.header}</h2>
							<ul className="ul">
								{ele.links.map((e, i) => (
									<li key={`${idx}-${i}`}>{e}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="h50 fw mobileFoot">
					<div className="dashboard-image">
						<div className="w50 fh fac fjfs wrapper">
							<p>{auth.quote}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
