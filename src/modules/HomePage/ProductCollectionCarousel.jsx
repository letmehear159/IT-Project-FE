import ProductCollectionHeader from "@/modules/HomePage/ProductCollectionHeader.jsx";
import ProductCarousel from "@/modules/HomePage/ProductCarousel.jsx";

export default function ProductCollectionCarousel() {
    return (
        <div className={'container p-3 rounded-xl bg-white'}>
            <ProductCollectionHeader/>
            <ProductCarousel/>
        </div>
    );
};