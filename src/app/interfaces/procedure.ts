import { Category } from "./category";
import { Image } from "./image";

export interface Procedure {

    id: string;
    name: string;
    description: string;
    benefits: Array<string>;
    slug: string,
    restrictions: Array<string>;
    images: Array<Image>;
    categories: Array<Category>;
    
}
