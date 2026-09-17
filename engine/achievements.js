// engine/achievements.js · 奇趣学园 V5 引擎模块
// 成就系统：数学家卡片 / 旅行印章 / 宠物皮肤 / 称号
// 依赖全局：S / saveState / addBadge（来自 index.html），均做存在性兜底
window.Achievements = (function(){
  function _save(){ if(typeof saveState === 'function') saveState(); }
  function _has(id){ return Array.isArray(S.badges) && S.badges.some(b => b.id === id); }
  function _grant(id){
    const d = DEFS[id]; if(!d) return;
    if(typeof addBadge === 'function'){
      addBadge(id, d.name, d.icon);
    }else if(Array.isArray(S.badges)){
      if(!_has(id)) S.badges.push({id, name:d.name, icon:d.icon, ts:Date.now()});
      _save();
    }
  }

  // ===== Streak 模块: daily-10 / consecutive-days / speak-daily =====
  const Streak = (function(){
    const DAILY10_KEY = 'quicku_daily_10';
    const STREAK_KEY = 'quicku_streak_days';
    const SPEAK_KEY = 'quicku_speak_daily';
    const TOTAL_KEY = 'quicku_speak_total';
    const PET_CELEBRATED = 'quicku_pet_celebrated';
    function _todayStr(){ return new Date().toISOString().slice(0,10); }
    function _yesterdayStr(){ const d=new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
    function _load(key, fallback){ try{ const v=localStorage.getItem(key); return v?JSON.parse(v):fallback; }catch(e){ return fallback; } }
    function _st(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

    function _todaySpeak(){
      const d = _load(SPEAK_KEY, {date:_todayStr(), count:0});
      return d.date === _todayStr() ? d.count : 0;
    }

    function recordAnswer(){
      const d = _load(DAILY10_KEY, {date:_todayStr(), count:0});
      if(d.date !== _todayStr()){ d.date=_todayStr(); d.count=0; }
      d.count++;
      _st(DAILY10_KEY, d);
      const streak = _load(STREAK_KEY, {days:0, lastDate:null, maxStreak:0});
      const today = _todayStr();
      if(streak.lastDate !== today){
        if(streak.lastDate === _yesterdayStr()){ streak.days++; }
        else { streak.days = 1; }
        streak.lastDate = today;
        streak.maxStreak = Math.max(streak.maxStreak, streak.days);
        _st(STREAK_KEY, streak);
        if(streak.days % 7 === 0){
          try{ if(typeof PetCompanion !== 'undefined' && typeof PetCompanion.setMood === 'function') PetCompanion.setMood('celebrate'); }catch(e){}
        }
      }
      return streak.days;
    }

    function recordSpeak(){
      const d = _load(SPEAK_KEY, {date:_todayStr(), count:0});
      if(d.date !== _todayStr()){ d.date=_todayStr(); d.count=0; }
      d.count++;
      _st(SPEAK_KEY, d);
      const total = _load(TOTAL_KEY, 0) + 1;
      _st(TOTAL_KEY, total);
      return total;
    }

    function getStreakDays(){
      const s = _load(STREAK_KEY, {days:0, lastDate:null, maxStreak:0});
      if(s.lastDate === _todayStr()) return s.days;
      if(s.lastDate === _yesterdayStr()) return s.days;
      return 0;
    }

    function getTodayCount(){
      const d = _load(DAILY10_KEY, {date:_todayStr(), count:0});
      return d.date === _todayStr() ? d.count : 0;
    }

    function getTotalSpeak(){
      return _load(TOTAL_KEY, 0);
    }

    function getTodaySpeak(){
      return _todaySpeak();
    }

    function maybeCelebrate(){
      const days = getStreakDays();
      if(days > 0 && days % 7 === 0){
        const lastCelebrated = _load(PET_CELEBRATED, 0);
        if(days > lastCelebrated){
          _st(PET_CELEBRATED, days);
          try{ if(typeof PetCompanion !== 'undefined' && typeof PetCompanion.setMood === 'function') PetCompanion.setMood('celebrate'); }catch(e){}
          if(typeof toast === 'function') toast('🎉 连续'+days+'天学习，宠物为你庆祝！');
          return true;
        }
      }
      return false;
    }

    return { recordAnswer, recordSpeak, getStreakDays, getTodayCount, getTotalSpeak, getTodaySpeak, maybeCelebrate };
  })();

  // 成就定义 + 条件 + 进度
  // reward 类型：mathematician(数学家卡片) / stamp(旅行印章) / petSkin(宠物皮肤) / title(称号)
  const DEFS = {
    // 数学
    'math-unit-3a-1': {
      name:'万以内加减法大师', icon:'🏆', desc:'完成三年级上册第一单元', subject:'math',
      reward:{type:'mathematician', card:'高斯', story:'高斯9岁时秒算 1+2+…+100=5050，惊艳了老师'},
      cond:()=>(S.math.moduleProgress||{}).cpa >= 100,
      prog:()=>{const v=(S.math.moduleProgress||{}).cpa||0;return{cur:Math.min(v,100),tgt:100};}
    },
    'math-streak-7': {
      name:'坚持学习一周', icon:'🔥', desc:'连续7天学习数学', subject:'math',
      cond:()=>(S.overview.streak||0) >= 7,
      prog:()=>{const v=Math.min(S.overview.streak||0,7);return{cur:v,tgt:7};}
    },
    'math-all-3a': {
      name:'三年级上学期通关', icon:'🎓', desc:'完成三上全部知识点', subject:'math',
      reward:{type:'title', title:'数学小博士'},
      cond:()=>Object.values(S.math.moduleProgress||{}).every(v=>v>=100),
      prog:()=>{const vs=Object.values(S.math.moduleProgress||{});const done=vs.filter(v=>v>=100).length;return{cur:done,tgt:vs.length||1};}
    },
    // 英语
    'eng-vocab-100': {
      name:'百词斩', icon:'📚', desc:'学会100个单词', subject:'english',
      cond:()=>(S.eng.learnedWords||0) >= 100,
      prog:()=>{const v=Math.min(S.eng.learnedWords||0,100);return{cur:v,tgt:100};}
    },
    'eng-streak-7': {
      name:'英语打卡一周', icon:'🔥', desc:'连续7天学习英语', subject:'english',
      cond:()=>(S.overview.streak||0) >= 7,
      prog:()=>{const v=Math.min(S.overview.streak||0,7);return{cur:v,tgt:7};}
    },
    'eng-stage-2': {
      name:'开口说英语', icon:'🗣️', desc:'升级到引导输出期', subject:'english',
      reward:{type:'stamp', place:'伦敦', icon:'🇬🇧'},
      cond:()=>(S.eng.phonicsStage||0) >= 2,
      prog:()=>{const v=Math.min(S.eng.phonicsStage||0,2);return{cur:v,tgt:2};}
    },
    // 通用
    'all-streak-7': {
      name:'学习小达人', icon:'⭐', desc:'连续7天学习两个科目', subject:'all',
      reward:{type:'petSkin', skin:'星空款'},
      cond:()=>(S.overview.streak||0) >= 7,
      prog:()=>{const v=Math.min(S.overview.streak||0,7);return{cur:v,tgt:7};}
    },
    // 口语
    'review-streak-3': {
      name:'三日回顾', icon:'🔄', desc:'连续3天回顾学习', subject:'speak',
      cond:()=>(S.overview.streak||0) >= 3,
      prog:()=>{const v=Math.min(S.overview.streak||0,3);return{cur:v,tgt:3};}
    },
    'speak-5': {
      name:'口语达人', icon:'🗣️', desc:'完成5次口语对话', subject:'speak',
      cond:()=>((S.speak.history||[]).length / 2) >= 5,
      prog:()=>{const v=Math.min(Math.floor((S.speak.history||[]).length / 2),5);return{cur:v,tgt:5};}
    },
    // 词汇
    'vocab-50': {
      name:'五十词高手', icon:'📝', desc:'学会50个单词', subject:'english',
      cond:()=>(S.eng.learnedWords||0) >= 50,
      prog:()=>{const v=Math.min(S.eng.learnedWords||0,50);return{cur:v,tgt:50};}
    },
    // 数学
    'math-perfect': {
      name:'零失误', icon:'💯', desc:'数学一次全对', subject:'math',
      cond:()=>(S.math.wrongProblems||[]).length === 0 && (S.answerLog||[]).length > 0,
      prog:()=>{const m=(S.math&&S.math.mastery)||{};const wrongTotal=Object.values(m).reduce((s,v)=>s+(v.wrong||0),0);const total=(S.answerLog||[]).length||1;return{cur:total-wrongTotal,tgt:total};}
    },
    'first-lesson': {
      name:'第一课', icon:'🎒', desc:'完成第一节数学课', subject:'math',
      cond:()=>Object.values(S.math.moduleProgress||{}).some(v=>v>0),
      prog:()=>{const vs=Object.values(S.math.moduleProgress||{});const done=vs.filter(v=>v>0).length;return{cur:done,tgt:vs.length||1};}
    },
    // 游戏化 streak 模块成就
    'speak-daily': {
      name:'每日开口', icon:'🎤', desc:'每天至少开口练习1次', subject:'speak',
      cond:()=> Streak.getTodaySpeak() >= 1,
      prog:()=>({cur:Math.min(Streak.getTodaySpeak(),1),tgt:1})
    },
    'streak-daily-10': {
      name:'每日十题', icon:'📋', desc:'连续10天每日完成10道题', subject:'all',
      reward:{type:'title', title:'坚持之星'},
      cond:()=> Streak.getStreakDays() >= 10,
      prog:()=>({cur:Math.min(Streak.getStreakDays(),10),tgt:10})
    },
    'speak-30': {
      name:'口语30次', icon:'🌟', desc:'累计完成30次口语练习', subject:'speak',
      reward:{type:'petSkin', skin:'彩虹款'},
      cond:()=> Streak.getTotalSpeak() >= 30,
      prog:()=>({cur:Math.min(Streak.getTotalSpeak(),30),tgt:30})
    },
    'streak-7': {
      name:'周连胜', icon:'🔥', desc:'连续7天坚持学习', subject:'all',
      reward:{type:'stamp', place:'巴黎', icon:'🇫🇷'},
      cond:()=> Streak.getStreakDays() >= 7,
      prog:()=>({cur:Math.min(Streak.getStreakDays(),7),tgt:7})
    },
    'streak-30': {
      name:'月连胜', icon:'🏅', desc:'连续30天坚持学习', subject:'all',
      reward:{type:'mathematician', card:'欧拉', story:'欧拉每天做研究，80岁失明后仍坚持心算'},
      cond:()=> Streak.getStreakDays() >= 30,
      prog:()=>({cur:Math.min(Streak.getStreakDays(),30),tgt:30})
    }
  };

  return {
    defs: DEFS,
    streak: Streak,

    recordAnswer(){ return Streak.recordAnswer(); },
    recordSpeak(){ return Streak.recordSpeak(); },
    getStreakDays(){ return Streak.getStreakDays(); },
    getTodayCount(){ return Streak.getTodayCount(); },
    getTotalSpeak(){ return Streak.getTotalSpeak(); },
    getTodaySpeak(){ return Streak.getTodaySpeak(); },
    maybeCelebrate(){ return Streak.maybeCelebrate(); },

    check(profileId){
      Object.keys(DEFS).forEach(id=>{
        if(_has(id)) return;
        try{ if(DEFS[id].cond && DEFS[id].cond()) _grant(id); }catch(e){}
      });
      Streak.maybeCelebrate();
    },

    getList(profileId){
      return (Array.isArray(S.badges)?S.badges:[]).map(b=>{
        const d = DEFS[b.id];
        return d ? {id:b.id, name:d.name, icon:d.icon, desc:d.desc, subject:d.subject, reward:d.reward, ts:b.ts}
                 : {id:b.id, name:b.name, icon:b.icon, ts:b.ts};
      });
    },

    getProgress(profileId){
      const out = [];
      Object.keys(DEFS).forEach(id=>{
        if(_has(id)) return;
        const d = DEFS[id];
        let cur=0, tgt=1;
        try{ const p = d.prog ? d.prog() : {cur:0,tgt:1}; cur=p.cur; tgt=p.tgt; }catch(e){}
        out.push({
          id:id, name:d.name, icon:d.icon, desc:d.desc, subject:d.subject,
          current:cur, target:tgt, progress: tgt>0?Math.min(cur/tgt,1):0
        });
      });
      return out;
    }
  };
})();
