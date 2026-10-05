export type ProgrammeDay = {
  date: string;
  sessions: {
    title: string;
    detail: string;
  }[];
};

export const programme: ProgrammeDay[] = [
  {
    date: "9 October 2026",
    sessions: [
      {
        title: "Introductory Note · 18:00–19:00",
        detail: "Opening remarks introducing the retreat programme."
      },
      {
        title: "Welcome cocktail + dinner · 19:00–21:30",
        detail: "Informal welcome reception and dinner to open the retreat."
      }
    ]
  },
  {
    date: "10 October 2026",
    sessions: [
      {
        title: "Invited talk — Biophysics · 9:00–9:30",
        detail:
          "Prof. Dr. Kheya Sengupta (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)."
      },
      {
        title: "Invited talk — Robotics and Soft Active Matter · 9:30–10:00",
        detail: "Prof. Dr. Nicolas Vandewalle (University of Liège, Belgium)."
      },
      {
        title: "Early-career researcher talks · 10:00–10:40",
        detail:
          "Sanjay Vinod Kumar (Computational Chemistry) and Filip Novkoski (Robotics and Soft Active Matter)."
      },
      {
        title: "Break · 10:45–11:20",
        detail: "Scheduled break between sessions."
      },
      {
        title: "Parallel sessions · 11:20–12:15",
        detail:
          "Conference Room 1 — Robotics and Soft Active Matter: Prajol Shrestha, Jocelyn Dupont; flash talk by Gollapudi Prabhu Nithin. Conference Room 3 — Computational Chemistry: Rupam Gayen, Bariscan Arican; flash talk by Preetam Sai Krothappalli."
      },
      {
        title: "Lunch · 12:15–14:00",
        detail: "Lunch break."
      },
      {
        title: "Invited talk — Computational Chemistry · 14:00–14:30",
        detail: "Dr. Christian Wick (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        title: "Parallel sessions · 14:30–15:25",
        detail:
          "Conference Room 1 — Computational Chemistry: Rustam Durdyyev, Arsha Cherian; flash talk by Philippa Petersen. Conference Room 3 — Biophysics: Dorijan Vulić, Nicolas Miani; flash talk by Elina Wagner."
      },
      {
        title: "Break · 15:25–16:00",
        detail: "Scheduled break between sessions."
      },
      {
        title: "Brainstorming session · 16:00–17:30",
        detail: "Open discussion and brainstorming time for the group."
      }
    ]
  },
  {
    date: "11 October 2026",
    sessions: [
      {
        title: "Invited talk — Computational Chemistry · 9:00–9:30",
        detail: "Prof. Dr. Marco Haumann (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        title: "Invited talk — Robotics and Soft Active Matter · 9:30–10:00",
        detail: "Prof. Dr. Andreas Maier (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        title: "Early-career researcher talks · 10:00–10:40",
        detail: "Sampanna Pahi (Computational Chemistry) and Madhura Ramani (Biophysics)."
      },
      {
        title: "Break · 10:45–11:20",
        detail: "Scheduled break between sessions."
      },
      {
        title: "Invited talk — Biophysics · 11:20–11:50",
        detail:
          "Dr. Etienne Loiseau (Centre Interdisciplinaire de Nanoscience de Marseille (CINaM), France)."
      },
      {
        title: "Early-career researcher talks · 11:50–12:30",
        detail: "Mathis Grelier (Biophysics) and Siddhant Mohapatra (Robotics and Soft Active Matter)."
      },
      {
        title: "Lunch · 12:35–14:30",
        detail: "Lunch break."
      },
      {
        title: "Free time / leisure · 14:30–17:30",
        detail: "Free afternoon for leisure and informal exchange."
      }
    ]
  },
  {
    date: "12 October 2026",
    sessions: [
      {
        title: "Invited talk — Computational Chemistry · 9:00–9:30",
        detail: "Dr. Tanja Retzer (FAU Erlangen-Nürnberg, Germany)."
      },
      {
        title: "Invited talk — Robotics and Soft Active Matter · 9:30–10:00",
        detail: "Dr. Piotr Nowakowski (Institut Ruđer Bošković, Croatia)."
      },
      {
        title: "Parallel sessions · 10:00–10:40",
        detail:
          "Conference Room 1 — Biophysics: Narmin Abasova, Maja Milas. Conference Room 3 — Computational Chemistry: Lea Čolakić; flash talks by Christian Kreiger and Beatrice Anne Maquilan."
      },
      {
        title: "Break · 10:45–11:20",
        detail: "Scheduled break between sessions."
      },
      {
        title: "Brainstorming session · 11:20–12:30",
        detail: "Open discussion and brainstorming time for the group."
      },
      {
        title: "Lunch · 12:30–14:00",
        detail: "Lunch break."
      },
      {
        title: "Invited talk — Biophysics · 14:00–14:30",
        detail: "Dr. Sara Kaliman (Max-Planck-Institut für die Physik des Lichts, Germany)."
      },
      {
        title: "Brainstorming + Report Writing session · 14:35–17:30",
        detail: "Continued brainstorming, extending into collaborative report writing."
      }
    ]
  },
  {
    date: "13 October 2026",
    sessions: [
      {
        title: "What does it take to make it in academia? + Formal End Note · 9:00–10:10",
        detail:
          "Panel discussion with Prof. Dr. Ana-Sunčana Smith and other PIs on academic careers, followed by the formal end note of the retreat."
      },
      {
        title: "Data Management · 10:10–12:10",
        detail: "Data management session led by PULS/IRB."
      },
      {
        title: "Lunch · 12:10–13:30",
        detail: "Lunch break."
      },
      {
        title: "Departure from Zadar · 14:30",
        detail: "Coordinated departure from the retreat venue."
      }
    ]
  }
];
