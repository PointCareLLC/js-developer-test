import React from 'react';

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
    return <ol className='list'>{
      list.map(item => {
        return this.listItem(item)
      })
    }</ol>
  }

  listItem = item => {
    return (
      <li key={item.id} className='item'>
        <div className='make'>{item.make}</div>
        <div className='model'>{item.model}</div>
        <div className='color'>{item.color}</div>
        <div className='enteredAt'>{item.enteredAt}</div>
      </li>
    )
  }

  loading() {
    return <div>Loading</div>
  }

  render() {
    const { isLoading, manifest } = this.state;

    return isLoading ? this.loading() : this.displayList(manifest);
  }
}
