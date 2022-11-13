"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var TextField_1 = require("@mui/material/TextField");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Container_1 = require("@mui/material/Container");
var styles_1 = require("@mui/material/styles");
var react_select_1 = require("react-select");
var animated_1 = require("react-select/animated");
var common_1 = require("./common");
var background_url = "https://www.umass.edu/sites/default/files/styles/16_9_1920x1080/public/2021-01/Amherst-6946.JPG?h=ed6f328e&itok=vYXN4GKg";
var majors = [
    { value: 'Computer Science', label: "Computer Science" },
    { value: 'Informatics', label: "Informatics" }
];
var animatedComponents = (0, animated_1["default"])();
function getAttr(want, str, name) {
    return (React.createElement(react_select_1["default"], { required: true, placeholder: str, closeMenuOnSelect: false, components: animatedComponents, isMulti: true, options: want, name: name, onChange: function (e) { return console.log(e); } }));
}
function CoursesTaken() {
    return getAttr(common_1.course_options, "Courses", "courses");
}
function GetInterests() {
    return getAttr(common_1.interests_options, "Interests", "interests");
}
var MajorSelection = function () { return (React.createElement(react_select_1["default"], { required: true, options: majors, name: "major", placeholder: "Major" })); };
var GetTerm = function () { return (React.createElement(react_select_1["default"], { required: true, options: common_1.terms_options, name: "graduation", placeholder: "Graduation Term" })); };
var theme = (0, styles_1.createTheme)();
function SignUp() {
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = new FormData(event.currentTarget);
        for (var _i = 0, _a = data.entries(); _i < _a.length; _i++) {
            var pair = _a[_i];
            console.log(pair[0] + ', ' + pair[1]);
        }
        var requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.get('email'),
                major: data.get('major'),
                graduation: data.get('graduation'),
                interests: data.getAll('interests'),
                courses: data.getAll('courses')
            })
        };
        fetch('http://127.0.0.1:8000/log', requestOptions)
            .then(function (response) { return console.log(response.json()); });
    };
    return (React.createElement("div", { style: {
            backgroundImage: "url(".concat(background_url, ")"),
            backgroundRepeat: 'no-repeat',
            marginTop: '-64px',
            marginBottom: 0,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw'
        } },
        React.createElement(styles_1.ThemeProvider, { theme: theme },
            React.createElement(Container_1["default"], { component: "main", maxWidth: "xs" },
                React.createElement(CssBaseline_1["default"], null),
                React.createElement(Box_1["default"], { sx: {
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // borderSpacing: 5,
                        mx: 'auto',
                        backdropFilter: "blur(2px)",
                        boxShadow: 0.5,
                        justifyContent: 'center',
                        p: 2
                    } },
                    React.createElement(Typography_1["default"], { component: "h1", align: "center", variant: "h5", marginTop: 8, fontWeight: 'bold', fontFamily: "Arial", color: "black", border: 3, borderRadius: "16px", fontStyle: 'italic', boxShadow: "5" }, "Course Navigation Autopilot"),
                    React.createElement(Box_1["default"], { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { m: 4 } },
                        React.createElement(Grid_1["default"], { container: true, spacing: 3 },
                            React.createElement(Grid_1["default"], { item: true, xs: 12 },
                                React.createElement(TextField_1["default"], { sx: {
                                        input: { background: 'white' }
                                    }, variant: "outlined", required: true, fullWidth: true, size: "small", id: "email", label: "Enter Email Address", name: "email", autoComplete: "email" })),
                            React.createElement(Grid_1["default"], { item: true, xs: 12 },
                                React.createElement(MajorSelection, null)),
                            React.createElement(Grid_1["default"], { item: true, xs: 12 },
                                React.createElement(GetTerm, null)),
                            React.createElement(Grid_1["default"], { item: true, xs: 12 },
                                React.createElement(CoursesTaken, null)),
                            React.createElement(Grid_1["default"], { item: true, xs: 12 },
                                React.createElement(GetInterests, null))),
                        React.createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2, boxShadow: '5' }, onClick: function () { console.log('onClick'); } }, "Submit"),
                        React.createElement(Grid_1["default"], { container: true, justifyContent: "flex-end" })))))));
}
exports["default"] = SignUp;
