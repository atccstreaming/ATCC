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
    date: '2026-09-13',
    url: 'https://www.youtube.com/watch?v=WVt28gHxYJk',
    title: { zh: '主日崇拜 ｜ 2026年9月13日', en: 'Sunday Worship | September 13, 2026' },
    summary: {
      zh: '信心之路：在风暴中寻找平安',
      en: 'The path of faith: finding peace in the storm.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=iERZfq6Fe2w',
      title: { zh: '信心之路：在风暴中寻找平安', en: 'The path of faith: finding peace in the storm' }
    }
  },
  {
    date: '2026-09-06',
    url: 'https://www.youtube.com/watch?v=dNs91BPuB8M',
    title: { zh: '主日崇拜 ｜ 2026年9月6日', en: 'Sunday Worship | September 6, 2026' },
    summary: {
      zh: '永活的盼望',
      en: 'The everlasting hope.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=OYZmCZjI2fE',
      title: { zh: '永活的盼望：信息图文解析', en: 'The everlasting hope: an illustrated message recap' }
    }
  },
  {
    date: '2026-08-30',
    url: 'https://www.youtube.com/watch?v=43rRwP9Gt28',
    title: { zh: '主日崇拜 ｜ 2026年8月30日', en: 'Sunday Worship | August 30, 2026' },
    summary: {
      zh: '让神的国显明：灯与种子',
      en: 'Revealing the kingdom of God: the lamp and the seed.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=XHU5uHI41QM',
      title: { zh: '让神的国显明：灯与种子', en: 'Revealing the kingdom of God: the lamp and the seed' }
    }
  },
  {
    date: '2026-08-23',
    url: 'https://www.youtube.com/watch?v=h4CX9fytNsk',
    title: { zh: '主日崇拜 ｜ 2026年8月23日', en: 'Sunday Worship | August 23, 2026' },
    summary: { zh: '你的心田是哪一种', en: 'What kind of soil is your heart?' }
  },
  {
    date: '2026-08-09',
    url: 'https://www.youtube.com/watch?v=OLhHx03ln_8',
    title: { zh: '主日崇拜 ｜ 2026年8月9日', en: 'Sunday Worship | August 9, 2026' },
    summary: {
      zh: '谁才是属于神家的人',
      en: 'Who truly belongs to the household of God.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=6LXR5tsPTLs',
      title: { zh: '谁才是属于神家的人', en: 'Who truly belongs to the household of God' }
    }
  },
  {
    date: '2026-08-02',
    url: 'https://www.youtube.com/watch?v=E0L-f8yGgg8',
    title: { zh: '主日崇拜 ｜ 2026年8月2日', en: 'Sunday Worship | August 2, 2026' },
    summary: {
      zh: '真正的敬畏与跟随',
      en: 'True reverence and true following.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=9hXmkGOvrNM',
      title: { zh: '真正的敬畏与跟随', en: 'True reverence and true following' }
    }
  },
  {
    date: '2026-07-26',
    url: 'https://www.youtube.com/watch?v=bacJWAt3B_I',
    title: { zh: '主日崇拜 ｜ 2026年7月26日', en: 'Sunday Worship | July 26, 2026' },
    summary: {
      zh: '从平凡到大能：神同在的力量',
      en: "From the ordinary to the powerful: the strength of God's presence."
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=7HYrSqkldF0',
      title: { zh: '从平凡到大能：神同在的力量', en: "From the ordinary to the powerful: the strength of God's presence" }
    }
  },
  {
    date: '2026-07-19',
    url: 'https://www.youtube.com/watch?v=2Yp4RgCMKjw',
    title: { zh: '主日崇拜 ｜ 2026年7月19日', en: 'Sunday Worship | July 19, 2026' },
    summary: {
      zh: '危险的错觉：当虚假信仰带来危害',
      en: 'A dangerous illusion: when false faith brings harm.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=XNHXCXhKu4g',
      title: { zh: '危险的错觉：当虚假信仰带来危害', en: 'A dangerous illusion: when false faith brings harm' }
    }
  },
  {
    date: '2026-07-12',
    url: 'https://www.youtube.com/watch?v=z9UOqPzg0wM',
    title: { zh: '主日崇拜 ｜ 2026年7月12日', en: 'Sunday Worship | July 12, 2026' },
    summary: {
      zh: '盟约中的美满婚姻',
      en: 'A blessed marriage within the covenant.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=hpJKA4cLfSY',
      title: { zh: '盟约中的美满婚姻', en: 'A blessed marriage within the covenant' }
    }
  },
  {
    date: '2026-07-05',
    url: 'https://www.youtube.com/watch?v=Y7YoVniAVgY',
    title: { zh: '主日崇拜 ｜ 2026年7月5日', en: 'Sunday Worship | July 5, 2026' },
    summary: {
      zh: '在恩典中放下重担',
      en: 'Laying down the burden in grace.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=FFET7uGKtvQ',
      title: { zh: '在恩典中放下重担', en: 'Laying down the burden in grace' }
    }
  },
  {
    date: '2026-06-28',
    url: 'https://www.youtube.com/watch?v=ubFKQjoilF8',
    title: { zh: '主日崇拜 ｜ 2026年6月28日', en: 'Sunday Worship | June 28, 2026' },
    summary: {
      zh: '人生的意义',
      en: 'The meaning of life.'
    },
    clip: {
      url: 'https://www.youtube.com/watch?v=eNJVHgscwMs',
      title: { zh: '人生的意义：一个转变的模板', en: 'The meaning of life: a template for transformation' }
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
