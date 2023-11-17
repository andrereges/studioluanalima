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
          CEO e profissional nos procedimentos de cílios, sobrancelhas, drenagem linfática, limpeza de pele e cabelo.
        `,
        image: {
          url: 'assets/images/professionals/luana.jpeg',
          alt: 'Foto Profissional'
        },
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3412',
        name: 'Regiane Lora',
        description: `
          Profissional nos procedimentos de unhas.
        `,
        image: {
          url: 'assets/images/professionals/regiane.jpeg',
          alt: 'Foto Profissional'
        },
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3413',
        name: 'Elayne Cristina',
        description: `
          Profissional nos procedimentos de cílios.
        `,
        image: {
          url: 'assets/images/professionals/elayne.jpeg',
          alt: 'Foto Profissional'
        },
      }
    ]

    const studios = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3410',
        name: 'Studio Luana Lima',
        description: `
          <p>
            Inaugurado em Fevereiro de 2023, nosso estúdio conta com diversos serviços na área da beleza. Contamos com 2 ambientes de atendimento divididos estrategicamente.
          </p>

          <h3>  Ambiente 1  </h3>
          
          <ul>
            <li> Manicure e pedicure </li>
            <li> Cílios </li>
            <li> Limpeza de pele </li>
            <li> Design de sobrancelhas </li>
            <li> Drenagem linfática </li>
            <li> Espaço instagramável para fotos e vídeos </li>
            <li> Espaço para expositores de itens de vestuário para venda </li>
            <li> Cantinho do café </li>
          </ul>

          <br>

          <h3>  Ambiente 2 </h3>

          <ul>
            <li> Procedimentos capilares, como escova e progressiva </li>
          </ul>
            
          <p>
            Tudo bem pensado e separado para trazer o máximo de conforto e bem estar no momento dos procedimentos.
          </p>

          <p>
            Nosso ambiente é calmo e reservado, não trabalhamos com porta de vidro comercial o que gera conforto e privacidade, 
            pois nem todos gostam de exposição no momento da realização dos procedimentos, tornando um diferencial para nosso estúdio.
          </p>

          <p>
            Pra quem gosta de um ambiente reservado, bem vindos ao lugar ideal!
          </p>
        `,
        images: [
          {
            url: 'assets/images/studios/studio.jpeg',
            alt: 'Imagem Studio'
          },
          {
            url: 'assets/images/studios/studio2.jpeg',
            alt: 'Imagem Studio'
          },
          {
            url: 'assets/images/studios/studio3.jpeg',
            alt: 'Imagem Studio'
          },
          {
            url: 'assets/images/studios/studio4.jpeg',
            alt: 'Imagem Studio'
          },
          {
            url: 'assets/images/studios/studio5.jpeg',
            alt: 'Imagem Studio'
          }
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
        name: 'Pele'
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
        name: 'T-Shirt Feminina',
        price: 25.00,
        sizes: ['Único'],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
            name: 'Roupas'
          }
        ],
        images: [
          {
            url: 'assets/images/products/camiseta_tam_u.jpeg',
            alt: 'T-Shirt feminina tamanho único'
          },
          {
            url: 'assets/images/products/camiseta_tam_u2.jpeg',
            alt: 'T-Shirt feminina tamanho único'
          }
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454',
        name: 'T-Shirt Plus Size',
        price: 30.00,
        sizes: ['Plus Size'],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
            name: 'Roupas'
          }
        ],
        images: [
          {
            url: 'assets/images/products/camiseta_tam_plus.jpeg',
            alt: 'T-Shirt plus size'
          },
          {
            url: 'assets/images/products/camiseta_tam_plus2.jpeg',
            alt: 'T-Shirt plus size'
          },
          {
            url: 'assets/images/products/camiseta_tam_plus3.jpeg',
            alt: 'T-Shirt plus size'
          },
          {
            url: 'assets/images/products/camiseta_tam_plus4.jpeg',
            alt: 'T-Shirt plus size'
          },
          {
            url: 'assets/images/products/camiseta_tam_plus5.jpeg',
            alt: 'T-Shirt plus size'
          },
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3458',
        name: 'Shorts Alfaitaria',
        price: 35.00,
        sizes: ['P', 'M', 'G', 'GG'],
        categories: [
          {
            id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3459',
            name: 'Roupas'
          }
        ],
        images: [
          {
            url: 'assets/images/products/shorts.jpeg',
            alt: 'Shorts Alfaitaria'
          },
          {
            url: 'assets/images/products/shorts2.jpeg',
            alt: 'Shorts Alfaitaria'
          },
          {
            url: 'assets/images/products/shorts3.jpeg',
            alt: 'Shorts Alfaitaria'
          },
          {
            url: 'assets/images/products/shorts4.jpeg',
            alt: 'Shorts Alfaitaria'
          },
          {
            url: 'assets/images/products/shorts5.jpeg',
            alt: 'Shorts Alfaitaria'
          },
          {
            url: 'assets/images/products/shorts6.jpeg',
            alt: 'Shorts Alfaitaria'
          },
        ]
      }
    ];

    const procedures = [
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3698',
        name: 'Extensão de Cílios',
        description: `
          Extensão de cílios está em alta no mercado da beleza, trabalhamos com as 
          técnicas: Fio a Fio, Volume Brasileiro, Volume Egípcio, Volume Luxo e
          Volume Kim Kardashian. O procedimento é feito no tempo de 2 horas, o processo é 
          indolor e não interfere no crescimento dos cílios naturais.
        `,
        benefits: [
          'Eleva a autoestima',
          'Praticidade',
          'Acordar sempre pronta'
        ],
        restrictions: [
          'Pessoas alérgicas a produtos químicos ou maquiagem',
          'Distúrbio da tireóide',
          'Pessoas que tem ou teve glaucoma'
        ],
        slug: 'extensao-cilios',
        images: [
          {
            url: 'assets/images/procedures/cilios.jpeg',
            alt: 'Imagem Extensão de Cílios'
          },
          {
            url: 'assets/images/procedures/cilios2.jpeg',
            alt: 'Imagem Extensão de Cílios'
          }
        ],
        categories: [
          procedureCategories[0]
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c5789',
        name: 'Design de Sobrancelhas',
        description: `
          Objetivo valorizar o rosto e expressão no olhar. Aqui no nosso 
          espaço trabalhamos com design simples personalizado e design com henna.
        `,
        benefits: [
          'Correção de falhas',
          'Maior expressividade no olhar'
        ],
        restrictions: [
          'Pessoas alérgicas à composição da henna'
        ],
        slug: 'design-sobracelhas',
        images: [
          {
            url: 'assets/images/procedures/henna.jpeg',
            alt: 'Imagem Design Henna'
          },
          {
            url: 'assets/images/procedures/henna2.jpeg',
            alt: 'Imagem Design Henna'
          },
          {
            url: 'assets/images/procedures/henna3.jpeg',
            alt: 'Imagem Design Henna'
          },
          {
            url: 'assets/images/procedures/henna4.jpeg',
            alt: 'Imagem Design Henna'
          },
        ],
        categories: [
          procedureCategories[1]
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c1382',
        name: 'Manicure e Pedicure',
        description: `
          Trabalha a higiene e estética das unhas conta com cutilagem, 
          desencrave de unhas, esfoliação, lixamento e pintura das unhas.
        `,
        benefits: [
          'Unhas higienizadas',
          'Eleva a autoestima',
          'Bem-estar'
        ],
        restrictions: [
          'Diabetes não tratada',
          'Infecções na área dos pés ou das mãos'
        ],
        slug: 'manicure-pedicure',
        images: [
          {
            url: 'assets/images/procedures/manicure_pedicure.jpeg',
            alt: 'Imagem Manicure e Pedicure'
          },
          {
            url: 'assets/images/procedures/manicure_pedicure2.jpeg',
            alt: 'Imagem Manicure e Pedicure'
          },
          {
            url: 'assets/images/procedures/manicure_pedicure3.jpeg',
            alt: 'Imagem Manicure e Pedicure'
          },
          {
            url: 'assets/images/procedures/manicure_pedicure4.jpeg',
            alt: 'Imagem Manicure e Pedicure'
          },
        ],
        categories: [
          procedureCategories[3]
        ]
      },
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
            url: 'assets/images/procedures/microblanding.jpeg',
            alt: 'Imagem Microblanding Fio a Fio'
          },
          {
            url: 'assets/images/procedures/microblanding2.jpeg',
            alt: 'Imagem Microblanding Fio a Fio'
          },
          {
            url: 'assets/images/procedures/microblanding3.jpeg',
            alt: 'Imagem Microblanding Fio a Fio'
          },
          {
            url: 'assets/images/procedures/microblading4.jpeg',
            alt: 'Imagem Microblanding Fio a Fio'
          },
        ],
        categories: [
          procedureCategories[1]
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
            url: 'assets/images/procedures/drenagem_linfatica.jpeg',
            alt: 'Imagem Drenagem Linfática'
          },
          {
            url: 'assets/images/procedures/drenagem_linfatica2.jpeg',
            alt: 'Imagem Drenagem Linfática'
          },
          {
            url: 'assets/images/procedures/drenagem_linfatica3.jpg',
            alt: 'Imagem Drenagem Linfática'
          }
        ],
        categories: [
          procedureCategories[4]
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
          'Pele com muita descamação',
          'Alergias na pele',
          'Gestantes e lactantes'
        ],
        slug: 'limpeza-pele',
        images: [
          {
            url: 'assets/images/procedures/limpeza_pele.jpeg',
            alt: 'Limpeza de pele imagem'
          },
          {
            url: 'assets/images/procedures/limpeza_pele2.jpeg',
            alt: 'Limpeza de pele imagem'
          },
          {
            url: 'assets/images/procedures/limpeza_pele3.jpeg',
            alt: 'Limpeza de pele imagem'
          }
        ],
        categories: [
          procedureCategories[4]
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c8319',
        name: 'Hydra Gloss Lips',
        description: `
          Hydra Gloss Lips é uma técnica de super hidratação que propicia o 
          rejuvenescimento, definição e hidratação dos lábios.
        `,
        benefits: [
          'Hidratação',
          'Rejuvenescimento labial',
          'Aspecto de saudável'
        ],
        restrictions: [
          'Gestantes e lactantes',
          'Herpes labial',
          'Pessoas que fazem uso de Roacutan'
        ],
        slug: 'hydra-gloss-lips',
        images: [
          {
            url: 'assets/images/procedures/hydra_gloss_lips.jpeg',
            alt: 'Imagem Hydra Gloss Lips'
          },
          {
            url: 'assets/images/procedures/hydra_gloss_lips2.jpeg',
            alt: 'Imagem Hydra Gloss Lips'
          },
          {
            url: 'assets/images/procedures/hydra_gloss_lips3.jpeg',
            alt: 'Imagem Hydra Gloss Lips'
          },
        ],
        categories: [
          procedureCategories[4]
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c5462',
        name: 'Progressiva Sem Formol',
        description: `
          A grande vantagem é que ela não causa qualquer efeito colateral, seja queimação, 
          descamação do couro cabeludo ou ardência dos olhos. Pode ser utilizada em todos os 
          tipos de cabelo compatível com todas as químicas.
        `,
        benefits: [
          'Brilho intenso',
          'Maciez',
          'Liso intenso',
          'Redução de frizz',
          'Menos agressiva'
        ],
        restrictions: [
          'Uso de henê',
          'Crianças menos de 10 anos',
          'Couro cabeludo hipersensível'
        ],
        slug: 'progressiva-sem-formol',
        images: [
          {
            url: 'assets/images/procedures/progressiva_sem_formol.jpeg',
            alt: 'Imagem Progressiva Sem Formol'
          },
          {
            url: 'assets/images/procedures/progressiva_sem_formol2.jpeg',
            alt: 'Imagem Progressiva Sem Formol'
          },
          {
            url: 'assets/images/procedures/progressiva_sem_formol3.jpeg',
            alt: 'Imagem Progressiva Sem Formol'
          },
          {
            url: 'assets/images/procedures/progressiva_sem_formol4.jpeg',
            alt: 'Imagem Progressiva Sem Formol'
          },
          {
            url: 'assets/images/procedures/progressiva_sem_formol5.jpeg',
            alt: 'Imagem Progressiva Sem Formol'
          }
        ],
        categories: [
          procedureCategories[2]
        ]
      },
      {
        id: 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c7351',
        name: 'Escova e Tratamentos',
        description: `
          Contamos com uma linha de produtos para a necessidade de cada cabelo, 
          seja hidratação, reconstrução, nutrição ou cauterização. Todas finalizadas 
          com escova.
        `,
        benefits: [
          'Cabelos tratados',
          'Brilho intenso',
          'Praticidade para o dia a dia'
        ],
        restrictions: [
          'Hipersensibilidade',
          'Alergia a composição dos produtos'
        ],
        slug: 'escova',
        images: [
          {
            url: 'assets/images/procedures/escova.jpeg',
            alt: 'Imagem Escova'
          },
          {
            url: 'assets/images/procedures/escova2.jpeg',
            alt: 'Imagem Escova'
          },
          {
            url: 'assets/images/procedures/escova3.jpeg',
            alt: 'Imagem Escova'
          },
        ],
        categories: [
          procedureCategories[2]
        ]
      },
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
            }
          ]
        },
        recomendations: [
          {
            customer: 'Ana Paula',
            image: {
              url: 'assets/images/customers/ana_paula.jpeg',
              alt: 'Foto cliente'
            },
            message: `
              Espaço muito bonito, sempre faço meu cabelo com a Luana e 
              amo o resultado, admiro seu atendimento por ser profissional e diferenciado, 
              estou super satisfeita.
            `
          },
          {
            customer: 'Laís Ateliê Aya',
            image: {
              url: 'assets/images/customers/lais_atelie_aya.jpeg',
              alt: 'Foto cliente'
            },
            message: `
              Sou cliente do Studio Luana Lima e não poderia dar nota menor que 1000, 
              o atendimento da Luana é diferenciado, super educada, profissional e agradável, 
              o ambiente é muito aconchegante e lindo, somos super bem recebidas, é 
              organizado e pontual, a qualidade dos procedimentos é inquestionável 
              sempre saio muito melhor do que entrei, mais bonita e com a alto estima 
              renovada, me cuido mais e amo ser cuidada pela Luana!
            `
          },
          {
            customer: 'Laís Sousa',
            image: {
              url: 'assets/images/customers/lais_sousa.jpeg',
              alt: 'Foto cliente'
            },
            message: `
              Que espaço lindo, aconchegante, seu trabalho é maravilhoso, 
              e além de tudo você é sempre muito atenciosa! Recomendo muito!
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
