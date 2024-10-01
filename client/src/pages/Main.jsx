import { useSelector } from "react-redux";
import { selectRandomCategory } from "../store/selectors";
import { CategoriesPreview, MainBanner, FirstOrderBanner, SalePreview } from "../components"
import { MainLayout } from "../layouts/MainLayout"

export const Main = () => {
    const random_categories = useSelector(selectRandomCategory);
    return <>
        <MainLayout>
            <MainBanner />
            <CategoriesPreview random_categories={random_categories} />
            <FirstOrderBanner />
            <SalePreview />
        </MainLayout>
    </>
}