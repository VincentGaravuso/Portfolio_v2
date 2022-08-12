"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./SocialsAndResume.css");
var reactstrap_1 = require("reactstrap");
var AboutMe = function () { return (React.createElement("div", null,
    React.createElement("div", { className: 'title-text' },
        React.createElement("p", { style: { fontSize: '3rem', paddingBottom: '3rem' } }, "Lets Connect")),
    React.createElement("div", { className: 'socials-and-resume-container' },
        React.createElement("div", { className: 'socials-container' },
            React.createElement("div", { className: 'title-text-socials-resume' }, "Socials"),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' } },
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://github.com/VincentGaravuso/' },
                    React.createElement("img", { alt: 'GitHub', className: 'social-media-icon', style: { width: '60px', height: '60px' }, src: require('../assets/icons8-github.svg') }),
                    React.createElement("p", null, "GitHub")),
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://www.linkedin.com/in/vincentgaravuso/' },
                    React.createElement("img", { alt: 'LinkedIn', className: 'social-media-icon', style: { width: '60px', height: '60px' }, src: require('../assets/icons8-linkedin.svg') }),
                    React.createElement("p", null, "LinkedIn")))),
        React.createElement("div", { className: 'resume-container' },
            React.createElement("div", { className: 'title-text-socials-resume' }, "Resume"),
            React.createElement("div", { className: 'resume-body' },
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://github.com/VincentGaravuso/' },
                    React.createElement("img", { alt: 'New Tab', className: 'social-media-icon', style: { width: '60px', height: '60px', padding: '8px' }, src: require('../assets/new-window.svg') }),
                    React.createElement("p", null, "Open")),
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://github.com/VincentGaravuso/' },
                    React.createElement("img", { alt: 'Download', className: 'social-media-icon', style: { width: '60px', height: '60px', padding: '8px' }, src: require('../assets/download-icon.svg') }),
                    React.createElement("p", null, "Download"))))),
    React.createElement("div", { className: 'contact-me-container' },
        React.createElement("div", { className: 'title-text-socials-resume' }, "Send me something"),
        React.createElement("div", null,
            React.createElement(reactstrap_1.Input, { placeholder: "_____ was here! \uD83D\uDC40", className: 'contact-me-text-area', bsSize: "lg", type: "textarea" })),
        React.createElement(reactstrap_1.Form, { className: 'email-send-button-container' },
            React.createElement(reactstrap_1.Input, { type: "email", bsSize: "lg", placeholder: "Email" }),
            React.createElement(reactstrap_1.Button, { outline: true, color: "success", style: { marginLeft: '5px', minWidth: '100px' } }, "Send"))))); };
exports.default = (0, react_redux_1.connect)()(AboutMe);
//# sourceMappingURL=SocialsAndResume.js.map