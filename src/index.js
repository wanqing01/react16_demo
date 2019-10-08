import React from "react";
import ReactDom from "react-dom";
import './index.less';
import IRouter from './pages/router';


ReactDom.render(
    <IRouter/>,
    document.getElementById("root")
);
