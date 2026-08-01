// english-listening.js · 奇趣学园 V5 英语数据 · 自动生成
// 全局变量：window.LISTENING_DATA
// 内容：20套听力材料，覆盖3-6年级，每级5套
// 字段：id(唯一标识) title(标题) grade(年级3-6) level(难度1-5) type(类型:story/dialogue/song/rhyme/news) duration(时长) text(英文原文) cn(中文翻译) vocab(核心词汇) questions(理解题)
// questions字段：{q(问题) options(选项数组) answer(正确答案索引) cn(解析)}

window.LISTENING_DATA = [
  // ========== 三年级（5套 · 入门级 · 短句为主）==========
  {
    id:'lit_g3_01', title:'My New Classroom', grade:3, level:1, type:'story', duration:'~1min',
    text:'Hello! My name is Tom. I am nine years old. This is my new classroom. It is big and clean. There are many desks and chairs. The board is black. I have a new bag. It is blue. My teacher is Miss Wang. She is kind. I like my new classroom.',
    cn:'你好！我叫汤姆。我九岁了。这是我的新教室。它又大又干净。有很多桌子和椅子。黑板是黑色的。我有一个新书包。它是蓝色的。我的老师是王老师。她很和蔼。我喜欢我的新教室。',
    vocab:['hello','name','classroom','big','clean','desk','chair','bag','blue','teacher'],
    questions:[
      {q:'How old is Tom?', options:['Eight','Nine','Ten'], answer:1, cn:'Tom说他九岁了（I am nine years old）。'},
      {q:'What color is Toms bag?', options:['Red','Blue','Green'], answer:1, cn:'书包是蓝色的（It is blue）。'},
      {q:'Who is Toms teacher?', options:['Miss Wang','Mr. Li','Miss Chen'], answer:0, cn:'老师是王老师（My teacher is Miss Wang）。'}
    ]
  },
  {
    id:'lit_g3_02', title:'My Pet Cat', grade:3, level:1, type:'story', duration:'~1min',
    text:'I have a pet cat. Her name is Mimi. She is white and small. She has two big eyes and a pink nose. She likes fish and milk. She can run fast. She sleeps on my bed. I love Mimi very much. She is my best friend.',
    cn:'我有一只宠物猫。她叫咪咪。她是白色的，小小的。她有两只大眼睛和一个粉色的鼻子。她喜欢鱼和牛奶。她跑得很快。她睡在我的床上。我非常爱咪咪。她是我最好的朋友。',
    vocab:['pet','cat','white','small','eye','nose','fish','milk','run','sleep'],
    questions:[
      {q:'What is the cats name?', options:['Tom','Mimi','Lily'], answer:1, cn:'猫的名字是咪咪（Her name is Mimi）。'},
      {q:'What does Mimi like to eat?', options:['Fish and milk','Meat and rice','Bread and eggs'], answer:0, cn:'咪咪喜欢鱼和牛奶（She likes fish and milk）。'},
      {q:'Where does Mimi sleep?', options:['On the sofa','On the bed','On the floor'], answer:1, cn:'咪咪睡在床上（She sleeps on my bed）。'}
    ]
  },
  {
    id:'lit_g3_03', title:'Colors Around Me', grade:3, level:1, type:'rhyme', duration:'~30s',
    text:'Red, red, the apple is red. Yellow, yellow, the sun is yellow. Green, green, the grass is green. Blue, blue, the sky is blue. Black, black, the cat is black. White, white, the cloud is white. I see colors everywhere. Colors make the world so beautiful!',
    cn:'红色，红色，苹果是红色的。黄色，黄色，太阳是黄色的。绿色，绿色，小草是绿色的。蓝色，蓝色，天空是蓝色的。黑色，黑色，猫是黑色的。白色，白色，云是白色的。我到处看到颜色。颜色让世界如此美丽！',
    vocab:['red','yellow','green','blue','black','white','apple','sun','grass','sky'],
    questions:[
      {q:'What is red?', options:['The sun','The apple','The grass'], answer:1, cn:'苹果是红色的（the apple is red）。'},
      {q:'What is yellow?', options:['The sun','The sky','The cloud'], answer:0, cn:'太阳是黄色的（the sun is yellow）。'},
      {q:'What is green?', options:['The grass','The cat','The apple'], answer:0, cn:'小草是绿色的（the grass is green）。'}
    ]
  },
  {
    id:'lit_g3_04', title:'A Day at School', grade:3, level:2, type:'story', duration:'~1min',
    text:'Today is Monday. I go to school at seven. I have four classes in the morning. I learn English, math, Chinese and art. I eat lunch at school. The food is yummy. In the afternoon, I play with my friends. We run and jump. School is fun!',
    cn:'今天是星期一。我七点去上学。我上午有四节课。我学英语、数学、语文和美术。我在学校吃午饭。食物很好吃。下午，我和朋友们一起玩。我们跑啊跳啊。上学真有趣！',
    vocab:['Monday','school','seven','class','English','math','lunch','yummy','afternoon','fun'],
    questions:[
      {q:'What day is today?', options:['Monday','Tuesday','Friday'], answer:0, cn:'今天是星期一（Today is Monday）。'},
      {q:'How many classes in the morning?', options:['Three','Four','Five'], answer:1, cn:'上午有四节课（four classes in the morning）。'},
      {q:'How is the food at school?', options:['Bad','Yummy','Cold'], answer:1, cn:'食物很好吃（The food is yummy）。'}
    ]
  },
  {
    id:'lit_g3_05', title:'My Body', grade:3, level:1, type:'rhyme', duration:'~30s',
    text:'Head, shoulders, knees and toes, knees and toes. Head, shoulders, knees and toes, eyes and ears and mouth and nose. I have two eyes to see. I have two ears to hear. I have one nose to smell. I have one mouth to eat. I love my body!',
    cn:'头，肩膀，膝盖和脚趾，膝盖和脚趾。头，肩膀，膝盖和脚趾，眼睛和耳朵和嘴巴和鼻子。我有两只眼睛来看。我有两只耳朵来听。我有一个鼻子来闻。我有一张嘴巴来吃。我爱我的身体！',
    vocab:['head','shoulder','knee','toe','eye','ear','mouth','nose','body'],
    questions:[
      {q:'How many eyes do you have?', options:['One','Two','Three'], answer:1, cn:'我有两只眼睛（I have two eyes）。'},
      {q:'What do you use to smell?', options:['Eyes','Nose','Ears'], answer:1, cn:'用鼻子闻（one nose to smell）。'},
      {q:'What do you use to hear?', options:['Ears','Mouth','Eyes'], answer:0, cn:'用耳朵听（two ears to hear）。'}
    ]
  },

  // ========== 四年级（5套 · 基础级 · 完整叙述）==========
  {
    id:'lit_g4_01', title:'My Family', grade:4, level:2, type:'story', duration:'~1.5min',
    text:'There are four people in my family: my father, my mother, my little sister and me. My father is tall and strong. He is a doctor. He helps sick people. My mother is kind and beautiful. She is a teacher. She teaches English. My sister is five years old. She is cute. She likes drawing pictures. I love my family very much. We are happy together.',
    cn:'我家有四口人：爸爸、妈妈、妹妹和我。爸爸又高又壮。他是一名医生。他帮助病人。妈妈又善良又美丽。她是一名老师。她教英语。我的妹妹五岁了。她很可爱。她喜欢画画。我非常爱我的家人。我们在一起很快乐。',
    vocab:['family','father','mother','sister','doctor','teacher','tall','strong','kind','cute'],
    questions:[
      {q:'How many people are in the family?', options:['Three','Four','Five'], answer:1, cn:'家里有四口人（four people）。'},
      {q:'What does the father do?', options:['Teacher','Doctor','Driver'], answer:1, cn:'爸爸是医生（He is a doctor）。'},
      {q:'What does the sister like to do?', options:['Drawing','Singing','Swimming'], answer:0, cn:'妹妹喜欢画画（She likes drawing pictures）。'}
    ]
  },
  {
    id:'lit_g4_02', title:'A Trip to the Zoo', grade:4, level:2, type:'story', duration:'~1.5min',
    text:'Last Sunday, I went to the zoo with my mom and dad. We saw many animals. The elephants were big and strong. They had long noses. The monkeys were funny. They jumped from tree to tree. The pandas were cute. They ate bamboo. The tigers were scary. They had orange and black stripes. My favorite animal was the panda. I took many photos. It was a great day!',
    cn:'上周日，我和爸爸妈妈去了动物园。我们看到了很多动物。大象又大又壮。它们有长长的鼻子。猴子很有趣。它们在树之间跳来跳去。熊猫很可爱。它们吃竹子。老虎很吓人。它们有橙色和黑色的条纹。我最喜欢的动物是熊猫。我拍了很多照片。这是美好的一天！',
    vocab:['zoo','elephant','monkey','panda','tiger','big','funny','cute','scary','favorite'],
    questions:[
      {q:'When did they go to the zoo?', options:['Saturday','Sunday','Monday'], answer:1, cn:'上周日去的（Last Sunday）。'},
      {q:'What animal was funny?', options:['Elephant','Monkey','Tiger'], answer:1, cn:'猴子很有趣（The monkeys were funny）。'},
      {q:'What was the favorite animal?', options:['Panda','Elephant','Tiger'], answer:0, cn:'最喜欢熊猫（favorite animal was the panda）。'}
    ]
  },
  {
    id:'lit_g4_03', title:'Weather and Seasons', grade:4, level:2, type:'dialogue', duration:'~1.5min',
    text:'Tom: Hi Lily, what is your favorite season? Lily: My favorite season is spring. The flowers bloom and the weather is warm. What about you? Tom: I like summer best. I can swim in the pool and eat ice cream. Lily: Summer is hot. Do you like winter? Tom: No, winter is too cold. But I like snow. We can make a snowman. Lily: That sounds fun! Autumn is nice too. The leaves turn yellow and red. Tom: Yes, every season is special.',
    cn:'汤姆：嗨，莉莉，你最喜欢什么季节？莉莉：我最喜欢春天。花儿开放，天气温暖。你呢？汤姆：我最喜欢夏天。我可以在泳池游泳，吃冰激凌。莉莉：夏天很热。你喜欢冬天吗？汤姆：不，冬天太冷了。但我喜欢雪。我们可以堆雪人。莉莉：听起来很有趣！秋天也不错。树叶变黄变红。汤姆：是的，每个季节都很特别。',
    vocab:['season','spring','summer','autumn','winter','flower','warm','hot','cold','snow'],
    questions:[
      {q:'What is Lilys favorite season?', options:['Spring','Summer','Winter'], answer:0, cn:'莉莉喜欢春天（favorite season is spring）。'},
      {q:'What can Tom do in summer?', options:['Swim and eat ice cream','Make a snowman','See flowers'], answer:0, cn:'汤姆夏天可以游泳和吃冰激凌。'},
      {q:'What happens in autumn?', options:['Snow falls','Leaves turn yellow and red','Flowers bloom'], answer:1, cn:'秋天树叶变黄变红（leaves turn yellow and red）。'}
    ]
  },
  {
    id:'lit_g4_04', title:'My Best Friend', grade:4, level:3, type:'story', duration:'~1.5min',
    text:'My best friend is Jack. He is ten years old. He has short black hair and big brown eyes. He is tall and thin. Jack is very good at sports. He can play basketball and football. He runs very fast. Jack is also kind and helpful. He helps me with my homework. We play together after school. We go to the park on weekends. Jack always shares his snacks with me. I am lucky to have a friend like Jack.',
    cn:'我最好的朋友是杰克。他十岁了。他有黑色的短头发和棕色的大眼睛。他又高又瘦。杰克非常擅长运动。他会打篮球和踢足球。他跑得很快。杰克也很善良、乐于助人。他帮我做作业。放学后我们一起玩。周末我们去公园。杰克总是和我分享他的零食。我很幸运有杰克这样的朋友。',
    vocab:['friend','hair','eye','tall','thin','sport','basketball','football','kind','helpful'],
    questions:[
      {q:'How old is Jack?', options:['Nine','Ten','Eleven'], answer:1, cn:'杰克十岁了（ten years old）。'},
      {q:'What is Jack good at?', options:['Sports','Music','Art'], answer:0, cn:'杰克擅长运动（good at sports）。'},
      {q:'What do they do on weekends?', options:['Go to the park','Play football','Do homework'], answer:0, cn:'周末去公园（go to the park on weekends）。'}
    ]
  },
  {
    id:'lit_g4_05', title:'Shopping Day', grade:4, level:3, type:'dialogue', duration:'~1.5min',
    text:'Mom: Let us go shopping today, Tom. Tom: Great! What do we need to buy? Mom: We need some apples, milk, bread and eggs. Tom: Can we buy some chocolate too? Mom: OK, but just one bar. Tom: Thank you, Mom! Mom: The apples are five yuan. The milk is eight yuan. The bread is six yuan. Tom: How much is the chocolate? Mom: It is ten yuan. Tom: That is a lot! Mom: Dont worry. Let us pay at the counter.',
    cn:'妈妈：汤姆，今天我们去购物吧。汤姆：太好了！我们需要买什么？妈妈：我们需要一些苹果、牛奶、面包和鸡蛋。汤姆：我们也可以买巧克力吗？妈妈：好的，但只能买一条。汤姆：谢谢妈妈！妈妈：苹果五元。牛奶八元。面包六元。汤姆：巧克力多少钱？妈妈：十元。汤姆：好多啊！妈妈：别担心。我们去柜台付款吧。',
    vocab:['shopping','buy','apple','milk','bread','egg','chocolate','yuan','pay','counter'],
    questions:[
      {q:'What do they need to buy?', options:['Apples, milk, bread and eggs','Bananas, juice and cake','Rice, meat and fish'], answer:0, cn:'需要苹果、牛奶、面包和鸡蛋。'},
      {q:'How much is the milk?', options:['Five yuan','Eight yuan','Ten yuan'], answer:1, cn:'牛奶八元（eight yuan）。'},
      {q:'How much is the chocolate?', options:['Six yuan','Eight yuan','Ten yuan'], answer:2, cn:'巧克力十元（ten yuan）。'}
    ]
  },

  // ========== 五年级（5套 · 进阶级 · 复合句型）==========
  {
    id:'lit_g5_01', title:'My Weekend Plan', grade:5, level:3, type:'dialogue', duration:'~2min',
    text:'Emma: Hi Leo, what are you going to do this weekend? Leo: I am going to visit my grandmother. She lives in the countryside. What about you? Emma: I will go to the cinema with my sister. We want to see a new movie about space. Leo: That sounds exciting! When will you go? Emma: On Saturday afternoon. Would you like to come with us? Leo: I would love to, but I will be at my grandmothers house. Maybe next time. Emma: Sure! Lets go together next weekend. Leo: Great idea! Have fun at the cinema. Emma: Thanks! Enjoy your time with your grandmother.',
    cn:'艾玛：嗨，里奥，这个周末你打算做什么？里奥：我要去看望奶奶。她住在乡下。你呢？艾玛：我要和姐姐去电影院。我们想看一部关于太空的新电影。里奥：听起来很刺激！你们什么时候去？艾玛：星期六下午。你想一起去吗？里奥：我想去，但我会在奶奶家。也许下次吧。艾玛：好的！下周末我们一起去。里奥：好主意！祝你在电影院玩得开心。艾玛：谢谢！祝你和奶奶度过愉快的时光。',
    vocab:['weekend','visit','grandmother','countryside','cinema','sister','movie','space','Saturday','exciting'],
    questions:[
      {q:'What will Leo do this weekend?', options:['Visit his grandmother','Go to the cinema','Play football'], answer:0, cn:'里奥要去看奶奶（visit my grandmother）。'},
      {q:'What movie does Emma want to see?', options:['A movie about animals','A movie about space','A movie about sports'], answer:1, cn:'关于太空的电影（about space）。'},
      {q:'When will Emma go to the cinema?', options:['Friday evening','Saturday afternoon','Sunday morning'], answer:1, cn:'星期六下午去（Saturday afternoon）。'}
    ]
  },
  {
    id:'lit_g5_02', title:'The Great Wall of China', grade:5, level:4, type:'story', duration:'~2min',
    text:'The Great Wall of China is one of the most famous places in the world. It is very long and very old. People built it over two thousand years ago. It was built to protect China from enemies. The Wall goes over mountains and through valleys. It is more than six thousand kilometers long! Many tourists from all over the world come to visit it every year. Some parts of the Wall are easy to climb. Other parts are very steep. Walking on the Great Wall is tiring but exciting. From the top, you can see beautiful mountains and green trees. The Great Wall is a symbol of China. Chinese people say, "He who has never been to the Great Wall is not a true man."',
    cn:'中国长城是世界上最著名的地方之一。它非常长，非常古老。人们在两千多年前建造了它。建造它是为了保护中国不受敌人侵犯。长城越过山脉，穿过山谷。它有六千多公里长！每年有很多来自世界各地的游客来参观。长城有些部分很容易爬。其他部分非常陡峭。在长城上行走很累但很激动人心。从顶部你可以看到美丽的山脉和绿树。长城是中国的象征。中国人说：不到长城非好汉。',
    vocab:['Great Wall','famous','world','long','old','build','protect','mountain','tourist','symbol'],
    questions:[
      {q:'How old is the Great Wall?', options:['Over 200 years','Over 2000 years','Over 20000 years'], answer:1, cn:'有两千多年历史（over two thousand years ago）。'},
      {q:'How long is the Great Wall?', options:['More than 6000 km','More than 600 km','More than 60000 km'], answer:0, cn:'六千多公里长（more than six thousand kilometers）。'},
      {q:'Why was the Great Wall built?', options:['For tourists','To protect China','For sports'], answer:1, cn:'为了保护中国（to protect China from enemies）。'}
    ]
  },
  {
    id:'lit_g5_03', title:'A Letter to Grandma', grade:5, level:3, type:'story', duration:'~2min',
    text:'Dear Grandma, How are you? I miss you very much. I am writing this letter to tell you about my new school life. My new school is big and beautiful. There are many trees and flowers in it. My classmates are friendly. My best friend here is a girl named Sarah. She has long hair and she wears glasses. We often read books together in the library. My favorite subject is science because we can do fun experiments. Last week, we made a volcano! It was so cool. I also joined the school choir. We practice singing every Wednesday. I hope you can come and visit us soon. I will cook noodles for you. Love, Lily',
    cn:'亲爱的奶奶，您好吗？我非常想念您。我写这封信想告诉您我的新学校生活。我的新学校又大又漂亮。里面有很多树和花。我的同学很友好。我这里最好的朋友是一个叫莎拉的女孩。她有长头发，戴眼镜。我们经常一起在图书馆读书。我最喜欢的科目是科学，因为我们可以做有趣的实验。上周，我们做了一个火山！太酷了。我还加入了学校合唱团。我们每周三练习唱歌。希望您能快点来看我们。我会为您做面条。爱你的，莉莉',
    vocab:['letter','grandma','miss','school','classmate','friendly','library','science','experiment','choir'],
    questions:[
      {q:'Who is Lilys best friend?', options:['Emma','Sarah','Anna'], answer:1, cn:'最好的朋友是莎拉（Sarah）。'},
      {q:'What is Lilys favorite subject?', options:['English','Math','Science'], answer:2, cn:'最喜欢的科目是科学（science）。'},
      {q:'When does the choir practice?', options:['Monday','Wednesday','Friday'], answer:1, cn:'每周三练习（every Wednesday）。'}
    ]
  },
  {
    id:'lit_g5_04', title:'Healthy Habits', grade:5, level:4, type:'story', duration:'~2min',
    text:'Being healthy is very important. Here are some good habits to stay healthy. First, we should eat healthy food. We should eat more vegetables and fruits. We should not eat too much junk food or candy. Second, we should drink enough water every day. We need about eight glasses of water. Third, we should exercise every day. We can run, swim, or play sports. Exercise makes our bodies strong. Fourth, we should sleep early and get up early. Children need about ten hours of sleep every night. Finally, we should wash our hands before meals and after using the bathroom. Good habits help us grow strong and stay happy. Lets start today!',
    cn:'保持健康非常重要。这里有一些保持健康的好习惯。首先，我们应该吃健康的食物。我们应该多吃蔬菜和水果。我们不应该吃太多垃圾食品或糖果。其次，我们每天应该喝足够的水。我们需要大约八杯水。第三，我们每天应该锻炼。我们可以跑步、游泳或做运动。锻炼使我们的身体强壮。第四，我们应该早睡早起。孩子们每天晚上需要大约十个小时的睡眠。最后，我们应该在饭前和上完厕所后洗手。好习惯帮助我们长得强壮，保持快乐。让我们从今天开始！',
    vocab:['healthy','habit','vegetable','fruit','water','exercise','strong','sleep','early','wash'],
    questions:[
      {q:'What should we eat more of?', options:['Junk food','Vegetables and fruits','Candy'], answer:1, cn:'多吃蔬菜和水果（more vegetables and fruits）。'},
      {q:'How much water do we need daily?', options:['About 5 glasses','About 8 glasses','About 12 glasses'], answer:1, cn:'大约八杯水（about eight glasses）。'},
      {q:'How many hours of sleep do children need?', options:['About 8 hours','About 10 hours','About 12 hours'], answer:1, cn:'大约十小时（about ten hours）。'}
    ]
  },
  {
    id:'lit_g5_05', title:'The Magic Bookstore', grade:5, level:4, type:'story', duration:'~2min',
    text:'One day after school, Tom found a small bookstore on his way home. The door was old and the sign said "Magic Books." He walked inside. An old man with white hair smiled at him. "Welcome, young friend," the man said. "Every book here can take you to a different world." Tom picked up a blue book. When he opened it, he was suddenly in a forest! The trees were tall and the birds could talk. A small rabbit ran up to him. "Hello! Are you lost?" the rabbit asked. Tom was surprised. "You can talk!" he said. The rabbit laughed. "Of course! This is the magic forest." Tom had a wonderful adventure. When he closed the book, he was back in the bookstore. "Did you enjoy it?" the old man asked. Tom smiled. "It was amazing! Can I come back tomorrow?"',
    cn:'一天放学后，汤姆在回家的路上发现了一家小书店。门很旧，牌子上写着"魔法书店"。他走了进去。一个白发老人对他微笑。"欢迎你，小朋友，"老人说。"这里的每本书都能带你去不同的世界。"汤姆拿起一本蓝色的书。当他打开它时，他突然来到了一片森林！树很高，鸟会说话。一只小兔子跑向他。"你好！你迷路了吗？"兔子问。汤姆很惊讶。"你会说话！"他说。兔子笑了。"当然！这是魔法森林。"汤姆经历了一次奇妙的冒险。当他合上书时，他回到了书店。"你喜欢吗？"老人问。汤姆笑了。"太棒了！我明天还能来吗？"',
    vocab:['bookstore','magic','book','world','forest','tree','bird','rabbit','adventure','amazing'],
    questions:[
      {q:'What did Tom find on his way home?', options:['A library','A magic bookstore','A school'], answer:1, cn:'发现了一家魔法书店（magic bookstore）。'},
      {q:'What color was the book Tom picked up?', options:['Red','Blue','Green'], answer:1, cn:'蓝色的书（a blue book）。'},
      {q:'What animal could talk in the forest?', options:['A bird','A rabbit','Both bird and rabbit'], answer:2, cn:'鸟和兔子都会说话（birds could talk, rabbit asked him）。'}
    ]
  },

  // ========== 六年级（5套 · 提高级 · 过去/将来时态）==========
  {
    id:'lit_g6_01', title:'My Summer Vacation', grade:6, level:4, type:'story', duration:'~2.5min',
    text:'Last summer vacation, I went to Beijing with my parents. We went there by train. It took about five hours. On the first day, we visited the Great Wall. It was very long and magnificent. I felt tired but excited. On the second day, we went to the Forbidden City. It was beautiful. I learned a lot about Chinese history. On the third day, we ate Beijing roast duck for dinner. It was delicious! We also visited the Summer Palace. The lake was so beautiful. I took many photos. I bought some gifts for my friends. We stayed in Beijing for five days. It was the best vacation of my life. I hope I can go there again next year.',
    cn:'去年暑假，我和父母去了北京。我们坐火车去的。大约花了五个小时。第一天，我们参观了长城。它又长又壮观。我感到很累但很兴奋。第二天，我们去了故宫。它很美丽。我学到了很多关于中国历史的知识。第三天，我们晚饭吃了北京烤鸭。太好吃了！我们还参观了颐和园。湖很美丽。我拍了很多照片。我给朋友们买了一些礼物。我们在北京待了五天。这是我一生中最棒的假期。我希望明年还能去那里。',
    vocab:['vacation','Beijing','train','Great Wall','magnificent','Forbidden City','history','duck','delicious','photo'],
    questions:[
      {q:'How did they go to Beijing?', options:['By plane','By train','By bus'], answer:1, cn:'坐火车去的（by train）。'},
      {q:'What did they do on the second day?', options:['Visited the Great Wall','Visited the Forbidden City','Ate roast duck'], answer:1, cn:'第二天去了故宫（Forbidden City）。'},
      {q:'How long did they stay in Beijing?', options:['Three days','Five days','Seven days'], answer:1, cn:'待了五天（five days）。'}
    ]
  },
  {
    id:'lit_g6_02', title:'Protecting Our Earth', grade:6, level:5, type:'story', duration:'~2.5min',
    text:'Our Earth is our home, but it is in danger. There are many environmental problems we must solve. First, there is too much pollution. The air is dirty in many cities. We should drive less and ride bikes or walk more. Second, we are using too much plastic. Plastic bags and bottles take hundreds of years to break down. We should use reusable bags and bottles. Third, we are cutting down too many trees. Trees give us oxygen and clean the air. We should plant more trees and use less paper. Fourth, many animals are losing their homes because of climate change. We should save energy by turning off lights when we leave a room. Everyone can do something to help. If we work together, we can make the Earth a better place. Remember: there is only one Earth!',
    cn:'我们的地球是我们的家园，但它正处于危险之中。有很多环境问题我们必须解决。首先，污染太严重了。很多城市的空气很脏。我们应该少开车，多骑自行车或步行。其次，我们使用了太多塑料。塑料袋和塑料瓶需要几百年才能分解。我们应该使用可重复使用的袋子和瓶子。第三，我们砍伐了太多树木。树木给我们氧气并净化空气。我们应该种更多的树，少用纸。第四，由于气候变化，许多动物正在失去家园。我们应该通过离开房间时关灯来节约能源。每个人都可以做些事情来帮忙。如果我们一起努力，我们可以让地球变得更美好。记住：只有一个地球！',
    vocab:['Earth','danger','pollution','air','plastic','tree','oxygen','animal','climate','energy'],
    questions:[
      {q:'What should we do instead of driving?', options:['Ride bikes or walk','Take more planes','Buy more cars'], answer:0, cn:'应该多骑车或步行（ride bikes or walk more）。'},
      {q:'How long does plastic take to break down?', options:['A few years','Tens of years','Hundreds of years'], answer:2, cn:'需要几百年（hundreds of years）。'},
      {q:'What do trees give us?', options:['Plastic','Oxygen','Pollution'], answer:1, cn:'树木给我们氧气（oxygen）。'}
    ]
  },
  {
    id:'lit_g6_03', title:'A Job Interview', grade:6, level:5, type:'dialogue', duration:'~2.5min',
    text:'Manager: Good morning! Please have a seat. Can you introduce yourself? Tom: Good morning! My name is Tom. I am twenty-two years old. I graduated from university last year. My major was computer science. Manager: Why do you want to work at our company? Tom: Your company is famous for making great software. I love programming and I want to learn from the best. Manager: What are your strengths? Tom: I am hardworking and I learn quickly. I also work well in a team. Manager: Do you have any experience? Tom: Yes, I worked at a small company for one year. I helped build a website. Manager: That sounds good. What are your hobbies? Tom: I like reading books, playing basketball and traveling. Manager: Great! Do you have any questions for us? Tom: Yes, what is the working schedule? Manager: We work from nine to five, Monday to Friday. Tom: That sounds perfect. Thank you for the interview. Manager: You are welcome. We will call you next week.',
    cn:'经理：早上好！请坐。能介绍一下你自己吗？汤姆：早上好！我叫汤姆。我二十二岁。我去年大学毕业。我的专业是计算机科学。经理：你为什么想来我们公司工作？汤姆：贵公司以制作优秀的软件而闻名。我喜欢编程，我想向最优秀的人学习。经理：你有什么优点？汤姆：我勤奋，学得快。我也擅长团队合作。经理：你有经验吗？汤姆：有，我在一家小公司工作了一年。我帮忙建了一个网站。经理：听起来不错。你有什么爱好？汤姆：我喜欢读书、打篮球和旅行。经理：很好！你有什么问题要问我们吗？汤姆：有的，工作时间是怎样的？经理：我们周一到周五，九点到五点上班。汤姆：听起来很完美。谢谢您的面试。经理：不客气。我们下周会给你打电话。',
    vocab:['interview','manager','introduce','university','major','company','software','programming','strength','experience'],
    questions:[
      {q:'What was Toms major?', options:['Computer science','Business','English'], answer:0, cn:'专业是计算机科学（computer science）。'},
      {q:'How long did Tom work at the small company?', options:['Half a year','One year','Two years'], answer:1, cn:'工作了一年（one year）。'},
      {q:'What is the working schedule?', options:['9 to 5, Mon-Fri','8 to 6, Mon-Sat','10 to 4, Tue-Fri'], answer:0, cn:'周一到周五九点到五点（nine to five, Monday to Friday）。'}
    ]
  },
  {
    id:'lit_g6_04', title:'My Dream', grade:6, level:5, type:'story', duration:'~2.5min',
    text:'When I grow up, I want to be an astronaut. I have had this dream since I was five years old. That year, my father took me to a space museum. I saw rockets and spacesuits. I was amazed. Since then, I have read many books about space. I learned about the moon, the stars and the planets. I also watched many videos about astronauts. They float in space and do experiments. It looks so exciting! To become an astronaut, I need to study hard. I must be good at math and science. I also need to exercise every day to keep my body strong. Astronauts must be healthy and brave. I know it is not easy. Only a few people can become astronauts. But I will never give up. I believe that one day, I will fly to the moon and see the Earth from space. That will be the most wonderful moment of my life.',
    cn:'长大后，我想成为一名宇航员。我从五岁起就有这个梦想。那一年，爸爸带我去了一个太空博物馆。我看到了火箭和宇航服。我很惊讶。从那以后，我读了很多关于太空的书。我了解了月球、星星和行星。我也看了很多关于宇航员的视频。他们在太空中漂浮，做实验。看起来太刺激了！要成为一名宇航员，我需要努力学习。我必须擅长数学和科学。我还需要每天锻炼，保持身体强壮。宇航员必须健康和勇敢。我知道这不容易。只有少数人能成为宇航员。但我永远不会放弃。我相信有一天，我会飞到月球，从太空看地球。那将是我一生中最美妙的时刻。',
    vocab:['dream','astronaut','space','museum','rocket','star','planet','experiment','math','science'],
    questions:[
      {q:'When did the speaker have this dream?', options:['At age 3','At age 5','At age 10'], answer:1, cn:'五岁时有了这个梦想（since I was five）。'},
      {q:'What subjects must the speaker be good at?', options:['Math and science','English and art','Music and PE'], answer:0, cn:'必须擅长数学和科学（math and science）。'},
      {q:'Where does the speaker want to fly?', options:['To Mars','To the moon','To the sun'], answer:1, cn:'想飞到月球（fly to the moon）。'}
    ]
  },
  {
    id:'lit_g6_05', title:'The School Sports Day', grade:6, level:4, type:'story', duration:'~2.5min',
    text:'Yesterday was our school sports day. All the students were very excited. The weather was sunny and warm. There were many events: running races, long jump, high jump and relay races. The first event was the one hundred meter race. Tom won first place. He ran very fast. His classmates cheered for him loudly. Next was the long jump. Lily jumped the farthest. She was very proud. Then came the relay race. Four students from each class ran together as a team. Our class practiced a lot. We passed the baton smoothly. We won first place! Everyone was so happy. In the afternoon, the teacher gave out medals. Our class got the most medals. We were the champion! After the sports day, we were tired but happy. Sports teach us teamwork and fair play. I am looking forward to next years sports day.',
    cn:'昨天是我们学校的运动会。所有的学生都非常兴奋。天气晴朗温暖。有很多项目：跑步比赛、跳远、跳高和接力赛。第一个项目是一百米赛跑。汤姆得了第一名。他跑得非常快。他的同学大声为他加油。接下来是跳远。莉莉跳得最远。她非常自豪。然后是接力赛。每个班四名学生作为一个团队一起跑。我们班练习了很多。我们顺利地传递了接力棒。我们得了第一名！每个人都很开心。下午，老师颁发了奖牌。我们班得到了最多的奖牌。我们是冠军！运动会结束后，我们虽然累但很开心。运动教会我们团队合作和公平竞争。我期待着明年的运动会。',
    vocab:['sports','race','jump','relay','meter','win','first','cheer','medal','champion'],
    questions:[
      {q:'What was the weather like?', options:['Rainy and cold','Sunny and warm','Cloudy and cool'], answer:1, cn:'晴朗温暖（sunny and warm）。'},
      {q:'Who won the 100 meter race?', options:['Tom','Lily','Jack'], answer:0, cn:'汤姆赢了百米赛跑（Tom won first place）。'},
      {q:'What did their class win?', options:['The relay race only','The most medals','Nothing'], answer:1, cn:'获得了最多的奖牌（the most medals）。'}
    ]
  }
];
