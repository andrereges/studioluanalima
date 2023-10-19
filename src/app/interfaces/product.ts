import { Category } from "./category";
import { Image } from "./image";

export interface Product {

    id: string;
    name: string;
    price: number;
    sizes: Array<String>;
    images: Array<Image>;
    categories: Array<Category>;
    
}
