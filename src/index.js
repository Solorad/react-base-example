import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { browserHistory, Router } from "react-router";
import { routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import reduxApp from "./redux";
import reactTapSupport from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
reactTapSupport();

const store = createStore(
  reduxApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(browserHistory), thunk)
);

const history = syncHistoryWithStore(browserHistory, store);
const muiTheme = getMuiTheme({
  fontFamily: "ProximaNovaRegular"
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
