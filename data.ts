
import { Tool, Category } from './types';

const getIcon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const TOOLS: Tool[] = [
  // --- Info Input & Processing ---
  {
    id: 'bibigpt',
    name: 'BibiGPT',
    category: Category.INFO,
    description: 'AI 音视频助理，快速总结视频内容并生成思维导图、文章大纲等。',
    longDescription: 'AI 音视频助理，我学习 YouTube 视频的主力工具。可以快速总结视频内容并生成各种辅助学习媒介，比如思维导图、文章大纲等。\n\n右上角可以切换生成各种类型的学习媒介，比如网站、游戏、PPT、闪记卡，可以同步看各种版本字幕甚至能重新烧录视频。\n\n而且它的相关功能现在已经非常完善，比如有全网标记待看视频的浏览器插件，有非常多的笔记软件导出支持等。',
    imageUrl: 'https://cdn.gooo.ai/web-images/3e667251b0c93c82adda0d495cf0818fca6daf386518b23aca25168970076dbc',
    icon: getIcon('bibigpt.co'),
    discount: '五折优惠',
    discountCode: 'BF2025',
    link: 'https://bibigpt.co/r/inZGHm',
    note: '我是年付用户，这次五折力度确实不错。'
  },
  {
    id: 'podwise',
    name: 'Podwise',
    category: Category.INFO,
    description: '播客学习助手，提取核心内容，支持生成摘要和知识卡片。',
    longDescription: '播客学习助手，帮你快速提取播客核心内容，支持生成摘要和知识卡片。支持网页版和手机端，手机端几乎可以直接替换掉现有的播客软件了。\n\n如果有经常听英文播客习惯，推荐使用。',
    imageUrl: 'https://cdn.gooo.ai/web-images/87bad42bbd06eaa807cd8e633a463f75fd0ba912856fe274309b22413eaa4806',
    icon: getIcon('podwise.ai'),
    discount: '6折优惠',
    discountCode: 'BF2025',
    link: 'https://podwise.ai/',
    note: '如果有经常听英文播客习惯，推荐使用。'
  },
  {
    id: 'quill-meetings',
    name: 'Quill Meetings',
    category: Category.INFO,
    description: '录音转文字工具，支持添加笔记、截图和标记关键内容。',
    longDescription: '我一直在用的录音转文字工具。参加会议时我习惯打开它录制，电脑端可以添加额外笔记和截图，甚至点击羽毛符号快速标记关键语音内容，回顾时会着重标记。\n\n我最喜欢的是它的模板库，可以基于录音生成各种笔记，格式友好内容详实。可惜的是手机端只能录制，无法同步记笔记，且只能同步到电脑端使用。\n\n其实它没有黑五折扣，但我找到了一个可用的折扣码，能优惠 20 刀，建议用来购买 50 小时录制时长。\n\nP.S. 其实 Granola 的手机版现在也不错，支持中文且可边录制边记笔记，可惜的是桌面端还不支持。',
    imageUrl: 'https://cdn.gooo.ai/web-images/e427a4a1b728386d27bd675da54d717af4f8461629cc801119abac7a4aab82dd',
    images: [
      'https://cdn.gooo.ai/web-images/24e3e0497440fe797e904c39f2dcd3d18fecbc7bb76e23ea481b6a451741b222',
      'https://cdn.gooo.ai/web-images/a0afa7455d4c4bb4852d798d2d3e7300f974693b054fef6c2b19baaab6662005'
    ],
    icon: getIcon('quillmeetings.com'),
    discount: '优惠 $20',
    discountCode: 'DYLAN20',
    link: 'https://quillmeetings.com/?rc=yVR6Uz7T-eMvCQiU8-LSL7ejUH-4soJEGkzz',
    note: '虽无官方黑五折扣，但此优惠码可用立减20刀，最建议是购买50小时时长（29刀优惠后9刀），性价比非常高。通过下方链接注册可获赠12小时，好用了再去买。'
  },
  {
    id: 'eagle',
    name: 'Eagle',
    category: Category.INFO,
    description: '最好用的素材管理软件之一，一次付费终身授权。',
    longDescription: '最好用的素材管理软件之一，我用了很多年。一次付费终身授权永久免费更新，非常良心。\n\n现在支持非常多的格式，已经超脱设计师使用范畴，新媒体内容制作、AIGC 素材整理都可以用。对于素材整理有非常多的手段，可以很方便地整理各种 AIGC 素材。',
    imageUrl: 'https://cdn.gooo.ai/web-images/b48dae0405710f2a59052244939e3ce8565333a09af955126d6332aeb82c4b73',
    images: [
      'https://cdn.gooo.ai/web-images/583c278cf53b5b3d5caf5071426ca3f5bc1412499261cbc903c4f3870dcdafa8'
    ],
    icon: getIcon('eagle.cool'),
    discount: '¥160.3 (7折)',
    price: '原价 ¥229 → 折后 ¥160.3',
    link: 'https://cn.eagle.cool/',
    note: '两台设备授权，非常良心。'
  },
  {
    id: 'craft',
    name: 'Craft',
    category: Category.INFO,
    description: '非常精致的笔记软件，界面美观，支持多终端同步。',
    longDescription: '非常精致的笔记软件，支持多终端同步。界面美观，适合收集和整理信息。\n\n还有很多我在用的笔记类工具没有提供黑五折扣，感兴趣的也可以去看看：Heptabase、Tana、Bear。',
    imageUrl: 'https://cdn.gooo.ai/web-images/c55b08b825875b73733f15c06cc6172a4f2872e84c092f7d378a6593b54a1bc9',
    icon: getIcon('craft.do'),
    discount: '黑五特惠',
    price: 'Lite ¥239.4/年 | Plus ¥419.4/年',
    link: 'https://www.craft.do/zh-CN/pricing',
    note: '我通过 Setapp（下文会提到）订阅使用，如果你打算用 Setapp，就没必要单独买了。'
  },

  // --- Creator Tools ---
  {
    id: 'youmind',
    name: 'YouMind',
    category: Category.CREATOR,
    description: '玉伯老师创业产品，AI 辅助创作与思维梳理工具。',
    longDescription: '支付宝前端大神玉伯老师的创业产品，我从创业初期就开始关注（非常早期的付费用户）。现在版本已经很好用了，最近的一些文章创作我已经从 Obsidian 转移到 YouMind。\n\n比如你现在看到的这篇文章就是我在 YouMind 里面创作，左侧是我收集的黑五折扣信息，右侧是我让 AI 帮送我梳理，中间就是我的创作区域。配图也是直接全文一次性生成插入，按照统一的图片规范。接下来也会找时间写 YouMind 的使用分享，不知道这个大家感兴趣吗？',
    imageUrl: 'https://cdn.gooo.ai/web-images/87ce9ed4a44f55780156bce8f278fc6818abd423ea01030250d85bdfdf82cec1',
    images: [
      'https://cdn.gooo.ai/web-images/1b51ce5a77788779b89022ec47e3c9f5794d81a11f7ab1759ac8df37dafdbd1e'
    ],
    icon: getIcon('youmind.com'),
    discount: '五折优惠',
    discountCode: 'BLACKGIFT',
    link: 'https://youmind.com/invite/99839A',
    note: '观察一年只有这一次这么大的折扣。'
  },
  {
    id: 'screen-studio',
    name: 'Screen Studio',
    category: Category.CREATOR,
    description: '专业级录屏工具，自动生成平滑缩放和鼠标跟随效果。',
    longDescription: '专业级录屏工具，特别适合制作教程和演示视频。你看到演示桌面操作的时候，右下角出来圆角头像的视频，基本都是这款工具剪辑出来，而且整个操作非常简单傻瓜化。\n\n当然现在也有不少人依照这个产品做了独立产品出来，在定位上有一些不同，如果适合自己也可以考虑。',
    imageUrl: 'https://cdn.gooo.ai/web-images/04bdf939f8a5a60b9f60672be4e7241f0937f6db2723a7685cdd7b617b156b43',
    icon: getIcon('screen.studio'),
    discount: '六折优惠',
    discountCode: 'BLACKFRIDAY25',
    link: 'https://screenstudio.lemonsqueezy.com?aff=Y69ZZ',
    note: '演示视频神器，操作非常简单傻瓜化。'
  },
  {
    id: 'cleanshot-x',
    name: 'CleanShot X',
    category: Category.CREATOR,
    description: 'Mac 上最好用的全能截图录屏工具。',
    longDescription: '我长年使用的截图录屏工具，非常全能，可能是最好的 Mac 截屏软件之一。我所有的操作截图都用这个软件，替换系统快捷键后用起来很顺手。而且简单的录屏也可以用它来完成。',
    imageUrl: 'https://cdn.gooo.ai/web-images/a7d115bd32614d71cd00e757cc3976b66de6a9b94c416571e183d809911828e5',
    icon: getIcon('cleanshot.com'),
    discount: '$20.30 (买断)',
    link: 'https://cleanshot.com/',
    note: '我通过 Setapp（下文会提到）订阅使用，如果你打算用 Setapp，就没必要单独买了。'
  },
  {
    id: 'lovart',
    name: 'Lovart',
    category: Category.CREATOR,
    description: '设计智能体，支持无限画板生图、PSD图层和局部重绘。',
    longDescription: '设计智能体，适合有较多设计需求的创作者。免费用户也可以先试用。支持无限画板上的图片生成操作，也支持单独使用各种生图模型，还有 psd 图层和刚推出的指哪改哪功能。\n\n当然，如果你只用生图模型，可直接用 YouMind 就足够了，有复杂的设计需求再用 Lovart 合适一点。',
    imageUrl: 'https://cdn.gooo.ai/web-images/d3ebf58c4543541d3294166df157e17911fa13c2fd5adccdc5fe46b5e2243a9f',
    icon: getIcon('lovart.ai'),
    discount: '年付 4 折',
    link: 'https://www.lovart.ai/zh/home',
    note: '黑五限时年付4折，截止11月30日。'
  },

  // --- Efficiency ---
  {
    id: 'things',
    name: 'Things 3',
    category: Category.EFFICIENCY,
    description: '优雅的任务管理工具，Mac/iOS 生态的经典选择。',
    longDescription: '优雅的任务管理工具，Mac/iOS 生态的经典选择。保持克制的设计，在众多复杂 todo 软件中别树一帜。',
    imageUrl: 'https://cdn.gooo.ai/web-images/40881e3c198828f26a65a6b87c962cbdce63fdfcf4a225aedce97c2e1b51b9bb',
    icon: getIcon('culturedcode.com'),
    discount: '7折优惠',
    link: 'https://culturedcode.com/things/',
    note: '应用市场直接购买即可享受折扣。'
  },
  {
    id: 'paste',
    name: 'Paste',
    category: Category.EFFICIENCY,
    description: '强大的剪贴板历史工具，可视化管理剪贴板历史。',
    longDescription: '非常强大的剪贴板历史工具，我一直在使用。比 Raycast 的剪贴板好用很多。',
    imageUrl: 'https://cdn.gooo.ai/web-images/cc7d51713b0055d906721f561cacb1afc282bd6829dc33f1afd75b4a65ad5c1a',
    icon: getIcon('pasteapp.io'),
    discount: '$14.99/年',
    discountCode: 'BLACKFRIDAY2025',
    link: 'https://pasteapp.io/',
    note: '我通过 Setapp 订阅使用。'
  },
  {
    id: 'setapp',
    name: 'Setapp',
    category: Category.EFFICIENCY,
    description: 'Mac/iOS 应用订阅服务，一站式获取 240+ 款优质应用。',
    longDescription: '前面好几款工具都提到了 Setapp，这是最推荐的 Mac 软件打包订阅服务，从开始提供服务我就一直订阅使用，非常推荐，下面是我用到的部分工具。',
    imageUrl: 'https://cdn.gooo.ai/web-images/eb27fe73ed9f3adc2e9d35e301732c7f8f15d024ebcd330edfbbb9665f6a9e88',
    icon: getIcon('setapp.com'),
    discount: '无官方折扣',
    link: 'https://setapp.com/',
    note: '没有黑五折扣，但怕你买了前面软件又订阅了这个会后悔，所以分享出来。最推荐的购买方案是拼车家庭版订阅，可以在海鲜市场找，大概 ¥200+ 一年。'
  },

  // --- Product Development ---
  {
    id: 'zhipu-glm',
    name: '智普 GLM Coding',
    category: Category.DEV,
    description: '智普 AI 编程助手，支持 Claude Code、Cline 等工具。',
    longDescription: '智普的 Coding 套餐，配合 Claude Code 使用也很不错。支持 Claude Code、Cline 等 10+ 编程工具无缝支持。\n\nP.S. 我自己还在使用官方 Claude Code 100美金套餐，所以暂时没用这个。',
    imageUrl: 'https://cdn.gooo.ai/web-images/a86b3064d9dbf66bf53ee94d5ba350a7f6d95a94bd04d71e2ebe9bf052d14284',
    icon: getIcon('bigmodel.cn'),
    discount: '五折优惠',
    link: 'https://www.bigmodel.cn/claude-code?ic=RJCI1QREZ8',
    note: 'AI 产品变化太快，不建议年付，季付比较合适。'
  },
  {
    id: 'mksaas',
    name: 'MKSaaS',
    category: Category.DEV,
    description: '快速建站模版，帮助快速搭建 AI SaaS 产品。',
    longDescription: '非常好用的快速建站模版，帮助快速搭建 AI SaaS 产品。我目前用下来中文开发者里最舒服的一个产品，作者很勤奋更新，功能很全面。还有 Discord 售后群，服务有保障，我自己的产品大多基于该模板搭建。',
    imageUrl: 'https://cdn.gooo.ai/web-images/2ef75c432f562f007253b5fa68f61f010e31d88ef7dccd2008d9aedef18d3d88',
    icon: getIcon('mksaas.com'),
    discount: '优惠 $30',
    discountCode: '202511',
    link: 'https://mksaas.com?atp=ameng',
    note: '中文开发者开发，售后服务好。'
  },
  {
    id: 'magic-ui',
    name: 'Magic UI Pro',
    category: Category.DEV,
    description: '基于 Next.js 的现代化前端 UI 组件库。',
    longDescription: '基于 Next.js 的前端 UI 组件库，适合快速搭建现代化界面。Pro 包含 5+ 模板和 50+ 个组件模块。适合对网站质量要求较高的人，你可以自行浏览一下，如果有非常喜欢的模板和组件可以下手。',
    imageUrl: 'https://cdn.gooo.ai/web-images/22e4d33bbd75e497bfe187da63d519722e1bbc024e5915bd67f9042905644851',
    icon: getIcon('magicui.design'),
    discount: '五折优惠',
    discountCode: 'BLA2025Z5I',
    link: 'https://pro.magicui.design/?ref=ameng',
    note: '包含 5+ 模板和 50+ 组件模块。'
  },
  {
    id: 'tailark',
    name: 'Tailark Pro',
    category: Category.DEV,
    description: 'Tailwind CSS 组件库，提供开箱即用的高质量组件。',
    longDescription: 'Tailwind CSS 组件库，提供开箱即用的高质量组件。',
    imageUrl: 'https://cdn.gooo.ai/web-images/867f77551a9965f8d67ec9717dde0809155d83964e4e30a40f87a3c0013f0bfe',
    icon: getIcon('tailark.com'),
    discount: '五折优惠',
    link: 'https://pro.tailark.com/',
    note: '高质量开箱即用。'
  },
  {
    id: 'aceternity',
    name: 'Aceternity UI PRO',
    category: Category.DEV,
    description: '高质量 UI 组件库，提供 12+ 模板和 60+ 组件。',
    longDescription: '高质量 UI 组件库，提供 12+ 模板和 60+ 组件。如果三套里面只能选择一套，那么我推荐 Aceternity。',
    imageUrl: 'https://cdn.gooo.ai/web-images/2dcf61620369f2aaa970cfee503770cf989aaf8b3600b151a95d4b130da0a841',
    icon: getIcon('ui.aceternity.com'),
    discount: '8折优惠',
    price: '$159.2 (终身)',
    link: 'https://pro.aceternity.com/?ref=ameng',
    note: '我自己也非常喜欢这套组件库，非常推荐。'
  }
];
