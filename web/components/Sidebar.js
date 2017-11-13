import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { sidebar } from './sidebarData';
import { __CLIENT__ } from '../globals';
import { toggleMobileMenu } from '../redux/actions/utilities';
import { connect } from 'react-redux';


@connect((state) => ({
	mobileSidebar: state.utilities.mobileSidebar,
}))

export default class Sidebar extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			open: {
				'Best Practices': false,
				'UI/UX Design': false,
				'API Design': false,
				'Design Patterns': false,
				'Business Side': false,
				'Examples': false,
			},
		};
	}

	toggleSidebarItem(item) {
		let obj = this.state.open;
		obj[item] = !obj[item];
		this.setState({
			open: obj,
		});
	}

	render() {
		const { mobileSidebar, dispatch } = this.props;
		return (
			<div>
				<div id="MobileHeader" className="fw mobile-height mobile-menu">
					<div className="fh fac fjsb wrapper">
						<button onClick={() => dispatch(toggleMobileMenu())} className="mobile-button black-text">&#9776;</button>
						<IndexLink to="/dashboard" className="dashboard-link fac" onClick={mobileSidebar ? () => dispatch(toggleMobileMenu()) : null}>
							<img className="mobile-logo" src={`/assets/img/logo-black.svg`} alt="" />
							<span>Thinking Full Stack</span>
						</IndexLink>
						<a className="contactUs white button" href="mailto:laynefaler@gmail.com">Contact Us</a>
					</div>
				</div>
				<div id="Sidebar" className={`${mobileSidebar ? 'mobile-menu-open' : 'auth-layout'} fh w20 fl br white-bg sidebar`}>
					<div className="sidebar-height bb">
						<IndexLink to="/dashboard" className="dashboard-link fac fjc fh">
							<img className="logo" src={`/assets/img/logo.svg`} alt="" />
							<span className="logo-span">Thinking Full Stack</span>
						</IndexLink>
					</div>
					<div className="overflow h80">
						<ul className="mobile-margin">
							{sidebar.map((ele, idx) => (
								<div key={idx} className="ha">
									<div className="sidebar-span fac fjc bb cp" onClick={() => this.toggleSidebarItem(ele.title)}>
										<span className="black">{ele.title}</span>
									</div>
									<ul className={`ha ${__CLIENT__ && !this.state.open[ele.title] ? 'disabled' : ''}`}>
										{ele.links.map((e, i) => (
											<Link onClick={mobileSidebar ? () => dispatch(toggleMobileMenu()) : null} className="fac fjc sidebar-link bb cp black" key={`${idx}-${i}`} to={e.route}>
												<li>
													{e.name}
												</li>
											</Link>
										))}
									</ul>
								</div>
							))}
						</ul>
					</div>
					<div className="h10 bt fac fjc">
						<Link className="w80 button" to="/" onClick={mobileSidebar ? () => dispatch(toggleMobileMenu()) : null}>Back to Home</Link>
					</div>
				</div>
			</div>
		);
	}

}
