import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMarketHistory } from "../redux/market/marketAction";
import { LineChart, AreaChart, ColumnChart, PieChart } from "react-chartkick";
import "chart.js";

const SingleTableSection = (props) => {
  const {
    match: { params },
    marketHistory,
    fetchMarketHistory,
    history,
  } = props;

  const { id } = params;

  useEffect(() => {
    fetchMarketHistory(id);
  }, [id]);

  const composeChart = () => {
    const chartData = [];
    marketHistory.length &&
      marketHistory.map((each) => {
        const date = new Date(each.date).toISOString().split("T")[0];
        const stringDate = date.toString();
        return chartData.push([[stringDate], +each.priceUsd]);
      });

    return chartData;
  };

  return (
		<div className='container mt-5'>
			<div className='row  mt-5'>
        <div className='col-lg-8 mx-auto col-sm-12 mt-5'>
        <h2>{history.name}</h2>
      <LineChart  download={true}  data={composeChart()} />
      <AreaChart data={composeChart()} />
      <ColumnChart data={composeChart()} />
      <PieChart data={composeChart()} />
      <div>
        <button className="btn btn-sm btn-primary mt-5 mx-auto" onClick={() => history.goBack()} color="secondary">
          Go back
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  marketHistory: state.markets.marketHistory,
});

export default connect(mapStateToProps, {
  fetchMarketHistory,
})(SingleTableSection);
