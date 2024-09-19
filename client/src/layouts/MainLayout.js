import { Header, Footer } from "../components"

export const MainLayout = ({children}) => {
    return <>
        <Header/>
        {children}
        <Footer/>
    </>
}