import Description from "@/modules/HomePage/Description.jsx";
import AnotherModule from "@/modules/HomePage/AnotherModule.jsx";
import {useEffect, useState} from "react";
import {fetchAllProducts} from "@/apis/productApis.js";
import CardProduct from '@/modules/Product/CardProduct.jsx'

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
    return <div>
        <Description/>
        <AnotherModule/>
        <CardProduct/>
        {/*{data.map((item) => <p>{item.name}</p>)}*/}
    </div>
}

export default Homepage