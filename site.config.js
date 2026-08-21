/*
 * ポートフォリオの内容は、基本的にこのファイルだけで更新できます。
 * links の url が未確定の項目は "" のままで構いません。
 */
window.PORTFOLIO = {
  siteName: "REIJI SAKAO / PORTFOLIO",
  owner: "Reiji Sakao",
  availability: "育児の合間に、AIと個人開発を続けています",
  mission: "AIを活用して、一人でもアイデアを形にできる世界を広げる",
  heroDescription:
    "育児中の細切れ時間に、Codexと一緒にアイデアを動くものへ。ここでは、公開規模にかかわらず、実際に目的を満たして使えている制作物を紹介します。",

  bio: [
    "AIを実務とプロダクトに落とし込む、AI Product Builderです。",
    "ソフトウェアエンジニアとして、新しい技術やAIを実務へ取り入れ、繰り返す仕事の仕組み化・自動化や、便利なツールづくりに取り組んできました。個人開発では、実装をCodexに任せ、自分は誰のために何をつくるか、使える品質か、どこまでを完成とするかの判断に集中しています。",
  ],

  facts: [
    { label: "Experience", value: "Software Engineer since 2012" },
    { label: "Focus", value: "AI / AWS / Automation" },
    { label: "Based in", value: "Japan" },
    { label: "Approach", value: "Think → Build → Ship" },
  ],

  stack: [
    "Generative AI",
    "LLM / Agent",
    "AWS",
    "TypeScript",
    "Python",
    "Swift / SwiftUI",
    "Web Development",
    "Automation",
    "MCP",
    "Prototyping",
  ],

  projects: [
    {
      title: "AI Status",
      category: "WEB / MACOS / STATUS TOOL",
      value: "複数のAIサービスの稼働状況を、WebやMacからひとつにまとめて確認できる。",
      problem: "複数のAIサービスを使っていると、障害時に各社のステータスページを個別に確認する手間がかかる。",
      solution: "主要サービスの稼働情報を集約し、WebサイトとmacOSメニューバーから確認できる2つのアプリを開発。",
      aiUsage: ["Codexでプロトタイピング", "実装・デバッグ支援"],
      outcomes: ["Web公開済み", "macOS版公開済み", "複数プラットフォーム対応"],
      tech: ["Web", "macOS", "Swift", "API"],
      links: [
        { label: "Web版", url: "https://ai-status-jp-hub-2026.rojii.chatgpt.site/" },
        { label: "macOS版", url: "https://rsakao.github.io/aistatus/" },
      ],
    },
    {
      title: "おててタッチ",
      category: "IOS / SWIFTUI / FAMILY",
      value: "赤ちゃんのタッチを音・色・振動で返し、親子で安心して遊べる。",
      problem: "赤ちゃん向けアプリでも操作が複雑だったり、画面外への誤操作が起きたりして、安心して端末を渡しにくい。",
      solution: "大きなタッチ領域、誤操作を防ぐロック、音・色・振動の反応を備えたiOSアプリを開発し、子どもの反応を見ながら改善。",
      aiUsage: ["CodexによるSwiftUI実装支援", "実機テスト後の改善整理"],
      outcomes: ["App Store公開済み", "審査通過", "実際の利用で改善"],
      tech: ["Swift", "SwiftUI", "iOS", "Haptics"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/jp/app/%E3%81%8A%E3%81%A6%E3%81%A6%E3%82%BF%E3%83%83%E3%83%81/id6795017794" },
      ],
    },
    {
      title: "YouTube 区間リピート",
      category: "CHROME EXTENSION / MANIFEST V3",
      value: "練習したい部分だけを保存し、YouTube動画を繰り返し再生できる。",
      problem: "語学や楽器の練習では同じ場面を何度も見返すが、毎回シークバーで開始位置へ戻す操作が必要になる。",
      solution: "動画内の開始・終了時刻を複数の区間として保存し、選んだ範囲だけを連続再生できるChrome拡張機能を開発。",
      aiUsage: ["仕様整理・プロトタイピング", "再生制御のデバッグ支援"],
      outcomes: ["Chromeウェブストア公開済み", "Manifest V3対応"],
      tech: ["JavaScript", "Chrome Extension", "Manifest V3", "YouTube"],
      links: [
        { label: "Chromeウェブストア", url: "https://chromewebstore.google.com/detail/dccnipdiognbaficndbdbljgcihbjgmo" },
      ],
    },
    {
      title: "家庭内ドリンク注文",
      category: "PWA / PRIVATE HOME USE",
      value: "来客の飲み物注文をリビングからキッチンへ伝え、聞き取りや往復を減らす。",
      problem: "来客が多いと、希望する飲み物の聞き取りやキッチンへの伝達が重なり、注文内容の確認に手間がかかる。",
      solution: "リビングのタブレットで飲み物を選び、キッチン側で注文を確認できる家庭内PWAを開発。",
      aiUsage: ["短時間でのプロトタイピング", "UI・運用フローの設計支援"],
      outcomes: ["MVP完成", "家庭内で実利用中", "利用しながら改善"],
      tech: ["PWA", "Web", "Tablet UI"],
      links: [],
    },
  ],

  achievements: [
    {
      year: "01",
      title: "公開規模より、目的を満たせたか",
      detail: "App Storeで配布するものも、家庭内だけで使うものも、実際の課題を解決できていれば完成品として扱います。",
    },
    {
      year: "02",
      title: "動くものを触って判断する",
      detail: "アイデアを小さく形にし、実際に使ってから、続ける、直す、止める、別の形へ広げる判断をします。",
    },
    {
      year: "03",
      title: "方向と品質、公開責任は自分で持つ",
      detail: "Codexに実装や検証を任せながら、誰のためにつくるか、使いやすいか、公開してよいかは自分で判断します。",
    },
  ],

  socialLinks: [
    { label: "note", url: "https://note.com/roji_dev" },
    { label: "GitHub", url: "https://github.com/rsakao" },
    { label: "X", url: "https://x.com/roji_dev_x" },
    { label: "Zenn", url: "" },
    { label: "LinkedIn", url: "" },
  ],
};
