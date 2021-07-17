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
   
| Parameter | Type | Description | Options |
| --- | --- | --- |---|
| defaultColorPalette | String | Default color palette of your site. You can use color palette provided in options as default color palette for your site | `Green yellow, Blue pink, Pink purple, Cyon yellow, Purple orange, Red blue`" 
| defaultThemeMode | String | Default theme mode of your site. You can use theme mode provided in options as default theme for your site | ` darkblue, dark, light`

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
#### `Note: works only on material ui components!`
#####  ``Please raise issue if you want add any feature like adding custom color palette or autocalculate secondary color.``
 

