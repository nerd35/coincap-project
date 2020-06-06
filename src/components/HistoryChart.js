import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import './HistoryChart.css';
import { fetchMarketHistory } from '../actions/marketAction';
import { connect } from 'react-redux';

const HistoryChart = ({ handleChange }) => {
	
	const data = {
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
						<Input type='select' onChange={(e) => handleChange(e.target.value)}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						</Input>
					</FormGroup>
				</div>
				<div className='chart-wrapper'>
					<Line data={data} />
				</div>
			</div>
		);
	}

const mapStateToProps = (state) => ({
	marketHistory: state.markets.marketHistory
});

export default connect(mapStateToProps, { fetchMarketHistory })(HistoryChart);
