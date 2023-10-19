import { ContactType } from "../enums/contactType";
import { Image } from "./image";

export interface Contact {

    id: string;
    type: ContactType;
    image: Image;
    value: string;
    redirect_to: string;
    
}
