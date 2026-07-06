import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export interface SermonEntry {
  date: string;
  url: string;
  title: LocalizedText;
  summary: LocalizedText;
}

// Newest first. To add a Sunday worship video, add one entry here — both the
// Chinese and English sermon pages render from this list.
export const sundayWorship: SermonEntry[] = [
  {
    date: '2026-07-05',
    url: 'https://www.youtube.com/watch?v=Y7YoVniAVgY',
    title: { zh: '主日崇拜 ｜ 2026年7月5日', en: 'Sunday Worship | July 5, 2026' },
    summary: {
      zh: '在恩典中放下重担',
      en: 'Laying down our burdens in grace.'
    }
  },
  {
    date: '2026-06-28',
    url: 'https://www.youtube.com/watch?v=ubFKQjoilF8',
    title: { zh: '主日崇拜 ｜ 2026年6月28日', en: 'Sunday Worship | June 28, 2026' },
    summary: {
      zh: '人生的意义',
      en: 'The meaning of life.'
    }
  },
  {
    date: '2026-06-21',
    url: 'https://www.youtube.com/watch?v=okeI4GtObJ8',
    title: { zh: '主日崇拜 ｜ 2026年6月21日', en: 'Sunday Worship | June 21, 2026' },
    summary: {
      zh: '敬畏神的父亲',
      en: 'A father who fears God.'
    }
  },
  {
    date: '2026-06-14',
    url: 'https://www.youtube.com/watch?v=lIf7zxw3W6Q',
    title: { zh: '主日崇拜 ｜ 2026年6月14日', en: 'Sunday Worship | June 14, 2026' },
    summary: {
      zh: '幸福的奥秘',
      en: 'The secret of happiness.'
    }
  },
  {
    date: '2026-06-07',
    url: 'https://www.youtube.com/watch?v=k771ucqIp2U',
    title: { zh: '主日崇拜 ｜ 2026年6月7日', en: 'Sunday Worship | June 7, 2026' },
    summary: {
      zh: '拆开屋顶的信心',
      en: 'Faith that tears open the roof.'
    }
  },
  {
    date: '2026-05-24',
    url: 'https://www.youtube.com/watch?v=kLpwJVBPtvQ',
    title: { zh: '主日崇拜 ｜ 2026年5月24日', en: 'Sunday Worship | May 24, 2026' },
    summary: {
      zh: '主的爱与恩典',
      en: 'The love and grace of the Lord.'
    }
  },
  {
    date: '2026-05-17',
    url: 'https://www.youtube.com/watch?v=OMixfYF1Dz8',
    title: { zh: '主日崇拜 ｜ 2026年5月17日', en: 'Sunday Worship | May 17, 2026' },
    summary: {
      zh: '人生的第二需要：扶持与分担',
      en: 'The second need of life: support and sharing.'
    }
  },
  {
    date: '2026-05-03',
    url: 'https://www.youtube.com/watch?v=ZSwdvef0uGA',
    title: { zh: '主日崇拜 ｜ 2026年5月3日', en: 'Sunday Worship | May 3, 2026' },
    summary: {
      zh: '忙而不乱的人生',
      en: 'A life that is busy but not chaotic: finding rest in a frantic world.'
    }
  },
  {
    date: '2026-04-26',
    url: 'https://www.youtube.com/watch?v=IaVnGZdI-x8',
    title: { zh: '主日崇拜 ｜ 2026年4月26日', en: 'Sunday Worship | April 26, 2026' },
    summary: {
      zh: '由软弱到刚强：彼得与我们的生命翻转',
      en: 'From weakness to strength: Peter and the transformation of our lives.'
    }
  },
  {
    date: '2026-04-19',
    url: 'https://www.youtube.com/watch?v=Btta9fBqwec',
    title: { zh: '主日崇拜 ｜ 2026年4月19日', en: 'Sunday Worship | April 19, 2026' },
    summary: {
      zh: '在考验中得胜：身份、试探与恩典',
      en: 'Overcoming trials: identity, temptation, and grace.'
    }
  },
  {
    date: '2026-04-12',
    url: 'https://www.youtube.com/watch?v=jq4TVfYuHto',
    title: { zh: '主日崇拜 ｜ 2026年4月12日', en: 'Sunday Worship | April 12, 2026' },
    summary: {
      zh: '耶稣基督福音的开始',
      en: 'The beginning of the gospel of Jesus Christ.'
    }
  },
  {
    date: '2026-03-22',
    url: 'https://www.youtube.com/watch?v=H0EWzktRu3M',
    title: { zh: '主日崇拜 ｜ 2026年3月22日', en: 'Sunday Worship | March 22, 2026' },
    summary: {
      zh: '人生的第一需要：鼓励和陪伴',
      en: 'The first need of life: encouragement and companionship.'
    }
  },
  {
    date: '2026-03-15',
    url: 'https://www.youtube.com/watch?v=RIsRQw3grzI',
    title: { zh: '主日崇拜 ｜ 2026年3月15日', en: 'Sunday Worship | March 15, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-03-08',
    url: 'https://www.youtube.com/watch?v=I1Po0fnc2yM',
    title: { zh: '主日崇拜 ｜ 2026年3月8日', en: 'Sunday Worship | March 8, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-02-15',
    url: 'https://www.youtube.com/watch?v=IwQL1Vblzlo',
    title: { zh: '主日崇拜 ｜ 2026年2月15日', en: 'Sunday Worship | February 15, 2026' },
    summary: { zh: '主日信息', en: 'Sunday message.' }
  }
];

export function getSundayWorship(locale: Locale) {
  return sundayWorship.map((s) => ({
    date: s.date,
    url: s.url,
    title: s.title[locale],
    summary: s.summary[locale]
  }));
}
