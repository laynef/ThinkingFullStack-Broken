import React, { Component } from 'react';
import { Link } from 'react-router';
import { publics } from '../data/publicData';
import { __CLIENT__, __MOBILE__ } from '../../../globals';


export default class PublicPage extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			devices: false,
			learning: false,
			why: false,
			bubble: false,
		};
	}

	componentWillMount() {
		if (__CLIENT__) {
			window.scrollTo(0,0);
		}
	}

	render() {
		return (
			<div id="PublicPage">
				{this.state.bubble ?
					<div className="public-bubble" onClick={() => window.scrollTo(0,0)}>
						<i className="bubble-icon fac fjc fa fa-arrow-up"></i>
					</div>
					: null}
				<section className="homepageImage" onWheelCapture={() => this.setState({ bubble: false })}>
					<div className="overlay">
						<div className="wrapper fac fjc fh">
							<div>
								<h1>Thinking in Full Stack</h1>
								<h2>upgrade your knowledge in development</h2>
								<p>We provide developers knowledge on how to think to approach both sides of tech stacks and best practices for both sides, no matter the stack.</p>
								<div className="buttonDiv">
									<Link to="/dashboard" className="button">Get Started</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="technologyUsed" onWheelCapture={() => this.setState({ devices: false, bubble: true })}>
					<div className="fjc">
						<h1>Technology Used in Examples</h1>
					</div>
					<div className="techDiv">
						{publics.technologyUsed.map((e, i) => (
							<div key={i} className="oneTechDiv">
								<h2 className="fjc">{e.header}</h2>
								<div className="fw fjc fdc fasb">
									<div className="fw fjc">
										<img className="images" src={e.image} alt="" />
									</div>
									<ul className="fw">
										{e.links.map((ele, idx) => (
											<li className="tc" key={`${i}-${idx}`}>
												{ele}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="deviceSection" onWheelCapture={() => this.setState({ devices: true, learning: false })}>
					<div className={`mc fdc fjc wrapper overlay-device ${!__MOBILE__ && __CLIENT__ && this.state.devices ? 'slideIn' : (!__CLIENT__ || __MOBILE__) ? 'slideIn' : ''} animation`}>
						<h1>Learn to Work with Multiple Micro-services</h1>
						<ul>
							{publics.devices.lists.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>
				</section>
				<section className="padder" onWheelCapture={() => this.setState({ learning: true, why: false })}>
					<div className="wrapper fjsb fac fh">
						<h1>Start learning today...</h1>
						<Link className="button" to="/dashboard">Get Started</Link>
					</div>
				</section>
				<section className="whatYouLearnSection" >
					<div className={`${!__MOBILE__ && __CLIENT__ && this.state.learning ? 'slideIn' : (!__CLIENT__ || __MOBILE__) ? 'slideIn' : ''} animation`}>
						<div className="fjc">
							<h1>What Concepts You Will Learn</h1>
						</div>
						<ul className="learning-overlay">
							{publics.whatYouLearn.links.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>
				</section>
				<section className="padder" onWheelCapture={() => this.setState({ why: true })}>
					<div className="wrapper fjsb fac fh dark-background">
						<h1>Start learning today...</h1>
						<Link className="button" to="/dashboard">Get Started</Link>
					</div>
				</section>
				<section className="whyWeDoItSection facc fjc fdc">
					<div className={`${!__MOBILE__ && __CLIENT__ && this.state.why ? 'slideIn' : (!__CLIENT__ || __MOBILE__) ? 'slideIn' : ''} why-overlay animation`}>
						<h1>Remembering Wy We Code in the First Place</h1>
						<ul>
							{publics.whyWeDoIt.links.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>
				</section>
				<section className="lastJoinSection">
					<div className="wrapper fjsb fac fh">
						<h1>Start learning today...</h1>
						<Link className="button" to="/dashboard">Get Started</Link>
					</div>
				</section>
				<footer className="footerSection">
					<h1 className="fjc">Contact Us</h1>
					<div className="fdr fjc">
						<div className="iconsDiv fjsa">
							{publics.socialButtons.map((e, i) => (
								<a href={e.link} className={e.background} key={i}>
									<i className={e.icon}></i>
								</a>
							))}
						</div>
					</div>
					<div className="fdc wrapper">
						<h2 className="fjc">Feel free to contact us, our developers are always looking for new challenges</h2>
						<a href="http://www.manof.tech" className="fjc linkColor">&copy; ManOf.Tech</a>
					</div>
				</footer>
			</div>
		);
	}

}
