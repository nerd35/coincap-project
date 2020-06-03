import React, { Component } from 'react';
import './style.css';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchAssets } from '../actions//assetActions';

class TableSection extends Component {
	constructor() {
		super();
		this.state = {
			assets: [],
			limit: 30
		};
	}
	componentDidMount() {
		const { fetchAssets: getData } = this.props;
		setInterval(async () => {
			await getData();
		}, 1000);
	}

	render() {
		console.log(this.props);
		const { assets, isLoading } = this.props;
		const { data } = assets;
		const onLoadMore = () => {
			this.setState({
				limit: this.state.limit + 20
			});
		};
		return (
			<div className='container white table-section'>
				{isLoading ? (
					<div style={{ justifyContent: 'center' }}>
						<Loader type='ThreeDots' color='#212529' height={40} width={40} />
					</div>
				) : (
					<div>
						<table className='highlight'>
							<thead>
								<tr>
									<th
										className='black-text hide-on-med-and-down '
										
									>
										Rank <i className='fas fa-sort-down'></i>
									</th>
									<th className='grey-text th-option' >
										Name
									</th>
									<th className='grey-text th-option' >
										Price
									</th>
									<th
										className='grey-text hide-on-med-and-down th-option'
									>
										Market Cap
									</th>
									<th
										className='grey-text hide-on-med-and-down th-option'
									>
										vwap(24Hr)
									</th>
									<th
										className='grey-text hide-on-med-and-down th-option'
									>
										Supply
									</th>
									<th
										className='grey-text hide-on-med-and-down th-option'
									>
										volume (24Hr)
									</th>
									<th className='grey-text th-option' >
										change (24Hr)
									</th>
								</tr>
							</thead>
							<tbody>
								{data &&
									data.slice(0, this.state.limit).map((asset, index) => {
										return (
											<tr key={index}>
												<td
													className='hide-on-med-and-down tb-option'
												>
													{asset.rank}
												</td>
												<td className=' tb-option' >
													{asset.name}
													<br />
													{asset.symbol}
												</td>
												<td className=' tb-option' >
													<NumberFormat
														value={asset.priceUsd}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														prefix={'$'}
													/>
												</td>
												<td className='hide-on-med-and-down tb-option'
												>
													<NumberFormat
														value={asset.marketCapUsd}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														prefix={'$'}
													/>
												</td>
												<td className='hide-on-med-and-down tb-option'
												>
													<NumberFormat
														value={asset.vwap24Hr}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														prefix={'$'}
													/>
												</td>
												<td className='hide-on-med-and-down tb-option'
												>
													<NumberFormat
														value={asset.supply}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														prefix={'$'}
													/>
												</td>
												<td className='hide-on-med-and-down tb-option'
												>
													<NumberFormat
														value={asset.volumeUsd24Hr}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														prefix={'$'}
													/>
												</td>
												<td className='tb-option' >
													<NumberFormat
														value={asset.changePercent24Hr}
														displayType={'text'}
														decimalScale={2}
														thousandSeparator={true}
														suffix={'%'}
													/>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
            <div className='row flow-text load-more' >
            <div className="col s12 flow-text">
            <button className=" btn-small load-more-btn" onClick={onLoadMore} outline color='secondary'>
            Load More...
            </button>{' '}
            </div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	assets: state.assets.assets,
	isLoading: state.assets.isLoading
});

export default connect(mapStateToProps, { fetchAssets })(TableSection);
