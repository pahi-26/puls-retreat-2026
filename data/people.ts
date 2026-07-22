export type Speaker = {
  name: string;
  affiliation: string;
  topic?: string;
  image?: string;
};

export type Person = {
  name: string;
  role: string;
  affiliation: string;
};

export const supervisor: Person = {
  name: "Ana-Sunčana Smith",
  role: "Prof. Dr. • Scientific Lead",
  affiliation: "FAU Erlangen-Nürnberg, Germany"
};

export const organizers: Person[] = [
  {
    name: "Siddhant Mohapatra",
    role: "Post-Doctoral Researcher • Organizer",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Filip Novkoski",
    role: "Post-doctoral Researcher • Organizer",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Sampanna Pahi",
    role: "Doctoral Researcher • Organizer • Website Owner",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  }
];

export const speakers: Speaker[] = [
  {
    name: "Prof. Dr. Andreas Maier",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Prof. Dr. Jens Harting",
    affiliation: "Helmholtz-Institut Erlangen-Nürnberg für Erneuerbare Energien (HI ERN), Germany"
  },
  {
    name: "Prof. Dr. Kheya Sengupta",
    affiliation: "Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France"
  },
  {
    name: "Prof. Dr. Marco Haumann",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Prof. Dr. Nicolas Vandewalle",
    affiliation: "University of Liège, Belgium"
  },
  {
    name: "Dr. Etienne Loiseau",
    affiliation: "Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France"
  },
  {
    name: "Dr. Tanja Retzer",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Dr. Christian Wick",
    affiliation: "FAU Erlangen-Nürnberg, Germany"
  },
  {
    name: "Dr. Piotr Nowakowski",
    affiliation: "Institut Ruđer Bošković, Croatia"
  }
];
