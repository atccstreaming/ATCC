import type { Locale } from '../i18n';

const base = {
  name: '仁爱三角区华人教会',
  nameEn: 'Agape Triangle Chinese Church',
  addressLines: ['8509 Penny Rd,', 'Raleigh, NC 27606'],
  addressFull: '8509 Penny Road, Raleigh, NC 27606, USA',
  phoneDisplay: '626-591-6623',
  phoneHref: 'tel:6265916623',
  email: 'calebzxh@gmail.com'
} as const;

export const siteByLocale = {
  zh: {
    ...base,
    description: '在神的心意中，忠心参与属神教会的建造，使主的身体被建立，使神的名得着荣耀。',
    weeklyMeetings: [
      { title: '主日崇拜', time: '周日上午 11:00 至 12:20' },
      { title: '祷告会', time: '周三晚上 7:30 至 8:30' },
      { title: '聖經學習分享會', time: '週五晚上 7:30 – 9:00' }
    ],
    leader: {
      name: '邹新华传道',
      role: '传道',
      bio: [
        '我是2002年6月受洗歸在主的名下，妻子是2009年4月受洗，然而我們夫妻信主多年，卻曾長年蹉跎光陰，靈里軟弱，心中常常十分慚愧虧欠。然而，主的恩典從未離開我們，其間有好幾位的屬靈牧者、宣教士教導我們、引領我們。2021年聖誕節前夕，借著清晰的呼召，我來到北美求學。這條道路充滿挑戰與考驗，但每一步都看見主信實的同在。感謝神！2025年11月，我終於從神學院順利完成道學碩士（M.Div.）學業。這不是我們自己的成就，乃是主親自開路、供應、保守的結果。',
        '如今，主再次清楚呼召我們：留在本地，致力於華人社區的福音宣教，建立一間以基督為中心的本土教會，拯救更多的靈魂。正如主耶穌所言：“要收的莊稼多，做工的人少。所以，你們當求莊稼的主打發工人出去收他的莊稼。”（太9:37-38）我們深知莊稼已經熟了，時候到了！求主大大興起我们這微小的家庭，也興起更多弟兄姊妹，與我們同心同行，一同進入這豐收的禾場。',
        '我們有一女一兒，從小在教會長大，經歷了主日學、夏令營、青少年團契的澆灌，後來相繼受洗歸入主的名下。神更是使用他們，在教會中服事、在學校里作光作鹽，成為我們極大的安慰與鼓勵。這一切都是主的恩典，不是我們的功勞。我們全家都願繼續被主使用，成為祂手中的器皿。'
      ]
    },
    mission: {
      intro: '在神的心意中，忠心參與屬神教會的建造，使主的身體被建立，使神的名得著榮耀。',
      bullets: [
        '以生命建造生命、以真理建造群體；',
        '在北卡三角區本地華人社區中傳揚福音、牧養靈魂、活出彼此相愛的見證；專注聖經的教導與講解，幫助信徒扎根真理、建立以基督為中心的群體生活；',
        '順服聖靈的帶領，忠心回應神在這個時代給我們的本地宣教使命。'
      ],
      closing: '教會不是人的事業，乃是神的工程；我們只是同工、管家與僕人，一切以“是否榮耀基督、是否合乎聖經”為最高檢驗標準。'
    },
    purpose: {
      title: '彼此相爱、同心建造、本地宣教。',
      items: [
        {
          title: '彼此相爱',
          text: '以基督的爱为生命核心，建立彼此牧养、彼此建造的群体关系（约翰福音13:34-35）。'
        },
        {
          title: '同心建造',
          text: '在已立定的基督與聖經根基上，忠心參與神屬靈家室的建造，以真理和生命为核心，而非外在形式或個人成就。'
        },
        {
          title: '本地宣教',
          text: '扎根北卡三角区华人社区，传扬纯正福音，使未信者得救，已信者成长，并成为神在这个地区复兴的管道。'
        }
      ]
    },
    beliefs: [
      {
        title: '基督是教会唯一的根基与磐石',
        text: '耶稣基督是教会的房角石、活石与唯一根基（哥林多前书3:11；以弗所书2:20）。教会的一切属灵生命、真理与合一，唯独从基督而来；教会不建立在任何人、任何制度或任何传统之上。'
      },
      {
        title: '圣经是教会唯一的最高权威',
        text: '我们坚定持守“唯独基督、唯独圣经”。圣经（旧约与新约正典）是神完全的启示，是教会一切教导、实践、分辨与方向的最高、唯一、绝对准则。'
      },
      {
        title: '使徒与先知的根基已立定',
        text: '教会已建立在使徒和先知的根基上（以弗所书2:20），今日不再重建根基，而是在已立定的圣经根基上忠心建造。'
      },
      {
        title: '以基督为中心，拒绝一切形式的个人崇拜与权威主义',
        text: '一切事工、教导与生活，凡事回到基督与圣经的审判之下。'
      }
    ]
  },
  en: {
    ...base,
    description:
      'Faithfully participating in God’s work of building His church, so that the body of Christ is established and God’s name is glorified.',
    weeklyMeetings: [
      { title: 'Sunday Worship', time: 'Sundays 11:00am – 12:20pm' },
      { title: 'Prayer Meeting', time: 'Wednesdays 7:30pm – 8:30pm' },
      { title: 'Bible Study & Sharing', time: 'Fridays 7:30pm – 9:00pm' }
    ],
    leader: {
      name: 'Preacher Xinhua Zou',
      role: 'Preacher',
      bio: [
        'This is an English starter translation of the leader introduction. Replace with an official English bio if available.',
        'God has called us to remain local and serve the Chinese community in the Triangle area with evangelism and discipleship.',
        'Our family desires to continue being used by the Lord as His instruments.'
      ]
    },
    mission: {
      intro:
        'Faithfully participating in God’s work of building His church, so that the body of Christ is established and God’s name is glorified.',
      bullets: [
        'Building life with life; building community with truth.',
        'Proclaiming the gospel and shepherding souls within the local Chinese community in the Triangle area of North Carolina.',
        'Following the leading of the Holy Spirit and responding faithfully to the local mission God gives in this generation.'
      ],
      closing:
        'The church is God’s work, not a human enterprise. Our highest standard is whether it glorifies Christ and aligns with Scripture.'
    },
    purpose: {
      title: 'Love one another, build together, and serve locally.',
      items: [
        {
          title: 'Love One Another',
          text: 'Centered on Christ’s love, we cultivate a community of mutual care and edification (John 13:34–35).'
        },
        {
          title: 'Build Together',
          text: 'On the foundation of Christ and Scripture, we build faithfully with truth and life—not outward form or personal achievement.'
        },
        {
          title: 'Local Mission',
          text: 'Rooted in the local Chinese community, we proclaim the gospel, nurture believers, and become a channel of renewal in the region.'
        }
      ]
    },
    beliefs: [
      {
        title: 'Christ is the only foundation of the church',
        text: 'Jesus Christ is the cornerstone and the only foundation (1 Cor 3:11; Eph 2:20).'
      },
      {
        title: 'Scripture is the highest authority',
        text: 'The Bible is God’s complete revelation and the final authority for teaching and practice.'
      },
      {
        title: 'The apostolic foundation is already laid',
        text: 'The church is built on the foundation of the apostles and prophets (Eph 2:20); we build faithfully upon it today.'
      },
      {
        title: 'Christ-centered ministry',
        text: 'All ministry and life are evaluated under the judgment of Christ and Scripture.'
      }
    ]
  }
} as const;

export type SiteContent = (typeof siteByLocale)[Locale];

export function getSite(locale: Locale): SiteContent {
  return siteByLocale[locale];
}
