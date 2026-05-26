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
    image: "/roof-moss-and-algae-damage.webp",

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
    image: "/attic-insulation-roof-maintenance.webp",

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
{
    slug: "why-are-my-shingles-curling",
    title: "Why Are My Shingles Curling? (And How to Fix It)",
    date: "27 May 2026",
 
    caption:
      "Seeing your roof shingles starting to curl can be a stressful sight. Your roof is your home's primary defense against the elements, and when shingles begin to lift, cup, or claw, it's a clear warning sign that something is wrong underneath. If you've noticed the edges of your shingles turning upward or buckling in the middle, you're likely wondering what's causing it and, more importantly, how much it's going to cost to fix.",
 
    excerpt:
      "Learn exactly why roof shingles curl — from poor ventilation to aging — and the best ways to fix it before it turns into a costly leak.",
 
    category: "Roof Repair",
    readTime: "5 min read",
    image: "/curling-roof-shingles-repair.webp",
 
    content: [
      {
        type: "paragraph",
        text: "Here is a straightforward look at exactly why roof shingles curl and the best ways to address the issue before it turns into a costly leak.",
      },
      {
        type: "heading",
        text: "What Does Curling Look Like? (The Two Types)",
      },
      {
        type: "paragraph",
        text: "Shingle curling generally presents itself in one of two ways, and identifying the shape can sometimes give you a hint as to the underlying cause:",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Cupping:",
            text: " This happens when the edges of the shingle turn upward, creating a concave center. It looks like the shingle is trying to form a small cup.",
          },
          {
            bold: "Clawing:",
            text: " This is the opposite. The center of the shingle bulges upward while the edges curl downward, digging into the roof like a claw.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Regardless of whether your shingles are cupping or clawing, both mean the shingle is losing its structural integrity and its ability to shed water properly.",
      },
      {
        type: "heading",
        text: "The Root Causes: Why Shingles Curl",
      },
      {
        type: "paragraph",
        text: "Shingles don't just curl out of nowhere. Usually, it's a symptom of one of four common roofing issues.",
      },
      {
        type: "heading",
        text: "1. Poor Attic Ventilation (The #1 Culprit)",
      },
      {
        type: "paragraph",
        text: "If your attic doesn't have adequate airflow, heat and moisture get trapped directly under your roof decking. During hot months, your attic becomes a literal oven, baking the shingles from the inside out. In the winter, trapped moisture can cause the roof decking to swell and warp, forcing the shingles attached to it to buckle and curl.",
      },
      {
        type: "heading",
        text: "2. High Trapped Moisture",
      },
      {
        type: "paragraph",
        text: "If a roof was installed over an old, damp roof layer, or if moisture was trapped in the decking during installation, that trapped water will eventually try to escape. As it evaporates upward, it pushes against the underside of the shingles, causing them to warp.",
      },
      {
        type: "heading",
        text: "3. Aging and Natural Wear",
      },
      {
        type: "paragraph",
        text: "As asphalt shingles age, they naturally lose their volatile oils and defensive granules due to constant UV exposure. Over 15 to 20 years, the shingles become dry, brittle, and prone to shrinking. When they shrink, the edges inevitably begin to curl.",
      },
      {
        type: "heading",
        text: "4. Faulty Installation",
      },
      {
        type: "paragraph",
        text: "Sometimes, the issue goes back to day one. If the roofing crew didn't use enough nails per shingle, or if the nails were placed too high up on the shingle strip, the shingles won't stay flat. Additionally, if the manufacturer's sealant strip failed to activate properly during a cold-weather installation, high winds can easily lift and curl the edges.",
      },
      {
        type: "heading",
        text: "How to Fix Curling Shingles",
      },
      {
        type: "paragraph",
        text: "The right fix depends entirely on how widespread the problem is and how old the roof is.",
      },
      {
        type: "heading",
        text: "Spot Repairs (For Isolated Issues)",
      },
      {
        type: "paragraph",
        text: "If your roof is relatively new and only a few shingles are curling — perhaps due to localized wind damage or a couple of loose nails — a roofer can often perform a targeted repair.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " The damaged shingles are carefully removed, and new shingles are woven in, nailed down securely, and sealed with roofing cement.",
          },
        ],
      },
      {
        type: "heading",
        text: "Improving Attic Ventilation (For Systemic Issues)",
      },
      {
        type: "paragraph",
        text: "If the curling is widespread but the shingles themselves aren't expired yet, fixing the underlying cause is priority number one.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " A roofing professional can assess your intake (soffit) vents and exhaust (ridge/gable) vents to ensure proper airflow. Adding a ridge vent or attic fan can dramatically lower attic temperatures and stop further curling in its tracks.",
          },
        ],
      },
      {
        type: "heading",
        text: "Full Roof Replacement (For Aging Roofs)",
      },
      {
        type: "paragraph",
        text: "If your roof is over 15–20 years old and shingles are curling across multiple slopes, repairs are simply a temporary band-aid. The shingles have reached the end of their lifespan.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " A full tear-off and replacement ensures you get a dry, sturdy new deck, proper modern underlayment, and a fresh layer of shingles that will protect your home for decades to come.",
          },
        ],
      },
      {
        type: "pro_tip",
        text: "It can be tempting to climb up a ladder with a tube of roofing caulk and try to glue curling shingles back down. However, brittle shingles will often crack or break entirely if you try to bend them back into place. Furthermore, walking on a compromised roof can be dangerous and may void any remaining manufacturer warranties.",
      },
      {
        type: "closing",
        text: "If you spot curling shingles, don't wait for the next heavy rainstorm to see if they leak. Catching the issue early usually means more affordable repair options are still on the table. Have a trusted local roofing professional inspect the roof to determine whether a quick ventilation upgrade or a targeted repair can save you thousands.",
      },
    ],
  },
];
 
export const CATEGORIES = [
  "Roof Repair",
  "Roof Installation",
  "Roof Maintenance",
] as const;