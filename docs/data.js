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
 *  - To add a sponsor: add an entry to SPONSORS. Drop the logo file
 *    in  assets/sponsors/  and reference it like
 *    "assets/sponsors/together.png". url is optional.
 * ============================================================ */

const NEWS = [
  {
    date: "Aug 1, 2026",
    text: "Cornell RLRS is officially partnering with Verda AI, whose A100 compute will power the research track of our seminar 🚀",
  },
  {
    date: "Jul 11, 2026",
    text: "Seminars will be held weekly on Saturdays at 3:00 p.m. If you can't make it live, recordings and materials will be released publicly every Sunday at 4:00 p.m. 😸",
  },
  {
    date: "Jul 8, 2026",
    text: "We're opening up this reading group to the ML community. If you're interested in the algorithmic foundations of RL and want to go deeper than skimming abstracts come join us :)",
  },
  {
    date: "Jul 1, 2026",
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
    topic: "Foundations: MDPs, Imitation Learning",
    paper: "A Reduction of Imitation Learning to NGOL",
    paperUrl: "https://arxiv.org/abs/1011.0686",
    presenter: "Carrie Chen",
    materials: {
      names: ["Slides ·", "Nan's Notes ·", "Invitation to Imitation", ],
      links: [
        "slides/week_2_dagger.pdf",
        "https://nanjiang.cs.illinois.edu/files/cs542f22/note1.pdf",
        "https://publications.ri.cmu.edu/storage/publications/pub_files/2015/3/InvitationToImitation_3_1415.pdf",
      ],
    },
  },
    {
    date: "Aug 01, 2026",
    topic: "RL in Industry #1: Together AI",
    paper: "When RL Meets Adaptive Speculative Training",
    paperUrl: "https://aurora-spec-ai.github.io/",
    presenter: "Zhong Zhu Zhou",
    materials: { 
      names : ["Slides  ·","Spec Dec  ·", "Async RL ·", "FSDP"], 
      links: ["x", 
        "https://arxiv.org/pdf/2211.17192",
        "https://arxiv.org/pdf/1602.01783", 
        "https://engineering.fb.com/2021/07/15/open-source/fsdp/"]
     
    },
  },    
   
  {
    date: "Aug 08, 2026",
    topic: "RL in Industry #2: Doordash AI",
    paper: "Scaling is All You Need",
    paperUrl: "https://arxiv.org/abs/2312.15122",
    presenter: "Andreas Pasternak",
    materials: {
      names: ["Slides ·","Jax notes ·","Scaling RL for LLMs"],
      links: ["slides/week_4_doordash.pdf",
        "https://johnwlambert.github.io/jax-tutorial/",
        "https://arxiv.org/pdf/2510.13786"]
     
    },
  },

    {
    date: "Aug 09, 2026",
    topic: "A Taxonomy of Policy Gradients Methods",
    paper: "Proximal Policy Optimization Algorithms",
    paperUrl: "https://arxiv.org/pdf/1707.06347",
    presenter: "Carrie Chen",
    materials: {
      names: ["Slides ·", "Demo ·", "Reinforce for LLMs"],
      links: ["slides/week_45_pg.pdf",
        "https://github.com/xikronz/rl-reading-group/tree/main/demos/week_45_pg", 
        "https://arxiv.org/pdf/2402.03300"]
    },
  },

    {
    date: "Aug 15, 2026",
    topic: "RL in Industry #3: Patronus AI",
    paper: "Building Generative Simulators for AGI",
    paperUrl: "TBD",
    presenter: "Darshan Deshpande",
    materials: {
      names: ["Slides  ·", "Demo  ·", "RL Environments"], 
      links: ["x", "x", "https://huggingface.co/spaces/AdithyaSK/rl-environments-guide"]
     },
  },

      {
    date: "Aug 15, 2026",
    topic: "RL in Industry #4: Applied Compute",
    paper: "Predicting and Controlling Staleness in Async RL",
    paperUrl: "https://www.appliedcompute.com/research/staleness-in-fully-async-rl",
    presenter: "Chengyu Dong", 
    materials: { names: ["Slides ·", "M2PO ·", "Staleflow "],
      links: ["x", "https://infini-ai-lab.github.io/M2PO/", "https://arxiv.org/pdf/2601.12784"]
     },
  },

];

const SPONSORS = [
  {
    name: "Verda AI",
    logo: "assets/sponsors/verda.png",
    url: "https://verda.com/",
  },
  {
    name: "Benchflow",
    logo: "assets/sponsors/benchflow.png",
    url: "http://benchflow.ai/",
  },
];
