// engine/scene-manager.js · 奇趣学园 V5 引擎模块
// 每日场景主线：同一天同一个孩子用同一个场景，存于 state.sceneTheme
// 依赖全局：S / saveState（来自 index.html），均做存在性兜底
window.SceneManager = (function(){
  function _save(){ if(typeof saveState === 'function') saveState(); }
  function _todayKey(){
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  }
  // 简单稳定散列（同一 date+profileId → 同一索引）
  function _hash(str){
    let h = 0;
    for(let i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
    return h;
  }

  const SCENES = [
    {id:'supermarket', name:'超市购物', icon:'🛒', words:['apple','bread','milk','egg','rice'], phrases:['How much is it?','I want...'], grammar:'I want ___'},
    {id:'restaurant', name:'餐厅点餐', icon:'🍽️', words:['rice','noodle','chicken','juice','soup'], phrases:["I'd like...","Can I have...?"], grammar:"I'd like ___"},
    {id:'school', name:'学校生活', icon:'🏫', words:['book','pen','desk','chair','teacher'], phrases:['Where is...?','May I...?'], grammar:'Where is ___?'},
    {id:'park', name:'公园游玩', icon:'🌳', words:['tree','flower','bird','dog','run'], phrases:["Let's...","I can..."], grammar:"Let's ___"},
    {id:'weather', name:'天气聊天', icon:'☀️', words:['sun','rain','cloud','wind','hot'], phrases:["It's...","How's the weather?"], grammar:"It's ___"},
    {id:'clothes', name:'穿衣打扮', icon:'👕', words:['shirt','pants','shoes','hat','dress'], phrases:["I'm wearing...","Put on..."], grammar:"I'm wearing ___"},
    {id:'animals', name:'动物园', icon:'🐘', words:['elephant','lion','monkey','rabbit','tiger'], phrases:['I see...','Look at...'], grammar:'I see ___'},
    {id:'birthday', name:'生日派对', icon:'🎂', words:['cake','candle','gift','song','party'], phrases:['Happy birthday!','This is for you'], grammar:'This is ___'}
  ];

  function _byId(id){ return SCENES.find(s=>s.id===id) || SCENES[0]; }

  return {
    scenes: SCENES,

    // 获取今日场景（同一天同一孩子固定）
    getToday(profileId){
      const pid = profileId || 'default';
      const today = _todayKey();
      // 已存且为今日则直接返回
      if(S.sceneTheme && S.sceneTheme.date === today && S.sceneTheme.profileId === pid){
        return _byId(S.sceneTheme.id);
      }
      const idx = _hash(today + ':' + pid) % SCENES.length;
      S.sceneTheme = { id: SCENES[idx].id, date: today, profileId: pid };
      _save();
      return SCENES[idx];
    },

    // 获取场景核心词汇
    getWords(sceneId){ return _byId(sceneId).words.slice(); },

    // 获取场景短语
    getPhrases(sceneId){ return _byId(sceneId).phrases.slice(); },

    // 获取场景语法句型（辅助）
    getGrammar(sceneId){ return _byId(sceneId).grammar; }
  };
})();
