// data/listening-radio.js · 奇趣学园 V5 · 磨耳朵短文数据
// 全局变量：window.RADIO_DATA
// 内容：20 段短文，10 个主题 × 2 段，适合"磨耳朵"泛听场景
// 字段：id(唯一标识) theme(主题) level(难度1-3) text(英文短文) cn(中文翻译)
//   vocab(核心词汇) tags(标签数组)

window.RADIO_DATA = [
  // ========== 1. 家庭 ==========
  {
    id: 'radio-family-01',
    theme: 'family',
    level: 1,
    text: 'I have a happy family. There are four people in my family. My dad is a teacher. My mom is a nurse. I have a little brother. He is five years old. We love each other very much.',
    cn: '我有一个幸福的家庭。家里有四口人。爸爸是老师。妈妈是护士。我有一个小弟弟。他五岁了。我们非常相爱。',
    vocab: ['happy', 'family', 'teacher', 'nurse', 'brother', 'love'],
    tags: ['family', 'people', 'job']
  },
  {
    id: 'radio-family-02',
    theme: 'family',
    level: 2,
    text: 'Every weekend, my family does something fun together. On Saturday, we go to the park. On Sunday, we cook a big dinner. My dad makes noodles. My mom makes salad. My brother and I set the table. We eat and talk about our week. It is the best time of the week.',
    cn: '每个周末，我的家人一起做有趣的事。周六我们去公园。周日我们做一顿丰盛的大餐。爸爸做面条。妈妈做沙拉。弟弟和我摆桌子。我们一边吃一边聊这一周的事。这是一周中最棒的时光。',
    vocab: ['weekend', 'together', 'park', 'dinner', 'noodles', 'salad', 'table'],
    tags: ['family', 'weekend', 'activities']
  },
  // ========== 2. 学校 ==========
  {
    id: 'radio-school-01',
    theme: 'school',
    level: 1,
    text: 'I go to school from Monday to Friday. I have six classes every day. My favorite subject is English. I like to read storybooks at school. After school, I play with my classmates. We run and laugh on the playground.',
    cn: '我周一到周五上学。我每天有六节课。我最喜欢的科目是英语。我喜欢在学校读故事书。放学后，我和同学一起玩。我们在操场上奔跑欢笑。',
    vocab: ['Monday', 'Friday', 'subject', 'English', 'storybook', 'classmate', 'playground'],
    tags: ['school', 'subjects', 'daily']
  },
  {
    id: 'radio-school-02',
    theme: 'school',
    level: 2,
    text: 'Today we had a special class. The teacher brought a big box to the classroom. Inside the box were different animals. We had a hamster, a turtle, and a parrot. Each student got a turn to hold an animal. I held the hamster. It was soft and warm. I learned that animals can be our good friends.',
    cn: '今天我们有了一节特别的课。老师带了一个大盒子到教室。盒子里有不同的动物。我们有一只仓鼠、一只乌龟和一只鹦鹉。每个学生都有机会抱一只动物。我抱了仓鼠。它又软又暖。我学到了动物可以成为我们的好朋友。',
    vocab: ['special', 'classroom', 'hamster', 'turtle', 'parrot', 'animal', 'friend'],
    tags: ['school', 'animals', 'learning']
  },
  // ========== 3. 自然 ==========
  {
    id: 'radio-nature-01',
    theme: 'nature',
    level: 1,
    text: 'In the forest, there are many tall trees. Birds sing in the trees. Squirrels run from branch to branch. A little deer drinks water from the river. The sun shines through the leaves. It is quiet and beautiful.',
    cn: '森林里有很多高大的树。鸟儿在树上唱歌。松鼠从一根树枝跳到另一根树枝。小鹿在河边喝水。阳光透过树叶照下来。那里安静又美丽。',
    vocab: ['forest', 'trees', 'birds', 'squirrel', 'deer', 'river', 'sun'],
    tags: ['nature', 'animals', 'forest']
  },
  {
    id: 'radio-nature-02',
    theme: 'nature',
    level: 2,
    text: 'Last weekend, I went to the beach with my family. The sand was soft and warm. I built a big sandcastle. My brother found a shiny shell. We saw crabs running on the beach. The waves came in and washed our feet. It was so much fun!',
    cn: '上周末，我和家人去了海边。沙子又软又暖。我堆了一个大沙堡。弟弟找到了一只闪亮的贝壳。我们看到螃蟹在沙滩上跑。海浪涌来，冲洗着我们的脚。太好玩了！',
    vocab: ['beach', 'sand', 'castle', 'shell', 'crab', 'wave', 'fun'],
    tags: ['nature', 'beach', 'weekend']
  },
  // ========== 4. 食物 ==========
  {
    id: 'radio-food-01',
    theme: 'food',
    level: 1,
    text: 'I like to eat breakfast every morning. My mom makes eggs and toast. I drink a glass of milk. I also eat an apple. Breakfast gives me energy for the day. It is the most important meal.',
    cn: '我每天早上喜欢吃早餐。妈妈做鸡蛋和烤面包。我喝一杯牛奶。我还吃一个苹果。早餐给我一天的能量。这是最重要的一餐。',
    vocab: ['breakfast', 'eggs', 'toast', 'milk', 'apple', 'energy', 'meal'],
    tags: ['food', 'breakfast', 'healthy']
  },
  {
    id: 'radio-food-02',
    theme: 'food',
    level: 2,
    text: 'Today at school, we made fruit salad in the cooking class. I cut strawberries, bananas, and grapes. My friend cut oranges and kiwis. The teacher mixed everything in a big bowl. We added some honey. It tasted sweet and tangy. Everyone loved it!',
    cn: '今天在学校，我们在烹饪课上了做水果沙拉。我切了草莓、香蕉和葡萄。朋友切了橙子和猕猴桃。老师把所有东西混在大碗里。我们加了一些蜂蜜。尝起来又甜又带点酸。每个人都喜欢！',
    vocab: ['fruit', 'salad', 'strawberry', 'banana', 'grape', 'orange', 'honey'],
    tags: ['food', 'cooking', 'school']
  },
  // ========== 5. 运动 ==========
  {
    id: 'radio-sports-01',
    theme: 'sports',
    level: 1,
    text: 'I like sports. Every day after school, I play football with my friends. We kick the ball and run fast. Sometimes we score goals. Sometimes we miss. But we always have fun. Sports make me strong and healthy.',
    cn: '我喜欢运动。每天放学后，我和朋友踢足球。我们踢球、 fast 跑。有时候进球。有时候没进。但我们总是很开心。运动让我强壮健康。',
    vocab: ['sports', 'football', 'kick', 'ball', 'goal', 'strong', 'healthy'],
    tags: ['sports', 'football', 'daily']
  },
  {
    id: 'radio-sports-02',
    theme: 'sports',
    level: 2,
    text: 'Last month, our school held a sports day. I ran in the 100-meter race. My heart beat fast. The starting gun went bang! I ran as fast as I could. I crossed the finish line third. I was tired but happy. I won a silver medal!',
    cn: '上个月，我们学校举办了运动会。我参加了100米赛跑。我的心跳得很快。发令枪砰地一声！我尽最大努力跑。我第三个冲过终点线。我很累但很开心。我赢得了一枚银牌！',
    vocab: ['sports-day', 'race', 'finish', 'medal', 'silver', 'gun', 'cross'],
    tags: ['sports', 'competition', 'school']
  },
  // ========== 6. 节日 ==========
  {
    id: 'radio-festival-01',
    theme: 'festival',
    level: 1,
    text: 'Spring Festival is my favorite festival. It is in January or February. We clean our house and put up red decorations. We eat dumplings and watch fireworks. Grandpa gives me red envelopes with money. I am always happy during Spring Festival.',
    cn: '春节是我最喜欢的节日。它在一月或二月。我们打扫房子，挂上红色装饰。我们吃饺子，看烟花。爷爷给我装钱的红包。春节期间我总是很开心。',
    vocab: ['Spring Festival', 'decoration', 'dumpling', 'firework', 'envelope', 'money'],
    tags: ['festival', 'Chinese', 'tradition']
  },
  {
    id: 'radio-festival-02',
    theme: 'festival',
    level: 2,
    text: 'Christmas is on December 25th. People put up Christmas trees and hang stockings by the fireplace. On Christmas Eve, Santa Claus comes down the chimney. He puts gifts in the stockings. Children wake up early to open their presents. It is a magical night.',
    cn: '圣诞节在12月25日。人们挂圣诞树，在壁炉边挂袜子。平安夜，圣诞老人从烟囱下来。他把礼物放进袜子里。孩子们早早醒来打开礼物。那是一夜魔幻时光。',
    vocab: ['Christmas', 'December', 'stocking', 'fireplace', 'chimney', 'presents', 'magical'],
    tags: ['festival', 'Western', 'winter']
  },
  // ========== 7. 天气 ==========
  {
    id: 'radio-weather-01',
    theme: 'weather',
    level: 1,
    text: 'The weather changes every day. Today it is sunny and warm. Tomorrow it might be rainy. I check the weather report every morning. If it rains, I take an umbrella. If it snows, I wear a warm coat. The weather tells me what to wear.',
    cn: '天气每天变化。今天阳光明媚又暖和。明天可能会下雨。我每天早上看天气预报。如果下雨，我带伞。如果下雪，我穿暖和的外套。天气告诉我穿什么。',
    vocab: ['weather', 'sunny', 'warm', 'rainy', 'umbrella', 'snow', 'coat'],
    tags: ['weather', 'daily', 'clothes']
  },
  {
    id: 'radio-weather-02',
    theme: 'weather',
    level: 2,
    text: 'I love winter best. When it snows, the world becomes white and quiet. I make snowmen with my sister. We give her snowman a carrot nose and coal eyes. We build a snow wall and have snowball fights. Winter is cold, but it is also very fun.',
    cn: '我最喜欢冬天。下雪时，世界变得又白又安静。我和妹妹堆雪人。我们给雪人胡萝卜鼻子和煤球眼睛。我们堆了雪墙，还打雪仗。冬天很冷，但也很有趣。',
    vocab: ['winter', 'snow', 'snowman', 'carrot', 'snowball', 'fight', 'quiet'],
    tags: ['weather', 'winter', 'fun']
  },
  // ========== 8. 动物 ==========
  {
    id: 'radio-animals-01',
    theme: 'animals',
    level: 1,
    text: 'The zoo has many interesting animals. Elephants are the biggest land animals. They have long trunks and big ears. Lions are the kings of the jungle. They have golden manes. Monkeys jump from tree to tree. They love bananas the most.',
    cn: '动物园有很多有趣的动物。大象是最大的陆地动物。它们有长长的鼻子和大大的耳朵。狮子是丛林之王。它们有金色的鬃毛。猴子在树间跳来跳去。它们最喜欢香蕉。',
    vocab: ['zoo', 'elephant', 'trunk', 'lion', 'jungle', 'monkey', 'banana'],
    tags: ['animals', 'zoo', 'habitat']
  },
  {
    id: 'radio-animals-02',
    theme: 'animals',
    level: 2,
    text: 'I have a pet dog named Coco. She is a golden retriever. She has soft golden fur and a wagging tail. Every morning, she waits for me at the door. When I come home, she jumps up and licks my hand. She is my best friend.',
    cn: '我有一只宠物狗叫可可。她是金毛寻回犬。她有一身柔软的金毛和摇摆的尾巴。每天早上，她在门口等我。我回家时，她跳起来舔我的手。她是我最好的朋友。',
    vocab: ['pet', 'dog', 'retriever', 'fur', 'tail', 'wag', 'friend'],
    tags: ['animals', 'pet', 'daily']
  },
  // ========== 9. 颜色与形状 ==========
  {
    id: 'radio-colors-01',
    theme: 'colors',
    level: 1,
    text: 'Colors are all around us. The sky is blue. The grass is green. The sun is yellow and bright. Flowers can be red, pink, or purple. Snow is white and cold. I see colors everywhere I go. The world is a rainbow!',
    cn: '颜色无处不在。天空是蓝色的。草是绿色的。太阳是明亮的黄色。花朵可以是红色、粉色或紫色。雪是白色的，很冷。我去哪里都能看到颜色。世界就像一道彩虹！',
    vocab: ['color', 'blue', 'green', 'yellow', 'red', 'pink', 'purple', 'white', 'rainbow'],
    tags: ['colors', 'nature', 'vision']
  },
  {
    id: 'radio-colors-02',
    theme: 'colors',
    level: 2,
    text: 'Today we learned about mixing colors. Red and yellow make orange. Blue and yellow make green. Red and blue make purple. I painted a picture with all the new colors. My picture shows a rainbow over a green hill. It looks amazing!',
    cn: '今天我们学习了调色。红色和黄色变成橙色。蓝色和黄色变成绿色。红色和蓝色变成紫色。我用所有新颜色画了一幅画。我的画展示了绿丘上的一道彩虹。看起来太棒了！',
    vocab: ['mix', 'orange', 'purple', 'paint', 'picture', 'rainbow', 'hill'],
    tags: ['colors', 'art', 'school']
  },
  // ========== 10. 数字与时间 ==========
  {
    id: 'radio-numbers-01',
    theme: 'numbers',
    level: 1,
    text: 'Numbers are useful in our daily life. I have two eyes and two ears. I eat three meals a day. There are seven days in a week. A year has twelve months. I count my toys: one, two, three, four, five. Numbers help me understand the world.',
    cn: '数字在我们的日常生活中很有用。我有两只眼睛和两只耳朵。我每天吃三顿饭。一周有七天。一年有十二个月。我数我的玩具：一、二、三、四、五。数字帮我理解世界。',
    vocab: ['number', 'days', 'month', 'year', 'meals', 'count', 'useful'],
    tags: ['numbers', 'daily', 'math']
  },
  {
    id: 'radio-numbers-02',
    theme: 'numbers',
    level: 2,
    text: 'My birthday is on the 15th of June. I am nine years old now. I want to be ten next year. My mom made a cake with nine candles. I made a wish and blew them all out in one breath. I shared the cake with my family. Everyone said happy birthday to me.',
    cn: '我的生日在六月十五号。我现在九岁了。我明年想十岁。妈妈做了一个有九根蜡烛的蛋糕。我许了个愿，一口气吹灭了所有蜡烛。我和家人分享了蛋糕。每个人都祝我生日快乐。',
    vocab: ['birthday', 'June', 'candle', 'wish', 'breath', 'cake', 'year'],
    tags: ['numbers', 'birthday', 'celebration']
  }
];
