import { CategoriesPreview, MainBanner, FirstOrderBanner } from "../components"
import { MainLayout } from "../layouts/MainLayout"

export const Main = () => {
    return <>
        <MainLayout>
            <MainBanner />
            <CategoriesPreview />
            <FirstOrderBanner />
        </MainLayout>
    </>
}