
// === V5 错误监控 ===
window.onerror = function(msg, url, line, col, err) {
  try {
    var raw = localStorage.getItem('quiqu_error_log');
    var logs = raw ? JSON.parse(raw) : [];
    logs.push({time: Date.now(), msg: String(msg).slice(0,200), url: String(url).slice(0,100), line: line, col: col, err: err && err.stack ? err.stack.slice(0,300) : ''});
    if (logs.length > 20) logs.shift();
    localStorage.setItem('quiqu_error_log', JSON.stringify(logs));
  } catch(e) {}
};
// === V5 响应式降级：手机端标记 ===
if (window.matchMedia && window.matchMedia('(max-width: 640px)').matches) {
  document.documentElement.classList.add('mobile-mode');
}
// === 数据 & 工具 ===
const ASSETS = {petDragon:'assets/pet-dragon.jpg',petFox:'assets/pet-fox.jpg',petCat:'assets/pet-cat.jpg',petBunny:'assets/pet-bunny.jpg',petWhale:'assets/pet-whale.jpg',teacherEmma:'assets/teacher-emma.jpg',teacherLeo:'assets/teacher-leo.jpg',teacherAria:'assets/teacher-aria.jpg',mouthChart:'assets/mouth-chart-all.jpg'};

// === 严谨词汇字典（5要素） ===
const WORD_DICT = {
  'beautiful':{pos:'adj. 形容词',def:'美丽的；漂亮的；出色的。形容人或事物外观令人愉悦，也可形容抽象事物（如天气、思想）出色。',example:'The park is very beautiful in spring.',coll:['a beautiful girl 漂亮女孩','beautiful weather 好天气','beautiful idea 出色的想法'],syn:'pretty / lovely / gorgeous',ant:'ugly / plain'},
  'happy':{pos:'adj. 形容词',def:'快乐的；高兴的；满意的。表示内心愉悦或对某事感到满足。',example:'She looks happy today.',coll:['feel happy 感到快乐','happy to help 乐于帮忙','happy birthday 生日快乐'],syn:'glad / joyful / cheerful',ant:'sad / unhappy'},
  'big':{pos:'adj. 形容词',def:'大的；重要的；年长的。形容体积、规模、年龄或重要性超过一般。',example:'He lives in a big house.',coll:['a big apple 大苹果','big brother 哥哥','big decision 重要决定'],syn:'large / huge / giant',ant:'small / tiny'},
  'small':{pos:'adj. 形容词',def:'小的；少量的；不重要的。形容体积、数量或程度较小。',example:'The cat is very small.',coll:['a small dog 小狗','small amount 少量','small problem 小问题'],syn:'little / tiny / minor',ant:'big / large'},
  'apple':{pos:'n. 名词',def:'苹果。一种圆形水果，颜色多为红、绿或黄色，味甜或酸。也用于比喻重要事物（如 the apple of one\'s eye 掌上明珠）。',example:'I eat an apple every day.',coll:['red apple 红苹果','apple pie 苹果派','apple tree 苹果树'],syn:'fruit (类)',ant:'—'},
  'cake':{pos:'n. 名词',def:'蛋糕；糕点。一种用面粉、糖、鸡蛋等烘焙而成的甜点，常用于庆祝场合。也可指块状物。',example:'She made a birthday cake.',coll:['birthday cake 生日蛋糕','piece of cake 一块蛋糕；小菜一碟','chocolate cake 巧克力蛋糕'],syn:'pastry / dessert',ant:'—'},
  'eat':{pos:'v. 动词',def:'吃；进食。表示把食物放入口中咀嚼并吞咽。也可表示消耗（如 eat up time）。',example:'I eat breakfast at 7.',coll:['eat breakfast 吃早饭','eat up 吃光','eat out 外出吃饭'],syn:'consume / devour',ant:'starve / fast'},
  'drink':{pos:'v./n. 动词/名词',def:'v. 喝；饮用。n. 饮料。表示吞咽液体，或指饮用的液体。',example:'I drink water every morning.',coll:['drink water 喝水','hot drink 热饮','soft drink 软饮料'],syn:'sip / swallow',ant:'spit (反义为吐)'},
  'like':{pos:'v. 介词',def:'v. 喜欢；喜爱。表示对某人或某事有好感。也可作介词"像……一样"。',example:'I like playing football.',coll:['would like 想要','feel like 想要','like this 像这样'],syn:'love / enjoy / prefer',ant:'dislike / hate'},
  'want':{pos:'v. 动词',def:'想要；需要。表示希望得到某物或希望某事发生。语气比 would like 直接。',example:'I want a new bike.',coll:['want to do 想做','want sth 想要某物','in want of 需要'],syn:'desire / wish / need',ant:'reject / refuse'},
  'play':{pos:'v./n. 动词/名词',def:'v. 玩耍；演奏；扮演。n. 戏剧；游戏。指进行娱乐活动或演奏乐器。',example:'Children like to play outside.',coll:['play football 踢足球','play the piano 弹钢琴','play a role 扮演角色'],syn:'enjoy / perform',ant:'work (反义为工作)'},
  'good':{pos:'adj. 形容词',def:'好的；善良的；擅长的。形容质量高、品行好或能力强。',example:'She is a good student.',coll:['good morning 早上好','good at 擅长','good job 干得好'],syn:'fine / nice / excellent',ant:'bad / poor'},
  'see':{pos:'v. 动词',def:'看见；明白；会见。表示用眼睛察觉，或理解、拜访。',example:'I can see a bird in the tree.',coll:['see you 再见','see off 送行','let me see 让我想想'],syn:'watch / observe / look',ant:'ignore (反义为忽视)'},
  'go':{pos:'v. 动词',def:'去；走；变得。表示移动到某处，或状态变化。',example:'I go to school by bus.',coll:['go to school 上学','go home 回家','go on 继续'],syn:'move / travel / proceed',ant:'stay / stop'},
  'come':{pos:'v. 动词',def:'来；到达；发生。表示朝说话人方向移动，或时间事件到来。',example:'Please come here.',coll:['come in 进来','come back 回来','come true 实现'],syn:'arrive / approach',ant:'go / leave'},
  'would':{pos:'v. 助动词',def:'将；愿意；会。用于礼貌请求、假设或表示意愿，是 will 的过去式。',example:'I would like some tea.',coll:['would like 想要','would rather 宁愿','would have 本会'],syn:'—',ant:'—'},
  'order':{pos:'n./v. 名词/动词',def:'n. 顺序；订单；命令。v. 点餐；订购；命令。在餐厅指请求提供食物。',example:'I want to order a pizza.',coll:['place an order 下单','in order 按顺序','out of order 出故障'],syn:'request / command',ant:'disorder (反义为混乱)'},
  'menu':{pos:'n. 名词',def:'菜单；节目单。餐厅提供的菜品清单，也指电脑软件的功能列表。',example:'Can I see the menu, please?',coll:['main menu 主菜单','menu item 菜单项','set menu 套餐'],syn:'list / selection',ant:'—'},
  'pizza':{pos:'n. 名词',def:'披萨。一种意大利风味的圆形烤饼，上面铺有奶酪、番茄酱和各种配料。',example:'I love cheese pizza.',coll:['cheese pizza 奶酪披萨','pizza slice 披萨片','order pizza 点披萨'],syn:'—',ant:'—'},
  'juice':{pos:'n. 名词',def:'果汁；肉汁。水果或蔬菜压榨出的液体饮料。',example:'I drink orange juice every morning.',coll:['orange juice 橙汁','fruit juice 果汁','juice box 果汁盒'],syn:'—',ant:'—'},
  'please':{pos:'adv./v. 副词/动词',def:'adv. 请；使高兴。v. 使满意；取悦。礼貌用语，用于请求或表示使某人高兴。',example:'Please help me.',coll:['please do 请做','pleased with 满意','if you please 劳驾'],syn:'kindly (副词义)',ant:'displease (动词义)'},
  'thank':{pos:'v./n. 动词/名词',def:'v. 感谢；道谢。n. 感谢（用复数 thanks）。表示对别人的帮助或礼物表示感激。',example:'Thank you for your help.',coll:['thank you 谢谢','thanks to 多亏','thankful 感激的'],syn:'appreciate / grateful',ant:'blame (反义为责备)'},
  'recommend':{pos:'v. 动词',def:'推荐；建议。表示把好的事物介绍给别人，或提出建议。',example:'Can you recommend a good book?',coll:['recommend sth to sb 向某人推荐','highly recommend 强烈推荐','recommend doing 建议做'],syn:'suggest / advise / endorse',ant:'disapprove (反义为不赞成)'},
  'hello':{pos:'int. 感叹词',def:'你好；喂。最常见的问候语，用于打招呼或打电话。',example:'Hello, how are you?',coll:['say hello 打招呼','hello again 再次你好','hello there 嘿'],syn:'hi / hey',ant:'goodbye'},
  'welcome':{pos:'int./adj./v.',def:'int. 欢迎。adj. 受欢迎的。v. 欢迎。表示热情接待或乐于接受。',example:'Welcome to our school!',coll:['you\'re welcome 不客气','welcome back 欢迎回来','welcome to 欢迎到'],syn:'greet (动词义)',ant:'unwelcome (形容词义)'},
  'help':{pos:'v./n. 动词/名词',def:'v. 帮助；援助。n. 帮助。表示为别人做事或给出支持。',example:'Can you help me?',coll:['help sb do 帮某人做','help yourself 请自便','help out 帮忙'],syn:'assist / aid / support',ant:'hinder (反义为妨碍)'},
  'study':{pos:'v./n. 动词/名词',def:'v. 学习；研究。n. 学习；书房。指通过阅读、练习获取知识。',example:'I study English every day.',coll:['study hard 努力学习','study for 为...而学','case study 个案研究'],syn:'learn / research',ant:'play (反义为玩耍)'},
  'read':{pos:'v. 动词',def:'读；阅读；理解。表示看懂文字，或朗读。',example:'I like to read books.',coll:['read a book 读书','read aloud 朗读','read about 读到'],syn:'—',ant:'write (对应为写)'},
  'write':{pos:'v. 动词',def:'写；书写；写信。用笔或键盘记录文字。',example:'I write a letter to my friend.',coll:['write down 写下','write to 写信给','write a letter 写信'],syn:'note / record',ant:'read (对应为读)'},
  'school':{pos:'n. 名词',def:'学校；上学；学派。指教育机构或学习的过程。',example:'I go to school by bike.',coll:['go to school 上学','primary school 小学','after school 放学后'],syn:'academy / college',ant:'—'},
  'teacher':{pos:'n. 名词',def:'老师；教师。在学校教授知识的人员。',example:'My teacher is very kind.',coll:['English teacher 英语老师','teacher\'s desk 讲台','become a teacher 当老师'],syn:'instructor / tutor',ant:'student'},
  'student':{pos:'n. 名词',def:'学生；研究者。在学校学习的人，或某领域的研究者。',example:'He is a good student.',coll:['college student 大学生','student card 学生证','student life 学生生活'],syn:'pupil / learner',ant:'teacher'},
  'friend':{pos:'n. 名词',def:'朋友；友人。彼此友好、互相帮助的人。',example:'She is my best friend.',coll:['best friend 最好朋友','make friends 交朋友','friend of ...的朋友'],syn:'buddy / pal / companion',ant:'enemy'},
  'book':{pos:'n. 名词',def:'书；书籍；本子。装订成册的印刷品，用于阅读或记录。',example:'This book is interesting.',coll:['read a book 读书','picture book 图画书','book store 书店'],syn:'volume / publication',ant:'—'},
  'food':{pos:'n. 名词',def:'食物；食品。人或动物吃的固体食物的总称。',example:'I like Chinese food.',coll:['fast food 快餐','junk food 垃圾食品','food court 美食广场'],syn:'meal / cuisine',ant:'drink (对应为饮品)'},
  'water':{pos:'n./v. 名词/动词',def:'n. 水。v. 浇水。无色无味的液体，是生命必需。',example:'I drink water every day.',coll:['drink water 喝水','water the flowers 浇花','hot water 热水'],syn:'—',ant:'—'},
  'milk':{pos:'n./v. 名词/动词',def:'n. 牛奶；乳汁。v. 挤奶。母哺乳动物分泌的白色液体。',example:'I drink milk every morning.',coll:['drink milk 喝牛奶','milk tea 奶茶','soy milk 豆浆'],syn:'—',ant:'—'},
  'bread':{pos:'n. 名词',def:'面包。用面粉、水、酵母等烤制的主食。',example:'I have bread for breakfast.',coll:['eat bread 吃面包','bread and butter 生计','piece of bread 一块面包'],syn:'—',ant:'—'},
  'rice':{pos:'n. 名词',def:'米；米饭。稻谷去壳后的籽粒，亚洲主粮。',example:'I eat rice every day.',coll:['eat rice 吃米饭','rice cooker 电饭煲','fried rice 炒饭'],syn:'—',ant:'—'},
  'fish':{pos:'n./v. 名词/动词',def:'n. 鱼；鱼肉。v. 钓鱼。生活在水中的脊椎动物。',example:'I like to eat fish.',coll:['catch fish 抓鱼','fish tank 鱼缸','go fishing 去钓鱼'],syn:'—',ant:'—'},
  'meat':{pos:'n. 名词',def:'肉；肉类。动物的可食部分，尤指肌肉。',example:'He doesn\'t eat meat.',coll:['red meat 红肉','meat ball 肉丸','raw meat 生肉'],syn:'flesh',ant:'—'},
  'egg':{pos:'n. 名词',def:'蛋；卵。禽类产的卵，常见食物。',example:'I eat an egg every morning.',coll:['boiled egg 煮蛋','fried egg 煎蛋','egg yolk 蛋黄'],syn:'—',ant:'—'},
  'color':{pos:'n./v. 名词/动词',def:'n. 颜色；色彩。v. 涂色。视觉对光波的感受，或给某物上色。',example:'My favorite color is blue.',coll:['favorite color 最喜欢的颜色','color pencil 彩笔','in color 彩色'],syn:'shade / hue',ant:'—'},
  'red':{pos:'adj./n. 形容词/名词',def:'adj. 红色的。n. 红色。血液或熟苹果的颜色。',example:'The apple is red.',coll:['red apple 红苹果','red light 红灯','in the red 亏损'],syn:'scarlet / crimson',ant:'—'},
  'blue':{pos:'adj./n. 形容词/名词',def:'adj. 蓝色的。n. 蓝色。晴空或大海的颜色，也指忧郁。',example:'The sky is blue today.',coll:['blue sky 蓝天','blue eyes 蓝眼睛','feel blue 感到忧郁'],syn:'azure / navy',ant:'—'},
  'green':{pos:'adj./n. 形容词/名词',def:'adj. 绿色的；环保的。n. 绿色。树叶或草的颜色。',example:'I like green trees.',coll:['green light 绿灯','green tea 绿茶','go green 走环保'],syn:'—',ant:'—'},
  'yellow':{pos:'adj./n. 形容词/名词',def:'adj. 黄色的。n. 黄色。太阳或柠檬的颜色。',example:'The sun is yellow.',coll:['yellow card 黄牌','yellow hair 黄发','light yellow 浅黄'],syn:'gold (类)',ant:'—'},
  'time':{pos:'n./v. 名词/动词',def:'n. 时间；次数；时代。v. 计时。表示时刻或时段。',example:'What time is it?',coll:['what time 几点','on time 准时','have a good time 玩得开心'],syn:'moment / era',ant:'—'},
  'day':{pos:'n. 名词',def:'天；日子；白天。从日出到日落的时段，或指24小时。',example:'Have a nice day!',coll:['every day 每天','good day 好日子','day by day 一天天地'],syn:'date / daylight',ant:'night'},
  'today':{pos:'adv./n. 副词/名词',def:'adv. 今天。n. 今天；当今。指说话的当天或现代。',example:'Today is Monday.',coll:['today morning 今早','today\'s news 今日新闻','up to today 直到现在'],syn:'—',ant:'yesterday'},
  'week':{pos:'n. 名词',def:'周；星期。连续7天的时间单位。',example:'I have English class three times a week.',coll:['last week 上周','next week 下周','once a week 一周一次'],syn:'—',ant:'—'},
  'year':{pos:'n. 名词',def:'年；年龄；年度。地球绕太阳一周的时间，约365天。',example:'I am eight years old.',coll:['new year 新年','last year 去年','year old ...岁'],syn:'—',ant:'—'},
  'old':{pos:'adj. 形容词',def:'老的；旧的；以前的。表示年龄大或存在时间长。',example:'My grandpa is very old.',coll:['how old 几岁','old man 老人','old friend 老朋友'],syn:'aged / elderly',ant:'new / young'},
  'new':{pos:'adj. 形容词',def:'新的；新鲜的；初见的。表示刚出现或刚得到。',example:'I have a new bag.',coll:['new year 新年','new student 新学生','brand new 全新'],syn:'fresh / novel',ant:'old'},
  'number':{pos:'n. 名词',def:'数；数字；号码。表示数量或顺序的符号。',example:'What\'s your phone number?',coll:['phone number 电话号码','number one 第一','a number of 一些'],syn:'figure / amount',ant:'—'},
  'add':{pos:'v. 动词',def:'加；增加；补充。数学运算中表示求和，或日常增加。',example:'Please add 5 and 3.',coll:['add up 加起来','add to 增加','add sth in 算入'],syn:'plus / increase',ant:'subtract'},
  'total':{pos:'n./adj./v.',def:'n. 总数；合计。adj. 总的；完全的。v. 总计达。',example:'The total is 20.',coll:['in total 总共','total amount 总量','total number 总数'],syn:'sum / entire',ant:'part'},
  'half':{pos:'n./adj./adv.',def:'n. 一半。adj. 一半的。adv. 一半地。表示二分之一。',example:'I ate half the cake.',coll:['half an hour 半小时','half of 一半','half past 半点'],syn:'—',ant:'whole'},
  'whole':{pos:'adj./n. 形容词/名词',def:'adj. 整个的；完整的。n. 全部；整体。',example:'I ate the whole apple.',coll:['whole day 整天','on the whole 总体上','whole world 全世界'],syn:'entire / complete',ant:'part / half'},
  'the':{pos:'art. 冠词',def:'这；那（定冠词）。指特定的人或事物。',example:'The sun is bright.',coll:['—'],syn:'—',ant:'a / an'},
  'a':{pos:'art. 冠词',def:'一个（不定冠词）。用于辅音前，泛指一个。',example:'I have a book.',coll:['a lot of 许多','a few 一些'],syn:'one',ant:'the'},
  'an':{pos:'art. 冠词',def:'一个（不定冠词）。用于元音前，泛指一个。',example:'I have an apple.',coll:['an hour 一小时','an egg 一个蛋'],syn:'one',ant:'the'},
  'is':{pos:'v. 动词',def:'是（be动词第三人称单数）。表示身份、状态或特征。',example:'She is a teacher.',coll:['is going to 将要','there is 有'],syn:'—',ant:'—'},
  'are':{pos:'v. 动词',def:'是（be动词复数/第二人称）。',example:'They are friends.',coll:['are you 你是吗','they are 他们是'],syn:'—',ant:'—'},
  'and':{pos:'conj. 连词',def:'和；与；然后。连接两个并列成分。',example:'I have a pen and a book.',coll:['and so on 等等','and then 然后'],syn:'plus / also',ant:'or / but'},
};

