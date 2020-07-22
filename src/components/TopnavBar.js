import React, { Component } from 'react';
class TopnavBar extends Component {
	render() {
		return (
			<nav className="navbar shadow fixed-top navbar-expand-lg navbar-light bg-white">
			<div className='container'>
		<a className="navbar-brand " href="/"><img src={require('../assets/logo.ico')} alt='logo'/>
		<strong className="logo">Cryptomining</strong></a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarText">
			<ul className="navbar-nav mx-auto">
				<li className="nav-item">
					<a className="nav-link" href="/">Coin </a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/exchange">Exchange</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/history">Charts</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/">Api</a>
				</li>
			</ul>
			<span className="navbar-text">
				<ul className="navbar-nav ml-auto">
				
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						USD
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a className="dropdown-item" href="/">USD</a>
						<a className="dropdown-item" href="/">USD</a>
						<a className="dropdown-item" href="/">USD</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						English
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a className="dropdown-item" href="/">French</a>
						<a className="dropdown-item" href="/">Yoruba</a>
						<a className="dropdown-item" href="/">Hausa</a>
					</div>
				</li>
				<li className="nav-item">
					<a class="nav-link" href="/">Charts</a>
				</li>
				</ul>
			</span>
		</div>
		</div>
	</nav>
		);
	}
}

export default TopnavBar;
