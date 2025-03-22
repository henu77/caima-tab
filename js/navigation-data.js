// 导航数据
const navigationData = [
  {
    id: "common",
    title: "课程推荐📚",
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
    ],
  },
  {
    id: "papers",
    title: "论文检索📑",
    icon: "svg/code.svg",
    links: [
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
        title: "知网",
        url: "https://www.cnki.net/",
        icon: "https://www.cnki.net/favicon.ico",
        description:
          "中国知网，收录中国学术论文、期刊、会议论文、专利等文献资料。",
      },
    ],
  },

  {
    id: "deeplearning",
    title: "深度学习框架🛠️",
    icon: "svg/code.svg",
    links: [
      {
        title: "PyTorch",
        url: "https://pytorch.org/",
        icon: "https://pytorch.org/assets/images/logo-icon.svg",
        description:
          "一个开源的深度学习框架，由 Facebook AI 研究院（FAIR）开发，支持动态计算图，广泛用于学术研究和工业应用。",
      },
      {
        title: "TensorFlow",
        url: "https://www.tensorflow.org/",
        icon: "https://www.gstatic.com/devrel-devsite/prod/v1c43259e491a2af2272be031aab6f7713a1b5287c753937874e72435623bc692/tensorflow/images/favicon.png",
        description:
          "Google 开发的端到端开源机器学习框架，支持大规模深度学习和生产部署。",
      },
      {
        title: "PaddlePaddle",
        url: "https://www.paddlepaddle.org.cn/",
        icon: "https://paddlepaddle-org-cn.cdn.bcebos.com/paddle-site-front/static/media/paddlelogo.0b483fa7.png",
        description:
          "百度开发的深度学习框架，适用于产业级 AI 任务，提供丰富的工具和生态。",
      },
      {
        title: "MindSpore",
        url: "https://www.mindspore.cn/",
        icon: "https://www.mindspore.cn/favicon.ico",
        description:
          "华为开发的 AI 框架，支持端、边、云协同，优化计算效率，特别适用于异构计算。",
      },

      {
        title: "LangChain",
        url: "https://python.langchain.com/",
        icon: "https://python.langchain.com/img/brand/favicon.png",
        description:
          "一个用于构建 LLM 应用的开源库，支持多种 AI 模型、工具和代理系统。",
      },
    ],
  },
  {
    id: "computing",
    title: "计算资源🖥️",
    icon: "svg/brain.svg",
    links: [
      {
        title: "Colab",
        url: "https://colab.research.google.com/",
        icon: "https://ssl.gstatic.com/colaboratory-static/common/277e96fb6d93e9f840ee912535f1c24f/img/favicon.ico",
        description:
          "Google 提供的在线 Python 代码运行环境，支持 Jupyter Notebook 和 GPU 计算。",
      },
      {
        title: "Kaggle",
        url: "https://www.kaggle.com/",
        icon: "https://www.kaggle.com/static/images/favicon.ico",
        description:
          "全球最大的数据科学竞赛平台，提供丰富的数据集、代码示例和机器学习竞赛。",
      },
      {
        title: "AiStudio",
        url: "https://aistudio.baidu.com/",
        icon: "https://paddlepaddle-org-cn.cdn.bcebos.com/paddle-site-front/favicon-48.png",
        description:
          "百度推出的 AI 训练和开发平台，提供免费 GPU 资源和深度学习工具。",
      },
      {
        title: "AutoDL",
        url: "https://www.autodl.com/",
        icon: "https://www.autodl.com/favicon.png",
        description:
          "一个提供自动化深度学习训练、管理 GPU 资源的云平台，适合 AI 研究和开发。",
      },
    ],
  },
  {
    id: "community",
    title: "开源社区👐",
    icon: "svg/tools.svg",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/",
        icon: "https://github.githubassets.com/favicons/favicon.png",
        description:
          "全球最大的代码托管平台，支持 Git 版本控制，广泛用于开源项目和协作开发。",
      },
      {
        title: "Hugging Face",
        url: "https://huggingface.co/",
        icon: "https://huggingface.co/favicon.ico",
        description:
          "NLP 和生成式 AI 领域的领先平台，提供 Transformers 预训练模型和社区分享。",
      },
      {
        title: "魔搭社区",
        url: "https://www.modelscope.cn/",
        icon: "https://g.alicdn.com/sail-web/maas/2.7.11/favicon/128.ico",
        description:"ModelScope旨在打造下一代开源的模型即服务共享平台,为泛AI开发者提供灵活、易用、低成本的一站式模型服务产品,让模型应用更简单。",

      },
      {
        title: "Gitee",
        url: "https://gitee.com/",
        icon: "https://gitee.com/favicon.ico",
        description:
          "中国的开源代码托管平台，提供 Git/SVN 版本控制、项目协作和 CI/CD 服务。",
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/",
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico",
        description:
          "全球最大的技术问答社区，提供程序开发、数据库、网络安全等方面的解决方案。",
      },
      {
        title: "CSDN",
        url: "https://www.csdn.net/",
        icon: "https://csdnimg.cn/public/favicon.ico",
        description:
          "中国最大的 IT 社区和学习平台，提供博客、论坛、教程等技术资源。",
      },
      {
        title: "菜码编程",
        url: "https://www.caima.tech",
        icon: "https://www.caima.tech/favicon.ico",
        description: "一个关于分享和探索的地方，是一个关于分享和探索的地方。",
      },
    ],
  },

  {
    id: "paper-writing",
    title: "论文写作✍️",
    icon: "svg/edit.svg",
    links: [
      // 文献管理
      {
        title: "Zotero",
        url: "https://www.zotero.org/",
        icon: "https://www.zotero.org/favicon.ico",
        description:
          "开源文献管理工具，支持PDF标注、参考文献自动生成，可与Word/LibreOffice无缝集成。",
      },
      {
        title: "EndNote",
        url: "https://endnote.com/",
        icon: "https://endnote.com/wp-content/themes/endnote/src/favicon/android-icon-144x144.png",
        description:
          "科研机构广泛使用的文献管理软件，支持7000+期刊引用格式和团队协作功能。",
      },

      // 写作工具
      {
        title: "Overleaf",
        url: "https://www.overleaf.com/",
        icon: "https://www.overleaf.com/favicon.ico",
        description:
          "在线LaTeX编辑器，提供600+学术期刊模板，支持实时协作和版本控制。",
      },
      {
        title:"ShareLaTeX",
        url:"https://sharelatex.cstcloud.cn/",
        icon:"https://sharelatex.cstcloud.cn/favicon.ico",
        description:"一个在线的LaTeX编辑器，支持多人协作，提供丰富的模板和插件。",
      },
      {
        title: "Grammarly",
        url: "https://www.grammarly.com/",
        icon: "https://static-web.grammarly.com/cms/master/public/favicon.ico",
        description:
          "AI英语语法校对工具，可检测学术写作中的语法错误并给出风格优化建议。",
      },
      {
        title: "Draw.io",
        url: "https://app.diagrams.net/",
        icon: "https://app.diagrams.net/favicon.ico",
        description:
          "在线绘图工具，支持流程图、思维导图、UML等多种图表类型，无需安装。",
      },
    ],
  },
  {
    id: "paper-submission",
    title: "论文投稿📝",
    icon: "svg/edit.svg",
    links: [
      // CMT
      {
        title: "CMT",
        url: "https://cmt3.research.microsoft.com/",
        icon: "https://cmt3.research.microsoft.com/img/logo.png",
        description:
          "微软学术会议投稿系统，支持论文提交、评审和会议管理，广泛用于计算机领域。",
      },
      // OpenReview
      {
        title: "OpenReview",
        url: "https://openreview.net/",
        icon: "https://openreview.net/favicon.ico",
        description:
          "开放评审平台，提供会议论文提交、评审和讨论功能，支持双盲评审模式。",
      },
      // LetPub 
      {
        title: "LetPub",
        url: "https://www.letpub.com.cn/",
        icon: "https://www.letpub.com.cn/favicon.ico",
        description:
          "学术论文服务平台，提供期刊投稿指南、影响因子查询和润色服务。",
      },
      // CCF DDL
      {
        title: "CCF DDL",
        url: "https://ccfddl.top/",
        icon: "https://ccfddl.com/favicon.ico",
        description:
          "CCF推荐国际会议截稿日期查询，提供计算机领域最新投稿信息。",
      },
      // CCF 推荐
      {
        title: "CCF 推荐",
        url: "https://www.ccf.org.cn/Academic_Evaluation/By_category/",
        icon: "https://www.ccf.org.cn/CCFLink/logo96.png",
        description:
          "CCF推荐的学术期刊和会议列表，包括A、B、C类会议和期刊。",
      },
    ],
  },
  {
    id: "algorithm-platforms",
    title: "算法练习平台🧮",
    icon: "svg/graph.svg",
    links: [
      {
        title: "LeetCode",
        url: "https://leetcode.com/",
        icon: "https://leetcode.com/favicon.ico",
        description:
          "全球程序员首选算法题库，覆盖2000+高频面试题型，支持14种编程语言在线判题。",
      },
      {
        title: "HackerRank",
        url: "https://www.hackerrank.com/",
        icon: "https://www.hackerrank.com/favicon.ico",
        description:
          "硅谷企业技术笔试常用平台，提供算法、SQL、数据结构等10+技能领域题库。",
      },
      {
        title: "Codeforces",
        url: "https://codeforces.com/",
        icon: "https://codeforces.com/favicon.ico",
        description:
          "国际知名算法竞赛平台，每周举办编程比赛，采用动态积分评级系统（Rating）。",
      },
      {
        title: "Codewars",
        url: "https://www.codewars.com/",
        icon: "https://www.codewars.com/favicon.ico",
        description:
          "通过完成Kata挑战提升技能，支持Python、Java等30+语言，采用段位晋级机制。",
      },
      {
        title: "牛客网",
        url: "https://www.nowcoder.com/",
        icon: "https://static.nowcoder.com/fe/file/favicon.ico",
        description:
          "国内IT求职必备平台，收录互联网大厂笔试真题，提供在线编程模拟面试功能。",
      },
      {
        title: "洛谷",
        url: "https://www.luogu.com.cn/",
        icon: "https://www.luogu.com.cn/favicon.ico",
        description:
          "中文算法学习社区，题目难度分级清晰，适合OI竞赛选手和新手入门训练。",
      },
      {
        title: "BinarySearch",
        url: "https://binarysearch.com/",
        icon: "https://binarysearch.com/favicon.ico",
        description:
          "专注算法面试训练平台，支持团队协作解题，题目按公司分类（Google/Facebook等）。",
      },
      {
        title: "CodeChef",
        url: "https://www.codechef.com/",
        icon: "https://www.codechef.com/favicon.ico",
        description:
          "印度编程训练平台，每月举办Long Challenge等赛事，适合提升算法思维耐力。",
      },
      {
        title: "Sphere Online Judge",
        url: "https://www.spoj.com/",
        icon: "https://www.spoj.com/favicon.ico",
        description:
          "经典算法题库平台（SPOJ），包含8000+题目，支持50+编程语言提交。",
      },
      {
        title: "蓝桥云课",
        url: "https://www.lanqiao.cn/",
        icon: "https://www.lanqiao.cn/favicon.ico",
        description:
          "蓝桥杯大赛官方学习平台，提供算法课程与OJ系统，适合大学生竞赛备战。",
      },
    ],
  },

  {
    id: "cloud-vendors",
    title: "云服务厂商☁️",
    icon: "svg/cloud.svg",
    links: [
      // 国际厂商
      {
        title: "AWS",
        url: "https://aws.amazon.com/",
        icon: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
        description:
          "全球市场份额第一的云服务商，提供200+全栈服务，EC2云服务器支持按需付费模式。",
      },
      {
        title: "Microsoft Azure",
        url: "https://azure.microsoft.com/",
        icon: "https://azure.microsoft.com/svghandler/favicon/?v=2",
        description:
          "微软企业级云平台，与Office365深度集成，AI服务和混合云方案行业领先。",
      },
      {
        title: "Google Cloud",
        url: "https://cloud.google.com/",
        icon: "https://cloud.google.com/favicon.ico",
        description:
          "大数据和机器学习优势明显，GCE实例支持Preemptible低成本计算。",
      },

      // 国内厂商
      {
        title: "阿里云",
        url: "https://www.aliyun.com/",
        icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
        description:
          "中国市场份额第一，飞天架构支撑，ECS弹性计算服务适合电商/物联网场景。",
      },
      {
        title: "腾讯云",
        url: "https://cloud.tencent.com/",
        icon: "https://cloud.tencent.com/favicon.ico",
        description:
          "游戏/音视频领域优势突出，CVM云服务器提供AMD/Intel多种芯片方案。",
      },
      {
        title: "华为云",
        url: "https://www.huaweicloud.com/",
        icon: "https://www.huaweicloud.com/favicon.ico",
        description:
          "政企市场领导者，擎天架构+鲲鹏芯片，提供混合云和行业定制化解决方案。",
      },

      {
        title: "天翼云",
        url: "https://www.ctyun.cn/",
        icon: "https://www.ctyun.cn/favicon.ico",
        description:
          "中国电信旗下云服务，云网融合优势显著，为政企客户提供安全可信的数字化转型基础设施。",
      },
      {
        title: "金山云",
        url: "https://www.ksyun.com/",
        icon: "https://resource.ksyun.com/project/resource/img/favicon.ico",
        description:
          "视频云解决方案领先者，自研银河平台支持4K/VR超高清直播，服务金融、政务等行业客户。",
      },
      {
        title: "百度智能云",
        url: "https://cloud.baidu.com/",
        icon: "https://bce.bdstatic.com/img/favicon.ico",
        description:
          "AI原生云服务商，整合百度大脑能力，在智能交通、智慧城市等领域提供全栈解决方案。",
      },
      {
        title: "京东云",
        url: "https://www.jdcloud.com/",
        icon: "https://img1.jcloudcs.com/portal/favicon.ico",
        description:
          "依托京东零售物流经验，提供产业数智化服务，618/双十一级流量洪峰处理能力验证。",
      },
      {
        title: "移动云",
        url: "https://ecloud.10086.cn/",
        icon: "https://ecloud.eos-guangzhou-1.cmecloud.cn/fe/favicon.ico",
        description:
          "中国移动5G+云战略载体，云网边端协同架构，提供云手机、云桌面等特色产品。",
      },
      {
        title: "浪潮云",
        url: "https://www.inspur.com/",
        icon: "https://www.inspur.com/lcjtww/uiFramework/commonResource/image/logo.png",
        description:
          "工业互联网平台服务商，深耕制造业数字化转型，提供ERP云、供应链云等垂直行业方案。",
      },

      // 原有国内厂商（更新UCloud描述）
      {
        title: "UCloud",
        url: "https://www.ucloud.cn/",
        icon: "https://www.ucloud.cn/favicon.ico",
        description:
          "中立云计算服务商，快杰云主机支持热升级不宕机，全球31个可用区覆盖一带一路国家。",
      },
    ],
  },
];
