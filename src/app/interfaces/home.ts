import { Carousel } from "./carousel";
import { Contact } from "./contact";
import { Image } from "./image";
import { Procedure } from "./procedure";
import { Product } from "./product";
import { Professional } from "./professional";
import { Studio } from "./studio";

export interface Home {    
    studio: Studio,
    procedures: Array<Procedure>,
    professionals: Array<Professional>,
    products: Array<Product>,
    contacts: Array<Contact>,
    carousel: Carousel,
    recomendations: [
      {
        customer: string,
        image: Image,
        message: string
      }
    ]
}
