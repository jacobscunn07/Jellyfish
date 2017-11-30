import _ from 'lodash';

class OctopusClient {
  static getRecentDeployments = (size = 5) =>
    fetch('/api/octopus/dashboard', {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        const filteredDeploys = _.filter(json.Items, o => o.State !== 'Queued');
        const sortedDeployments = _.orderBy(filteredDeploys, ['QueueTime'], ['desc']).slice(0, size);
        const environments = _.mapKeys(json.Environments, value => value.Id);
        const projects = _.mapKeys(json.Projects, value => value.Id);
        const deploys = _.map(sortedDeployments, deployment => (
          {
            id: deployment.Id,
            state: deployment.State,
            errorMessage: deployment.ErrorMessage,
            duration: deployment.Duration,
            releaseVersion: deployment.ReleaseVersion,
            queueTime: deployment.QueueTime,
            environment: environments[deployment.EnvironmentId].Name,
            project: projects[deployment.ProjectId].Name,
          }));
        return deploys;
      })
}

export default OctopusClient;
