import speakersJson from './speakers.json';

export interface Speaker {
  name: string;
  gender: 'M' | 'F';
  url: string;
  photo: string;
  bio: string;
  audios: string[];
  known_for: string;
  note?: string;
  synchronkarteiUrl: string;
  slug: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const synchronkarteiUrls: Record<string, string> = {
  'Marie Bierstedt': 'https://www.synchronkartei.de/sprecher/52/2',
  'Mia Diekow': 'https://www.synchronkartei.de/sprecher/3132/2',
  'Maximiliane Häcke': 'https://www.synchronkartei.de/sprecher/3090/2',
  'Anne Helm': 'https://www.synchronkartei.de/sprecher/265/2',
  'Luise Helm': 'https://www.synchronkartei.de/sprecher/1913/2',
  'Maria Koschny': 'https://www.synchronkartei.de/sprecher/351/2',
  'Sophie Lechtenbrink': 'https://www.synchronkartei.de/sprecher/4058/2',
  'Ronja Peters': 'https://www.synchronkartei.de/sprecher/10475/2',
  'Sarah Riedel': 'https://www.synchronkartei.de/sprecher/843/2',
  'Marie-Luise Schramm': 'https://www.synchronkartei.de/sprecher/611/2',
  'Ilona Schulz': 'https://www.synchronkartei.de/sprecher/1837/2',
  'Esra Vural': 'https://www.synchronkartei.de/sprecher/2003/2',
  'Christian Gaul': 'https://www.synchronkartei.de/sprecher/1692/2',
  'Sebastian Christoph Jacob': 'https://www.synchronkartei.de/sprecher/1510/2',
  'Robin Kahnmeyer': 'https://www.synchronkartei.de/sprecher/317/2',
  'Tobias Kluckert': 'https://www.synchronkartei.de/sprecher/346/2',
  'Nicolas König': 'https://www.synchronkartei.de/sprecher/1005/2',
  'Axel Lutter': 'https://www.synchronkartei.de/sprecher/1187/2',
  'Leonhard Mahlich': 'https://www.synchronkartei.de/sprecher/412/2',
  'Norman Matt': 'https://www.synchronkartei.de/sprecher/428/2',
  'Dieter Memel': 'https://www.synchronkartei.de/sprecher/1232/2',
  'Tommy Morgenstern': 'https://www.synchronkartei.de/sprecher/946/2',
  'Olaf Reichmann': 'https://www.synchronkartei.de/sprecher/543/2',
  'Ricardo Richter': 'https://www.synchronkartei.de/sprecher/944/2',
  'Nico Sablik': 'https://www.synchronkartei.de/sprecher/1314/2',
  'Tim Sander': 'https://www.synchronkartei.de/sprecher/574/2',
  'Dennis Schmidt-Foß': 'https://www.synchronkartei.de/sprecher/594/2',
  'Roman Wolko': 'https://www.synchronkartei.de/sprecher/2085/2',
};

const speakers: Speaker[] = (speakersJson as Omit<Speaker, 'synchronkarteiUrl' | 'slug'>[]).map(
  (speaker) => ({
    ...speaker,
    synchronkarteiUrl: synchronkarteiUrls[speaker.name] ?? '',
    slug: toSlug(speaker.name),
  })
);

export function getSpeakers(): Speaker[] {
  return speakers;
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((s) => s.slug === slug);
}
