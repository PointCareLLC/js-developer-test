import React from 'react';
import List from '../features/List';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = { manifest: [], isLoading: true };
    this.fetchManifest = this.fetchManifest.bind(this);
  }

  componentDidMount() {
    this.fetchManifest();
  }

  async fetchManifest() {
    this.setState({ isLoading: true });
    const res = await fetch('/api/manifest');
    const manifest = await res.json();
    this.setState({ manifest, isLoading: false });
  }

  loading(isLoading) {
    return isLoading ? <button disabled>Loading</button> : <button onClick={this.fetchManifest}>Refresh</button>
  }

  render() {
    const { isLoading, manifest } = this.state;

    return (
      <div>
        { this.loading(isLoading) }
        <List list={manifest} />
      </div>
    )
  }
}
