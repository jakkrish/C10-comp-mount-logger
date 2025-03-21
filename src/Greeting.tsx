import { useEffect } from 'react';

const Greeting = () => {
  const loadingLogger = useEffect(function () {
    console.log('Component mounted');

    return ()=>{console.log("Component unmounted")}
  }, []);
  return <div>Hello there!</div>;
};

export default Greeting;
