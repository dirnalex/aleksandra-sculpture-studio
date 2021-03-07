import pageIndex from '../pages/templates/pageTemplateIndex';
import React from 'react';

export function renderPage(desc, key) {
  const componentName = Object.keys(desc)[0];
  const PageComponent = pageIndex[componentName];
  if (!PageComponent) return null;
  let pageProps = desc[componentName];
  if (typeof pageProps !== 'object' || pageProps === null) pageProps = {};
  return <PageComponent key={key} {...pageProps}/>
}

export function getProps(desc) {
  let pageProps = desc[Object.keys(desc)[0]];
  if (typeof pageProps !== 'object' || pageProps === null) pageProps = {};
  return pageProps;
}