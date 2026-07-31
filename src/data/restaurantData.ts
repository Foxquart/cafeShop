export interface Dish {
  id: string;
  name: string;
  japaneseName?: string;
  category: 'nordic-fire' | 'japanese-precision' | 'ferment-forage';
  description: string;
  tastingNotes: string[];
  ingredients: string[];
  pairing: string;
  origin: string;
  image: string;
  price: string;
  michelinHighlight?: string;
}

export interface Course {
  number: string;
  name: string;
  subTitle: string;
  description: string;
  pairingNote: string;
  keyIngredients: string[];
  dietaryOptions: string[];
  category: string;
  image: string;
}

export interface Beverage {
  id: string;
  name: string;
  vintageOrOrigin: string;
  type: 'wine' | 'sake' | 'cocktail';
  tastingProfile: string;
  notes: string;
  price: string;
  image: string;
}

export interface PressReview {
  id: string;
  source: string;
  rating: string;
  quote: string;
  critic: string;
  year: string;
  logo: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'interior' | 'kitchen' | 'details' | 'atmosphere';
  image: string;
  description: string;
}

export const DISHES: Dish[] = [
  {
    id: 'birch-sea-urchin',
    name: 'Birch-Smoked Sea Urchin',
    japaneseName: '樺煙蒸しウニ',
    category: 'nordic-fire',
    description: 'Hokkaido uni gently infused over white birch embers, finished with fermented gooseberry broth and wild pine needle oil.',
    tastingNotes: ['Ocean Sweetness', 'Warm Wood Smoke', 'Bright Tartness'],
    ingredients: ['Hokkaido Sea Urchin', 'White Birch Charcoal', 'Fermented Wild Gooseberries', 'Pine Needle Extract'],
    pairing: '2020 Domaine Coche-Dury Meursault',
    origin: 'Hokkaido Bay & Jutland Pine Forest',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    price: '$68',
    michelinHighlight: 'Featured in Michelin Guide 2025'
  },
  {
    id: 'wagyu-black-plum',
    name: 'Dry-Aged A5 Wagyu & Fermented Plum',
    japaneseName: 'A5和牛 発酵黒梅',
    category: 'japanese-precision',
    description: 'A5 Miyazaki Wagyu aged 45 days over oak wood, glazed with 3-year fermented black plum umeboshi reduction and chive blossom.',
    tastingNotes: ['Umami Depth', 'Velvet Fat', 'Smoked Acid'],
    ingredients: ['Miyazaki A5 Strip Loin', 'Fermented Black Umeboshi', 'Charred Oak Ash', 'Wild Chive Blossoms'],
    pairing: '2016 Chateau Margaux Premier Grand Cru',
    origin: 'Miyazaki Prefecture, Japan',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    price: '$110',
    michelinHighlight: 'Signature Dish of Executive Chef'
  },
  {
    id: 'quail-pine-ash',
    name: 'Smoked Quail Egg in Pine Ash',
    japaneseName: '松灰燻製鶉卵',
    category: 'ferment-forage',
    description: 'Soft quail egg cold-smoked in ancient pine needle ash, rested on wild chanterelle duxelles with shaved black winter truffle.',
    tastingNotes: ['Earthy Truffle', 'Silky Yolk', 'Forest Resin'],
    ingredients: ['Pasture-Raised Quail Egg', 'Piedmont Black Truffle', 'Wild Chanterelle Duxelles', 'Pine Needle Ash'],
    pairing: 'Dassai 23 Junmai Daiginjo Sake',
    origin: 'Zealand Woodland, Denmark',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    price: '$54',
    michelinHighlight: 'Nordic Culinary Heritage Award'
  },
  {
    id: 'langoustine-dashi',
    name: 'Charred Faroe Langoustine in Oak Dashi',
    japaneseName: '樫出汁炭火手長海老',
    category: 'nordic-fire',
    description: 'Faroe Island langoustine flash-grilled over Japanese Binchotan, submerged in clear double-clarified kombu and roasted oak broth.',
    tastingNotes: ['Sweet Crustacean', 'Mineral Dashi', 'Smoked Kelp'],
    ingredients: ['Faroe Langoustine', 'Katsuobushi 24-Month', 'Charred White Oak Dashi', 'Sea Buckthorn Oil'],
    pairing: '2019 Domaine Leflaive Puligny-Montrachet',
    origin: 'North Atlantic Ocean',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop',
    price: '$72',
    michelinHighlight: 'World 50 Best Icon Course'
  },
  {
    id: 'matsutake-consomme',
    name: 'Matsutake & Roasted Bone Consommé',
    japaneseName: '松茸と骨焼きのコンソメ',
    category: 'ferment-forage',
    description: 'Wild harvested autumn Matsutake mushrooms steep in a 36-hour roasted marrow bone broth infused with smoked cedar wood.',
    tastingNotes: ['Pine Aromatics', 'Deep Broth Richness', 'Clean Mineral'],
    ingredients: ['Wild Nagano Matsutake', 'Dry-Aged Beef Marrow', 'Smoked Cedar Bark', 'Mountain Spring Water'],
    pairing: 'Kokuryu "Black Dragon" Daiginjo',
    origin: 'Nagano Mountains, Japan',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
    price: '$48',
    michelinHighlight: 'Sustainability Excellence Award'
  },
  {
    id: 'smoked-lingonberry-tart',
    name: 'Ember-Smoked Chocolate & Lingonberry',
    japaneseName: '燻製チョコとコケモモ',
    category: 'japanese-precision',
    description: '70% Valrhona single-origin dark chocolate tart cold-infused with oak ember smoke, topped with wild sea-salted lingonberry sorbet.',
    tastingNotes: ['Bittersweet Cocoa', 'Tart Berry Acid', 'Woody Resonance'],
    ingredients: ['Ecuadorian Dark Chocolate', 'Wild Foraged Lingonberries', 'Sea Salt Flakes', 'Toasted Barley Dust'],
    pairing: '1998 Taylor Fladgate Vintage Port',
    origin: 'Småland Forests, Sweden',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    price: '$42',
    michelinHighlight: 'Pastry Innovation of the Year'
  }
];

