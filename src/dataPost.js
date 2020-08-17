import people1 from './assets/people1.JPG';
import people2 from './assets/people2.jpg';
import people3 from './assets/people3.jpg';
import people4 from './assets/people4.jpg';
import people5 from './assets/people5.jpg';

/* SIMULANDO DADOS VINDOS DE UMA API COMPARTILHADA COM OS CANAIS DE VENDA DA AMBEV! */

const postList = [
  {
    post_id: 1,
    insta: '@manoelprado9',
    local: 'Ibiajara - BA',
    description: 'TBT com Fora da Caixa!',
    image: `${people5}`,
  },
  {
    post_id: 2,
    insta: '@julia',
    local: 'Recife-PE',
    description: 'Provando esse delicioso KitDrink da Ambev!',
    image: `${people1}`,
  },
  {
    post_id: 3,
    insta: '@fernanda',
    local: 'Manaus-AM',
    description: 'TBT! Mas com o Kit do Fora da caixa em casa!',
    image: `${people2}`,
  },
  {
    post_id: 4,
    insta: '@mateus @claudia',
    local: 'Curitiba - PR',
    description: 'TBT de respeito! Êeee saudade!',
    image: `${people3}`,
  },
  {
    post_id: 5,
    insta: '@jaine',
    local: 'Salvador - BA',
    description: 'Melhor não há! Fora da caixa, no conforto da sua casa!',
    image: `${people4}`,
  },
];

export default postList;
