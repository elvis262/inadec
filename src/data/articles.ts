export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  // Présent uniquement pour les articles qui ont une page de détail
  slug?: string;
  image: string;
  meta: string;
  title: string;
  sections?: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: 'koun-fao-mission-de-terrain',
    image: '/projets/projet_milieu_scolaire_sante_fem.jpeg',
    meta: 'Septembre 2026 · Projets',
    title: 'Koun-Fao ouvre le bal : première mission de terrain du projet « Milieu scolaire et santé féminine »',
    sections: [
      {
        paragraphs: [
          "Du 21 au 28 septembre 2026, l'équipe de l'Initiative Nationale pour le Développement Communautaire - INADEC, porteuse du projet « Milieu scolaire et santé féminine » financé par le Fonds Canadien d'Initiatives Locales, a conduit sa première mission de terrain à Koun-Fao.",
          "Une démarche d'écoute et d'ancrage qui a permis de sceller un partenariat solide autour de quatre jalons majeurs :",
        ],
      },
      {
        heading: "1. L'adhésion institutionnelle acquise",
        paragraphs: [
          "Lors des audiences de civilités, les objectifs, l'approche et la portée communautaire du projet ont été présentés aux autorités administratives et éducatives. Nous nous réjouissons de l'adhésion totale et de l'engagement ferme de Madame le Préfet, de Monsieur le Maire résident, de Monsieur le DRENAET, de Monsieur le Directeur du District Sanitaire, de la Direction du Lycée Moderne BAD, de son COGES, de l'Antenne Régionale de la Vie Scolaire et du Service Égalité et Équité du Genre. Un front uni pour la jeune fille.",
        ],
      },
      {
        heading: "2. Le Comité Local d'Identification (CLI) mis en place",
        paragraphs: [
          "Au Lycée Moderne BAD de Koun-Fao, une séance de travail participative a abouti à l'installation du comité local. Sa mission : identifier avec confidentialité, équité et sur la base de critères de vulnérabilité, les 120 adolescentes bénéficiaires du projet.",
        ],
      },
      {
        heading: '3. Le diagnostic technique des latrines réalisé',
        paragraphs: [
          "Étape préalable et indispensable à leur réhabilitation et à l'aménagement futur d'espaces dédiés à la Gestion Hygiénique des Menstrues (GHM), condition essentielle à la dignité, à la santé et au maintien des filles à l'école.",
        ],
      },
      {
        heading: '4. La prévention des grossesses en cours de scolarité au cœur de l\'action',
        paragraphs: [
          "Au-delà de la dignité menstruelle, le projet intègre un volet essentiel d'éducation à la santé sexuelle et reproductive, de sensibilisation et de dialogue pour prévenir les grossesses en cours de scolarité et maintenir durablement les filles dans le système scolaire.",
        ],
      },
      {
        paragraphs: [
          "Nous adressons nos vifs remerciements aux autorités et à l'ensemble des acteurs éducatifs de Koun-Fao pour leur accueil et leur mobilisation exemplaire.",
          'Cap désormais sur Guiglo et Duékoué pour la poursuite de cette dynamique.',
          "Notre gratitude au Fonds Canadien d'Initiatives Locales - FCIL pour cette confiance qui érige un besoin vital en action durable.",
        ],
      },
    ],
  },
  {
    image: '/activites/activite2.webp',
    meta: 'Mai 2025 · Institutionnel',
    title: "Participation de l'INADEC aux 60<sup>èmes</sup> Assemblées Annuelles de la Banque Africaine de Développement à Abidjan",
  },
  {
    image: '/activites/activite1.jpg',
    meta: 'Mars 2025 · Partenariats',
    title: "Audience de travail avec le Service de Coopération et d'Action Culturelle de l'Ambassade de France",
  },
  {
    image: '/activites/activite3.jpg',
    meta: 'Février 2025 · Projets',
    title: "Lancement du Projet PACTE avec le Ministère de la Fonction Publique et de la Modernisation de l'Administration",
  },
];
