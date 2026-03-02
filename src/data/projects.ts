export interface Project {
  title: string;
  actor?: string;
  studio?: string;
  year?: number;
}

export interface SpeakerProjects {
  speakerSlug: string;
  top5: Project[];
  recent: Project[];
}

// [PLATZHALTER - Stefan ergänzt]
// Alle Einträge unten sind Platzhalter und müssen durch echte Daten ersetzt werden.
// Format pro Eintrag: { title: string, actor?: string, studio?: string, year?: number }

const projectsData: Record<string, SpeakerProjects> = {
  'marie-bierstedt': {
    speakerSlug: 'marie-bierstedt',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'mia-diekow': {
    speakerSlug: 'mia-diekow',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'maximiliane-haecke': {
    speakerSlug: 'maximiliane-haecke',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'anne-helm': {
    speakerSlug: 'anne-helm',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'luise-helm': {
    speakerSlug: 'luise-helm',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'maria-koschny': {
    speakerSlug: 'maria-koschny',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'sophie-lechtenbrink': {
    speakerSlug: 'sophie-lechtenbrink',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'ronja-peters': {
    speakerSlug: 'ronja-peters',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'sarah-riedel': {
    speakerSlug: 'sarah-riedel',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'marie-luise-schramm': {
    speakerSlug: 'marie-luise-schramm',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'ilona-schulz': {
    speakerSlug: 'ilona-schulz',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'esra-vural': {
    speakerSlug: 'esra-vural',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'christian-gaul': {
    speakerSlug: 'christian-gaul',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'sebastian-christoph-jacob': {
    speakerSlug: 'sebastian-christoph-jacob',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'robin-kahnmeyer': {
    speakerSlug: 'robin-kahnmeyer',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'tobias-kluckert': {
    speakerSlug: 'tobias-kluckert',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'nicolas-koenig': {
    speakerSlug: 'nicolas-koenig',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'axel-lutter': {
    speakerSlug: 'axel-lutter',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'leonhard-mahlich': {
    speakerSlug: 'leonhard-mahlich',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'norman-matt': {
    speakerSlug: 'norman-matt',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'dieter-memel': {
    speakerSlug: 'dieter-memel',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'tommy-morgenstern': {
    speakerSlug: 'tommy-morgenstern',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'olaf-reichmann': {
    speakerSlug: 'olaf-reichmann',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'ricardo-richter': {
    speakerSlug: 'ricardo-richter',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'nico-sablik': {
    speakerSlug: 'nico-sablik',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'tim-sander': {
    speakerSlug: 'tim-sander',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'dennis-schmidt-foss': {
    speakerSlug: 'dennis-schmidt-foss',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
  'roman-wolko': {
    speakerSlug: 'roman-wolko',
    top5: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
    recent: [
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
      { title: '[PLATZHALTER - Stefan ergänzt]', actor: '', studio: '', year: undefined },
    ],
  },
};

export function getProjectsForSpeaker(slug: string): SpeakerProjects | undefined {
  return projectsData[slug];
}

export { projectsData };
