import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData, IntlProvider } from "react-intl";
import fr from 'react-intl/locale-data/fr';

// Main app component
import App from "./components/App";

// Import all css needed for the app at once
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./assets/css/palmpay.css";
import "./index.css";

import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json";

addLocaleData([...fr]);

const messages = {
    'en': messages_en,
    'fr': messages_fr
};

const language = 'fr';

// Add IntlProvider to make the internationalization functions visible in all
// our components.
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("root")
);
