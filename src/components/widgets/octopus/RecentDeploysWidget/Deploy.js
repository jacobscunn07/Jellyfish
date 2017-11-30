import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const Deploy = ({ deploy }) => (
  <div className="row" style={{ paddingBottom: '10px' }}>
    <div className="col-md-12">
      {
        <div className="card-group">
          <div className="card col-md-2" style={{ padding: '0' }}>
            <div className={`card-body text-center text-white ${deploy.stateClass}`}>
              <FontAwesome className="align-middle" name={deploy.icon} size="3x" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text">{deploy.project}: {deploy.releaseVersion} <FontAwesome name="long-arrow-right" /> Deploy to {deploy.environment}</p>
              <p className="card-text">{moment(deploy.queueTime).format('LLLL')}</p>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
);

Deploy.propTypes = {
  deploy: PropTypes.shape({}).isRequired,
};

export default Deploy;
