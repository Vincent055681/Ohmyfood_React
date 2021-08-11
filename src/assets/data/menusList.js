import { v4 as uuidv4 } from "uuid";

const menusList = [
  {
    restaurantName: "La palette du goût",
    id: 1,
    img: "./imgs/la_palette_du_gout.jpg",
    menus: [
      {
        type: "entrées",
        order: 1,
        name: "Fricassée d'escargot",
        subtitle: "Au piment d'Espelette",
        price: 2500,
      },
      {
        type: "entrées",
        order: 3,
        name: "Oeuf au plat",
        subtitle: "Assaisonné à la truffe sur lit de caviar",
        price: 2000,
      },
      {
        type: "entrées",
        order: 2,
        name: "Foie gras de canard mi-cuit",
        subtitle: "Et ses copeaux de truffe noire",
        price: 3500,
      },
      {
        type: "plats",
        order: 2,
        name: "Parmentier de queue de boeuf",
        subtitle: "À la truffe noire sur sa purée de panais",
        price: 3500,
      },
      {
        type: "plats",
        order: 3,
        name: "Filet de turbot",
        subtitle: "Aux agrumes",
        price: 4400,
      },
      {
        type: "plats",
        order: 1,
        name: "Filet de boeuf aux herbes",
        subtitle: "Accompagné de sa ribambelle de légumes",
        price: 4000,
      },
      {
        type: "desserts",
        order: 1,
        name: "Paris-Brest",
        subtitle: "Revisité",
        price: 1800,
      },
      {
        type: "desserts",
        order: 2,
        name: "Macaron au chocolat d'exception ",
        subtitle: "Et glace à la vanille de Madagascar",
        price: 2200,
      },
      {
        type: "desserts",
        order: 3,
        name: "Mousse au chocolat",
        subtitle: "Au piment d'Espelette et à la truffe noire",
        price: 2300,
      },
    ],
  },
  {
    restaurantName: "Le délice des sens",
    id: 4,
    img: "./imgs/le_delice_des_sens.jpg",
    menus: [
      {
        type: "entrées",
        order: 1,
        name: "Tartare de thon",
        subtitle: "Assaisonné au yuzu",
        price: 2500,
      },
      {
        type: "entrées",
        order: 2,
        name: "Bouchée de homard croustillant",
        subtitle: "Et sa farandole de petits légumes",
        price: 3500,
      },
      {
        type: "entrées",
        order: 3,
        name: "Velouté de cèpes",
        subtitle: "Aux truffes",
        price: 2000,
      },
      {
        type: "plats",
        order: 1,
        name: "Poulet rôti aux herbes de Provence",
        subtitle: "Et sa crème de truffe",
        price: 4000,
      },
      {
        type: "plats",
        order: 2,
        name: "Langouste rôtie ",
        subtitle: "Et ses légumes de saison",
        price: 3500,
      },
      {
        type: "plats",
        order: 3,
        name: "Côte de boeuf Angus ",
        subtitle: "Et sa purée de panais",
        price: 4400,
      },
      {
        type: "desserts",
        order: 1,
        name: "Farandole de desserts",
        subtitle: "Du chef",
        price: 1800,
      },
      {
        type: "desserts",
        order: 2,
        name: "Crème brulée",
        subtitle: "Revisitée",
        price: 2200,
      },
      {
        type: "desserts",
        order: 3,
        name: "Tiramisu",
        subtitle: "À la noisette",
        price: 2300,
      },
    ],
  },
  {
    restaurantName: "La note enchantée",
    id: 2,
    img: "./imgs/la_note_enchantee.jpg",
    menus: [
      {
        type: "entrées",
        order: 1,
        name: "Ravioles de foie gras",
        subtitle: "Accompagnés de leur crème à la truffe",
        price: 2500,
      },
      {
        type: "entrées",
        order: 2,
        name: "Caviar osciètre",
        subtitle: "Sur blini à la farine de blé noir",
        price: 3500,
      },
      {
        type: "entrées",
        order: 3,
        name: "Homard et espuma de potiron",
        subtitle: "Mariné aux zestes d'orange",
        price: 2000,
      },
      {
        type: "plats",
        order: 1,
        name: "Noix de coquilles Saint-Jacques",
        subtitle: "Sur lit de purée de céleri-rave",
        price: 4000,
      },
      {
        type: "plats",
        order: 2,
        name: "Langoustine poêlée",
        subtitle: "Purée de patate douce",
        price: 3500,
      },
      {
        type: "plats",
        order: 3,
        name: "Mijoté de queue de boeuf ",
        subtitle: "Et riz sauvage aux zestes de citron",
        price: 4400,
      },
      {
        type: "desserts",
        order: 1,
        name: "Macaron noisette et chocolat",
        subtitle: "Glace au caramel brun et sel de Guérande",
        price: 1800,
      },
      {
        type: "desserts",
        order: 2,
        name: "Baba au rhum revisité ",
        subtitle: "Avec son coulis de citron",
        price: 2200,
      },
      {
        type: "desserts",
        order: 3,
        name: "Tarte au citron meringuée",
        subtitle: "Déstructurée",
        price: 2300,
      },
    ],
  },
  {
    restaurantName: "À la française",
    id: 3,
    img: "./imgs/a_la_francaise.jpg",
    menus: [
      {
        type: "entrées",
        order: 1,
        name: "Tartare de poulpe acidulé",
        subtitle: "Aux zestes d'orange",
        price: 2500,
      },
      {
        type: "entrées",
        order: 2,
        name: "Velouté de légumes d'antan",
        subtitle: "Carotte, panais, topinambour",
        price: 3500,
      },
      {
        type: "entrées",
        order: 3,
        name: "Soupe à l'oignon",
        subtitle: "Revisitée",
        price: 2000,
      },

      {
        type: "plats",
        order: 1,
        name: "Coquilles Saint-Jacques",
        subtitle: "Accompagnées d'une purée de panais",
        price: 4000,
      },
      {
        type: "plats",
        order: 2,
        name: "Magret de canard",
        subtitle: "Et parmentier de pommes de terre",
        price: 3500,
      },
      {
        type: "plats",
        order: 3,
        name: "Pigeonneau d’Ille-et-Vilaine",
        subtitle: "Sur son lit de gnocchis aux légumes",
        price: 4400,
      },
      {
        type: "desserts",
        order: 1,
        name: "Pétales de violettes glacés",
        subtitle: "Et purée de noisettes",
        price: 1800,
      },
      {
        type: "desserts",
        order: 2,
        name: "Fondant au chocolat",
        subtitle: "Revisité",
        price: 2200,
      },
      {
        type: "desserts",
        order: 3,
        name: "Millefeuille croustillant",
        subtitle: "Myrtilles et pâte d’amande",
        price: 2300,
      },
    ],
  },
];

export default menusList;