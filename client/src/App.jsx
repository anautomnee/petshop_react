import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainRouter } from "./routes/MainRouter";
import { theme } from "./theme/theme";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "./store/actionCreators";
import { BreadcrumbsContext } from "./context/breadcrumbsContext";


function App() {
  const [crumbs, setCrumbs] = useState([])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <BreadcrumbsContext.Provider value={{ crumbs, setCrumbs }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </BreadcrumbsContext.Provider>

  );
}

export default App;
