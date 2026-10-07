export type Group = {
  code: string;
  name: string;
  tint: string;
};

export type Track = {
  group?: Group;
  title?: string; // heading for boxes that are not group sessions
  time?: string; // when it differs from the slot's time
  offset?: number; // fraction of the slot that passes before this track starts
  topic?: string;
  people?: string[];
  detail?: string;
};

export type Cell =
  | { kind: "talks"; invited: string[]; contributed?: string[] }
  | { kind: "break"; label: string }
  | { kind: "event"; label: string }
  | { kind: "tracks"; tracks: Track[] }
  | { kind: "empty" };

export type Slot = {
  time: string;
  note?: string;
  minHeight?: string; // leaves room for offset tracks to start part-way down the row
  cells: Cell[]; // one per entry in `days`
};

// Parallel group-session tracks, tinted with the same colours as the organisers' schedule
const groups = {
  im: { code: "IM", name: "Intelligent Materials", tint: "bg-[#d6e6ff]" },
  mem: { code: "MEM", name: "Biophysics: Membranes", tint: "bg-[#f3f8f6]" },
  tiss: { code: "TISS", name: "Biophysics: Tissues", tint: "bg-[#efe1fb]" },
  cc1: { code: "CC1", name: "Computational Chemistry 1", tint: "bg-[#fff4e5]" },
  cc2: { code: "CC2", name: "Computational Chemistry 2", tint: "bg-[#fde2e4]" },
  cc3: { code: "CC3", name: "Computational Chemistry 3", tint: "bg-[#e5e5e5]" }
} satisfies Record<string, Group>;

export const breakoutGroups: Group[] = Object.values(groups);

export const arrivalDay = {
  day: "Friday, 9 October",
  sessions: [
    { time: "18:00–19:00", title: "Introductory note" },
    { time: "19:00–21:30", title: "Welcome cocktail + dinner" }
  ]
};

export const days = [
  "Saturday, 10 October",
  "Sunday, 11 October",
  "Monday, 12 October",
  "Tuesday, 13 October"
];

const lunch: Cell = { kind: "break", label: "Lunch" };
const dinner: Cell = { kind: "break", label: "Dinner" };
const empty: Cell = { kind: "empty" };

