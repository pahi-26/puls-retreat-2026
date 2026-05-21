export type PreviousEdition = {
  year: string;
  title: string;
  location: string;
  note: string;
};

export const previousEditions: PreviousEdition[] = [
  {
    year: "Edition I",
    title: "Previous Workshop 1",
    location: "Location to be added",
    note: "Add the year, host city, and a short line about the scientific focus of this edition."
  },
  {
    year: "Edition II",
    title: "Previous Workshop 2",
    location: "Location to be added",
    note: "Use this card for the next confirmed previous meeting and its main theme or outcome."
  },
  {
    year: "Edition III",
    title: "Previous Workshop 3",
    location: "Location to be added",
    note: "A concise summary works best here: topic emphasis, notable format, or interdisciplinary angle."
  },
  {
    year: "Edition IV",
    title: "Previous Workshop 4",
    location: "Location to be added",
    note: "This section is intentionally easy to edit once you send the real details of the past editions."
  }
];
