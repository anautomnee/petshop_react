import { Header } from "../components/Header"

export const MainLayout = ({children}) => {
    return <>
        <Header/>
        {children}
    </>
}