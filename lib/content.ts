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
  gallery?: readonly string[];
  galleryLayout?: "portrait" | "mixed";
  heroFit?: "cover" | "contain";
  summary: string;
  sourceUrl?: string;
  embedUrl?: string;
  videos?: readonly { label: string; embedUrl: string }[];
  sourceLabel?: string;
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
    image: "/services/digital-marketing.jpg",
  },
  {
    number: "02",
    title: "Content Creation",
    shortTitle: "Content Creation",
    eyebrow: "Content",
    description: "Reels, campaigns, interviews and everyday brand language with a pulse.",
    capabilities: ["Reels", "Product Content", "Food & Lifestyle", "UGC", "Interviews", "BTS", "Creative Direction"],
    image: "/services/content-creation.jpg",
  },
  {
    number: "03",
    title: "Professional Production",
    shortTitle: "Production",
    eyebrow: "Production",
    description: "Films that make the brand feel clear, considered and alive.",
    capabilities: ["Advertisement Films", "Brand Films", "Corporate Films", "Music Videos", "Fashion Films", "Cinematography", "Photography"],
    image: "/services/production.jpg",
  },
  {
    number: "04",
    title: "CineGlam Media Studio",
    shortTitle: "Studio & Services",
    eyebrow: "Studio",
    description: "A flexible space for product, fashion, creator, podcast and green-screen work.",
    capabilities: ["Product Setup", "Fashion Setup", "Creator Setup", "Reels Setup", "Podcast Setup", "Green Screen", "Hourly Rentals"],
    image: "/services/studio.jpg",
  },
  {
    number: "05",
    title: "Podcast Production",
    shortTitle: "Podcast Production",
    eyebrow: "Podcast",
    description: "Good sound, thoughtful light and a finished edit people want to return to.",
    capabilities: ["Multi-camera Setup", "Audio", "Lighting", "Recording", "Editing", "Shorts", "Thumbnails"],
    image: "/services/podcast.jpg",
  },
  {
    number: "06",
    title: "Creator & Influencer Content",
    shortTitle: "Creator Content",
    eyebrow: "Creator Content",
    description: "Content that keeps the person in the frame and the idea moving.",
    capabilities: ["Creator Shoots", "Reels", "Photography", "Editing", "Podcast Production"],
    image: "/services/creator.jpg",
  },
];