// === 短语库 ===
const PHRASE_BANK = {
  '居家':[
    {en:"It's time to get up.",zh:"该起床了。",def:"叫人起床的常用语，语气温柔。也可说 Time to get up 或 Wake up。",vars:['go to bed 上床睡觉','have breakfast 吃早饭','do homework 做作业']},
    {en:"Please pass me the salt.",zh:"请把盐递给我。",def:"餐桌上的礼貌请求句型。pass = 递。可换核心词：pass me the water / the cup。",vars:['pass me the cup 递给我杯子','pass me the water 递给我水','hand me the knife 递给我刀']},
    {en:"Turn off the light, please.",zh:"请关灯。",def:"请求关闭电器的礼貌用语。turn off = 关闭（电器）。反义 turn on。",vars:['turn off the TV 关电视','turn on the light 开灯','turn up the volume 调大音量']},
    {en:"I'll do the dishes.",zh:"我来洗碗。",def:"主动承担家务。do the dishes = 洗碗。do + the + 名词 表示做某项家务。",vars:["I'll do the laundry 我来洗衣服",'I\'ll clean the room 我来打扫房间','I\'ll take out the trash 我去倒垃圾']},
    {en:"Where is my book?",zh:"我的书在哪？",def:"询问物品位置的常用句。where is + 物 = 某物在哪。",vars:['Where is my bag? 我的包在哪？','Where are my keys? 我的钥匙在哪？','Where is the remote? 遥控器在哪？']},
    {en:"Help yourself to some fruit.",zh:"随便吃点水果。",def:"招待客人时请对方自便。help oneself to = 自取（食物）。",vars:['Help yourself to some cake 随便吃蛋糕','Make yourself at home 当作自己家','Feel free to look around 随便看看']},
  ],
  '学校':[
    {en:"Open your books to page 10.",zh:"打开书翻到第10页。",def:"老师课堂指令。open + 物 + to + 页码 = 翻到某页。",vars:['Turn to page 5 翻到第5页','Close your books 合上书','Look at the board 看黑板']},
    {en:"May I go to the restroom?",zh:"我可以去洗手间吗？",def:"课堂上请求离开的礼貌用语。May I + 动词 = 我可以...吗？比 Can I 更礼貌。",vars:['May I come in? 我可以进来吗？','May I borrow a pen? 我可以借支笔吗？','May I ask a question? 我可以问个问题吗？']},
    {en:"Hand in your homework.",zh:"交作业。",def:"老师要求上交作业。hand in = 上交。反义 hand out = 分发。",vars:['Hand in your papers 交试卷','Pass up your homework 把作业传上来','Collect the homework 收作业']},
    {en:"Who knows the answer?",zh:"谁知道答案？",def:"老师提问。也可说 Who can answer this? 或 Any volunteers?", vars:['Who can tell me? 谁能告诉我？','Who wants to try? 谁想试一试？','Raise your hand 举手']},
    {en:"Let's review lesson 5.",zh:"我们复习第五课。",def:"let's = let us，表示'我们一起...'。review = 复习。", vars:["Let's start the class 我们开始上课",'Let\'s move on 我们继续','Let\'s take a break 我们休息一下']},
    {en:"Well done!",zh:"做得好！",def:"表扬学生。也可说 Good job! / Excellent! / Great work!", vars:['Good job! 干得好！','Excellent! 太棒了！','Keep it up! 继续保持！']},
  ],
  '餐厅':[
    {en:"I'd like a pizza, please.",zh:"我想要一份披萨，谢谢。",def:"礼貌点餐句。I'd like = I would like，比 I want 更委婉。后接食物名。",vars:['I\'d like a hamburger 我想要汉堡','I\'d like some juice 我想要果汁','I\'d like the set meal 我想要套餐']},
    {en:"Could you recommend something?",zh:"能推荐一下吗？",def:"请店员推荐的礼貌用语。Could you + 动词 比 Can you 更客气。",vars:['What do you recommend? 你推荐什么？','What\'s your specialty? 你们的招牌是什么？','What\'s popular here? 这里什么受欢迎？']},
    {en:"How much is it?",zh:"多少钱？",def:"询问价格。也可说 How much does it cost? 或 What\'s the price?",vars:['How much are they? 多少钱（复数）？','How much altogether? 一共多少？','How much do I owe you? 我该付多少？']},
    {en:"Can I have the menu?",zh:"可以给我菜单吗？",def:"Can I have + 物 = 我可以要...吗？餐厅常用请求。",vars:['Can I have the bill? 可以给我账单吗？','Can I have some water? 可以给我水吗？','Can I have a fork? 可以给我叉子吗？']},
    {en:"That's all, thank you.",zh:"就这些，谢谢。",def:"点餐结束的礼貌用语。表示不再点了。",vars:["That's it 就这些",'Nothing else 没别的了','I\'m good 我够了']},
    {en:"The bill, please.",zh:"请结账。",def:"用餐后要求结账。也可说 Check, please. 或 Could I have the bill?",vars:['Check, please. 结账。','Could I get the bill? 能给我账单吗？','May I pay now? 现在可以付钱吗？']},
  ],
  '医院':[
    {en:"I don't feel well.",zh:"我觉得不舒服。",def:"表达身体不适的常用语。也可说 I'm not feeling well.",vars:['I feel sick 我觉得恶心','I have a headache 我头疼','I have a fever 我发烧']},
    {en:"Where does it hurt?",zh:"哪里疼？",def:"医生询问疼痛部位。也可说 Where is the pain?",vars:['Does it hurt here? 这里疼吗？','Show me where 指给我看','Since when? 从什么时候开始？']},
    {en:"Take this medicine twice a day.",zh:"这药一天吃两次。",def:"医嘱。twice a day = 一天两次。也可说 three times a day 一天三次。",vars:['Take it after meals 饭后服用','Take one pill each time 每次一片','Don\'t skip 不要漏服']},
    {en:"I'd like to make an appointment.",zh:"我想预约。",def:"预约医生的礼貌用语。make an appointment = 预约。",vars:['I\'d like to see a doctor 我想看医生','Can I see Dr. Lee? 我能找李医生吗？','Is tomorrow available? 明天有空吗？']},
    {en:"Get well soon!",zh:"早日康复！",def:"对病人的祝福语。也可说 Hope you feel better soon.",vars:['Take care 保重','Hope you get well 希望你康复','Rest well 好好休息']},
  ],
  '超市':[
    {en:"How much is this?",zh:"这个多少钱？",def:"询问价格最常用句。",vars:['How much does this cost? 这个多少钱？','What\'s the price? 价格多少？','Is this on sale? 这个在打折吗？']},
    {en:"Do you have any apples?",zh:"你们有苹果吗？",def:"询问是否有货。Do you have + 物 = 你们有...吗？",vars:['Do you have milk? 有牛奶吗？','Do you have this in blue? 这个有蓝色吗？','Do you have smaller ones? 有小一点的吗？']},
    {en:"I'll take this one.",zh:"我要这个。",def:"决定购买。take = 买下/要。",vars:['I\'ll take two 我要两个','I\'ll take the red one 我要红色的','Just this one 就这个']},
    {en:"Can I pay by card?",zh:"可以刷卡吗？",def:"询问付款方式。by card = 用卡。也可说 by cash 用现金。",vars:['Can I pay in cash? 可以付现金吗？','Can I use Alipay? 可以用支付宝吗？','Do you take credit cards? 收信用卡吗？']},
    {en:"Where can I find milk?",zh:"牛奶在哪？",def:"询问商品位置。Where can I find + 物 = 哪里能找到...？",vars:['Where is the bread? 面包在哪？','Which aisle is juice? 果汁在哪个通道？','Where are the eggs? 鸡蛋在哪？']},
  ],
  '动物园':[
    {en:"Look at the lion!",zh:"看那只狮子！",def:"引起注意。Look at + 物 = 看...！",vars:['Look at the monkey! 看那只猴子！','Look at the panda! 看那只熊猫！','Look, an elephant! 看，大象！']},
    {en:"What's your favorite animal?",zh:"你最喜欢什么动物？",def:"询问喜好。favorite = 最喜欢的。",vars:['Do you like tigers? 你喜欢老虎吗？','Which animal do you like? 你喜欢哪个动物？','Are you a cat person? 你是爱猫的人吗？']},
    {en:"The panda is so cute!",zh:"熊猫好可爱！",def:"表达喜爱。cute = 可爱。也可说 adorable。",vars:['The monkey is funny 猴子好笑','The snake is scary 蛇好可怕','The bird is beautiful 鸟好美']},
    {en:"Don't feed the animals.",zh:"不要喂动物。",def:"动物园警示语。feed = 喂。",vars:['Don\'t touch 不要触摸','Don\'t make noise 不要喧哗','Stay back 请退后']},
  ],
  '公园':[
    {en:"Let's go for a walk.",zh:"我们去散步吧。",def:"提议活动。go for a walk = 散步。",vars:['Let\'s play on the swing 我们玩秋千吧','Let\'s feed the ducks 我们喂鸭子吧','Let\'s sit on the grass 我们坐草地上吧']},
    {en:"The flowers are beautiful.",zh:"花儿真美。",def:"赞叹景色。也可说 The flowers look lovely.",vars:['The trees are tall 树很高','The lake is clear 湖水清澈','The birds are singing 鸟儿在唱歌']},
    {en:"Can I play here?",zh:"我可以在这玩吗？",def:"询问许可。Can I + 动词 = 我可以...吗？",vars:['Can I ride my bike? 我能骑车吗？','Can I climb the tree? 我能爬树吗？','Can I feed the birds? 我能喂鸟吗？']},
  ],
  '运动':[
    {en:"Let's play football!",zh:"我们踢足球吧！",def:"提议运动。play + 运动名 = 玩某项运动。",vars:['Let\'s play basketball! 打篮球吧！','Let\'s go swimming! 游泳吧！','Let\'s run a race! 赛跑吧！']},
    {en:"Pass the ball!",zh:"传球！",def:"运动中指令。pass = 传。",vars:['Shoot! 射门！','Catch! 接住！','Run! 跑！']},
    {en:"Well played!",zh:"打得好！",def:"运动后称赞。也可说 Good game! 或 Nice shot!",vars:['Good game! 比赛精彩！','Nice try! 不错的尝试！','Better luck next time! 下次加油！']},
  ],
  '生日':[
    {en:"Happy birthday!",zh:"生日快乐！",def:"生日祝福语。",vars:['Happy birthday to you! 祝你生日快乐！','Many happy returns! 年年有今日！','Best wishes! 最好的祝福！']},
    {en:"Make a wish!",zh:"许个愿！",def:"吹蜡烛前的提示。make a wish = 许愿。",vars:['Blow out the candles! 吹蜡烛！','Open your presents! 拆礼物！','Cut the cake! 切蛋糕！']},
    {en:"This is for you.",zh:"这是给你的。",def:"送礼物时用语。也可说 Here\'s your gift.",vars:['Here\'s your present 这是你的礼物','I got this for you 我为你买的','A little something 小小心意']},
  ],
  '机场':[
    {en:"Where is the check-in counter?",zh:"值机柜台在哪？",def:"机场问路。check-in counter = 值机柜台。",vars:['Where is gate 5? 5号登机口在哪？','Where is baggage claim? 行李提取在哪？','Where is the restroom? 洗手间在哪？']},
    {en:"I'd like to check in.",zh:"我要值机。",def:"办理登机手续。check in = 值机。",vars:['I\'d like to board 我要登机','I\'d like to upgrade 我要升舱','Here\'s my passport 这是我的护照']},
    {en:"How long is the flight?",zh:"飞多久？",def:"询问航程时间。flight = 航班/飞行。",vars:['What time do we land? 几点降落？','Is the flight on time? 航班准点吗？','Any delays? 有延误吗？']},
  ],
  '酒店':[
    {en:"I'd like to check in.",zh:"我要办理入住。",def:"酒店前台用语。check in = 入住，反义 check out = 退房。",vars:['I have a reservation 我有预订','I\'d like to check out 我要退房','Can I extend my stay? 能续住吗？']},
    {en:"What time is breakfast?",zh:"早餐几点？",def:"询问酒店服务时间。",vars:['What time is check-out? 几点退房？','Is there Wi-Fi? 有Wi-Fi吗？','Where is the pool? 游泳池在哪？']},
    {en:"Could I get a wake-up call?",zh:"能叫醒服务吗？",def:"请求酒店服务。wake-up call = 叫醒电话。",vars:['Could I get extra towels? 能多给毛巾吗？','Could I have room service? 能要客房服务吗？','Could you call a taxi? 能叫出租车吗？']},
  ],
  '图书馆':[
    {en:"I'd like to borrow this book.",zh:"我想借这本书。",def:"借书用语。borrow = 借入。反义 return = 还。",vars:['I\'d like to return this book 我想还这本书','I\'d like to renew it 我想续借','When is it due? 什么时候到期？']},
    {en:"Please be quiet.",zh:"请安静。",def:"图书馆提示。quiet = 安静。",vars:['No talking 不要说话','Silence, please 请安静','Turn off your phone 关掉手机']},
    {en:"Where is the children's section?",zh:"儿童区在哪？",def:"询问图书馆区域。section = 区域。",vars:['Where are the novels? 小说在哪？','Where is the study room? 自习室在哪？','Where can I return books? 哪里还书？']},
  ],
  '电影院':[
    {en:"Two tickets, please.",zh:"两张票，谢谢。",def:"买票用语。数字 + tickets + please = 要几张票。",vars:['One ticket, please. 一张票。','Three tickets for the 7 o\'clock show 三张七点的票','Student tickets, please 学生票']},
    {en:"What's showing?",zh:"在放什么电影？",def:"询问上映影片。也可说 What\'s playing?",vars:['What time does it start? 几点开始？','How long is it? 多长？','Is there a subtitle? 有字幕吗？']},
    {en:"Let's get some popcorn.",zh:"我们买爆米花吧。",def:"电影院零食。get = 买/拿。",vars:['Let\'s get drinks 我们买饮料吧','Let\'s find our seats 我们找座位吧','Let\'s sit in the back 我们坐后排吧']},
  ],
  '邮局':[
    {en:"I'd like to send a letter.",zh:"我想寄封信。",def:"邮寄服务。send = 寄。也可说 mail。",vars:['I\'d like to send a parcel 我想寄包裹','I\'d like to buy stamps 我想买邮票','How much to send this? 寄这个多少钱？']},
    {en:"How long does it take?",zh:"要多久？",def:"询问邮寄时间。take = 花费（时间）。",vars:['How much is it? 多少钱？','When will it arrive? 什么时候到？','Can I track it? 能追踪吗？']},
  ],
  '银行':[
    {en:"I'd like to open an account.",zh:"我想开户。",def:"银行服务。open an account = 开账户。",vars:['I\'d like to deposit money 我想存钱','I\'d like to withdraw money 我想取钱','I\'d like to change money 我想换钱']},
    {en:"What's the exchange rate?",zh:"汇率是多少？",def:"询问汇率。exchange rate = 汇率。",vars:['How much is the fee? 手续费多少？','What\'s the interest rate? 利率多少？','What\'s the minimum balance? 最低余额多少？']},
  ],
  '夏令营':[
    {en:"What activities do you have?",zh:"你们有什么活动？",def:"询问活动安排。",vars:['What time is lunch? 午饭几点？','Where do we sleep? 我们睡哪？','What should I bring? 我该带什么？']},
    {en:"I made a new friend!",zh:"我交了个新朋友！",def:"分享经历。make a friend = 交朋友。",vars:['I learned a lot 我学到很多','I had so much fun 我玩得很开心','See you next year 明年见']},
  ],
  '旅行':[
    {en:"Where are we going?",zh:"我们去哪？",def:"询问目的地。",vars:['When do we leave? 我们什么时候走？','How do we get there? 怎么去？','What should I pack? 我该带什么？']},
    {en:"Take a picture!",zh:"拍张照！",def:"拍照请求。take a picture = 拍照。也可说 take a photo。",vars:['Let\'s take a selfie 我们自拍吧','Smile! 笑一笑！','Say cheese! 说cheese！']},
  ],
  '天气':[
    {en:"It's sunny today.",zh:"今天是晴天。",def:"描述天气。It\'s + 形容词 + today = 今天天气...。",vars:['It\'s rainy 下雨','It\'s cloudy 多云','It\'s windy 有风']},
    {en:"It's going to rain.",zh:"要下雨了。",def:"预报天气。be going to + 动词 = 将要...。",vars:['It\'s getting cold 变冷了','It\'s warming up 暖起来了','It might snow 可能下雪']},
    {en:"Bring an umbrella.",zh:"带把伞。",def:"提醒带物品。bring = 带。",vars:['Wear a jacket 穿外套','Put on a hat 戴帽子','Wear sunscreen 涂防晒']},
  ],
  '求助':[
    {en:"Can you help me?",zh:"你能帮我吗？",def:"请求帮助最常用句。",vars:['Could you help me? 您能帮我吗？','I need your help 我需要你的帮助','Help! 救命！']},
    {en:"I'm lost.",zh:"我迷路了。",def:"迷路求助。lost = 迷路的。",vars:['I can\'t find my way 我找不到路','Where am I? 我在哪？','How do I get to the station? 怎么去车站？']},
    {en:"Could you repeat that?",zh:"能再说一遍吗？",def:"没听清时的礼貌请求。repeat = 重复。",vars:['Pardon? 什么？','Sorry? 抱歉没听清？','Could you say it again? 能再说一遍吗？']},
  ],
};