export const TASTING_MENU: Course[] = [
  {
    number: 'I',
    name: 'Forest Floor Essence',
    subTitle: 'Nordic Forage & Sea Salt',
    description: 'Crisp lichen wafer with fermented reindeer moss butter and pickled wild juniper berries.',
    pairingNote: 'Dom Pérignon Vintage 2013 Brut Champagne',
    keyIngredients: ['Reindeer Moss', 'Juniper', 'Lichen Crisp'],
    dietaryOptions: ['Vegan Available', 'Gluten-Free Available'],
    category: 'Amuse-Bouche',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'II',
    name: 'Birch Smoked Sea Urchin',
    subTitle: 'Hokkaido Urchin & Pine',
    description: 'Hokkaido uni over white birch embers, finished with fermented gooseberry broth.',
    pairingNote: '2020 Domaine Coche-Dury Meursault',
    keyIngredients: ['Sea Urchin', 'Birch Smoke', 'Gooseberry'],
    dietaryOptions: ['Pescatarian'],
    category: 'Raw & Smoked',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'III',
    name: 'Charred Faroe Langoustine',
    subTitle: 'Binchotan & Roasted Kombu',
    description: 'Flash-grilled langoustine over Binchotan charcoal in a double-clarified oak dashi.',
    pairingNote: '2019 Domaine Leflaive Puligny-Montrachet',
    keyIngredients: ['Langoustine', 'Binchotan', 'Oak Dashi'],
    dietaryOptions: ['Pescatarian'],
    category: 'Ocean Fire',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'IV',
    name: 'Quail Egg in Pine Ash',
    subTitle: 'Piedmont Truffle & Chanterelle',
    description: 'Pasture-raised quail yolk suspended in pine needle ash over wild chanterelle duxelles.',
    pairingNote: 'Dassai 23 Junmai Daiginjo Sake',
    keyIngredients: ['Quail Egg', 'Pine Ash', 'Black Truffle'],
    dietaryOptions: ['Vegetarian Available'],
    category: 'Earth & Forage',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'V',
    name: 'Matsutake & Bone Consommé',
    subTitle: 'Wild Mushrooms & Cedar',
    description: 'Warm, aromatic broth brewed with wild autumn Matsutake and roasted bone marrow.',
    pairingNote: 'Kokuryu "Black Dragon" Daiginjo Sake',
    keyIngredients: ['Matsutake', 'Bone Marrow', 'Smoked Cedar'],
    dietaryOptions: ['Vegetarian Broth Substitution'],
    category: 'Intermezzo',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'VI',
    name: 'Oak Dry-Aged A5 Wagyu',
    subTitle: 'Fermented Umeboshi Reduction',
    description: '45-day oak dry-aged Miyazaki Wagyu cooked over open fire embers with black plum reduction.',
    pairingNote: '2016 Chateau Margaux Premier Grand Cru',
    keyIngredients: ['A5 Wagyu', 'Black Umeboshi', 'Chive Blossoms'],
    dietaryOptions: ['Halal Beef Available'],
    category: 'The Ember Peak',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'VII',
    name: 'Cloudberry & Frozen Sorrel',
    subTitle: 'Arctic Forage Granita',
    description: 'Wild Arctic cloudberries with shaved frozen mountain sorrel leaves and spruce tip mist.',
    pairingNote: '2018 Egon Müller Scharzhofberger Riesling Kabinett',
    keyIngredients: ['Cloudberry', 'Mountain Sorrel', 'Spruce Oil'],
    dietaryOptions: ['Vegan', 'Gluten-Free'],
    category: 'Cleanser',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'VIII',
    name: 'Smoked Valrhona Tart',
    subTitle: 'Ember Smoke & Wild Lingonberry',
    description: 'Cold-smoked dark chocolate ganache tart served with wild lingonberry sorbet and sea salt.',
    pairingNote: '1998 Taylor Fladgate Vintage Port',
    keyIngredients: ['Valrhona Chocolate', 'Wild Lingonberry', 'Barley'],
    dietaryOptions: ['Vegetarian'],
    category: 'Sweet Ember',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: 'IX',
    name: 'Mignardises of Pine & Cedar',
    subTitle: 'Handcrafted Sweet Jewels',
    description: 'Pair of roasted birch sugar caramels, smoked matcha truffles, and fermented cherry gems.',
    pairingNote: 'Hand-Whisked Uji Gyokuro Green Tea',
    keyIngredients: ['Uji Matcha', 'Birch Caramel', 'Fermented Cherry'],
    dietaryOptions: ['Gluten-Free Available'],
    category: 'Epilogue',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop'
  }
];

