"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Avatar_1 = require("@mui/material/Avatar");
var Button_1 = require("@mui/material/Button");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var TextField_1 = require("@mui/material/TextField");
var Link_1 = require("@mui/material/Link");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var LockOutlined_1 = require("@mui/icons-material/LockOutlined");
var Typography_1 = require("@mui/material/Typography");
var Container_1 = require("@mui/material/Container");
var styles_1 = require("@mui/material/styles");
var react_select_1 = require("react-select");
var options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
var MyComponent = function () { return (React.createElement(react_select_1["default"], { options: options })); };
function Copyright(props) {
    return (React.createElement(Typography_1["default"], __assign({ variant: "body2", color: "text.secondary", align: "center" }, props),
        'Copyright © ',
        React.createElement(Link_1["default"], { color: "inherit", href: "https://mui.com/" }, "Your Website"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
var theme = (0, styles_1.createTheme)();
function SignUp() {
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };
    return (React.createElement(styles_1.ThemeProvider, { theme: theme },
        React.createElement(Container_1["default"], { component: "main", maxWidth: "xs" },
            React.createElement(CssBaseline_1["default"], null),
            React.createElement(Box_1["default"], { sx: {
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                } },
                React.createElement(Avatar_1["default"], { sx: { m: 1, bgcolor: 'secondary.main' } },
                    React.createElement(LockOutlined_1["default"], null)),
                React.createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "UMass Amherst Major Planner"),
                React.createElement(Box_1["default"], { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { mt: 3 } },
                    React.createElement(Grid_1["default"], { container: true, spacing: 2 },
                        React.createElement(Grid_1["default"], { item: true, xs: 12 },
                            React.createElement(TextField_1["default"], { required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email" })),
                        React.createElement(Grid_1["default"], { item: true, xs: 12 },
                            React.createElement(MyComponent, null))),
                    React.createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 } }, "Submit"),
                    React.createElement(Grid_1["default"], { container: true, justifyContent: "flex-end" }))))));
}
exports["default"] = SignUp;