// === 数学CPA数据 ===
var MATH_BY_GRADE = {
  // ========== 三年级上册（3a）万以内加减法 · 时分秒 · 测量 · 长方形正方形 · 分数初步认识 ==========
  '3a':{
    title:'三年级上册·万以内加减法与时分秒',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:72,
    units:[
      {name:'万以内的加减法',level:'current',children:[{name:'不进位加法',level:'done'},{name:'进位加法',level:'done'},{name:'退位减法',level:'current'},{name:'加减法的验算',level:'locked'}]},
      {name:'多位数乘一位数',level:'locked',children:[{name:'口算乘法',level:'done'},{name:'笔算乘法',level:'locked'},{name:'因数中间或末尾有0',level:'locked'}]},
      {name:'时、分、秒',level:'locked',children:[{name:'秒的认识',level:'locked'},{name:'经过时间的计算',level:'locked'}]},
      {name:'测量',level:'locked',children:[{name:'毫米与分米',level:'locked'},{name:'千米与吨',level:'locked'}]},
      {name:'长方形和正方形',level:'locked',children:[{name:'四边形的认识',level:'locked'},{name:'周长的计算',level:'locked'}]},
      {name:'分数初步认识',level:'locked',children:[{name:'几分之一',level:'locked'},{name:'几分之几',level:'locked'}]},
    ],
    problems:[
      {scene:'学校图书馆原有故事书386本，今天又新买进247本。小明主动帮忙整理书架，他好奇地想数一数现在书架上一共有多少本故事书。',question:'图书馆现在一共有多少本故事书？',formula:'386 + 247 = ?',answer:633,choices:[533,633,733,623],visualType:'barModel',visualData:{total:633,parts:[{label:'原有',val:386,color:'#00A896'},{label:'新买',val:247,color:'#F5B800'}]},knowledge:'万以内进位加法',difficulty:2,hint:'相同数位对齐满十进一',variants:[{question:'原有418本又买265本共多少？',formula:'418+265=?',answer:683,hint:'连续进位要细心'},{question:'原有295本又买156本共多少？',formula:'295+156=?',answer:451,hint:'十位满十向百位进'}]},
      {scene:'小明攒了500元压岁钱，开学时买了一个新书包用去168元。他想算算自己还剩下多少钱可以存进储蓄罐。',question:'小明还剩下多少元？',formula:'500 - 168 = ?',answer:332,choices:[432,332,368,232],visualType:'numberBond',visualData:{total:500,parts:[{val:332,color:'#00A896'},{val:168,color:'#FB923C'}]},knowledge:'万以内退位减法',difficulty:2,hint:'0不够减向前一位借',variants:[{question:'700-245=?',formula:'700-245=?',answer:455,hint:'连续退位要细心'},{question:'600-187=?',formula:'600-187=?',answer:413,hint:'0不够减向前借'}]},
      {scene:'学校体育场看台每一排有13个座位，老师让小红数一数12排座位一共能坐多少人，好安排同学们就座。',question:'看台一共能坐多少人？',formula:'12 × 13 = ?',answer:156,choices:[136,156,176,146],visualType:'areaModel',visualData:{a:12,b:13,parts:[100,30,20,6],result:156},knowledge:'两位数乘两位数',difficulty:3,hint:'拆成十位和个位分别相乘',variants:[{question:'14×13=?',formula:'14×13=?',answer:182,hint:'14的10倍加3倍'},{question:'11×14=?',formula:'11×14=?',answer:154,hint:'11乘十几等于本身加十倍'}]},
      {scene:'周末全家坐火车去外婆家，火车9时从车站出发，路上行驶了3个小时。妈妈问小明几点能到外婆家所在的车站。',question:'火车几点到达？',formula:'9 + 3 = ? (时)',answer:12,choices:[11,12,13,14],visualType:'numberLine',visualData:{start:8,end:13,points:[{pos:9,label:'出发',color:'#00A896'},{pos:12,label:'到达',color:'#F5B800'}],highlight:[9,12]},knowledge:'经过时间的计算',difficulty:2,hint:'结束时间=开始时间+经过时间',variants:[{question:'9时出发行驶4时几点到？',formula:'9+4=?',answer:13,hint:'24时制计算更清晰'},{question:'7时出发行驶5时几点到？',formula:'7+5=?',answer:12,hint:'注意中午12点'}]},
      {scene:'社区要在花园里修一个长方形花坛，长8米、宽5米。工人师傅要在花坛四周围上一圈栅栏，需要先算出花坛的周长。',question:'花坛的周长是多少米？',formula:'(8 + 5) × 2 = ?',answer:26,choices:[13,26,40,21],visualType:'geometry',visualData:{shape:'rectangle',params:{length:8,width:5}},knowledge:'长方形周长',difficulty:2,hint:'周长=(长+宽)×2',variants:[{question:'长6宽4周长？',formula:'(6+4)×2=?',answer:20,hint:'长加宽再乘2'},{question:'长10宽7周长？',formula:'(10+7)×2=?',answer:34,hint:'先算长加宽'}]},
      {scene:'妈妈把一个圆形大蛋糕平均切成8块，分给小朋友们吃。小明吃了其中3块，他想知道自己吃了这块蛋糕的几分之几。',question:'小明吃了这块蛋糕的几分之几？（填分子）',formula:'3 / 8',answer:3,choices:[3,5,8,6],visualType:'fractionStrip',visualData:{num:3,total:8,color:'#00A896'},knowledge:'分数初步认识',difficulty:2,hint:'吃了3块就是八分之三',variants:[{question:'蛋糕分9份吃5份吃了的占几分之几（填分子）？',formula:'5/9',answer:5,hint:'吃了5份就是5/9'},{question:'分6份吃3份是几分之几（填分子）？',formula:'3/6',answer:3,hint:'3/6等于1/2'}]},
    ],
  },
  // ========== 三年级下册（3b）除法 · 两位数乘两位数 · 小数初步 · 面积 · 年月日 · 搭配 ==========
  '3b':{
    title:'三年级下册·除法与两位数乘法',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:65,
    units:[
      {name:'除数是一位数的除法',level:'current',children:[{name:'口算除法',level:'done'},{name:'笔算除法',level:'current'},{name:'0的除法',level:'locked'}]},
      {name:'两位数乘两位数',level:'locked',children:[{name:'口算乘法',level:'done'},{name:'笔算乘法',level:'locked'},{name:'进位乘法',level:'locked'}]},
      {name:'小数的初步认识',level:'locked',children:[{name:'认识小数',level:'locked'},{name:'简单的小数加减法',level:'locked'}]},
      {name:'面积',level:'locked',children:[{name:'面积和面积单位',level:'locked'},{name:'长方形正方形面积',level:'locked'}]},
      {name:'年、月、日',level:'locked',children:[{name:'认识年月日',level:'locked'},{name:'24时计时法',level:'locked'}]},
      {name:'搭配',level:'locked',children:[{name:'简单的排列',level:'locked'},{name:'简单的组合',level:'locked'}]},
    ],
    problems:[
      {scene:'妈妈买了96颗新鲜的草莓，要平均装进4个盒子里，准备送给邻居品尝。小红帮忙分装，她想知道每个盒子要装几颗。',question:'每个盒子装几颗草莓？',formula:'96 ÷ 4 = ?',answer:24,choices:[22,24,25,23],visualType:'barModel',visualData:{total:96,parts:[{label:'盒1',val:24,color:'#00A896'},{label:'盒2',val:24,color:'#F5B800'},{label:'盒3',val:24,color:'#FB923C'},{label:'盒4',val:24,color:'#E8A0BF'}]},knowledge:'除数是一位数除法',difficulty:2,hint:'90÷4加6÷4',variants:[{question:'84÷4=?',formula:'84÷4=?',answer:21,hint:'80÷4加4÷4'},{question:'108÷4=?',formula:'108÷4=?',answer:27,hint:'100÷4加8÷4'}]},
      {scene:'学校报告厅有14排座位，每排12个。学校开家长会要安排家长就座，老师让小刚算一算一共能坐多少人。',question:'报告厅一共能坐多少人？',formula:'14 × 12 = ?',answer:168,choices:[148,168,188,158],visualType:'areaModel',visualData:{a:14,b:12,parts:[100,20,40,8],result:168},knowledge:'两位数乘两位数',difficulty:3,hint:'14的10倍加14的2倍',variants:[{question:'13×12=?',formula:'13×12=?',answer:156,hint:'13的10倍加2倍'},{question:'15×11=?',formula:'15×11=?',answer:165,hint:'15×10加15'}]},
      {scene:'文具店里一支铅笔2.5元，一块橡皮1.3元。小亮想买这两样文具，他从存钱罐取出零花钱去结账。',question:'买铅笔和橡皮一共多少元？',formula:'2.5 + 1.3 = ?',answer:3.8,choices:[3.8,3.7,3.5,4.8],visualType:'numberLine',visualData:{start:0,end:5,points:[{pos:2.5,label:'铅笔',color:'#00A896'},{pos:3.8,label:'合计',color:'#F5B800'}],highlight:[0,3.8]},knowledge:'小数加减法',difficulty:2,hint:'小数点对齐再相加',variants:[{question:'3.6+2.4=?',formula:'3.6+2.4=?',answer:6,hint:'满十进一'},{question:'1.8+0.7=?',formula:'1.8+0.7=?',answer:2.5,hint:'小数点对齐'}]},
      {scene:'爷爷在院子里开垦了一块长方形菜地，长6米、宽4米。他要在菜地里种上青菜，想先算算这块地有多大。',question:'菜地的面积是多少平方米？',formula:'6 × 4 = ?',answer:24,choices:[20,24,28,10],visualType:'geometry',visualData:{shape:'rectangle',params:{length:6,width:4}},knowledge:'长方形面积',difficulty:2,hint:'面积=长×宽',variants:[{question:'长8宽3面积？',formula:'8×3=?',answer:24,hint:'长乘宽'},{question:'长9宽2面积？',formula:'9×2=?',answer:18,hint:'长乘宽'}]},
      {scene:'一年有12个月，分成了春、夏、秋、冬四个季节。老师让同学们算一算每个季节大约有几个月。',question:'每个季节大约有几个月？',formula:'12 ÷ 4 = ?',answer:3,choices:[3,4,12,6],visualType:'numberBond',visualData:{total:12,parts:[{val:3,color:'#00A896'},{val:3,color:'#F5B800'},{val:3,color:'#FB923C'},{val:3,color:'#E8A0BF'}]},knowledge:'年月日与除法',difficulty:2,hint:'12个月平均分4份',variants:[{question:'一年有几个季度？',formula:'12÷3=?',answer:4,hint:'春夏秋冬四季'},{question:'一个季度几个月？',formula:'12÷4=?',answer:3,hint:'12除4'}]},
      {scene:'小红有2件不同颜色的上衣和3条不同款式的裤子，明天要去春游她想搭配出一套漂亮的衣服。',question:'一共有多少种不同的穿法？',formula:'2 × 3 = ?',answer:6,choices:[5,6,8,3],visualType:'barModel',visualData:{total:6,parts:[{label:'上衣1配3裤',val:3,color:'#00A896'},{label:'上衣2配3裤',val:3,color:'#F5B800'}]},knowledge:'搭配问题',difficulty:2,hint:'每件上衣配3条裤子',variants:[{question:'3上衣4裤子几种穿法？',formula:'3×4=?',answer:12,hint:'用乘法'},{question:'2上衣5裤子几种穿法？',formula:'2×5=?',answer:10,hint:'上衣数乘裤子数'}]},
    ],
  },
  // ========== 四年级上册（4a）大数 · 公顷平方千米 · 角的度量 · 三位数乘两位数 · 平行四边形梯形 · 除数是两位数 · 条形统计图 · 优化 ==========
  '4a':{
    title:'四年级上册·大数认识与三位数乘两位数',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:55,
    units:[
      {name:'大数的认识',level:'done',children:[{name:'亿以内数的认识',level:'done'},{name:'数的读写',level:'done'},{name:'数的比较',level:'done'},{name:'大数的改写',level:'current'}]},
      {name:'三位数乘两位数',level:'current',children:[{name:'口算乘法',level:'done'},{name:'笔算乘法',level:'current'},{name:'因数末尾有0',level:'locked'}]},
      {name:'除数是两位数的除法',level:'locked',children:[{name:'口算除法',level:'locked'},{name:'笔算除法',level:'locked'},{name:'调商',level:'locked'}]},
      {name:'角的度量',level:'locked',children:[{name:'直线射线线段',level:'locked'},{name:'角的分类',level:'locked'},{name:'画角',level:'locked'}]},
      {name:'平行四边形和梯形',level:'locked',children:[{name:'平行四边形特征',level:'locked'},{name:'梯形特征',level:'locked'},{name:'高的画法',level:'locked'}]},
      {name:'条形统计图与优化',level:'locked',children:[{name:'条形统计图',level:'locked'},{name:'烙饼问题',level:'locked'},{name:'田忌赛马',level:'locked'}]},
    ],
    problems:[
      {scene:'老师在课堂上讲大数：有一个数由3个百万和5个万组成。同学们在数位表上摆一摆，想弄清楚这个数到底是多少。',question:'这个数是多少？',formula:'3000000 + 50000 = ?',answer:3050000,choices:[305000,3500000,3050000,3005000],visualType:'numberBond',visualData:{total:3050000,parts:[{val:3000000,color:'#00A896'},{val:50000,color:'#F5B800'}]},knowledge:'大数的认识',difficulty:3,hint:'百万位是3万位是5',variants:[{question:'3个百万和5个万组成？',formula:'300万+5万',answer:3050000,hint:'百万位3万位5'},{question:'2个千万和8个千组成？',formula:'2千万+8千',answer:20008000,hint:'千万位2千位8'}]},
      {scene:'学校要为同学们统一订购校服，每套校服45元，全校共23个班的同学每人都要买一套，每班刚好一套样衣。老师要算一共花多少。',question:'共要花多少元？',formula:'23 × 45 = ?',answer:1035,choices:[1035,1015,1135,1030],visualType:'areaModel',visualData:{a:23,b:45,parts:[800,100,120,15],result:1035},knowledge:'两位数乘两位数',difficulty:3,hint:'拆成20×45加3×45',variants:[{question:'23×35=?',formula:'23×35=?',answer:805,hint:'23×30加23×5'},{question:'34×25=?',formula:'34×25=?',answer:850,hint:'34×20加34×5'}]},
      {scene:'仓库原来有大米420袋，今天又运来300袋补充库存。管理员要统计仓库现在一共有多少袋大米。',question:'仓库现在一共有多少袋大米？',formula:'420 + 300 = ?',answer:720,choices:[620,720,820,700],visualType:'barModel',visualData:{total:720,parts:[{label:'原有',val:420,color:'#00A896'},{label:'运来',val:300,color:'#F5B800'}]},knowledge:'大数加减法',difficulty:2,hint:'相同数位对齐相加',variants:[{question:'560+240=?',formula:'560+240=?',answer:800,hint:'凑整百'},{question:'380+420=?',formula:'380+420=?',answer:800,hint:'380和420凑800'}]},
      {scene:'数学课上老师讲到角的认识：把一根细棒绕端点旋转，转出不同的角。同学们要记住几种特殊角的度数。',question:'直角是多少度？',formula:'直角 = ?',answer:90,choices:[80,90,180,60],visualType:'numberLine',visualData:{start:0,end:360,points:[{pos:90,label:'直角',color:'#00A896'},{pos:180,label:'平角',color:'#F5B800'},{pos:360,label:'周角',color:'#FB923C'}],highlight:[0,360]},knowledge:'角的度量',difficulty:2,hint:'直角是90度',variants:[{question:'平角多少度？',formula:'平角=?',answer:180,hint:'两个直角'},{question:'周角多少度？',formula:'周角=?',answer:360,hint:'四个直角'}]},
      {scene:'学校有一块平行四边形花圃，底是8米，高是5米。园丁叔叔想种上菊花，要先估算这块花圃有多大。',question:'平行四边形花圃的面积是多少平方米？',formula:'8 × 5 = ?',answer:40,choices:[30,40,45,13],visualType:'geometry',visualData:{shape:'parallelogram',params:{base:8,height:5,side:7}},knowledge:'平行四边形面积',difficulty:3,hint:'面积=底×高',variants:[{question:'底10高6面积？',formula:'10×6=?',answer:60,hint:'底乘高'},{question:'底7高4面积？',formula:'7×4=?',answer:28,hint:'底乘高'}]},
      {scene:'学校运动场有一块梯形沙坑，上底4米、下底8米、高5米。体育老师要在沙坑铺上新沙，先算它的面积。',question:'梯形沙坑的面积是多少平方米？',formula:'(4 + 8) × 5 ÷ 2 = ?',answer:30,choices:[20,30,40,24],visualType:'geometry',visualData:{shape:'trapezoid',params:{top:4,bottom:8,height:5}},knowledge:'梯形面积',difficulty:3,hint:'面积=(上底+下底)×高÷2',variants:[{question:'上3下7高4面积？',formula:'(3+7)×4÷2=?',answer:20,hint:'上底加下底乘高除2'},{question:'上5下9高6面积？',formula:'(5+9)×6÷2=?',answer:42,hint:'先算上底加下底'}]},
    ],
  },
  // ========== 四年级下册（4b）四则运算 · 运算定律 · 小数意义性质 · 三角形 · 小数加减 · 图形运动 · 平均数 · 鸡兔同笼 ==========
  '4b':{
    title:'四年级下册·运算定律与小数加减法',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:48,
    units:[
      {name:'四则运算与运算定律',level:'current',children:[{name:'加减法的关系',level:'done'},{name:'乘法分配律',level:'current'},{name:'简便运算',level:'locked'}]},
      {name:'小数的意义和性质',level:'locked',children:[{name:'小数的意义',level:'locked'},{name:'小数的性质',level:'locked'},{name:'小数点移动',level:'locked'}]},
      {name:'三角形',level:'locked',children:[{name:'三角形的特性',level:'locked'},{name:'三角形分类',level:'locked'},{name:'三角形内角和',level:'locked'}]},
      {name:'小数加减法',level:'locked',children:[{name:'小数加法',level:'locked'},{name:'小数减法',level:'locked'},{name:'加减混合运算',level:'locked'}]},
      {name:'平均数与条形统计图',level:'locked',children:[{name:'平均数的意义',level:'locked'},{name:'求平均数',level:'locked'},{name:'复式条形统计图',level:'locked'}]},
      {name:'鸡兔同笼',level:'locked',children:[{name:'列表法',level:'locked'},{name:'假设法',level:'locked'}]},
    ],
    problems:[
      {scene:'老师带同学们用简便方法算乘法：25×37×4这道题，聪明的小美发现先算哪两个数会更简便。',question:'25×37×4简便计算的结果是多少？',formula:'25 × 4 × 37 = ?',answer:3700,choices:[370,3700,37000,3704],visualType:'barModel',visualData:{total:100,parts:[{label:'25×1',val:25,color:'#00A896'},{label:'25×2',val:25,color:'#F5B800'},{label:'25×3',val:25,color:'#FB923C'},{label:'25×4',val:25,color:'#E8A0BF'}]},knowledge:'乘法运算定律',difficulty:3,hint:'先算25×4=100',variants:[{question:'25×8=?',formula:'25×8=?',answer:200,hint:'25×4=100再乘2'},{question:'25×12=?',formula:'25×12=?',answer:300,hint:'25×4×3'}]},
      {scene:'小红用一根1米长的彩带做手工，她把彩带平均剪成10段，取其中3段来折花。她想知道这3段是整根彩带的多少。',question:'3段是整根彩带的几分之几？也就是零点几？',formula:'3 / 10 = 0.?',answer:3,choices:[3,10,7,13],visualType:'fractionStrip',visualData:{num:3,total:10,color:'#00A896'},knowledge:'小数的意义',difficulty:2,hint:'3/10就是0.3',variants:[{question:'0.7是几分之几（填分子）？',formula:'7/10',answer:7,hint:'7/10'},{question:'0.5是几分之几（填分子）？',formula:'5/10',answer:5,hint:'5/10等于1/2'}]},
      {scene:'美术课上老师让同学们画一个三角形，底是12厘米，高是8厘米。小明想知道这个三角形的面积有多大。',question:'三角形的面积是多少平方厘米？',formula:'12 × 8 ÷ 2 = ?',answer:48,choices:[40,48,96,42],visualType:'geometry',visualData:{shape:'triangle',params:{base:12,height:8}},knowledge:'三角形面积',difficulty:3,hint:'面积=底×高÷2',variants:[{question:'底10高6面积？',formula:'10×6÷2=?',answer:30,hint:'底乘高除2'},{question:'底14高5面积？',formula:'14×5÷2=?',answer:35,hint:'先乘再除2'}]},
      {scene:'小亮的身高是1.45米，爸爸比他高0.35米。爸爸常说"你要多吃蔬菜才能长高"，小亮好奇爸爸有多高。',question:'爸爸的身高是多少米？',formula:'1.45 + 0.35 = ?',answer:1.8,choices:[1.8,1.4,1.5,1.75],visualType:'numberLine',visualData:{start:1,end:2,points:[{pos:1.45,label:'小亮',color:'#00A896'},{pos:1.8,label:'爸爸',color:'#F5B800'}],highlight:[1.45,1.8]},knowledge:'小数加减法',difficulty:2,hint:'小数点对齐再相加',variants:[{question:'3.6+2.4=?',formula:'3.6+2.4=?',answer:6,hint:'满十进一'},{question:'1.8+0.7=?',formula:'1.8+0.7=?',answer:2.5,hint:'小数点对齐'}]},
      {scene:'小刚这学期参加了5次数学小测，成绩分别是28、30、32、29、31分。妈妈问他这5次的平均分是多少。',question:'小刚5次小测的平均分是多少？',formula:'(28+30+32+29+31) ÷ 5 = ?',answer:30,choices:[25,30,35,150],visualType:'numberBond',visualData:{total:150,parts:[{val:30,color:'#00A896'},{val:30,color:'#F5B800'},{val:30,color:'#FB923C'},{val:30,color:'#E8A0BF'},{val:30,color:'#1E3A5F'}]},knowledge:'平均数',difficulty:3,hint:'总和除以份数',variants:[{question:'和120分4份平均？',formula:'120÷4=?',answer:30,hint:'总和除份数'},{question:'和240分6份平均？',formula:'240÷6=?',answer:40,hint:'总和除份数'}]},
      {scene:'农场里有鸡和兔子关在一起，数一数头共有10个，脚共有28只。饲养员想算出鸡和兔子各有多少只。',question:'兔子有多少只？',formula:'(28 - 10×2) ÷ (4 - 2) = ?',answer:4,choices:[4,6,8,2],visualType:'barModel',visualData:{total:28,parts:[{label:'假设全鸡',val:20,color:'#00A896'},{label:'换兔补脚',val:8,color:'#F5B800'}]},knowledge:'鸡兔同笼',difficulty:4,hint:'假设全是鸡再调整',variants:[{question:'8头26脚兔几只？',formula:'(26-16)÷2=?',answer:5,hint:'假设全鸡再调脚'},{question:'10头34脚兔几只？',formula:'(34-20)÷2=?',answer:7,hint:'兔=(脚-2×头)÷2'}]},
    ],
  },
  // ========== 五年级上册（5a）小数乘法 · 位置 · 小数除法 · 可能性 · 简易方程 · 多边形面积 · 植树问题 ==========
  '5a':{
    title:'五年级上册·小数乘除法与多边形面积',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:42,
    units:[
      {name:'小数乘法',level:'current',children:[{name:'小数乘整数',level:'done'},{name:'小数乘小数',level:'current'},{name:'积的近似数',level:'locked'}]},
      {name:'小数除法',level:'locked',children:[{name:'小数除以整数',level:'locked'},{name:'一个数除以小数',level:'locked'},{name:'循环小数',level:'locked'}]},
      {name:'简易方程',level:'locked',children:[{name:'用字母表示数',level:'locked'},{name:'解方程',level:'locked'},{name:'实际问题与方程',level:'locked'}]},
      {name:'多边形面积',level:'locked',children:[{name:'平行四边形面积',level:'locked'},{name:'三角形面积',level:'locked'},{name:'梯形面积',level:'locked'}]},
      {name:'可能性',level:'locked',children:[{name:'可能性的大小',level:'locked'},{name:'游戏公平性',level:'locked'}]},
      {name:'植树问题',level:'locked',children:[{name:'两端都栽',level:'locked'},{name:'两端都不栽',level:'locked'},{name:'封闭图形植树',level:'locked'}]},
    ],
    problems:[
      {scene:'超市里一瓶牛奶售价2.5元，小明帮家里买4瓶。他从钱包里拿出零钱，想先算算一共要付多少钱。',question:'买4瓶牛奶共多少元？',formula:'2.5 × 4 = ?',answer:10,choices:[8,10,12,6.5],visualType:'barModel',visualData:{total:10,parts:[{label:'瓶1',val:2.5,color:'#00A896'},{label:'瓶2',val:2.5,color:'#F5B800'},{label:'瓶3',val:2.5,color:'#FB923C'},{label:'瓶4',val:2.5,color:'#E8A0BF'}]},knowledge:'小数乘整数',difficulty:2,hint:'25×4再点一位小数',variants:[{question:'1.5×6=?',formula:'1.5×6=?',answer:9,hint:'15×6再点小数点'},{question:'0.8×5=?',formula:'0.8×5=?',answer:4,hint:'8×5=40点一位'}]},
      {scene:'一根绳子长7.5米，小红要把它平均剪成3段，用来扎3束花。她拿出剪刀前先算每段应该剪多长。',question:'每段绳子长多少米？',formula:'7.5 ÷ 3 = ?',answer:2.5,choices:[2.5,3.5,2.25,22.5],visualType:'numberLine',visualData:{start:0,end:7.5,points:[{pos:2.5,label:'第1段',color:'#00A896'},{pos:5,label:'第2段',color:'#F5B800'},{pos:7.5,label:'第3段',color:'#FB923C'}],highlight:[0,7.5]},knowledge:'小数除以整数',difficulty:2,hint:'75÷3再点一位小数',variants:[{question:'9.6÷4=?',formula:'9.6÷4=?',answer:2.4,hint:'96÷4=24点一位'},{question:'6.4÷8=?',formula:'6.4÷8=?',answer:0.8,hint:'64÷8=8点一位'}]},
      {scene:'班级图书角原来有一些故事书，老师又拿来15本后正好是40本。小芳想算一算原来有多少本故事书。',question:'图书角原来有多少本故事书？（设为x，x+15=40）',formula:'x + 15 = 40',answer:25,choices:[25,55,15,40],visualType:'numberBond',visualData:{total:40,parts:[{val:25,color:'#00A896'},{val:15,color:'#F5B800'}]},knowledge:'简易方程',difficulty:3,hint:'两边同时减15',variants:[{question:'x+25=60，x=?',formula:'x+25=60',answer:35,hint:'两边减25'},{question:'x-18=30，x=?',formula:'x-18=30',answer:48,hint:'两边加18'}]},
      {scene:'学校有一块三角形花圃，底是10米，高是6米。园丁要在花圃里种月季花，需要先算花圃的面积。',question:'三角形花圃的面积是多少平方米？',formula:'10 × 6 ÷ 2 = ?',answer:30,choices:[30,60,16,18],visualType:'geometry',visualData:{shape:'triangle',params:{base:10,height:6}},knowledge:'三角形面积',difficulty:3,hint:'面积=底×高÷2',variants:[{question:'底8高9面积？',formula:'8×9÷2=?',answer:36,hint:'底乘高除2'},{question:'底12高7面积？',formula:'12×7÷2=?',answer:42,hint:'先乘再除2'}]},
      {scene:'社区有一块平行四边形草坪，底是8米，高是5米。物业要在草坪周围修小路，先要算草坪的面积。',question:'平行四边形草坪的面积是多少平方米？',formula:'8 × 5 = ?',answer:40,choices:[40,30,45,13],visualType:'geometry',visualData:{shape:'parallelogram',params:{base:8,height:5,side:7}},knowledge:'平行四边形面积',difficulty:2,hint:'面积=底×高',variants:[{question:'底12高4面积？',formula:'12×4=?',answer:48,hint:'底乘高'},{question:'底9高6面积？',formula:'9×6=?',answer:54,hint:'底乘高'}]},
      {scene:'园林工人要在一条长20米的小路一侧植树，每隔5米栽一棵，两端都要栽树。小明帮工人算要准备多少棵树苗。',question:'一共要栽多少棵树？',formula:'20 ÷ 5 + 1 = ?',answer:5,choices:[4,5,6,3],visualType:'numberLine',visualData:{start:0,end:20,points:[{pos:0,label:'第1棵',color:'#00A896'},{pos:5,label:'第2棵',color:'#F5B800'},{pos:10,label:'第3棵',color:'#FB923C'},{pos:15,label:'第4棵',color:'#E8A0BF'},{pos:20,label:'第5棵',color:'#1E3A5F'}],highlight:[0,20]},knowledge:'植树问题',difficulty:3,hint:'两端都栽：棵数=段数+1',variants:[{question:'30米路每5米栽树两端栽几棵？',formula:'30÷5+1=?',answer:7,hint:'两端都栽加1'},{question:'40米路每8米栽树两端栽几棵？',formula:'40÷8+1=?',answer:6,hint:'两端都栽加1'}]},
    ],
  },
  // ========== 五年级下册（5b）观察物体 · 因数倍数 · 长方体正方体 · 分数意义性质 · 图形运动 · 分数加减 · 折线统计图 · 找次品 ==========
  '5b':{
    title:'五年级下册·因数倍数与分数加减法',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:38,
    units:[
      {name:'因数与倍数',level:'current',children:[{name:'因数和倍数',level:'done'},{name:'2、5、3的倍数特征',level:'current'},{name:'质数和合数',level:'locked'}]},
      {name:'长方体和正方体',level:'locked',children:[{name:'长方体认识',level:'locked'},{name:'表面积',level:'locked'},{name:'体积',level:'locked'}]},
      {name:'分数的意义和性质',level:'locked',children:[{name:'分数的意义',level:'locked'},{name:'分数与除法',level:'locked'},{name:'约分与通分',level:'locked'}]},
      {name:'分数加减法',level:'locked',children:[{name:'同分母分数加减',level:'locked'},{name:'异分母分数加减',level:'locked'},{name:'分数加减混合',level:'locked'}]},
      {name:'折线统计图',level:'locked',children:[{name:'单式折线统计图',level:'locked'},{name:'复式折线统计图',level:'locked'}]},
      {name:'找次品',level:'locked',children:[{name:'天平找次品',level:'locked'},{name:'最优策略',level:'locked'}]},
    ],
    problems:[
      {scene:'老师在黑板上写了一个数12，让同学们找出它所有的因数。小红把因数都写在卡片上，又好奇这些因数加起来和是多少。',question:'12的所有因数的和是多少？',formula:'1+2+3+4+6+12 = ?',answer:28,choices:[28,18,12,24],visualType:'numberBond',visualData:{total:28,parts:[{val:12,color:'#00A896'},{val:6,color:'#F5B800'},{val:4,color:'#FB923C'},{val:3,color:'#E8A0BF'},{val:2,color:'#1E3A5F'},{val:1,color:'#00A896'}]},knowledge:'因数与倍数',difficulty:3,hint:'12的因数有1,2,3,4,6,12',variants:[{question:'6的因数和？',formula:'1+2+3+6=?',answer:12,hint:'1+2+3+6'},{question:'8的因数和？',formula:'1+2+4+8=?',answer:15,hint:'8的因数1,2,4,8'}]},
      {scene:'爸爸买了一个长方体鱼缸，长5分米、宽4分米、高3分米。他想往鱼缸里放满水养金鱼，要算算能装多少升水。',question:'鱼缸能装多少升水？',formula:'5 × 4 × 3 = ?',answer:60,choices:[60,12,20,40],visualType:'barModel',visualData:{total:60,parts:[{label:'第1层(5×4)',val:20,color:'#00A896'},{label:'第2层',val:20,color:'#F5B800'},{label:'第3层',val:20,color:'#FB923C'}]},knowledge:'长方体体积',difficulty:3,hint:'体积=长×宽×高',variants:[{question:'长4宽3高2体积？',formula:'4×3×2=?',answer:24,hint:'长乘宽乘高'},{question:'长6宽5高2体积？',formula:'6×5×2=?',answer:60,hint:'长乘宽乘高'}]},
      {scene:'妈妈把一根彩带平均分成4份，取其中3份用来包装礼物。小芳想知道这3份是整根彩带的几分之几。',question:'3份是整根彩带的几分之几？（填分子）',formula:'3 / 4',answer:3,choices:[3,4,1,2],visualType:'fractionStrip',visualData:{num:3,total:4,color:'#00A896'},knowledge:'分数的意义',difficulty:2,hint:'取3份就是四分之三',variants:[{question:'分5份取2份是几分之几（填分子）？',formula:'2/5',answer:2,hint:'2/5'},{question:'分6份取5份是几分之几（填分子）？',formula:'5/6',answer:5,hint:'5/6'}]},
      {scene:'小红做手工，第一次用了1/3米的丝带，第二次用了1/6米的丝带。她想知道两次一共用了多少米丝带。',question:'两次一共用了多少米丝带？（结果填分子，化为最简分数）',formula:'1/3 + 1/6 = ?',answer:3,choices:[1,2,3,6],visualType:'numberLine',visualData:{start:0,end:1,points:[{pos:0.33,label:'1/3',color:'#00A896'},{pos:0.5,label:'3/6=1/2',color:'#F5B800'},{pos:0.67,label:'2/3',color:'#FB923C'}],highlight:[0,0.5]},knowledge:'异分母分数加减法',difficulty:3,hint:'先通分1/3=2/6',variants:[{question:'1/4+1/2=?（填分子，最简）',formula:'1/4+2/4=?',answer:3,hint:'通分后3/4'},{question:'2/3+1/6=?（填分子，最简）',formula:'4/6+1/6=?',answer:5,hint:'通分后5/6'}]},
      {scene:'小亮这一周每天早晨测量体温，分别是36.5℃、37℃、38℃、37.5℃、36.8℃。妈妈看记录找出他体温最高的一天。',question:'哪一天体温最高？最高是多少℃？',formula:'最高体温 = ?',answer:38,choices:[38,37,36.8,37.5],visualType:'numberLine',visualData:{start:36,end:39,points:[{pos:36.5,label:'周一',color:'#00A896'},{pos:37,label:'周二',color:'#F5B800'},{pos:38,label:'周三',color:'#FB923C'},{pos:37.5,label:'周四',color:'#E8A0BF'},{pos:36.8,label:'周五',color:'#1E3A5F'}],highlight:[36,38]},knowledge:'折线统计图与比较',difficulty:2,hint:'比较整数部分再比小数',variants:[{question:'36.2、37.1、36.8最高？',formula:'比较大小',answer:37.1,hint:'比较整数部分'},{question:'36.5、37、38.2最高？',formula:'比较大小',answer:38.2,hint:'先比整数再比小数'}]},
      {scene:'工厂生产的9个零件里有1个次品（较轻）。质检员用天平称，要找出次品，他想知道至少称几次能保证找到。',question:'至少称几次能找出次品？',formula:'9 → 3,3,3 至少 ? 次',answer:2,choices:[1,2,3,4],visualType:'numberBond',visualData:{total:9,parts:[{val:3,color:'#00A896'},{val:3,color:'#F5B800'},{val:3,color:'#FB923C'}]},knowledge:'找次品',difficulty:4,hint:'9个分3,3,3称两次',variants:[{question:'27个里1个次品至少称几次？',formula:'27→3,3,3',answer:3,hint:'3的3次方=27'},{question:'3个里1个次品至少称几次？',formula:'3→1,1,1',answer:1,hint:'称1次即可'}]},
    ],
  },
  // ========== 六年级上册（6a）分数乘法 · 位置与方向 · 分数除法 · 比 · 圆 · 百分数 · 扇形统计图 · 数学广角 ==========
  '6a':{
    title:'六年级上册·分数乘除法与圆',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:30,
    units:[
      {name:'分数乘法',level:'current',children:[{name:'分数乘整数',level:'done'},{name:'分数乘分数',level:'current'},{name:'小数乘分数',level:'locked'}]},
      {name:'分数除法',level:'locked',children:[{name:'分数除以整数',level:'locked'},{name:'一个数除以分数',level:'locked'},{name:'已知一个数的几分之几求这个数',level:'locked'}]},
      {name:'比',level:'locked',children:[{name:'比的意义',level:'locked'},{name:'比的基本性质',level:'locked'},{name:'按比分配',level:'locked'}]},
      {name:'圆',level:'locked',children:[{name:'圆的认识',level:'locked'},{name:'圆的周长',level:'locked'},{name:'圆的面积',level:'locked'}]},
      {name:'百分数',level:'locked',children:[{name:'百分数的意义',level:'locked'},{name:'百分数与分数小数互化',level:'locked'},{name:'求一个数是另一个数的百分之几',level:'locked'}]},
      {name:'扇形统计图',level:'locked',children:[{name:'扇形统计图的认识',level:'locked'},{name:'从扇形图读信息',level:'locked'}]},
    ],
    problems:[
      {scene:'超市促销，一箱果汁有8瓶。小明家喝了这箱果汁的3/4，他想算一算一共喝了多少瓶。',question:'小明家一共喝了多少瓶果汁？',formula:'8 × 3/4 = ?',answer:6,choices:[6,3,8,2],visualType:'fractionStrip',visualData:{num:6,total:8,color:'#00A896'},knowledge:'分数乘法',difficulty:3,hint:'8的3/4就是8÷4×3',variants:[{question:'12的2/3是多少？',formula:'12×2/3=?',answer:8,hint:'12÷3×2'},{question:'15的3/5是多少？',formula:'15×3/5=?',answer:9,hint:'15÷5×3'}]},
      {scene:'一根绳子的1/3是2米。小红好奇这根绳子原来全长是多少米，她想用除法算出来。',question:'这根绳子全长多少米？',formula:'2 ÷ 1/3 = ?',answer:6,choices:[6,4,8,2],visualType:'numberLine',visualData:{start:0,end:6,points:[{pos:2,label:'1/3段',color:'#00A896'},{pos:4,label:'2/3段',color:'#F5B800'},{pos:6,label:'全长',color:'#FB923C'}],highlight:[0,6]},knowledge:'分数除法',difficulty:3,hint:'除以分数等于乘倒数',variants:[{question:'3÷1/5=?',formula:'3÷1/5=?',answer:15,hint:'除以分数乘倒数'},{question:'6÷1/4=?',formula:'6÷1/4=?',answer:24,hint:'乘倒数'}]},
      {scene:'六(1)班男生12人，女生18人。老师让同学们写出男女生人数比，并化成最简整数比。',question:'男女生人数比化简后是多少？（填前项与后项之和）',formula:'12 : 18 = 2 : 3，和 = ?',answer:5,choices:[5,30,6,15],visualType:'numberBond',visualData:{total:30,parts:[{val:12,color:'#00A896'},{val:18,color:'#F5B800'}]},knowledge:'比的认识',difficulty:3,hint:'12:18=2:3',variants:[{question:'8:12化简后比的前后项和？',formula:'8:12=2:3',answer:5,hint:'8:12=2:3'},{question:'10:15化简后比的前后项和？',formula:'10:15=2:3',answer:5,hint:'10:15=2:3'}]},
      {scene:'公园里有一个圆形花坛，半径是5米。园丁要在花坛边缘围上一圈彩灯，要算彩灯有多长。',question:'花坛的周长是多少米？',formula:'2 × 3.14 × 5 = ?',answer:31.4,choices:[15.7,31.4,25,78.5],visualType:'geometry',visualData:{shape:'circle',params:{radius:5}},knowledge:'圆的周长',difficulty:3,hint:'周长=2πr',variants:[{question:'r=3周长？',formula:'2×3.14×3=?',answer:18.84,hint:'2πr'},{question:'r=4周长？',formula:'2×3.14×4=?',answer:25.12,hint:'2πr'}]},
      {scene:'商场里一件衣服原价200元，国庆节打八折出售。妈妈想给小亮买这件衣服，要算算打折后便宜了多少。',question:'打折后现价多少元？',formula:'200 × 80% = ?',answer:160,choices:[120,160,180,140],visualType:'barModel',visualData:{total:200,parts:[{label:'现价80%',val:160,color:'#00A896'},{label:'优惠20%',val:40,color:'#FB923C'}]},knowledge:'百分数',difficulty:3,hint:'八折就是按80%出售',variants:[{question:'300×70%=?',formula:'300×0.7=?',answer:210,hint:'百分数化小数'},{question:'500×60%=?',formula:'500×0.6=?',answer:300,hint:'百分数化小数'}]},
      {scene:'老师调查了40名同学最喜欢的运动：足球12人，篮球10人，乒乓球8人，其他10人。老师问喜欢足球的比篮球多几人。',question:'喜欢足球的比篮球多几人？',formula:'12 - 10 = ?',answer:2,choices:[1,2,3,4],visualType:'barModel',visualData:{total:40,parts:[{label:'足球',val:12,color:'#00A896'},{label:'篮球',val:10,color:'#F5B800'},{label:'乒乓',val:8,color:'#FB923C'},{label:'其他',val:10,color:'#E8A0BF'}]},knowledge:'扇形统计图读图',difficulty:2,hint:'足球人数减篮球人数',variants:[{question:'乒乓8人比篮球10人少几？',formula:'10-8=?',answer:2,hint:'用减法'},{question:'足球12人比乒乓8多几？',formula:'12-8=?',answer:4,hint:'用减法'}]},
    ],
  },
  // ========== 六年级下册（6b）负数 · 百分数二 · 圆柱圆锥 · 比例 · 比例尺 · 图形运动 · 统计 · 数学广角 ==========
  '6b':{
    title:'六年级下册·比例与圆柱圆锥',
    sub:'数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress:25,
    units:[
      {name:'负数',level:'done',children:[{name:'负数的认识',level:'done'},{name:'正负数比较大小',level:'done'}]},
      {name:'比例',level:'current',children:[{name:'比例的意义',level:'done'},{name:'解比例',level:'current'},{name:'正反比例',level:'locked'},{name:'比例尺',level:'locked'}]},
      {name:'圆柱和圆锥',level:'locked',children:[{name:'圆柱的表面积',level:'locked'},{name:'圆柱的体积',level:'locked'},{name:'圆锥的体积',level:'locked'}]},
      {name:'百分数（二）',level:'locked',children:[{name:'折扣',level:'locked'},{name:'成数',level:'locked'},{name:'税率利率',level:'locked'}]},
      {name:'图形的运动',level:'locked',children:[{name:'轴对称',level:'locked'},{name:'旋转',level:'locked'},{name:'图案设计',level:'locked'}]},
      {name:'统计与数学广角',level:'locked',children:[{name:'统计图选择',level:'locked'},{name:'抽屉原理',level:'locked'}]},
    ],
    problems:[
      {scene:'冬天北方很冷，某天最低气温降到零下5℃，最高气温是3℃。小红看天气预报想知道这一天的温差有多大。',question:'这一天的温差是多少℃？',formula:'3 - (-5) = ?',answer:8,choices:[2,8,-8,5],visualType:'numberLine',visualData:{start:-6,end:6,points:[{pos:-5,label:'最低',color:'#00A896'},{pos:3,label:'最高',color:'#F5B800'}],highlight:[-5,3]},knowledge:'负数',difficulty:2,hint:'最高减最低',variants:[{question:'-3到4温差？',formula:'4-(-3)=?',answer:7,hint:'最高减最低'},{question:'-4到2温差？',formula:'2-(-4)=?',answer:6,hint:'最高减最低'}]},
      {scene:'商场年终大促，一件羽绒服原价200元，现在打七五折出售。妈妈想买，要先算算打折后是多少钱。',question:'打折后现价多少元？',formula:'200 × 75% = ?',answer:150,choices:[120,150,175,140],visualType:'barModel',visualData:{total:200,parts:[{label:'现价75%',val:150,color:'#00A896'},{label:'优惠25%',val:50,color:'#FB923C'}]},knowledge:'百分数（二）折扣',difficulty:3,hint:'七五折就是75%',variants:[{question:'400×85%=?',formula:'400×0.85=?',answer:340,hint:'化小数'},{question:'600×90%=?',formula:'600×0.9=?',answer:540,hint:'化小数'}]},
      {scene:'小亮有一个圆柱形水杯，底面半径3厘米，高10厘米。他想知道这个水杯能装多少毫升水。',question:'水杯的体积是多少立方厘米？',formula:'3.14 × 3² × 10 = ?',answer:282.6,choices:[282.6,282,28.26,942],visualType:'geometry',visualData:{shape:'cylinder',params:{radius:3,height:10}},knowledge:'圆柱体积',difficulty:4,hint:'体积=πr²h',variants:[{question:'r=2,h=5体积？',formula:'3.14×4×5=?',answer:62.8,hint:'πr²h'},{question:'r=1,h=10体积？',formula:'3.14×1×10=?',answer:31.4,hint:'πr²h'}]},
      {scene:'地图上比例尺是1:100000，小红量得地图上两地的距离是3厘米。她想算出实际距离是多少千米。',question:'两地实际距离是多少千米？',formula:'3 × 100000 = ? (cm) = ? km',answer:3,choices:[3,30,300,3000],visualType:'numberLine',visualData:{start:0,end:9,points:[{pos:2,label:'2cm',color:'#00A896'},{pos:3,label:'3cm',color:'#F5B800'},{pos:6,label:'6cm',color:'#FB923C'},{pos:9,label:'9cm',color:'#E8A0BF'}],highlight:[0,3]},knowledge:'比例尺',difficulty:3,hint:'1cm代表1km',variants:[{question:'图上5cm实际几km？',formula:'5×100000',answer:5,hint:'1cm代表1km'},{question:'图上2cm实际几km？',formula:'2×100000',answer:2,hint:'1cm代表1km'}]},
      {scene:'手工课上，小芳用橡皮泥捏了一个圆锥，底面半径3厘米，高10厘米。她想知道这个圆锥用了多少橡皮泥。',question:'圆锥的体积是多少立方厘米？',formula:'3.14 × 3² × 10 ÷ 3 = ?',answer:94.2,choices:[94.2,94,9.42,282.6],visualType:'geometry',visualData:{shape:'circle',params:{radius:3}},knowledge:'圆锥体积',difficulty:4,hint:'体积=1/3πr²h',variants:[{question:'r=6,h=10圆锥体积？',formula:'3.14×36×10÷3=?',answer:376.8,hint:'1/3πr²h'},{question:'r=3,h=5圆锥体积？',formula:'3.14×9×5÷3=?',answer:47.1,hint:'1/3πr²h'}]},
      {scene:'数学广角：5只鸽子飞进3个鸽舍，老师问同学们至少有一个鸽舍里会有几只鸽子。这是抽屉原理问题。',question:'至少有一个鸽舍里有几只鸽子？',formula:'5 ÷ 3 = 1...2，至少 ? 只',answer:2,choices:[1,2,3,5],visualType:'numberBond',visualData:{total:5,parts:[{val:2,color:'#00A896'},{val:2,color:'#F5B800'},{val:1,color:'#FB923C'}]},knowledge:'抽屉原理',difficulty:4,hint:'平均分后加1',variants:[{question:'7鸽4舍至少几只？',formula:'7÷4=?',answer:2,hint:'向上取整'},{question:'10鸽3舍至少几只？',formula:'10÷3=?',answer:4,hint:'向上取整'}]},
    ],
  },
};

