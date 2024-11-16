import Description from "@/modules/HomePage/Description.jsx";
import AnotherModule from "@/modules/HomePage/AnotherModule.jsx";
import {useEffect, useState} from "react";
import {fetchAllProducts} from "@/apis/productApis.js";
import CardProduct from '@/modules/Product/CardProduct.jsx'
import GearNavigation from "@/modules/Navigation/GearNavigation.jsx";
import HomeNavigation from "@/modules/Navigation/HomeNavigation.jsx";
import LayoutHeader from "@/modules/Layout/LayoutHeader.jsx";

const largeData = {
    fieldA: {
        fieldC: {},
    },
    fieldB: {}
}


const Homepage = () => {
    //
    // const [resData, setResData] = useState();
    //
    // useEffect(async () => {
    //     const data = await fetchAllProducts();
    //     setResData(data);
    // }, [])
    return <div style={{width:'1140px'}} >
        <LayoutHeader/>
        <Description/>
        <AnotherModule/>
        <CardProduct/>
        <HomeNavigation/>

        {/*{data.map((item) => <p>{item.name}</p>)}*/}
    </div>
}

export default Homepage