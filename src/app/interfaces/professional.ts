import { Image } from "./image";
import { Procedure } from "./procedure";

export interface Professional {

    id: string;
    name: string;
    description: string,
    image: Image;
    procedures: Array<Procedure>;
    
}