// === MathVisual 动态数形结合可视化引擎 ===
// 6种动态可视化渲染器：条形模型 / 面积模型 / 数字Bond / 分数条 / 数轴 / 几何图形
// 所有渲染器返回 HTML 字符串（含 SVG 与 CSS 动画），供插入到题目讲解区
const MathVisual = {
  // 总入口：根据 type 调用对应渲染器，未知类型回退到 barModel
  render(type, data){
    const fn = this[type];
    return (typeof fn === 'function') ? fn.call(this, data) : this.barModel.call(this, data);
  },
  // 颜色名 → hex（用于 SVG fill/stroke），支持 --teal/--yellow/--coral/--pink/--navy
  _hex(c){
    const m = {teal:'#00A896', yellow:'#F5B800', coral:'#FB923C', pink:'#E8A0BF', navy:'#1E3A5F'};
    return m[c] || c || '#00A896';
  },
  // 默认调色板（按索引循环）
  _palette(i){ const p=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F']; return p[i%p.length]; },
  _textColor(hex){
    const c=hex.replace('#','');
    const r=parseInt(c.substr(0,2),16), g=parseInt(c.substr(2,2),16), b=parseInt(c.substr(4,2),16);
    const lum=0.299*r+0.587*g+0.114*b;
    return lum>150?'#12263F':'#fff';
  },

  // 1. 动态条形模型 —— 加减法 / 部分整体关系
  // data: {total, parts:[{label,val,color}]}
  barModel(data){
    // 兼容 bars 格式（{type:"bar", bars:[{label,value,color}], total}）
    if(data && data.bars && !data.parts){
      data.parts = data.bars.map(b => ({label: b.label, val: b.value, color: b.color}));
      if(data.total == null) data.total = data.parts.reduce((s,p)=>s+(p.val||0),0);
    }
    const parts = (data && data.parts) || [];
    if(!parts.length) return '<div class="mv-empty">暂无条形数据</div>';
    const total = (data.total != null) ? data.total : parts.reduce((s,p)=>s+(p.val||0),0);
    const W=560, H=170, padX=24, barY=66, barH=58;
    const usable = W - padX*2;
    let x = padX, delay = 0;
    const segs = parts.map((p,i)=>{
      const w = total>0 ? Math.max((p.val/total)*usable, 2) : 0;
      const color = this._hex(p.color) || this._palette(i);
      const g = `<g transform="translate(${x},0)">
        <rect class="mv-bar-rect" x="0" y="${barY}" width="${w}" height="${barH}" fill="${color}" rx="5" style="animation-delay:${delay}s"/>
        <text class="mv-bar-text" x="${w/2}" y="${barY+barH/2+5}" text-anchor="middle" font-size="15" font-weight="700" fill="${this._textColor(color)}" style="animation-delay:${delay+0.45}s">${p.val}</text>
        <text x="${w/2}" y="${barY-10}" text-anchor="middle" font-size="12" fill="#475569" font-weight="600">${p.label||''}</text>
      </g>`;
      x += w; delay += 0.18;
      return g;
    }).join('');
    return `<div class="mv-wrap mv-bar-model">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${segs}
        <text x="${W-padX}" y="${barY+barH+30}" text-anchor="end" font-size="14" font-weight="700" fill="#1E3A5F">（合计 = ${total}）</text>
      </svg>
    </div>`;
  },

  // 2. 动态面积模型 —— 两位数乘法
  // data: {a, b, parts:[4个部分值], result}
  // parts 顺序：[a十×b十, a十×b个, a个×b十, a个×b个]
  areaModel(data){
    const {a,b,parts,result} = data;
    const aT=Math.floor(a/10)*10, aO=a%10;   // a 的十位值 / 个位值
    const bT=Math.floor(b/10)*10, bO=b%10;   // b 的十位值 / 个位值
    const sc=13;
    const aTw=aT*sc, aOw=aO*sc, bTh=bT*sc, bOh=bO*sc;
    const totalW=aTw+aOw, totalH=bTh+bOh;
    const padX=36, padY=24;
    const W=totalW+padX*2, H=totalH+padY*2+56;
    // 网格：水平按 a 拆分（左=十位, 右=个位），垂直按 b 拆分（上=十位, 下=个位）
    const blocks=[
      {x:padX,     y:padY,         w:aTw, h:bTh, val:parts[0], color:'#00A896', lab:`${aT}×${bT}`}, // 左上 a十×b十
      {x:padX+aTw, y:padY,         w:aOw, h:bTh, val:parts[2], color:'#F5B800', lab:`${aO}×${bT}`}, // 右上 a个×b十
      {x:padX,     y:padY+bTh,     w:aTw, h:bOh, val:parts[1], color:'#E8A0BF', lab:`${aT}×${bO}`}, // 左下 a十×b个
      {x:padX+aTw, y:padY+bTh,     w:aOw, h:bOh, val:parts[3], color:'#FB923C', lab:`${aO}×${bO}`}, // 右下 a个×b个
    ];
    const blks=blocks.map((bk,i)=>`
      <g class="mv-area-block" style="animation-delay:${i*0.3}s">
        <rect x="${bk.x}" y="${bk.y}" width="${bk.w}" height="${bk.h}" fill="${bk.color}" opacity="0.85"/>
        <text x="${bk.x+bk.w/2}" y="${bk.y+bk.h/2-4}" text-anchor="middle" font-size="15" font-weight="700" fill="${this._textColor(bk.color)}">${bk.val}</text>
        <text x="${bk.x+bk.w/2}" y="${bk.y+bk.h/2+14}" text-anchor="middle" font-size="11" fill="${this._textColor(bk.color)}" opacity="0.88">${bk.lab}</text>
      </g>`).join('');
    return `<div class="mv-wrap mv-area-model">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${blks}
        <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">${parts.join(' + ')} = ${result}</text>
      </svg>
    </div>`;
  },

  // 3. 动态数字 Bond —— 数的分解 / 加减法关系
  // data: {total, parts:[{val,color}]}
  numberBond(data){
    const parts=(data && data.parts) || [];
    const total=data.total;
    const n=parts.length;
    const W=340, H=210, topX=W/2, topY=44, bottomY=158, spread=220;
    const pos=(i)=> n<=1 ? W/2 : (W/2 - spread/2 + (spread/(n-1))*i);
    const lines=parts.map((p,i)=>{
      const bx=pos(i);
      const len=Math.hypot(bx-topX, bottomY-topY);
      return `<line class="mv-bond-line" x1="${topX}" y1="${topY}" x2="${bx}" y2="${bottomY}" stroke="${this._hex(p.color)||this._palette(i)}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${len}" stroke-dashoffset="${len}" style="animation-delay:${i*0.2}s"/>`;
    }).join('');
    const pCircles=parts.map((p,i)=>{
      const bx=pos(i);
      const color=this._hex(p.color)||this._palette(i);
      return `<g class="mv-bond-part" style="animation-delay:${0.55+i*0.2}s">
        <circle cx="${bx}" cy="${bottomY}" r="26" fill="${color}"/>
        <text x="${bx}" y="${bottomY+6}" text-anchor="middle" font-size="18" font-weight="700" fill="${this._textColor(color)}">${p.val}</text>
      </g>`;
    }).join('');
    return `<div class="mv-wrap mv-number-bond">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${lines}
        <g class="mv-bond-total">
          <circle cx="${topX}" cy="${topY}" r="30" fill="#1E3A5F"/>
          <text x="${topX}" y="${topY+7}" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">${total}</text>
        </g>
        ${pCircles}
      </svg>
    </div>`;
  },

  // 4. 动态分数条 —— 分数认识 / 分数比较
  // data: {num, total, color}
  fractionStrip(data){
    const {num, total, color} = data;
    const W=560, H=130, padX=24, padY=34, stripW=W-padX*2, stripH=52;
    const segW=stripW/total;
    const fillHex=this._hex(color);
    const fillW=num*segW;
    const dividers=Array.from({length:total-1},(_,i)=>{
      const x=padX+(i+1)*segW;
      return `<line x1="${x}" y1="${padY}" x2="${x}" y2="${padY+stripH}" stroke="#fff" stroke-width="2"/>`;
    }).join('');
    const labels=Array.from({length:total},(_,i)=>{
      const x=padX+i*segW+segW/2;
      return `<text x="${x}" y="${padY+stripH+18}" text-anchor="middle" font-size="11" fill="#475569">${i+1}</text>`;
    }).join('');
    const equivs=[];
    for(let k=2;k<=3;k++){ equivs.push(`${num*k}/${total*k}`); }
    return `<div class="mv-wrap mv-frac-strip">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <text x="${padX}" y="${padY-12}" font-size="14" font-weight="700" fill="#1E3A5F">${num}/${total}</text>
        <rect x="${padX}" y="${padY}" width="${stripW}" height="${stripH}" fill="#fff" stroke="#1E3A5F" stroke-width="2" rx="5"/>
        <rect class="mv-frac-fill" x="${padX}" y="${padY}" width="${fillW}" height="${stripH}" fill="${fillHex}" rx="5"/>
        ${dividers}
        <rect x="${padX}" y="${padY}" width="${stripW}" height="${stripH}" fill="none" stroke="#1E3A5F" stroke-width="2" rx="5"/>
        ${labels}
      </svg>
      <div class="mv-frac-equiv">等值分数：${num}/${total} = ${equivs.join(' = ')}</div>
    </div>`;
  },

  // 5. 动态数轴 —— 整数 / 小数 / 负数 / 运算过程
  // data: {start, end, points:[{pos,label,color}], highlight:[a,b]}
  numberLine(data){
    const {start, end, points, highlight} = data;
    const W=560, H=150, padX=40, padY=78, lineW=W-padX*2-16;
    const range=end-start;
    const pos=(v)=> padX + ((v-start)/range)*lineW;
    const step=Math.max(1, Math.round(range/10));
    let ticks='';
    for(let v=start; v<=end; v+=step){
      const x=pos(v);
      ticks+=`<line x1="${x}" y1="${padY-6}" x2="${x}" y2="${padY+6}" stroke="#475569" stroke-width="1.5"/>`;
      ticks+=`<text x="${x}" y="${padY+24}" text-anchor="middle" font-size="11" fill="#475569">${v}</text>`;
    }
    let hl='';
    if(Array.isArray(highlight) && highlight.length===2){
      const x1=pos(highlight[0]), x2=pos(highlight[1]);
      hl=`<rect x="${x1}" y="${padY-22}" width="${x2-x1}" height="44" fill="#F5B800" opacity="0.22" rx="4"/>`;
    }
    const pts=(points||[]).map((p,i)=>{
      const x=pos(p.pos);
      const color=this._hex(p.color)||this._palette(i);
      return `<g class="mv-nl-point" style="animation-delay:${0.4+i*0.2}s">
        <circle cx="${x}" cy="${padY}" r="10" fill="${color}" stroke="#fff" stroke-width="2.5"/>
        <text x="${x}" y="${padY-18}" text-anchor="middle" font-size="12" font-weight="700" fill="${color}">${p.label!=null?p.label:p.pos}</text>
      </g>`;
    }).join('');
    return `<div class="mv-wrap mv-number-line">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${hl}
        <line x1="${padX}" y1="${padY}" x2="${W-padX+12}" y2="${padY}" stroke="#1E3A5F" stroke-width="2.5"/>
        <polygon points="${W-padX+12},${padY-5} ${W-padX+22},${padY} ${W-padX+12},${padY+5}" fill="#1E3A5F"/>
        ${ticks}
        ${pts}
      </svg>
    </div>`;
  },

  // 6. 动态几何图形 —— 图形认识 / 周长面积计算
  // data: {shape, params:{...}}
  geometry(data){
    const shape=(data && data.shape) || 'rectangle';
    const p=(data && data.params) || {};
    const W=420, H=240;
    let body='', formula='';
    if(shape==='rectangle'){
      const {length,width}=p;
      const sc=15, rw=length*sc, rh=width*sc;
      const x0=(W-rw)/2, y0=(H-rh)/2;
      body=`<rect class="mv-geo-outline" x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5" rx="3"/>
        <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">长 ${length}</text>
        <text x="${x0+rw+8}" y="${y0+rh/2+5}" font-size="13" font-weight="700" fill="#1E3A5F">宽 ${width}</text>`;
      formula=`周长 = (${length}+${width})×2 = ${2*(length+width)}　面积 = ${length}×${width} = ${length*width}`;
    } else if(shape==='triangle'){
      const {base,height}=p;
      const sc=13, bw=base*sc, hh=height*sc;
      const cx=W/2, baseY=H-44;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx},${baseY-hh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY-hh}" x2="${cx}" y2="${baseY}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">底 ${base}</text>`;
      formula=`面积 = 底×高÷2 = ${base}×${height}÷2 = ${base*height/2}`;
    } else if(shape==='parallelogram'){
      const {base,height,side}=p;
      const sc=12, bw=base*sc, hh=height*sc, sl=(side||height)*sc;
      const off=Math.sqrt(Math.max(sl*sl-hh*hh, 16));
      const x0=(W-bw)/2+24, baseY=H-50;
      body=`<polygon class="mv-geo-outline" points="${x0},${baseY} ${x0+bw},${baseY} ${x0+bw-off},${baseY-hh} ${x0-off},${baseY-hh}" fill="rgba(245,184,0,0.15)" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${x0}" y1="${baseY}" x2="${x0}" y2="${baseY-hh}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${x0-8}" y="${baseY-hh/2}" text-anchor="end" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${x0+bw/2}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">底 ${base}</text>`;
      formula=`面积 = 底×高 = ${base}×${height} = ${base*height}`;
    } else if(shape==='trapezoid'){
      const {top,bottom,height}=p;
      const sc=12, tw=top*sc, bw=bottom*sc, hh=height*sc;
      const cx=W/2, baseY=H-50;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx+tw/2},${baseY-hh} ${cx-tw/2},${baseY-hh}" fill="rgba(232,160,191,0.18)" stroke="#E8A0BF" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY}" x2="${cx}" y2="${baseY-hh}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY-hh-10}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">上底 ${top}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">下底 ${bottom}</text>`;
      formula=`面积 = (上底+下底)×高÷2 = (${top}+${bottom})×${height}÷2 = ${(top+bottom)*height/2}`;
    } else if(shape==='circle'){
      const {radius}=p;
      const sc=9, r=radius*sc, cx=W/2, cy=H/2;
      body=`<circle class="mv-geo-outline" cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        <line class="mv-circle-radius" x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="2.5"/>
        <text x="${cx+r/2}" y="${cy-8}" text-anchor="middle" font-size="13" font-weight="700" fill="#FB923C">r=${radius}</text>`;
      const C=(2*radius*3.14).toFixed(2), A=(radius*radius*3.14).toFixed(2);
      formula=`周长 = 2πr = 2×3.14×${radius} = ${C}　面积 = πr² = 3.14×${radius}² = ${A}`;
    } else if(shape==='cylinder'){
      const {radius,height}=p;
      const sc=8, r=radius*sc, hh=height*sc, cx=W/2, cy=(H-hh)/2+6;
      body=`<ellipse class="mv-geo-outline" cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.3}" fill="rgba(0,168,150,0.18)" stroke="#00A896" stroke-width="2.5"/>
        <path class="mv-geo-outline" d="M ${cx-r} ${cy} L ${cx-r} ${cy+hh} A ${r} ${r*0.3} 0 0 0 ${cx+r} ${cy+hh} L ${cx+r} ${cy}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
        <ellipse cx="${cx}" cy="${cy+hh}" rx="${r}" ry="${r*0.3}" fill="none" stroke="#00A896" stroke-width="1.8" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="${cx-r}" y1="${cy}" x2="${cx-r}" y2="${cy+hh}" stroke="#FB923C" stroke-width="2"/>
        <text x="${cx-r-8}" y="${cy+hh/2}" text-anchor="end" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <line class="mv-circle-radius" x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="2"/>
        <text x="${cx+r/2}" y="${cy-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">r=${radius}</text>`;
      formula=`体积 = πr²h = 3.14×${radius}²×${height} = ${(radius*radius*height*3.14).toFixed(2)}`;
    } else {
      return '<div class="mv-empty">未知图形类型</div>';
    }
    return `<div class="mv-wrap mv-geometry">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${body}
      </svg>
      <div class="mv-geo-formula">${formula}</div>
    </div>`;
  }
};

