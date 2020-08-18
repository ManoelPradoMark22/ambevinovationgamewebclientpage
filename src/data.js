import drink1 from './assets/drink1.jpg';
import drink2 from './assets/drink2.jpg';
import drink3 from './assets/drink3.jpg';
import drink4 from './assets/drink4.jpg';
import drink5 from './assets/drink5.jpg';
import drink6 from './assets/drink6.jpg';
import drink7 from './assets/drink7.jpg';
import drink8 from './assets/drink8.jpg';

/* SIMULANDO DADOS VINDOS DE UMA API COMPARTILHADA COM OS CANAIS DE VENDA DA AMBEV! */

const list = [
  {
    categorie_id: 1,
    categorie_name: 'Café da manhã',
    kits: [
      {
        kit_id: 1,
        alcool: false,
        name: 'Caipirinha sem álcool',
        description: 'Gostosa e refrescante e sem álcool',
        content:
          '1 suco de uva integral DO BEM™️ (1L), 1 Tônica Antártica (350ml), morango picado, amoras',
        image: `${drink1}`,
      },
      {
        kit_id: 2,
        alcool: false,
        name: 'Belini',
        description: 'Aquele drink para dar aquela animada logo de manhã!',
        content: '1 suco de pêssego DO BEM™️ (1L), 1 guaraná antártica (600ml)',
        image: `${drink2}`,
      },
      {
        kit_id: 3,
        alcool: false,
        name: 'Sangria',
        description: 'Que tal um drink espanhol nesse calor?',
        content:
          '1 suco de uva integral DO BEM™️ (1L), 1 Tônica Antártica (350ml), abacaxi picado, maçã picada',
        image: `${drink8}`,
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
        name: 'On the Beach',
        description: 'Quer aquela energia para o seu treino? Tá aqui!',
        content: '1 suco de laranja DO BEM™️ (1L), groselha, abacaxi picado',
        image: `${drink4}`,
      },
      {
        kit_id: 5,
        alcool: false,
        name: 'EnergyRun',
        description:
          'Drink excelente para uma boa hidratação, além de dar aquela energia para o treino!',
        content:
          '1 água de coco DO BEM™️ (1L), 1 Gatorade de limão (500ml), 1 energético Fusion (250ml), limão',
        image: `${drink5}`,
      },
      {
        kit_id: 6,
        alcool: false,
        name: 'StrawMango Fruit',
        description:
          'Aquele drink bem natural e refrescante para começar o treino por cima!',
        content:
          '1 suco de manga DO BEM™️ (1L), 1 smoothie de framboesa e morango DO BEM™️ (1L), 1 suco de limão DO BEM™️ (1L), 1 Tônica Antártica (350ml), mel',
        image: `${drink7}`,
      },
    ],
  },
  {
    categorie_id: 3,
    categorie_name: 'Party',
    kits: [
      {
        kit_id: 7,
        alcool: false,
        name: 'Mojito',
        description: 'Um drink sem álcool também faz sucesso nas festas!',
        content: 'H2OH!® de limão (500ml), hortelã',
        image: `${drink6}`,
      },
      {
        kit_id: 8,
        alcool: true,
        name: 'FrozenSenses',
        description: 'Que tal um drink popular em qualquer festa?',
        content:
          '2 Skol beats senses (269ml), 1 suco de limão DO BEM™️ (1L), leite condensado',
        image: `${drink3}`,
      },
    ],
  },
];

export default list;
