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
  },
  // 新增 6 个场景：train_station / park_day / market_shopping / school_trip / concert_music / cinema_movie
  { id:'train_station', title:'火车站', icon:'🚂', level:3, desc:'在火车站问票和车次',
    teacherLines:[
      {id:'t1', text:"Hello! How can I help you?", cn:"你好！需要帮忙吗？"},
      {id:'t2', text:"Where would you like to go?", cn:"你想去哪里？"},
      {id:'t3', text:"There is a train at 10 o'clock. Do you want to buy a ticket?", cn:"10点有一班车。你要买票吗？"},
      {id:'t4', text:"That's one ticket to Beijing. Here you are!", cn:"一张去北京的票。给您！"},
      {id:'t5', text:"Have a nice trip! The train is at Platform 3. Goodbye!", cn:"旅途愉快！火车在3号站台。再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','help','want','need','ticket'], suggestions:["Yes, I want a ticket.","I need help, please."]},
      {teacherLineId:'t2', keywords:['beijing','shanghai','guangzhou','go','want','visit'], suggestions:["I want to go to Beijing.","Shanghai, please."]},
      {teacherLineId:'t3', keywords:['yes','sure','ok','buy','ticket','want'], suggestions:["Yes, please buy one.","Sure, I want a ticket."]},
      {teacherLineId:'t4', keywords:['thanks','thank','good','ok','yes'], suggestions:["Thank you!","Thanks, that's great!"]},
      {teacherLineId:'t5', keywords:['thanks','bye','see','you','goodbye','thank'], suggestions:["Thanks! Bye!","Thank you! See you!"]}
    ],
    vocabulary:['ticket','train','platform','station','go','buy','want','trip','here','there'],
    tips:'问车次用 Where is the train? 问站台用 Which platform?'
  },
  { id:'park_day', title:'公园游玩', icon:'🌳', level:1, desc:'在公园描述活动和看到的景物',
    teacherLines:[
      {id:'t1', text:"Hi! Are you going to the park today?", cn:"嗨！你今天要去公园吗？"},
      {id:'t2', text:"Cool! What will you do in the park?", cn:"酷！你在公园会做什么？"},
      {id:'t3', text:"That sounds fun! What can you see in the park?", cn:"听起来有趣！你在公园能看到什么？"},
      {id:'t4', text:"Nice! Do you have a picnic there?", cn:"不错！你会在那里野餐吗？"},
      {id:'t5', text:"Sounds like a perfect day! Have fun! Bye!", cn:"完美的一天！玩得开心！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','going','go','want'], suggestions:["Yes, I'm going to the park!","Yes, I want to go."]},
      {teacherLineId:'t2', keywords:['fly','kite','run','play','picnic','walk','swing','ball'], suggestions:["I'll fly a kite.","I'll play football."]},
      {teacherLineId:'t3', keywords:['tree','flower','bird','lake','grass','dog','sun','cloud'], suggestions:["I can see trees and flowers.","There are many birds."]},
      {teacherLineId:'t4', keywords:['yes','yeah','picnic','no','eat'], suggestions:["Yes, we will have a picnic.","No, I just want to play."]},
      {teacherLineId:'t5', keywords:['thanks','you','bye','see','fun','yes'], suggestions:["Thanks! Bye!","Thank you! See you!"]}
    ],
    vocabulary:['park','play','fly','kite','tree','flower','bird','picnic','fun','have'],
    tips:'描述公园用 There is/are... 或 I can see...'
  },
  { id:'market_shopping', title:'菜市场', icon:'🥬', level:2, desc:'在市场买蔬菜和水果',
    teacherLines:[
      {id:'t1', text:"Welcome to the market! What would you like to buy?", cn:"欢迎来市场！你想买什么？"},
      {id:'t2', text:"We have fresh vegetables. Do you want some tomatoes?", cn:"我们有新鲜的蔬菜。你想要一些西红柿吗？"},
      {id:'t3', text:"How much are they?", cn:"多少钱？"},
      {id:'t4', text:"They are 5 yuan per kilo. How many kilos do you want?", cn:"每公斤5元。你想要几公斤？"},
      {id:'t5', text:"Here you are! Thank you! Come again! Bye!", cn:"给您！谢谢！欢迎再来！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['vegetable','fruit','tomato','apple','want','buy','rice'], suggestions:["I want to buy vegetables.","I want apples, please."]},
      {teacherLineId:'t2', keywords:['yes','yeah','tomato','vegetable','onion','carrot','potato'], suggestions:["Yes, I want tomatoes.","Yes, some carrots please."]},
      {teacherLineId:'t3', keywords:['much','how','price','cost','yuan','dollars'], suggestions:["How much are they?","What's the price?"]},
      {teacherLineId:'t4', keywords:['one','two','three',' kilo','kilos','want','some'], suggestions:["I want two kilos.","One kilo, please."]},
      {teacherLineId:'t5', keywords:['thanks','thank','bye','good','see','you'], suggestions:["Thanks! Bye!","Thank you! See you!"]}
    ],
    vocabulary:['market','vegetable','fruit','tomato','kilogram','buy','want','fresh','yuan','how'],
    tips:'问价格用 How much...? 买几公斤用 ...kilos, please.'
  },
  { id:'school_trip', title:'学校郊游', icon:'🚌', level:2, desc:'聊学校组织郊游的活动',
    teacherLines:[
      {id:'t1', text:"Hello! Did your school have a field trip?", cn:"你好！你们学校组织郊游了吗？"},
      {id:'t2', text:"Where did you go?", cn:"你们去哪里了？"},
      {id:'t3', text:"Nice! What did you do there?", cn:"不错！你们在那里做了什么？"},
      {id:'t4', text:"Did you eat lunch there?", cn:"你们在那里吃午饭了吗？"},
      {id:'t5', text:"Sounds like a great trip! I hope you had fun! Bye!", cn:"听起来很棒！希望玩得开心！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','went','trip','did','no'], suggestions:["Yes, we had a trip!","No, we didn't."]},
      {teacherLineId:'t2', keywords:['zoo','museum','park','mountain','farm','beach','school'], suggestions:["We went to the zoo.","We went to the museum."]},
      {teacherLineId:'t3', keywords:['saw','played','ate','learned','walk','took','photo'], suggestions:["We saw many animals.","We played games there."]},
      {teacherLineId:'t4', keywords:['yes','yeah','lunch','ate','food','sandwich','no'], suggestions:["Yes, we ate lunch there.","We had sandwiches."]},
      {teacherLineId:'t5', keywords:['thanks','thank','yes','fun','bye','see'], suggestions:["Thanks! It was fun!","Thank you! See you!"]}
    ],
    vocabulary:['trip','field','go','saw','did','ate','lunch','school','fun','hope'],
    tips:'郊游用 field trip 或 school trip；过去时用 went/saw/ate'
  },
  { id:'concert_music', title:'音乐会', icon:'🎵', level:3, desc:'聊喜欢的音乐和音乐会',
    teacherLines:[
      {id:'t1', text:"Hi! Do you like music?", cn:"嗨！你喜欢音乐吗？"},
      {id:'t2', text:"Great! What kind of music do you like?", cn:"好！你喜欢什么类型的音乐？"},
      {id:'t3', text:"Cool! Can you play any instruments?", cn:"酷！你会演奏乐器吗？"},
      {id:'t4', text:"Awesome! Have you ever been to a concert?", cn:"太棒了！你参加过音乐会吗？"},
      {id:'t5', text:"Music makes life beautiful! Keep enjoying it! Bye!", cn:"音乐让生命更美好！继续享受它！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','love','like','music','pop','rock'], suggestions:["Yes, I love music!","Yes, I like pop music."]},
      {teacherLineId:'t2', keywords:['pop','rock','jazz','classical','country','folk','dance'], suggestions:["I like pop music.","I love classical music."]},
      {teacherLineId:'t3', keywords:['piano','guitar','violin','drum','sing','yes','no','play'], suggestions:["Yes, I play the piano.","No, I can't play any."]},
      {teacherLineId:'t4', keywords:['yes','yeah','been','concert','never','want','go'], suggestions:["Yes, I went to a concert.","No, I haven't been yet."]},
      {teacherLineId:'t5', keywords:['thanks','yes','music','fun','bye','see','goodbye'], suggestions:["Thanks! Bye!","Thank you! See you!"]}
    ],
    vocabulary:['music','like','play','instrument','concert','piano','guitar','sing','listen','enjoy'],
    tips:'演奏乐器用 play the + 乐器；从未做过用 I have never been to...'
  },
  { id:'cinema_movie', title:'电影院', icon:'🎬', level:2, desc:'在电影院买票和选座位',
    teacherLines:[
      {id:'t1', text:"Welcome to the cinema! Would you like to see a movie?", cn:"欢迎来到电影院！想看电影吗？"},
      {id:'t2', text:"What kind of movie do you like?", cn:"你喜欢什么类型的电影？"},
      {id:'t3', text:"Great choice! What time would you like to watch it?", cn:"好选择！你想看几点场的？"},
      {id:'t4', text:"A ticket is 40 yuan. Would you like popcorn too?", cn:"一张票40元。想要爆米花吗？"},
      {id:'t5', text:"Enjoy the movie! The screen is at the front. Have fun! Bye!", cn:"祝你观影愉快！银幕在前面。玩得开心！再见！"}
    ],
    studentExpected:[
      {teacherLineId:'t1', keywords:['yes','yeah','want','movie','like'], suggestions:["Yes, I want to watch a movie.","Yes, I'd like to."]},
      {teacherLineId:'t2', keywords:['action','comedy','cartoon','animation','scary','funny','romance'], suggestions:["I like cartoons.","I want to see an action movie."]},
      {teacherLineId:'t3', keywords:['three','five','seven','time','clock','hour','afternoon','evening'], suggestions:["At 3 o'clock, please.","I want the 5 pm show."]},
      {teacherLineId:'t4', keywords:['yes','popcorn','sure','no','thanks','want'], suggestions:["Yes, I want popcorn too.","No, thanks. Just a ticket."]},
      {teacherLineId:'t5', keywords:['thanks','thank','bye','see','fun','enjoy','movie'], suggestions:["Thanks! Bye!","Thank you! Enjoy the movie!"]}
    ],
    vocabulary:['cinema','movie','ticket','watch','popcorn','time','screen','enjoy','fun','see'],
    tips:'看电影用 watch a movie 或 see a movie；问时间用 What time...?'
  }
];
