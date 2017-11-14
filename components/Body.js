import React from 'react';
import Moment from 'react-moment';
import getSwatchColor from '../utils/colors';

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
    const res = await fetch('/api/manifest');
    const manifest = await res.json();
    this.setState({ manifest, isLoading: false });
  }

  displayList = (list) => {
    return <ul className="list">{
      list.map(item => this.listItem(item))
    }</ul>
  }

  listItem = (item) => {
    const { id, make, model, color, enteredAt } = item;
    const swatch = getSwatchColor(color.toLowerCase());

    return (
      <li key={id} className="item">
        <div className="make" title={make}>{make}</div>
        <div className="model" title={model}>{model}</div>
        <div className="color" title={color}>{color}</div>
        <div className="swatch" title={color}>
          <div className="square" style={{background: swatch}} />
        </div>
        <div className="enteredAt" title={enteredAt}><Moment fromNow>{enteredAt}</Moment></div>
      </li>
    )
  }

  loading(isLoading) {
    return isLoading ? <button disabled>Loading</button> : <button onClick={this.fetchManifest}>Refresh</button>
  }

  render() {
    const { isLoading, manifest } = this.state;

    return (
      <div>
        { this.loading(isLoading) }
        { this.displayList(manifest) }
      </div>
    )
  }
}
