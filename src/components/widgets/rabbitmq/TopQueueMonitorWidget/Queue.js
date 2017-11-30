import React from 'react';
import PropTypes from 'prop-types';
import QueueStats from './QueueStats';

const Queue = ({ queue }) =>
  (
    <div className="row" style={{ paddingBottom: '10px' }}>
      <div className="col-md-12">
        {
          <div className="card">
            <div className="card-body">
              <h5>{queue.name}</h5>
              <QueueStats
                readyCount={queue.ready_count}
                readyCountRate={queue.ready_count_rate}
                unacknowledgedCount={queue.unacknowledged_count}
                unacknowledgedCountRate={queue.unacknowledged_count_rate}
              />
            </div>
          </div>
        }
      </div>
    </div>
  );

Queue.propTypes = {
  queue: PropTypes.shape({}).isRequired,
};

export default Queue;
