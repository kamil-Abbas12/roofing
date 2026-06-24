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
    slug: "prepare-roof-for-freezing-winter-temperatures",
    title: "How to Prepare Your Roof for Freezing Winter Temperatures",
    date: "24 June 2026",
 
    caption:
      "When winter drops temperatures below freezing, your roof takes the biggest beating. Snow, ice dams, and constant thawing and freezing can turn a tiny, overlooked roof issue into an expensive indoor waterfall.",
 
    excerpt:
      "A step-by-step winter roof prep checklist covering gutters, shingles, attic insulation, and flashing to help you avoid ice dams and costly leaks before the first hard freeze.",
 
    category: "Roof Maintenance",
    readTime: "6 min read",
    image: "/prepare-roof-for-freezing-winter-temperatures.webp",
 
    content: [
      {
        type: "paragraph",
        text: "Preparing your roof for freezing temperatures isn't just about avoiding leaks. It's about protecting your home's entire structural integrity and keeping your heating bills from skyrocketing.",
      },
      {
        type: "paragraph",
        text: "Here is a practical, step-by-step checklist to get your roof winter-ready before the first hard freeze hits.",
      },
      {
        type: "heading",
        text: "1. Clear the Gutters and Downspouts",
      },
      {
        type: "paragraph",
        text: "This is the single most important winter prep task. If your gutters are choked with autumn leaves and twigs, rainwater and melting snow have nowhere to go.",
      },
      {
        type: "paragraph",
        text: "When that trapped water freezes, it expands, creating heavy ice blocks that can tear gutters right off their brackets. Worse, it leads to ice dams: thick ridges of ice that form at the edge of the roof, trapping water behind them. That trapped water eventually backs up under your shingles and leaks directly into your ceilings and walls.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " Clean your gutters entirely after the last leaves fall. Flush them with a hose to ensure downspouts are draining freely away from your foundation.",
          },
        ],
      },
      {
        type: "heading",
        text: "2. Scan for Damaged, Loose, or Missing Shingles",
      },
      {
        type: "paragraph",
        text: "Freezing winds and heavy snow loads will quickly exploit any weak spots on your roof. Shingles that are already cracked, curling, or entirely missing leave your roof's underlayment completely exposed to moisture.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " Take a walk around your yard with a pair of binoculars to inspect your roof safely from the ground. Look for lifting shingles, missing chunks, or loose flashing around chimneys and vents. If you spot damage, get it repaired before the snow locks it down.",
          },
        ],
      },
      {
        type: "heading",
        text: "3. Trim Overhanging Tree Branches",
      },
      {
        type: "paragraph",
        text: "Heavy snow and ice accumulations can easily snap tree limbs, sending them crashing onto your roof. Even if they don't break, frozen branches weighed down by ice will scrape against your roof surface, rubbing the protective granules off your shingles and wearing them down prematurely.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " Trim back any branches that hang within six to ten feet of your roofline. It's much easier and cheaper to cut a branch now than to patch a hole in your roof later.",
          },
        ],
      },
      {
        type: "heading",
        text: "4. Check Your Attic Ventilation and Insulation",
      },
      {
        type: "paragraph",
        text: "Winter roof prep isn't just an outdoor job; what's happening inside your attic matters just as much.",
      },
      {
        type: "paragraph",
        text: "If your attic is poorly insulated, heat escapes from your living spaces and warms the underside of your roof. This melts the snow on top, which then runs down to the colder edges of the roof and freezes into ice dams. Proper ventilation keeps the attic temperature close to the outside temperature, preventing this uneven melting cycle.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "The Fix:",
            text: " Peek into your attic to ensure your insulation is adequate and isn't blocking your soffit vents. Good airflow is your best defense against ice dams and attic condensation.",
          },
        ],
      },
      {
        type: "heading",
        text: "5. Secure the Flashing and Seals",
      },
      {
        type: "paragraph",
        text: "Flashing, the metal pieces installed around chimneys, skylights, vents, and roof valleys, is your roof's second line of defense. Over time, the sealant around these areas can dry out, crack, and pull away. When water freezes in those tiny cracks, it expands, widening the gap and inviting a leak.",
      },
      {
        type: "pro_tip",
        text: "The Fix: Check all penetrations and joints. Re-caulk any failing seals with a high-grade, exterior sealant designed to handle extreme temperature fluctuations.",
      },
      {
        type: "heading",
        text: "Don't Wait for the First Freeze",
      },
      {
        type: "paragraph",
        text: "Once winter weather arrives, roof repairs become significantly more difficult, dangerous, and expensive. Taking a weekend afternoon to inspect your roof, clean your gutters, and tackle minor repairs now will save you thousands of dollars in emergency fixes later.",
      },
      {
        type: "closing",
        text: "If you aren't comfortable climbing a ladder or aren't sure what to look for, scheduling a professional roof inspection is the safest way to ensure your home stays warm, dry, and protected all winter long.",
      },
    ],
  },
   {
    slug: "roof-repair-vs-roof-replacement",
    title:
      "Roof Repair vs. Roof Replacement: How to Choose the Right Path for Your Home",
    date: "17 June 2026",

    caption:
      "Few things strike fear into a homeowner's heart quite like a puddle on the living room floor or a rogue shingle lying in the front yard. Your roof is your home's main line of defense against the elements, so when something goes wrong, it's easy to panic.",

    excerpt:
      "Not sure if your roof needs a quick patch or a full tear-off? Learn the key signs — from shingle age to structural sagging — that determine which path is right for your home.",

    category: "Roof Repair",
    readTime: "6 min read",
    image: "/roof-repair-vs-roof-replacement.webp",

    content: [
      {
        type: "paragraph",
        text: "Almost immediately, the big question pops up: Can I get away with a quick repair, or am I looking at a total roof replacement?",
      },
      {
        type: "paragraph",
        text: "It's a massive financial distinction. A repair might cost a few hundred dollars, while a brand-new roof is a major investment. To help you make an informed decision without the sales pitch, let's break down exactly how to tell the difference between a patch-up job and a full tear-off.",
      },
      {
        type: "heading",
        text: "The Scope: Spot Treatment vs. a Clean Slate",
      },
      {
        type: "paragraph",
        text: "The most obvious difference between the two is how much of the roof is actually being touched.",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Roof Repair:",
            text: " Think of this as targeted first aid. A roofer identifies a specific failure point like a cracked pipe boot, some wind-damaged shingles, or a small leak over the garage and fixes just that area. The rest of the roof is left completely intact.",
          },
          {
            bold: "Roof Replacement:",
            text: " This is a major construction project. The roofing crew strips away all the old shingles down to the bare wooden decking. They inspect the wood for rot, replace any damaged boards, install brand-new underlayment, and lay down entirely new shingles.",
          },
        ],
      },
      {
        type: "heading",
        text: "Signs You Only Need a Repair",
      },
      {
        type: "paragraph",
        text: "If your roof is relatively young and generally healthy, a repair is usually the way to go. You're likely a candidate for a repair if you notice:",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Isolated Damage:",
            text: " A recent storm caught the edge of a few shingles and ripped them off, but the surrounding shingles look perfect.",
          },
          {
            bold: "Flashing Issues:",
            text: " The metal pieces around your chimney, dormers, or valleys have rusted or pulled away, causing a localized leak.",
          },
          {
            bold: "Minor Leaks:",
            text: " You noticed a small water spot on your ceiling right after a heavy downpour, and it's traceable to a single, easily accessible spot on the roof.",
          },
        ],
      },
      {
        type: "pro_tip",
        text: "The Golden Rule of Repairs: If the roof has plenty of life left in it and the damage is confined to less than 10-15% of the total surface area, repairing it is almost always the smartest, most cost-effective move.",
      },
      {
        type: "heading",
        text: "Signs It's Time for a Full Replacement",
      },
      {
        type: "paragraph",
        text: "Sometimes, patching a roof is like putting a band-aid on a dam that's about to burst. It might buy you a few weeks, but it won't save you. You should seriously consider a replacement if you see these red flags:",
      },
      {
        type: "bullets",
        items: [
          {
            bold: "Age:",
            text: " This is the ultimate decider. Standard asphalt shingle roofs are built to last roughly 20 to 25 years. If your roof is hitting its late teens or early twenties, the materials are simply degrading. Even if it looks okay today, it's on borrowed time.",
          },
          {
            bold: "Widespread Shingle Decay:",
            text: " Look closely at your shingles. Are the edges curling or cupping upward? Are they bald and losing their gritty granules? If the shingles are brittle and breaking, they can no longer shed water.",
          },
          {
            bold: 'The "Whack-A-Mole" Effect:',
            text: " If you paid for a repair last year, have a new leak this year, and your roofer points out three more problem areas, you're throwing good money after bad.",
          },
          {
            bold: "Sagging Decking:",
            text: " If your roofline looks wavy or has noticeable dips, it's a sign of trapped moisture and rotting wood underneath. A repair cannot fix structural sagging.",
          },
        ],
      },
      {
        type: "heading",
        text: "The Hidden Factor: Architectural Harmony",
      },
      {
        type: "paragraph",
        text: "There is one practical issue with repairs that caught many homeowners off guard: Aesthetics.",
      },
      {
        type: "paragraph",
        text: "Sunlight, rain, and snow fade shingles over time. If your roof is ten years old, a brand-new bundle of the exact same shingle brand and color will not match. It will look like a bright, dark patch on a faded jacket. If the repair is on the back of your house, you might not care. But if it's right over your front porch, a massive patchwork look can seriously hurt your home's curb appeal.",
      },
      {
        type: "heading",
        text: "The Verdict: How to Decide",
      },
      {
        type: "paragraph",
        text: "Before you call a contractor, take a look at your home's file. How old is the roof? If it's under 12 years old and the problem is a single leak, push hard for a repair.",
      },
      {
        type: "paragraph",
        text: "If the roof is over 20 years old, saving up for a replacement is the safest logistical and financial choice for your home's future.",
      },
      {
        type: "closing",
        text: "Always get at least two or three opinions from local, highly-rated roofing companies. A trustworthy roofer will never push you into a replacement if a simple repair will safely buy you another five years.",
      },
    ],
  },
  {
    slug: "signs-your-roof-is-about-to-leak",
    title: "7 Warning Signs Your Roof Is About to Leak",
    date: "12 June 2026",
 
    caption:
      "Nobody wakes up in the morning hoping to deal with a roof leak. Most of the time, we don't even think about our roofs until water is actively dripping into a plastic bucket in the middle of the living room. But here's the thing: roofs rarely fail out of nowhere. Long before that first drop of water ruins your drywall, your roof is sending out warning signs.",
 
    excerpt:
      "Learn the seven early warning signs of a failing roof — from curling shingles to spongy decking — before they turn into a costly leak.",
 
    category: "Roof Repair",
    readTime: "6 min read",
    image: "/can-one-missing-shingle-cause-roof-leak.webp",
 
    content: [
      {
        type: "paragraph",
        text: "Catching these early red flags can mean the difference between a quick, inexpensive patch job and a massive insurance claim for structural water damage. If you want to catch a leak before it starts, keep an eye out for these seven warning signs.",
      },
      {
        type: "heading",
        text: "1. Shingles That Are Curling or Cupping",
      },
      {
        type: "paragraph",
        text: 'When asphalt shingles reach the end of their lifespan, the heat from the sun and general weathering causes them to lose flexibility. They\'ll either start "cupping" (where the edges curl upward) or "clawing" (where the middle buckles up and the edges stay flat).',
      },
      {
        type: "paragraph",
        text: "Once a shingle starts to warp like this, it loses its grip. Wind can easily catch it, and rain can blow right underneath it, leaving the underlayment underneath totally exposed.",
      },
      {
        type: "heading",
        text: "2. Dark \"Water Spots\" on Your Ceilings or Walls",
      },
      {
        type: "paragraph",
        text: "This is the classic precursor to a full-blown drip. If you notice faint, brownish rings or yellowish stains on your upper ceilings or stretching down the top of your interior walls, you already have an active problem.",
      },
      {
        type: "paragraph",
        text: "Water is incredibly patient. It will slowly seep through a weak spot in the roof, pool on top of your attic insulation, and eventually soak through your drywall. If you see these spots after a heavy storm, it's time to call a pro immediately.",
      },
      {
        type: "heading",
        text: "3. Granules Packing the Gutters",
      },
      {
        type: "paragraph",
        text: "Take a look inside your gutters next time you clear out the leaves. Do you see what looks like heavy, dark sand piling up in the corners? Those are asphalt granules.",
      },
      {
        type: "paragraph",
        text: "Granules protect your shingles from harsh UV rays. As a roof ages, these granules bake off and wash down the downspouts. If your gutters are loaded with them, your shingles are essentially balding, making them brittle and highly vulnerable to cracking during the next big downpour.",
      },
      {
        type: "heading",
        text: "4. Cracked, Damaged, or Missing Flashing",
      },
      {
        type: "paragraph",
        text: "Flashing consists of those thin metal strips installed around the most vulnerable spots of your roof, like around the chimney, skylights, and the valleys where two roof slopes meet.",
      },
      {
        type: "paragraph",
        text: "Because these areas see the highest volume of rushing water, damaged flashing is a leading cause of sudden interior leaks. If the tar or caulking sealing the flashing has dried out and cracked, or if the metal itself is rusting and lifting away, water has a direct doorway into your home.",
      },
      {
        type: "heading",
        text: "5. Sudden Algae, Moss, or Mold Growth",
      },
      {
        type: "paragraph",
        text: "Seeing a little bit of green on your roof might look rustic, but it's actually a ticking time bomb. Moss acts like a sponge, holding moisture directly against the shingles for days or weeks at a time.",
      },
      {
        type: "paragraph",
        text: "In freezing climates, that trapped water freezes and expands, physically prying the shingles apart. Even in warmer areas, constant dampness rots the organic matting inside the shingles, letting water seep right through.",
      },
      {
        type: "heading",
        text: "6. Cracked or Missing Shingles",
      },
      {
        type: "paragraph",
        text: "This one might seem obvious, but it's easy to miss if you aren't looking closely. Heavy winds can rip shingles entirely off, while hail can slam into them and leave deep fractures.",
      },
      {
        type: "paragraph",
        text: "If a single shingle is missing or split down the middle, the water-resistant barrier below it is directly exposed to the elements. It won't take more than one or two good rainstorms for water to find a way past that underlayment and into your rafters.",
      },
      {
        type: "heading",
        text: '7. The Roof Deck Feels "Spongy"',
      },
      {
        type: "paragraph",
        text: "If you are brave enough to walk your roof (or if you hire a professional to inspect it), pay attention to how it feels underfoot. A healthy roof should feel solid and completely unyielding.",
      },
      {
        type: "pro_tip",
        text: 'If you step on a section and it feels soft, bouncy, or "spongy," that is a massive red flag. It means the plywood decking beneath the shingles has already been absorbing water and is beginning to rot away.',
      },
      {
        type: "closing",
        text: "If you catch a problem while it's still on the outside of your roof, it's a repair. If you wait until it reaches the inside of your home, it becomes a major project. Take a few minutes every spring and fall to look up and check for these warning signs. Your wallet will thank you later.",
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


  

 
];
export const CATEGORIES = [
  "Roof Repair",
  "Roof Installation",
  "Roof Maintenance",
] as const;