```javascript
  import import AppThemeProvider, {
  ThemeColorPalette,
  ThemeTogglerButton,
  ThemeController,
} from "react-material-ui-theme";
```
### It use locolstorage to remember last theme and color of site. You can apply theme to your any react material ui app in 2 easy steps

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
####  Demo https://advance-noteapd-v2.vercel.app/
 

#### `Note: works on only material ui components only!`
