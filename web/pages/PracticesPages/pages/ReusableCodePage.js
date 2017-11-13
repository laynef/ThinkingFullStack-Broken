import React, { Component } from 'react';
import { data } from '../data/reusableCodeData';


export default class ReusableCodePage extends Component {

	render() {
		return (
			<div id="ReusableCodePage" className="card">
				{data.title &&
				<div className="fw fjc fac intro">
					<h1 className="tc heading-32">{data.title}</h1>
				</div>}
				{data.definition && data.definition.map((e, i) => (
					<div key={i} className="definition-wrapper">
						<div className="dark-card definition-wrapper">
							<h2>{e.word}</h2>
							<h3>
								<b>Definition: </b>
								<i>{e.text}</i>
							</h3>
							{e.example ?
								<div className="definition-wrapper card-body">
									<h4>Example:</h4>
									<textarea
										cols={e.example.cols}
										rows={e.example.row}
										defaultValue={e.example.code}
										disabled
										className="cd" />
								</div>
								: null}
						</div>
					</div>
				))}
				{data.meaning &&
					<div className="definition-wrapper">
						<h2>{data.meaning.header}</h2>
						{data.meaning.paragraphs.map((e, i) => (
							<div key={i}>
								<p>{e}</p>
								<br />
							</div>
						))}
					</div>}
				{data.choices &&
					<div className="definition-wrapper">
						<h2 className="fjc">{data.choices.header}</h2>
						<div className="template-pros fw fjsa">
							{data.choices.sections.map((ele, idx) => (
								<div key={idx} className="template-cons">
									<h3 className="tc">{ele.header}</h3>
									<ul className="ul">
										{ele.links.map((e, i) => (
											<li key={`${idx}-${i}`}>{e}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>}
				{data.application &&
					<div className="definition-wrapper">
						<h2>{data.application.header}</h2>
						{data.application.paragraphs.map((e, i) => (
							<div key={i}>
								<p>{e}</p>
								<br />
							</div>
						))}
						<ul className="ul list-wrapper">
							{data.application.steps.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
						{data.application.examples.map((e, i) => (
							<div key={i} className="example-margin">
								<div className="definition-wrapper dark-card">
									<h3>{e.file}</h3>
									<div className="definition-wrapper card-body">
										<h4>Example:</h4>
										<textarea
											cols={e.cols}
											rows={e.row}
											defaultValue={e.code}
											disabled
											className="cd" />
									</div>
								</div>
							</div>
						))}
						<div className="definition-wrapper">
							<h2 className="fjc">Welcome to Universal JavaScript Rendering! Happy Coding!</h2>
						</div>
					</div>}
			</div>
		);
	}

}
