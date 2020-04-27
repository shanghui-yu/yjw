import React, { Suspense } from 'react';
import routers from 'router/config';
import RouterViews from "router/RouterViews";
import { HashRouter } from 'react-router-dom';
import RouterLoading from 'hoc/RouterLoading';
import { Provider } from 'react-redux';
import store from "store";
import "./reset.css";

class App extends React.Component<any,any> {
  render() {
    return (
      <Suspense fallback={<RouterLoading />}>
        <HashRouter>
          <Provider store={store}>
            <RouterViews routes={routers} />
          </Provider>
        </HashRouter>
      </Suspense>
    );
  }
}

export default App;
