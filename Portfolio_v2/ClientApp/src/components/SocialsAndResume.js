"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./css/SocialsAndResume.css");
var SocialsAndResume = function () { return (React.createElement("div", null,
    React.createElement("div", { className: 'title-text' },
        React.createElement("p", { style: { fontSize: '3rem', paddingBottom: '3rem' } }, "Let's Connect")),
    React.createElement("div", { className: 'socials-and-resume-container' },
        React.createElement("div", { className: 'socials-container' },
            React.createElement("div", { className: 'title-text-socials-resume' }, "Socials"),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' } },
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://github.com/VincentGaravuso/' },
                    React.createElement("img", { alt: 'GitHub', className: 'social-media-icon', style: { width: '60px', height: '60px' }, src: require('../assets/icons8-github.svg') }),
                    React.createElement("p", { style: { color: '#E4DEAE' } }, "GitHub")),
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: 'https://www.linkedin.com/in/vincentgaravuso/' },
                    React.createElement("img", { alt: 'LinkedIn', className: 'social-media-icon', style: { width: '60px', height: '60px' }, src: require('../assets/icons8-linkedin.svg') }),
                    React.createElement("p", { style: { color: '#E4DEAE' } }, "LinkedIn")))),
        React.createElement("div", { className: 'resume-container' },
            React.createElement("div", { className: 'title-text-socials-resume' }, "Resume"),
            React.createElement("div", { className: 'resume-body' },
                React.createElement("a", { className: 'social-media', target: "_blank", rel: "noopener noreferrer", href: require('../assets/Vincent_Garavuso_Resume.pdf') },
                    React.createElement("img", { alt: 'New Tab', className: 'social-media-icon', style: { width: '60px', height: '60px', padding: '8px' }, src: require('../assets/new-window.svg') }),
                    React.createElement("p", { style: { color: '#E4DEAE' } }, "Open")),
                React.createElement("a", { className: 'social-media', download: 'Vincent_Garavuso_Resume.pdf', href: require('../assets/Vincent_Garavuso_Resume.pdf') },
                    React.createElement("img", { alt: 'Download', className: 'social-media-icon', style: { width: '60px', height: '60px', padding: '8px' }, src: require('../assets/download-icon.svg') }),
                    React.createElement("p", { style: { color: '#E4DEAE' } }, "Download"))))),
    React.createElement("div", { className: 'resume-container' },
        React.createElement("div", { className: 'title-text-socials-resume' }, "Email Me"),
        React.createElement("div", { className: 'resume-body' },
            React.createElement("a", { className: 'social-media', href: "mailto: vinnyg96@hotmail.com" },
                React.createElement("img", { alt: 'Download', className: 'social-media-icon', style: { width: '60px', height: '60px', padding: '8px' }, src: require('../assets/email-svgrepo-com.svg') })))))); };
exports.default = (0, react_redux_1.connect)()(SocialsAndResume);
//# sourceMappingURL=SocialsAndResume.js.map