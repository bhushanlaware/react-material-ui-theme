"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeController = exports.ThemeColorPalette = exports.ThemeTogglerButton = exports.AppThemeProvider = exports.useColorPalette = exports.useThemeType = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _core = require("@material-ui/core");

var _Brightness = _interopRequireDefault(require("@material-ui/icons/Brightness4"));

var _Brightness2 = _interopRequireDefault(require("@material-ui/icons/Brightness5"));

var _Brightness3 = _interopRequireDefault(require("@material-ui/icons/Brightness7"));

var _react = _interopRequireWildcard(require("react"));

var _BluePink = _interopRequireDefault(require("./theme/BluePink"));

var _CyonYellow = _interopRequireDefault(require("./theme/CyonYellow"));

var _GreenYellow = _interopRequireDefault(require("./theme/GreenYellow"));

var _PinkPurple = _interopRequireDefault(require("./theme/PinkPurple"));

var _PurpleOrange = _interopRequireDefault(require("./theme/PurpleOrange"));

var _RedBlue = _interopRequireDefault(require("./theme/RedBlue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const colorPalettes = [{
  title: "Green yellow",
  palette: _objectSpread({}, _GreenYellow.default)
}, {
  title: "Blue pink",
  palette: _objectSpread({}, _BluePink.default)
}, {
  title: "Pink purple",
  palette: _objectSpread({}, _PinkPurple.default)
}, {
  title: "Cyon yellow",
  palette: _objectSpread({}, _CyonYellow.default)
}, {
  title: "Purple orange",
  palette: _objectSpread({}, _PurpleOrange.default)
}, {
  title: "Red blue",
  palette: _objectSpread({}, _RedBlue.default)
}];
const themeTypes = ["light", "dark", "darkblue"];

const ThemeContext = /*#__PURE__*/_react.default.createContext([]);

const ColorPaletteContext = /*#__PURE__*/_react.default.createContext([]);

const useThemeType = () => (0, _react.useContext)(ThemeContext);

exports.useThemeType = useThemeType;

const useColorPalette = () => (0, _react.useContext)(ColorPaletteContext);

exports.useColorPalette = useColorPalette;

const AppThemeProvider = _ref => {
  let {
    children,
    defaultThemeMode,
    defaultColorPalette
  } = _ref;
  const [themeType, setThemeType] = (0, _react.useState)(defaultThemeMode || themeTypes[0]);
  const defaultColorPaletteObj = colorPalettes.find(x => x.title === defaultColorPalette) || colorPalettes[0];
  const [colorPalette, setColorPalette] = (0, _react.useState)(defaultColorPaletteObj);
  (0, _react.useEffect)(() => {
    const localThemeType = localStorage.getItem("ThemeType");
    const localColorPalette = localStorage.getItem("colorPalette");

    if (localThemeType) {
      setThemeType(JSON.parse(localThemeType));
    } else {
      localStorage.setItem("ThemeType", JSON.stringify(themeType));
    }

    if (localColorPalette) {
      setColorPalette(JSON.parse(localColorPalette));
    } else {
      localStorage.setItem("colorPalette", JSON.stringify(colorPalette));
    }
  }, []);
  (0, _react.useEffect)(() => {
    localStorage.setItem("ThemeType", JSON.stringify(themeType));
  }, [themeType]);
  (0, _react.useEffect)(() => {
    localStorage.setItem("colorPalette", JSON.stringify(colorPalette));
  }, [colorPalette]);
  const theme = (0, _react.useMemo)(() => {
    const extraColors = themeType === "darkblue" ? {
      background: {
        paper: "#222b45",
        default: "#1a2138"
      },
      text: {
        primary: "#eeeeef",
        secondary: "#aeb0b4"
      }
    } : {};
    return (0, _core.createMuiTheme)({
      palette: _objectSpread(_objectSpread({}, colorPalette.palette), {}, {
        type: themeType === "light" ? "light" : "dark"
      }, extraColors)
    });
  }, [themeType, colorPalette]);
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: [themeType, setThemeType]
  }, /*#__PURE__*/_react.default.createElement(ColorPaletteContext.Provider, {
    value: [colorPalette, setColorPalette]
  }, /*#__PURE__*/_react.default.createElement(_core.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_core.CssBaseline, null), children)));
};

exports.AppThemeProvider = AppThemeProvider;

const ThemeTogglerButton = () => {
  const [themeType, setThemeType] = useThemeType();
  return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    onClick: () => {
      const index = themeTypes.findIndex(x => x === themeType);
      const nextIndex = (index + 1) % themeTypes.length;
      console.log(nextIndex);
      setThemeType(themeTypes[nextIndex]);
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Change theme"
  }, themeType === "dark" ? /*#__PURE__*/_react.default.createElement(_Brightness.default, {
    color: "secondary"
  }) : themeType === "darkblue" ? /*#__PURE__*/_react.default.createElement(_Brightness2.default, {
    color: "secondary"
  }) : /*#__PURE__*/_react.default.createElement(_Brightness3.default, {
    color: "primary"
  })));
};

exports.ThemeTogglerButton = ThemeTogglerButton;

const ThemeColorPalette = _ref2 => {
  let {
    type
  } = _ref2;
  const [colorPalette, setColorPalette] = useColorPalette();

  const [anchorEl, setAnchorEl] = _react.default.useState(null);

  const buttonStyles = x => ({
    background: "linear-gradient(90deg, ".concat(x.palette.primary.main, ", ").concat(x.palette.secondary.main, " )"),
    // background: x.palette.primary.main,
    border: "none",
    margin: "5px"
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, type === "buttons" ? colorPalettes.map(x => /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: x.title
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    style: buttonStyles(x),
    onClick: () => setColorPalette(x)
  }, x.title))) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    style: buttonStyles(colorPalette),
    onClick: handleClick
  }, " "), /*#__PURE__*/_react.default.createElement(_core.Menu, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, colorPalettes.map(x => /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    onClick: () => {
      handleClose();
      setColorPalette(x);
    },
    style: _objectSpread(_objectSpread({}, buttonStyles(x)), {}, {
      height: "30px",
      width: "60px"
    })
  })))));
};

exports.ThemeColorPalette = ThemeColorPalette;

const ThemeController = props => {
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({}, props, {
    p: 1
  }), /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 0,
    style: {
      borderRadius: "10px",
      padding: "2px"
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "center",
    direction: props.verticle ? "column" : "row"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(ThemeColorPalette, null)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(ThemeTogglerButton, null)))));
};

exports.ThemeController = ThemeController;
var _default = AppThemeProvider;
exports.default = _default;