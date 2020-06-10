import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMarketHistory } from "../actions/marketAction";
import { LineChart } from "react-chartkick";
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
    <div>
      <LineChart curve={true} data={composeChart()} />
      <div>
        <button size="sm" onClick={() => history.goBack()} color="secondary">
          Go back
        </button>
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
