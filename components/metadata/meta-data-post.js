import React from "react";
import PropTypes from 'prop-types';

export function MetadataPost({}) {

  return (
    <Head>
      <title>un titulo super interesante</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="descripcion corta" />
      <meta name="og:description" content="descripcion corta" />
      <meta property="og:title" content="un titulo super interesante" />
      <meta property="og:image" content="images/blogging.png" />
      <meta property="og:image:width" content="1200px"/>
      <meta property="og:image:height" content="630px" />
      <meta property="og:type" content="article" />
      <meta name="twitter:image" content={image.url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={summary} />
      <meta name="fragment" content="!" />
      <link rel="icon" type="image/png" href="images/blogging.png" />
      <link rel="apple-touch-icon" href="images/blogging.png" />
    </Head>
  );
}

MetadataPost.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  image:  PropTypes.string
};