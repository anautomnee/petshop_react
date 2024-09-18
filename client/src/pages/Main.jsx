import { CategoriesPreview } from "../components/CategoriesPreview"
import { MainBanner } from "../components/MainBanner"
import { MainLayout } from "../layouts/MainLayout"

export const Main = () => {
    return <>
        <MainLayout>
            <MainBanner />
            <CategoriesPreview />
        </MainLayout>
    </>
}