export const projects: readonly Project[] = [
  {
    slug: "shri-mangal-bhog",
    title: "Shri Mangal Bhog",
    client: "Shri Mangal Bhog",
    meta: "Food & Hospitality / Restaurant Film",
    categories: ["Food & Lifestyle", "Reels & Video"],
    image: "/work/food-shri-mangal-bhog.jpg",
    heroFit: "contain",
    summary: "A warm restaurant story built around the details people come back for.",
    sourceUrl: "https://drive.google.com/file/d/1WcHAUnG9VryH9BaKYT4sRThA_bd9mEG1/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1WcHAUnG9VryH9BaKYT4sRThA_bd9mEG1/preview",
    videos: [
      { label: "Restaurant film", embedUrl: "https://drive.google.com/file/d/1WcHAUnG9VryH9BaKYT4sRThA_bd9mEG1/preview" },
      { label: "Food story / 01", embedUrl: "https://drive.google.com/file/d/1TKNZ5NInGHbErk-6pwrxXJu-vVHGRNR7/preview" },
      { label: "Food story / 02", embedUrl: "https://drive.google.com/file/d/1Rv1DNZfm_gISEwbkpPtdWO9otM2wY1Jp/preview" },
    ],
    sourceLabel: "Play film",
    featured: true,
  },
  {
    slug: "business-education-films",
    title: "Business Education Films",
    client: "Business Education Series",
    meta: "Education / Social Video / Reels",
    categories: ["Creator Content", "Reels & Video"],
    image: "/work/business-education-01.jpg",
    heroFit: "contain",
    galleryLayout: "portrait",
    gallery: [
      "/work/business-education-01.jpg",
      "/work/business-education-02.jpg",
      "/work/business-education-03.jpg",
      "/work/business-education-04.jpg",
      "/work/business-education-05.jpg",
    ],
    summary: "Short-form education with a clear point of view and a human face.",
    sourceUrl: "https://drive.google.com/file/d/1vmbkNU_zBRLAYsDHzd-8oEMCBwVNHG3C/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1vmbkNU_zBRLAYsDHzd-8oEMCBwVNHG3C/preview",
    videos: [
      { label: "Education film / 01", embedUrl: "https://drive.google.com/file/d/1vmbkNU_zBRLAYsDHzd-8oEMCBwVNHG3C/preview" },
      { label: "Education film / 02", embedUrl: "https://drive.google.com/file/d/1WyMPWcL7YyOLTLuZ3JzwkzXBCORbZAaH/preview" },
      { label: "Education film / 03", embedUrl: "https://drive.google.com/file/d/1ientaOYrf7SDuCKJZlQfA5bwY2ciaV4u/preview" },
    ],
    sourceLabel: "Play film",
    featured: true,
  },
  {
    slug: "podcast-vertical-series",
    title: "Podcast Vertical Series",
    client: "Podcast Vertical Series",
    meta: "Podcast / Vertical Video / Social",
    categories: ["Creator Content", "Reels & Video"],
    image: "/work/podcast-ai.jpg",
    heroFit: "contain",
    summary: "A repeatable vertical format that keeps the guest, the idea and the edit moving.",
    sourceUrl: "https://drive.google.com/file/d/1YrxcRxbFbTkHGaR0wBNbAsNcGzajqZVC/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1YrxcRxbFbTkHGaR0wBNbAsNcGzajqZVC/preview",
    videos: [
      { label: "Vertical episode / 01", embedUrl: "https://drive.google.com/file/d/1YrxcRxbFbTkHGaR0wBNbAsNcGzajqZVC/preview" },
      { label: "Vertical episode / 02", embedUrl: "https://drive.google.com/file/d/1j2hZ8th2pzN5F5vhTAnm6QGmzkeukyCJ/preview" },
      { label: "Vertical episode / 03", embedUrl: "https://drive.google.com/file/d/1pYaLB6_TZP6-bpM3y5DwDXavONb1Ag1o/preview" },
      { label: "Vertical episode / 04", embedUrl: "https://drive.google.com/file/d/1AlVNu2bv_9a-kYGmRNTuexYKrAcKx09M/preview" },
    ],
    sourceLabel: "Play film",
    featured: true,
  },
  {
    slug: "asankhrang-fashion",
    title: "Asankhrang Fashion",
    client: "Asankhrang",
    meta: "Fashion / E-commerce / Content",
    categories: ["Fashion", "Photography", "Social Media"],
    image: "/work/asankhrang-01.jpg",
    heroFit: "contain",
    galleryLayout: "portrait",
    gallery: ["/work/asankhrang-01.jpg", "/work/asankhrang-02.jpg", "/work/asankhrang-03.jpg", "/work/asankhrang-04.jpg", "/work/asankhrang-05.jpg", "/work/asankhrang-06.jpg", "/work/asankhrang-07.jpg", "/work/asankhrang-08.jpg", "/work/asankhrang-09.jpg", "/work/asankhrang-10.jpg", "/work/asankhrang-11.jpg", "/work/asankhrang-12.jpg", "/work/asankhrang-13.jpg"],
    summary: "A fashion content system that carries from the product frame to the feed.",
    sourceUrl: "https://drive.google.com/drive/folders/1Q_SvQEgamAUsu23mH1U6gExjAnvEIuwL",
    videos: [
      { label: "Fashion film / 07", embedUrl: "https://drive.google.com/file/d/14ZKnan08w3Vp6FMk3Wb8nU50Y_UvZ9YS/preview" },
      { label: "Fashion film / 08", embedUrl: "https://drive.google.com/file/d/1tgIIkjRGtzpYRE0NtjXfbTpPIBlW6rRm/preview" },
      { label: "Fashion film / 09", embedUrl: "https://drive.google.com/file/d/1A_5IMeqm1cDFh-_FRAsrGbydQ6vy54e7/preview" },
    ],
    sourceLabel: "View project",
    featured: true,
  },
  {
    slug: "rivaazz-ecommerce",
    title: "Rivaazz E-commerce",
    client: "Rivaazz",
    meta: "Fashion / E-commerce / Product",
    categories: ["Fashion", "Photography"],
    image: "/work/rivaazz-01.jpg",
    gallery: ["/work/rivaazz-01.jpg", "/work/rivaazz-02.jpg", "/work/rivaazz-03.jpg", "/work/rivaazz-04.jpg", "/work/rivaazz-05.jpg", "/work/rivaazz-06.jpg", "/work/rivaazz-07.jpg", "/work/rivaazz-08.jpg", "/work/rivaazz-09.jpg", "/work/rivaazz-10.jpg", "/work/rivaazz-11.jpg", "/work/rivaazz-12.jpg", "/work/rivaazz-13.jpg"],
    summary: "Clean product storytelling with enough texture to feel like a real collection.",
    sourceUrl: "https://drive.google.com/drive/folders/1bi01iPVz_1D_Pk0HfVRDyRt3tnTG874w",
    sourceLabel: "View project",
    featured: true,
  },
  {
    slug: "ehawkers-hospitality",
    title: "Ehawkers Hospitality",
    client: "Ehawkers Hotel Line",
    meta: "Hospitality / Hotel / Vertical Video",
    categories: ["Food & Lifestyle", "Reels & Video"],
    image: "/work/ehawkers.jpg",
    heroFit: "contain",
    summary: "A hospitality reel series that makes the place feel close before the visit.",
    sourceUrl: "https://drive.google.com/drive/folders/154P6sFLHR7ToBcKZlC73DAG3aUk-jVEO",
    videos: [
      { label: "Hotel film / 01", embedUrl: "https://drive.google.com/file/d/1VFeWRmaZaoDlalF6PIx037SPMN1JGKzP/preview" },
      { label: "Hotel film / 02", embedUrl: "https://drive.google.com/file/d/1wEPusOzhmKSP9WcjTjvZlRxucj-RVkbF/preview" },
      { label: "Hotel film / 03", embedUrl: "https://drive.google.com/file/d/1bYbtmLeTPUdWtBMeG8NBD-myS6FaFWQa/preview" },
    ],
    sourceLabel: "View project",
    featured: true,
  },
  {
    slug: "cine-glam-studio",
    title: "CineGlam Media Studio",
    client: "CineGlam Media Studio",
    meta: "Studio / Setup / Podcast",
    categories: ["Creator Content", "Reels & Video"],
    image: "/work/studio-podcast.jpg",
    gallery: ["/work/studio-podcast.jpg", "/work/studio-zs-setup.jpg", "/work/bts-setup.jpg"],
    summary: "A flexible set built for podcasts, creators, product stories and repeatable content.",
    sourceUrl: "https://drive.google.com/file/d/1RtjidLAhgWD-VUukWsoP0AJxlvfmEeT9/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1RtjidLAhgWD-VUukWsoP0AJxlvfmEeT9/preview",
    videos: [
      { label: "Studio setup / 01", embedUrl: "https://drive.google.com/file/d/1RtjidLAhgWD-VUukWsoP0AJxlvfmEeT9/preview" },
      { label: "Studio setup / 02", embedUrl: "https://drive.google.com/file/d/1p1qRVE5U6pjmYqj4TbwzUbEAiW2wMWsx/preview" },
    ],
    sourceLabel: "Play film",
  },
  {
    slug: "education-animation",
    title: "Education Animation",
    client: "Education Animation Series",
    meta: "Education / Animation / Motion",
    categories: ["Commercials", "Reels & Video"],
    image: "/work/education-animation.jpg",
    heroFit: "contain",
    summary: "A visual explanation that gives a complex subject a clearer way in.",
    sourceUrl: "https://drive.google.com/file/d/1_AeEAmyCUQMZRZswNNbjhSAA9xdDvLP4/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1_AeEAmyCUQMZRZswNNbjhSAA9xdDvLP4/preview",
    videos: [
      { label: "Animation / 01", embedUrl: "https://drive.google.com/file/d/179juyynpgCM0VB8K0QRQAkfQ_rZ0xVQQ/preview" },
      { label: "Animation / 02", embedUrl: "https://drive.google.com/file/d/1_AeEAmyCUQMZRZswNNbjhSAA9xdDvLP4/preview" },
      { label: "Animation / 03", embedUrl: "https://drive.google.com/file/d/1vPimZ9k3OetYZbxeG8x7CX2wBKZCSflG/preview" },
    ],
    sourceLabel: "Play film",
  },
  {
    slug: "bmw-z4",
    title: "BMW Z4",
    client: "BMW Z4",
    meta: "Automotive / Film / Social",
    categories: ["Automotive", "Reels & Video"],
    image: "/work/bmw-z4.jpg",
    summary: "A moving automotive story with the camera close enough to feel the drive.",
    sourceUrl: "https://drive.google.com/drive/folders/1uV_xAxvD87lXOzzHxkUuaFu8PtjIVIJ9",
    videos: [
      { label: "BMW Z4 / 01", embedUrl: "https://drive.google.com/file/d/1vQa6Koyd7FRq-Wdgsh2vre_x5Fh2OcP5/preview" },
      { label: "BMW Z4 / 02", embedUrl: "https://drive.google.com/file/d/1IO4qjm6DL637mvlBnoo05mQJZElZVzo9/preview" },
      { label: "BMW Z4 / 03", embedUrl: "https://drive.google.com/file/d/1Vjz-jSYIL3wMHwhdB5f0TmtTnHyHIJi-/preview" },
    ],
    sourceLabel: "View project",
  },
  {
    slug: "grah-shobha-home-decor",
    title: "Grah Shobha",
    client: "Grah Shobha Home Decor",
    meta: "Home Decor / Photography / Studio",
    categories: ["Photography", "Architecture"],
    image: "/work/grah-shobha.jpg",
    heroFit: "contain",
    gallery: ["/work/grah-shobha.jpg", "/work/grah-shobha-02.jpg", "/work/grah-shobha-03.jpg", "/work/grah-shobha-04.jpg"],
    summary: "A tactile home story built around pattern, material and the room as experience.",
    sourceUrl: "https://drive.google.com/drive/folders/1sIGjd0stIJ_8gCEmz11O8sTmALik0wze",
    sourceLabel: "View project",
  },
  {
    slug: "mudoven-hotel",
    title: "Mudoven Hotel",
    client: "Mudoven",
    meta: "Hospitality / Hotel / Film",
    categories: ["Food & Lifestyle", "Reels & Video"],
    image: "/work/mudoven.jpg",
    summary: "Small details, warm light and a stay you can almost hear before you arrive.",
    sourceUrl: "https://drive.google.com/drive/folders/1VZsRJlxgu2p7CuvnWjGDI7z1MsCzfuy7",
    videos: [
      { label: "Hotel film / 01", embedUrl: "https://drive.google.com/file/d/1q2mQsOtjwoOfekw-0hNx7JxnXp70EtjV/preview" },
      { label: "Hotel film / 02", embedUrl: "https://drive.google.com/file/d/1mu02kv-VEG3KR1CHJKWokOsm2-7-d-ur/preview" },
      { label: "Hotel film / 03", embedUrl: "https://drive.google.com/file/d/1K9u3cWHkP8Q5Yf4MosjzeUTfV788-Ar6/preview" },
    ],
    sourceLabel: "View project",
  },
  {
    slug: "clothing-brand-shoot",
    title: "Clothing Brand Shoot",
    client: "Fashion Brand Content",
    meta: "Fashion / Product / Social",
    categories: ["Fashion", "Photography", "Social Media"],
    image: "/work/clothing-01.jpg",
    heroFit: "contain",
    gallery: ["/work/clothing-01.jpg", "/work/clothing-02.jpg"],
    summary: "A product-led fashion shoot with enough character for the campaign around it.",
    sourceUrl: "https://drive.google.com/drive/folders/1d-urKICR6cTTPM9aeiP0JeSEMi81egBL",
    sourceLabel: "View project",
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    client: "CineGlam Media BTS",
    meta: "BTS / Lighting / Production",
    categories: ["Reels & Video", "Creator Content"],
    image: "/work/bts-setup.jpg",
    heroFit: "contain",
    gallery: ["/work/bts-setup.jpg", "/work/studio-podcast.jpg", "/work/studio-zs-setup.jpg"],
    summary: "The light, the set and the small decisions that make the finished frame work.",
    sourceUrl: "https://drive.google.com/drive/folders/1kWn0AC9iK_C8JyZ1iA6QGkfM-uKfKdnK",
    sourceLabel: "View project",
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
  heroImage: "/ark/hero.jpg",
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
