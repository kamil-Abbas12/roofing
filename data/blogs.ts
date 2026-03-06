// src/data/blogs.ts
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: "Roof Repair" | "Roof Installation" | "Roof Maintenance";
  readTime: string;
  image: string;
  content: string[];
};

export const BLOGS: BlogPost[] = [
  {
    slug: "signs-your-roof-needs-repair",
    title: "5 Warning Signs Your Roof Needs Immediate Repair",
    date: "12 Jan 2025",
    excerpt:
      "Learn the most common warning signs homeowners ignore before a roof leak becomes expensive damage.",
    category: "Roof Repair",
    readTime: "5 min read",
    image: "/roof3.jpg",
    content: [
      "Water stains on ceilings or walls often indicate hidden roof leaks.",
      "Missing or curling shingles expose your home to water damage.",
      "Ignoring small roof damage can lead to costly structural repairs.",
    ],
  },
  {
    slug: "choosing-the-right-roof",
    title: "How To Choose The Right Roofing Material For Your Home",
    date: "12 Jan 2025",
    excerpt:
      "From asphalt shingles to metal roofing, discover the best material for durability, cost, and climate.",
    category: "Roof Installation",
    readTime: "6 min read",
    image: "/roof2.jpg",
    content: [
      "Asphalt shingles remain the most affordable and common roofing option.",
      "Metal roofs last longer and provide better weather resistance.",
      "Climate and budget should guide your roofing material decision.",
    ],
  },
  {
    slug: "extend-roof-lifespan",
    title: "Simple Maintenance Tips To Extend Your Roof Lifespan",
    date: "12 Jan 2025",
    excerpt:
      "Regular roof maintenance can save thousands in repairs and keep your home protected year-round.",
    category: "Roof Maintenance",
    readTime: "4 min read",
    image: "/roof1.jpg",
    content: [
      "Clean gutters regularly to prevent water buildup.",
      "Inspect your roof after storms for missing shingles.",
      "Schedule professional inspections once or twice a year.",
    ],
  },
];

export const CATEGORIES = [
  "Roof Repair",
  "Roof Installation",
  "Roof Maintenance",
] as const;