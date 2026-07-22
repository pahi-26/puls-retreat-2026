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
  affiliation: "FAU Erlangen Nurnberg"
};

export const organizers: Person[] = [
  {
    name: "Siddhant Mohapatra",
    role: "Post-Doctoral Researcher • Organizer",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Filip Novkoski",
    role: "Post-doctoral Researcher • Organizer",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Sampanna Pahi",
    role: "Doctoral Researcher • Organizer • Website Owner",
    affiliation: "FAU Erlangen Nurnberg"
  }
];

export const speakers: Speaker[] = [
  {
    name: "Prof. Dr. Andreas Maier",
    affiliation: "PRL, FAU Erlangen Nurnberg"
  },
  {
    name: "Prof. Dr. Jens Harting",
    affiliation:
      "Helmholtz-Institut Erlangen-Nurnberg fur Erneuerbare Energien (HI ERN)"
  },
  {
    name: "Prof. Dr. Kheya Sengupta",
    affiliation: "Interdisciplinary Center of Nanoscience of Marseille - CNRS, France"
  },
  {
    name: "Prof. Dr. Marco Haumann",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Prof. Dr. Nicolas Vandewalle",
    affiliation: "University of Liege, Liege, Belgium"
  },
  {
    name: "Dr. Etienne Loiseau",
    affiliation: "Aix-Marseille University, CNRS, CINAM, France"
  },
  {
    name: "Dr. Tanja Retzer",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Dr. Christian Wick",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Dr. Piotr Nowakowski",
    affiliation: "Institut Ruder Boskovic, Croatia"
  }
];
