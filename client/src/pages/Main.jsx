import { CategoriesPreview, MainBanner, FirstOrderBanner, SalePreview } from "../components"
import { MainLayout } from "../layouts/MainLayout"

export const Main = () => {
    return <>
        <MainLayout>
            <MainBanner />
            <CategoriesPreview />
            <FirstOrderBanner />
            <SalePreview />
        </MainLayout>
    </>
}