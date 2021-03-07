import {useRouteMatch} from 'react-router-dom';

export default () => {
  const {match, path, url} = useRouteMatch();

  return {
    match, path, url,
    pathWithoutSlash: path.endsWith('/') ? path.slice(0, -1) : path,
    urlWithoutSlash: url.endsWith('/') ? url.slice(0, -1) : url
  }
}