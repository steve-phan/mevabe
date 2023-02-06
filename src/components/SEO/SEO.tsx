import React from "react";
import Head from "next/head";

import { defaultSEO, schemaSEO } from "./SEO.config";
import { stringify } from "querystring";

interface ISEOprops {
  title?: string;
  description?: string;
}

export const SEO = ({ title, description }: ISEOprops) => {
  return (
    <Head>
      <title>{title || defaultSEO.title}</title>
      <meta
        name="description"
        content={description || defaultSEO.description}
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSEO) }}
      ></script>
    </Head>
  );
};
