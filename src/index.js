import React from "react";
import { render } from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { browserHistory, Router } from "react-router";
import { routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import reduxApp from "./redux";
import reactTapSupport from "react-tap-event-plugin";

import "./globalStyles";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
reactTapSupport();

const store = createStore(
  reduxApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk),
    autoRehydrate()
  )
);

// begin periodically persisting the store
persistStore(store);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
