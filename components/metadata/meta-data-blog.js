import React from "react";
import PropTypes from 'prop-types';
import Head from 'next/head'

export function MetadataBlog({}) {

  return (
    <Head>
      <title>El blog de Miguel</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="blog personal donde Miguel Rodríguez comparte sus opiniones sobre diferentes temas" />
      <meta name="og:description" content="blog personal donde Miguel Rodríguez comparte sus opiniones sobre diferentes temas" />
      <meta property="og:title" content="El blog de Miguel" />
      <meta property="og:image" content="images/blogging.png" />
      <meta property="og:image:width" content="1200px"/>
      <meta property="og:image:height" content="630px" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="images/blogging.png" />
      <meta property="twitter:title" content="El blog de Miguel" />
      <meta property="twitter:description" content="blog personal donde Miguel Rodríguez comparte sus opiniones sobre diferentes temas"  />
      <meta name="fragment" content="!" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="expires" content="31556952" />
      <link rel="icon" type="image/png" href="images/blogging.png" />
      <link rel="apple-touch-icon" href="images/blogging.png" />
    </Head>
  );
}

MetadataBlog.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.string
};