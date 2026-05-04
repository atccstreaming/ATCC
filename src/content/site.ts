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
      { title: '圣经学习分享会', time: '周五晚上 7:30 – 9:00' }
    ],
    leader: {
      name: '邹新华传道',
      role: '传道',
      bio: [
        '我是2002年6月受洗归在主的名下，妻子是2009年4月受洗，然而我们夫妻信主多年，却曾长年蹉跎光阴，灵里软弱，心中常常十分惭愧亏欠。然而，主的恩典从未离开我们，其间有好几位属灵牧者、宣教士教导我们、引领我们。2021年圣诞节前夕，借着清晰的呼召，我来到北美求学。这条道路充满挑战与考验，但每一步都看见主信实的同在。感谢神！2025年11月，我终于从神学院顺利完成道学硕士（M.Div.）学业。这不是我们自己的成就，乃是主亲自开路、供应、保守的结果。',
        '如今，主再次清楚呼召我们：留在本地，致力于华人社区的福音宣教，建立一间以基督为中心的本土教会，拯救更多的灵魂。正如主耶稣所言：“要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。”（太9:37-38）我们深知庄稼已经熟了，时候到了！求主大大兴起我们这微小的家庭，也兴起更多弟兄姊妹，与我们同心同行，一同进入这丰收的禾场。',
        '我们有一女一儿，从小在教会长大，经历了主日学、夏令营、青少年团契的浇灌，后来相继受洗归入主的名下。神更是使用他们，在教会中服事、在学校里作光作盐，成为我们极大的安慰与鼓励。这一切都是主的恩典，不是我们的功劳。我们全家都愿继续被主使用，成为祂手中的器皿。'
      ]
    },
    mission: {
      intro: '在神的心意中，忠心参与属神教会的建造，使主的身体被建立，使神的名得着荣耀。',
      bullets: [
        '以生命建造生命、以真理建造群体；',
        '在北卡三角区本地华人社区中传扬福音、牧养灵魂、活出彼此相爱的见证；专注圣经的教导与讲解，帮助信徒扎根真理、建立以基督为中心的群体生活；',
        '顺服圣灵的带领，忠心回应神在这个时代给我们的本地宣教使命。'
      ],
      closing: '教会不是人的事业，乃是神的工程；我们只是同工、管家与仆人，一切以“是否荣耀基督、是否合乎圣经”为最高检验标准。'
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
          text: '在已立定的基督与圣经根基上，忠心参与神属灵家室的建造，以真理和生命为核心，而非外在形式或个人成就。'
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
        'I was baptized in June 2002, and my wife was baptized in April 2009. Although we have believed in the Lord for many years, we also recognize seasons of spiritual weakness and wasted time. Yet the Lord’s grace never departed from us. Through the teaching and guidance of faithful pastors and missionaries, God continued to lead us. Around Christmas 2021, through a clear calling, I came to North America for theological study. The road was full of challenges, but at every step we witnessed the Lord’s faithful presence. In November 2025, by God’s grace, I completed the Master of Divinity (M.Div.) program. This was not our own achievement, but the Lord’s provision, protection, and guidance.',
        'Today, the Lord has called us again: to remain local, serve the Chinese community through gospel mission, and build a Christ-centered local church so that more souls may be saved. As Jesus said, “The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest” (Matthew 9:37–38). We believe the harvest is ready and the time has come. May the Lord raise up our small family, along with more brothers and sisters, to enter this harvest field together.',
        'We have one daughter and one son. They grew up in church, were nurtured through Sunday school, summer camps, and youth fellowship, and later were baptized into the name of the Lord. God has also used them to serve in church and be salt and light at school. All of this is the Lord’s grace, not our merit. Our whole family desires to continue being used by the Lord as vessels in His hands.'
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
