import { Image } from "./image";

export interface Carousel {

    id: string;
    images: Array<Image>;
    width: string,
    height: string
    slideInterval: number
    
}
