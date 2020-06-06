import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import './HistoryChart.css';
import { fetchMarketHistory } from '../actions/marketAction';
import { connect } from 'react-redux';

class HistoryChart extends Component {
	constructor() {
		super();
		this.state = {
			markets: [
				{
					id: [],
					priceUsd: null,
					date: null
				}
			]
		};
	}
	componentDidMount() {
		const { fetchMarketHistory: historyData } = this.props;
		historyData();
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { markets } = this.props;
		const { data } = markets;

		const lineChart = {
			labels: ['11:00', '12:00'],
			datasets: [
				{
					label: 'BTC',
					data: [4000, 5000, 6000],
					borderColor: 'rgba(54, 162, 235, 0.6)',
					pointBorderColor: 'rgba(54, 162, 235, 1.0)'
				}
			]
		};

		return (
			<div className='container'>
				<div className='input-wrapper'>
					<FormGroup>
						<Label className='input-label'>Select currency</Label>
						<Input type='select' onChange={this.handleChange}>
							{data &&
								data.map((market, i) => (
									<option key={i} value={market.id}>
										{market.id}
									</option>
								))}
						</Input>
					</FormGroup>
				</div>
				<div className='chart-wrapper'>
					<Line data={lineChart} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	marketHistory: state.markets.marketHistory
});

export default connect(mapStateToProps, { fetchMarketHistory })(HistoryChart);
