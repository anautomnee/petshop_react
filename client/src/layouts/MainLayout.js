import { useContext } from "react";
import { Header, Footer } from "../components"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { BreadcrumbsContext } from "../context/breadcrumbsContext";
import { useScrollToTop } from "../utils/hooks";

export const MainLayout = ({children, breadcrumbs = false}) => {
    const { crumbs } = useContext(BreadcrumbsContext);
    useScrollToTop()
    return <>
        <Header/>
        {breadcrumbs && <BreadcrumbsLine crumbs={crumbs} />}
        {children}
        <Footer/>
    </>
}