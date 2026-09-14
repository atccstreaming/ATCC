import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

interface Clip {
  url: string;
  title: LocalizedText;
}

export interface SermonEntry {
  date: string;
  url: string;
  title: LocalizedText;
  summary: LocalizedText;
  // Condensed highlights clip(s) of the same Sunday's message, when available.
  // Usually zero or one; a Sunday occasionally gets more than one recap clip.
  clips?: Clip[];
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
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=iERZfq6Fe2w',
        title: { zh: '信心之路：在风暴中寻找平安', en: 'The path of faith: finding peace in the storm' }
      }
    ]
  },
  {
    date: '2026-09-06',
    url: 'https://www.youtube.com/watch?v=dNs91BPuB8M',
    title: { zh: '主日崇拜 ｜ 2026年9月6日', en: 'Sunday Worship | September 6, 2026' },
    summary: {
      zh: '永活的盼望',
      en: 'The everlasting hope.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=OYZmCZjI2fE',
        title: { zh: '永活的盼望：信息图文解析', en: 'The everlasting hope: an illustrated message recap' }
      }
    ]
  },
  {
    date: '2026-08-30',
    url: 'https://www.youtube.com/watch?v=43rRwP9Gt28',
    title: { zh: '主日崇拜 ｜ 2026年8月30日', en: 'Sunday Worship | August 30, 2026' },
    summary: {
      zh: '让神的国显明：灯与种子',
      en: 'Revealing the kingdom of God: the lamp and the seed.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=XHU5uHI41QM',
        title: { zh: '让神的国显明：灯与种子', en: 'Revealing the kingdom of God: the lamp and the seed' }
      }
    ]
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
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=6LXR5tsPTLs',
        title: { zh: '谁才是属于神家的人', en: 'Who truly belongs to the household of God' }
      }
    ]
  },
  {
    date: '2026-08-02',
    url: 'https://www.youtube.com/watch?v=E0L-f8yGgg8',
    title: { zh: '主日崇拜 ｜ 2026年8月2日', en: 'Sunday Worship | August 2, 2026' },
    summary: {
      zh: '真正的敬畏与跟随',
      en: 'True reverence and true following.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=9hXmkGOvrNM',
        title: { zh: '真正的敬畏与跟随', en: 'True reverence and true following' }
      }
    ]
  },
  {
    date: '2026-07-26',
    url: 'https://www.youtube.com/watch?v=bacJWAt3B_I',
    title: { zh: '主日崇拜 ｜ 2026年7月26日', en: 'Sunday Worship | July 26, 2026' },
    summary: {
      zh: '从平凡到大能：神同在的力量',
      en: "From the ordinary to the powerful: the strength of God's presence."
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=7HYrSqkldF0',
        title: { zh: '从平凡到大能：神同在的力量', en: "From the ordinary to the powerful: the strength of God's presence" }
      }
    ]
  },
  {
    date: '2026-07-19',
    url: 'https://www.youtube.com/watch?v=2Yp4RgCMKjw',
    title: { zh: '主日崇拜 ｜ 2026年7月19日', en: 'Sunday Worship | July 19, 2026' },
    summary: {
      zh: '危险的错觉：当虚假信仰带来危害',
      en: 'A dangerous illusion: when false faith brings harm.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=XNHXCXhKu4g',
        title: { zh: '危险的错觉：当虚假信仰带来危害', en: 'A dangerous illusion: when false faith brings harm' }
      }
    ]
  },
  {
    date: '2026-07-12',
    url: 'https://www.youtube.com/watch?v=z9UOqPzg0wM',
    title: { zh: '主日崇拜 ｜ 2026年7月12日', en: 'Sunday Worship | July 12, 2026' },
    summary: {
      zh: '盟约中的美满婚姻',
      en: 'A blessed marriage within the covenant.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=hpJKA4cLfSY',
        title: { zh: '盟约中的美满婚姻', en: 'A blessed marriage within the covenant' }
      }
    ]
  },
  {
    date: '2026-07-05',
    url: 'https://www.youtube.com/watch?v=Y7YoVniAVgY',
    title: { zh: '主日崇拜 ｜ 2026年7月5日', en: 'Sunday Worship | July 5, 2026' },
    summary: {
      zh: '在恩典中放下重担',
      en: 'Laying down the burden in grace.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=FFET7uGKtvQ',
        title: { zh: '在恩典中放下重担', en: 'Laying down the burden in grace' }
      }
    ]
  },
  {
    date: '2026-06-28',
    url: 'https://www.youtube.com/watch?v=ubFKQjoilF8',
    title: { zh: '主日崇拜 ｜ 2026年6月28日', en: 'Sunday Worship | June 28, 2026' },
    summary: {
      zh: '人生的意义',
      en: 'The meaning of life.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=eNJVHgscwMs',
        title: { zh: '人生的意义：一个转变的模板', en: 'The meaning of life: a template for transformation' }
      }
    ]
  },
  {
    date: '2026-06-21',
    url: 'https://www.youtube.com/watch?v=okeI4GtObJ8',
    title: { zh: '主日崇拜 ｜ 2026年6月21日', en: 'Sunday Worship | June 21, 2026' },
    summary: {
      zh: '敬畏神的父亲的5大支柱',
      en: 'Five pillars of a father who fears God.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=eOorKO5bVNM',
        title: { zh: '敬畏神的父亲的5大支柱', en: 'Five pillars of a father who fears God' }
      }
    ]
  },
  {
    date: '2026-06-14',
    url: 'https://www.youtube.com/watch?v=lIf7zxw3W6Q',
    title: { zh: '主日崇拜 ｜ 2026年6月14日', en: 'Sunday Worship | June 14, 2026' },
    summary: {
      zh: '真正的幸福奥秘',
      en: 'The true secret of happiness.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=p8iG9zVf21k',
        title: { zh: '真正的幸福奥秘', en: 'The true secret of happiness' }
      }
    ]
  },
  {
    date: '2026-06-07',
    url: 'https://www.youtube.com/watch?v=k771ucqIp2U',
    title: { zh: '主日崇拜 ｜ 2026年6月7日', en: 'Sunday Worship | June 7, 2026' },
    summary: {
      zh: '活泼信心的剖析：拆开屋顶',
      en: 'Anatomy of a living faith: breaking open the roof.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=oCUouFjyIh8',
        title: { zh: '活泼信心的剖析：拆开屋顶', en: 'Anatomy of a living faith: breaking open the roof' }
      }
    ]
  },
  {
    date: '2026-05-24',
    url: 'https://www.youtube.com/watch?v=kLpwJVBPtvQ',
    title: { zh: '主日崇拜 ｜ 2026年5月24日', en: 'Sunday Worship | May 24, 2026' },
    summary: {
      zh: '孤立的解药：理解爱、恩典与真理',
      en: 'The cure for isolation: understanding love, grace, and truth.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=PRn8lAprPd4',
        title: { zh: '孤立的解药：理解爱、恩典与真理', en: 'The cure for isolation: understanding love, grace, and truth' }
      }
    ]
  },
  {
    date: '2026-05-17',
    url: 'https://www.youtube.com/watch?v=OMixfYF1Dz8',
    title: { zh: '主日崇拜 ｜ 2026年5月17日', en: 'Sunday Worship | May 17, 2026' },
    summary: {
      zh: '人生的第二需要：扶持与分担',
      en: "Life's second need: support and shared burdens."
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=tzTPdFi3AFM',
        title: { zh: '人生的第二需要：扶持与分担', en: "Life's second need: support and shared burdens" }
      }
    ]
  },
  {
    date: '2026-05-03',
    url: 'https://www.youtube.com/watch?v=ZSwdvef0uGA',
    title: { zh: '主日崇拜 ｜ 2026年5月3日', en: 'Sunday Worship | May 3, 2026' },
    summary: {
      zh: '忙而不乱的人生：在狂热世界中寻找安息',
      en: 'A busy but unshaken life: finding rest in a frantic world.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=9cNOin0fq_E',
        title: { zh: '忙而不乱的人生：在狂热世界中寻找安息', en: 'A busy but unshaken life: finding rest in a frantic world' }
      }
    ]
  },
  {
    date: '2026-04-26',
    url: 'https://www.youtube.com/watch?v=IaVnGZdI-x8',
    title: { zh: '主日崇拜 ｜ 2026年4月26日', en: 'Sunday Worship | April 26, 2026' },
    summary: {
      zh: '由软弱到刚强：彼得的转变',
      en: "From weakness to strength: Peter's transformation."
    },
    // This Sunday genuinely got two recap clips, confirmed by matching publish timestamps.
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=FvKyBMa0-GQ',
        title: { zh: '由软弱到刚强：彼得的转变', en: "From weakness to strength: Peter's transformation" }
      },
      {
        url: 'https://www.youtube.com/watch?v=Y984Fo6miUw',
        title: { zh: '战胜考验：身份、试探与恩典', en: 'Overcoming trials: identity, temptation, and grace' }
      }
    ]
  },
  {
    date: '2026-04-19',
    url: 'https://www.youtube.com/watch?v=Btta9fBqwec',
    title: { zh: '主日崇拜 ｜ 2026年4月19日', en: 'Sunday Worship | April 19, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-04-12',
    url: 'https://www.youtube.com/watch?v=jq4TVfYuHto',
    title: { zh: '主日崇拜 ｜ 2026年4月12日', en: 'Sunday Worship | April 12, 2026' },
    summary: {
      zh: '福音：不止是“好消息”',
      en: 'The gospel: more than just "good news."'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=em7_TMjsP-M',
        title: { zh: '福音：不止是“好消息”', en: 'The gospel: more than just "good news"' }
      }
    ]
  },
  {
    date: '2026-03-22',
    url: 'https://www.youtube.com/watch?v=H0EWzktRu3M',
    title: { zh: '主日崇拜 ｜ 2026年3月22日', en: 'Sunday Worship | March 22, 2026' },
    summary: {
      zh: '鼓励与陪伴：我们真正需要什么',
      en: 'Encouragement and companionship: what we truly need.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=_qK8nHgtudM',
        title: { zh: '鼓励与陪伴：我们真正需要什么', en: 'Encouragement and companionship: what we truly need' }
      }
    ]
  },
  {
    date: '2026-03-15',
    url: 'https://www.youtube.com/watch?v=RIsRQw3grzI',
    title: { zh: '主日崇拜 ｜ 2026年3月15日', en: 'Sunday Worship | March 15, 2026' },
    summary: {
      zh: '喜乐的心是良药：一份情绪健康指南',
      en: 'A joyful heart is good medicine: a guide to emotional health.'
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=HasRd8jTDw8',
        title: { zh: '喜乐的心是良药：一份情绪健康指南', en: 'A joyful heart is good medicine: a guide to emotional health' }
      }
    ]
  },
  {
    date: '2026-03-08',
    url: 'https://www.youtube.com/watch?v=I1Po0fnc2yM',
    title: { zh: '主日崇拜 ｜ 2026年3月8日', en: 'Sunday Worship | March 8, 2026' },
    summary: {
      zh: '别让忙碌偷走你的喜乐：从马大到马利亚的生命翻转',
      en: "Don't let busyness steal your joy: from Martha to Mary."
    },
    clips: [
      {
        url: 'https://www.youtube.com/watch?v=jNlSBamtgzc',
        title: {
          zh: '别让忙碌偷走你的喜乐：从马大到马利亚的生命翻转',
          en: "Don't let busyness steal your joy: from Martha to Mary"
        }
      }
    ]
  },
  {
    date: '2026-02-22',
    url: 'https://www.youtube.com/watch?v=hGMbis4Idgk',
    title: { zh: '主日崇拜 ｜ 2026年2月22日', en: 'Sunday Worship | February 22, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  },
  {
    date: '2026-02-15',
    url: 'https://www.youtube.com/watch?v=IwQL1Vblzlo',
    title: { zh: '主日崇拜 ｜ 2026年2月15日', en: 'Sunday Worship | February 15, 2026' },
    summary: { zh: '主日崇拜录像', en: 'Sunday worship recording.' }
  }
];

export function getSundayWorship(locale: Locale) {
  const dayFormat =
    locale === 'zh'
      ? new Intl.DateTimeFormat('zh-CN', { day: 'numeric', timeZone: 'UTC' })
      : new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });

  return sundayWorship.map((s) => {
    const [year, month, day] = s.date.split('-').map(Number);
    const dayLabel = dayFormat.format(new Date(Date.UTC(year, month - 1, day)));
    return {
      date: s.date,
      day: dayLabel,
      url: s.url,
      title: s.title[locale],
      summary: s.summary[locale],
      clips: (s.clips ?? []).map((c) => ({ url: c.url, title: c.title[locale] }))
    };
  });
}

// Groups the (already newest-first) sermon list into consecutive month buckets,
// for a more compact, scannable layout on the sermons pages.
export function getSundayWorshipByMonth(locale: Locale) {
  const items = getSundayWorship(locale);
  const dateFormat = new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC'
  });

  const groups: { label: string; items: typeof items }[] = [];
  for (const item of items) {
    const [year, month] = item.date.split('-').map(Number);
    const label = dateFormat.format(new Date(Date.UTC(year, month - 1, 1)));
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.label === label) {
      lastGroup.items.push(item);
    } else {
      groups.push({ label, items: [item] });
    }
  }
  return groups;
}
