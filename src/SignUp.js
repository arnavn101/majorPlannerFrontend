"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("@mui/material/Button");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var TextField_1 = require("@mui/material/TextField");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Container_1 = require("@mui/material/Container");
var styles_1 = require("@mui/material/styles");
var react_select_1 = require("react-select");
var animated_1 = require("react-select/animated");
var common_1 = require("./common");
var majors = [
    { value: 'Computer Science', label: "Computer Science" }
];
var animatedComponents = (0, animated_1.default)();
function getAttr(want, str, name) {
    return (React.createElement(react_select_1.default, { required: true, placeholder: str, closeMenuOnSelect: false, components: animatedComponents, isMulti: true, options: want, name: name, onChange: function (e) { return console.log(e); } }));
}
function CoursesTaken() {
    return getAttr(common_1.course_options, "Courses Taken", "courses");
}
function GetInterests() {
    return getAttr(common_1.interests_options, "Interests", "interests");
}
var MajorSelection = function () { return (React.createElement(react_select_1.default, { required: true, options: majors, name: "major", placeholder: "Major" })); };
var GetTerm = function () { return (React.createElement(react_select_1.default, { required: true, options: common_1.terms_options, name: "graduation", placeholder: "Graduation Term" })); };
var theme = (0, styles_1.createTheme)();
function SignUp(toggleF) {
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = new FormData(event.currentTarget);
        var requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.get('email'),
                major: data.get('major'),
                graduation: data.get('graduation'),
                interests: data.getAll('interests'),
                courses: data.getAll('courses'),
            })
        };
        fetch('http://127.0.0.1:8000/graph', requestOptions)
            .then(function (response) { return response.json(); }).then(function (obj) {
            console.log(obj);
            toggleF(obj);
        });
    };
    return (React.createElement("div", { style: {
            backgroundImage: "url(".concat(common_1.background_url, ")"),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            backgroundAttachment: 'fixed',
            // paddingTop: '5px',
            // paddingBottom: '100px',
            position: 'relative',
            minHeight: '100vh'
        } },
        React.createElement("div", { id: "content-wrap", style: {
                paddingBottom: '2.5rem',
            } },
            React.createElement(styles_1.ThemeProvider, { theme: theme },
                React.createElement(Container_1.default, { component: "main", maxWidth: "xs", sx: {
                        alignItems: 'center',
                        position: 'auto',
                        // marginX:'37%'
                    } },
                    React.createElement(CssBaseline_1.default, null),
                    React.createElement(Box_1.default, { sx: {
                            // mt: 8,
                            // display:'',
                            // flexDirection: 'column',
                            alignItems: 'center',
                            // mx: 'auto',
                            // marginRight: '30%',
                            // marginLeft: '30%',
                            // width: 'max-content',
                            // paddingRight: '40%', 
                            // marginX: '0%',     
                            boxShadow: 0.5,
                            justifyContent: 'center',
                            // p: 2,
                            position: 'auto',
                            width: '120%'
                        } },
                        React.createElement(Box_1.default, { component: "img", alignSelf: 'center', sx: {
                                width: '325px',
                                height: '325px',
                                marginLeft: '15%',
                            }, alt: "Logo Here", src: "https://media4.giphy.com/media/RitGzFjFAW4ZstueDL/giphy.gif?cid=790b761162ee860793039ca33d86403bb1d8974404f678f9&rid=giphy.gif&ct=s" }),
                        React.createElement(Box_1.default, { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { p: 4, boxShadow: '0px 0px 15px black', backdropFilter: "blur(6px)", borderRadius: '3%' } },
                            React.createElement(Grid_1.default, { container: true, spacing: 3 },
                                React.createElement(Grid_1.default, { item: true, xs: 12, sx: {
                                        borderRadius: '4%'
                                    } },
                                    React.createElement(TextField_1.default, { sx: {
                                            input: { background: 'white' },
                                        }, variant: "filled", required: true, fullWidth: true, size: "small", id: "email", label: "Email Address", name: "email", autoComplete: "email" })),
                                React.createElement(Grid_1.default, { item: true, xs: 12 },
                                    React.createElement(MajorSelection, null)),
                                React.createElement(Grid_1.default, { item: true, xs: 12 },
                                    React.createElement(GetTerm, null)),
                                React.createElement(Grid_1.default, { item: true, xs: 12 },
                                    React.createElement(CoursesTaken, null)),
                                React.createElement(Grid_1.default, { item: true, xs: 12 },
                                    React.createElement(GetInterests, null))),
                            React.createElement(Button_1.default, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2, boxShadow: '5' }, onClick: function () { console.log('onClick'); } }, "Submit"),
                            React.createElement(Grid_1.default, { container: true, justifyContent: "flex-end" })))))),
        React.createElement("footer", { id: "footer", style: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '2.5rem',
            } })));
}
exports.default = SignUp;
