export const BRAND = {
  name: "Sab' Esthétique",
  phone: "91 49 46 50",
  phoneHref: "tel:+22891494650",
  whatsapp: "https://wa.me/22891494650",
  email: "sabesthetiquesalon@gmail.com",
  address:
    "Hedzranawoé, boulevard du Haho, dans l'angle rue de l'immeuble le CROUSTILLANT, Lomé, Togo",
  mapsUrl:
    "https://www.google.com/maps/place/Sab'+Esth%C3%A9tique/@6.1758144,1.2383426,17z/data=!3m1!4b1!4m6!3m5!1s0x1023e3cbb8b84cf9:0x85ebd396c08c68ca!8m2!3d6.1758144!4d1.2409175!16s%2Fg%2F11gnrlxxwg",
  reviewsUrl:
    "https://www.google.com/maps/place/Sab'+Esth%C3%A9tique/@6.1758144,1.2383426,17z/data=!4m8!3m7!1s0x1023e3cbb8b84cf9:0x85ebd396c08c68ca!8m2!3d6.1758144!4d1.2409175!9m1!1b1!16s%2Fg%2F11gnrlxxwg?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D",
  instagram: "https://www.instagram.com/sabesthetique_/",
  tiktok: "https://www.tiktok.com/@sab_esthetique",
  facebook: "https://web.facebook.com/sabesthetique.coif",
  rating: 4.2,
  reviewCount: 50,
};

export const SERVICES = [
  "Manucure",
  "Pédicure",
  "Onglerie (gel UV, résine, acrygel)",
  "Microblading",
  "Extensions de cils",
  "Épilation à la cire",
  "Services de maquillage",
  "Massage",
  "Microneedling",
  "Soins du corps",
  "Soins du visage",
];

export const SERVICE_CATEGORIES = [
  {
    id: "mains-pieds",
    title: "Mains & pieds",
    description: "Manucure, pédicure et onglerie soignées, hygiène irréprochable.",
    items: [
      "Manucure",
      "Pédicure",
      "Onglerie — gel UV",
      "Onglerie — résine",
      "Onglerie — acrygel",
    ],
  },
  {
    id: "regard",
    title: "Regard & sourcils",
    description: "Un regard sublimé, dessiné avec précision et transparence.",
    items: ["Microblading", "Extensions de cils"],
  },
  {
    id: "epilation-maquillage",
    title: "Épilation & maquillage",
    description: "Douceur, précision, et mise en beauté sur mesure.",
    items: ["Épilation à la cire", "Services de maquillage"],
  },
  {
    id: "soins",
    title: "Soins & bien-être",
    description: "Rituels visage, corps et bien-être pour se recentrer.",
    items: ["Soins du visage", "Soins du corps", "Microneedling", "Massage"],
  },
];

export const REVIEWS = [
  {
    name: "Liselle George",
    rating: 5,
    date: "il y a 1 an",
    text: "C'est un endroit très agréable, l'accueil, l'hygiène est au rendez-vous. Même les jeunes femmes qui travaillent là-bas sont propres sur elles de la tête au pied et vous donnent l'envie de venir se faire bichonner.",
  },
  {
    name: "Melvina Kougbeadjo",
    rating: 5,
    date: "il y a 4 ans",
    text: "Professionnel et à l'écoute. J'étais partie au départ pour un microblading mais suite au questionnaire, cela représentait un risque pour moi. Sab a donc été transparente avec moi et j'ai beaucoup apprécié. Au final j'ai fait extension de cils et épilation de sourcils à la cire. Merci encore ! On vient de s'installer sur Lomé et j'ai trouvé mon institut ! Je recommande",
  },
  {
    name: "Nina B.",
    rating: 5,
    date: "il y a 2 ans",
    text: "Superbe expérience avec une qualité de Service au Top 👍 Très professionnel et un gommage et massage au top 👌. Je reviendrai sans hésiter",
  },
  {
    name: "Déborah Gbafa",
    rating: 4,
    date: "il y a 1 semaine",
    text: "J'applaudis le travail du service client impeccable et les prestations parfaitement faites 😍 Ils sont un 10/10 😍😍 Vivement recommandé svp",
  },
  {
    name: "Marie Schrive",
    rating: 5,
    date: "il y a 3 ans",
    text: "Le meilleur institut de Lomé pour une manucure parfaite.",
  },
  {
    name: "Nadoor TOURE",
    rating: 4,
    date: "il y a 4 ans",
    text: "J'ai tout aimé... prestation de service top !!",
  },
];

export const HOURS = [
  { day: "Lundi", h: "Fermé", closed: true },
  { day: "Mardi", h: "9h — 19h" },
  { day: "Mercredi", h: "9h — 19h" },
  { day: "Jeudi", h: "9h — 19h" },
  { day: "Vendredi", h: "9h — 19h" },
  { day: "Samedi", h: "9h — 19h" },
  { day: "Dimanche", h: "Fermé", closed: true },
];
