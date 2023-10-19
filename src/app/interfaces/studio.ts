import { Image } from "./image";

export interface Studio {

    id: string;
    name: string;
    description: string;
    images: Array<Image>;
    
}
