import AppThemeProvider, {
  ThemeColorPalette,
  ThemeTogglerButton,
  ThemeController,
} from "./react-material-ui-theme";
import { Button } from "@material-ui/core";
function App() {
  return (
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
  );
}

export default App;
