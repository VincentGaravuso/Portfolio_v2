"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./AboutThis.css");
var AboutThis = function () { return (React.createElement("div", null,
    React.createElement("div", { className: 'title-text' },
        React.createElement("p", { style: { fontSize: '3rem' } }, "About This")),
    React.createElement("div", { className: 'about-this-first' },
        React.createElement("div", { className: 'about-this-first-img' }),
        React.createElement("div", { className: 'about-this-first-text' })),
    React.createElement("div", { className: 'about-this-second' },
        React.createElement("div", { className: 'about-this-second-img' }),
        React.createElement("div", { className: 'about-this-second-text' })))); };
exports.default = (0, react_redux_1.connect)()(AboutThis);
//# sourceMappingURL=AboutThis.js.map