/**
 * a: I, N, T, J
 * b: E, N, F, P
 * c: E, S, F, J
 * d: I, S, T, P
 */
export const questionMaps = [
  {
    id: 1,
    question:
      "You awaken beneath towering trees in a lush forest, surrounded by fragrant herbs. In your hand is an old, mysterious book covered in beautiful cryptic symbols. What do you do?",
    answers: [
      {
        a: "Carefully examine its cover and contents",
      },
      {
        b: "Eagerly start reading, letting its forgotten tales sweep you away",
      },
      {
        c: "Approach the wise elder nearby, seeking the story behind this mysterious relic",
      },
      {
        d: "Think of its value and plan to sell it to the highest bidder",
      },
    ],
  },
  {
    id: 2,
    question:
      "A spirit of nature manifests before you, its eyes gleaming with curiosity and mischief. How do you respond?",
    answers: [
      {
        a: "Quietly observe, noting every detail of its mystical form and behavior",
      },
      {
        b: "Excitedly attempt to communicate, eager to learn its secrets",
      },
      {
        c: "Reach into your pack, offering food as a gesture of friendship",
      },
      {
        d: "Prepare yourself for potential danger, unsure of the spirit's intentions",
      },
    ],
  },
  {
    id: 3,
    question:
      "As you journey deeper into the wilderness with your new magical companion, you discover a hidden garden of rare medicinal plants. What's your next move?",
    answers: [
      {
        a: "Catalog each plant and its potential uses before taking further action",
      },
      {
        b: "Start tasting and experimenting with different plant combinations",
      },
      {
        c: "Seek out other herbalists to share and expand this knowledge collectively",
      },
      {
        d: "Carefully harvest small samples for future study and propagation",
      },
    ],
  },
  {
    id: 4,
    question:
      "A poisonous vapor blocks your path in the garden. How do you proceed?",
    answers: [
      {
        a: "Devise an herbal filter using local plants to safely pass through",
      },
      {
        b: "Attempt to communicate with the plants, asking them to clear a path",
      },
      {
        c: "Gather a group to combine your energies and dispel the miasma together",
      },
      {
        d: "Methodically test different herbs to find one that neutralizes the poison",
      },
    ],
  },
  {
    id: 5,
    question:
      "Upon clearning the vapor, you notice a villager afflicted by its poison. How do you approach healing them?",
    answers: [
      {
        a: "Research similar symptoms and their herbal remedies",
      },
      {
        b: "Use your intuition to craft a unique blend of herbs for healing",
      },
      {
        c: "Rally other villagers, organizing their efforts in supporting the healing process",
      },
      {
        d: "Systematically test different herbal treatments to find the most effective one",
      },
    ],
  },
  {
    id: 6,
    question:
      "In gratitude for helping the villager, you're gifted a rare magical herb with unknown properties. What do you do with it?",
    answers: [
      { a: "Carefully study its properties through controlled experiments" },
      {
        b: "Plant it in your garden, nurturing it and observing its growth",
      },
      {
        c: "Share cuttings of it with those in need, using it to help others",
      },
      {
        d: "Preserve it carefully, waiting for the right moment to use its power",
      },
    ],
  },
  {
    id: 7,
    question:
      "An elder witch offers to teach you herbal magic. How do you prefer to learn?",
    answers: [
      { a: "Through in-depth study of ancient herbal texts and theories" },
      { b: "By experimenting with different herb combinations and spells" },
      { c: "In a group setting, sharing knowledge with other apprentices" },
      {
        d: "With a structured curriculum, mastering each herb and its uses step-by-step",
      },
    ],
  },
  {
    id: 8,
    question:
      "After your training, you're able to achieve the highest level of mastery in one aspect of herbal magic. Which do you choose?",
    answers: [
      {
        a: "The ability to communicate with plants, understanding their needs and properties",
      },
      { b: "The power to accelerate plant growth and transformation" },
      {
        c: "Healing magic to cure any ailment using the right herbal combination",
      },
      { d: "The skill to extract and amplify the essence of any herb" },
    ],
  },
  {
    id: 9,
    question:
      "You're invited to a gathering of witches to showcase your new herbal expertise in competition. How do you prepare?",
    answers: [
      {
        a: "Research the specialties of other attendees to understand the competition",
      },
      {
        b: "Create new, innovative herbal blends and spells to impress and surprise",
      },
      {
        c: "Build strategic alliances with others, creating a network of support and mutual advantage",
      },
      {
        d: "Immerse yourself in rigorous training across diverse magical disciplines, honing your skills to perfection",
      },
    ],
  },
  {
    id: 10,
    question:
      "A dark energy is spreading through the forest, endangering many plant species. How do you address this crisis?",
    answers: [
      {
        a: "Study the it's pattern to understand its cause and potential weaknesses",
      },
      { b: "Attempt to communicate with it, seeking peaceful resolution" },
      { c: "Organize a coven to perform a large-scale purification ritual" },
      {
        d: "Sytematically apply various herbal treatments to affected areas and find ways to contain the energy",
      },
    ],
  },
  {
    id: 11,
    question:
      "An ancient prophecy speaks of a witch who will usher in a new era of herbal wisdom. How does this affect you?",
    answers: [
      {
        a: "Analyze the prophecy's origins and validity before considering its implications",
      },
      {
        b: "Feel excited about the potential for new discoveries and magical advancements",
      },
      { c: "Consider how this prophecy might impact the wider community" },
      {
        d: "Begin intensive preparation, honing your skills to be ready for any role you might play",
      },
    ],
  },
  {
    id: 12,
    question:
      "The prophecy reveals it is you who will bring a new era of herbal wisdom, how do share your knowledge with the world?",
    answers: [
      {
        a: "Write a comprehensive spellbook, detailing your research and discoveries",
      },
      {
        b: "Travel the land, spreading wisdom and helping those in need with your intuition",
      },
      {
        c: "Establish a school of herbal magic, teaching students from all walks of life",
      },
      {
        d: "Create a structured system of herbal classification and usage for future generations",
      },
    ],
  },
];

