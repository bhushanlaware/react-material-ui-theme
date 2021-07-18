# react-material-ui-theme

[![Build Status](https://travis-ci.org/mui-org/react-material-ui-theme.svg?branch=master)](https://travis-ci.org/mui-org/react-material-ui-theme)
[![npm version](https://badge.fury.io/js/react-material-ui-theme.svg)](https://badge.fury.io/js/react-material-ui-theme)
[![npm downloads](https://img.shields.io/npm/dm/react-material-ui-theme.svg)](https://img.shields.io/npm/dm/react-material-ui-theme.svg)
[![npm](https://img.shields.io/npm/l/react-material-ui-theme.svg)](https://github.com/mui-org/react-material-ui-theme/blob/master/LICENSE)

react-material-ui-theme is a part of the [Material-UI](http://www.material-ui.com/#/) theme to [React](https://facebook.github.io/react/). Using which you can add a Material-UI theme to your React app instantly without an extra build efforts. It will provide you theme toggle button to change dark and light theme and also can switch color theme. It use locolstorage to remember last theme and color of site

## Installation

```
npm install react-material-ui-theme --save
  // or
yarn add react-material-ui-theme
```
## Usage

### You can apply theme to your any react material ui app in 2 easy steps

```javascript
import AppThemeProvider, {
  ThemeColorPalette,
  ThemeTogglerButton,
  ThemeController,
} from "react-material-ui-theme";
```


1. Wrap your component with `AppThemeProvider`

   ````javascript

   <AppThemeProvider
    defaultColorPalette="Green yellow"
     defaultThemeMode="darkblue"
    >
    // your comoponents
    </AppThemeProvider>```
   ````

2. Add theme controller anywhere in your app to change theme and color
   ```javascript
   // Provide theme toggler button to change dark and light theme
   <ThemeTogglerButton />
   // Provivde color palette to chagne color
   <ThemeColorPalette />
   // Provide the both theme toggler and color palette
   <ThemeController />
   ```

### AppThemeProvider API

| Parameter           | Type   | Description                                                                                                              | Options                                                                       |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| defaultColorPalette | String | Default color palette of your site. You can use color palette provided in options as default color palette for your site | `Green yellow, Blue pink, Pink purple, Cyon yellow, Purple orange, Red blue`" |
| defaultThemeMode    | String | Default theme mode of your site. You can use theme mode provided in options as default theme for your site               | ` darkblue, dark, light`                                                      |

### Hooks API

1. use `useThemeType` hook to get theme type

```javascript
const [themeType, setThemeType] = useThemeType();
setThemeType("light");
console.log(themeType); // returns light)
```

2. use `useColorPalette` hook to get color palette

```javascript
const [colorPalette, setColorPalette] = useColorPalette();
setColorPalette("Blue pink");
console.log(colorPalette); // returns Blue pink
```

### Example

```javascript
<AppThemeProvider
  defaultColorPalette="Green yellow"
  defaultThemeMode="darkblue"
>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>

  <ThemeTogglerButton />
  <ThemeColorPalette />
  <ThemeController />
</AppThemeProvider>
```

#### Demo https://advance-noteapd-v2.vercel.app/

#### `Note: works only on material ui components!`

##### `Please raise issue if you want add any feature like adding custom color palette or autocalculate secondary color.`
