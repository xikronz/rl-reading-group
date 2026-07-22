/* ============================================================
 * Cornell RL Seminar — site data
 *
 * This is the ONLY file you need to edit for routine updates.
 *
 *  - To post an announcement: add an entry to the top of NEWS.
 *  - To add/update a reading: add or edit an entry in SCHEDULE.
 *  - materials takes two parallel lists: names[i] is the link text
 *    for links[i]. Put anything there — slides, notes, extra papers,
 *    recordings. Put slide files in the  slides/  folder and reference
 *    them like  "slides/2026-09-04-dqn.pdf".
 *  - Leave a field as null (or omit it) if you don't have it yet —
 *    the site renders "TBD" automatically.
 * ============================================================ */

const NEWS = [
  {
    date: "Jul 11, 2026",
    text: "Seminars will be held weekly on Saturdays at 3:00 p.m. If you can't make it live, recordings and materials will be released publicly every Sunday at 4:00 p.m. 😸",
  },
  {
    date: "Jul 8, 2026",
    text: "We're opening up this reading group to the RL/ML community. If you're interested in the algorithmic foundations of RL and want to go deeper than skimming abstracts come join us, all backgrounds welcome :)",
  },
  {
    date: "Jul 3, 2026",
    text: "Super excited to launch this, first meeting of the summer will be announced soon... Sign up for our mailing list to get updates",
  },
];

const SCHEDULE = [
  {
    date: "Jul 19, 2026",
    topic: "Foundations: Online learning, MaxEnt, FTRL",
    paper: "Follow the Regularized Leader",
    paperUrl: "https://proceedings.mlr.press/v15/mcmahan11b/mcmahan11b.pdf",
    presenter: "Carrie Chen",
    materials: {
      names: ["Slides ·", "MaxEnt ·", "CMU notes"],
      links: [
        "slides/week_1_ftrl.pdf",
        "https://www.cs.princeton.edu/courses/archive/spr07/cos424/papers/maxent_icml.pdf",
        "https://www.cs.cmu.edu/~16831-f14/notes/F10/16831_lecture09_beckart/16831_lecture09_beckart.pdf",

      ],
    },
  },
  {
    date: "Jul 25, 2026",
    topic: "Foundations: MDPs, Inverse Learning",
    paper: "TBD",
    paperUrl: "TBD",
    presenter: "TBD",
    materials: {
    },
  },

];
