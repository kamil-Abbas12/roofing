// src/data/blogs.ts

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: { bold?: string; text: string }[] }
  | { type: "closing"; text: string }
  | { type: "pro_tip"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  caption: string;
  category: "Roof Repair" | "Roof Installation" | "Roof Maintenance";
  readTime: string;
  image: string;
  content: ContentBlock[];
};

export const BLOGS: BlogPost[] = [
  {
    slug: "signs-your-roof-needs-repair",
    title:
      "The Silent Sabotage: Why Roof Moss and Algae Are Costing You Thousands",
    date: "10 March 2025",

    caption:
      'Most homeowners see a bit of green on their roof and think, "I\'ll get to that next summer." The problem? Moss and algae don\'t wait for your schedule. By the time you can see them clearly from the driveway, the damage is already happening under the surface. They aren\'t just sitting on your roof; they are eating it.',

    excerpt:
      "Learn why moss and algae growth on roofs can cause serious structural damage and expensive repairs if ignored.",

    category: "Roof Repair",
    readTime: "5 min read",
    image: "/blog1.webp",

    content: [
      {
        type: "heading",
        text: "Moss: The Structural Sponge",
      },
      {
        type: "paragraph",
        text: "Unlike grass, moss doesn't have traditional roots. Instead, it anchors itself into your shingles. As it grows, it lifts the edges of the shingles, breaking the seal that keeps your home watertight.",
      },
      {
        type: "paragraph",
        text: "Even worse, moss acts like a heavy, wet sponge. It holds onto moisture for weeks, keeping your roof in a constant state of dampness. This leads to:",
      },
      {
        type: "bullets",
        items: [
          { bold: "Rotting wood", text: " in the decking below." },
          { bold: "Mold growth", text: " in your attic." },
          { bold: "Shingle decay", text: " as the granules are eaten away." },
        ],
      },
      {
        type: "heading",
        text: 'Algae: The "Gloeocapsa Magma" Problem',
      },
      {
        type: "paragraph",
        text: "Those black streaks that look like dirt or soot? That's likely Gloeocapsa Magma, a hardy type of algae. It feeds on the limestone filler used in modern shingles.",
      },
      {
        type: "paragraph",
        text: "As the algae eats the limestone, your shingles become brittle, lose their ability to reflect UV rays, and eventually crumble. You aren't just losing curb appeal; you're losing the very material that protects your family from the elements.",
      },
      {
        type: "heading",
        text: "The Insurance Trap",
      },
      {
        type: "paragraph",
        text: 'This is the danger many people don\'t realize until it\'s too late. Many insurance companies now use drones or high-resolution photos to inspect properties. If they see significant moss or algae growth, they may cancel your policy or refuse to renew it, citing "lack of maintenance."',
      },
      {
        type: "paragraph",
        text: "A $500 cleaning today could prevent a $15,000 roof replacement or a denied insurance claim tomorrow.",
      },
      {
        type: "heading",
        text: "Don't DIY the Destruction",
      },
      {
        type: "paragraph",
        text: "Whatever you do, stay away from the pressure washer. Blasting your roof with high-pressure water is the fastest way to strip away your shingles' protective granules and void your warranty.",
      },
      {
        type: "paragraph",
        text: 'True roof health requires a "soft wash" approach using specialized, eco-friendly solutions that kill the root systems of moss and algae without damaging the structure.',
      },
      {
        type: "heading",
        text: "Stop the Spread Today",
      },
      {
        type: "paragraph",
        text: "Your roof is the most expensive \"shield\" your home has. Don't let a tiny plant compromise your biggest investment. If you see green, it's time to act.",
      },
      {
        type: "closing",
        text: "Is your roof under attack? Contact us today for a professional inspection and a safe, effective soft-wash treatment.",
      },
    ],
  },

  {
    slug: "attic-insulation-roof-lifespan",
    title: "Why Your Attic Insulation Affects Your Roof's Lifespan",
    date: "10 April 2026",

    caption:
      "When most homeowners think about roof maintenance, they picture clearing out gutters or checking for missing shingles. But one of the most critical factors for a long-lasting roof isn't actually on the outside. It's hidden in your attic. Proper insulation does more than just lower your energy bills; it acts as a protective barrier that preserves the structural integrity of your entire roofing system. Here is why your attic insulation is the unsung hero of your roof's lifespan.",

    excerpt:
      "Discover how proper attic insulation protects your roof from heat, moisture, and structural damage.",

    category: "Roof Maintenance",
    readTime: "6 min read",
    image: "/blog2.webp",

    content: [
      {
        type: "heading",
        text: 'Preventing the "Slow Cook" (Heat Regulation)',
      },
      {
        type: "paragraph",
        text: "During the scorching summer months, your roof takes a beating from the sun. Without adequate insulation, the heat trapped in your attic can reach temperatures upward of 150°F.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Damage:",
            text: ' This extreme heat radiates upward, effectively "baking" your shingles from the inside out.',
          },
          {
            bold: "The Result:",
            text: " Overheated shingles become brittle, lose their protective granules, and warp prematurely. Good insulation keeps that heat from building up, ensuring your shingles stay within a safe temperature range.",
          },
        ],
      },
      {
        type: "heading",
        text: "Eliminating Ice Dams in Winter",
      },
      {
        type: "paragraph",
        text: "In colder climates, insulation is your first line of defense against the dreaded ice dam. Ice dams occur when heat escapes from your living space into the attic, warming the roof deck and melting the snow above.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Cycle:",
            text: " The melted snow runs down to the eaves (the coldest part of the roof), where it refreezes into a thick band of ice.",
          },
          {
            bold: "The Risk:",
            text: " This ice prevents further snowmelt from draining, forcing water back up and under your shingles. This leads to rotted wood, mold, and interior leaks that can shave a decade off your roof's life.",
          },
        ],
      },
      {
        type: "heading",
        text: "Managing Moisture and Condensation",
      },
      {
        type: "paragraph",
        text: "It's a common misconception that insulation is only about temperature. It's also about moisture control. When warm, moist air from your home (from showers, cooking, and breathing) rises into a cold attic, it hits the underside of the roof deck and condenses into water droplets.",
      },
      {
        type: "pro_tip",
        text: "Without proper insulation and a vapor barrier, your attic becomes a petri dish for mold and mildew, which can rot the plywood sheathing that holds your shingles in place.",
      },
      {
        type: "heading",
        text: "Reducing Structural Stress",
      },
      {
        type: "paragraph",
        text: "Extreme temperature fluctuations cause your roofing materials to expand and contract. This is known as thermal shock.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Poor Insulation:",
            text: " Leads to rapid, drastic temperature swings between the attic and the outdoors.",
          },
          {
            bold: "Proper Insulation:",
            text: " Creates a stable thermal buffer. By minimizing these cycles of expansion and contraction, you reduce the stress on the nails, sealant, and wood, preventing 'shingle creep' and structural fatigue.",
          },
        ],
      },
      {
        type: "closing",
        text: "A roof is a significant investment, and your attic insulation is the insurance policy that protects it. If you notice high energy bills, uneven snow melting on your roof, or a stiflingly hot attic, it's time to check your R-value.",
      },
    ],
  },

  {
    slug: "choosing-the-right-roof",
    title: "Why Spring is the Best Time to Schedule a Roof Inspection",
    date: "8 May 2026",

    caption:
      "Spring is the perfect season to inspect your roof after months of winter stress and prevent costly repairs before storm season arrives.",

    excerpt:
      "Discover why spring roof inspections help prevent leaks, extend roof lifespan, and prepare your home for severe weather.",

    category: "Roof Installation",
    readTime: "6 min read",
    image: "/SpringRoofCheck.webp",

    content: [
      {
        type: "paragraph",
        text: "Winter is officially in the rearview mirror. While most homeowners are busy thinking about landscaping and spring cleaning the garage, there's one area that often gets overlooked until it's too late: the roof.",
      },
      {
        type: "paragraph",
        text: "Your roof just spent three to four months battling the harshest elements of the year: freezing temperatures, heavy snow loads, ice dams, and expansion/contraction cycles. Spring isn't just a convenient time for an inspection; it's a critical window for preventative maintenance.",
      },
      {
        type: "paragraph",
        text: "Here is why scheduling your roof check-up now is the smartest move for your home and your wallet.",
      },
      {
        type: "heading",
        text: "Identifying Winter Damage Before the Rain Hits",
      },
      {
        type: "paragraph",
        text: "Winter doesn't always cause immediate, catastrophic leaks. Often, it creates small vulnerabilities. Shingles can crack from the cold, and ice dams can pull gutters away from the roofline or push water under the flashing.",
      },
      {
        type: "paragraph",
        text: 'These issues might stay "silent" during the freezing months, but once the heavy spring thunderstorms arrive, those small cracks become gateways for water damage, mold, and attic rot.',
      },
      {
        type: "heading",
        text: "Ideal Conditions for Repairs",
      },
      {
        type: "paragraph",
        text: 'Roofing materials, specifically asphalt shingles, need thermal sealing to work correctly. Most shingles have a strip of adhesive that requires the sun\'s warmth to "seal" down and create a watertight bond.',
      },
      {
        type: "paragraph",
        text: 'If you wait until summer, the heat can be too intense for workers and can actually make shingles too soft to walk on. Spring provides that "Goldilocks" temperature: warm enough for the materials to set, but cool enough for a thorough, safe installation or repair.',
      },
      {
        type: "pro_tip",
        text: "Don't just look at the shingles. A professional spring inspection includes checking the \"boots\" around your vent pipes and the condition of your chimney flashing, which are the most common failure points after a freeze-thaw cycle.",
      },
      {
        type: "heading",
        text: "Maximizing Your Roof's Lifespan",
      },
      {
        type: "paragraph",
        text: "Think of a spring inspection like an oil change for your car. You aren't necessarily looking for a reason to replace the whole engine; you're making sure it stays running for another 100,000 miles. By catching a few loose granules or a backed-up gutter system in May, you prevent the structural degradation that leads to a full roof replacement years before it's actually due.",
      },
      {
        type: "heading",
        text: "Preparing for Hurricane and Hail Season",
      },
      {
        type: "paragraph",
        text: "Depending on where you live, late spring and early summer often bring high winds and hail. A roof that is already compromised by winter wear is much more likely to suffer major damage during a windstorm. Ensuring your shingles are secure and your deck is solid now gives you a \"fortress\" to withstand the volatile weather ahead.",
      },
      {
        type: "heading",
        text: "Better Contractor Availability",
      },
      {
        type: "paragraph",
        text: "By the time the first major summer storm hits, every roofing company in town will have phones ringing off the hook. If you wait until you actually see a brown spot on your ceiling, you might be waiting weeks for a contractor to show up. Scheduling in early spring allows you to beat the emergency rush, giving you more leverage on scheduling and more focused attention from your inspector.",
      },
      {
        type: "closing",
        text: "Your roof is your home's first line of defense. Taking an hour to have a professional walk the rafters and check the perimeter this spring can save you thousands of dollars in emergency repairs later this year.",
      },
    ],
  },
];

export const CATEGORIES = [
  "Roof Repair",
  "Roof Installation",
  "Roof Maintenance",
] as const;