import pageIndex from '../pages/templates/pageTemplateIndex';
import React from 'react';

export function renderPage(desc, key) {
  const PageComponent = pageIndex[getComponentName(desc)];
  if (!PageComponent) return null;
  return <PageComponent key={key} {...getProps(desc)}/>
}

export function getComponentName(desc) {
  return Object.keys(desc)[0];
}

export function getProps(desc) {
  let pageProps = desc[Object.keys(desc)[0]];
  if (typeof pageProps !== 'object' || pageProps === null) pageProps = {};
  return pageProps;
}