export type PreviousEdition = {
  year: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  credit: string;
};

export const previousEditions: PreviousEdition[] = [
  {
    year: "2018",
    title: "PULS Retreat 2018",
    location: "Krasno, Croatia",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Krasno%20polje.jpg?width=1600",
    alt: "Aerial view over the village of Krasno and Krasno polje in the Velebit mountains, Croatia",
    credit: "Marko Jukić -Majkl, CC BY-SA 4.0, via Wikimedia Commons",
  },
  {
    year: "2022",
    title: "PULS Retreat 2022",
    location: "Pašman, Croatia",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pasman.jpg",
    alt: "View across the island of Pašman towards the Dalmatian coast, Croatia",
    credit: "Maestralni, CC BY-SA 3.0, via Wikimedia Commons",
  },
  {
    year: "2025",
    title: "PULS Retreat 2025",
    location: "Zadar, Croatia",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Forum%20in%20Zadar%2C%20Croatia%20%2848607823862%29.jpg?width=1600",
    alt: "The Roman Forum in Zadar, Croatia",
    credit: "dronepicr, CC BY 2.0, via Wikimedia Commons",
  }
];
