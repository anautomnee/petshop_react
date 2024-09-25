import { useContext } from "react";
import { Header, Footer } from "../components"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { BreadcrumbsContext } from "../context/breadcrumbsContext";
import ScrollToTop from "../utils";

export const MainLayout = ({children, breadcrumbs = false}) => {
    const { crumbs } = useContext(BreadcrumbsContext);
    ScrollToTop()
    return <>
        <Header/>
        {breadcrumbs && <BreadcrumbsLine crumbs={crumbs} />}
        {children}
        <Footer/>
    </>
}