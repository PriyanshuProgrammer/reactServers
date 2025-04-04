import "./App.css";
import React, { lazy, Suspense, useState } from "react";
const LazyComponent = lazy(() => import("./components/Lazy"));

function App() {
  const [getlazyComp, setGetLazyComp] = useState<boolean>(false);
  const [getDynamicComp, setGetDynamicComp] = useState<React.ReactElement>(<></>);

  const onGetDynamicComp  = async () => {
    const DynamicComp = await import('./components/Dynamic')
    setGetDynamicComp(DynamicComp.default)
  }

  return (
    <>
      <button onClick={() => setGetLazyComp(true)} >LoadLazyComp</button>
      <button onClick={() => onGetDynamicComp()} >LoadDynamicComp</button>
      {getlazyComp && (
        <Suspense fallback={<>Loading....</>}>
          <LazyComponent />
        </Suspense>
      )}
      {
        getDynamicComp
      }
    </>
  );
}

export default App;
