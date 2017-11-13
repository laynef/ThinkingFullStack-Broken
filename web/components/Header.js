import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';


export default class Header extends Component {

	render() {
		return (
			<nav id="Header" className="fw header wrapper">
				<div className="fjsb fac fh">
					<IndexLink to="/" className="white fac w70">
						<img className="logo" src={`/assets/img/logo-white.svg`} alt="" />
						<span className="white">Thinking Full Stack</span>
					</IndexLink>
					<Link className="white" to="/dashboard">Get Started</Link>
				</div>
			</nav>
		);
	}

}
