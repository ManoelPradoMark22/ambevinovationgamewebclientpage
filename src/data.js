import drink1 from './assets/drink1.jpg';
import drink2 from './assets/drink2.jpg';
import drink3 from './assets/drink3.jpg';

const list = [
  {
    categorie_id: 1,
    categorie_name: 'Café da manhã',
    kits: [
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink1}`,
      },
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink2}`,
      },
    ],
  },
  {
    categorie_id: 2,
    categorie_name: 'Pré-Treino',
    kits: [
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink3}`,
      },
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink2}`,
      },
    ],
  },
  {
    categorie_id: 3,
    categorie_name: 'Party',
    kits: [
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink1}`,
      },
      {
        name: 'Mojito sem álcool',
        description: 'Drink excelente para uma boa hidratação pela manhã',
        content: 'Hortelã, H2OH!, açúcar, gelo',
        image: `${drink3}`,
      },
    ],
  },
];

export default list;