export type MBTI = keyof typeof mbtiHerbMap;
export interface MBTIHerbEntry {
  herb: string;
  description: string;
  image: string;
  strength: string[];
  weakness: string[];
  benefits: string[];
  mostCompatible: string[];
  leastCompatible: string[];
}
export const mbtiHerbMap = {
  INTJ: {
    herb: "Rosemary",
    description:
      "Known for its memory-enhancing properties, representing the strategic and forward-thinkers",
    image: "./placeholder.jpg",
    strength: [
      "Strategic planner",
      "Independent thinker",
      "Innovative problem-solver",
    ],
    weakness: ["Perfectionism", "Difficulty expressing emotions"],
    benefits: [
      "Improves memory and concentration",
      "Boosts immune system",
      "Reduces inflammation",
    ],
    mostCompatible: ["ENTJ", "ENTP"],
    leastCompatible: ["ESFJ", "ISFP"],
  },

  ENFP: {
    herb: "Butterfly Pea Flower",
    description:
      "Color-changing, visually stunning, and mentally clarifying, symbolizes creativity and the ability to see possibilities others might miss.",
    image: "./placeholder.jpg",
    strength: ["Creativey", "Enthusiastic", "Adaptable"],
    weakness: ["Easily distracted", "Overthinks"],
    benefits: [
      "Enhances brain function",
      "Reduces stress and anxiety",
      "Improves skin health",
    ],
    mostCompatible: ["INFJ", "INTJ"],
    leastCompatible: ["ISTJ", "ESTJ"],
  },

  ISFJ: {
    herb: "Chamomile",
    description:
      "Gentle, nurturing, and reliable, reflecting the caring natured",
    image: "./placeholder.jpg",
    strength: ["Reliable", "Detail-oriented", "Supportive"],
    weakness: ["Difficulty with change", "Trouble saying no"],
    benefits: [
      "Promotes relaxation and sleep",
      "Aids digestion",
      "Reduces inflammation",
    ],
    mostCompatible: ["ESFJ", "ISFP"],
    leastCompatible: ["ENTP", "ENTJ"],
  },

  ESTP: {
    herb: "Guarana",
    description:
      "Energizing, focus-enhancing, and invigorating, embodies the quick thinker with love for excitement and action.",
    image: "./placeholder.jpg",
    strength: ["Quick witted", "Risk-taker", "Adaptable"],
    weakness: ["Impulsive", "Easily bored"],
    benefits: [
      "Increases energy and alertness",
      "Improves cognitive performance",
      "Aids in weight loss",
    ],
    mostCompatible: ["ISTP", "ESFP"],
    leastCompatible: ["INFJ", "ENFJ"],
  },

  INFJ: {
    herb: "Lavender",
    description:
      "Calming yet insightful, embodies intuitive and empathetic qualities.",
    image: "./placeholder.jpg",
    strength: ["Empathetic", "Insightful", "Creative"],
    weakness: ["Sensitive to criticism", "Difficulty with practical matters"],
    benefits: ["Improves sleep quality", "Relieves stress and anxiety"],
    mostCompatible: ["ENFP", "ENTP"],
    leastCompatible: ["ESTP", "ISTP"],
  },

  ESTJ: {
    herb: "Echinacea",
    description:
      "Known for its protective qualities, Echinacea mirrors the reliable natured.",
    image: "./placeholder.jpg",
    strength: ["Organized", "A great leader", "Practical problem-solver"],
    weakness: ["Inflexibility", "Impatience with inefficiency"],
    benefits: [
      "Boosts immune system",
      "Reduces inflammation",
      "Improves mental clarity",
    ],
    mostCompatible: ["ISTJ", "ISTP"],
    leastCompatible: ["INFP", "ENFP"],
  },

  ENTP: {
    herb: "Sage",
    description:
      "Aromatic and purifying, reflecting the innovative and intellectually curious",
    image: "./placeholder.jpg",
    strength: ["Innovative thinking", "Strong debating skills", "Adaptable"],
    weakness: ["Argumentative", "Easily bored with routine"],
    benefits: [
      "Improves memory and cognitive function",
      "Reduces inflammation",
      "Supports digestive health",
    ],
    mostCompatible: ["INTP", "INTJ"],
    leastCompatible: ["ISFJ", "ESFJ"],
  },

  ISFP: {
    herb: "Jasmine",
    description:
      "Delicate, artistic, and sensual, embodying those with an aesthetic appreciation and living fully in the moment",
    image: "./placeholder.jpg",
    strength: ["Creative visions", "Flexible", "Harmonious nature"],
    weakness: [
      "Difficulty with long-term planning",
      "Easily stressed by conflict",
      "Tendency to undervalue own abilities",
    ],
    benefits: [
      "Reduces stress and anxiety",
      "Improves mood",
      "Enhances skin health",
    ],
    mostCompatible: ["ENFJ", "ESFP"],
    leastCompatible: ["INTJ", "ENTJ"],
  },

  INTP: {
    herb: "Ginkgo",
    description:
      "Enhances mental clarity and focus, representing those who excel in analytical and abstract thinking.",
    image: "./placeholder.jpg",
    strength: ["Analytical precision", "Innovative thinker", "Unbiased"],
    weakness: ["Difficulty with emotional expression", "Misses small details"],
    benefits: [
      "Enhances cognitive function",
      "Improves blood circulation",
      "Reduces inflammation",
    ],
    mostCompatible: ["ENTP", "INTJ"],
    leastCompatible: ["ESFJ", "ISFJ"],
  },

  ESFJ: {
    herb: "Calendula",
    description:
      "Bright, healing, and sociable, mirroring the warm and supportive natured",
    image: "./placeholder.jpg",
    strength: ["Social butterfly", "Helpful", "Loyal"],
    weakness: ["Oversensitivity to criticism", "Tendency to neglect own needs"],
    benefits: [
      "Promotes skin healing",
      "Reduces inflammation",
      "Supports immune system",
    ],
    mostCompatible: ["ISFJ", "ISTJ"],
    leastCompatible: ["INTP", "INTJ"],
  },

  ENTJ: {
    herb: "Siberian Ginseng",
    description:
      "Adaptogenic and stamina-boosting, mirroring those with resilience, drive, and ability to lead under pressure.",
    image: "./placeholder.jpg",
    strength: ["Leadership", "Strategic planning", "Decisiveness"],
    weakness: ["Tendency to be overly blunt", "Difficulty relaxing"],
    benefits: [
      "Increases energy and stamina",
      "Reduces stress",
      "Improves cognitive function",
    ],
    mostCompatible: ["INTJ", "ENTP"],
    leastCompatible: ["ISFP", "ISFJ"],
  },

  INFP: {
    herb: "Passionflower",
    description:
      "Dreamy, introspective, and calming, embodying the idealistic and empathetic.",
    image: "./placeholder.jpg",
    strength: ["Creative", "Empathetic", "Idealistic"],
    weakness: ["Impracticality", "Tendency to avoid conflict"],
    benefits: [
      "Reduces anxiety and stress and hysteria",
      "Improves sleep quality",
      "Relieves pain",
    ],
    mostCompatible: ["ENFJ", "ENTJ"],
    leastCompatible: ["ESTP", "ESTJ"],
  },

  ISTP: {
    herb: "Juniper Berry",
    image: "./placeholder.jpg",
    description:
      "Sharp, and invigorating, representing those who are practical in nature and stays calm under pressure.",
    strength: ["Practical problem-solver", "Adaptable", "Calm during crisis"],
    weakness: ["Difficulty with long-term commitment", "Restlessness"],
    benefits: [
      "Supports digestive health",
      "Acts as a natural diuretic",
      "Has antimicrobial properties",
    ],
    mostCompatible: ["ESTJ", "ESTP"],
    leastCompatible: ["ENFJ", "INFJ"],
  },

  ENFJ: {
    herb: "Cinnamon",
    description:
      "warm and comforting aroma, reflecting the welcoming and supportive",
    image: "./placeholder.jpg",
    strength: ["Charisma", "Empathy", "Leadership"],
    weakness: ["Tendency to overextend", "Sensitive to criticism"],
    benefits: [
      "Regulates blood sugar",
      "Reduces inflammation",
      "Improves heart health",
    ],
    mostCompatible: ["INFP", "ISFP"],
    leastCompatible: ["ISTP", "ESTP"],
  },

  ESFP: {
    herb: "Hibiscus",
    description:
      "Vibrant, fun, and attention-grabbing, reflecting the spontaneous and entertaining.",
    image: "./placeholder.jpg",
    strength: [
      "Energetic enthusiasm",
      "Charismatic",
      "Easily connects with others",
    ],
    weakness: ["Difficulty with long-term planning", "Easily distracted"],
    benefits: [
      "Lowers blood pressure",
      "Rich in antioxidants",
      "Supports weight loss",
    ],
    mostCompatible: ["ISFP", "ESTP"],
    leastCompatible: ["INTJ", "INTP"],
  },

  ISTJ: {
    herb: "Thyme",
    description:
      "Structured, traditional, and practical, embodying the reliable and detail-oriented.",
    image: "./placeholder.jpg",
    strength: [
      "Reliable",
      "Practical organization",
      "Pays attention to detail",
    ],
    weakness: [
      "Difficulty with abstract concepts",
      "Tendency to judge quickly",
    ],
    benefits: [
      "Boosts immune system",
      "Supports respiratory health",
      "Has antimicrobial properties",
    ],
    mostCompatible: ["ESTJ", "ISTP"],
    leastCompatible: ["ENFP", "INFP"],
  },
};
