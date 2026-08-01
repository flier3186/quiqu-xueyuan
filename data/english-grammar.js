// english-grammar.js · 奇趣学园 V5 英语数据 · 自动生成
// 全局变量：window.GRAMMAR_PILLS
// 内容：14个语法胶囊，覆盖3-6年级核心语法点
// 字段：name(语法名称) rule(规则说明，8-12岁能理解) sentences(例句数组: {en(英文含<b>高亮) cn(中文)})

window.GRAMMAR_PILLS = {
  simple:{
    name:'一般现在时',
    rule:'描述习惯、事实、真理。第三人称单数动词加-s/-es。I/You/We/They + 动词原形；He/She/It + 动词s形。',
    sentences:[
      {en:'I <b>go</b> to school every day.',cn:'我每天上学。'},
      {en:'She <b>likes</b> apples very much.',cn:'她非常喜欢苹果。'},
      {en:'The sun <b>rises</b> in the east.',cn:'太阳从东方升起。'},
      {en:'Do you <b>play</b> football on weekends?',cn:'你周末踢足球吗？'}
    ]
  },
  continuous:{
    name:'现在进行时',
    rule:'描述此刻正在发生的动作。结构：be(am/is/are) + 动词-ing。I am / You are / He is / She is / It is / We are / They are + V-ing。',
    sentences:[
      {en:'I <b>am reading</b> a book now.',cn:'我现在正在看书。'},
      {en:'Look! The cat <b>is sleeping</b> on the sofa.',cn:'看！猫正在沙发上睡觉。'},
      {en:'They <b>are playing</b> basketball.',cn:'他们正在打篮球。'},
      {en:'What <b>are you doing</b> right now?',cn:'你现在在做什么？'}
    ]
  },
  past:{
    name:'一般过去时',
    rule:'描述过去发生的事。动词加-ed，不规则动词需单独记。疑问和否定用did，动词恢复原形。',
    sentences:[
      {en:'I <b>played</b> football yesterday.',cn:'我昨天踢了足球。'},
      {en:'She <b>went</b> to the park last Sunday.',cn:'她上周日去了公园。'},
      {en:'Did you <b>watch</b> TV last night?',cn:'你昨晚看电视了吗？'},
      {en:'They <b>were</b> very happy at the party.',cn:'他们在派对上很开心。'}
    ]
  },
  future:{
    name:'一般将来时',
    rule:'描述将来要做的事。结构1：will + 动词原形。结构2：be going to + 动词原形（有计划的事）。',
    sentences:[
      {en:'I <b>will visit</b> my grandma tomorrow.',cn:'我明天将去看奶奶。'},
      {en:'She <b>is going to</b> buy a new bike.',cn:'她打算买一辆新自行车。'},
      {en:'What <b>will you do</b> this weekend?',cn:'这个周末你打算做什么？'},
      {en:'It <b>will be</b> sunny tomorrow.',cn:'明天会是晴天。'}
    ]
  },
  comparative:{
    name:'比较级',
    rule:'两者比较用比较级。单音节词+er（taller），多音节词前加more（more beautiful），不规则变化good→better, bad→worse。比较级后面常跟than。',
    sentences:[
      {en:'Tom is <b>taller than</b> Jack.',cn:'汤姆比杰克高。'},
      {en:'This book is <b>more interesting</b> than that one.',cn:'这本书比那本更有趣。'},
      {en:'I feel <b>better</b> today.',cn:'我今天感觉好多了。'},
      {en:'Which is <b>bigger</b>, the sun or the moon?',cn:'太阳和月亮哪个更大？'}
    ]
  },
  superlative:{
    name:'最高级',
    rule:'三者或以上比较用最高级，前面加the。单音节+est（tallest），多音节加most（most beautiful），不规则good→best, bad→worst。',
    sentences:[
      {en:'He is the <b>tallest</b> boy in our class.',cn:'他是我们班最高的男孩。'},
      {en:'This is the <b>most beautiful</b> flower.',cn:'这是最漂亮的花。'},
      {en:'She is the <b>best</b> student in our school.',cn:'她是学校里最好的学生。'},
      {en:'What is the <b>biggest</b> animal on land?',cn:'陆地上最大的动物是什么？'}
    ]
  },
  plural:{
    name:'名词复数',
    rule:'一般加-s（cats）；s/x/sh/ch结尾加-es（buses）；辅音+y结尾变y为i加-es（babies）；不规则：man→men, child→children, foot→feet。',
    sentences:[
      {en:'I have two <b>cats</b> and three <b>dogs</b>.',cn:'我有两只猫和三条狗。'},
      {en:'There are many <b>buses</b> on the road.',cn:'路上有很多公交车。'},
      {en:'The <b>children</b> are playing in the park.',cn:'孩子们在公园里玩。'},
      {en:'I can see five <b>butterflies</b> in the garden.',cn:'我能在花园里看到五只蝴蝶。'}
    ]
  },
  articles:{
    name:'冠词 a / an / the',
    rule:'a用在辅音音素开头的词前（a book）；an用在元音音素开头的词前（an apple）；the表示特指（这本书，那个人）。',
    sentences:[
      {en:'I have <b>a</b> pencil and <b>an</b> eraser.',cn:'我有一支铅笔和一块橡皮。'},
      {en:'She is eating <b>an</b> apple.',cn:'她正在吃一个苹果。'},
      {en:'<b>The</b> boy in red is my brother.',cn:'穿红衣服的那个男孩是我弟弟。'},
      {en:'Can you pass me <b>the</b> book on the desk?',cn:'你能把桌上那本书递给我吗？'}
    ]
  },
  pronouns:{
    name:'人称代词和物主代词',
    rule:'主格：I/you/he/she/it/we/they（做主语）。宾格：me/you/him/her/it/us/them（做宾语）。物主代词：my/your/his/her/its/our/their（表示谁的）。',
    sentences:[
      {en:'<b>I</b> like <b>her</b> very much.',cn:'我非常喜欢她。'},
      {en:'This is <b>my</b> book. That is <b>yours</b>.',cn:'这是我的书。那是你的。'},
      {en:'<b>They</b> are <b>our</b> friends.',cn:'他们是我们的朋友。'},
      {en:'Can you help <b>me</b> with <b>my</b> homework?',cn:'你能帮我做作业吗？'}
    ]
  },
  prepositions:{
    name:'方位介词',
    rule:'in表示在里面（in the box）；on表示在上面（on the desk）；under表示在下面（under the tree）；behind表示在后面；next to表示在旁边。',
    sentences:[
      {en:'The cat is <b>in</b> the box.',cn:'猫在盒子里。'},
      {en:'The book is <b>on</b> the desk.',cn:'书在桌子上。'},
      {en:'The ball is <b>under</b> the chair.',cn:'球在椅子下面。'},
      {en:'The park is <b>next to</b> the school.',cn:'公园在学校旁边。'}
    ]
  },
  modal:{
    name:'情态动词 can / must / should',
    rule:'can表示能力或许可（能，可以）；must表示必须（一定要）；should表示建议（应该）。情态动词后接动词原形。',
    sentences:[
      {en:'I <b>can</b> swim very fast.',cn:'我能游得很快。'},
      {en:'You <b>must</b> finish your homework first.',cn:'你必须先完成作业。'},
      {en:'We <b>should</b> help our parents at home.',cn:'我们应该在家帮助父母。'},
      {en:'Can you <b>speak</b> English?',cn:'你会说英语吗？'}
    ]
  },
  there_be:{
    name:'There be 句型',
    rule:'表示某处有某物。There is + 单数/不可数名词；There are + 复数名词。就近原则：多个物品时be动词与最近的名词一致。',
    sentences:[
      {en:'<b>There is</b> a book on the desk.',cn:'桌子上有一本书。'},
      {en:'<b>There are</b> many flowers in the garden.',cn:'花园里有很多花。'},
      {en:'<b>There is</b> an apple and two bananas.',cn:'有一个苹果和两根香蕉。'},
      {en:'<b>There are</b> two cats and a dog in the room.',cn:'房间里有两只猫和一条狗。'}
    ]
  },
  wh_questions:{
    name:'特殊疑问句',
    rule:'用What(什么)/Where(哪里)/When(什么时候)/Who(谁)/Why(为什么)/How(怎样)提问，不用Yes/No回答。结构：疑问词+一般疑问句语序。',
    sentences:[
      {en:'<b>What</b> is your favorite color?',cn:'你最喜欢的颜色是什么？'},
      {en:'<b>Where</b> do you live?',cn:'你住在哪里？'},
      {en:'<b>When</b> do you get up every day?',cn:'你每天几点起床？'},
      {en:'<b>How</b> do you go to school?',cn:'你怎么去上学？'}
    ]
  },
  present_perfect:{
    name:'现在完成时',
    rule:'描述过去发生但与现在有关的事。结构：have/has + 动词过去分词。常用just(刚刚)、already(已经)、yet(还没有)。',
    sentences:[
      {en:'I <b>have finished</b> my homework.',cn:'我已经完成了作业。'},
      {en:'She <b>has been</b> to Beijing twice.',cn:'她去过北京两次。'},
      {en:'Have you <b>eaten</b> breakfast yet?',cn:'你吃早饭了吗？'},
      {en:'They <b>have just arrived</b>.',cn:'他们刚到。'}
    ]
  }
};
