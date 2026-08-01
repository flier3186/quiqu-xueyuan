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
    }
  };

  return {
    defs: DEFS,

    // 检查所有条件，授予未获得的成就
    check(profileId){
      Object.keys(DEFS).forEach(id=>{
        if(_has(id)) return;
        try{ if(DEFS[id].cond && DEFS[id].cond()) _grant(id); }catch(e){}
      });
    },

    // 获取已获得成就列表
    getList(profileId){
      return (Array.isArray(S.badges)?S.badges:[]).map(b=>{
        const d = DEFS[b.id];
        return d ? {id:b.id, name:d.name, icon:d.icon, desc:d.desc, subject:d.subject, reward:d.reward, ts:b.ts}
                 : {id:b.id, name:b.name, icon:b.icon, ts:b.ts};
      });
    },

    // 获取未获得成就（展示进度）
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
