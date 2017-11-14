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
        min-width: 480px;
      }

      ul {
        padding: 0;
      }

      li {
        box-sizing: border-box;
        padding: 15px 5%;
        cursor: pointer;
      }

      .list {
        list-style: none;
      }

      .list li {
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 4px solid lightgray;
        color: darkseagreen;
        opacity: 0.9;
        transition: background 0.3s ease, color 0.3s ease, opacity 0.3s ease;
      }
      .list li.list-header {
        border-left: 4px solid black;
        color: black;
        opacity: 1;
        font-weight: bold;
      }
      .list li.item:hover {
        background: transparent;
        border-color: black;
        color: black;
        box-shadow: none;
        opacity: 1;
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
        font-weight: bold;
      }
      ul li .model {
        width: 30%;
        max-width: 30%;
        display: inline-block;
      }
      ul li .color {
        width: 15%;
        max-width: 15%;
        display: inline-block;
      }
      ul li .swatch {
        width: 10%;
        max-width: 10%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      ul li .swatch .square {
        width: 30px;
        height: 30px;
      }
      ul li .enteredAt {
        width: 15%;
        max-width: 15%;
        display: inline-block;
      }
    `}</style>
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHead;
