import { useSelector } from "react-redux";
import { CategoriesPreview, MainBanner, FirstOrderBanner, SalePreview } from "../components"
import { MainLayout } from "../layouts/MainLayout"
import { selectRandomCategory } from "../store/selectors";

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