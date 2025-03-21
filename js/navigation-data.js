// 导航数据
const navigationData = [
  {
    id: "common",
    title: "课程 & 论文📚",
    icon: "svg/degree-hat.svg",
    links: [
      {
        title: "斯坦福 CV",
        url: "https://cs231n.stanford.edu/",
        icon: "https://www.stanford.edu/favicon.ico",
        description:
          "斯坦福大学计算机视觉公开课，涵盖深度学习在计算机视觉中的应用，如图像分类、检测、分割等。",
      },
      {
        title: "斯坦福 NLP",
        url: "https://web.stanford.edu/class/cs224n/",
        icon: "https://www.stanford.edu/favicon.ico",
        description:
          "斯坦福大学自然语言处理（NLP）公开课，讲授词向量、Transformer、BERT等前沿技术。",
      },
      {
        title: "MIT Deep Learning",
        url: "https://introtodeeplearning.com/",
        icon: "https://introtodeeplearning.com/images/logo.svg",
        description:
          "麻省理工学院（MIT）深度学习入门课程，涵盖神经网络、强化学习和生成模型。",
      },
      {
        title: "动手学深度学习",
        url: "https://zh-v2.d2l.ai/",
        icon: "https://zh.d2l.ai/_static/favicon.png",
        description:
          "一本开源的深度学习教材，提供 PyTorch 和 TensorFlow 实现，适合初学者动手实践。",
      },
      {
        title: "李宏毅生成式AI",
        url: "https://speech.ee.ntu.edu.tw/~hylee/genai/2024-spring.php",
        icon: "https://speech.ee.ntu.edu.tw/~hylee/favicon.ico",
        description:
          "台湾大学李宏毅教授的生成式 AI 课程，涵盖扩散模型、GAN、Transformer 及 ChatGPT 相关技术。",
      },
      {
        title: "李宏毅机器学习",
        url: "https://speech.ee.ntu.edu.tw/~hylee/ml/2025-spring.php",
        icon: "https://speech.ee.ntu.edu.tw/~hylee/favicon.ico",
        description:
          "台湾大学李宏毅教授的机器学习课程，讲授传统 ML 算法、深度学习及其应用。",
      },
      {
        title: "Google Scholar",
        url: "https://scholar.google.com/",
        icon: "https://scholar.google.com/favicon.ico",
        description: "Google 学术搜索，提供全球学术论文、研究成果和引用分析。",
      },
      {
        title: "ArXiv",
        url: "https://arxiv.org/",
        icon: "https://arxiv.org/static/browse/0.3.4/images/icons/favicon-32x32.png",
        description:
          "一个提供开放获取的学术论文预印本平台，涵盖计算机科学、数学、物理等领域。",
      },
      {
        title: "DBLP",
        url: "https://dblp.uni-trier.de/",
        icon: "https://dblp.uni-trier.de/img/favicon.ico",
        description:
          "计算机科学文献数据库，提供论文、会议、作者信息的索引和检索。",
      },
      {
        title: "Papers With Code",
        url: "https://paperswithcode.com/",
        icon: "https://paperswithcode.com/favicon.ico",
        description:
          "一个收集最新 AI 论文及其代码实现的平台，方便研究者复现实验。",
      },
      {
        title: "谷歌学术镜像",
        url: "https://xs.xasa.top/",
        icon: "https://xs.xasa.top/favicon.ico",
        description: "Google 学术搜索的镜像站点，提供更便捷的访问方式。",
      },
      {
        title: "LetPub",
        url: "https://www.letpub.com.cn/",
        icon: "https://www.letpub.com.cn/favicon.ico",
        description:
          "学术论文服务平台，提供期刊投稿指南、影响因子查询和润色服务。",
      },
      {
        title: "知网",
        url: "https://www.cnki.net/",
        icon: "https://www.cnki.net/favicon.ico",
        description:
          "中国知网，收录中国学术论文、期刊、会议论文、专利等文献资料。",
      },
    ],
  },

  {
    id: "code",
    title: "代码",
    icon: "svg/code.svg",
    links: [
      {
        title: "GitHub",
        url: "https://github.com",
        icon: "https://github.com/favicon.ico",
        description: "全球最大的代码托管平台",
      },
    ],
  },

  {
    id: "LLM",
    title: "大模型",
    icon: "svg/brain.svg",
    links: [
      {
        title: "LLM",
        url: "https://www.llm.one",
        icon: "https://www.llm.one/favicon.ico",
        description: "LLM",
      },
    ],
  },
];
