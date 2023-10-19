import { ContactType } from "src/app/enums/contactType";

export const environment = {
    production: true,
    contacts: [
        {
            id: 'c32d8b45-92fe-44f6-8b61-42c2107dfe01',
            type: ContactType.WHATSAPP,
            image: {
                id: 'c32d8b45-92fe-44f6-8b61-42c2147dfe80',
                url: 'assets/images/site/whatsapp.png',
                alt: 'Icon whatsapp'
            },
            get redirect_to() {
                return 'https://wa.me/55' + this.value.replace(/\D/g,'') + '?text=Ol&aacute;%20Luana,%20tenho%20interesse%20em%20conhecer%20seu%20trabalho!'
                
            },
            value: '(11) 94620-4017'
        },
        {
            id: 'c32d8b45-92fe-44f6-8b61-42c2107dfe02',
            type: ContactType.INSTAGRAM,
            image: {
                id: 'c32d8b45-92fe-44f6-8b61-42c2147dfe81',
                url: 'assets/images/site/instagram.png',
                alt: 'Icon instagram'
            },
            get redirect_to() {
                return 'https://www.instagram.com/' + this.value.replace('@', '') + '/'
                
            },
            value: '@luanaliara_lashdesign'
        },
        {
            id: 'c32d8b45-92fe-44f6-8b61-42c2107dfe03',
            type: ContactType.EMAIL,
            image: {
                id: 'c32d8b45-92fe-44f6-8b61-42c2147dfe82',
                url: 'assets/images/site/gmail.png',
                alt: 'Icon gmail'
            },
            get redirect_to() {
                return 'mailto:' + this.value
                
            },
            value: 'studioluanalima@gmail.com'
        }
    ]
};