export const BEVERAGES: Beverage[] = [
  {
    id: 'bev-1',
    name: 'Pine & Oak Smoked Old Fashioned',
    vintageOrOrigin: 'Artisanal Mixology',
    type: 'cocktail',
    tastingProfile: 'Smoked Cedar, Toasted Rye, Wild Honey Bitters',
    notes: 'Prepared tableside with charred oak bark smoke and hand-carved ice sphere.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-2',
    name: 'Domaine Coche-Dury Meursault 2020',
    vintageOrOrigin: 'Burgundy, France',
    type: 'wine',
    tastingProfile: 'Toasted Hazelnuts, Flaky Pastry, Crisp Minerality',
    notes: 'Exclusively allocated from the cellars of Meursault.',
    price: '$180 / glass',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-3',
    name: 'Dassai 23 Junmai Daiginjo Sake',
    vintageOrOrigin: 'Yamaguchi, Japan',
    type: 'sake',
    tastingProfile: 'White Peach, Delicate Jasmine, Velvet Texture',
    notes: 'Rice milled to 23% purity over 168 continuous hours.',
    price: '$45 / 100ml',
    image: 'https://images.unsplash.com/photo-1582260656209-775c7b39a341?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev-4',
    name: 'Botanical Birch & Spruce Elixir (Non-Alcoholic)',
    vintageOrOrigin: 'House Distillery',
    type: 'cocktail',
    tastingProfile: 'Forest Dew, Crisp Apple, Smoked Sea Salt',
    notes: 'Distilled zero-proof spirit with wild Nordic botanicals.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRESS_REVIEWS: PressReview[] = [
  {
    id: 'p-1',
    source: 'MICHELIN GUIDE 2026',
    rating: '★★★ Three Michelin Stars',
    quote: 'Ember & Oak achieves an ethereal equilibrium between raw Nordic wilderness and Japanese serenity. An unforgettable masterclass in quiet luxury.',
    critic: 'Michelin Chief Inspector',
    year: '2026',
    logo: 'MICHELIN'
  },
  {
    id: 'p-2',
    source: 'THE NEW YORK TIMES',
    rating: 'Critic’s Pick ★★★★',
    quote: 'Every dish feels less like a meal and more like an intimate reverence to fire, wood, and time. Dining here changes how you perceive gastronomy.',
    critic: 'Pete Wells',
    year: '2025',
    logo: 'NYT'
  },
  {
    id: 'p-3',
    source: 'WORLD’S 50 BEST RESTAURANTS',
    rating: 'Ranked #4 Worldwide',
    quote: 'Chef Astrid Lindholm and Chef Hiroshi Sato have created a sanctuary where fire is treated as an artist’s brush.',
    critic: 'World 50 Best Panel',
    year: '2025',
    logo: '50 BEST'
  },
  {
    id: 'p-4',
    source: 'WALLPAPER* MAGAZINE',
    rating: 'Design & Hospitality Winner',
    quote: 'The architecture of Ember & Oak redefined Japandi luxury dining. Burnt yakisugi wood meets brushed bronze and warm linen.',
    critic: 'Design Editor',
    year: '2024',
    logo: 'WALLPAPER*'
  }
];

export const AWARDS: Award[] = [
  {
    year: '2026',
    title: 'Three Michelin Stars Retained',
    organization: 'Michelin Guide Nordic & Asia',
    description: 'Awarded highest gastronomic rating for exceptional cuisine, execution, and atmosphere.',
    category: 'Gastronomy'
  },
  {
    year: '2025',
    title: 'Michelin Green Star for Sustainability',
    organization: 'Michelin Guide',
    description: 'Recognized for 100% zero-waste wood cooking, wild foraging ethics, and local farm relationships.',
    category: 'Sustainability'
  },
  {
    year: '2025',
    title: 'World’s Best Chef & Culinary Innovation',
    organization: 'Best Chef Awards',
    description: 'Executive Chef Astrid Lindholm named Top Global Culinary Visionary.',
    category: 'Leadership'
  },
  {
    year: '2024',
    title: 'Wine Spectator Grand Award',
    organization: 'Wine Spectator',
    description: 'Honored for 1,400+ curated natural, biodynamic, and rare vintage cellars.',
    category: 'Sommelier'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Main Dining Sanctum',
    subtitle: 'Scandinavian Simplicity & Charred Yakisugi',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom acoustic timber panels, floor-to-ceiling slate walls, and intimate glowing pendant spotlights.'
  },
  {
    id: 'g-2',
    title: 'The Hearth Kitchen',
    subtitle: 'Open Wood Fire Cooking Theatre',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    description: 'Watch Master Chef Hiroshi Sato execute live wood-fire cooking over Japanese Binchotan and Danish Oak.'
  },
  {
    id: 'g-3',
    title: 'Chef’s Counter Experience',
    subtitle: '8-Seat Private Gastronomic Front-Row',
    category: 'atmosphere',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    description: 'Continuous dialogue with our culinary team while experiencing bespoke course plating.'
  },
  {
    id: 'g-4',
    title: 'Crystal & Linen Table Details',
    subtitle: 'Bespoke Handcrafted Stoneware',
    category: 'details',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom ceramic plates created by Kyoto master potters paired with mouth-blown Austrian crystal glassware.'
  },
  {
    id: 'g-5',
    title: 'Private Teahouse Pavilion',
    subtitle: 'Intimate Sanctuary for 10 Guests',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1200&auto=format&fit=crop',
    description: 'Tucked into our inner courtyard garden with private open hearth and tea master service.'
  },
  {
    id: 'g-6',
    title: 'The Sommelier Cellar Vault',
    subtitle: 'Over 1,400 Biodynamic Bottles',
    category: 'details',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    description: 'Climate-controlled subterranean stone vault featuring centuries of rare vintages.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    caption: 'Birch embers glowing quietly in the kitchen at twilight. Precision meets instinct.',
    likes: '4.8k'
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop',
    caption: '45-day oak dry aged A5 Wagyu with fermented black plum reduction. Winter menu course VI.',
    likes: '6.2k'
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop',
    caption: 'Quiet reflections inside our main dining room before the first service.',
    likes: '3.9k'
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
    caption: 'Smoked oak bark bitters & single-grain rye cocktail. Prepared tableside.',
    likes: '5.1k'
  },
  {
    id: 'insta-5',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop',
    caption: 'Pasture quail eggs resting in cold pine ash. Nature captured in harmony.',
    likes: '7.4k'
  },
  {
    id: 'insta-6',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop',
    caption: 'Faroe Island langoustines grilled over white Binchotan charcoal.',
    likes: '8.1k'
  }
];

export const CHEFS = [
  {
    name: 'Astrid Lindholm',
    title: 'Co-Executive Chef & Founder',
    origin: 'Copenhagen, Denmark',
    background: 'Former Head Chef at Noma Copenhagen & Geranium. Pioneer of wild Nordic fire cooking.',
    quote: 'Fire is not merely heat — it is a primal language. We use embers to draw out the soul of every ingredient.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Hiroshi Sato',
    title: 'Co-Executive Chef & Master of Kaiseki',
    origin: 'Kyoto, Japan',
    background: '3rd Generation Kaiseki Master from Kyoto, trained under legendary 3-star Michelin masters.',
    quote: 'Purity requires absolute restraint. When wood smoke touches pristine ocean sea urchin, time stands still.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop'
  }
];

export const DINING_ROOMS = [
  {
    id: 'main-room',
    name: 'Main Dining Sanctum',
    capacity: '1 - 6 Guests',
    deposit: '$150 / guest',
    description: 'Generous leather banquettes, dim glowing oak acoustic ceilings, and peaceful courtyard views.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chefs-counter',
    name: 'Chef’s Hearth Counter',
    capacity: '1 - 4 Guests',
    deposit: '$200 / guest',
    description: 'An intimate 8-seat front row to our wood-fire kitchen with personal chef explanations.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'teahouse-pavilion',
    name: 'Private Teahouse Pavilion',
    capacity: '6 - 12 Guests',
    deposit: '$2,500 Minimum',
    description: 'Standalone wooden structure surrounded by stone gardens, with private hearth & sommelier.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop'
  }
];
