import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import HireHeader from '../../components/HireHeader';
import Sidebar from '../../components/Sidebar';
import { __CLIENT__ } from '../../globals';


@asyncConnect([{
	promise: () => {
		const promises = [];
		return Promise.all(promises);
	},
}])

@connect((state) => ({
	mobileSidebar: state.utilities.mobileSidebar,
}))

export default class MasterPage extends Component {

	render() {
		const { children, mobileSidebar } = this.props;
		return (
			<div className="app">
				<Sidebar />
				<HireHeader />
				{__CLIENT__ && mobileSidebar && window.innerWidth <= 960  ?
					null :
					__CLIENT__ && !mobileSidebar && window.innerWidth <= 960 ?
						<div className="mobile-width fl h95 overflow master-wrapper">
							{ children }
						</div> :
						<div className="mobile-width fl h95 overflow master-wrapper">
							{ children }
						</div>}
			</div>
		);
	}
}
