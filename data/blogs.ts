// src/data/blogs.ts

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  caption: string;
  category: "Roof Repair" | "Roof Installation" | "Roof Maintenance";
  readTime: string;
  image: string;
  content: string[];
};

export const BLOGS: BlogPost[] = [
  {
    slug: "signs-your-roof-needs-repair",
    title:
      "The Silent Sabotage: Why Roof Moss and Algae Are Costing You Thousands",
    date: "12 Jan 2025",

    caption:
      "Most homeowners see a bit of green on their roof and think, 'I'll get to that next summer.' The problem is moss and algae don’t wait. By the time you can see them clearly from the driveway, the damage is already happening beneath the surface.",

    excerpt:
      "Learn why moss and algae growth on roofs can cause serious structural damage and expensive repairs if ignored.",

    category: "Roof Repair",
    readTime: "5 min read",
    image: "/blog1.webp",

    content: [
      "Moss: The Structural Sponge. Unlike grass, moss doesn’t have traditional roots. Instead it anchors itself into your shingles. As it grows, it lifts the edges of the shingles and breaks the seal that keeps your home watertight.",

      "Even worse, moss acts like a heavy wet sponge. It holds moisture for weeks, keeping your roof constantly damp. This leads to rotting wood in the roof decking, mold growth in the attic, and faster shingle decay.",

      "Algae: The Gloeocapsa Magma Problem. Those black streaks that look like dirt or soot are often a type of algae called Gloeocapsa Magma. It feeds on the limestone used in many modern shingles.",

      "As the algae consumes the limestone, shingles become brittle and lose their ability to reflect UV rays. Over time they weaken, crack, and eventually fail.",

      "The Insurance Trap. Many insurance companies now inspect homes using drones. If they see heavy moss or algae growth they may cancel or refuse to renew your policy because it indicates poor maintenance.",

      "A simple $500 professional roof cleaning today could prevent a $15,000 roof replacement tomorrow.",

      "Never pressure wash your roof. High pressure strips away protective shingle granules and can void your roof warranty. Professionals use a soft-wash treatment that safely removes moss and algae without damaging the roof.",

      "Your roof is your home's most important shield. If you see green growth or black streaks, it's time to act before small problems turn into major repairs.",
    ],
  },

  {
    slug: "choosing-the-right-roof",
    title: "How To Choose The Right Roofing Material For Your Home",
    date: "12 Jan 2025",

    caption:
      "Choosing the right roofing material can dramatically impact the durability, cost, and energy efficiency of your home.",

    excerpt:
      "From asphalt shingles to metal roofing, discover the best material for durability, cost, and climate.",

    category: "Roof Installation",
    readTime: "6 min read",
    image: "/roof2.webp",

    content: [
      "Asphalt shingles remain the most affordable and common roofing option for homeowners.",

      "Metal roofs last significantly longer than traditional shingles and provide strong resistance against extreme weather.",

      "Climate, budget, and long-term maintenance should guide your final roofing material decision.",
    ],
  },

  {
    slug: "extend-roof-lifespan",
    title: "Simple Maintenance Tips To Extend Your Roof Lifespan",
    date: "12 Jan 2025",

    caption:
      "Regular inspections and maintenance can dramatically extend the life of your roof and prevent costly repairs.",

    excerpt:
      "Regular roof maintenance can save thousands in repairs and keep your home protected year-round.",

    category: "Roof Maintenance",
    readTime: "4 min read",
    image: "/roof1.webp",

    content: [
      "Clean your gutters regularly to prevent water buildup that can damage shingles and roof edges.",

      "Inspect your roof after storms for missing or damaged shingles that may expose the roof structure.",

      "Schedule professional roof inspections at least once or twice a year to catch issues early.",
    ],
  },
];

export const CATEGORIES = [
  "Roof Repair",
  "Roof Installation",
  "Roof Maintenance",
] as const;