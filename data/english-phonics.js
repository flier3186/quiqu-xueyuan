// english-phonics.js · 奇趣学园 V5 英语数据 · 自动生成
// 全局变量：window.PHONICS_LETTERS, window.PHONICS_STAGES
// 内容：26字母发音 + 辅音组合/ blends + 魔法e + 元音组合 + r控制元音
// 字段：l(字母/组合) sound(示例词) mouth(口型描述) mouthIdx(口型图索引0-13) type(发音类型) stage(阶段1-4) phoneme(音素分类) tip(发音技巧) words(示例单词数组)
// 注意：mouthIdx 映射到口型图位置，共14个位置(0-13)，按发音口型相似度分配

window.PHONICS_LETTERS = [
  // ========== 阶段1：26字母音 + CVC（短元音）==========
  {l:'Aa',sound:'apple, ant, alligator',mouth:'双唇自然张开，舌位低平，气流不受阻。',mouthIdx:0,type:'vowel',stage:1,phoneme:'A',tip:'发 /æ/ 音，嘴巴张到能塞进两根手指。',words:['apple','ant','cat','bag']},
  {l:'Bb',sound:'bag, ball, bat',mouth:'双唇紧闭，气流突然冲开双唇。',mouthIdx:1,type:'bilabial',stage:1,phoneme:'B',tip:'先闭嘴憋气，再"噗"地一下爆开。',words:['bag','ball','bat','cab']},
  {l:'Cc',sound:'cat, car, cap',mouth:'舌后部抬起抵软腭，气流冲出。',mouthIdx:2,type:'velar',stage:1,phoneme:'C',tip:'像咳嗽一样，舌根顶住嗓子眼上方。',words:['cat','car','cap','cup']},
  {l:'Dd',sound:'dog, duck, doll',mouth:'舌尖抵上齿龈，气流突然释放。',mouthIdx:3,type:'alveolar',stage:1,phoneme:'D',tip:'舌尖顶住上门牙后面的牙龈，再弹开。',words:['dog','duck','doll','bed']},
  {l:'Ee',sound:'egg, elephant, bed',mouth:'嘴角微向两侧拉开，舌位中高。',mouthIdx:11,type:'vowel',stage:1,phoneme:'E',tip:'发 /e/ 音，嘴巴扁扁的，像在笑。',words:['egg','elephant','bed','red']},
  {l:'Ff',sound:'fish, fun, fan',mouth:'上齿咬下唇，气流摩擦而出。',mouthIdx:4,type:'labiodental',stage:1,phoneme:'F',tip:'上牙轻咬下嘴唇，吹气出来。',words:['fish','fun','fan','leaf']},
  {l:'Gg',sound:'go, good, girl',mouth:'舌后部抬起抵软腭，气流冲出。',mouthIdx:2,type:'velar',stage:1,phoneme:'G',tip:'和c的口型很像，嗓子要振动。',words:['go','good','girl','dog']},
  {l:'Hh',sound:'hat, hot, hand',mouth:'气流从声门呼出，口型随后续元音变化。',mouthIdx:6,type:'glottal',stage:1,phoneme:'H',tip:'像对着玻璃哈气"哈——"，嗓子不振动。',words:['hat','hot','hand','house']},
  {l:'Ii',sound:'igloo, ink, pig',mouth:'嘴角向两侧拉开，舌位前高。',mouthIdx:11,type:'vowel',stage:1,phoneme:'I',tip:'发 /ɪ/ 音，嘴巴扁扁的，声音短促。',words:['igloo','ink','pig','sit']},
  {l:'Jj',sound:'jam, jump, juice',mouth:'先舌尖抵上齿龈，再迅速张开像SH。',mouthIdx:7,type:'affricate',stage:1,phoneme:'J',tip:'先做d的动作，再做zh的动作，连起来。',words:['jam','jump','juice','jet']},
  {l:'Kk',sound:'kite, key, kick',mouth:'舌后部抬起抵软腭，气流瞬间冲出。',mouthIdx:2,type:'velar',stage:1,phoneme:'K',tip:'和c发音一样，舌根顶住嗓子眼上方。',words:['kite','key','kick','book']},
  {l:'Ll',sound:'lion, leg, lamp',mouth:'舌尖抵上齿龈，气流从舌两侧流出。',mouthIdx:3,type:'lateral',stage:1,phoneme:'L',tip:'舌尖顶住上牙龈，气流从舌头两边出。',words:['lion','leg','lamp','ball']},
  {l:'Mm',sound:'man, moon, mom',mouth:'双唇紧闭，气流从鼻腔出。',mouthIdx:1,type:'nasal',stage:1,phoneme:'M',tip:'闭嘴，像哼歌"嗯——"，气流走鼻子。',words:['man','moon','mom','jam']},
  {l:'Nn',sound:'nose, nut, net',mouth:'舌尖抵上齿龈，气流从鼻腔出。',mouthIdx:3,type:'nasal',stage:1,phoneme:'N',tip:'舌尖顶住上牙龈，像哼"嗯——"，气流走鼻子。',words:['nose','nut','net','sun']},
  {l:'Oo',sound:'octopus, ox, dog',mouth:'双唇拢圆，舌位后低。',mouthIdx:12,type:'vowel',stage:1,phoneme:'O',tip:'发 /ɒ/ 音，嘴巴圆圆的，像要吹蜡烛。',words:['octopus','ox','dog','hot']},
  {l:'Pp',sound:'pig, pen, pat',mouth:'双唇紧闭，气流突然冲开双唇。',mouthIdx:1,type:'bilabial',stage:1,phoneme:'P',tip:'和b一样先闭嘴，但嗓子不振动。',words:['pig','pen','pat','cup']},
  {l:'Qq',sound:'queen, quiet, quiz',mouth:'舌后部抬起抵软腭，双唇拢圆。',mouthIdx:2,type:'velar',stage:1,phoneme:'Q',tip:'q总是和u一起出现，发/kw/的音。',words:['queen','quiet','quiz','quack']},
  {l:'Rr',sound:'rabbit, red, run',mouth:'舌尖卷起不接触上腭，双唇略突。',mouthIdx:3,type:'approximant',stage:1,phoneme:'R',tip:'舌头卷起来向后弯，嗓子振动。',words:['rabbit','red','run','car']},
  {l:'Ss',sound:'sun, snake, sit',mouth:'舌尖靠近上齿龈，气流摩擦而出。',mouthIdx:3,type:'fricative',stage:1,phoneme:'S',tip:'像蛇吐信子"嘶——"，嗓子不振动。',words:['sun','snake','sit','bus']},
  {l:'Tt',sound:'tiger, top, ten',mouth:'舌尖抵上齿龈，气流突然释放。',mouthIdx:3,type:'alveolar',stage:1,phoneme:'T',tip:'舌尖顶住上牙龈，再快速弹开。',words:['tiger','top','ten','cat']},
  {l:'Uu',sound:'umbrella, up, sun',mouth:'双唇略张，舌位后中。',mouthIdx:13,type:'vowel',stage:1,phoneme:'U',tip:'发 /ʌ/ 音，嘴巴放松，像说"啊"但短促。',words:['umbrella','up','sun','cup']},
  {l:'Vv',sound:'van, vest, violin',mouth:'上齿咬下唇，声带振动。',mouthIdx:4,type:'labiodental',stage:1,phoneme:'V',tip:'和f口型一样，但嗓子要振动。',words:['van','vest','violin','love']},
  {l:'Ww',sound:'water, wind, well',mouth:'双唇拢圆前突，舌后部抬高。',mouthIdx:13,type:'approximant',stage:1,phoneme:'W',tip:'嘴巴嘟起来像吹口哨，嗓子振动。',words:['water','wind','well','window']},
  {l:'Xx',sound:'fox, box, six',mouth:'先舌后部抵软腭，再舌尖靠近齿龈摩擦。',mouthIdx:2,type:'affricate',stage:1,phoneme:'X',tip:'发/ks/的音，先k再s，连起来。',words:['fox','box','six','axe']},
  {l:'Yy',sound:'yellow, yes, yo-yo',mouth:'嘴角向两侧拉开，舌位前高。',mouthIdx:11,type:'approximant',stage:1,phoneme:'Y',tip:'发/j/音，像说"耶"，短促一带而过。',words:['yellow','yes','yo-yo','yogurt']},
  {l:'Zz',sound:'zebra, zoo, zip',mouth:'舌尖靠近上齿龈，声带振动。',mouthIdx:3,type:'fricative',stage:1,phoneme:'Z',tip:'和s口型一样，但嗓子要振动，像蜜蜂"嗡——"。',words:['zebra','zoo','zip','buzz']},

  // ========== 阶段2：辅音组合 Digraphs + Blends ==========
  {l:'TH',sound:'think, this, bath',mouth:'舌尖伸出上下齿之间，气流通过。',mouthIdx:5,type:'dental',stage:2,phoneme:'TH',tip:'舌头尖轻轻伸出牙齿，吐气或振动声带。',words:['think','this','bath','thumb']},
  {l:'SH',sound:'ship, fish, wish',mouth:'双唇略突前圆，舌前部抬起靠近硬腭。',mouthIdx:6,type:'palatal',stage:2,phoneme:'SH',tip:'像让人安静"嘘——"，嘴唇撅起吹气。',words:['ship','fish','wish','shell']},
  {l:'CH',sound:'chip, chair, lunch',mouth:'先舌尖抵上齿龈，再迅速张开像SH。',mouthIdx:7,type:'affricate',stage:2,phoneme:'CH',tip:'先做t的动作，再做sh的动作，连起来。',words:['chip','chair','lunch','chalk']},
  {l:'WH',sound:'whale, white, wheel',mouth:'双唇拢圆前突，气流摩擦而出。',mouthIdx:6,type:'fricative',stage:2,phoneme:'WH',tip:'嘴巴嘟起来，吹气出声，像吹蜡烛。',words:['whale','white','wheel','whisk']},
  {l:'PH',sound:'phone, photo, graph',mouth:'上齿咬下唇，气流摩擦而出。',mouthIdx:4,type:'labiodental',stage:2,phoneme:'PH',tip:'和f发音一模一样，上牙咬下嘴唇吹气。',words:['phone','photo','graph','dolphin']},
  {l:'CK',sound:'duck, clock, kick',mouth:'舌后部抬起抵软腭，气流瞬间冲出。',mouthIdx:2,type:'velar',stage:2,phoneme:'CK',tip:'和c/k的口型一样，多用在词尾。',words:['duck','clock','kick','sock']},
  {l:'NG',sound:'sing, ring, long',mouth:'舌后部抬起抵软腭，气流从鼻腔出。',mouthIdx:9,type:'nasal',stage:2,phoneme:'NG',tip:'舌根抬起堵住口腔，让气流从鼻子出。',words:['sing','ring','long','king']},
  {l:'BL',sound:'blue, block, blast',mouth:'双唇紧闭再迅速张开，同时舌侧出气。',mouthIdx:1,type:'blend',stage:2,phoneme:'BL',tip:'先发b，紧接着发l，两个音连起来。',words:['blue','block','blast','blow']},
  {l:'BR',sound:'brown, bread, brave',mouth:'双唇紧闭再张开，同时舌头卷起。',mouthIdx:1,type:'blend',stage:2,phoneme:'BR',tip:'先发b，紧接着发r，两个音连起来。',words:['brown','bread','brave','brush']},
  {l:'CL',sound:'clap, clock, clip',mouth:'舌后部抵软腭，再舌尖抵上齿龈。',mouthIdx:2,type:'blend',stage:2,phoneme:'CL',tip:'先发c，紧接着发l，两个音连起来。',words:['clap','clock','clip','climb']},
  {l:'CR',sound:'crab, cry, cream',mouth:'舌后部抵软腭，再舌头卷起。',mouthIdx:2,type:'blend',stage:2,phoneme:'CR',tip:'先发c，紧接着发r，两个音连起来。',words:['crab','cry','cream','crisp']},
  {l:'DR',sound:'drink, drum, dream',mouth:'舌尖抵上齿龈，再舌头卷起。',mouthIdx:3,type:'blend',stage:2,phoneme:'DR',tip:'先发d，紧接着发r，两个音连起来。',words:['drink','drum','dream','dress']},
  {l:'FL',sound:'flag, fly, flower',mouth:'上齿咬下唇，再舌尖抵上齿龈。',mouthIdx:4,type:'blend',stage:2,phoneme:'FL',tip:'先发f，紧接着发l，两个音连起来。',words:['flag','fly','flower','flip']},
  {l:'FR',sound:'frog, fruit, friend',mouth:'上齿咬下唇，再舌头卷起。',mouthIdx:4,type:'blend',stage:2,phoneme:'FR',tip:'先发f，紧接着发r，两个音连起来。',words:['frog','fruit','friend','free']},
  {l:'GR',sound:'green, grape, grow',mouth:'舌后部抵软腭，再舌头卷起。',mouthIdx:2,type:'blend',stage:2,phoneme:'GR',tip:'先发g，紧接着发r，两个音连起来。',words:['green','grape','grow','grass']},
  {l:'PL',sound:'plane, play, plate',mouth:'双唇紧闭再张开，同时舌侧出气。',mouthIdx:1,type:'blend',stage:2,phoneme:'PL',tip:'先发p，紧接着发l，两个音连起来。',words:['plane','play','plate','plus']},
  {l:'PR',sound:'prize, prawn, press',mouth:'双唇紧闭再张开，同时舌头卷起。',mouthIdx:1,type:'blend',stage:2,phoneme:'PR',tip:'先发p，紧接着发r，两个音连起来。',words:['prize','prawn','press','price']},
  {l:'SL',sound:'slow, sleep, slide',mouth:'舌尖靠近上齿龈，再舌侧出气。',mouthIdx:3,type:'blend',stage:2,phoneme:'SL',tip:'先发s，紧接着发l，两个音连起来。',words:['slow','sleep','slide','slim']},
  {l:'SM',sound:'smile, small, smell',mouth:'舌尖靠近上齿龈，再双唇紧闭。',mouthIdx:3,type:'blend',stage:2,phoneme:'SM',tip:'先发s，紧接着发m，两个音连起来。',words:['smile','small','smell','smoke']},
  {l:'SN',sound:'snail, snow, snake',mouth:'舌尖靠近上齿龈，再鼻腔出气。',mouthIdx:3,type:'blend',stage:2,phoneme:'SN',tip:'先发s，紧接着发n，两个音连起来。',words:['snail','snow','snake','snack']},
  {l:'SP',sound:'spider, spin, spot',mouth:'舌尖靠近上齿龈，再双唇紧闭。',mouthIdx:3,type:'blend',stage:2,phoneme:'SP',tip:'先发s，紧接着发p，两个音连起来。',words:['spider','spin','spot','spoon']},
  {l:'ST',sound:'star, stop, story',mouth:'舌尖靠近上齿龈，再舌尖抵上齿龈。',mouthIdx:3,type:'blend',stage:2,phoneme:'ST',tip:'先发s，紧接着发t，两个音连起来。',words:['star','stop','story','stamp']},
  {l:'TR',sound:'tree, train, truck',mouth:'舌尖抵上齿龈，再舌头卷起。',mouthIdx:3,type:'blend',stage:2,phoneme:'TR',tip:'先发t，紧接着发r，像发chr的音。',words:['tree','train','truck','trip']},

  // ========== 阶段3：长元音魔法 e ==========
  {l:'a_e',sound:'cake, name, gate',mouth:'嘴张得比短a小，舌尖抵下齿。',mouthIdx:10,type:'silent-e',stage:3,phoneme:'A',tip:'词尾e不发音，让a变成自己名字的音/eɪ/。',words:['cake','name','gate','make']},
  {l:'i_e',sound:'kite, bike, time',mouth:'嘴角向两侧拉开，舌尖抵下齿。',mouthIdx:11,type:'silent-e',stage:3,phoneme:'I',tip:'词尾e让i变成/aɪ/，像说"爱"。',words:['kite','bike','time','five']},
  {l:'o_e',sound:'home, nose, bone',mouth:'双唇拢圆，舌后部略抬起。',mouthIdx:12,type:'silent-e',stage:3,phoneme:'O',tip:'词尾e让o变成/oʊ/，像说"欧"。',words:['home','nose','bone','rose']},
  {l:'u_e',sound:'cube, tube, cute',mouth:'双唇拢圆前突，舌尖离开下齿。',mouthIdx:13,type:'silent-e',stage:3,phoneme:'U',tip:'词尾e让u变成/juː/，像说"尤"。',words:['cube','tube','cute','mule']},

  // ========== 阶段4：元音组合 Vowel Teams + r控制元音 ==========
  {l:'ee',sound:'tree, bee, green',mouth:'嘴角向两侧拉开，舌位前高。',mouthIdx:11,type:'vowel team',stage:4,phoneme:'EE',tip:'两个e一起发长音/iː/，像说"衣"。',words:['tree','bee','green','feet']},
  {l:'ea',sound:'eat, sea, read',mouth:'嘴角向两侧拉开，舌位前高。',mouthIdx:11,type:'vowel team',stage:4,phoneme:'EA',tip:'ea和ee一样发长音/iː/，像说"衣"。',words:['eat','sea','read','tea']},
  {l:'ai',sound:'rain, train, tail',mouth:'嘴张得比短a小，舌尖抵下齿。',mouthIdx:10,type:'vowel team',stage:4,phoneme:'AI',tip:'ai发/eɪ/，和魔法e的a一样。',words:['rain','train','tail','mail']},
  {l:'ay',sound:'day, play, say',mouth:'嘴张得比短a小，舌尖抵下齿。',mouthIdx:10,type:'vowel team',stage:4,phoneme:'AY',tip:'ay发/eɪ/，多用在词尾。',words:['day','play','say','hay']},
  {l:'oa',sound:'boat, coat, road',mouth:'双唇拢圆，舌后部略抬起。',mouthIdx:12,type:'vowel team',stage:4,phoneme:'OA',tip:'oa发/oʊ/，和魔法e的o一样。',words:['boat','coat','road','goat']},
  {l:'oo',sound:'moon, food, zoo',mouth:'双唇拢圆前突，舌位后高。',mouthIdx:12,type:'vowel team',stage:4,phoneme:'OO',tip:'oo发长音/uː/，像说"乌"。有时发短音/ʊ/如book。',words:['moon','food','zoo','book']},
  {l:'oi',sound:'oil, coin, boil',mouth:'双唇拢圆前突，再嘴角拉开。',mouthIdx:12,type:'vowel team',stage:4,phoneme:'OI',tip:'oi发/ɔɪ/，先"奥"再"衣"，连起来。',words:['oil','coin','boil','point']},
  {l:'oy',sound:'boy, toy, joy',mouth:'双唇拢圆前突，再嘴角拉开。',mouthIdx:12,type:'vowel team',stage:4,phoneme:'OY',tip:'oy发/ɔɪ/，和oi一样，多用在词尾。',words:['boy','toy','joy','soy']},
  {l:'igh',sound:'high, light, night',mouth:'嘴角向两侧拉开，舌尖抵下齿。',mouthIdx:11,type:'vowel team',stage:4,phoneme:'IGH',tip:'igh发/aɪ/，gh不发音，像说"爱"。',words:['high','light','night','sigh']},
  {l:'ar',sound:'car, star, park',mouth:'双唇略张，舌头卷起。',mouthIdx:0,type:'r-controlled',stage:4,phoneme:'AR',tip:'ar发/ɑːr/，嘴巴张大，舌头卷起。',words:['car','star','park','arm']},
  {l:'er',sound:'her, tiger, water',mouth:'双唇略张，舌头卷起。',mouthIdx:3,type:'r-controlled',stage:4,phoneme:'ER',tip:'er发/ɜːr/，嘴巴放松，舌头卷起。',words:['her','tiger','water','sister']},
  {l:'ir',sound:'bird, girl, shirt',mouth:'双唇略张，舌头卷起。',mouthIdx:3,type:'r-controlled',stage:4,phoneme:'IR',tip:'ir发/ɜːr/，和er一样，嘴巴放松舌头卷起。',words:['bird','girl','shirt','skirt']},
  {l:'or',sound:'for, corn, horse',mouth:'双唇拢圆，舌头卷起。',mouthIdx:12,type:'r-controlled',stage:4,phoneme:'OR',tip:'or发/ɔːr/，嘴巴圆圆，舌头卷起。',words:['for','corn','horse','fork']},
  {l:'ur',sound:'turn, nurse, turtle',mouth:'双唇略张，舌头卷起。',mouthIdx:3,type:'r-controlled',stage:4,phoneme:'UR',tip:'ur发/ɜːr/，和er/ir一样，嘴巴放松舌头卷起。',words:['turn','nurse','turtle','purple']}
];

window.PHONICS_STAGES = [
  {id:1,name:'入门：26字母音 + CVC',desc:'26个字母的发音 + 辅音-元音-辅音拼读（短元音）',done:false,current:true},
  {id:2,name:'进阶：辅音组合',desc:'SH/CH/TH/WH/PH/CK/NG 组合音 + BL/BR/CL/CR/DR 等混合辅音',done:false},
  {id:3,name:'精通：长元音魔法 e',desc:'a_e/i_e/o_e/u_e 让元音读自己名字（长元音）',done:false},
  {id:4,name:'大师：元音组合 + r控制',desc:'ee/ea/ai/ay/oa/oo/oi/oy/igh 元音组合 + ar/er/ir/or/ur r控制元音',done:false}
];
