export type ProgrammeDay = {
  date: string;
  label: string;
  accent: string;
  overview: string;
  sessions: {
    title: string;
    detail: string;
  }[];
};

export const programme: ProgrammeDay[] = [
  {
    date: "9 October 2026",
    label: "Arrival",
    accent: "from-[#efe6ff] to-[#e0f2ef]",
    overview:
      "A soft opening shaped around arrival, orientation, and the first shared scientific frame.",
    sessions: [
      {
        title: "Afternoon (16:30–17:30)",
        detail:
          "Arrival window in Zadar and informal settling into the retreat rhythm."
      },
      {
        title: "Arrival in Zadar (~15:35)",
        detail:
          "Participants converge from travel into the opening retreat setting."
      },
      {
        title: "Introductory talk (18:00-19:00)",
        detail:
          "Opening scientific orientation and framing for the interdisciplinary week ahead."
      }
    ]
  },
  {
    date: "10 October 2026",
    label: "Biophysics",
    accent: "from-[#e4edff] to-[#f7fbff]",
    overview:
      "The first full day centers physical approaches to living systems across invited and early-career perspectives.",
    sessions: [
      {
        title: "Morning — 2 Invited Talks",
        detail:
          "Lead sessions establishing the biophysics theme and shared conceptual ground."
      },
      {
        title: "Morning — 5 ECR Talks",
        detail:
          "Early-career research presentations spanning methods, theory, and applications."
      },
      {
        title: "Afternoon — Discussion Session",
        detail:
          "Structured interdisciplinary discussion to connect results, methods, and open questions."
      },
      {
        title: "Afternoon — 2 Invited Talks",
        detail:
          "Additional keynote-style contributions extending the day's scientific arc."
      },
      {
        title: "Afternoon — 4 ECR Talks",
        detail:
          "A second cluster of short talks to deepen exchange and visibility."
      }
    ]
  },
  {
    date: "11 October 2026",
    label: "Computational Chemistry",
    accent: "from-[#edf8f7] to-[#f6f2ff]",
    overview:
      "A day for molecular modelling, simulation, and computational methods, balanced with a shared recreational pause.",
    sessions: [
      {
        title: "Morning — 2 Invited Talks",
        detail:
          "Invited talks on computational chemistry approaches relevant to life sciences."
      },
      {
        title: "Morning — 6 ECR Talks",
        detail:
          "A broad early-career exchange across simulation, modelling, and computation."
      },
      {
        title: "Afternoon — Recreational Activity",
        detail:
          "A shared excursion and informal space for conversation, reflection, and connection."
      }
    ]
  },
  {
    date: "12 October 2026",
    label: "Outputs",
    accent: "from-[#f4ebff] to-[#eef8f4]",
    overview:
      "The programme turns toward synthesis, discussion, and translating ideas into shared outputs.",
    sessions: [
      {
        title: "Morning — 1 Invited Talk",
        detail:
          "A focused invited contribution bridging the retreat themes toward synthesis."
      },
      {
        title: "Morning — 3 ECR Talks",
        detail:
          "Short talks continuing the exchange while orienting toward collective takeaways."
      },
      {
        title: "Morning — Discussion Session",
        detail:
          "A final thematic discussion to identify convergences, gaps, and next directions."
      },
      {
        title: "Afternoon — Drafting Outputs",
        detail:
          "Collaborative writing and synthesis time for retreat outputs and follow-up ideas."
      }
    ]
  },
  {
    date: "13 October 2026",
    label: "Departure",
    accent: "from-[#eef6ff] to-[#eef7f5]",
    overview:
      "A closing half-day for refinement, data stewardship, and departure.",
    sessions: [
      {
        title: "Morning — Drafting Outputs",
        detail:
          "Final iteration and consolidation of retreat outputs before departure."
      },
      {
        title: "Afternoon — Data Management and Departure",
        detail:
          "Closing logistics, documentation, and coordinated departure from the retreat."
      }
    ]
  }
];
