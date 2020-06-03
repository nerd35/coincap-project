import React, { Component } from 'react';
class TopnavBar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav className=' white lighten-5 '>
						<div className='container'>
							<div className='nav-wrapper mt'>
								<a href='/' className='brand-logo center '>
									<img src={require('../assets/logo.png')} alt='logo' style={{ maxWidth: '23%' }} />
								</a>
								<a href='/' data-target='slide-out' className='sidenav-trigger right '>
									<i className='material-icons black-text'>menu</i>
								</a>
								<ul className='left hide-on-med-and-down'>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
										>
											Coins
										</a>
									</li>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
										>
											Exchanges
										</a>
									</li>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
										>
											Charts
										</a>
									</li>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
										>
											API
										</a>
									</li>
								</ul>
								<ul className='right hide-on-med-and-down'>
									<li>
										<a
											href='#!'
											class='dropdown-trigger black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
											data-target='dropdown1'
										>
											USD<i class='material-icons right'>arrow_drop_down</i>
										</a>
									</li>

									<li>
										<a
											href='#!'
											class='dropdown-trigger black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
											data-target='dropdown2'
										>
											English<i class='material-icons right'>arrow_drop_down</i>
										</a>
									</li>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '12px', color: '#474F5A' }}
										>
											<i class='fas fa-search' style={{ fontSize: '14px', color: '#474F5A' }}></i>
										</a>
									</li>
									<li>
										<a
											href='/'
											className='black-text'
											style={{ fontSize: '14px', color: '#474F5A' }}
										>
											<i class='fas fa-cogs' style={{ fontSize: '16px', color: '#474F5A' }}></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<ul id='slide-out' className='sidenav'>
						<li>
							<a href='/' className='black-text' style={{ fontSize: '20px', color: '#474F5A' }}>
								<i class='fab fa-bitcoin fa-lg'></i> Coins
							</a>
						</li>
						<li>
							<a href='/' className='black-text' style={{ fontSize: '20px', color: '#474F5A' }}>
								<i class='fas fa-exchange-alt fa-lg'></i> Exchanges
							</a>
						</li>
						<li>
							<a href='/' className='black-text' style={{ fontSize: '20px', color: '#474F5A' }}>
								<i class='fas fa-cogs fa-lg'></i> Setings
							</a>
						</li>
					</ul>
					<ul id='dropdown1' class='dropdown-content'>
						<li>
							<a href='/'>AFN</a>
						</li>
						<li>
							<a href='/'>BBD</a>
						</li>
						<li>
							<a href='/'>AOA</a>
						</li>
					</ul>
					<ul id='dropdown2' class='dropdown-content'>
						<li>
							<a href='/'>France</a>
						</li>
						<li>
							<a href='/'>Spainish</a>
						</li>
						<li>
							<a href='/'>Italian</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default TopnavBar;
