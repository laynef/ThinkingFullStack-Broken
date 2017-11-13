import React, { Component } from 'react';
import { asyncConnect } from 'redux-async-connect';
import Header from '../../components/Header';


@asyncConnect([{
	promise: () => {
		const promises = [];
		return Promise.all(promises);
	},
}])

export default class PublicMasterPage extends Component {

	render() {
		const { children } = this.props;
		return (
			<div className="app">
				<Header />
				{ children }
			</div>
		);
	}
}
