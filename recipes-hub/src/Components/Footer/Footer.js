import React from 'react';
import './Footer.css';

class Footer extends React.Component {

	render() {
		return (
			<footer className="page-footer">
				<div className="container">
					<div className="column four">
					<h2>Connect with me</h2>
					<ul className="connect-list">
						<li className="connect-list__item">
							<a 
								className="connect-list__link"							
								href="https://www.linkedin.com/in/nancy-minyoi-mulozi/"
								target="newwindow"
							>
								<i className="zmdi zmdi-linkedin zmdi-hc-5x" />
							</a>
						</li>
						<li className="connect-list__item">
							<a 
								className="connect-list__link"							
								href="https://github.com/nanrisa27"
								target="newwindow"
							>
								<i className="zmdi zmdi-github-alt zmdi-hc-5x" />
							</a>
						</li>
						<li className="connect-list__item">
							<a 
								className="connect-list__link"
								href="https://www.instagram.com/joshfied_0904/?hl=en/"
								target="newwindow"
							>
								<i className="zmdi zmdi-instagram zmdi-hc-5x" />
							</a>
						</li>												
					</ul>
					</div>
				</div>
			</footer>
		);
	}
}



export default Footer;