export const slots: Slot[] = [
  {
    time: "9:00–10:30",
    note: "Invited talks (approx. 30 min each)",
    cells: [
      { kind: "talks", invited: ["Prof. Dr. Kheya Sengupta", "Prof. Dr. Nicolas Vandewalle"] },
      { kind: "talks", invited: ["Prof. Dr. Marco Haumann", "Prof. Dr. Andreas Maier"] },
      { kind: "talks", invited: ["Dr. Tanja Retzer", "Dr. Piotr Nowakowski"] },
      { kind: "tracks", tracks: [{ title: "Data management session", time: "9:00–11:00" }] }
    ]
  },
  {
    time: "10:45–12:45",
    note: "Pilot breakout sessions",
    cells: [
      {
        kind: "tracks",
        tracks: [
          { group: groups.im, people: ["Nicolas Vandewalle", "Andreas Maier"] },
          { group: groups.mem, people: ["Kheya Sengupta"] },
          { group: groups.tiss, people: ["Ana-Sunčana Smith"] },
          { group: groups.cc1, people: ["Christian Wick"] },
          { group: groups.cc2, people: ["Rupam Gayen"] }
        ]
      },
      {
        kind: "tracks",
        tracks: [
          { group: groups.im, topic: "Cell", people: ["Jocelyn Dupont", "Siddhant Mohapatra"] },
          { group: groups.mem, topic: "Patterning", people: ["Piotr Nowakowski", "Etienne Loiseau"] },
          { group: groups.tiss, topic: "Nuclear response", people: ["Madhura Ramani", "Mathis Grelier"] },
          {
            group: groups.cc1,
            topic: "Particles in pores",
            people: ["Beatrice Anne Maquilan", "Rupam Gayen", "Rustam Durdyyev"]
          },
          { group: groups.cc2, topic: "FRASCAL paper writing" },
          { group: groups.cc3, topic: "Milling proposal drafting" }
        ]
      },
      {
        kind: "tracks",
        tracks: [
          {
            group: {
              code: `${groups.im.code} + ${groups.tiss.code}`,
              name: `${groups.im.name} + ${groups.tiss.name}`,
              tint: groups.im.tint
            },
            people: ["Filip Novkoski", "Madhura Ramani", "Maja Milas", "Ana-Sunčana Smith"]
          },
          { group: groups.mem, topic: "Group work" },
          { group: groups.cc1, topic: "Chemprint", people: ["Mathis Grelier", "Philippa Petersen"] },
          { group: groups.cc2, topic: "Group work" }
        ]
      },
      { kind: "tracks", tracks: [{ title: "Conclusion reports", time: "From 11:15" }] }
    ]
  },
  {
    time: "12:45–14:00",
    cells: [lunch, lunch, lunch, lunch]
  },
  {
    time: "14:00–16:00",
    note: "Invited talk (approx. 30 min) + contributed talks (approx. 15 min each)",
    cells: [
      {
        kind: "talks",
        invited: ["Dr. Sara Kaliman"],
        contributed: ["Filip Novkoski", "Rupam Gayen", "Lea Čolakić"]
      },
      {
        kind: "talks",
        invited: ["Dr. Etienne Loiseau"],
        contributed: ["Siddhant Mohapatra", "Sanjay Vinod Kumar", "Rustam Durdyyev"]
      },
      {
        kind: "talks",
        invited: ["Dr. Christian Wick"],
        contributed: ["Maja Milas", "Mathis Grelier", "Nicolas Miani"]
      },
      {
        kind: "tracks",
        tracks: [{ title: "Career planning", people: ["Prof. Dr. Ana-Sunčana Smith"] }]
      }
    ]
  },
  {
    time: "16:30–18:30",
    note: "Breakout sessions and hands-on workshops",
    minHeight: "26rem",
    cells: [
      {
        kind: "tracks",
        tracks: [
          { group: groups.im, topic: "Many-body bots", people: ["Gollapudi Prabhu Nithin", "Prajol Shrestha"] },
          { group: groups.mem, topic: "Actin waves", people: ["Nicolas Miani", "Dorijan Vulić"] },
          { group: groups.tiss, topic: "Stretch", people: ["Mathis Grelier", "Madhura Ramani"] },
          { group: groups.cc1, topic: "FRASCAL", people: ["Bariscan Arican", "Sampanna Pahi"] },
          { group: groups.cc2, topic: "Milling paper drafting" }
        ]
      },
      {
        kind: "tracks",
        tracks: [
          {
            title: "Hands-on AI",
            people: ["Prof. Dr. Andreas Maier"],
            detail: "ML applications in day-to-day research problems. Bring your own problem!"
          },
          {
            group: groups.tiss,
            time: "18:00–19:00 + dinner",
            offset: 0.75,
            topic: "FK",
            people: ["Elina Wagner", "Narmin Abasova"]
          }
        ]
      },
      {
        kind: "tracks",
        tracks: [
          {
            title: "Hands-on image analysis",
            people: ["Dr. Sara Kaliman"],
            detail: "Advanced techniques in image and data analysis."
          },
          {
            group: groups.cc1,
            time: "18:00–19:00 + dinner",
            offset: 0.75,
            topic: "Catalysis",
            people: ["Arsha Cherian", "Tanja Retzer"]
          }
        ]
      },
      empty
    ]
  },
  {
    time: "19:00–20:00",
    cells: [dinner, dinner, dinner, empty]
  },
  {
    time: "20:00–21:00",
    cells: [
      { kind: "event", label: "PULS Group Meeting" },
      { kind: "event", label: "Team building (beach volleyball)" },
      { kind: "event", label: "Out in town" },
      empty
    ]
  }
];
