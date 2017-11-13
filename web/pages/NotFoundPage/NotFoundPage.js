import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NotFoundPage extends Component {

	render() {
		return (
			<div id="NotFoundPage">
				<div className="fullBackDiv">
					<h1 className="fjc">Page Not Found</h1>
					<div className="fdc w60">
						<h2>These are not the droids you're looking for...</h2>
						<div className="fw fjc">
							<Link to="/" className="button">Back to Home</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
