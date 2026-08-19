import speakersJson from './speakers.json';

export interface Speaker {
  name: string;
  gender: 'M' | 'F';
  url: string;
  photo: string;
  photo_credit: string;
  bio: string;
  audio: string;
  known_for: string;
  synchronkartei: string;
  stimmlage: string;
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

// speakers.json is shaped as { "speakers": [...] } so it can be edited via the
// Decap CMS admin (a JSON file collection needs an object root, not a bare array).
const speakerRecords = (speakersJson as { speakers: Omit<Speaker, 'synchronkarteiUrl' | 'slug'>[] }).speakers;

const speakers: Speaker[] = speakerRecords.map((speaker) => ({
  ...speaker,
  // synchronkartei is now an editable field in speakers.json (managed via the
  // CMS). synchronkarteiUrl is kept as the derived alias existing pages read.
  synchronkarteiUrl: speaker.synchronkartei ?? '',
  slug: toSlug(speaker.name),
}));

export function getSpeakers(): Speaker[] {
  return speakers;
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((s) => s.slug === slug);
}
