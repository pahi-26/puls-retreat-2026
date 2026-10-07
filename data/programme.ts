export type ProgrammeDay = {
  date: string;
  sessions: {
    time: string;
    title: string;
    detail?: string;
    talks?: string[];
    tracks?: {
      name: string;
      topic?: string;
      people?: string[];
    }[];
  }[];
};

export const talkFormats = [
  { type: "Invited talk", duration: "approx. 30 mins" },
  { type: "Contributed talk", duration: "approx. 15 mins" }
];

// Parallel group-session tracks (IM, Mem, Tiss, CC1–CC3 in the organisers' schedule)
const groups = {
  im: "Robotics and Soft Active Matter",
  mem: "Biophysics: Membranes",
  tiss: "Biophysics: Tissues",
  cc1: "Computational Chemistry 1",
  cc2: "Computational Chemistry 2",
  cc3: "Computational Chemistry 3"
};

export const programme: ProgrammeDay[] = [
  {
    date: "9 October 2026",
    sessions: [
      {
        time: "18:00–19:00",
        title: "Introductory Note",
        detail: "Opening remarks introducing the retreat programme."
      },
      {
        time: "19:00–21:30",
        title: "Welcome cocktail + dinner",
        detail: "Informal welcome reception and dinner to open the retreat."
      }
    ]
  },
  {
    date: "10 October 2026",
    sessions: [
      {
        time: "9:00–10:30",
        title: "Invited talks",
        talks: [
          "Prof. Dr. Kheya Sengupta (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)",
          "Prof. Dr. Nicolas Vandewalle (University of Liège, Belgium)"
        ]
      },
      {
        time: "10:45–12:45",
        title: "Pilot breakout sessions",
        tracks: [
          { name: groups.im, people: ["Nicolas Vandewalle", "Andreas Maier"] },
          { name: groups.mem, people: ["Kheya Sengupta"] },
          { name: groups.tiss, people: ["Ana-Sunčana Smith"] },
          { name: groups.cc1, people: ["Christian Wick"] },
          { name: groups.cc2, people: ["Rupam Gayen"] }
        ]
      },
      {
        time: "12:45–14:00",
        title: "Lunch"
      },
      {
        time: "14:00–16:00",
        title: "Invited talk + contributed talks",
        talks: [
          "Invited: Dr. Sara Kaliman (Max-Planck-Institut für die Physik des Lichts, Germany)",
          "Contributed: Filip Novkoski, Rupam Gayen and Lea Čolakić"
        ]
      },
      {
        time: "16:30–18:30",
        title: "Parallel breakout sessions",
        tracks: [
          { name: groups.im, topic: "Many-body bots", people: ["Gollapudi Prabhu Nithin", "Prajol Shrestha"] },
          { name: groups.mem, topic: "Actin waves", people: ["Nicolas Miani", "Dorijan Vulić"] },
          { name: groups.tiss, topic: "Stretch", people: ["Mathis Grelier", "Madhura Ramani"] },
          { name: groups.cc1, topic: "FRASCAL", people: ["Bariscan Arican", "Sampanna Pahi"] },
          { name: groups.cc2, topic: "Milling paper drafting" }
        ]
      },
      {
        time: "19:00–20:00",
        title: "Dinner"
      },
      {
        time: "20:00–21:00",
        title: "PULS Group Meeting"
      }
    ]
  },
  {
    date: "11 October 2026",
    sessions: [
      {
        time: "9:00–10:30",
        title: "Invited talks",
        talks: [
          "Prof. Dr. Marco Haumann (FAU Erlangen-Nürnberg, Germany)",
          "Prof. Dr. Andreas Maier (FAU Erlangen-Nürnberg, Germany)"
        ]
      },
      {
        time: "10:45–12:45",
        title: "Parallel group sessions",
        tracks: [
          { name: groups.im, topic: "Cell", people: ["Jocelyn Dupont", "Siddhant Mohapatra"] },
          { name: groups.mem, topic: "Patterning", people: ["Piotr Nowakowski", "Etienne Loiseau"] },
          { name: groups.tiss, topic: "Nuclear response", people: ["Madhura Ramani", "Mathis Grelier"] },
          {
            name: groups.cc1,
            topic: "Particles in pores",
            people: ["Beatrice Anne Maquilan", "Rupam Gayen", "Rustam Durdyyev"]
          },
          { name: groups.cc2, topic: "FRASCAL paper writing" },
          { name: groups.cc3, topic: "Milling proposal drafting" }
        ]
      },
      {
        time: "12:45–14:00",
        title: "Lunch"
      },
      {
        time: "14:00–16:00",
        title: "Invited talk + contributed talks",
        talks: [
          "Invited: Dr. Etienne Loiseau (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)",
          "Contributed: Siddhant Mohapatra, Sanjay Vinod Kumar and Rustam Durdyyev"
        ]
      },
      {
        time: "16:30–18:30",
        title: "Workshop: Hands-on AI",
        detail:
          "Prof. Dr. Andreas Maier: ML applications in day-to-day research problems. (Bring your own problem!)"
      },
      {
        time: "18:00–19:00",
        title: "Parallel breakout session (continues over dinner)",
        tracks: [{ name: groups.tiss, topic: "FK", people: ["Elina Wagner", "Narmin Abasova"] }]
      },
      {
        time: "19:00–20:00",
        title: "Dinner"
      },
      {
        time: "20:00–21:00",
        title: "Team building (beach volleyball)"
      }
    ]
  },
  {
    date: "12 October 2026",
    sessions: [
      {
        time: "9:00–10:30",
        title: "Invited talks",
        talks: [
          "Dr. Tanja Retzer (FAU Erlangen-Nürnberg, Germany)",
          "Dr. Piotr Nowakowski (Institut Ruđer Bošković, Croatia)"
        ]
      },
      {
        time: "10:45–12:45",
        title: "Parallel breakout sessions",
        tracks: [
          {
            name: `${groups.im} + ${groups.tiss}`,
            people: ["Filip Novkoski", "Madhura Ramani", "Maja Milas", "Ana-Sunčana Smith"]
          },
          { name: groups.mem, topic: "Group work" },
          { name: groups.cc1, topic: "Chemprint", people: ["Mathis Grelier", "Philippa Petersen"] },
          { name: groups.cc2, topic: "Group work" }
        ]
      },
      {
        time: "12:45–14:00",
        title: "Lunch"
      },
      {
        time: "14:00–16:00",
        title: "Invited talk + contributed talks",
        talks: [
          "Invited: Dr. Christian Wick (FAU Erlangen-Nürnberg, Germany)",
          "Contributed: Maja Milas, Mathis Grelier and Nicolas Miani"
        ]
      },
      {
        time: "16:30–18:30",
        title: "Workshop: Hands-on image analysis",
        detail: "Dr. Sara Kaliman: Advanced techniques in image and data analysis."
      },
      {
        time: "18:00–19:00",
        title: "Parallel breakout session (continues over dinner)",
        tracks: [{ name: groups.cc1, topic: "Catalysis", people: ["Arsha Cherian", "Tanja Retzer"] }]
      },
      {
        time: "19:00–20:00",
        title: "Dinner"
      },
      {
        time: "20:00–21:00",
        title: "Out in town"
      }
    ]
  },
  {
    date: "13 October 2026",
    sessions: [
      {
        time: "9:00–11:00",
        title: "Data management session"
      },
      {
        time: "11:15–",
        title: "Conclusion reports"
      },
      {
        time: "12:45–14:00",
        title: "Lunch"
      },
      {
        time: "14:00–16:00",
        title: "Career planning",
        detail: "With Prof. Dr. Ana-Sunčana Smith."
      }
    ]
  }
];
