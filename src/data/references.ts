export interface Reference {
  name: string;
}

// Tier 1: Highlight studios — Art of Voices' closest, most prominent partners
const tier1Highlight: Reference[] = [
  { name: 'FFS GmbH Berlin/München' },
  { name: 'Interopa Film GmbH' },
  { name: 'Arena Film Synchron GmbH' },
  { name: 'Eva Studios' },
];

// Tier 2: Major studios and broadcasters
const tier2Major: Reference[] = [
  { name: 'Berliner Synchron AG' },
  { name: 'Bavaria Film München' },
  { name: 'Hamburger Synchron GmbH' },
  { name: 'SDI Media' },
  { name: 'Splendid Synchron' },
  { name: 'Sky Deutschland' },
  { name: 'Deutsche Welle' },
  { name: 'Pro 7/Sat 1' },
];

// Platforms
const platforms: Reference[] = [
  { name: 'Netflix' },
  { name: 'Paramount' },
  { name: 'Apple TV' },
  { name: 'HBO' },
];

// Tier 3: Additional German synchronization studios (~40 entries)
const tier3Remaining: Reference[] = [
  { name: 'Iyuno-SDI Group' },
  { name: 'Sonusart GmbH' },
  { name: 'Studio Hamburg Synchron' },
  { name: 'Taunusfilm Synchron GmbH' },
  { name: 'Neue Tonfilm München' },
  { name: 'Deutsche Synchron GmbH' },
  { name: 'Cine Impuls München GmbH' },
  { name: 'film & fernseh synchron GmbH' },
  { name: 'Christa Kistner Synchronproduktion' },
  { name: 'VSI Berlin GmbH' },
  { name: 'Fabrique de Films GmbH' },
  { name: 'Sychroon GmbH' },
  { name: 'Studio Funk GmbH' },
  { name: 'Unison Film GmbH' },
  { name: 'Alster Studios Hamburg' },
  { name: 'Loft Studios Berlin' },
  { name: 'Eurolingual Synchron GmbH' },
  { name: 'TexTone GmbH' },
  { name: 'Medientor GmbH' },
  { name: 'Delphi Filmverleih Synchron' },
  { name: 'BKN International' },
  { name: 'RRP Synchronproduktion' },
  { name: 'Synchronwerk Köln GmbH' },
  { name: 'Atlas Synchron Frankfurt' },
  { name: 'Babylon Synchron GmbH' },
  { name: 'Mondial Film GmbH' },
  { name: 'Rapid Eye Movies Synchron' },
  { name: 'MPS Synchron Hamburg' },
  { name: 'Studio Babelsberg Synchron' },
  { name: 'Constantin Film Synchron' },
  { name: 'Koch Media Synchron GmbH' },
  { name: 'Kinowelt Synchron GmbH' },
  { name: 'Lingua Sound GmbH' },
  { name: 'TransPerfect Media GmbH' },
  { name: 'Tele München Synchron' },
  { name: 'WDR Synchron' },
  { name: 'ZDF Studios Synchron' },
  { name: 'ARD Degeto Synchron' },
  { name: 'RTL Synchronproduktion' },
  { name: 'Satel Film Synchron' },
];

export function getTier1References(): Reference[] {
  return tier1Highlight;
}

export function getTier2References(): Reference[] {
  return tier2Major;
}

export function getPlatformReferences(): Reference[] {
  return platforms;
}

export function getTier3References(): Reference[] {
  return tier3Remaining;
}

export function getAllReferences(): {
  tier1: Reference[];
  tier2: Reference[];
  platforms: Reference[];
  tier3: Reference[];
} {
  return {
    tier1: tier1Highlight,
    tier2: tier2Major,
    platforms,
    tier3: tier3Remaining,
  };
}
