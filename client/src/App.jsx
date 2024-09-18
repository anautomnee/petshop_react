import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainRouter } from "./routes/MainRouter";
import { theme } from "./theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>

  );
}

export default App;
