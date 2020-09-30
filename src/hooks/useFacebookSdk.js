import {useEffect} from 'react';
import useScript from './useScript';

const useFacebookSdk = () => {
  useScript({
    url: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0",
    async: true,
    defer: true,
    crossorigin: "anonymous",
    nonce: "62sK3HYB"
  });
  useEffect(() => {
    const div = document.createElement('div');

    div.id = "fb-root";

    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    }
  }, []);
};

export default useFacebookSdk;