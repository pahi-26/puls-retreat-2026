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
    name: "Prof. Dr. Marco Haumann",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Dr. Olaf Brummel",
    affiliation: "FAU Erlangen Nurnberg"
  },
  {
    name: "Dr. Tanja Retzner",
    affiliation: "FAU Erlangen Nurnberg"
  }
];
