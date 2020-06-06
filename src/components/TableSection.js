import React, { Component } from 'react';
import './style.css';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router';
import { ModalHeader, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { fetchAssets } from '../actions//assetActions';
import { fetchMarketHistory } from '../actions/marketAction';
import MarketCapNav from './MarketcapNav';
import { LineChart } from 'react-chartkick';
import 'chart.js';

class TableSection extends Component {
	constructor() {
		super();
		this.state = {
			assets: [],
			limit: 20,
			isOpen: false,
			chartHistory: []
		};
	}
	componentDidMount() {
		const { fetchAssets: getData, fetchMarketHistory: historyData } = this.props;
		setInterval(async () => {
			await getData();
		}, 1000);
		historyData();
	}
	toggle = async ({ id }) => {
		await this.props.fetchMarketHistory(id);
		this.setState({ isOpen: !this.state.isOpen });
	};

	composeChart = () => {
		const chartData = [];
		const historyMap = this.props.marketHistory.map((each) => {
			const date = new Date(each.date).toISOString().split('T')[0];
			const stringDate = date.toString();
			return chartData.push([[stringDate], +each.priceUsd]);
		});

		return chartData;
	};

	render() {
		const { assets, isLoading } = this.props;
		const { data } = assets;
		const onLoadMore = () => {
			this.setState({
				limit: this.state.limit + 20
			});
		};
		return (
			<div>
				<MarketCapNav />
				<div className='container white table-section'>
					{isLoading ? (
						<div className='row loader'>
							<div className='col s12 loader'>
								<Loader
									className=' loader'
									type='BallTriangle'
									color='#0922e0'
									height={80}
									width={80}
								/>
							</div>
						</div>
					) : (
						<div className='col s12'>
							<table className='highlight'>
								<thead>
									<tr>
										<th className='black-text hide-on-med-and-down '>
											Rank <i className='fas fa-sort-down'></i>
										</th>
										<th className='grey-text th-option'>Name</th>
										<th className='grey-text th-option'>Price</th>
										<th className='grey-text hide-on-med-and-down th-option'>Market Cap</th>
										<th className='grey-text hide-on-med-and-down th-option'>vwap(24Hr)</th>
										<th className='grey-text hide-on-med-and-down th-option'>Supply</th>
										<th className='grey-text hide-on-med-and-down th-option'>volume (24Hr)</th>
										<th className='grey-text th-option'>change (24Hr)</th>
									</tr>
								</thead>
								<tbody>
									{data &&
										data.slice(0, this.state.limit).map((asset, index) => {
											return (
												<tr key={index} onClick={() => this.toggle(asset)}>
													<td className='hide-on-med-and-down tb-option'>{asset.rank}</td>
													<td className=' tb-option'>
														{asset.name}
														<br />
														{asset.symbol}
													</td>
													<td className=' tb-option'>
														<NumberFormat
															value={asset.priceUsd}
															displayType={'text'}
															decimalScale={2}
															thousandSeparator={true}
															prefix={'$'}
														/>
													</td>
													<td className='hide-on-med-and-down tb-option'>
														<NumberFormat
															value={asset.marketCapUsd}
															displayType={'text'}
															decimalScale={2}
															thousandSeparator={true}
															prefix={'$'}
														/>
													</td>
													<td className='hide-on-med-and-down tb-option'>
														<NumberFormat
															value={asset.vwap24Hr}
															displayType={'text'}
															decimalScale={2}
															thousandSeparator={true}
															prefix={'$'}
														/>
													</td>
													<td className='hide-on-med-and-down tb-option'>
														<NumberFormat
															value={asset.supply}
															displayType={'text'}
															decimalScale={2}
															thousandSeparator={true}
															prefix={'$'}
														/>
													</td>
													<td className='hide-on-med-and-down tb-option'>
														<NumberFormat
															value={asset.volumeUsd24Hr}
															displayType={'text'}
															decimalScale={2}
															thousandSeparator={true}
															prefix={'$'}
														/>
													</td>
													<td className='tb-option'>
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
							<div className='row flow-text load-more'>
								<div className='col s12 flow-text'>
									<button
										className=' btn-small load-more-btn'
										onClick={onLoadMore}
										outline
										color='secondary'
									>
										Load More...
									</button>{' '}
								</div>
							</div>
						</div>
					)}
				</div>
				<Modal isOpen={this.state.isOpen}>
					<ModalBody>
						<LineChart curve={true} data={this.props.marketHistory.length > 0 && this.composeChart()} />
					</ModalBody>
					<ModalFooter>
						<Button color='primary' onClick={this.toggle}>
							Close
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	assets: state.assets.assets,
	isLoading: state.assets.isLoading,
	marketHistory: state.markets.marketHistory
});

export default connect(mapStateToProps, {
	fetchAssets,
	fetchMarketHistory
})(withRouter(TableSection));
