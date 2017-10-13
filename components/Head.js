import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageHead = ({ title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css"
      />
    </Head>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
      }
    `}</style>
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHead;
