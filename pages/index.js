import React from 'react';
import Head from '../components/Head';
import Title from '../components/Title';
import Body from '../components/Body';

export default function Page() {
  const title = 'Parking Lot Manifest';
  return (
    <div className="page">
      <Head title={title} />
      <Title title={title} />
      <Body />
      <style jsx>{`
        .page {
          margin: 1rem;
        }
      `}</style>
    </div>
  );
}
