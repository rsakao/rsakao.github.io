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
      status: "Web・Mac版を公開中",
      summary: "ChatGPTやClaudeなど、主要AIサービスの稼働状況をまとめて確認するツール。同じアイデアをWebサイトとmacOSメニューバーアプリの2つの形で公開しました。",
      links: [
        { label: "Web版", url: "https://ai-status-jp-hub-2026.rojii.chatgpt.site/" },
        { label: "macOS版", url: "https://rsakao.github.io/aistatus/" },
      ],
    },
    {
      title: "おててタッチ",
      category: "IOS / SWIFTUI / FAMILY",
      status: "App Storeで公開中",
      summary: "赤ちゃんが画面をタッチすると、音、色、振動で反応するiOSアプリ。大きなボタン、誤操作を防ぐロック、コンボ演出などを、実際に子どもが触る様子を見ながら改善しました。",
      links: [
        { label: "App Store", url: "https://apps.apple.com/jp/app/%E3%81%8A%E3%81%A6%E3%81%A6%E3%82%BF%E3%83%83%E3%83%81/id6795017794" },
      ],
    },
    {
      title: "YouTube 区間リピート",
      category: "CHROME EXTENSION / MANIFEST V3",
      status: "Chromeウェブストアで公開中",
      summary: "YouTube動画の開始・終了時刻を複数の区間として保存し、選んだ部分だけを繰り返せるChrome拡張機能。語学、楽器、ダンスなどの反復練習を想定しています。",
      links: [
        { label: "Chromeウェブストア", url: "https://chromewebstore.google.com/detail/dccnipdiognbaficndbdbljgcihbjgmo" },
      ],
    },
    {
      title: "家庭内ドリンク注文",
      category: "PWA / PRIVATE HOME USE",
      status: "家庭内で運用中",
      summary: "来客がリビングのタブレットから飲み物を選び、キッチン側で注文を確認できる家庭内PWA。外部公開はせず、家族の実際の課題を解決する完成品として運用しています。",
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
