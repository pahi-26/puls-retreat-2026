export type ProgrammeDay = {
  date: string;
  sessions: {
    time: string;
    title: string;
    detail: string;
  }[];
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
        time: "9:00–9:30",
        title: "Invited talk — Biophysics",
        detail:
          "Prof. Dr. Kheya Sengupta (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)."
      },
      {
        time: "9:30–10:00",
        title: "Invited talk — Robotics and Soft Active Matter",
        detail: "Prof. Dr. Nicolas Vandewalle (University of Liège, Belgium)."
      },
      {
        time: "10:00–10:40",
        title: "Early-career researcher talks",
        detail:
          "Sanjay Vinod Kumar (Computational Chemistry) and Filip Novkoski (Robotics and Soft Active Matter)."
      },
      {
        time: "10:45–11:20",
        title: "Break",
        detail: "Scheduled break between sessions."
      },
      {
        time: "11:20–12:15",
        title: "Parallel sessions",
        detail:
          "Conference Room 1 — Robotics and Soft Active Matter: Prajol Shrestha, Jocelyn Dupont; flash talk by Gollapudi Prabhu Nithin. Conference Room 3 — Computational Chemistry: Rupam Gayen, Bariscan Arican; flash talk by Preetam Sai Krothappalli."
      },
      {
        time: "12:15–14:00",
        title: "Lunch",
        detail: "Lunch break."
      },
      {
        time: "14:00–14:30",
        title: "Invited talk — Computational Chemistry",
        detail: "Dr. Christian Wick (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        time: "14:30–15:25",
        title: "Parallel sessions",
        detail:
          "Conference Room 1 — Computational Chemistry: Rustam Durdyyev, Arsha Cherian; flash talk by Philippa Petersen. Conference Room 3 — Biophysics: Dorijan Vulić, Nicolas Miani; flash talk by Elina Wagner."
      },
      {
        time: "15:25–16:00",
        title: "Break",
        detail: "Scheduled break between sessions."
      },
      {
        time: "16:00–17:30",
        title: "Brainstorming session",
        detail: "Open discussion and brainstorming time for the group."
      }
    ]
  },
  {
    date: "11 October 2026",
    sessions: [
      {
        time: "9:00–9:30",
        title: "Invited talk — Computational Chemistry",
        detail: "Prof. Dr. Marco Haumann (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        time: "9:30–10:00",
        title: "Invited talk — Robotics and Soft Active Matter",
        detail: "Prof. Dr. Andreas Maier (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        time: "10:00–10:40",
        title: "Early-career researcher talks",
        detail: "Sampanna Pahi (Computational Chemistry) and Madhura Ramani (Biophysics)."
      },
      {
        time: "10:45–11:20",
        title: "Break",
        detail: "Scheduled break between sessions."
      },
      {
        time: "11:20–11:50",
        title: "Invited talk — Biophysics",
        detail:
          "Dr. Etienne Loiseau (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)."
      },
      {
        time: "11:50–12:30",
        title: "Early-career researcher talks",
        detail: "Mathis Grelier (Biophysics) and Siddhant Mohapatra (Robotics and Soft Active Matter)."
      },
      {
        time: "12:35–14:30",
        title: "Lunch",
        detail: "Lunch break."
      },
      {
        time: "14:30–17:30",
        title: "Free time / leisure",
        detail: "Free afternoon for leisure and informal exchange."
      }
    ]
  },
  {
    date: "12 October 2026",
    sessions: [
      {
        time: "9:00–9:30",
        title: "Invited talk — Computational Chemistry",
        detail: "Dr. Tanja Retzer (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        time: "9:30–10:00",
        title: "Invited talk — Robotics and Soft Active Matter",
        detail: "Dr. Piotr Nowakowski (Institut Ruđer Bošković, Croatia)."
      },
      {
        time: "10:00–10:40",
        title: "Parallel sessions",
        detail:
          "Conference Room 1 — Biophysics: Narmin Abasova, Maja Milas. Conference Room 3 — Computational Chemistry: Lea Čolakić; flash talks by Christian Kreiger and Beatrice Anne Maquilan."
      },
      {
        time: "10:45–11:20",
        title: "Break",
        detail: "Scheduled break between sessions."
      },
      {
        time: "11:20–12:30",
        title: "Brainstorming session",
        detail: "Open discussion and brainstorming time for the group."
      },
      {
        time: "12:30–14:00",
        title: "Lunch",
        detail: "Lunch break."
      },
      {
        time: "14:00–14:30",
        title: "Invited talk — Biophysics",
        detail: "Dr. Sara Kaliman (Max-Planck-Institut für die Physik des Lichts, Germany)."
      },
      {
        time: "14:35–17:30",
        title: "Brainstorming + Report Writing session",
        detail: "Continued brainstorming, extending into collaborative report writing."
      }
    ]
  },
  {
    date: "13 October 2026",
    sessions: [
      {
        time: "9:00–10:10",
        title: "What does it take to make it in academia? + Formal End Note",
        detail:
          "Panel discussion with Prof. Dr. Ana-Sunčana Smith and other PIs on academic careers, followed by the formal end note of the retreat."
      },
      {
        time: "10:10–12:10",
        title: "Data Management",
        detail: "Data management session led by PULS/IRB."
      },
      {
        time: "12:10–13:30",
        title: "Lunch",
        detail: "Lunch break."
      },
      {
        time: "14:30",
        title: "Departure from Zadar",
        detail: "Coordinated departure from the retreat venue."
      }
    ]
  }
];
