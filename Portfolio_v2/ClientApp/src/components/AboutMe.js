"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var reactstrap_1 = require("reactstrap");
require("./AboutMe.css");
var AboutMe = function () { return (React.createElement("div", null,
    React.createElement("div", { className: 'title-text' },
        React.createElement("p", { style: { fontSize: '3rem' } }, "About Me")),
    React.createElement("div", { className: 'spacer' }),
    React.createElement("div", { className: 'content-container' },
        React.createElement("div", { className: 'about-me-container' },
            React.createElement("div", { className: 'about-me' },
                React.createElement("p", { className: 'about-me-txt' }, "In 2021 I moved from New York to Los Angeles with my fianc\u00E9 Liz and our golden retriever Basil."),
                React.createElement("p", { className: 'about-me-txt' }, "I really enjoy cooking, gaming, travel and exploring new foods and restaurants around LA."),
                React.createElement("p", { className: 'about-me-txt' }, "I'm also constantly working on new projects whether it's learning new frameworks like React, creating Discord bots for my communities or learning emerging technologies like blockchain."))),
        React.createElement(reactstrap_1.UncontrolledCarousel, { className: 'about-me-img', items: [
                {
                    key: 1,
                    src: require('../assets/food1.png'),
                    Text: ''
                },
                {
                    key: 2,
                    src: require('../assets/travel1.png'),
                    Text: ''
                },
                {
                    key: 3,
                    src: require('../assets/personal1.jpeg'),
                    Text: ''
                },
                {
                    key: 4,
                    src: require('../assets/food2.png'),
                    Text: ''
                },
                {
                    key: 5,
                    src: require('../assets/travel2.png'),
                    Text: ''
                },
                {
                    key: 6,
                    src: require('../assets/pup1.jpeg'),
                    Text: ''
                },
                {
                    key: 7,
                    src: require('../assets/personal2.jpeg'),
                    Text: ''
                },
                {
                    key: 8,
                    src: require('../assets/travel3.png'),
                    Text: ''
                },
                {
                    key: 9,
                    src: require('../assets/pup2.jpeg'),
                    Text: ''
                },
                {
                    key: 10,
                    src: require('../assets/travel4.jpeg'),
                    Text: ''
                }
            ] })))); };
exports.default = (0, react_redux_1.connect)()(AboutMe);
//# sourceMappingURL=AboutMe.js.map