/* ============================================================
   学习引擎套件 v4：学习路径 / 漏洞检测 / 进度追踪 / 时长控制
   - 所有渲染方法返回 HTML 字符串，不直接操作 DOM（TimeController 计时器除外）
   - 颜色统一使用 CSS 变量：--teal --yellow --coral --navy --pink
   - 依赖外部数据：MATH_BY_GRADE / VOCAB_BY_GRADE / saveState / toast
============================================================ */

// === 1. LearningPath 学习路径引擎 ===
// 日任务（40分钟两科）/ 周计划 / 阶段考核 / 完成检查 / 渲染
const LearningPath = {
  // 易错点提示库（按知识点关键词匹配）
  _pitfalls: {
    '进位':'连续进位时容易漏加进位1，建议用条形模型可视化每次进位过程。',
    '退位':'退位减法容易忘记从高位借1，在被减数高位标注借位点再算。',
    '周长':'周长是"一圈"的长度，长方形周长=(长+宽)×2，别忘乘2。',
    '乘法':'笔算乘法注意数位对齐，部分积相加时别漏进位。',
    '除法':'试商时看被除数前两位，余数必须比除数小。',
    '小数':'小数加减法小数点必须对齐，结果别忘点小数点。',
    '分数':'分数乘法分子×分子、分母×分母，能约分先约分更简单。',
    '方程':'等式两边同加/减/乘/除同一个数，等式仍成立。',
    '面积':'三角形面积=底×高÷2，平行四边形面积=底×高（不÷2）。',
    '认识':'新概念先观察实物或图示，再抽象出定义。'
  },
  _pitfallFor(topic){
    if(!topic) return '认真审题，分步计算，做完记得验算。';
    for(const k in this._pitfalls){ if(topic.indexOf(k)>=0) return this._pitfalls[k]; }
    return '认真审题，分步计算，做完记得验算。';
  },
  _fmt(d){ const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),da=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${da}`; },

  // 从知识树找下一个推荐知识点（优先叶子 current，其次任意 current，其次 locked）
  _findNextKnowledge(grade){
    const data = MATH_BY_GRADE[grade];
    if(!data) return {name:'万以内加减法', parentName:'数与代数'};
    let leafCurrent=null, anyCurrent=null, anyLocked=null;
    const walk=(nodes, parent)=>{
      for(const n of nodes){
        const isLeaf = !n.children || !n.children.length;
        if(n.level==='current'){
          if(isLeaf && !leafCurrent) leafCurrent = {name:n.name, parentName:parent};
          if(!anyCurrent) anyCurrent = {name:n.name, parentName:parent};
        }
        if(n.level==='locked' && !anyLocked && isLeaf) anyLocked = {name:n.name, parentName:parent};
        if(n.children && n.children.length) walk(n.children, n.name);
      }
    };
    walk(data.knowledge, '');
    return leafCurrent || anyCurrent || anyLocked || {name:data.title, parentName:''};
  },

  // V5 英语板块推荐：基于完成状态推荐优先板块
  _engV5Boards: [
    {id:'listen', name:'磨耳朵电台', icon:'🎧'},
    {id:'tpr', name:'TPR动作屋', icon:'🏃'},
    {id:'phrase', name:'每日短语', icon:'💬'},
    {id:'vocab', name:'图片词汇库', icon:'🖼️'},
    {id:'sentence', name:'句型启蒙', icon:'📝'},
    {id:'reading', name:'绘本阅读', icon:'📖'},
    {id:'speak', name:'口语对话', icon:'🗣️'},
    {id:'notebook', name:'我的单词本', icon:'📓'}
  ],
  _engV5Topic(state, newWords){
    var v5 = state.engV5 || {};
    var done = v5.completed || [];
    // 找未完成的板块，推荐第一个
    var next = this._engV5Boards.find(function(b){return done.indexOf(b.id)<0;});
    if(next) return next.icon + ' ' + next.name + (newWords ? ' + 复习' + newWords.slice(0,3).join('、') : '');
    // 全部完成，推荐词汇学习
    return '词汇学习：' + (newWords ? newWords.slice(0,3).join('、') : '') + '等8词';
  },
  _engV5Goal(state){
    var v5 = state.engV5 || {};
    var done = v5.completed || [];
    var next = this._engV5Boards.find(function(b){return done.indexOf(b.id)<0;});
    if(next) return '完成「' + next.name + '」板块 + 学会8个新词';
    return '学会8个新词 + 完成3句口语练习';
  },

  // 生成今日任务（按40分钟两科分配）
  generateDailyPlan(state, date){
    const grade = (state.math && state.math.grade) || '3';
    const mathKp = this._findNextKnowledge(grade);
    const engGrade = (state.eng && state.eng.grade) || grade;
    const vocab = VOCAB_BY_GRADE[engGrade] || VOCAB_BY_GRADE['3'];
    const learned = (state.eng && state.eng.learnedWords) || 0;
    // 循环取8个新词（避免越界）
    const newWords = [];
    for(let i=0;i<8 && vocab.length;i++){ newWords.push(vocab[(learned+i) % vocab.length].w); }
    const tasks = [
      {
        subject:'math', subjectName:'数学',
        topic: mathKp.name, parent: mathKp.parentName,
        duration:20, goal:'完成5道题，正确率≥80%',
        visualType:'barModel', minCount:5, minAccuracy:0.8,
        pitfalls: this._pitfallFor(mathKp.name)
      },
      {
        subject:'eng', subjectName:'英语',
        topic: this._engV5Topic(state, newWords),
        duration:20, goal:this._engV5Goal(state),
        newWords, speakGoal:3,
        pitfalls:'新词用自然拼读法拆音；口语先听示范再跟读，注意语音语调。'
      }
    ];
    return { date, tasks, totalTime:40, completeCriteria:'两科任务均达成完成标准，总用时≈40分钟' };
  },

  // 生成本周计划（周一到周日 + 周末阶段考核）
  generateWeeklyPlan(state, weekStart){
    const days = ['周一','周二','周三','周四','周五','周六','周日'];
    const plan = days.map((dn,i)=>{
      const d = new Date(weekStart);
      d.setDate(d.getDate()+i);
      const ds = this._fmt(d);
      const daily = this.generateDailyPlan(state, ds);
      const summary = daily.tasks.map(t=>`${t.subjectName}·${t.topic}`.slice(0,16)).join(' / ');
      return { day:dn, date:ds, summary, totalTime:daily.totalTime, isAssessment:false };
    });
    const grade = (state.math && state.math.grade) || '3';
    const mathData = MATH_BY_GRADE[grade];
    plan[6] = {
      day:'周日', date:plan[6].date, isAssessment:true, totalTime:30,
      summary:'📊 阶段考核：本单元综合测评（10题）',
      unit: mathData ? mathData.title : '当前单元'
    };
    return { weekStart, days:plan, weekendAssessment:true };
  },

  // 阶段考核（每单元学完触发）：从已学知识点抽10题，≥80%解锁下一单元
  generateAssessment(unitName, knowledge){
    const kps = [];
    const walk=(nodes)=>{ for(const n of nodes){ if(n.level==='done' || n.level==='current'){ kps.push(n.name); } if(n.children && n.children.length) walk(n.children); } };
    if(knowledge) walk(knowledge);
    const visuals = ['barModel','areaModel','numberBond','fractionBar','numberLine','geometry'];
    const questions = [];
    for(let i=0;i<10;i++){
      const k = kps.length ? kps[i % kps.length] : '综合复习';
      questions.push({
        idx:i+1, knowledge:k,
        visualType: visuals[i % visuals.length],
        difficulty: i<6 ? 'easy' : (i<9 ? 'medium' : 'hard')
      });
    }
    return {
      unitName, total:10, questions,
      passCriteria:'正确率≥80%（答对8题及以上）解锁下一单元',
      unlockNext:'达标自动解锁下一单元知识点；未达标生成针对性补救练习。'
    };
  },

  // 检查今日任务完成情况
  checkDailyCompletion(state, date){
    const plan = this.generateDailyPlan(state, date);
    const log = (state.answerLog||[]).filter(a=>a.date===date);
    const tasks = plan.tasks.map(t=>{
      let done=false, detail='';
      if(t.subject==='math'){
        const recs = log.filter(a=>a.subject==='math' && a.knowledge && a.knowledge.indexOf(t.topic)>=0);
        const correct = recs.filter(a=>a.result==='correct').length;
        const acc = recs.length ? correct/recs.length : 0;
        done = recs.length>=t.minCount && acc>=t.minAccuracy;
        detail = `${recs.length}/${t.minCount} 题，正确率 ${recs.length?Math.round(acc*100):0}%`;
      } else {
        const todaySpoken = log.filter(a=>a.subject==='eng' && a.result==='correct').length;
        const wCount = (state.eng && state.eng.learnedWords) || 0;
        done = wCount>=8 && todaySpoken>=t.speakGoal;
        detail = `已学词 ${Math.min(wCount,8)}/8，口语 ${Math.min(todaySpoken,t.speakGoal)}/${t.speakGoal}`;
      }
      return { subject:t.subject, subjectName:t.subjectName, topic:t.topic, done, detail, duration:t.duration };
    });
    const allDone = tasks.every(r=>r.done);
    const doneTime = tasks.filter(r=>r.done).reduce((s,r)=>s+r.duration,0);
    return { date, tasks, allDone, doneTime, totalTime:plan.totalTime };
  },

  // 渲染今日任务卡片 HTML
  renderDailyPlan(state){
    const today = this._fmt(new Date());
    const plan = this.generateDailyPlan(state, today);
    const check = this.checkDailyCompletion(state, today);
    const taskCard = (t,i)=>{
      const r = check.tasks[i] || {};
      const color = t.subject==='math' ? 'var(--teal)' : 'var(--coral)';
      const icon = t.subject==='math' ? '📐' : '🔤';
      const status = r.done ? '✅ 已完成' : '⏳ 进行中';
      const statusBg = r.done ? 'var(--teal-100)' : 'var(--yellow-100)';
      const statusColor = r.done ? 'var(--teal-700)' : 'var(--yellow-700)';
      return `<div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-lg);padding:14px 16px;border-left:4px solid ${color};box-shadow:var(--shadow-sm)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:22px">${icon}</span>
            <div>
              <div style="font-weight:700;color:var(--text-1);font-size:15px">${t.subjectName} · ${t.duration}分钟</div>
              <div style="font-size:12px;color:var(--text-2)">${t.parent?t.parent+' · ':''}${t.topic}</div>
            </div>
          </div>
          <span style="background:${statusBg};color:${statusColor};padding:3px 10px;border-radius:var(--radius-full);font-size:12px;font-weight:600">${status}</span>
        </div>
        <div style="background:var(--teal-50);border-radius:var(--radius-sm);padding:8px 10px;font-size:12.5px;color:var(--teal-700);margin-bottom:6px">🎯 <b>完成标准：</b>${t.goal}</div>
        <div style="background:var(--yellow-50);border-radius:var(--radius-sm);padding:8px 10px;font-size:12.5px;color:var(--yellow-700);margin-bottom:6px">⚠️ <b>易错点：</b>${t.pitfalls}</div>
        <div style="font-size:12px;color:var(--text-3)">📊 进度：${r.detail||'尚未开始'}</div>
      </div>`;
    };
    return `<div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;color:var(--text-1);font-size:16px">📅 今日学习计划 · ${today}</div>
        <div style="background:var(--navy);color:#fff;padding:4px 12px;border-radius:var(--radius-full);font-size:12px;font-weight:600">总时长 ${plan.totalTime} 分钟</div>
      </div>
      ${plan.tasks.map(taskCard).join('')}
      <div style="background:linear-gradient(135deg,var(--teal-50),var(--yellow-50));border-radius:var(--radius-lg);padding:12px 14px;font-size:13px;color:var(--text-2);text-align:center">
        ${check.allDone?'🎉 太棒了！今日任务全部完成！':`继续加油，已完成 ${check.doneTime}/${check.totalTime} 分钟`}
      </div>
    </div>`;
  },

  // 渲染周计划 HTML
  renderWeeklyPlan(state){
    const today = new Date();
    const weekStart = new Date(today);
    const dow = (today.getDay()+6)%7; // 周一=0
    weekStart.setDate(today.getDate()-dow);
    const ws = this._fmt(weekStart);
    const plan = this.generateWeeklyPlan(state, ws);
    const todayStr = this._fmt(today);
    const dayCard = (d)=>{
      const isToday = d.date===todayStr;
      const bg = d.isAssessment ? 'linear-gradient(135deg,var(--pink),var(--coral))' : 'var(--surface)';
      const color = d.isAssessment ? '#fff' : 'var(--text-1)';
      const sub = d.isAssessment ? 'rgba(255,255,255,.9)' : 'var(--text-2)';
      return `<div style="background:${bg};border:1px solid ${d.isAssessment?'transparent':'var(--ink-100)'};border-radius:var(--radius-md);padding:10px 8px;${isToday?'box-shadow:var(--shadow-teal);border:2px solid var(--teal)':''}">
        <div style="font-weight:700;color:${color};font-size:13px">${d.day}${isToday?'·今天':''}</div>
        <div style="font-size:11px;color:${sub};margin:4px 0;line-height:1.4">${d.summary}</div>
        <div style="font-size:11px;color:${sub};font-weight:600">${d.totalTime}分钟</div>
      </div>`;
    };
    return `<div style="display:flex;flex-direction:column;gap:10px">
      <div style="font-weight:700;color:var(--text-1);font-size:16px">📆 本周计划 · ${plan.weekStart} 起</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px">${plan.days.map(dayCard).join('')}</div>
      <div style="background:var(--navy-50);border-radius:var(--radius-md);padding:10px 12px;font-size:12.5px;color:var(--navy)">
        📊 <b>周末阶段考核：</b>${plan.days[6].summary}。达标（≥80%）即可解锁下一单元，未达标自动生成针对性补救练习。
      </div>
    </div>`;
  }
};

// === 2. WeaknessDetector 漏洞检测引擎 ===
// 答题记录 / 掌握度计算 / 真实掌握检测 / 薄弱点分析 / 补救建议 / 渲染
const WeaknessDetector = {
  // 记录答题（每次答题后调用）
  // question: {subject, knowledge, difficulty, visualType}  result: 'correct'|'wrong'|'timeout'|'hint'
  recordAnswer(state, question, result, timeUsed){
    if(!state.answerLog) state.answerLog = [];
    const rec = {
      ts: Date.now(),
      date: LearningPath._fmt(new Date()),
      subject: question.subject || 'math',
      knowledge: question.knowledge || '未知知识点',
      difficulty: question.difficulty || 'medium',
      visualType: question.visualType || 'barModel',
      result: result,
      timeUsed: timeUsed || 0,
      hintUsed: result === 'hint'
    };
    state.answerLog.push(rec);
    if(state.answerLog.length > 200) state.answerLog = state.answerLog.slice(-200);
    // 同步掌握度缓存
    if(!state.math) state.math = {};
    if(!state.math.mastery) state.math.mastery = {};
    const m = state.math.mastery;
    const k = rec.knowledge;
    if(!m[k]) m[k] = {correct:0, wrong:0, hint:0, times:[], lastSeen:0};
    if(rec.result==='correct') m[k].correct++;
    else if(rec.result==='wrong' || rec.result==='timeout') m[k].wrong++;
    if(rec.hintUsed) m[k].hint++;
    m[k].times.push(rec.timeUsed);
    if(m[k].times.length > 30) m[k].times = m[k].times.slice(-30);
    m[k].lastSeen = rec.ts;
    if(typeof saveState==='function') saveState();
    return rec;
  },

  // 计算知识点掌握度（0-100）：正确率60% + 用时合理性20% + 不依赖提示20%
  calcMastery(state, knowledgePoint){
    const m = (state.math && state.math.mastery && state.math.mastery[knowledgePoint]) || null;
    if(!m || (m.correct + m.wrong) === 0) return 0;
    const total = m.correct + m.wrong;
    const accuracy = m.correct / total;                              // 60%
    const avgT = m.times.length ? m.times.reduce((s,t)=>s+(t||0),0)/m.times.length : 30;
    let timeScore;                                                   // 20%
    if(avgT < 5) timeScore = 0.3;            // 过快疑似乱答
    else if(avgT < 10) timeScore = 0.7;
    else if(avgT > 120) timeScore = 0.6;     // 过慢说明不熟练
    else timeScore = 1;
    const hintRatio = total>0 ? m.hint/total : 0;
    const hintScore = 1 - hintRatio;                                 // 20%
    const mastery = Math.round((accuracy*0.6 + timeScore*0.2 + hintScore*0.2) * 100);
    return Math.max(0, Math.min(100, mastery));
  },

  // 检测是真正掌握还是刷题：至少答对3题 + 用时稳定 + 不靠提示 + 正确率≥80%
  detectRealMastery(state, knowledgePoint){
    const m = (state.math && state.math.mastery && state.math.mastery[knowledgePoint]) || null;
    if(!m) return {real:false, reason:'尚无答题记录', mastery:0};
    const total = m.correct + m.wrong;
    const mastery = this.calcMastery(state, knowledgePoint);
    if(m.correct < 3) return {real:false, reason:`答对题数不足（${m.correct}/3）`, mastery};
    // 用时稳定性：标准差/均值 < 0.6
    if(m.times.length >= 3){
      const avg = m.times.reduce((s,t)=>s+t,0)/m.times.length;
      const variance = m.times.reduce((s,t)=>s+(t-avg)*(t-avg),0)/m.times.length;
      const std = Math.sqrt(variance);
      if(avg>0 && std/avg > 0.6) return {real:false, reason:'用时波动大，熟练度不稳定', mastery};
    }
    const hintRatio = total>0 ? m.hint/total : 0;
    if(hintRatio >= 0.2) return {real:false, reason:`过度依赖提示（提示率 ${Math.round(hintRatio*100)}%）`, mastery};
    const acc = total>0 ? m.correct/total : 0;
    if(acc < 0.8) return {real:false, reason:`正确率未达真实掌握标准（${Math.round(acc*100)}%）`, mastery};
    return {real:true, reason:'答对≥3题、用时稳定、不依赖提示、正确率≥80%', mastery};
  },

  // 分析薄弱点（基于近20题）：掌握度<60% 或 错误数>正确数
  analyzeWeakness(state, subject){
    const log = (state.answerLog||[]).filter(a=> !subject || a.subject===subject).slice(-20);
    if(!log.length) return {weakPoints:[], summary:'暂无答题数据', totalAnalyzed:0};
    const byKp = {};
    for(const a of log){
      if(!byKp[a.knowledge]) byKp[a.knowledge] = {correct:0, wrong:0, hint:0, timeout:0, times:[], visualTypes:{}};
      const g = byKp[a.knowledge];
      if(a.result==='correct') g.correct++;
      else if(a.result==='wrong') g.wrong++;
      else if(a.result==='timeout') g.timeout++;
      if(a.hintUsed) g.hint++;
      g.times.push(a.timeUsed);
      g.visualTypes[a.visualType] = (g.visualTypes[a.visualType]||0)+1;
    }
    const weakPoints = [];
    for(const kp in byKp){
      const g = byKp[kp];
      const total = g.correct + g.wrong + g.timeout;
      if(total === 0) continue;
      const mastery = this.calcMastery(state, kp);
      if(mastery < 60 || (g.wrong + g.timeout) > g.correct){
        weakPoints.push({
          knowledge: kp, mastery, correct:g.correct, wrong:g.wrong, timeout:g.timeout, hint:g.hint, total,
          visualTypes: Object.keys(g.visualTypes),
          avgTime: g.times.length ? Math.round(g.times.reduce((s,t)=>s+t,0)/g.times.length) : 0
        });
      }
    }
    weakPoints.sort((a,b)=>a.mastery - b.mastery);
    return { weakPoints, summary:`近${log.length}题检出 ${weakPoints.length} 个薄弱知识点`, totalAnalyzed:log.length };
  },

  // 生成补救建议：推荐具体题目类型和可视化方式
  generateRemediation(state, weakPoints){
    if(!weakPoints || !weakPoints.length) return {items:[], summary:'暂无薄弱点，继续保持！'};
    const visualMap = {
      'barModel':'条形模型（加减法/部分整体）',
      'areaModel':'面积模型（乘法拆分）',
      'numberBond':'数字Bond（数的分解）',
      'fractionBar':'分数条（分数意义）',
      'numberLine':'数轴（数的大小关系）',
      'geometry':'几何图形（周长/面积）'
    };
    const allVisuals = ['barModel','areaModel','numberBond','fractionBar','numberLine','geometry'];
    const items = weakPoints.map(w=>{
      const det = this.detectRealMastery(state, w.knowledge);
      const altVisuals = allVisuals.filter(v=> w.visualTypes.indexOf(v)<0);
      const recommendVisual = altVisuals[0] || w.visualTypes[0] || 'barModel';
      let strategy;
      if(w.hint > 1) strategy = '先看可视化讲解再做，逐步减少提示使用';
      else if(w.timeout > w.wrong) strategy = '限时训练，每题≤60秒，提升反应速度';
      else if(w.mastery < 30) strategy = '回到基础概念，用图示重新理解题意';
      else strategy = '分步计算，每步验算，建立错题本';
      return {
        knowledge: w.knowledge,
        mastery: w.mastery,
        realMastery: det.real,
        reason: det.reason,
        recommendVisual,
        recommendVisualName: visualMap[recommendVisual] || '条形模型',
        exerciseCount: w.mastery<30 ? 8 : (w.mastery<45 ? 6 : 5),
        target: '正确率提升到 ≥85% 且用时稳定',
        strategy
      };
    });
    return { items, summary:`生成 ${items.length} 条补救建议` };
  },

  // 渲染漏洞报告 HTML
  renderWeaknessReport(state){
    const analysis = this.analyzeWeakness(state, 'math');
    const remediation = this.generateRemediation(state, analysis.weakPoints);
    const wp = analysis.weakPoints;
    const masteryBar = (val)=>{
      const c = val>=80 ? 'var(--teal)' : (val>=60 ? 'var(--yellow)' : 'var(--coral)');
      return `<div style="background:var(--ink-100);border-radius:var(--radius-full);height:8px;overflow:hidden;margin-top:6px">
        <div style="background:${c};height:100%;width:${val}%"></div>
      </div>`;
    };
    const card = (w)=>{
      const r = remediation.items.find(x=>x.knowledge===w.knowledge) || {};
      const mc = w.mastery<60 ? 'var(--coral-600)' : 'var(--yellow-600)';
      return `<div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-lg);padding:12px 14px;box-shadow:var(--shadow-sm)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:700;color:var(--text-1);font-size:14px">${w.knowledge}</div>
          <div style="font-weight:700;font-size:14px;color:${mc}">${w.mastery}%</div>
        </div>
        ${masteryBar(w.mastery)}
        <div style="display:flex;gap:10px;margin-top:8px;font-size:11.5px;color:var(--text-2)">
          <span>✅${w.correct}</span><span>❌${w.wrong}</span><span>⏰${w.timeout}</span><span>💡${w.hint}</span><span>⏱️均${w.avgTime}s</span>
        </div>
        <div style="background:var(--teal-50);border-radius:var(--radius-sm);padding:8px 10px;margin-top:8px;font-size:12px;color:var(--teal-700)">
          💡 <b>补救：</b>用「${r.recommendVisualName||'条形模型'}」练 ${r.exerciseCount||5} 题，${r.strategy||''}
        </div>
        <div style="font-size:11.5px;color:var(--text-3);margin-top:6px">🔍 真实掌握：${r.realMastery?'是 ✅':'否 ⚠️'}（${r.reason||''}）</div>
      </div>`;
    };
    return `<div style="display:flex;flex-direction:column;gap:10px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;color:var(--text-1);font-size:16px">🩺 漏洞检测报告</div>
        <div style="background:var(--coral);color:#fff;padding:3px 10px;border-radius:var(--radius-full);font-size:12px;font-weight:600">${analysis.summary}</div>
      </div>
      ${wp.length ? wp.map(card).join('') : `<div style="background:var(--teal-50);border-radius:var(--radius-lg);padding:20px;text-align:center;color:var(--teal-700);font-size:13px">🎉 暂无薄弱点，掌握得很好！</div>`}
      <div style="background:var(--navy-50);border-radius:var(--radius-md);padding:10px 12px;font-size:12px;color:var(--navy)">
        📊 算法：掌握度 = 正确率×60% + 用时合理性×20% + 不依赖提示×20%；薄弱点 = 掌握度&lt;60% 或 错误数&gt;正确数。
      </div>
    </div>`;
  }
};

// === 3. ProgressTracker 进度追踪引擎 ===
// 每日记录 / 周报 / 连续天数 / 进步对比 / 渲染
const ProgressTracker = {
  _fmt(d){ const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),da=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${da}`; },
  _weekStart(dateStr){
    const d = dateStr ? new Date(dateStr) : new Date();
    const dow = (d.getDay()+6)%7;
    d.setDate(d.getDate()-dow);
    return this._fmt(d);
  },
  _weekDates(weekStart){
    const arr=[]; const d=new Date(weekStart);
    for(let i=0;i<7;i++){ const dd=new Date(d); dd.setDate(d.getDate()+i); arr.push(this._fmt(dd)); }
    return arr;
  },

  // 记录每日学习数据
  recordDaily(state, date, data){
    if(!state.study) state.study = {lastDate:'',todayTime:0,totalTime:0,sessions:[],dailyRecords:{},weeklyPlans:{}};
    if(!state.study.dailyRecords) state.study.dailyRecords = {};
    state.study.dailyRecords[date] = {
      date,
      time: data.time || 0,
      mathTime: data.mathTime || 0,
      engTime: data.engTime || 0,
      accuracy: data.accuracy || 0,
      solvedCount: data.solvedCount || 0,
      newWords: data.newWords || 0,
      newKnowledge: data.newKnowledge || 0,
      ts: Date.now()
    };
    state.study.totalTime = (state.study.totalTime||0) + (data.time||0);
    state.study.lastDate = date;
    if(typeof saveState==='function') saveState();
    return state.study.dailyRecords[date];
  },

  // 生成本周回顾报告（本周 vs 上周对比）
  generateWeeklyReport(state, weekStart){
    const ws = weekStart || this._weekStart();
    const curDates = this._weekDates(ws);
    const prevStart = (()=>{ const d=new Date(ws); d.setDate(d.getDate()-7); return this._fmt(d); })();
    const prevDates = this._weekDates(prevStart);
    const recs = (state.study && state.study.dailyRecords) ? state.study.dailyRecords : {};
    const cur = curDates.map(d=>recs[d]).filter(Boolean);
    const prev = prevDates.map(d=>recs[d]).filter(Boolean);
    const sum = (arr,f)=>arr.reduce((s,x)=>s+(f(x)||0),0);
    const curDays = cur.length;
    const curTime = sum(cur, x=>x.time);
    const curAccuracy = cur.length ? Math.round(sum(cur, x=>x.accuracy)/cur.length) : 0;
    const curSolved = sum(cur, x=>x.solvedCount);
    const curWords = sum(cur, x=>x.newWords);
    const curKnowledge = sum(cur, x=>x.newKnowledge);
    const prevTime = sum(prev, x=>x.time);
    const prevAccuracy = prev.length ? Math.round(sum(prev, x=>x.accuracy)/prev.length) : 0;
    const prevSolved = sum(prev, x=>x.solvedCount);
    // 反复错误点：本周答错≥2次的知识点
    const log = (state.answerLog||[]).filter(a=>curDates.indexOf(a.date)>=0);
    const errKp = {};
    for(const a of log){ if(a.result==='wrong' || a.result==='timeout'){ errKp[a.knowledge] = (errKp[a.knowledge]||0)+1; } }
    const repeated = Object.keys(errKp).filter(k=>errKp[k]>=2).map(k=>({knowledge:k, count:errKp[k]}));
    repeated.sort((a,b)=>b.count-a.count);
    return {
      weekStart: ws, studyDays: curDays, totalTime: curTime, avgAccuracy: curAccuracy,
      solvedCount: curSolved, newWords: curWords, newKnowledge: curKnowledge,
      improvement: {
        time: curTime - prevTime,
        accuracy: curAccuracy - prevAccuracy,
        solved: curSolved - prevSolved
      },
      repeatedErrors: repeated,
      nextSuggestion: this._suggest(cur, repeated, curAccuracy, state),
      engV5Stats: this._engV5Stats(state)
    };
  },
  _engV5Stats(state){
    var v5 = (state && state.engV5) || {};
    return {
      completed: (v5.completed||[]).length,
      totalBoards: 8,
      listenStars: v5.listenStars||0,
      tprLevels: v5.tprLevels||0,
      booksRead: v5.booksRead||0,
      sentencePatterns: v5.sentencePatterns||0,
      notebookSize: (v5.notebook||[]).length,
      repeatAvg: v5.repeatCount ? Math.round(v5.repeatSum / v5.repeatCount) : 0
    };
  },
  _suggest(cur, repeated, acc, state){
    const tips=[];
    if(acc < 70) tips.push('正确率偏低，建议放慢节奏，多看可视化讲解后再练');
    else if(acc >= 90) tips.push('正确率很高，可挑战更难的拓展题');
    else tips.push('正确率良好，继续保持稳定的练习节奏');
    if(repeated.length) tips.push(`重点攻克反复错误点：${repeated.slice(0,3).map(r=>r.knowledge).join('、')}`);
    if(cur.length < 5) tips.push('本周学习天数偏少，建议保证每天40分钟');
    // V5 英语板块建议
    if(state && state.engV5){
      var v5 = state.engV5;
      var done = (v5.completed||[]).length;
      if(done < 8) tips.push('英语 V5 板块还有 ' + (8-done) + ' 个未完成，建议每天完成 1-2 个板块');
      if((v5.booksRead||0) < 3) tips.push('绘本阅读偏少，建议多读绘本培养语感');
      if(v5.repeatCount && v5.repeatCount > 0){
        var avg = Math.round(v5.repeatSum / v5.repeatCount);
        if(avg < 60) tips.push('英语跟读评分偏低（均分'+avg+'），建议多听原音再跟读');
      }
    }
    return tips;
  },

  // 计算连续学习天数
  calcStreak(state){
    const recs = (state.study && state.study.dailyRecords) ? state.study.dailyRecords : {};
    let streak=0; const d=new Date();
    for(let i=0;i<365;i++){
      const dd=new Date(d); dd.setDate(d.getDate()-i);
      const ds=this._fmt(dd);
      if(recs[ds] && recs[ds].time>0) streak++;
      else if(i===0) continue;       // 今天还没学不算中断
      else break;
    }
    return streak;
  },

  // 计算本周进步点（对比上周）
  calcImprovement(state){
    return this.generateWeeklyReport(state, this._weekStart()).improvement;
  },

  // 渲染周报 HTML
  renderWeeklyReport(state){
    const r = this.generateWeeklyReport(state);
    const imp = r.improvement;
    const fmtDelta = (v, higherBetter=true)=>{
      if(v===0) return `<span style="color:var(--text-3)">持平</span>`;
      const good = higherBetter ? v>0 : v<0;
      const arrow = v>0 ? '↑' : '↓';
      return `<span style="color:${good?'var(--teal)':'var(--coral)'}">${arrow}${Math.abs(v)}</span>`;
    };
    const statCard = (label, val, unit, delta, higherBetter)=>{
      return `<div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:12px;text-align:center">
        <div style="font-size:11px;color:var(--text-3)">${label}</div>
        <div style="font-size:22px;font-weight:700;color:var(--navy);margin:4px 0">${val}<span style="font-size:12px;color:var(--text-3);font-weight:400">${unit}</span></div>
        <div style="font-size:11px">${delta!=null ? fmtDelta(delta, higherBetter) : ''}</div>
      </div>`;
    };
    const repeatedHtml = r.repeatedErrors.length
      ? r.repeatedErrors.slice(0,5).map(e=>`<span style="background:var(--coral);color:#fff;padding:2px 8px;border-radius:var(--radius-full);font-size:11px;font-weight:600;margin:2px;display:inline-block">${e.knowledge} ×${e.count}</span>`).join('')
      : '<span style="color:var(--teal);font-size:12px">无反复错误点 🎉</span>';
    const suggestHtml = r.nextSuggestion.map((s,i)=>`<li style="margin:4px 0;font-size:12.5px;color:var(--text-2)">${i+1}. ${s}</li>`).join('');
    return `<div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;color:var(--text-1);font-size:16px">📈 本周学习周报 · ${r.weekStart} 起</div>
        <div style="background:var(--teal);color:#fff;padding:3px 10px;border-radius:var(--radius-full);font-size:12px;font-weight:600">连续 ${this.calcStreak(state)} 天 🔥</