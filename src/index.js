import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const name = "Thao";
const element = React.createElement("h1", { style: { textAlign: "center" } }, name);

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(element);