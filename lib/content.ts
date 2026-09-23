export type Service = {
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  capabilities: readonly string[];
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  meta: string;
  categories: readonly string[];
  image: string;
  summary: string;
  featured?: boolean;
};

export type Industry = {
  name: string;
  mark: string;
};

export type ProcessStage = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export type CaseStudySection = {
  number: string;
  title: string;
  body: string;
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Digital Marketing & Social Media",
    shortTitle: "Digital Marketing",
    eyebrow: "Digital Growth",
    description: "A point of view, carried consistently from first post to last click.",
    capabilities: ["Social Media Management", "Content Strategy", "Meta Ads", "Google Ads", "Analytics & Reporting", "SEO", "Brand Growth"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Content Creation",
    shortTitle: "Content Creation",
    eyebrow: "Content",
    description: "Reels, campaigns, interviews and everyday brand language with a pulse.",
    capabilities: ["Reels", "Product Content", "Food & Lifestyle", "UGC", "Interviews", "BTS", "Creative Direction"],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Professional Production",
    shortTitle: "Production",
    eyebrow: "Production",
    description: "Films that make the brand feel clear, considered and alive.",
    capabilities: ["Advertisement Films", "Brand Films", "Corporate Films", "Music Videos", "Fashion Films", "Cinematography", "Photography"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Cine Glam Studio",
    shortTitle: "Studio & Services",
    eyebrow: "Studio",
    description: "A flexible space for product, fashion, creator, podcast and green-screen work.",
    capabilities: ["Product Setup", "Fashion Setup", "Creator Setup", "Reels Setup", "Podcast Setup", "Green Screen", "Hourly Rentals"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Podcast Production",
    shortTitle: "Podcast Production",
    eyebrow: "Podcast",
    description: "Good sound, thoughtful light and a finished edit people want to return to.",
    capabilities: ["Multi-camera Setup", "Audio", "Lighting", "Recording", "Editing", "Shorts", "Thumbnails"],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Creator & Influencer Content",
    shortTitle: "Creator Content",
    eyebrow: "Creator Content",
    description: "Content that keeps the person in the frame and the idea moving.",
    capabilities: ["Creator Shoots", "Reels", "Photography", "Editing", "Podcast Production"],
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85",
  },
];

export const projects: readonly Project[] = [
  {
    slug: "the-ark",
    title: "The Ark",
    client: "The Ark Hospitality",
    meta: "Hospitality / Social Media / Content",
    categories: ["Branding", "Social Media", "Food & Lifestyle"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    summary: "Making a room full of details feel like the place everyone is talking about.",
    featured: true,
  },
  {
    slug: "aurelia",
    title: "Aurelia",
    client: "Aurelia Jewellery",
    meta: "Jewellery / Branding / Photoshoot",
    categories: ["Branding", "Photography"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85",
    summary: "A jewellery story with enough space for the light to do some of the talking.",
    featured: true,
  },
  {
    slug: "brew-and-beans",
    title: "Brew & Beans",
    client: "Brew & Beans",
    meta: "Food / Reels / Digital Marketing",
    categories: ["Social Media", "Food & Lifestyle", "Creator Content"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    summary: "A daily coffee ritual turned into a content system with a little more aroma.",
    featured: true,
  },
  {
    slug: "velocity",
    title: "Velocity",
    client: "Velocity Automotive",
    meta: "Automotive / Photography / Video",
    categories: ["Automotive", "Photography", "Reels & Video"],
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    summary: "Performance, framed with the same intent as the machine itself.",
    featured: true,
  },
  {
    slug: "label-r",
    title: "Label R",
    client: "Label R Fashion",
    meta: "Fashion / Production / Social",
    categories: ["Branding", "Photography", "Social Media"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    summary: "A fashion story with a strong silhouette and a social life of its own.",
    featured: true,
  },
  {
    slug: "urban-spaces",
    title: "Urban Spaces",
    client: "Urban Spaces",
    meta: "Interior / Architecture / Branding",
    categories: ["Architecture", "Branding", "Photography"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    summary: "A sharper visual language for spaces built around how people actually live.",
    featured: true,
  },
];

export const workFilters = [
  "All Work",
  "Branding",
  "Social Media",
  "Photography",
  "Reels & Video",
  "Commercials",
  "Fashion",
  "Food & Lifestyle",
  "Automotive",
  "Architecture",
  "Creator Content",
] as const;

export const industries: readonly Industry[] = [
  { name: "Food & Hospitality", mark: "FH" },
  { name: "Jewellery & Fashion", mark: "JF" },
  { name: "Businesses & Startups", mark: "BS" },
  { name: "Real Estate", mark: "RE" },
  { name: "Fitness & Lifestyle", mark: "FL" },
  { name: "Entertainment", mark: "EN" },
  { name: "Creators & Influencers", mark: "CI" },
  { name: "Automotive", mark: "AU" },
  { name: "Events & Experiences", mark: "EE" },
];

export const processStages: readonly ProcessStage[] = [
  { number: "01", title: "Strategy", description: "Find the sharpest version of the idea." },
  { number: "02", title: "Branding", description: "Give the idea a world people recognize." },
  { number: "03", title: "Content", description: "Make the story easy to enter and share." },
  { number: "04", title: "Production", description: "Put craft, people and light behind it." },
  { number: "05", title: "Editing", description: "Shape the pace until it feels inevitable." },
  { number: "06", title: "Marketing", description: "Put the work in front of the right eyes." },
  { number: "07", title: "Growth", description: "Keep learning from what the audience does." },
];

export const testimonials: readonly Testimonial[] = [
  {
    quote: "They understood the mood before we had the words for it.",
    name: "Priya Mehta",
    company: "The Ark",
  },
  {
    quote: "The work looked beautiful, but it also gave the team a system they could keep using.",
    name: "Rhea Kapoor",
    company: "Aurelia Jewellery",
  },
  {
    quote: "Fast when it needed to be, considered when it mattered.",
    name: "Arjun Singh",
    company: "Brew & Beans",
  },
];

export const arkCaseStudy = {
  title: "The Ark",
  metadata: ["Hospitality", "Social Media", "Content Production"],
  heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88",
  summary: "A hospitality brand with a beautiful room, a quiet confidence and a story that needed more room to breathe.",
  results: [
    ["+320%", "Instagram reach"],
    ["+150%", "Profile visits"],
    ["4.8x", "Increase in enquiries"],
  ],
  sections: [
    { number: "01", title: "The Challenge", body: "The Ark had the setting and the service, but its online presence felt like a list of amenities. The opportunity was to make the feeling of being there impossible to miss." },
    { number: "02", title: "Our Strategy", body: "We built the story around atmosphere first: the morning light, the table arriving, the details guests remember and the people who make the room work." },
    { number: "03", title: "Branding", body: "A quieter visual language gave the hospitality brand confidence. Warm neutrals, close crops and a little more negative space let the details hold attention." },
    { number: "04", title: "Content", body: "We created a monthly rhythm of hero imagery, short reels, menu moments, team stories and guest-facing details that could work together or alone." },
    { number: "05", title: "Digital Marketing", body: "Content and distribution worked as one system, with campaigns built around the moments people were already looking for: dinners, stays, celebrations and weekends away." },
    { number: "06", title: "Results", body: "The work gave the team a more consistent presence and made the path from discovering The Ark to enquiring feel much shorter." },
    { number: "07", title: "The Work", body: "A considered visual system that gave the brand enough room to be warm, specific and remembered." },
  ] as readonly CaseStudySection[],
};
