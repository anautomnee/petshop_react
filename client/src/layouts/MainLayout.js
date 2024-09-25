import { useContext } from "react";
import { Header, Footer } from "../components"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { BreadcrumbsContext } from "../context/breadcrumbsContext";

export const MainLayout = ({children, breadcrumbs = false}) => {
    const { crumbs } = useContext(BreadcrumbsContext);
    return <>
        <Header/>
        {breadcrumbs && <BreadcrumbsLine crumbs={crumbs} />}
        {children}
        <Footer/>
    </>
}