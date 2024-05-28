import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { ReduxProvider } from "@/app/providers";
import reduxConfigs from "@/app/configs/redux.config";
import { rootSaga } from "@/store";

import App from "./app";

import "@/app/styles/index.css";
import "vite/modulepreload-polyfill";

reduxConfigs.middleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

function render() {
  root.render(
    <React.StrictMode>
      <ReduxProvider store={reduxConfigs.store}>
        <Suspense fallback={<div>로딩중....</div>}>
          <App />
        </Suspense>
      </ReduxProvider>
    </React.StrictMode>
  );
}

render();
reduxConfigs.store.subscribe(render);
