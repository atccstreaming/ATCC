import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export interface SermonEntry {
  date: string;
  url: string;
  title: LocalizedText;
  summary: LocalizedText;
  // Condensed highlights clip of the same Sunday's message, when available.
  clip?: {
    url: string;
    title: LocalizedText;
  };
}

// Newest first. To add a Sunday worship video, add one entry here — both the
// Chinese and English sermon pages render from this list.
export const sundayWorship: SermonEntry[] = [
  {
    date: '2026-09-06',
    url: 'https://www.youtube.com/watch?v=kcLmnALaN2k',
    title: { zh: '主日崇拜 ｜ 2026年9月6日', en: 'Sunday Worship | September 6, 2026' },
    summary: {
      zh: '永活的盼望',
      en: 'The everlasting hope.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=P9SQnjAglHg',
      title: { zh: '永活的盼望：信息图文解析', en: 'The everlasting hope: an illustrated message recap' }
    }
  },
  {
    date: '2026-08-30',
    url: 'https://www.youtube.com/watch?v=Fn1miqVT1Qo',
    title: { zh: '主日崇拜 ｜ 2026年8月30日', en: 'Sunday Worship | August 30, 2026' },
    summary: {
      zh: '让神的国显明：灯与种子',
      en: 'Revealing the kingdom of God: the lamp and the seed.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=uGt8_yxV3XE',
      title: { zh: '让神的国显明：灯与种子', en: 'Revealing the kingdom of God: the lamp and the seed' }
    }
  },
  {
    date: '2026-08-23',
    url: 'https://www.youtube.com/watch?v=h4CX9fytNsk',
    title: { zh: '主日崇拜 ｜ 2026年8月23日', en: 'Sunday Worship | August 23, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-08-09',
    url: 'https://www.youtube.com/watch?v=J0df8iW8U8M',
    title: { zh: '主日崇拜 ｜ 2026年8月9日', en: 'Sunday Worship | August 9, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-07-26',
    url: 'https://www.youtube.com/watch?v=QRRDVC6w13g',
    title: { zh: '主日崇拜 ｜ 2026年7月26日', en: 'Sunday Worship | July 26, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-07-19',
    url: 'https://www.youtube.com/watch?v=urz17OT0CBY',
    title: { zh: '主日崇拜 ｜ 2026年7月19日', en: 'Sunday Worship | July 19, 2026' },
    summary: {
      zh: '园丁之旅：心灵的属灵诊断',
      en: "The gardener's journey: a spiritual diagnosis of the heart."
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=jwkT-dX7U_g',
      title: { zh: '园丁之旅：心灵的属灵诊断', en: "The gardener's journey: a spiritual diagnosis of the heart" }
    }
  },
  {
    date: '2026-06-28',
    url: 'https://www.youtube.com/watch?v=dJ49ZqZh-2I',
    title: { zh: '主日崇拜 ｜ 2026年6月28日', en: 'Sunday Worship | June 28, 2026' },
    summary: {
      zh: '人生的意义',
      en: 'The meaning of life.'
    }
  }
];

export function getSundayWorship(locale: Locale) {
  return sundayWorship.map((s) => ({
    date: s.date,
    url: s.url,
    title: s.title[locale],
    summary: s.summary[locale],
    clip: s.clip ? { url: s.clip.url, title: s.clip.title[locale] } : undefined
  }));
}
