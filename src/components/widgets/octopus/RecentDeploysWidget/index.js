import React from 'react';
import Deploy from './Deploy';
import OctopusClient from './../services/OctopusClient';

class RecentDeploysWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deploys: [],
    };
  }

  componentDidMount() {
    this.getDeployments();
    setInterval(() => {
      this.getDeployments();
    }, 5000);
  }

  getDeployments = () => {
    OctopusClient.getRecentDeployments()
      .then((deploys) => {
        const deployments = deploys;

        for (let i = 0; i < deployments.length; i += 1) {
          switch (deployments[i].state) {
            case 'Success':
              deployments[i].stateClass = 'bg-success';
              deployments[i].icon = 'check';
              break;
            case 'Executing':
              deployments[i].stateClass = 'bg-warning';
              deployments[i].icon = 'circle-o-notch';
              break;
            case 'Failed':
            case 'Cancelling':
            case 'Canceled':
              deployments[i].stateClass = 'bg-danger';
              deployments[i].icon = 'times';
              break;
            default:
              break;
          }
        }
        this.setState({ deploys: deployments });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.deploys &&
          this.state.deploys.map(deploy => <Deploy key={deploy.id} deploy={deploy} />)
        }
      </div>
    );
  }
}

export default RecentDeploysWidget;
