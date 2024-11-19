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

export default function ProductCarousel() {

    return (
        <Carousel>
            <CarouselContent>
                {
                    Array.from({length: 20}).map(() => (
                        <CarouselItem className="md:basis-1/4 lg:basis-1/5 pl-4">
                            <ProductCard/>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>


    )
};
