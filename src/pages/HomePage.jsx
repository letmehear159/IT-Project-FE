import Description from "@/modules/HomePage/Description.jsx";
import AnotherModule from "@/modules/HomePage/AnotherModule.jsx";
import {useEffect, useState} from "react";
import CardProduct from '@/modules/HomePage/CardProduct.jsx'
import GearNavigation from "@/modules/Navigation/GearNavigation.jsx";
import HomeNavigation from "@/modules/Navigation/HomeNavigation.jsx";
import LayoutHeader from "@/modules/Layout/LayoutHeader.jsx";
import ProductCarousel from "@/modules/HomePage/ProductCarousel.jsx";
import ProductCollectionHeader from "@/modules/HomePage/ProductCollectionHeader.jsx";
import ProductCollectionCarousel from "@/modules/HomePage/ProductCollectionCarousel.jsx";
import Catalog from "@/modules/HomePage/Catalog.jsx";
import MainProduct from "@/modules/Product/MainProduct.jsx";
import ProductContent from "@/modules/Product/ProductContent.jsx";
import UserManagement from "@/modules/UserManagement/UserManagement.jsx";
import Test from "@/modules/TestUI/Test.jsx";



const Homepage = () => {
    //
    // const [resData, setResData] = useState();
    //
    // useEffect(async () => {
    //     const data = await fetchAllProducts();
    //     setResData(data);
    // }, [])
    return (
        <div >
            {/*<Description/>*/}
            {/*<AnotherModule/>*/}
            {/*<CardProduct/>*/}
            <HomeNavigation/>
            {/*<ProductCarousel/>*/}
            {/*<ProductCollectionCarousel/>*/}
            {/*<Catalog/>*/}
            {/*<ProductContent/>*/}
            {/*<UserManagement/>*/}
            <ProductCollectionCarousel categoryType={'Laptop Gaming'}/>
            <ProductCollectionCarousel categoryType={'Laptop'}/>
            <ProductCollectionCarousel categoryType={'Monitor'}/>
            <ProductCollectionCarousel categoryType={'Keyboard'}/>
        </div>
    )
}

export default Homepage