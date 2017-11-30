import React from 'react';
import PropTypes from 'prop-types';

const QueueStats = ({
  readyCount,
  readyCountRate,
  unacknowledgedCount,
  unacknowledgedCountRate,
}) => (
  <div className="card-group">
    <div className="card col-md-3" style={{ padding: '0' }}>
      <div className="card-body text-center text-white" style={{ backgroundColor: '#455a64' }}>
        <h5 className="card-text">{readyCount}</h5>
        <span className="card-text">Ready</span>
      </div>
    </div>
    <div className="card col-md-3" style={{ padding: '0' }}>
      <div className="card-body text-center text-white" style={{ backgroundColor: '#455a64' }}>
        <h5 className="card-text">{readyCountRate}/s</h5>
        <span className="card-text">Ready</span>
      </div>
    </div>
    <div className="card col-md-3" style={{ padding: '0' }}>
      <div className="card-body text-center text-white" style={{ backgroundColor: '#718792' }}>
        <h5 className="card-text">{unacknowledgedCount}</h5>
        <span className="card-text">Unacked</span>
      </div>
    </div>
    <div className="card col-md-3" style={{ padding: '0' }}>
      <div className="card-body text-center text-white" style={{ backgroundColor: '#718792' }}>
        <h5 className="card-text">{unacknowledgedCountRate}/s</h5>
        <span className="card-text">Unacked</span>
      </div>
    </div>
  </div>
);

QueueStats.propTypes = {
  readyCount: PropTypes.number.isRequired,
  readyCountRate: PropTypes.number.isRequired,
  unacknowledgedCount: PropTypes.number.isRequired,
  unacknowledgedCountRate: PropTypes.number.isRequired,
};

export default QueueStats;
