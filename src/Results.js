"use strict";
exports.__esModule = true;
exports.CustomizedTables = void 0;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Container_1 = require("@mui/material/Container");
var styles_1 = require("@mui/material/styles");
var common_1 = require("./common");
var theme = (0, styles_1.createTheme)();
var styles_2 = require("@mui/material/styles");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var Paper_1 = require("@mui/material/Paper");
var StyledTableCell = (0, styles_2.styled)(TableCell_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(TableCell_1.tableCellClasses.head)] = {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        _b["&.".concat(TableCell_1.tableCellClasses.body)] = {
            fontSize: 14
        },
        _b);
});
var StyledTableRow = (0, styles_2.styled)(TableRow_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0
        }
    });
});
function CustomizedTables(rows) {
    return (React.createElement(TableContainer_1["default"], { component: Paper_1["default"] },
        React.createElement(Table_1["default"], { sx: { minWidth: 700 }, "aria-label": "customized table" },
            React.createElement(TableHead_1["default"], null,
                React.createElement(TableRow_1["default"], null,
                    React.createElement(StyledTableCell, null, "Course Number"),
                    React.createElement(StyledTableCell, { align: "center" }, "Course Title"),
                    React.createElement(StyledTableCell, { align: "center" }, "Credits"),
                    React.createElement(StyledTableCell, { align: "center" }, "Rating\u00A0(/5)"))),
            React.createElement(TableBody_1["default"], null, rows.map(function (row) { return (React.createElement(StyledTableRow, { key: row.name },
                React.createElement(StyledTableCell, { component: "th", scope: "row" }, row.number),
                React.createElement(StyledTableCell, { align: "center" }, row.title),
                React.createElement(StyledTableCell, { align: "center" }, row.credits),
                React.createElement(StyledTableCell, { align: "center" }, row.rating))); })))));
}
exports.CustomizedTables = CustomizedTables;
var App_1 = require("./App");
function Results(toggleF) {
    var results = App_1.results_obj;
    if (results === undefined) {
        console.error("Results Obj is undefined");
        return;
    }
    return (React.createElement("div", { style: {
            backgroundImage: "url(".concat(common_1.background_url, ")"),
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
            marginTop: '-64px',
            backgroundSize: 'cover',
            height: 'auto',
            width: '100%',
            backgroundAttachment: 'fixed'
        } },
        React.createElement(styles_1.ThemeProvider, { theme: theme },
            React.createElement(Container_1["default"], { component: "main", maxWidth: "md", sx: {} },
                React.createElement(CssBaseline_1["default"], null),
                React.createElement(Box_1["default"], { sx: {
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    } },
                    React.createElement(Typography_1["default"], { component: "h1", align: "center", variant: "h5", marginTop: 8, fontWeight: 'bold', fontFamily: "Arial", color: "black", border: 3, borderRadius: "4px", boxShadow: "5", marginLeft: 4, marginRight: 4, padding: 3 }, "Course Navigation Autopilot"),
                    React.createElement(Grid_1["default"], { container: true, spacing: 3, sx: { backgroundBlendMode: 'inherit' } }, Object.keys(results).map(function (semester) {
                        var output = [];
                        output.push(React.createElement(Grid_1["default"], { item: true, xs: 12 },
                            React.createElement(Grid_1["default"], { sx: {
                                    backdropFilter: 'blur(10px)',
                                    paddingLeft: 3,
                                    boxShadow: 15,
                                    borderRadius: "4px"
                                } },
                                React.createElement(Typography_1["default"], { component: "h1", align: "left", variant: "h6", marginTop: 4, color: 'white', fontWeight: 'bold' }, "".concat(semester))),
                            CustomizedTables(results[semester])));
                        return output;
                    })),
                    React.createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 6, mb: 2 }, onClick: function () { toggleF(undefined); } }, "Back"))))));
}
exports["default"] = Results;
