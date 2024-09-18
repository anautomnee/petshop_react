import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainRouter } from "./routes/MainRouter";
import { theme } from "./theme/theme";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories, getProducts } from "./store/actionCreators";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>

  );
}

export default App;
