import drink1 from './assets/drink1.jpg';
import drink2 from './assets/drink2.jpg';
import drink3 from './assets/drink3.jpg';

/* SIMULANDO DADOS VINDOS DE UMA API COMPARTILHADA COM OS CANAIS DE VENDA DA AMBEV! */

const list = [
  {
    categorie_id: 1,
    categorie_name: 'Café da manhã',
    kits: [
      {
        kit_id: 1,
        alcool: false,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink1}`,
      },
      {
        kit_id: 2,
        alcool: false,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink2}`,
      },
      {
        kit_id: 3,
        alcool: true,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink3}`,
      },
    ],
  },
  {
    categorie_id: 2,
    categorie_name: 'Pré-Treino',
    kits: [
      {
        kit_id: 4,
        alcool: false,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink3}`,
      },
      {
        kit_id: 5,
        alcool: false,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink2}`,
      },
      {
        kit_id: 6,
        alcool: true,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink1}`,
      },
    ],
  },
  {
    categorie_id: 3,
    categorie_name: 'Party',
    kits: [
      {
        kit_id: 7,
        alcool: true,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink2}`,
      },
      {
        kit_id: 8,
        alcool: false,
        name: 'Mojito',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink3}`,
      },
    ],
  },
];

export default list;
