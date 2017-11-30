import React from 'react';
import _ from 'lodash';
import Queue from './Queue';

class TopQueueMonitorWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queues: [],
    };
  }

  componentDidMount() {
    this.pollRabbit();
    setInterval(() => {
      this.pollRabbit();
    }, 5000);
  }

  pollRabbit = () => {
    fetch('/api/rabbitmq', {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        const queues = _.filter(json, q => q.name.match(new RegExp('.*host$', 'i')))
          .map(queue => (
            {
              name: queue.name,
              consumers: queue.consumers,
              count: queue.messages,
              ready_count: queue.messages_ready,
              ready_count_rate: queue.messages_ready_details.rate,
              unacknowledged_count: queue.messages_unacknowledged,
              unacknowledged_count_rate: queue.messages_unacknowledged_details.rate,
            }
          ));
        const sorted = queues.sort((a, b) => (
          b.count - a.count
        ));
        const queuesToDisplay = [];
        let i = 0;
        while (i < 5 && sorted[i]) {
          queuesToDisplay.push(sorted[i]);
          i += 1;
        }
        this.setState({ queues: queuesToDisplay });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.queues && this.state.queues.map(queue =>
            <Queue key={queue.name} queue={queue} />)
        }
      </div>
    );
  }
}

export default TopQueueMonitorWidget;
