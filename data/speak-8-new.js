// data/speak-8-new.js · 奇趣学园 V5 口语场景扩充数据
// 全局变量：window.SPEAK_SCENARIOS_NEW8
// 内容：8 个新口语场景（每个 5 轮老师-学生互动），使总场景数从 12 扩到 20
// 与已有 12 场景 id 不冲突；shopping/family/weather 为更深入或不同角度的对话
// 字段：id(唯一标识) title(场景名) icon(图标) level(难度1-4) desc(描述)
//   teacherLines(老师台词数组: {id text cn})
//   studentExpected(学生期望回答: {teacherLineId keywords suggestions})
//   vocabulary(核心词汇) tips(对话技巧提示)
// 关键词匹配逻辑：userText.toLowerCase().includes(k) 子串匹配，故 keywords 全小写

window.SPEAK_SCENARIOS_NEW8 = [
  { id:'animals', title:'动物世界', icon:'🦁', level:2, desc:'聊喜欢的动物和宠物',
    teacherLines:[
      {id:'t1', text:"Hi! Do you like animals?", cn:"嗨！你喜欢动物吗？"},
      {id:'t2', text:"Cool! What's your favorite animal?", cn:"酷！你最喜欢的动物是什么？"},
      {id:'t3', text:"Nice! Why do you like it?", cn:"不错！你为什么喜欢它？"},
      {id:'t4', text:"Interesting! Do you have any pets at home?", cn:"有趣！你家里有宠物吗？"},
      {id:'t5', text:"That's lovely! Animals are our friends. See you!", cn:"真可爱！动物是我们的朋友。再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','yep','love','like','animals','no'], suggestions:["Yes, I love animals!","Yes, I like animals.","Yeah, I do!"]},
      {teacherLineId:'t2', keywords:['dog','cat','elephant','panda','lion','tiger','rabbit','monkey','bear','giraffe'], suggestions:["My favorite animal is the panda.","I like dogs best.","I love elephants."]},
      {teacherLineId:'t3', keywords:['cute','smart','big','fast','funny','kind','because','friendly'], suggestions:["Because they're cute.","Because dogs are smart.","They're funny and friendly."]},
      {teacherLineId:'t4', keywords:['yes','dog','cat','fish','bird','no','dont','have'], suggestions:["Yes, I have a dog.","No, I don't have pets.","Yes, I have a cat and a fish."]},
      {teacherLineId:'t5', keywords:['yes','yeah','right','friends','thanks','thank','bye','see'], suggestions:["Yes, they are! Bye!","You're right. See you!","Thanks! Bye!"]}
    ],
    vocabulary:['animal','like','favorite','pet','dog','cat','panda','cute','smart','because'],
    tips:'表达喜欢用 I like... 或 My favorite animal is... 理由用 Because...'
  },
  { id:'family_members', title:'家人介绍', icon:'👨‍👩‍👧', level:2, desc:'介绍家人年龄和共同时光',
    teacherLines:[
      {id:'t1', text:"Hi! Who lives in your house with you?", cn:"嗨！你家里和你一起住的有谁？"},
      {id:'t2', text:"Nice! How old is your grandpa?", cn:"不错！你爷爷几岁了？"},
      {id:'t3', text:"Wow! What do you do with your family on weekends?", cn:"哇！周末你和家人一起做什么？"},
      {id:'t4', text:"Sounds fun! What does your family like to do together?", cn:"听起来有趣！你家人喜欢一起做什么？"},
      {id:'t5', text:"That's wonderful! You have a happy family! Bye!", cn:"太棒了！你有一个幸福的家庭！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['parents','grandpa','grandma','mom','dad','sister','brother','family','live'], suggestions:["My mom, dad, and little brother.","I live with my parents and grandpa.","My family of four."]},
      {teacherLineId:'t2', keywords:['sixty','seventy','old','years','sixty-five','seventy-two','grandpa'], suggestions:["He's sixty-five years old.","My grandpa is seventy.","He is sixty years old."]},
      {teacherLineId:'t3', keywords:['park','cinema','visit','dinner','play','together','watch','tv'], suggestions:["We go to the park together.","We visit our grandparents.","We watch TV and have dinner."]},
      {teacherLineId:'t4', keywords:['cook','travel','play','games','walk','eat','together','movies'], suggestions:["We like cooking together.","We travel together.","We play games at home."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','yes','happy','bye','see'], suggestions:["Thank you! Yes, we are!","Thanks! Bye!","Yes, bye!"]}
    ],
    vocabulary:['live','grandpa','grandma','old','years','weekend','together','happy','family'],
    tips:'介绍年龄用 He/She is ... years old. 一起做事用 together 一起'
  },
  { id:'holiday', title:'节假日', icon:'🎄', level:3, desc:'聊喜欢的节日和节日活动',
    teacherLines:[
      {id:'t1', text:"Hello! What's your favorite holiday?", cn:"你好！你最喜欢的节日是什么？"},
      {id:'t2', text:"Great! When is it?", cn:"太棒了！它在什么时候？"},
      {id:'t3', text:"Nice! What do you usually do on that day?", cn:"不错！那天你通常做什么？"},
      {id:'t4', text:"Sounds fun! Do you get any gifts?", cn:"听起来有趣！你会收到礼物吗？"},
      {id:'t5', text:"Wonderful! I hope you enjoy it next time! Goodbye!", cn:"太好了！希望你下次玩得开心！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['christmas','spring','festival','new','year','children','day','mid-autumn','national'], suggestions:["My favorite holiday is Christmas.","I love the Spring Festival.","Children's Day is my favorite."]},
      {teacherLineId:'t2', keywords:['december','january','february','june','when','month','in'], suggestions:["It's in December.","It's in January or February.","In June."]},
      {teacherLineId:'t3', keywords:['eat','dinner','gifts','family','tree','fireworks','visit','play'], suggestions:["We have a big dinner.","We give gifts and put up a tree.","We visit family and eat dumplings."]},
      {teacherLineId:'t4', keywords:['yes','give','get','gifts','red','envelope','presents','no'], suggestions:["Yes, I get red envelopes.","Yes, I get lots of presents.","No, not really."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','too','bye','enjoy','see'], suggestions:["Thanks, you too!","Thank you! Bye!","Thanks! See you!"]}
    ],
    vocabulary:['holiday','christmas','spring','festival','gift','dinner','family','envelope','enjoy'],
    tips:'谈节日时间用 in + 月份，如 in December；活动用 We usually...'
  },
  { id:'shopping_market', title:'买衣服', icon:'🛒', level:3, desc:'买衣服问尺码颜色和试穿',
    teacherLines:[
      {id:'t1', text:"Hi! Welcome! Can I help you?", cn:"嗨！欢迎！需要帮忙吗？"},
      {id:'t2', text:"Sure! What size do you wear?", cn:"当然！你穿多大尺码？"},
      {id:'t3', text:"Here you are. What color do you like?", cn:"给您。您喜欢什么颜色？"},
      {id:'t4', text:"Good choice! It's 80 yuan. Would you like to try it on?", cn:"好选择！80元。您想试穿吗？"},
      {id:'t5', text:"Great! Anything else? Here's your bag. Thank you!", cn:"好的！还要别的吗？这是您的袋子。谢谢！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','shirt','t-shirt','shoes','pants','dress','look','want','jacket'], suggestions:["Yes, I'm looking for a shirt.","I want a T-shirt, please.","Yes, do you have shoes?"]},
      {teacherLineId:'t2', keywords:['small','medium','large','big','size','s','m','l'], suggestions:["I wear size M.","Medium, please.","I'm a small."]},
      {teacherLineId:'t3', keywords:['blue','red','black','white','green','yellow','color','like'], suggestions:["I like blue.","Blue, please.","I want the red one."]},
      {teacherLineId:'t4', keywords:['yes','try','sure','ok','on','fitting','room','love'], suggestions:["Yes, I'll try it on.","Sure, I'll try it.","Okay, where is the fitting room?"]},
      {teacherLineId:'t5', keywords:['no','thats','all','thanks','yes','socks','hat','bye'], suggestions:["No, that's all, thanks.","Yes, I also want socks.","That's all, thank you!"]}
    ],
    vocabulary:['help','size','color','try','on','price','shirt','medium','large','thanks'],
    tips:'问尺码用 What size do you wear? 问价格用 How much is it?'
  },
  { id:'birthday_party', title:'生日派对', icon:'🎂', level:2, desc:'邀请参加生日派对',
    teacherLines:[
      {id:'t1', text:"Hi! Next Saturday is my birthday!", cn:"嗨！下周六是我的生日！"},
      {id:'t2', text:"I'm having a party! Would you like to come?", cn:"我要办派对！你想来吗？"},
      {id:'t3', text:"Great! It starts at 3 o'clock. Can you make it?", cn:"太好了！3点开始。你能来吗？"},
      {id:'t4', text:"Awesome! What will we do at the party?", cn:"太棒了！我们在派对上会做什么？"},
      {id:'t5', text:"Sounds like fun! See you on Saturday! Bye!", cn:"听起来很有趣！周六见！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['happy','birthday','wow','cool','great','congrats','nice'], suggestions:["Wow, happy birthday!","Happy birthday!","That's great!"]},
      {teacherLineId:'t2', keywords:['yes','sure','love','come','like','yeah','course','of'], suggestions:["Yes, I'd love to!","Sure, I'd love to come!","Of course!"]},
      {teacherLineId:'t3', keywords:['yes','sure','can','three','oclock','okay','be','there'], suggestions:["Yes, I can come at 3.","Sure, I'll be there.","Yes, I can make it."]},
      {teacherLineId:'t4', keywords:['cake','games','sing','dance','eat','play','song','candles'], suggestions:["We'll eat cake and play games!","We'll sing and eat cake.","We can play games together."]},
      {teacherLineId:'t5', keywords:['see','you','thanks','bye','saturday','wait','cant'], suggestions:["See you on Saturday!","Thanks! Bye!","I can't wait!"]}
    ],
    vocabulary:['birthday','party','come','saturday','cake','present','sing','games','fun','invite'],
    tips:"邀请别人用 Would you like to...? 回答用 I'd love to. 表达期待用 I can't wait!"
  },
  { id:'doctor_visit', title:'看医生', icon:'🏥', level:4, desc:'描述症状和看病对话',
    teacherLines:[
      {id:'t1', text:"Hello! What seems to be the problem today?", cn:"你好！今天哪里不舒服？"},
      {id:'t2', text:"Oh dear! Where does it hurt?", cn:"天哪！哪里疼？"},
      {id:'t3', text:"I see. How did this happen?", cn:"我明白了。这是怎么发生的？"},
      {id:'t4', text:"Okay. Are you allergic to any medicine?", cn:"好的。你对什么药过敏吗？"},
      {id:'t5', text:"Take the pills after meals. Come back in two days. Get well soon!", cn:"饭后吃药。两天后回来复诊。祝早日康复！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['stomach','tooth','ear','throat','hurt','sick','pain','ache'], suggestions:["My stomach hurts.","I have a toothache.","My ear hurts a lot."]},
      {teacherLineId:'t2', keywords:['stomach','tooth','ear','here','left','right','head','throat'], suggestions:["Here, in my stomach.","My left ear hurts.","My tooth, right here."]},
      {teacherLineId:'t3', keywords:['ate','too','much','cold','water','fell','played','yesterday','ran'], suggestions:["I ate too much ice cream.","I drank cold water.","I fell down yesterday."]},
      {teacherLineId:'t4', keywords:['no','dont','think','so','yes','none','not','sure','allergic'], suggestions:["No, I don't think so.","No, I'm not allergic.","I'm not sure."]},
      {teacherLineId:'t5', keywords:['okay','thanks','understand','will','doctor','bye'], suggestions:["Okay, thank you, doctor.","I understand. Thanks!","Okay, I will. Goodbye!"]}
    ],
    vocabulary:['hurt','stomach','tooth','ear','throat','medicine','allergic','meals','pills','doctor'],
    tips:"描述哪里疼用 My ... hurts. 过敏用 I'm allergic to... 饭后用 after meals"
  },
  { id:'sports', title:'运动健身', icon:'⚽', level:2, desc:'聊喜欢的运动和比赛',
    teacherLines:[
      {id:'t1', text:"Hey! Do you like sports?", cn:"嘿！你喜欢运动吗？"},
      {id:'t2', text:"Cool! What's your favorite sport?", cn:"酷！你最喜欢的运动是什么？"},
      {id:'t3', text:"Nice! How often do you play it?", cn:"不错！你多久玩一次？"},
      {id:'t4', text:"Awesome! Who do you usually play with?", cn:"太棒了！你通常和谁一起玩？"},
      {id:'t5', text:"Great! Sports keep us healthy. Keep it up! Bye!", cn:"太好了！运动让我们健康。继续加油！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','yep','love','like','sports','no','sure'], suggestions:["Yes, I love sports!","Yeah, I like sports.","Sure, I do!"]},
      {teacherLineId:'t2', keywords:['football','basketball','swim','run','tennis','pong','badminton','jump','cycling'], suggestions:["My favorite sport is basketball.","I like football best.","I love swimming."]},
      {teacherLineId:'t3', keywords:['every','day','week','twice','often','once','usually','times'], suggestions:["Every day after school.","Twice a week.","I play it every week."]},
      {teacherLineId:'t4', keywords:['friends','classmates','dad','brother','team','family','alone'], suggestions:["I play with my friends.","With my classmates.","I play with my dad."]},
      {teacherLineId:'t5', keywords:['thanks','yes','right','healthy','bye','will'], suggestions:["Thanks! You're right. Bye!","Yes, I will! Bye!","Thanks! See you!"]}
    ],
    vocabulary:['sport','play','football','basketball','swim','often','team','healthy','friends','every'],
    tips:'表达频率用 every day 每天 / twice a week 一周两次'
  },
  { id:'weather_seasons', title:'天气穿衣', icon:'🌤️', level:1, desc:'聊今天天气和穿什么',
    teacherLines:[
      {id:'t1', text:"Hi! What's the weather like today?", cn:"嗨！今天天气怎么样？"},
      {id:'t2', text:"I see! Is it hot or cold?", cn:"明白！热还是冷？"},
      {id:'t3', text:"Okay! What will you wear today?", cn:"好的！你今天穿什么？"},
      {id:'t4', text:"Nice! What season is it now?", cn:"不错！现在是什么季节？"},
      {id:'t5', text:"Great! Have a nice day! Bye!", cn:"好！祝你有美好的一天！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['sunny','rainy','cloudy','windy','snowy','hot','cold','warm','nice'], suggestions:["It's sunny today.","It's rainy.","It's cloudy and warm."]},
      {teacherLineId:'t2', keywords:['hot','cold','warm','cool','very','it','is'], suggestions:["It's very hot.","It's cold today.","It's cool and nice."]},
      {teacherLineId:'t3', keywords:['shirt','t-shirt','jacket','coat','shorts','dress','hat','raincoat'], suggestions:["I'll wear a T-shirt.","I'll wear a jacket.","A raincoat, because it's rainy."]},
      {teacherLineId:'t4', keywords:['spring','summer','autumn','fall','winter','it','is'], suggestions:["It's summer.","It's spring now.","It's winter."]},
      {teacherLineId:'t5', keywords:['thanks','you','too','bye','see','will'], suggestions:["Thanks! Bye!","Thanks, you too!","See you!"]}
    ],
    vocabulary:['weather','hot','cold','wear','shirt','jacket','season','summer','spring','winter'],
    tips:"穿什么用 I'll wear...；hot/cold 形容温度；季节用 It is + 季节"
  }
];
