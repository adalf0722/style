export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  date: string;
  content: Array<
    | { kind: "p"; text: string }
    | { kind: "h2"; text: string }
    | { kind: "ul"; items: string[] }
    | { kind: "quote"; text: string }
    | { kind: "code"; text: string }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    id: "theme-orbits",
    title: "Mapping theme orbits across surfaces",
    excerpt:
      "How tokens flow from a single store into every layout and component.",
    tags: ["Tokens", "System"],
    author: {
      name: "Aya Lin",
      role: "Design Systems",
    avatarUrl:
      "https://raw.githubusercontent.com/adalf0722/imgduck/main/public/favicon.svg",
    },
    date: "Dec 18, 2025",
    content: [
      {
        kind: "p",
        text: "A cohesive theme system is less about color swaps and more about building a shared language. When tokens are centralized, every layout can respond to the same intent without extra overrides.",
      },
      {
        kind: "h2",
        text: "Token first thinking",
      },
      {
        kind: "p",
        text: "We start by defining a minimal palette of structural tokens: primary, surface, text, and accent. These few values inform the entire hierarchy, including shadows, radii, and typographic tone.",
      },
      {
        kind: "ul",
        items: [
          "Treat tokens as verbs, not nouns.",
          "Keep component styles token-driven.",
          "Allow layouts to interpret rather than override.",
        ],
      },
      {
        kind: "quote",
        text: "The best theme systems feel invisible until you switch.",
      },
      {
        kind: "code",
        text: "root.style.setProperty('--color-primary', tokens.primary)",
      },
    ],
  },
  {
    id: "lush-to-neon",
    title: "From Ghibli calm to Cyberpunk neon",
    excerpt:
      "Two extremes that prove the same component architecture can stretch far.",
    tags: ["Visual", "Contrast"],
    author: {
      name: "Marco Ryu",
      role: "Creative Technologist",
    avatarUrl:
      "https://raw.githubusercontent.com/adalf0722/imgduck/main/public/favicon.svg",
    },
    date: "Dec 12, 2025",
    content: [
      {
        kind: "p",
        text: "Swapping themes is more than color. It is about motion cadence, corner rounding, and how much depth you allow into the surface.",
      },
      {
        kind: "h2",
        text: "Contrast levers",
      },
      {
        kind: "p",
        text: "Ghibli themes thrive on soft shadows, paper textures, and generous line height. Cyberpunk themes thrive on hard edges, neon gradients, and dense layout rhythm.",
      },
      {
        kind: "ul",
        items: [
          "Roundness as warmth",
          "Density as intensity",
          "Accent color as narrative",
        ],
      },
    ],
  },
  {
    id: "admin-story",
    title: "Designing an admin UI that still feels cinematic",
    excerpt:
      "Admin panels do not need to be sterile if the token system is strong.",
    tags: ["Admin", "UX"],
    author: {
      name: "Serena Vale",
      role: "Product Designer",
    avatarUrl:
      "https://raw.githubusercontent.com/adalf0722/imgduck/main/public/favicon.svg",
    },
    date: "Dec 5, 2025",
    content: [
      {
        kind: "p",
        text: "Even in a CRUD interface, the theme system should shine. Use token-driven badges, modals, and inputs so that administrative workflows echo the same visual story.",
      },
      {
        kind: "h2",
        text: "Keep structure consistent",
      },
      {
        kind: "p",
        text: "The layout grid stays consistent across themes, but the tone shifts. By leaning on the same primitive components, you avoid fragmentation while still delivering variety.",
      },
    ],
  },
];
