import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import {Card, CardContent} from "@/components/ui/card.jsx";
import ProductCard from "@/modules/HomePage/CardProduct.jsx";
import '/src/modules/module_css/productCarousel.css'
import Autoplay from "embla-carousel-autoplay";

export default function ProductCarousel({products}) {

    return (
        <Carousel plugins={[
            Autoplay({
                delay: 3500,
            })
        ]}>
            <CarouselContent>
                {
                    products.map((product) => (
                        <CarouselItem className="md:basis-1/4 lg:basis-1/5 pl-4">
                            <ProductCard product={product}/>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>


    )
};
