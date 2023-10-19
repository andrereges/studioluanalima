import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { environment } from '../../environments/environment';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  createDb() {
    const contacts = (environment.contacts as Array<Contact>);

    const professionals = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3411',
        name: 'Luana Lima',
        description: `
          CEO e profissional nos procedimentos de cílios, sobrancelhas e cabelo.
        `,
        image:           {
          url: 'assets/images/professionals/luana.png',
          alt: 'Foto Profissional'
        },
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3412',
        name: 'Regiane',
        description: `
          Profissional nos procedimentos de unhas.
        `,
        image:           {
          url: 'assets/images/professionals/regiane.png',
          alt: 'Foto Profissional'
        },
      }
    ]

    const studios = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3410',
        name: 'Studio Luana Lima',
        description: `
          É um studio completo, com inspirações e tendências em Corte, Cor, Luzes, Unhas,
          Penteados, Cílios e Makes. O Studio contempla Facial, Corporal, Rádio Frequência
          para Flacidez, Lipocavitação para Gordura Localizada e Celulites. No masculino,
          cortar o cabelo, fazer a barba e aparar as unhas, não é mais uma obrigação e sim
          uma experiência, podendo usufruir também de uma deliciosa massagem relaxante.
          E para os pequenos o corte é acompanhado de alegria e diversão, com playground ao ar livre.
        `,
        images: [
          {
            url: 'https://i.pinimg.com/736x/8b/c8/28/8bc8287e545111f60ebef020e491cd86.jpg',
            alt: 'Imagem studio'
          },
          {
            url: 'https://static.hbt.triider.com.br/photos/project/big/studio-de-beleza-linhas-retas-2605569.jpg',
            alt: 'Imagem studio'
          },
          {
            url: 'https://i.pinimg.com/originals/08/74/b5/0874b577e7f6eed6e62c5ad498ed077d.jpg',
            alt: 'Imagem studio'
          },
        ]
      }
    ]

    const procedureCategories = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3490',
        name: 'Cílios'
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3491',
        name: 'Sobrancelhas'
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3492',
        name: 'Cabelo'
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3493',
        name: 'Unhas'
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3494',
        name: 'Corpo'
      }
    ]

    const productCategories = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
        name: 'Roupas'
      }
    ]

    const products = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3458',
        name: 'Calça Jeans',
        price: 499.00,
        sizes: ['G', 'Único'],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
            name: 'Roupas'
          }
        ],
        images: [
          {
            url: 'https://modab.vtexassets.com/arquivos/ids/550426-800-auto?v=638235512219170000&width=800&height=auto&aspect=true',
            alt: 'Calça Jeans'
          },
          {
            url: 'https://modab.vtexassets.com/arquivos/ids/550427-800-auto?v=638235512230130000&width=800&height=auto&aspect=true',
            alt: 'Calça Jeans'
          }
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454',
        name: 'Camiseta da Barbie',
        price: 25.99,
        sizes: ['G'],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
            name: 'Roupas'
          }
        ],
        images: [
          {
            url: 'https://photos.enjoei.com.br/camiseta-barbie-tam-unico-89040925/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTQxOTU5OC84ZGNkYjliMzcwZjkwMGM4OWU5ZmM0NjkwOGQ3MzRmMy5qcGc',
            alt: 'Barbie camiseta'
          },
          {
            url: 'https://img.lojasrenner.com.br/item/854447834/zoom/12.jpg',
            alt: 'Imagem Camiseta da Barbie'
          },
          {
            url: 'https://22036.cdn.simplo7.net/static/22036/sku/camisetas-de-filme-camiseta-she-is-just-a-barbie-p-1680710882404.png',
            alt: 'Imagem Camiseta da Barbie 2'
          }
        ]
      }
    ];

    const procedures = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3472',
        name: 'Microblanding Fio a Fio',
        description: `
          É um tipo de design de sobrancelhas onde são desenhados fios bem finos
          e realistas, feitos com lâmina, tebori e tinta para micropigmentação.
        `,
        benefits: [
          'Preenche falhas',
          'Constrói um novo desenho para as sobrancelhas'
        ],
        restrictions: [
          'Alergias a pigmentação',
          'Grávidas e lactantes'
        ],
        slug: 'microblanding-fio-a-fio',
        images: [
          {
            url: 'https://olook.com.br/wp-content/uploads/2019/05/O-Look-microblading-02-7.jpg',
            alt: 'Imagem Microblanding Fio a Fio'
          },
          {
            url: 'https://dnadabeleza.com.br/wp-content/uploads/2019/01/microblanding1.jpg',
            alt: 'Imagem Microblanding Fio a Fio'
          }
        ],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3491',
            name: 'Sobrancelhas'
          }
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3470',
        name: 'Drenagem Linfática',
        description: `
          A função da drenagem linfática é mobilizar a linfa que fica acumulada entre as células e 
          encaminhá-la de volta aos gânglios, melhorando o transporte pelos vasos linfáticos, 
          favorecendo a eliminação de toxinas e metabólitos, diminuindo o inchaço, edemas e celulite.
        `,
        benefits: [
          'Elimina toxinas',
          'Combate a celulite',
          'Elimina excesso de líquidos',
          'Diminui inchaço',
          'Reduz medidas',
          'Melhora a circulação',
          'Reduz dores pré-menstrual'
        ],
        restrictions: [
          'Infecções',
          'Neoplasias Maligna(câncer)',
          'Flebites e tromboflebites',
          'Insuficiência cardíaca',
          'Hipertireoidismo não tratado',
          'Asma grave e não tratada'
        ],
        slug: 'drenagem-linfatica',
        images: [
          {
            url: 'https://www.adcosprofissional.com.br/blog/app/uploads/2021/03/shutterstock_453314983.jpg',
            alt: 'Imagem drenagem'
          },
          {
            url: 'https://danielgehlen.com.br/wp-content/uploads/2022/03/drenagem-2.jpg',
            alt: 'Imagem drenagem 2'
          }
        ],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3494',
            name: 'Corpo'
          }
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3471',
        name: 'Limpeza de Pele',
        description: `
          Um dos tratamentos estéticos mais realizados no mundo, a 
          limpeza de pele tem como objetivo remover os cravos e as impurezas, 
          desobstruir os poros e melhorar a capacidade de absorção da pele.
        `,
        benefits: [
          'Diminui o excesso de oleosidade',
          'Previne o envelhecimento precoce',
          'Remoção de células mortas',
          'Previne o surgimento de manchas',
          'Pele mais bonita',
          'Regula o pH'
        ],
        restrictions: [
          'Pele muito sensível',
          'Pele com muita descamaçao',
          'Alergias na pele',
          'Gestantes e lactantes'
        ],
        slug: 'limpeza-pele',
        images: [
          {
            url: 'https://dratelmagiordani.com.br/wp-content/uploads/2020/02/3-Limpeza-de-Pele.jpg',
            alt: 'Limpeza de pele imagem'
          },
          {
            url: 'https://st2.depositphotos.com/1441511/9308/i/450/depositphotos_93089976-stock-photo-skin-care-ultrasound-cavitation-facial.jpg',
            alt: 'Limpeza de pele imagem'
          },
          {
            url: 'https://neststudio.com.br/wp-content/uploads/2023/02/Limpeza-de-Pele-960x760-1.jpg',
            alt: 'Limpeza de pele imagem'
          }
        ],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3494',
            name: 'Corpo'
          }
        ]
      }
    ];

    const home = [
      {
        studio: studios[0],
        procedures: procedures.slice(0, 3),
        professionals: professionals,
        products: products.slice(0, 3),
        contacts: contacts,
        carousel: {
          id: '0',
          images: [
            {
              url: 'assets/images/carousel/c1.jpeg',
              alt: 'Imagem Carrossel'
            },
            {
              url: 'assets/images/carousel/c2.jpeg',
              alt: 'Imagem Carrossel'
            },
            {
              url: 'assets/images/carousel/c3.jpeg',
              alt: 'Imagem Carrossel'
            },
            {
              url: 'assets/images/carousel/c4.jpeg',
              alt: 'Imagem Carrossel'
            }
          ]
        },
        recomendations: [
          {
            customer: 'Yanka',
            image: {
              url: 'assets/images/customers/yanka.png',
              alt: 'Foto cliente'
            },
            message: `
              Os meus dias são muito corridos. Tenho uma marca de sapatos e também sou sócia 
              de uma empresa. Então, só consigo estar com as unhas sempre feitas com a ajuda da 
              Singu. É super legal poder contar com ótimas profissionais que atendem em horários 
              tão flexíveis e ainda em casa ou no trabalho!
            `
          }
        ]
      }
    ]

    return { 
      studios,
      procedures,
      products,
      productCategories,
      procedureCategories,
      professionals,
      home,
      contacts
    };
  }

}
