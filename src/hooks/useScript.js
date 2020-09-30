import {useEffect} from 'react';

const useScript = ({url, async, defer, crossorigin, nonce}) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = async;
    script.defer = defer;
    script.crossorigin = crossorigin;
    script.nonce = nonce;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, async, defer, crossorigin, nonce]);
};

export default useScript;
