import React from "react";
import ReactDom from "react-dom";
// import App from './context/App'
// import App from "./modifyProps/App";
import App from "./hook/App";
// import App from "./api/App";
// import App from "./demo/App";
// import App from "./testRender/App";
// import App from "./testUtils/App";
// import App from "./changeChild/App";

import VConsole from "vconsole";

new VConsole();

ReactDom.render(<App />, document.querySelector("#app"));
