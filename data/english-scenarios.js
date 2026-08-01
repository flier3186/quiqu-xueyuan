// english-scenarios.js · 奇趣学园 V5 英语数据 · 自动生成
// 全局变量：window.SPEAK_SCENARIOS
// 内容：12个口语场景，含多轮对话，每个场景5轮老师-学生互动
// 字段：id(唯一标识) title(场景名) icon(图标) level(难度1-4) desc(描述)
//   teacherLines(老师台词数组: {id text cn})
//   studentExpected(学生期望回答: {teacherLineId keywords suggestions})
//   vocabulary(核心词汇) tips(对话技巧提示)

window.SPEAK_SCENARIOS = [
  { id:'daily_greeting', title:'日常问候', icon:'👋', level:1, desc:'学习日常打招呼',
    teacherLines:[
      {id:'t1', text:"Hi! How are you today?", cn:"嗨！你今天怎么样？"},
      {id:'t2', text:"That's great! What did you do this morning?", cn:"太棒了！你今早做了什么？"},
      {id:'t3', text:"Sounds fun! Did you eat breakfast?", cn:"听起来有趣！你吃早饭了吗？"},
      {id:'t4', text:"Yummy! What's your favorite food?", cn:"好吃！你最喜欢的食物是什么？"},
      {id:'t5', text:"I like that too! Nice talking to you. See you!", cn:"我也喜欢！很高兴和你聊天。再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['fine','good','great','ok','okay','happy','sad','tired'], suggestions:["I'm fine, thanks!","I'm great!","I'm good."]},
      {teacherLineId:'t2', keywords:['breakfast','school','sleep','play','read','ate','morning','tv'], suggestions:["I ate breakfast.","I played football.","I slept late."]},
      {teacherLineId:'t3', keywords:['yes','yeah','yep','no','ate','breakfast','eggs'], suggestions:["Yes, I ate eggs.","No, I didn't."]},
      {teacherLineId:'t4', keywords:['pizza','apple','rice','noodle','noodles','ice cream','cake','chicken','fish'], suggestions:["I like pizza.","My favorite food is rice."]},
      {teacherLineId:'t5', keywords:['bye','see','you','goodbye','thanks'], suggestions:["See you!","Goodbye!"]}
    ],
    vocabulary:['how','are','you','fine','morning','breakfast','favorite','food','see'],
    tips:'回答时可以加上原因，比如 I am great because I played football!'
  },
  { id:'self_intro', title:'自我介绍', icon:'🙋', level:1, desc:'介绍自己名字年龄爱好',
    teacherLines:[
      {id:'t1', text:"Hello! What's your name?", cn:"你好！你叫什么名字？"},
      {id:'t2', text:"Nice to meet you! How old are you?", cn:"很高兴认识你！你几岁了？"},
      {id:'t3', text:"Cool! Where are you from?", cn:"酷！你来自哪里？"},
      {id:'t4', text:"That's a nice place! What do you like to do?", cn:"好地方！你喜欢做什么？"},
      {id:'t5', text:"Awesome! It was great meeting you!", cn:"太棒了！很高兴认识你！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['name',"i'm",'my','call','tom','lily'], suggestions:["My name is Tom.","I'm Lily."]},
      {teacherLineId:'t2', keywords:['old','years','ten','nine','eight','eleven','twelve'], suggestions:["I'm ten years old.","I'm nine."]},
      {teacherLineId:'t3', keywords:['from','china','beijing','shanghai','america'], suggestions:["I'm from China.","I'm from Beijing."]},
      {teacherLineId:'t4', keywords:['play','read','draw','sing','dance','football','music'], suggestions:["I like playing football.","I love drawing."]},
      {teacherLineId:'t5', keywords:['you','too','nice','meet','bye'], suggestions:["Nice to meet you too!","Bye!"]}
    ],
    vocabulary:['name','old','years','from','like','meet','nice'],
    tips:'介绍自己用 My name is... 或 I am... 句型'
  },
  { id:'school_life', title:'学校生活', icon:'📚', level:2, desc:'聊聊学校和科目',
    teacherLines:[
      {id:'t1', text:"Hi! What's your favorite subject at school?", cn:"嗨！你最喜欢学校的什么科目？"},
      {id:'t2', text:"Interesting! Who is your favorite teacher?", cn:"有趣！你最喜欢的老师是谁？"},
      {id:'t3', text:"Nice! What do you do at lunch time?", cn:"不错！你午饭时间做什么？"},
      {id:'t4', text:"Sounds fun! Do you have many friends at school?", cn:"听起来有趣！你在学校有很多朋友吗？"},
      {id:'t5', text:"That's wonderful! School is fun, right? See you!", cn:"太好了！学校很有趣，对吧？再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['math','english','science','art','music','pe','chinese'], suggestions:["My favorite subject is math.","I like English."]},
      {teacherLineId:'t2', keywords:['teacher','mr','mrs','miss','kind','funny'], suggestions:["My favorite teacher is Mr. Wang.","I like my math teacher."]},
      {teacherLineId:'t3', keywords:['eat','play','talk','friends','lunch'], suggestions:["I eat lunch with friends.","I play in the playground."]},
      {teacherLineId:'t4', keywords:['yes','yeah','many','friends','some'], suggestions:["Yes, I have many friends.","Yes, I have some friends."]},
      {teacherLineId:'t5', keywords:['yes','right','fun','bye'], suggestions:["Yes, school is fun!","See you!"]}
    ],
    vocabulary:['subject','teacher','lunch','friends','school','math','english','play'],
    tips:'描述学校生活可用 I usually... 或 I often... 表示经常做的事'
  },
  { id:'hobbies', title:'喜好爱好', icon:'⚽', level:2, desc:'谈论兴趣和爱好',
    teacherLines:[
      {id:'t1', text:"Hey! What do you like to do in your free time?", cn:"嘿！你空闲时间喜欢做什么？"},
      {id:'t2', text:"Cool! How often do you do that?", cn:"酷！你多久做一次？"},
      {id:'t3', text:"Awesome! Are you good at it?", cn:"太棒了！你擅长吗？"},
      {id:'t4', text:"Nice! Do you play any sports?", cn:"不错！你做什么运动吗？"},
      {id:'t5', text:"Great! I love chatting with you. Bye for now!", cn:"太好了！喜欢和你聊天。先再见啦！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['play','read','draw','music','games','football','dance','sing'], suggestions:["I like playing football.","I love drawing.","I play video games."]},
      {teacherLineId:'t2', keywords:['every','day','week','often','sometimes','usually'], suggestions:["Every day.","I play it every week."]},
      {teacherLineId:'t3', keywords:['yes','yeah','good','ok','not','bad'], suggestions:["Yes, I'm good at it.","I'm okay at it."]},
      {teacherLineId:'t4', keywords:['football','basketball','swim','run','tennis','no','yes'], suggestions:["Yes, I play basketball.","No, I don't."]},
      {teacherLineId:'t5', keywords:['bye','see','you','thanks'], suggestions:["Bye!","See you!"]}
    ],
    vocabulary:['like','free','time','often','play','sports','good','every'],
    tips:'表达爱好用 I like + 动词ing，如 I like swimming.'
  },
  { id:'restaurant', title:'购物点餐', icon:'🍕', level:3, desc:'餐厅点餐实用对话',
    teacherLines:[
      {id:'t1', text:"Welcome! What would you like to order?", cn:"欢迎！您想点什么？"},
      {id:'t2', text:"Great choice! Would you like anything to drink?", cn:"好选择！您想喝点什么吗？"},
      {id:'t3', text:"Sure! Anything else? We have delicious desserts.", cn:"好的！还要别的吗？我们有美味甜点。"},
      {id:'t4', text:"Okay! That will be 25 yuan. How would you like to pay?", cn:"好的！一共25元。您怎么付款？"},
      {id:'t5', text:"Thank you! Your order will be ready soon. Enjoy!", cn:"谢谢！您的订单马上就好。请慢用！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['pizza','burger','noodles','rice','chicken','salad','like','want'], suggestions:["I'd like a pizza, please.","I want noodles."]},
      {teacherLineId:'t2', keywords:['juice','water','milk','tea','cola','coffee','no'], suggestions:["Orange juice, please.","I'd like water.","No, thanks."]},
      {teacherLineId:'t3', keywords:['cake','ice cream','yes','no','dessert','thanks'], suggestions:["Yes, an ice cream please.","No, that's all, thanks."]},
      {teacherLineId:'t4', keywords:['cash','card','phone','weixin','alipay','money'], suggestions:["I'll pay by phone.","Cash, please."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','bye'], suggestions:["Thank you!","Thanks, bye!"]}
    ],
    vocabulary:['order','drink','dessert','pay','cash','juice','pizza','thanks'],
    tips:'点餐礼貌用语：I would like..., please. 或 Can I have...?'
  },
  { id:'directions', title:'问路指路', icon:'🧭', level:3, desc:'问路与指路实用对话',
    teacherLines:[
      {id:'t1', text:"Hello! Can I help you find somewhere?", cn:"你好！需要我帮你找地方吗？"},
      {id:'t2', text:"Sure! Where do you want to go?", cn:"当然！你想去哪里？"},
      {id:'t3', text:"Okay! It's not far. Go straight and turn left.", cn:"好的！不远。直走然后左转。"},
      {id:'t4', text:"Then you'll see it next to the park. Do you understand?", cn:"然后你会看到它在公园旁边。你明白吗？"},
      {id:'t5', text:"You're welcome! Have a good trip! Goodbye!", cn:"不客气！旅途愉快！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','help','lost','find','where','hospital','school'], suggestions:["Yes, I'm lost.","Can you help me find the hospital?"]},
      {teacherLineId:'t2', keywords:['hospital','school','park','station','zoo','library','go','want'], suggestions:["I want to go to the hospital.","To the park, please."]},
      {teacherLineId:'t3', keywords:['yes','okay','thanks','straight','left','right','understand'], suggestions:["Okay, thanks!","Yes, I understand."]},
      {teacherLineId:'t4', keywords:['yes','okay','understand','thanks','see'], suggestions:["Yes, I see. Thanks!","Yes, I understand."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','bye'], suggestions:["Thank you! Bye!"]}
    ],
    vocabulary:['go','straight','turn','left','right','park','where','hospital'],
    tips:'指路常用词：go straight 直走 / turn left 左转 / next to 在旁边'
  },
  { id:'weekend_plan', title:'周末计划', icon:'📅', level:4, desc:'用将来时聊周末计划',
    teacherLines:[
      {id:'t1', text:"Hi! What are you going to do this weekend?", cn:"嗨！这个周末你打算做什么？"},
      {id:'t2', text:"Sounds great! Who will you go with?", cn:"听起来不错！你和谁一起去？"},
      {id:'t3', text:"Nice! What time will you go?", cn:"不错！你几点去？"},
      {id:'t4', text:"Cool! What will the weather be like, do you think?", cn:"酷！你觉得天气会怎样？"},
      {id:'t5', text:"Sounds perfect! Have a wonderful weekend! Bye!", cn:"听起来完美！祝你周末愉快！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['park','cinema','visit','grandma','play','football','homework','sleep'], suggestions:["I'm going to the park.","I'll visit my grandma."]},
      {teacherLineId:'t2', keywords:['mom','dad','friends','family','sister','brother','alone'], suggestions:["With my family.","With my friends."]},
      {teacherLineId:'t3', keywords:['morning','afternoon','ten','nine','eight',"o'clock",'clock'], suggestions:["In the morning.","At ten o'clock."]},
      {teacherLineId:'t4', keywords:['sunny','rainy','cloudy','hot','cold','warm','good','nice'], suggestions:["I think it'll be sunny.","It will be warm."]},
      {teacherLineId:'t5', keywords:['thanks','you','too','bye'], suggestions:["Thanks, you too!","Bye!"]}
    ],
    vocabulary:['weekend','going','will','with','morning','sunny','family','park'],
    tips:'表达将来计划用 I am going to... 或 I will...'
  },
  { id:'dream_future', title:'梦想未来', icon:'🚀', level:4, desc:'畅谈梦想与未来',
    teacherLines:[
      {id:'t1', text:"Hello! What do you want to be when you grow up?", cn:"你好！你长大后想做什么？"},
      {id:'t2', text:"Wow! Why do you want to be that?", cn:"哇！你为什么想做那个？"},
      {id:'t3', text:"That's a great reason! What will you do to achieve it?", cn:"好理由！你会怎么做来实现它？"},
      {id:'t4', text:"Amazing! Where do you want to work in the future?", cn:"太棒了！将来你想在哪里工作？"},
      {id:'t5', text:"I believe in you! Good luck with your dream! See you!", cn:"我相信你！祝你好运实现梦想！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['teacher','doctor','pilot','scientist','artist','police','nurse','astronaut','engineer'], suggestions:["I want to be a doctor.","I want to be a teacher."]},
      {teacherLineId:'t2', keywords:['help','people','love','like','because','interesting','sick','stars'], suggestions:["Because I want to help people.","Because I love stars."]},
      {teacherLineId:'t3', keywords:['study','hard','learn','read','practice','school'], suggestions:["I'll study hard.","I will practice every day."]},
      {teacherLineId:'t4', keywords:['hospital','school','beijing','shanghai','space','america','big','city'], suggestions:["In a big hospital.","In a big city."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','bye','see'], suggestions:["Thank you! Bye!","See you!"]}
    ],
    vocabulary:['want','be','grow','up','future','dream','study','doctor','because'],
    tips:'表达梦想用 I want to be a... 理由用 Because...'
  },
  { id:'shopping', title:'超市购物', icon:'🛒', level:3, desc:'超市购物实用对话',
    teacherLines:[
      {id:'t1', text:"Hi! Can I help you find something?", cn:"嗨！需要我帮你找什么吗？"},
      {id:'t2', text:"Sure! The apples are over there. How many do you want?", cn:"当然！苹果在那边。你要几个？"},
      {id:'t3', text:"Good! Anything else you need?", cn:"好的！还需要别的吗？"},
      {id:'t4', text:"OK! That's 30 yuan altogether. Do you have a membership card?", cn:"好的！一共30元。你有会员卡吗？"},
      {id:'t5', text:"No problem! Here's your change. Have a nice day!", cn:"没问题！这是找你的零钱。祝你有美好的一天！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['apple','banana','milk','bread','egg','yes','find','where'], suggestions:["Yes, where are the apples?","I'm looking for milk."]},
      {teacherLineId:'t2', keywords:['two','three','four','five','six','kilogram','kg','pound'], suggestions:["I want five apples.","Two kilograms, please."]},
      {teacherLineId:'t3', keywords:['yes','no','bread','milk','egg','rice','thanks','that'], suggestions:["Yes, I need some bread too.","No, that's all, thanks."]},
      {teacherLineId:'t4', keywords:['yes','here','no','dont','have','card'], suggestions:["Yes, here it is.","No, I don't have one."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','bye'], suggestions:["Thank you! Bye!","Thanks!"]}
    ],
    vocabulary:['help','find','apple','how','many','need','yuan','card','change'],
    tips:'购物常用语：How much is it? 多少钱？ / I want... 我要...'
  },
  { id:'weather', title:'天气聊天', icon:'🌤️', level:2, desc:'讨论天气和季节',
    teacherLines:[
      {id:'t1', text:"Hi! How's the weather today?", cn:"嗨！今天天气怎么样？"},
      {id:'t2', text:"Oh, I see! What's your favorite season?", cn:"哦，这样啊！你最喜欢什么季节？"},
      {id:'t3', text:"Nice! Why do you like that season?", cn:"不错！你为什么喜欢那个季节？"},
      {id:'t4', text:"That sounds wonderful! What do you do in that season?", cn:"听起来棒极了！你在那个季节做什么？"},
      {id:'t5', text:"Cool! I hope you have a great time! See you!", cn:"酷！希望你玩得开心！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['sunny','rainy','cloudy','windy','snowy','hot','cold','warm'], suggestions:["It's sunny today.","It's rainy and cold."]},
      {teacherLineId:'t2', keywords:['spring','summer','autumn','fall','winter'], suggestions:["My favorite season is summer.","I like spring best."]},
      {teacherLineId:'t3', keywords:['warm','hot','swim','flower','snow','play','because'], suggestions:["Because I can swim in summer.","Because flowers bloom in spring."]},
      {teacherLineId:'t4', keywords:['swim','play','travel','eat','ice cream','snowman','picnic'], suggestions:["I swim every day.","I make snowmen in winter."]},
      {teacherLineId:'t5', keywords:['thanks','you','too','bye','see'], suggestions:["Thanks, you too!","See you!"]}
    ],
    vocabulary:['weather','sunny','rainy','season','spring','summer','winter','swim'],
    tips:'描述天气用 It is + 天气词，如 It is sunny.'
  },
  { id:'family', title:'家庭介绍', icon:'👨‍👩‍👧‍👦', level:2, desc:'介绍家人和家庭生活',
    teacherLines:[
      {id:'t1', text:"Hi! How many people are in your family?", cn:"嗨！你家有几口人？"},
      {id:'t2', text:"That's nice! What does your father do?", cn:"真好！你爸爸是做什么的？"},
      {id:'t3', text:"Cool! What about your mother? What does she do?", cn:"酷！那你妈妈呢？她是做什么的？"},
      {id:'t4', text:"Wow! Do you have any brothers or sisters?", cn:"哇！你有兄弟姐妹吗？"},
      {id:'t5', text:"What a lovely family! I'm sure you're all very happy! Bye!", cn:"多可爱的家庭！我相信你们都很幸福！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['three','four','five','people','family'], suggestions:["There are four people in my family.","My family has three people."]},
      {teacherLineId:'t2', keywords:['doctor','teacher','driver','worker','engineer','businessman'], suggestions:["My father is a doctor.","He is a teacher."]},
      {teacherLineId:'t3', keywords:['teacher','doctor','nurse','worker','housewife','business'], suggestions:["My mother is a teacher.","She is a nurse."]},
      {teacherLineId:'t4', keywords:['yes','brother','sister','no','only','child'], suggestions:["Yes, I have a little sister.","No, I'm an only child."]},
      {teacherLineId:'t5', keywords:['thanks','yes','happy','bye'], suggestions:["Thank you! Yes, we are!","Thanks! Bye!"]}
    ],
    vocabulary:['family','father','mother','brother','sister','people','doctor','teacher'],
    tips:'介绍家人用 My father/mother is a... 或 She/He works as a...'
  },
  { id:'health', title:'看病就医', icon:'🏥', level:4, desc:'看医生实用对话',
    teacherLines:[
      {id:'t1', text:"Hello! What's wrong with you today?", cn:"你好！你今天怎么了？"},
      {id:'t2', text:"Oh no! How long have you felt like this?", cn:"天哪！你这样多久了？"},
      {id:'t3', text:"I see. Let me check. Open your mouth, please.", cn:"我明白了。让我检查一下。请张嘴。"},
      {id:'t4', text:"Don't worry. You have a cold. Take this medicine three times a day.", cn:"别担心。你感冒了。这药每天吃三次。"},
      {id:'t5', text:"You're welcome! Rest well and drink more water. Get well soon!", cn:"不客气！好好休息，多喝水。祝早日康复！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['headache','fever','cold','cough','sick','stomach','throat','hurt'], suggestions:["I have a headache.","I feel sick. I have a fever."]},
      {teacherLineId:'t2', keywords:['today','yesterday','two','days','week','since','long'], suggestions:["Since yesterday.","For two days."]},
      {teacherLineId:'t3', keywords:['okay','ok','sure','ah','open'], suggestions:["Okay.","Ah..."]},
      {teacherLineId:'t4', keywords:['okay','thanks','understand','medicine','will','take'], suggestions:["Okay, I understand. Thank you.","I'll take the medicine."]},
      {teacherLineId:'t5', keywords:['thanks','thank','you','bye','doctor'], suggestions:["Thank you, doctor!","Thanks! Goodbye!"]}
    ],
    vocabulary:['wrong','headache','fever','cold','medicine','rest','water','doctor'],
    tips:'描述症状用 I have a... 如 I have a headache. 我头痛。'
  }
];
