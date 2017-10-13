import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.fetchContacts = this.fetchContacts.bind(this);
  }

  componentDidMount() {
    this.fetchContacts();
  }

  async fetchContacts() {
    const res = await fetch('/api/manifest');
    const contacts = await res.json();
    this.setState({ contacts });
  }

  render() {
    return <div>hello world!</div>;
  }
}
