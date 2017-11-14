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
        min-width: 320px;
      }

      ul {
        padding: 0;
      }

      li {
        box-sizing: border-box;
        padding: 15px 5%;
        transform-origin: 50% 50%;
      }

      .list {
        list-style: none;
      }

      .list li {
        position: relative;
        border-left: 4px solid lightgray;
        color: darkseagreen;
        transition: background 0.3s ease, color 0.3s ease;
      }
      .list li:hover {
        background: transparent;
        border-color: black;
        color: black;
        box-shadow: none;
      }

      ul li div {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      ul li .make {
        width: 30%;
        max-width: 30%;
        display: inline-block;
      }
      ul li .model {
        width: 30%;
        max-width: 30%;
        display: inline-block;
      }
      ul li .color {
        width: 20%;
        max-width: 20%;
        display: inline-block;
      }
      ul li .enteredAt {
        width: 20%;
        max-width: 20%;
        display: inline-block;
      }
    `}</style>
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHead;
