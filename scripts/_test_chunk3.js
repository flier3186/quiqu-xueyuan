');
  if(isOK&&!board.classList.contains('ok')){
    board.classList.add('ok');
    setStar(5);
    toast('拼图完成！+5 ⭐');
  }else if(!isOK){
    board.classList.remove('ok');
  }
}
function resetPuzzle(){
  $$('.puzzle-slot').forEach(s=>{s.classList.remove('has');s.innerText='';delete s.dataset.val});
  $$('.puzzle-tile').forEach(t=>{t.classList.remove('used');t.style.outline=''});
  $('#puzzleBoard').classList.remove('ok');
  pickedTile=null;
}

function markFlipCard(idx,isCorrect,q,a){
  const card=$(`#flipCard${idx}`);
  if(isCorrect){
    card.style.opacity='.5';
    card.style.pointerEvents='none';
    setStar(2);
    toast('真棒！+2 ⭐');
  }else{
    S.math.wrongProblems.push({q,a});
    saveState();
    card.style.border='2px solid #EF4444';
    card.style.borderRadius='var(--radius-lg)';
    toast('已加入错题本，快去复习吧！');
    setTimeout(()=>render('math'),800);
  }
}

function renderEnglish(grade='3',subtab='vocab'){
  // 进入英语板块：启动计时会话（与 renderMath 一致）
  try{
    if(typeof TimeController!=='undefined' && TimeController.startSession &&
       (!TimeController._state || !TimeController._state.running || TimeController._state.subject!=='eng')){
      TimeController.startSession('eng');
    }
  }catch(e){}

  const g = String(grade);
  S.eng = S.eng || {};
  S.eng.grade = g;
  // 初始化 useV5（首次进入英语板块时，默认显示 V5 流程）
  if(typeof S.eng.useV5 !== 'boolean') S.eng.useV5 = true;

  // V5: 9 板块每日流程；降级: 旧版 5 子标签
  const hasV5 = !!window.EnglishFlowV5;
  // 用 useV5 控制是否显示 V5 流程；若用户点击了具体 subtab 则显示经典内容
  const showV5 = hasV5 && S.eng.useV5 && (S.eng.sub === 'v5flow' || !S.eng.sub);
  let content;
  if(showV5){
    if(!S.engV5 || typeof S.engV5.currentBoard !== 'number'){
      content = EnglishFlowV5.start(S.profileId || 'default');
    } else {
      content = EnglishFlowV5.renderAll();
    }
  } else {
    const sub = S.eng.sub || subtab || 'vocab';
    if(sub === 'v5flow'){ S.eng.useV5 = true; saveState(); render(); return ''; }
    content = renderEngSub(sub, g);
  }

  // 始终显示 sub-tabs（V5 模式下额外增加"每日流程"入口）
  const subtabsHTML = `
    <div class="sub-tabs" id="engSubtabs" style="display:flex;flex-wrap:wrap;align-items:center;gap:4px">
      ${[
        {id:'vocab',name:'📚 词汇图书馆'},
        {id:'phonics',name:'🗣️ 自然拼读'},
        {id:'phrases',name:'🔡 情景短语库'},
        {id:'grammar',name:'✍️ 语法工厂'},
        {id:'listen',name:'🎧 听力森林'},
      ].map(s=>`<div class="sub-tab ${s.id===(S.eng.sub||subtab||'vocab')?'active':''}" data-sub="${s.id}">${s.name}</div>`).join('')}
      ${hasV5 ? `<div class="sub-tab ${S.eng.useV5?'active':''}" data-sub="v5flow" style="margin-left:auto;background:${S.eng.useV5?'var(--teal-soft)':'var(--ink-50)'};color:${S.eng.useV5?'var(--teal)':'var(--text-2)'}">📋 每日流程</div>` : ''}
    </div>`;

  return `
    <div class="layout-with-side">
      <div style="flex:1;min-width:0">
        <div class="grade-bar">
          <span class="grade-label">年级：</span>
          <div class="grade-pills" id="engGrades">
            ${['3','4','5','6'].map(gx=>`<div class="grade-pill ${gx===g?'active':''}" data-grade="${gx}">${gx}年级</div>`).join('')}
          </div>
          ${hasV5 ? `<span style="margin-left:auto;font-size:12px;color:var(--text-3);font-weight:600">📋 每日9板块 · 场景贯穿</span>` : ''}
        </div>
        <div class="eng-banner">
          <div>
            <h2>英语世界</h2>
            <p>${hasV5 ? '每日场景主线 · 9板块进阶 · AI自由对话' : '人教版 PEP 同步 · 母语级自然拼读 · 生活场景短语'}</p>
          </div>
          <div class="progress"><span>本周</span><span class="num">82%</span></div>
        </div>
        <div id="engSceneBanner" style="margin-bottom:14px;padding:12px 16px;border-radius:14px;background:linear-gradient(135deg,#ECFDF5,#D1FAE5);border:1.5px solid #6EE7B7;display:none">
          <div style="display:flex;align-items:center;gap:10px">
            <span id="engSceneIcon" style="font-size:24px"></span>
            <div>
              <div style="font-size:13px;font-weight:700;color:#065F46">🎭 今日场景：${'<span id="engSceneName"></span>'}</div>
              <div style="font-size:12px;color:#047857;margin-top:2px" id="engSceneWords"></div>
            </div>
            <div style="margin-left:auto">
              <button onclick="playEngSceneAudio()" style="padding:6px 14px;border-radius:20px;border:none;background:#059669;color:white;font-size:12px;font-weight:700;cursor:pointer">🔊 听场景对话</button>
            </div>
          </div>
        </div>
        ${subtabsHTML}
        <div id="engContent">${content}</div>
      </div>
      ${renderSidePanel()}
    </div>`;
}

function renderEngSub(subtab,grade){
  if(subtab==='vocab'){
    const words=VOCAB_BY_GRADE[grade]||VOCAB_BY_GRADE['3'];
    const flashWords=words.slice(0,4);
    // 分页：每页10词
    S.eng.vocabPage = S.eng.vocabPage || 0;
    const pageSize = 10;
    const totalPages = Math.ceil(words.length / pageSize);
    const page = Math.min(S.eng.vocabPage, totalPages - 1);
    const pageWords = words.slice(page * pageSize, (page + 1) * pageSize);
    return `<div class="vocab-grid">
      ${pageWords.map(w=>{
        const isFav=S.eng.favoriteWords.includes(w.w);
        return `<div class="vocab-card">
        <div class="vocab-head">
          <div class="vocab-word">${w.w}</div>
          <div style="display:flex;gap:6px;align-items:center">
            <div class="vocab-fav" onclick="toggleFav('${w.w}',this)" style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all var(--dur-base);background:${isFav?'var(--yellow-100)':'var(--ink-50)'}">
              <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:${isFav?'var(--yellow)':'var(--ink-300)'}"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div class="vocab-speak" onclick="speak('${escapeAttr(w.w)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
          </div>
        </div>
        <div class="vocab-pos">${w.pos}</div>
        <div class="vocab-def">${w.def}</div>
        <div class="vocab-example">例：${w.ex}</div>
        <div class="vocab-collocations"><strong style="color:var(--teal)">搭配：</strong>${w.coll.map(c=>`<span class="tag">${c}</span>`).join('')}</div>
        <div class="vocab-syn"><strong>近义：</strong>${w.syn}　<strong>反义：</strong>${w.ant}</div>
      </div>`}).join('')}
    </div>
    ${totalPages > 1 ? `<div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:16px;padding:12px;background:white;border-radius:var(--radius-md);box-shadow:var(--card-shadow)">
      <button onclick="vocabPageChange(-1)" style="padding:8px 16px;border-radius:10px;border:1.5px solid var(--teal);background:white;color:var(--teal);font-weight:700;font-size:13px;cursor:pointer;${page===0?'opacity:0.4;pointer-events:none':''}">← 上一页</button>
      <span style="font-size:13px;font-weight:700;color:var(--navy)">${page+1} / ${totalPages}</span>
      <button onclick="vocabPageChange(1)" style="padding:8px 16px;border-radius:10px;border:1.5px solid var(--teal);background:white;color:var(--teal);font-weight:700;font-size:13px;cursor:pointer;${page>=totalPages-1?'opacity:0.4;pointer-events:none':''}">下一页 →</button>
    </div>` : ''}
    <div style="margin-top:24px;background:white;border-radius:var(--radius-lg);padding:20px;box-shadow:var(--card-shadow)">
      <h3 style="font-size:18px;color:var(--navy);font-weight:800;margin-bottom:4px">🎴 闪卡记忆挑战（4张）</h3>
      <p style="font-size:12px;color:var(--text-2);margin-bottom:6px">点击卡片翻面查看词义，认识的点"✅认识"，4个全认识得8颗星！</p>
      <div class="flash-progress">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-weight:800;color:var(--navy)">进度</span>
          <div class="flash-progress-bar"><i id="flashBar" style="width:0%"></i></div>
        </div>
        <span id="flashCount" style="font-weight:800;color:var(--teal);font-family:'Inter',sans-serif">0 / 4</span>
      </div>
      <div class="flash-grid" id="flashGrid">
        ${flashWords.map((w,i)=>`<div class="flash-card" id="flashCard${i}" onclick="flipFlash(${i})">
          <div class="flash-inner">
            <div class="flash-face flash-front">
              <div class="flash-word">${w.emoji||'📚'} ${w.w}</div>
              <div class="flash-speak" onclick="event.stopPropagation();speak('${escapeAttr(w.w)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
              <div style="font-size:11px;color:var(--ink-400);margin-top:auto">👆 点击翻面</div>
            </div>
            <div class="flash-face flash-back">
              <div class="flash-pos">${w.pos}</div>
              <div class="flash-cn">${w.def.split('。')[0]}</div>
              <div class="flash-ex">${w.ex}</div>
              <div class="flash-meta">
                <button class="flash-btn no" onclick="event.stopPropagation();unflipFlash(${i})">❌ 再看看</button>
                <button class="flash-btn yes" onclick="event.stopPropagation();markFlashKnown(${i})">✅ 认识</button>
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
    <div style="margin-top:24px;background:white;border-radius:var(--radius-lg);padding:20px;box-shadow:var(--card-shadow)">
      <h3 style="font-size:18px;color:var(--navy);font-weight:800;margin-bottom:4px">🎯 主题词汇闯关</h3>
      <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">选一个主题，看 emoji 选对应的英文单词！</p>
      <div id="vocabThemeBar" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
        ${(typeof VOCAB_THEMES!=='undefined'?VOCAB_THEMES:[]).map(t=>`<button class="vtheme-btn" onclick="startVocabGame('${t.id}')" style="padding:8px 16px;border-radius:20px;border:2px solid ${t.color};background:white;color:${t.color};font-size:13px;font-weight:700;cursor:pointer;transition:all .15s">${t.name}</button>`).join('')}
      </div>
      <div id="vocabGameArea" style="display:none">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <span style="font-size:13px;color:var(--text-2)">得分：<b id="vgScore" style="color:var(--teal);font-size:16px">0</b></span>
          <span style="font-size:13px;color:var(--text-2)">第 <b id="vgIdx">1</b> / <span id="vgTotal">10</span> 题</span>
          <button onclick="exitVocabGame()" style="margin-left:auto;padding:4px 12px;border-radius:8px;border:1px solid var(--ink-200);background:white;color:var(--text-2);font-size:12px;cursor:pointer">退出</button>
        </div>
        <div style="text-align:center;padding:30px">
          <div id="vgEmoji" style="font-size:80px;margin-bottom:20px">🍎</div>
          <div id="vgChoices" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"></div>
          <div id="vgFeedback" style="margin-top:16px;font-size:14px;font-weight:600;min-height:20px"></div>
        </div>
      </div>
    </div>`;
  }
  if(subtab==='phonics'){
    const maxStage = getPhonicsMaxStage(grade);
    // 限制当前阶段不超过年级最大阶段
    if(currentPhonicsStage > maxStage) currentPhonicsStage = maxStage;
    const stageLetters=PHONICS_LETTERS.filter(L=>L.stage===currentPhonicsStage);
    const showLetters=stageLetters.length?stageLetters:PHONICS_LETTERS.filter(L=>L.stage<=maxStage);
    const availableStages = PHONICS_STAGES.filter(s => s.id <= maxStage);
    return `
      <div style="background:white;border-radius:var(--radius-lg);padding:20px;box-shadow:var(--card-shadow);margin-bottom:16px">
        <h3 style="font-size:18px;color:var(--navy);font-weight:800;margin-bottom:8px">🗣️ 自然拼读 · 母语教学法 <span style="font-size:12px;color:var(--text-2);font-weight:600">（${gradeLabel(grade)}可学${maxStage}个阶段）</span></h3>
        <p style="font-size:13px;color:var(--text-2);margin-bottom:14px">不学音标！点击喇叭听发音，看嘴型描述学口型。<a href="${ASSETS.mouthChart}" target="_blank" style="color:var(--teal);font-weight:700">点击查看完整嘴型图</a>，点击字母听发音，点击示例词听单词。</p>
        <div class="phonics-stage-bar" id="phonicsStages">
          ${availableStages.map(s=>`<div class="phonics-stage ${s.id===currentPhonicsStage?'active':''} ${s.done?'done':''}" data-stage="${s.id}"><span class="num">${s.done?'✓':s.id}</span>${s.name}</div>`).join('')}
        </div>
        <div style="font-size:12px;color:var(--text-2);margin-top:8px;padding:8px 12px;background:var(--teal-soft);border-radius:8px">📌 当前阶段：${PHONICS_STAGES.find(s=>s.id===currentPhonicsStage).name} · ${PHONICS_STAGES.find(s=>s.id===currentPhonicsStage).desc}</div>
      </div>
      <div class="phonics-letter-grid">
        ${showLetters.map(L=>`<div class="letter-card">
          <div class="letter-card-head">
            <div class="letter-big">${L.l}</div>
            <div class="letter-speak" onclick="speak('${escapeAttr(L.sound.split(',')[0].trim())}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
          </div>
          <div style="font-size:11px;color:var(--text-2);line-height:1.5;padding:6px 8px;background:var(--teal-soft);border-radius:6px;margin:6px 0">👄 ${L.mouth}</div>
          <div class="letter-words">
            ${L.words.map(w=>`<div class="letter-word" onclick="speak('${escapeAttr(w)}')">${w}</div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
      <div class="blending-box">
        <div class="blending-title">🎵 Sound Blending · 滑动拼读</div>
        <div class="blending-stage">
          <div class="blend-tile" onclick="speak('c')">c</div>
          <div class="blend-tile" onclick="speak('a')">a</div>
          <div class="blend-tile" onclick="speak('t')">t</div>
          <div style="font-size:32px;color:var(--text-3)">→</div>
          <div class="blend-tile" style="background:var(--yellow);color:var(--navy)" onclick="speak('cat')">cat</div>
        </div>
        <div class="blend-result">猫咪 🐱 <span>点击每个字母听音，再点整词听合成</span></div>
        <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          ${[['ship','ship'],['shop','shop'],['fish','fish'],['duck','duck'],['think','think'],['cake','cake']].map(([w])=>`<div class="blend-tile" style="width:auto;padding:0 16px;font-size:18px" onclick="speak('${w}')">${w}</div>`).join('')}
        </div>
      </div>
      <div class="mp-box">
        <div class="mp-title">🎯 Minimal Pairs · 最小对立体</div>
        <div class="mp-pair">
          <div class="mp-word">
            <div class="mp-word-text">ship</div>
            <div class="mp-word-meaning">船 🚢 - 短元音 /ɪ/</div>
          </div>
          <div class="mp-speak" onclick="speak('ship')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
          <div class="mp-vs">vs</div>
          <div class="mp-word">
            <div class="mp-word-text">sheep</div>
            <div class="mp-word-meaning">绵羊 🐑 - 长元音 /iː/</div>
          </div>
          <div class="mp-speak" onclick="speak('sheep')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
        </div>
        <div class="mp-pair">
          <div class="mp-word">
            <div class="mp-word-text">bat</div>
            <div class="mp-word-meaning">蝙蝠/球棒 🦇 - 短 /æ/</div>
          </div>
          <div class="mp-speak" onclick="speak('bat')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
          <div class="mp-vs">vs</div>
          <div class="mp-word">
            <div class="mp-word-text">bake</div>
            <div class="mp-word-meaning">烘焙 🍞 - 长魔法e /eɪ/</div>
          </div>
          <div class="mp-speak" onclick="speak('bake')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></div>
        </div>
      </div>`;
  }
  if(subtab==='phrases'){
    const allowedScenes = getPhraseScenesForGrade(grade);
    const firstScene = allowedScenes[0] || Object.keys(PHRASE_BANK)[0];
    return `
      <div style="background:white;border-radius:var(--radius-lg);padding:20px;box-shadow:var(--card-shadow);margin-bottom:16px">
        <h3 style="font-size:18px;color:var(--navy);font-weight:800;margin-bottom:8px">🔡 情景短语库 <span style="font-size:12px;color:var(--text-2);font-weight:600">（${gradeLabel(grade)} · ${allowedScenes.length}个场景）</span></h3>
        <p style="font-size:13px;color:var(--text-2)">覆盖 ${allowedScenes.length}+ 生活场景，每个短语都有严谨释义、使用场景、语气说明和替换变体。点击短语可朗读整句，点单词可查详细释义。</p>
      </div>
      <div class="scene-tabs" id="sceneTabs">
        ${allowedScenes.map((s,i)=>`<div class="scene-tab ${i===0?'active':''}" data-scene="${s}">${s}</div>`).join('')}
      </div>
      <div class="phrase-grid" id="phraseGrid">
        ${PHRASE_BANK[firstScene] ? PHRASE_BANK[firstScene].map(p=>renderPhraseCard(p)).join('') : ''}
      </div>`;
  }
  if(subtab==='grammar'){
    const pills = getGrammarPillsForGrade(grade);
    return `<div class="gram-card">
      <div class="gram-title">
        <h3>✍️ 语法工厂 · 例句动画 <span style="font-size:12px;color:var(--text-2);font-weight:600">（${gradeLabel(grade)} · ${pills.length}个模块）</span></h3>
        <div class="gram-pills" id="gramPills">
          ${pills.map((p,i)=>`<div class="gram-pill ${i===0?'active':''}" data-pill="${p.id}" onclick="switchGramPill('${p.id}')">${p.name}</div>`).join('')}
        </div>
      </div>
      <div id="gramContent">
        <div class="gram-rule">📖 <strong style="color:var(--yellow-700)">${pills[0].name}规则：</strong>${pills[0].rule}</div>
        <div class="gram-sentences" id="gramSentences">
          ${pills[0].sentences.map((s,i)=>`<div class="gram-sen" id="gramSen${i}" onclick="playGramSen(${i},'${s.en.replace(/<[^>]+>/g,'').replace(/'/g,"")}')">
            <div class="gram-sen-num">${i+1}</div>
            <div class="gram-sen-body">${s.en}<span class="gram-sen-cn">${s.cn}</span></div>
            <div class="gram-sen-wave">
              <svg viewBox="0 0 60 24" preserveAspectRatio="none">
                <rect x="2" y="10" width="4" height="4" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="4;14;4" dur="0.8s" repeatCount="indefinite"/></rect>
                <rect x="12" y="6" width="4" height="12" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="2;16;2" dur="1s" repeatCount="indefinite"/></rect>
                <rect x="22" y="8" width="4" height="8" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="6;12;6" dur="0.7s" repeatCount="indefinite"/></rect>
                <rect x="32" y="4" width="4" height="16" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="2;14;2" dur="0.9s" repeatCount="indefinite"/></rect>
                <rect x="42" y="8" width="4" height="8" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="4;14;4" dur="0.85s" repeatCount="indefinite"/></rect>
                <rect x="52" y="10" width="4" height="4" rx="2" fill="var(--teal)">
                  <animate attributeName="y" values="6;12;6" dur="1.1s" repeatCount="indefinite"/></rect>
              </svg>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="gram-card" style="border-top-color:var(--yellow);margin-top:16px">
      <div class="gram-title">
        <h3>💡 语法小贴士</h3>
        <span style="font-size:12px;color:var(--text-2)">点击例句听发音 · 高亮词为语法重点</span>
      </div>
      <div class="gram-sentences">
        <div style="padding:12px 16px;background:var(--yellow-50);border-radius:10px;border-left:3px solid var(--yellow);font-size:13px;color:var(--ink-700);line-height:1.8">
          <strong>① 一般现在时</strong>：句中常出现 every day / always / usually / often / sometimes。<br>
          <strong>② 现在进行时</strong>：句中常出现 now / look! / listen! / right now / at the moment。<br>
          <strong>③ 比较级</strong>：一定要有 than 或两者之间的比较语境，最高级用 the + 形容词est。
        </div>
      </div>
    </div>`;
  }
  if(subtab==='listen'){
    const allItems=typeof LISTENING_DATA!=='undefined'&&LISTENING_DATA||[];
    const items=allItems.filter(i=>i.grade==grade).sort((a,b)=>a.level-b.level);
    if(!items.length) return '<div style="padding:40px;text-align:center;color:var(--text-3)">暂无听力材料</div>';
    const gradeTitle={3:'三年级',4:'四年级',5:'五年级',6:'六年级'}[grade]||'英语';
    return `<div class="listen-wrap">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <h3 style="font-size:17px;color:var(--navy);font-weight:800">🎧 听力森林 · ${gradeTitle}</h3>
        <span style="font-size:12px;color:var(--teal);font-weight:600">${items.length} 套练习</span>
      </div>
      <div id="listenItemList" style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px">
        ${items.map((item,i)=>`<div class="card" style="border-left:3px solid var(--teal);padding:14px;cursor:pointer" onclick="startListenExercise(${i})" id="listenCard${i}">
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:42px;height:42px;border-radius:12px;background:var(--teal-soft);display:flex;align-items:center;justify-content:center;font-size:20px">${item.type==='dialogue'?'💬':item.type==='story'?'📖':item.type==='song'?'🎵':'🎧'}</div>
            <div style="flex:1">
              <div style="font-size:14px;font-weight:700;color:var(--navy)">${item.title}</div>
              <div style="font-size:12px;color:var(--text-2);margin-top:2px">${item.type==='dialogue'?'对话':'故事'} · ${item.duration||'~1min'} · 第${item.level||1}级</div>
            </div>
            <div style="font-size:13px;color:var(--ink-400)">${item.questions?item.questions.length+'题':''}</div>
          </div>
        </div>`).join('')}
      </div>
      <div id="listenExerciseArea"></div>
    </div>`;
  }
  return '';
}

function renderPhraseCard(p){
  return `<div class="phrase-card">
    <div class="phrase-en">${makeClickableSentence(p.en)}</div>
    <div class="phrase-zh"><strong>${p.zh}</strong></div>
    <div class="phrase-def">📖 ${p.def}</div>
    <div class="phrase-variations">🔄 变体：${p.vars.map(v=>`<span class="v-tag">${v}</span>`).join('')}</div>
    <div class="phrase-actions">
      <button onclick="speak('${escapeAttr(p.en)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>朗读</button>
    </div>
  </div>`;
}

let currentPhonicsStage=2;

let currentPersona=0;
const SPEAK_TOPICS = [
  {id:'daily',name:'🏠 日常生活',color:'var(--teal)'},
  {id:'restaurant',name:'🍕 餐厅点餐',color:'var(--yellow)'},
  {id:'school',name:'📚 学校校园',color:'var(--coral)'},
  {id:'travel',name:'✈️ 旅行度假',color:'#8B5CF6'},
  {id:'weather',name:'🌤️ 天气季节',color:'#3B82F6'},
  {id:'hobby',name:'⚽ 兴趣爱好',color:'#EC4899'},
  {id:'animal',name:'🦁 动物世界',color:'#10B981'},
  {id:'birthday',name:'🎂 生日派对',color:'#F59E0B'},
];

/* ============ 口语对话引擎 v4：场景库 + SpeakEngine ============ */
// 8 个分级对话场景：每个场景含老师台词流、学生期望回答、词汇、小贴士
const SPEAK_SCENARIOS = [
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
  }
];

// SpeakEngine：基于场景库 + Web Speech API + 简易 NLP 的口语对话引擎
const SpeakEngine = {
  recognition: null,
  isListening: false,
  SR: (window.SpeechRecognition || window.webkitSpeechRecognition || null),

  // 确保状态字段存在（兼容旧 state，不修改 defaultState）
  init(){
    if(!S.speak.history) S.speak.history = [];
    if(!S.speak.currentScenario) S.speak.currentScenario = null;
    if(typeof S.speak.currentLine !== 'number') S.speak.currentLine = 0;
    if(!S.speak.completed) S.speak.completed = false;
  },
  getScenario(){ return SPEAK_SCENARIOS.find(s=>s.id===S.speak.currentScenario); },
  getTeacherObj(){
    const t = S.speak.teacher || 'Emma';
    return PERSONAS.find(p=>p.name===t) || PERSONAS[0];
  },
  // 当前轮学生的期望回答
  currentExpected(){
    const sc = this.getScenario();
    if(!sc) return null;
    const line = sc.teacherLines[S.speak.currentLine];
    if(!line) return null;
    return sc.studentExpected.find(e=>e.teacherLineId===line.id) || null;
  },

  // 开始新对话：重置历史，老师朗读第一句
  startDialogue(scenarioId, teacherName){
    this.init();
    if(teacherName) S.speak.teacher = teacherName;
    S.speak.currentScenario = scenarioId;
    S.speak.history = [];
    S.speak.currentLine = 0;
    S.speak.completed = false;
    const sc = SPEAK_SCENARIOS.find(s=>s.id===scenarioId);
    if(!sc) return;
    const first = sc.teacherLines[0];
    this.pushMsg('teacher', first.text, {cn:first.cn});
    saveState();
    this.renderDialogue();
    speak(first.text);
  },
  selectScenario(id){
    this.startDialogue(id, null);
    const sc = SPEAK_SCENARIOS.find(s=>s.id===id);
    if(sc) toast(sc.icon + ' 开始场景：' + sc.title);
  },
  selectTeacher(name){
    S.speak.teacher = name;
    const idx = PERSONAS.findIndex(p=>p.name===name);
    if(idx>=0) currentPersona = idx; // 同步旧变量
    saveState();
    toast('👩‍🏫 切换老师：' + name);
    $('#contentArea').innerHTML = renderSpeak();
  },

  pushMsg(role, text, meta){
    S.speak.history.push({role, text, score:null, matched:false, meta:meta||null, ts:Date.now()});
  },

  // 文本输入发送
  sendInput(){
    const inp = $('#seInput');
    if(!inp) return;
    const text = inp.value.trim();
    if(!text) return;
    inp.value = '';
    this.processStudentInput(text);
  },
  onInputKey(e){
    if(e.key==='Enter' && !e.shiftKey){
      e.preventDefault();
      this.sendInput();
    }
  },

  // 处理孩子输入：评分 + 关键词匹配 + 生成老师回复 + 推进对话
  processStudentInput(text){
    this.init();
    if(S.speak.completed){
      toast('对话已结束，可换一个场景继续哦 ✨');
      return;
    }
    if(!this.getScenario()){
      toast('请先从左侧选一个场景开始对话～');
      return;
    }
    this.pushMsg('student', text, null);
    const idx = S.speak.history.length - 1;
    const exp = this.currentExpected();
    let score = 0, matched = false;
    if(exp){
      score = this.bestScore(exp.suggestions, text);
      matched = this.matchKeywords(text, exp.keywords);
    }
    S.speak.history[idx].score = score;
    S.speak.history[idx].matched = matched;
    const reply = this.generateTeacherReply(matched);
    this.pushMsg('teacher', reply.text, {cn:reply.cn});
    const sc = this.getScenario();
    const nextIdx = S.speak.currentLine + 1;
    if(sc && sc.teacherLines[nextIdx]){
      S.speak.currentLine = nextIdx;
    } else {
      S.speak.completed = true;
      setStar(5, '完成口语对话');
    }
    saveState();
    this.renderDialogue();
    speak(reply.text);
  },

  // 生成老师回复：鼓励语 + 下一段台词（或结束语）
  generateTeacherReply(matched){
    const sc = this.getScenario();
    const good = ['Great! ','Awesome! ','Good job! ','Well done! ','Perfect! ','Excellent! '];
    const bad  = ["That's okay! ","Don't worry! ","Good try! ","Almost! ","Let me help. "];
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    const enc = matched ? pick(good) : pick(bad);
    const nextIdx = S.speak.currentLine + 1;
    if(sc && sc.teacherLines[nextIdx]){
      const nl = sc.teacherLines[nextIdx];
      return {text: enc + nl.text, cn: nl.cn};
    }
    return {text: enc + "You did wonderfully! See you next time!", cn:"你表现得太棒了！下次见！"};
  },

  // 关键词匹配 + 模糊容错（包含匹配 或 单词级编辑距离 <= 2）
  matchKeywords(text, keywords){
    const t = (text||'').toLowerCase();
    if(!t) return false;
    const words = t.split(/[^a-z']+/).filter(Boolean);
    return keywords.some(k=>{
      const kk = (k||'').toLowerCase();
      if(!kk) return false;
      if(t.includes(kk)) return true;
      return words.some(w => this.levenshtein(w, kk) <= 2);
    });
  },

  // 在多个候选建议中取最高相似度作为发音得分
  bestScore(suggestions, recognized){
    if(!suggestions || !suggestions.length) return 50;
    return Math.max.apply(null, suggestions.map(s => this.scorePronunciation(s, recognized)));
  },

  // 发音评分：基于 Levenshtein 距离的相似度，转 0-100 分
  scorePronunciation(expected, recognized){
    const e = (expected||'').toLowerCase().replace(/[^a-z\s]/g,'').trim();
    const r = (recognized||'').toLowerCase().replace(/[^a-z\s]/g,'').trim();
    if(!e && !r) return 0;
    if(!e || !r) return r ? 40 : 20;
    const dist = this.levenshtein(e, r);
    const maxLen = Math.max(e.length, r.length);
    const sim = maxLen ? 1 - dist/maxLen : 1;
    return Math.round(Math.max(0, Math.min(1, sim)) * 100);
  },

  // Levenshtein 编辑距离
  levenshtein(a, b){
    if(a === b) return 0;
    if(!a.length) return b.length;
    if(!b.length) return a.length;
    const m = [];
    for(let i=0; i<=b.length; i++) m[i] = [i];
    for(let j=0; j<=a.length; j++) m[0][j] = j;
    for(let i=1; i<=b.length; i++){
      for(let j=1; j<=a.length; j++){
        const cost = (a[j-1] === b[i-1]) ? 0 : 1;
        m[i][j] = Math.min(m[i-1][j]+1, m[i][j-1]+1, m[i-1][j-1]+cost);
      }
    }
    return m[b.length][a.length];
  },

  // 语音识别（Web Speech API SpeechRecognition），不支持时降级为文本输入
  toggleMic(){ this.isListening ? this.stopListening() : this.startListening(); },
  startListening(){
    if(!this.SR){
      toast('当前浏览器不支持语音识别，请用文本输入 ✍️');
      const inp = $('#seInput'); if(inp) inp.focus();
      return;
    }
    if(this.isListening){ this.stopListening(); return; }
    try{ this.recognition = new this.SR(); }
    catch(e){ toast('语音识别初始化失败'); return; }
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.onresult = (ev)=>{
      const tr = ev.results[0][0].transcript;
      const inp = $('#seInput');
      if(inp) inp.value = tr;
      toast('🎤 识别：' + tr);
      this.processStudentInput(tr);
    };
    this.recognition.onerror = (ev)=>{
      this.isListening = false; this.updateMicBtn();
      toast('识别出错：' + (ev.error||'未知'));
    };
    this.recognition.onend = ()=>{
      this.isListening = false; this.updateMicBtn();
    };
    this.recognition.start();
    this.isListening = true;
    this.updateMicBtn();
    toast('🎤 正在听... 请大声回答');
  },
  stopListening(){
    if(this.recognition && this.isListening){
      try{ this.recognition.stop(); }catch(e){}
    }
    this.isListening = false;
    this.updateMicBtn();
  },
  updateMicBtn(){
    const btn = $('#seMic');
    if(!btn) return;
    if(this.isListening) btn.classList.add('recording');
    else btn.classList.remove('recording');
  },

  // 重听老师某句
  replay(idx){
    const m = S.speak.history[idx];
    if(m && m.role==='teacher'){ speechSynthesis.cancel(); speak(m.text); }
  },

  // 单词点查：发音 + 显示释义（复用 WORD_DICT）
  wordClick(word){
    const w = (word||'').toLowerCase().replace(/[^a-z']/g,'');
    if(!w) return;
    speak(w);
    const data = WORD_DICT[w];
    if(data){
      toast('📖 ' + w + ' · ' + data.pos + ' · ' + data.def.slice(0,28) + '…');
    } else {
      toast('🔊 ' + w);
    }
  },

  // 显示建议回答（可点击填入输入框）
  showHint(){
    const box = $('#seHint');
    if(!box) return;
    const exp = this.currentExpected();
    if(!exp){ box.innerHTML = '<span style="color:var(--text-2)">先选一个场景开始对话吧～</span>'; return; }
    box.innerHTML = '<span style="color:var(--text-2);margin-right:4px">💡 你可以说：</span>' +
      exp.suggestions.map(s=>'<span class="se-chip" onclick="SpeakEngine.useHint(this)" data-text="'+s.replace(/"/g,'&quot;')+'">'+s+'</span>').join('');
  },
  toggleHint(){
    const box = $('#seHint');
    if(!box) return;
    if(!this.getScenario()){ toast('先选一个场景开始对话哦～'); return; }
    this.showHint();
    box.classList.toggle('hidden');
  },
  useHint(el){
    const t = el.getAttribute('data-text') || el.textContent;
    const inp = $('#seInput');
    if(inp){ inp.value = t; inp.focus(); }
  },

  scoreFeedback(s){
    if(s>=85) return '发音很棒！🌟';
    if(s>=70) return '不错，继续加油！👍';
    if(s>=50) return '可以再练习一下 💪';
    return '没关系，多说几次 🌱';
  },

  // 渲染对话气泡 HTML
  messagesHTML(){
    const teacher = this.getTeacherObj();
    if(!S.speak.history.length){
      return '<div class="se-empty">'+
        '<div class="se-empty-emoji">🗣️</div>'+
        '<div class="se-empty-title">和 '+teacher.name+' 老师自由交谈吧！</div>'+
        '<div class="se-empty-sub">从左侧选一个场景，点击即可开始对话</div>'+
      '</div>';
    }
    return S.speak.history.map((m, i)=>{
      if(m.role==='teacher'){
        const cn = (m.meta && m.meta.cn) ? '<div class="se-cn">'+m.meta.cn+'</div>' : '';
        return '<div class="msg ai">'+
          '<div class="msg-avatar"><img src="'+teacher.avatar+'" alt=""></div>'+
          '<div>'+
            '<div class="msg-bubble">'+makeClickableSentence(m.text)+'</div>'+
            cn+
            '<div class="se-replay" onclick="SpeakEngine.replay('+i+')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg> 再听一遍</div>'+
          '</div>'+
        '</div>';
      } else {
        const s = (typeof m.score==='number') ? m.score : null;
        const fb = (s===null) ? '' : this.scoreFeedback(s);
        const matched = m.matched;
        const scoreBox = (s===null) ? '' :
          '<div class="se-score '+(matched?'ok':'low')+'"><span class="se-score-num">'+s+'</span><span class="se-score-fb">'+fb+'</span>'+(matched?' ✅':' 💪')+'</div>';
        return '<div class="msg me"><div>'+
          '<div class="msg-bubble">'+makeClickableSentence(m.text)+'</div>'+
          scoreBox+
        '</div></div>';
      }
    }).join('') + (S.speak.completed ?
      '<div class="se-done">🎉 对话完成！可获得 <strong>+30 ⭐</strong> '+
      '<button class="se-again" onclick="SpeakEngine.startDialogue(S.speak.currentScenario)">再来一次</button></div>' : '');
  },

  // 增量更新对话区（不重绘整个视图，保持麦克风状态）
  renderDialogue(){
    this.init();
    const sc = this.getScenario();
    const st = $('#seStatus');
    if(st){
      st.textContent = sc ? ('在线 · '+sc.icon+' '+sc.title+' · 第 '+Math.min(S.speak.currentLine+1, sc.teacherLines.length)+'/'+sc.teacherLines.length+' 轮')
                          : '在线 · 等待选择场景';
    }
    const box = $('#seMessages');
    if(box){ box.innerHTML = this.messagesHTML(); box.scrollTop = box.scrollHeight; }
    this.showHint();
    const vocab = $('#seVocab');
    if(vocab){
      vocab.innerHTML = sc ? sc.vocabulary.map(w=>{
        const d = WORD_DICT[w]; const zh = d ? d.pos.split(' ')[0] : '';
        return '<div class="scene-word-item" onclick="SpeakEngine.wordClick(\''+w+'\')"><div><div class="scene-word-en">'+w+'</div><div class="scene-word-zh">'+(zh||'点击听发音')+'</div></div><button><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></button></div>';
      }).join('') : '<div style="font-size:12px;color:var(--text-2);padding:8px 4px">选择场景后显示词汇</div>';
    }
    const tip = $('#seTips');
    if(tip){ tip.textContent = sc ? sc.tips : '选择一个场景，和老师开始自由交谈吧！'; }
  }
};

function renderSpeak(){
  SpeakEngineV5.init();
  const teacher = SpeakEngineV5.getTeacher(S.speakV5.teacher);
  const scenarios = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS : [];
  const sc = scenarios.find(s => s.id === S.speakV5.scenario);
  const teachers = SpeakEngineV5.teachers;
  const srOK = !!SpeakEngineV5.SR;
  const deepseekOK = !!(S.apiConfig && S.apiConfig.deepseekKey);
  return `
    <style id="seStyle">
      .se-left{display:flex;flex-direction:column;gap:8px}
      .se-section-title{font-size:13px;font-weight:800;color:var(--navy);padding:0 4px;margin-bottom:2px}
      .se-scenarios{display:flex;flex-direction:column;gap:8px}
      .se-scenario-card{display:flex;gap:10px;align-items:center;background:white;border-radius:12px;padding:10px 12px;box-shadow:var(--card-shadow);cursor:pointer;transition:all .2s;border:2px solid transparent}
      .se-scenario-card:hover{transform:translateY(-1px);border-color:var(--teal-soft)}
      .se-scenario-card.active{border-color:var(--teal);background:linear-gradient(135deg,#fff,rgba(0,168,150,.06))}
      .se-sc-icon{font-size:20px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:var(--teal-soft);border-radius:10px;flex-shrink:0}
      .se-sc-body{flex:1;min-width:0}
      .se-sc-title{font-size:13px;font-weight:700;color:var(--navy)}
      .se-sc-desc{font-size:11px;color:var(--text-2);margin-top:1px}
      .se-sc-level{font-size:10px;font-weight:800;color:white;background:var(--yellow);padding:2px 6px;border-radius:8px;flex-shrink:0}
      .se-teachers{display:flex;flex-direction:column;gap:8px}
      .se-teacher-card{display:flex;gap:10px;align-items:center;background:white;border-radius:12px;padding:8px 10px;box-shadow:var(--card-shadow);cursor:pointer;transition:all .2s;border:2px solid transparent}
      .se-teacher-card:hover{border-color:var(--teal-soft)}
      .se-teacher-card.active{border-color:var(--teal);background:linear-gradient(135deg,#fff,rgba(0,168,150,.05))}
      .se-t-info{flex:1;min-width:0}
      .se-t-name{font-size:13px;font-weight:700;color:var(--navy)}
      .se-t-desc{font-size:10px;color:var(--text-2);margin-top:1px}
      .se-empty{margin:auto;text-align:center;color:var(--text-2);padding:30px 20px}
      .se-empty-emoji{font-size:46px;margin-bottom:10px}
      .se-empty-title{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px}
      .se-empty-sub{font-size:12px}
      .se-cn{font-size:11px;color:var(--text-2);margin-top:4px;padding-left:2px}
      .se-replay{display:inline-flex;align-items:center;gap:4px;margin-top:6px;font-size:11px;color:var(--teal);cursor:pointer;font-weight:600;padding:3px 8px;border-radius:8px;background:rgba(0,168,150,.08)}
      .se-replay:hover{background:rgba(0,168,150,.16)}
      .se-replay svg{width:12px;height:12px;fill:var(--teal)}
      .se-score{display:inline-flex;align-items:center;gap:6px;margin-top:6px;padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600}
      .se-score.ok{background:rgba(0,168,150,.12);color:var(--teal)}
      .se-score.low{background:rgba(245,184,0,.14);color:var(--yellow-600)}
      .se-score-num{font-size:14px;font-weight:900}
      .se-score-fb{color:var(--text-2);font-weight:500}
      .se-done{margin-top:10px;padding:14px;text-align:center;background:linear-gradient(135deg,var(--teal-soft),rgba(245,184,0,.08));border-radius:14px;font-size:13px;color:var(--navy)}
      .se-again{margin-left:8px;padding:5px 12px;border:none;border-radius:8px;background:var(--teal);color:white;font-size:12px;font-weight:700;cursor:pointer}
      .se-again:hover{background:var(--teal-600)}
      .se-hint-row{padding:8px 14px;background:var(--yellow-50);border-top:1px solid rgba(245,184,0,.2);font-size:12px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
      .se-hint-row.hidden{display:none}
      .se-chip{display:inline-block;padding:4px 10px;background:white;border:1.5px solid var(--yellow);color:var(--navy);border-radius:14px;font-size:12px;cursor:pointer;font-weight:600;transition:all .15s}
      .se-chip:hover{background:var(--yellow);color:white}
      .se-act-btn{width:44px;height:44px;border-radius:12px;border:1.5px solid rgba(30,58,95,.1);background:white;cursor:pointer;font-size:18px;flex-shrink:0;transition:all .15s}
      .se-act-btn:hover{border-color:var(--yellow);background:var(--yellow-50)}
      .mic-btn.disabled{background:#cbd5e1;box-shadow:none;cursor:not-allowed;opacity:.7}
      .se-tip-box{font-size:12px;color:var(--ink-700);line-height:1.7;background:rgba(245,184,0,.06);border-radius:8px;padding:10px 12px;border-left:3px solid var(--yellow)}
    </style>
    <div class="speak-layout">
      <div class="se-left">
        <div class="se-section-title">📚 对话场景</div>
        <div class="se-scenarios">
          ${scenarios.map(s=>`
            <div class="se-scenario-card ${S.speakV5.scenario===s.id?'active':''}" onclick="selectScenarioV5('${s.id}')">
              <div class="se-sc-icon">${s.icon}</div>
              <div class="se-sc-body">
                <div class="se-sc-title">${s.title}</div>
                <div class="se-sc-desc">${s.desc}</div>
              </div>
              <div class="se-sc-level">L${s.level}</div>
            </div>
          `).join('')}
        </div>
        <div class="se-section-title" style="margin-top:14px">👩‍🏫 选择老师 ${deepseekOK?'<span style="font-size:10px;color:var(--teal);font-weight:600">AI已启用</span>':'<span style="font-size:10px;color:var(--yellow-600);font-weight:600">降级模式</span>'}</div>
        <div class="se-teachers">
          ${Object.keys(teachers).map(tid=>{
            const t=teachers[tid];
            return `<div class="se-teacher-card ${S.speakV5.teacher===tid?'active':''}" onclick="selectTeacherV5('${tid}')">
              <div class="persona-avatar" style="width:40px;height:40px;overflow:hidden;border-radius:50%;background:var(--teal-soft)"><img src="${t.avatarImg||''}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'"></div>
              <div class="se-t-info">
                <div class="se-t-name">${t.name}</div>
                <div class="se-t-desc">${t.personality}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="chat-area">
        <div class="chat-header">
          <div class="chat-header-avatar"><img src="${teacher.avatarImg||''}" alt="" onerror="this.style.display='none'"></div>
          <div class="chat-header-info">
            <div class="chat-header-name">${teacher.name}</div>
            <div class="chat-header-status" id="seStatus">在线 · ${sc?sc.icon+' '+sc.title:'等待选择场景'} ${S.apiConfig&&S.apiConfig.deepseekKey?'· AI对话':'· 降级模式'}</div>
          </div>
          ${sc?`<button class="btn btn-ghost" style="font-size:12px;padding:6px 12px" onclick="SpeakEngineV5.startDialog(S.speakV5.teacher,'${sc.id}');document.getElementById('seV5Dialog').innerHTML=SpeakEngineV5.renderDialog()">🔄 重新开始</button>`:''}
        </div>
        <div class="chat-messages" id="seV5Dialog" style="padding:14px;overflow-y:auto;flex:1">${SpeakEngineV5.renderDialog()}</div>
        <div class="se-hint-row" id="seHint"><span style="color:var(--text-2)">💡 ${sc?'输入英文或点击🎤说话，和老师自由交谈':'先选一个场景开始对话～'}</span></div>
      </div>

      <div class="speak-side">
        <div class="scene-words">
          <h4>🔤 本场景词汇</h4>
          <div class="scene-word-list" id="seVocab">
            ${sc ? sc.vocabulary.map(w=>{
              const d=(typeof WORD_DICT!=='undefined'&&WORD_DICT[w])||null; const zh=d?d.pos.split(' ')[0]:'';
              return `<div class="scene-word-item" onclick="wordClickV5('${w}')"><div><div class="scene-word-en">${w}</div><div class="scene-word-zh">${zh||'点击听发音'}</div></div><button><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg></button></div>`;
            }).join('') : '<div style="font-size:12px;color:var(--text-2);padding:8px 4px">选择场景后显示词汇</div>'}
          </div>
        </div>
        <div class="sentence-templates">
          <h4>💡 学习小贴士</h4>
          <div class="se-tip-box" id="seTips">${sc?sc.tips:'选择一个场景，和老师开始自由交谈吧！'}</div>
        </div>
        <div class="daily-challenge">
          <h4>🎯 口语挑战</h4>
          <p>完成 3 个不同场景的对话，解锁"口语小达人"徽章！</p>
          <div class="reward">+50 ⭐</div>
        </div>
      </div>
    </div>
  `;
}

// ===== V5 口语辅助函数 =====
function selectScenarioV5(id){
  SpeakEngineV5.init();
  S.speakV5.scenario = id;
  SpeakEngineV5._save();
  SpeakEngineV5.startDialog(S.speakV5.teacher, id);
  const box = document.getElementById('seV5Dialog');
  if(box) box.innerHTML = SpeakEngineV5.renderDialog();
  const status = document.getElementById('seStatus');
  const sc = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS.find(s=>s.id===id) : null;
  if(status && sc) status.textContent = '在线 · ' + sc.icon + ' ' + sc.title + (S.apiConfig&&S.apiConfig.deepseekKey?' · AI对话':' · 降级模式');
  if(typeof toast === 'function') toast('🎯 ' + (sc?sc.title:'场景') + ' · 开始对话！');
}
function selectTeacherV5(tid){
  SpeakEngineV5.init();
  S.speakV5.teacher = tid;
  SpeakEngineV5._save();
  $('#contentArea').innerHTML = renderSpeak();
  const t = SpeakEngineV5.getTeacher(tid);
  if(typeof toast === 'function') toast('👩‍🏫 ' + t.name + ' 老师已选中');
}
function wordClickV5(w){
  if(typeof speak === 'function') speak(w);
  const d = (typeof WORD_DICT !== 'undefined') ? WORD_DICT[w] : null;
  if(typeof toast === 'function') toast(d ? (w + ' ' + d.pos.split(' ')[0]) : (w + ' 🔊'));
}

function switchPersona(i){
  currentPersona=i;
  $('#contentArea').innerHTML=renderSpeak();
  bindSpeakEvents();
}

function fillTemplate(t){
  const inp=$('#chatInput');
  inp.value=t;
  inp.focus();
}

let isRecording=false;
function toggleMic(){
  if(typeof SpeakEngineV5!=='undefined') SpeakEngineV5.toggleMic();
}

function bindSpeakEvents(){
  const inp=$('#chatInput');
  if(!inp)return;
  inp.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'&&!e.shiftKey){
      e.preventDefault();
      const text=inp.value.trim();
      if(!text)return;
      const msgs=$('#chatMessages');
      msgs.insertAdjacentHTML('beforeend',`<div class="msg me"><div class="msg-bubble">${makeClickableSentence(text)}</div></div>`);
      inp.value='';
      msgs.scrollTop=msgs.scrollHeight;
      setTimeout(()=>{
        msgs.insertAdjacentHTML('beforeend',`<div class="msg ai"><div class="msg-avatar"><img src="${PERSONAS[currentPersona].avatar}" alt=""></div><div><div class="msg-bubble">${makeClickableSentence("That sounds great! Anything else you'd like to try?")}</div></div></div>`);
        msgs.scrollTop=msgs.scrollHeight;
      },800);
    }
  });
}

function renderPet(){
  const pet=(S.pet&&PETS[S.pet.idx])||PETS[0]||{name:'宝贝',avatar:'',type:'星云龙'};
  return `
    <div class="pet-layout">
      <div class="pet-stage">
        <div class="pet-selector">
          ${PETS.map((p,i)=>`<div class="pet-sel-item ${i===S.pet.idx?'active':''}" onclick="switchPet(${i})"><img src="${p.avatar}" alt="${p.type}"></div>`).join('')}
        </div>
        <div class="pet-display" id="petDisplay">
          <img id="petAvatar" src="${pet.avatar}" style="width:200px;height:200px;object-fit:cover;border-radius:20px;box-shadow:var(--card-shadow);display:block;margin:0 auto">
        </div>
        <div class="pet-info">
          <div class="pet-name">${pet.name} · ${pet.type}</div>
          <div>
            <span class="pet-level">Lv.${S.pet.level}</span>
            <span class="pet-rarity">${pet.rarity}</span>
          </div>
        </div>
        <div class="pet-action-row">
          <button class="pet-action-btn" onclick="petAction('feed')">🍗 喂食</button>
          <button class="pet-action-btn" onclick="petAction('play')">🎮 玩耍</button>
          <button class="pet-action-btn" onclick="petAction('train')">🎯 训练</button>
          <button class="pet-action-btn" onclick="petAction('bath')">🛁 洗澡</button>
          <button class="pet-action-btn" onclick="petAction('sleep')">💤 睡觉</button>
          <button class="pet-action-btn" onclick="petAction('wave')">👋 挥手</button>
          <button class="pet-action-btn" onclick="petAction('nod')">👍 点头</button>
        </div>

        <!-- 🎮 训练小游戏 -->
        <div class="pet-mini-wrap">
          <div class="pet-mini-head">
            <h3>🎮 训练小游戏</h3>
            <div class="pet-coin">💰 ${S.pet.coins} 金币</div>
          </div>
          <div class="pet-mini-grid">
            <div class="mini-game-card c1" onclick="playMiniGame('memory')">
              <div class="mini-game-ic">🃏</div>
              <div>
                <div class="mini-game-title">记忆翻牌</div>
                <div class="mini-game-desc">翻开匹配相同卡片，锻炼记忆力</div>
              </div>
            </div>
            <div class="mini-game-card c2" onclick="playMiniGame('math')">
              <div class="mini-game-ic">🧮</div>
              <div>
                <div class="mini-game-title">数学速算</div>
                <div class="mini-game-desc">快速计算加减乘除，挑战反应力</div>
              </div>
            </div>
            <div class="mini-game-card c3" onclick="playMiniGame('word')">
              <div class="mini-game-ic">📝</div>
              <div>
                <div class="mini-game-title">单词接龙</div>
                <div class="mini-game-desc">首尾字母相连，扩充词汇量</div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="pet-side-panel">
        <div class="pet-stats-card">
          <h4>❤️ 宠物状态</h4>
          ${[
            ['饱食',S.pet.hunger],
            ['心情',S.pet.mood],
            ['经验',Math.round(S.pet.exp%100)],
            ['清洁',S.pet.clean],
          ].map(([k,v])=>`
            <div class="stat-bar-item">
              <div class="stat-bar-head"><span class="stat-bar-name">${k}</span><span class="stat-bar-val">${v}</span></div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${v}%"></div></div>
            </div>
          `).join('')}
        </div>
        <div class="evolution-card">
          <h4 style="font-size:14px;color:var(--navy);font-weight:700">🌟 进化线</h4>
          <div class="evolution-track">
            <div class="evo-node done"><div class="evo-dot">1</div><div class="evo-name">蛋形态</div><div class="evo-lvl">0级</div></div>
            <div class="evo-node done"><div class="evo-dot">2</div><div class="evo-name">幼年体</div><div class="evo-lvl">5级</div></div>
            <div class="evo-node current"><div class="evo-dot">3</div><div class="evo-name">少年体</div><div class="evo-lvl">Lv.${S.pet.level}</div></div>
            <div class="evo-node"><div class="evo-dot">4</div><div class="evo-name">成年体</div><div class="evo-lvl">20级</div></div>
            <div class="evo-node"><div class="evo-dot">5</div><div class="evo-name">觉醒态</div><div class="evo-lvl">30级</div></div>
          </div>
        </div>

        <div class="pet-stats-card">
          <h4>🏆 成就墙</h4>
          <div class="achievement-wall">
            ${[['连续7天',true],['100词汇',true],['计算达人',true],['首个满分',true],['1000星',true],['口语王者',false],['SSR进化',false],['满级毕业',false]].map(([n,u])=>`<div class="achv-item ${u?'unlocked':'locked'}"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/></svg><div>${n}</div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function switchPet(i){
  currentPetIdx=i;
  S.pet.idx=i;
  saveState();
  const fpImg = document.querySelector('#floatingPet img');
  if(fpImg) fpImg.setAttribute('src', PETS[i].avatar);
  const fpLv = document.querySelector('#floatingPet [style*="Lv"]');
  if(fpLv) fpLv.textContent = 'Lv'+S.pet.level;
  $('#contentArea').innerHTML=renderPet();
  updatePetAvatar();
}

function updatePetAvatar(){
  const pet=PETS[S.pet.idx];
  const img=$('#petAvatar');
  if(img)img.src=pet.avatar;
}


function petAction(action){
  const stage=document.querySelector('.pet-stage');
  const showTip=(text)=>{
    const tip=document.createElement('div');
    tip.style.cssText='position:absolute;top:35%;left:50%;transform:translateX(-50%);padding:8px 18px;border-radius:20px;background:rgba(0,168,150,0.9);color:white;font-size:14px;font-weight:700;pointer-events:none;z-index:10;animation:floatTipUp 1.2s ease forwards;';
    tip.textContent=text;
    stage.appendChild(tip);
    setTimeout(()=>tip.remove(),1200);
  };
  if(action==='feed'){
    S.pet.hunger=Math.min(100,S.pet.hunger+10);
    showTip('🍖 +10 饱食');toast('🍗 喂食成功！饱食+10');
  }else if(action==='play'){
    S.pet.mood=Math.min(100,S.pet.mood+15);S.pet.exp+=8;
    showTip('🎮 +15 心情');toast('🎮 玩耍开心！心情+15 经验+8');
    checkPetLevelUp();
  }else if(action==='train'){
    S.pet.exp+=20;
    showTip('🎯 +20 经验');toast('🎯 训练完成！经验+20');
    checkPetLevelUp();
  }else if(action==='bath'){
    S.pet.clean=Math.min(100,S.pet.clean+12);
    showTip('🛁 +12 清洁');toast('🛁 洗澡完成！清洁+12');
  }else if(action==='sleep'){
    S.pet.energy=Math.min(100,(S.pet.energy||0)+10);
    showTip('💤 +10 精力');toast('💤 宠物开始打瞌睡了～');
  }else if(action==='wave'){
    S.pet.mood=Math.min(100,(S.pet.mood||0)+3);
    showTip('👋 挥挥手');toast('👋 宠物在和你打招呼～');
  }else if(action==='nod'){
    S.pet.mood=Math.min(100,(S.pet.mood||0)+5);
    showTip('👍 +5 心情');toast('👍 宠物点头赞同～');
  }
  saveState();
  const fpLv=document.querySelector('#floatingPet [style*="Lv"]');
  if(fpLv)fpLv.textContent='Lv'+S.pet.level;
}

// 添加 floatTipUp 动画
(function addPetTipStyle(){
  const style=document.createElement('style');
  style.textContent=`@keyframes floatTipUp{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(-40px)}}`;
  document.head.appendChild(style);
})();

function checkPetLevelUp(){
  if(S.pet.exp >= 100){
    const lvUpCount = Math.floor(S.pet.exp / 100);
    S.pet.level += lvUpCount;
    S.pet.exp = S.pet.exp % 100;
    toast(`🎉 恭喜升级！宠物达到 Lv.${S.pet.level}`);
    S.pet.coins += 10 * lvUpCount;
    const fpLv = document.querySelector('#floatingPet [style*="Lv"]');
    if(fpLv) fpLv.textContent = 'Lv'+S.pet.level;
  }
}

function showFloatTip(stage,text){
  const tip=document.createElement('div');
  tip.className='float-tip';
  tip.textContent=text;
  tip.style.left='50%';
  tip.style.top='40%';
  tip.style.transform='translateX(-50%)';
  stage.appendChild(tip);
  setTimeout(()=>tip.remove(),1200);
}

/* ============ 口语波形 & 评分 ============ */
let waveformTimer=null;
let wfRecording=false;
function startWaveformRec(){
  if(wfRecording)return;
  wfRecording=true;
  const status=$('#wfStatus');
  const recBtn=$('#wfRecBtn');
  const recText=$('#wfRecText');
  const stopBtn=$('#wfStopBtn');
  if(status){status.className='wf-status rec';status.innerHTML='<span>●</span> 录音中...';}
  if(recBtn){recBtn.className='wf-btn warn';}
  if(recText){recText.textContent='录音中';}
  if(stopBtn){stopBtn.style.display='flex';}
  toast('🎤 开始录音，请跟读...');
  waveformTimer=setInterval(()=>{
    for(let i=0;i<20;i++){
      const bar=$('#wfBar'+i);
      if(bar){
        const h=20+Math.random()*75;
        bar.style.height=h+'%';
        bar.classList.remove('silence');
      }
    }
  },80);
  setTimeout(()=>{
    if(wfRecording)stopWaveformRec();
  },3000);
}
function stopWaveformRec(){
  wfRecording=false;
  if(waveformTimer){clearInterval(waveformTimer);waveformTimer=null;}
  for(let i=0;i<20;i++){
    const bar=$('#wfBar'+i);
    if(bar){
      bar.style.height=(20+Math.random()*20)+'%';
      bar.classList.add('silence');
    }
  }
  const status=$('#wfStatus');
  const recBtn=$('#wfRecBtn');
  const recText=$('#wfRecText');
  const stopBtn=$('#wfStopBtn');
  if(status){status.className='wf-status idle';status.innerHTML='<span>●</span> 已完成';}
  if(recBtn){recBtn.className='wf-btn primary';}
  if(recText){recText.textContent='再录一次';}
  if(stopBtn){stopBtn.style.display='none';}
  toast('✅ 录音完成，正在评分...');
  setTimeout(showScoreCard,500);
}
function showScoreCard(){
  const wrap=$('#scoreCardWrap');
  if(!wrap)return;
  const score=75+Math.floor(Math.random()*21);
  const grade=score>=90?'a':score>=80?'b':'c';
  const gradeText={a:'A · 优秀',b:'B · 良好',c:'C · 加油'}[grade];
  const pron=70+Math.floor(Math.random()*30);
  const flu=65+Math.floor(Math.random()*35);
  const gram=60+Math.floor(Math.random()*40);
  const tagOk=(n)=>`<span class="score-tag ok">发音准确</span>`.repeat(n?1:0);
  const tagWarn=(n)=>`<span class="score-tag warn">声调起伏</span>`.repeat(n?1:0);
  const tagBad=(n)=>`<span class="score-tag bad">需加强</span>`.repeat(n?1:0);
  const words=[
    {w:"I'd",c:Math.random()>.3?'ok':'warn'},
    {w:'like',c:Math.random()>.2?'ok':'ok'},
    {w:'a',c:'ok'},
    {w:'pizza',c:Math.random()>.4?'ok':'bad'},
    {w:'and',c:'ok'},
    {w:'an',c:Math.random()>.5?'ok':'warn'},
    {w:'orange',c:Math.random()>.3?'warn':'bad'},
    {w:'juice,',c:'ok'},
    {w:'please.',c:Math.random()>.2?'ok':'warn'},
  ];
  const circumference=2*Math.PI*45;
  const offset=circumference*(1-score/100);
  wrap.innerHTML=`
    <div class="score-card">
      <div class="score-head">
        <div class="score-ring">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" stroke-width="8"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="${grade==='a'?'#00A896':grade==='b'?'#F5B800':'#FB923C'}" 
                    stroke-width="8" stroke-linecap="round"
                    stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
                    transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 1s ease"/>
            <text x="50" y="54" text-anchor="middle" font-size="20" font-weight="900" fill="var(--navy)" font-family="Inter">${score}</text>
          </svg>
        </div>
        <div class="score-detail">
          <div class="score-grade ${grade}">${gradeText}</div>
          <div class="score-label">综合跟读评分 · 超过 ${60+Math.floor(Math.random()*30)}% 的同学</div>
          <div class="score-row">
            ${pron>=85?tagOk(1):pron>=70?tagWarn(1):tagBad(1)}
            ${flu>=85?tagOk(1):flu>=70?tagWarn(1):tagBad(1)}
            ${gram>=85?tagOk(1):gram>=70?tagWarn(1):tagBad(1)}
          </div>
          <div class="score-row">
            <div class="score-tag ${pron>=85?'ok':pron>=70?'warn':'bad'}">发音 ${pron}</div>
            <div class="score-tag ${flu>=85?'ok':flu>=70?'warn':'bad'}">流利度 ${flu}</div>
            <div class="score-tag ${gram>=85?'ok':gram>=70?'warn':'bad'}">节奏 ${gram}</div>
          </div>
        </div>
      </div>
      <div class="score-detail-title">📝 逐词评分（点击可单独回放）</div>
      <div class="word-grade">
        ${words.map(w=>`<div class="wg ${w.c}" onclick="speak('${escapeAttr(w.w.replace(/[^a-zA-Z']/g,'')||'ok')}')">${w.w}</div>`).join('')}
      </div>
    </div>`;
  setStar(grade==='a'?5:grade==='b'?3:1,'跟读练习');
}

/* ============ 老师 & 话题选择 ============ */
function selectSpeakTeacher(name){
  S.speak.teacher=name;
  saveState();
  const idx=PERSONAS.findIndex(p=>p.name===name);
  if(idx>=0)currentPersona=idx;
  toast(`👩‍🏫 已选择 ${name} 作为你的口语老师`);
  $('#contentArea').innerHTML=renderSpeak();
  bindSpeakEvents();
}
function selectSpeakTopic(id){
  S.speak.topic=id;
  saveState();
  const name=SPEAK_TOPICS.find(t=>t.id===id)?.name||id;
  toast(`💬 话题切换为：${name}`);
  $('#contentArea').innerHTML=renderSpeak();
  bindSpeakEvents();
}

/* ============ 宠物小游戏 ============ */
function playMiniGame(type){
  const title={memory:'记忆翻牌',math:'数学速算',word:'单词接龙'}[type];
  toast(`🎮 小游戏加载中：${title}... +5 exp`);
  S.pet.exp += 5;
  setStar(2,'小游戏练习');
  checkPetLevelUp();
  saveState();
  setTimeout(()=>{
    const reward=10+Math.floor(Math.random()*20);
    S.pet.coins += reward;
    saveState();
    toast(`🎉 ${title} 完成！获得 ${reward} 金币`);
    $('#contentArea').innerHTML=renderPet();
  },800);
}

// === 闯关游戏 ===
let spellWords=[],spellIdx=0,spellInput=[],spellRound=0,spellTotal=5,spellScore=0,spellTimer=null;
let challengeQuestions=[],challengeIdx=0,challengeScore=0,challengeTimeLeft=60,challengeTimer=null,challengeTotal=10;

function renderGameHub(){
  const engGrade=S.eng&&S.eng.grade||'3';
  const engWords=VOCAB_BY_GRADE[engGrade]||VOCAB_BY_GRADE['3'];
  const allWords=[];
  Object.keys(VOCAB_BY_GRADE).forEach(g=>(VOCAB_BY_GRADE[g]||[]).forEach(w=>allWords.push(w)));
  const totalWords=allWords.length;
  const mathGrades=Object.keys(MATH_BY_GRADE||{}).length;
  const challengeBest=S.game&&S.game.challengeBest||0;
  const spellBest=S.game&&S.game.spellBest||0;
  return `
    <div style="flex:1;min-width:0">
      <div class="eng-banner">
        <div>
          <h2>🎮 闯关游戏</h2>
          <p>在游戏中巩固知识，边玩边学更有趣！</p>
        </div>
        <div style="text-align:right">
          <div style="font-size:12px;color:var(--text-2)">单词库 <b style="color:var(--teal)">${totalWords}</b> 词</div>
          <div style="font-size:12px;color:var(--text-2)">数学题库 <b style="color:var(--coral)">${mathGrades}</b> 年级</div>
        </div>
      </div>
      <div class="game-hub-grid">
        <div class="game-card teal" onclick="startSpellingGame()">
          <div class="game-card-icon">📝</div>
          <h3>单词拼写挑战</h3>
          <p>听发音看释义，把英文单词拼出来！共 5 轮，拼对得分</p>
          <div class="game-badge">最高分 ${spellBest}</div>
        </div>
        <div class="game-card coral" onclick="startMathChallenge()">
          <div class="game-card-icon">🧮</div>
          <h3>数学闯关赛</h3>
          <p>60 秒内尽可能多答对，题目来自当前年级</p>
          <div class="game-badge">最高分 ${challengeBest}</div>
        </div>
      </div>
    </div>`;
}

function startSpellingGame(){
  spellIdx=0;spellInput=[];spellScore=0;spellRound=0;spellTotal=5;spellWords=[];
  const engGrade=S.eng&&S.eng.grade||'3';
  const pool=(VOCAB_BY_GRADE[engGrade]||VOCAB_BY_GRADE['3']).filter(w=>w.w&&w.w.length>=3);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  spellWords=pool.slice(0,spellTotal);
  if(spellWords.length===0){toast('暂无单词，先去英语世界学习吧！');return;}
  spellRound=0;renderSpellingRound();
}

function renderSpellingRound(){
  if(spellRound>=spellWords.length){endSpellingGame();return;}
  const word=spellWords[spellRound];
  const letters=word.w.split('');
  spellInput=new Array(letters.length).fill('');
  const shuffled=[...letters].sort(()=>Math.random()-.5);
  const correctIdx=spellInput.map(()=>null);
  $('#contentArea').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="spell-score-bar">
        <span>📝 单词拼写挑战</span>
        <span>第 ${spellRound+1}/${spellWords.length} 题</span>
        <span style="color:var(--teal)">得分: ${spellScore}</span>
      </div>
      <div class="game-progress-bar"><div class="game-progress-fill" style="width:${(spellRound/spellWords.length)*100}%"></div></div>
      <div class="spell-word-display" id="spellSlots">
        ${letters.map((_,i)=>`<div class="spell-slot" id="slot${i}" onclick="removeSpellLetter(${i})"></div>`).join('')}
      </div>
      <div class="spell-hint">
        <strong>💡 提示：</strong>${word.def||'看着字母拼出单词'} &nbsp;
        <button class="btn-listen" onclick="speak('${word.w}')" style="margin-left:8px">🔊 听发音</button>
      </div>
      <div class="spell-letters" id="spellLetters">
        ${shuffled.map((l,i)=>`<div class="spell-letter" id="letter${i}" onclick="addSpellLetter(${i},'${l}')">${l.toUpperCase()}</div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:16px">
        <button class="btn btn-ghost" onclick="renderGameHub()">← 返回</button>
      </div>
    </div>`;
}

function addSpellLetter(idx,char){
  const el=$('#letter'+idx);
  if(!el||el.classList.contains('used'))return;
  const nextEmpty=spellInput.findIndex(c=>c===null);
  if(nextEmpty===-1)return;
  spellInput[nextEmpty]=char;
  el.classList.add('used');
  const slot=$('#slot'+nextEmpty);
  if(slot){slot.textContent=char;slot.classList.add('filled');}
  if(spellInput.every(c=>c!==null)){
    setTimeout(()=>checkSpelling(),400);
  }
}

function removeSpellLetter(idx){
  if(idx<0||idx>=spellInput.length||spellInput[idx]===null)return;
  const char=spellInput[idx];
  spellInput[idx]=null;
  const slot=$('#slot'+idx);
  if(slot){slot.textContent='';slot.classList.remove('filled','correct','wrong');}
  const li=$$('.spell-letter');
  for(const el of li){
    if(el.classList.contains('used')&&el.textContent.trim().toLowerCase()===char.toLowerCase()){el.classList.remove('used');break;}
  }
}

function checkSpelling(){
  const word=spellWords[spellRound];
  const answer=word.w.toLowerCase();
  const userAnswer=spellInput.join('').toLowerCase();
  const isCorrect=userAnswer===answer;
  if(isCorrect){
    spellScore+=10;
    $$('.spell-slot').forEach(el=>el.classList.add('correct'));
    setStar(1,'拼写正确');
  }else{
    $$('.spell-slot').forEach((el,i)=>{el.classList.add('wrong');if(el.textContent.toLowerCase()!==answer[i])el.textContent=answer[i]||'';});
  }
  setTimeout(()=>{
    spellRound++;
    renderSpellingRound();
  },1200);
}

function endSpellingGame(){
  const best=spellScore>(S.game&&S.game.spellBest||0)?spellScore:(S.game&&S.game.spellBest||0);
  if(S.game)S.game.spellBest=best;else{S.game=S.game||{};S.game.spellBest=best;}
  saveState();
  const stars=spellScore>=40?3:spellScore>=20?2:spellScore>=10?1:0;
  $('#contentArea').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="challenge-result">
        <div class="result-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
        <div class="result-score">${spellScore}</div>
        <div class="result-label">总分 · 最高分 ${best}</div>
        <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="startSpellingGame()">🔄 再来一轮</button>
          <button class="btn btn-secondary" onclick="renderGameHub()">🏠 返回游戏</button>
        </div>
      </div>
    </div>`;
  setStar(spellScore,'单词拼写');
  S.pet.exp+=spellScore;checkPetLevelUp();saveState();
}

function startMathChallenge(){
  challengeIdx=0;challengeScore=0;challengeTimeLeft=60;challengeTotal=10;
  challengeQuestions=[];
  const grade=S.math&&S.math.grade||'3';
  const variants=(MATH_BY_GRADE&&MATH_BY_GRADE[grade]&&MATH_BY_GRADE[grade].variants)||[];
  if(variants.length===0){toast('暂无题目，先去数学星球学习吧！');return;}
  for(let i=variants.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[variants[i],variants[j]]=[variants[j],variants[i]];}
  challengeQuestions=variants.slice(0,challengeTotal);
  renderChallengeQuestion();
  challengeTimer=setInterval(()=>{
    challengeTimeLeft--;
    const td=$('#challengeTimer');
    if(td){td.textContent=challengeTimeLeft+'s';td.classList.toggle('warning',challengeTimeLeft<=10);}
    if(challengeTimeLeft<=0){clearInterval(challengeTimer);endMathChallenge();}
  },1000);
}

function renderChallengeQuestion(){
  if(challengeIdx>=challengeQuestions.length||challengeTimeLeft<=0){endMathChallenge();return;}
  const q=challengeQuestions[challengeIdx];
  // 必须用安全选项，防止变体的正确答案不在choices中
  const {choices} = _safeMathChoices(q);
  $('#contentArea').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="math-challenge-header">
        <div>
          <div style="font-size:13px;color:var(--text-2)">🧮 数学闯关赛 · ${S.math&&S.math.grade||'3'}年级</div>
          <div class="timer-display" id="challengeTimer">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
            ${challengeTimeLeft}s
          </div>
        </div>
        <div class="challenge-score">⭐ ${challengeScore}</div>
      </div>
      <div class="challenge-progress">
        ${challengeQuestions.map((_,i)=>{const d=challengeResults&&challengeResults[i];return `<div class="challenge-dot${i<challengeIdx?(d?' done':' wrong-dot'):i===challengeIdx?' current':''}"></div>`;}).join('')}
      </div>
      <div class="challenge-question">
        <div style="font-size:12px;color:var(--text-3);margin-bottom:8px">第 ${challengeIdx+1}/${challengeQuestions.length} 题</div>
        <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px">${q.question||''}</h3>
        <div class="challenge-options">
          ${choices.map((o,i)=>`<div class="challenge-opt" id="copt${i}" onclick="answerChallenge(${i},'${String(q.answer||'').toLowerCase()}','${String(o||'').toLowerCase()}')">${String.fromCharCode(65+i)}. ${o}</div>`).join('')}
        </div>
      </div>
      <div style="text-align:center">
        <button class="btn btn-ghost" onclick="endMathChallenge()">⏹ 提前结束</button>
      </div>
    </div>`;
}

let challengeResults=[];

function answerChallenge(optIdx,correctAnswer,userAnswer){
  if(challengeResults[challengeIdx]!==undefined)return;
  const isCorrect=correctAnswer===userAnswer;
  challengeResults[challengeIdx]=isCorrect;
  $$('.challenge-opt').forEach((el,i)=>{
    el.classList.add('disabled');
    const optVal=el.textContent.toLowerCase().replace(/^[a-d]\.\s*/,'');
    if(optVal===correctAnswer)el.classList.add('correct');
    else if(i===optIdx&&!isCorrect)el.classList.add('wrong');
  });
  if(isCorrect){challengeScore+=10;setStar(1,'闯关答对');}
  setTimeout(()=>{challengeIdx++;renderChallengeQuestion();},800);
}

function endMathChallenge(){
  clearInterval(challengeTimer);challengeTimer=null;
  const best=challengeScore>(S.game&&S.game.challengeBest||0)?challengeScore:(S.game&&S.game.challengeBest||0);
  if(S.game)S.game.challengeBest=best;else{S.game=S.game||{};S.game.challengeBest=best;}
  saveState();
  const correctCount=(challengeResults||[]).filter(Boolean).length;
  const stars=challengeScore>=80?3:challengeScore>=50?2:challengeScore>=20?1:0;
  const timeUsed=60-challengeTimeLeft;
  $('#contentArea').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="challenge-result">
        <div class="result-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
        <div class="result-score">${challengeScore}</div>
        <div class="result-label">答对 ${correctCount}/${challengeQuestions.length} 题 · 用时 ${timeUsed} 秒</div>
        <div style="font-size:13px;color:var(--text-3);margin-bottom:20px">最高分：${best}</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="startMathChallenge()">🔄 再来一局</button>
          <button class="btn btn-secondary" onclick="renderGameHub()">🏠 返回游戏</button>
        </div>
      </div>
    </div>`;
  setStar(challengeScore,'数学闯关');
  S.pet.exp+=challengeScore;checkPetLevelUp();saveState();
}

/* ============ 家长面板 ============ */
let parentChart1=null,parentChart2=null;
function disposeParentCharts(){
  if(parentChart1){try{parentChart1.dispose();}catch(e){}parentChart1=null;}
  if(parentChart2){try{parentChart2.dispose();}catch(e){}parentChart2=null;}
}
function initParentCharts(){
  if(typeof echarts==='undefined')return;
  const el1=$('#parentChartLine');
  const el2=$('#parentChartBar');
  if(!el1||!el2)return;
  try{
    if(parentChart1){try{parentChart1.dispose();}catch(e){}}
    parentChart1=echarts.init(el1);
    const days=['周一','周二','周三','周四','周五','周六','周日'];
    const mathData=Array.from({length:7},()=>Math.floor(55+Math.random()*40));
    const engData=Array.from({length:7},()=>Math.floor(45+Math.random()*40));
    parentChart1.setOption({
      grid:{left:40,right:16,top:30,bottom:30},
      legend:{data:['数学','英语'],top:0,right:0,textStyle:{fontSize:11,color:'var(--ink-600)'.includes('var')?'#475569':'#475569'},icon:'roundRect',itemWidth:10,itemHeight:10},
      tooltip:{trigger:'axis',backgroundColor:'#1E3A5F',textStyle:{color:'#fff',fontSize:12},borderWidth:0,borderRadius:8,padding:[8,12]},
      xAxis:{type:'category',data:days,axisLine:{lineStyle:{color:'#E2E8F0'}},axisLabel:{color:'#64748B',fontSize:11},axisTick:{show:false}},
      yAxis:{type:'value',name:'分钟',nameTextStyle:{color:'#94A3B8',fontSize:10,padding:[0,30,0,0]},axisLine:{show:false},axisTick:{show:false},splitLine:{lineStyle:{color:'#F1F5F9',type:'dashed'}},axisLabel:{color:'#94A3B8',fontSize:10}},
      series:[
        {name:'数学',type:'line',smooth:true,symbol:'circle',symbolSize:6,data:mathData,lineStyle:{color:'#00A896',width:3},itemStyle:{color:'#00A896',borderWidth:2,borderColor:'#fff'},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,168,150,0.25)'},{offset:1,color:'rgba(0,168,150,0.02)'}]}}},
        {name:'英语',type:'line',smooth:true,symbol:'circle',symbolSize:6,data:engData,lineStyle:{color:'#F5B800',width:3},itemStyle:{color:'#F5B800',borderWidth:2,borderColor:'#fff'},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(245,184,0,0.25)'},{offset:1,color:'rgba(245,184,0,0.02)'}]}}}
      ]
    });
    if(parentChart2){try{parentChart2.dispose();}catch(e){}}
    parentChart2=echarts.init(el2);
    const mp=S.math.moduleProgress||{cpa:65,bar:45,area:35,fract:25,wp:50,graph:30};
    const mods=['CPA','Bar','Area','Fract','WP','Graph'];
    const vals=[mp.cpa||70,mp.bar||70,mp.area||70,mp.fract||70,mp.wp||70,mp.graph||(mp.kg||70)];
    parentChart2.setOption({
      grid:{left:40,right:16,top:10,bottom:30},
      tooltip:{trigger:'axis',backgroundColor:'#1E3A5F',textStyle:{color:'#fff',fontSize:12},borderWidth:0,borderRadius:8,padding:[8,12],formatter:p=>`${p[0].name}<br/>掌握度: <b>${p[0].value}%</b>`},
      xAxis:{type:'category',data:mods,axisLine:{lineStyle:{color:'#E2E8F0'}},axisLabel:{color:'#64748B',fontSize:11,fontWeight:700},axisTick:{show:false}},
      yAxis:{type:'value',max:100,axisLabel:{color:'#94A3B8',fontSize:10,formatter:'{value}%'},axisLine:{show:false},axisTick:{show:false},splitLine:{lineStyle:{color:'#F1F5F9',type:'dashed'}}},
      series:[{
        type:'bar',barWidth:'55%',data:vals.map((v,i)=>({
          value:v,
          itemStyle:{
            borderRadius:[6,6,0,0],
            color:v>=80?'#00A896':v>=60?'#2FD1AE':v>=40?'#F5B800':'#FB923C'
          }
        })),
        label:{show:true,position:'top',color:'#1E3A5F',fontSize:10,fontWeight:800,formatter:'{c}%'}
      }]
    });
    window.addEventListener('resize',()=>{parentChart1&&parentChart1.resize();parentChart2&&parentChart2.resize();});
  }catch(e){console.warn('ECharts init failed',e);}
}
function openParentPanel(){
  disposeParentCharts();
  const modal=$('#parentModal');
  modal.classList.add('show');
  $('#parentBody').innerHTML=`
    <div class="pwd-input">
      <p>🔒 请输入家长密码</p>
      <input type="password" id="parentPwd" placeholder="••••" maxlength="4">
      <div><button onclick="checkParentPwd()">进入</button></div>
      <div class="pwd-error" id="pwdError" style="display:none">密码错误，请重试</div>
      <div style="font-size:11px;color:var(--text-3);margin-top:8px">默认密码：1234</div>
    </div>`;
  $('#parentPwd').focus();
  $('#parentPwd').addEventListener('keydown',e=>{if(e.key==='Enter')checkParentPwd()});
}
function checkParentPwd(){
  const pwd=$('#parentPwd').value;
  if(pwd==='1234'){
    renderParentDashboard();
  }else{
    $('#pwdError').style.display='block';
  }
}
function renderKnowledgeTree(){
  if(typeof MATH_BY_GRADE==='undefined'||typeof WeaknessDetector==='undefined') return '';
  var allNodes=[], gradeList=[];
  Object.keys(MATH_BY_GRADE).sort().forEach(function(g){
    var km = (MATH_BY_GRADE[g]&&MATH_BY_GRADE[g].knowledgeMap)||[];
    if(!km.length) return;
    gradeList.push(g);
    km.forEach(function(kp){
      var mastery = 0;
      try{ mastery = WeaknessDetector.calcMastery(S, kp.id)||0; }catch(e){ mastery=0; }
      allNodes.push({grade:g, id:kp.id, name:kp.name, mastery:mastery, concept:kp.concept||'', visualType:kp.visualType||'', isKeyTopic:!!kp.isKeyTopic, prerequisite:kp.prerequisite||'', extends:kp.extends||''});
    });
  });
  if(!allNodes.length) return '<div style="text-align:center;padding:20px;color:var(--text-3)">暂无知识数据</div>';
  allNodes.sort(function(a,b){ return a.grade.localeCompare(b.grade)||a.id.localeCompare(b.id); });
  var mastered=allNodes.filter(function(n){return n.mastery>=80;}).length;
  var ok=allNodes.filter(function(n){return n.mastery>=60;}).length;
  var weak=allNodes.filter(function(n){return n.mastery<60;}).length;
  var html='<div class="knowledge-tree">';
  html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">';
  html+='<div style="font-weight:700;color:var(--navy);font-size:15px">🌳 知识掌握全景图</div>';
  html+='<div style="display:flex;gap:10px;font-size:11px;flex-wrap:wrap">';
  html+='<span style="color:var(--teal)">✓ 掌握 '+mastered+'</span>';
  html+='<span style="color:#B58200">△ 熟练 '+(ok-mastered)+'</span>';
  html+='<span style="color:var(--coral)">✗ 薄弱 '+weak+'</span>';
  html+='</div></div>';
  // 按年级分组渲染
  var currentGrade=null;
  allNodes.forEach(function(kp){
    if(kp.grade!==currentGrade){
      currentGrade=kp.grade;
      html+='<div style="font-size:12px;font-weight:800;color:var(--text-3);margin:10px 0 6px;padding-bottom:4px;border-bottom:1px solid var(--ink-100)">'+currentGrade.toUpperCase()+' 年级</div>';
    }
    var color = kp.mastery>=80?'var(--teal)':kp.mastery>=60?'var(--yellow)':'var(--coral)';
    var bg = kp.mastery>=80?'var(--teal-soft)':kp.mastery>=60?'var(--yellow-soft)':'var(--coral-soft)';
    var tag = kp.isKeyTopic?'<span style="font-size:9px;background:var(--coral);color:#fff;padding:1px 4px;border-radius:4px;margin-left:4px">重点</span>':'';
    var prereq = kp.prerequisite?'<span style="font-size:10px;color:var(--text-3);margin-left:auto">← '+kp.prerequisite+'</span>':'';
    html+='<div style="display:flex;align-items:center;padding:7px 12px;margin-bottom:4px;border-radius:8px;background:'+bg+';font-size:13px;gap:8px;cursor:pointer" title="'+(kp.concept||'')+'" onclick="toast(\''+kp.name+'：'+color+' '+kp.mastery+'%\\n'+(kp.concept||'暂无概念说明')+'\')">';
    html+='<div style="width:8px;height:8px;border-radius:50%;background:'+color+';flex-shrink:0"></div>';
    html+='<span style="font-weight:600;color:var(--navy)">'+kp.name+'</span>';
    html+='<span style="font-weight:700;font-size:12px;color:'+color+';margin-left:auto;flex-shrink:0">'+kp.mastery+'%</span>';
    html+=tag+prereq;
    html+='</div>';
  });
  html+='<div style="margin-top:10px;padding:8px 12px;background:var(--navy-50);border-radius:8px;font-size:11px;color:var(--navy);line-height:1.7">点击知识点查看概念说明 · 绿色≥80%已掌握 · 黄色60-80%需巩固 · 红色<60%需重点练习</div>';
  html+='</div>';
  return html;
}
function renderHeatmap(){
  if(typeof MATH_BY_GRADE==='undefined'||typeof WeaknessDetector==='undefined') return '';
  var allKPs=[], weakPoints=[];
  Object.keys(MATH_BY_GRADE).sort().forEach(function(g){
    var km = (MATH_BY_GRADE[g]&&MATH_BY_GRADE[g].knowledgeMap)||[];
    km.forEach(function(kp){
      var mastery = 0;
      try{ mastery = WeaknessDetector.calcMastery(S, kp.id)||0; }catch(e){ mastery=0; }
      allKPs.push({grade:g, id:kp.id, name:kp.name, mastery:mastery, concept:kp.concept||'', isKeyTopic:!!kp.isKeyTopic});
      if(mastery<60) weakPoints.push({grade:g, kn:kp.name, sug:kp.concept||'需要针对性练习', mastery:mastery});
    });
  });
  if(!allKPs.length) return '';
  weakPoints.sort(function(a,b){return a.mastery-b.mastery;});
  var palette=['#CFF6EE','#5FE0C5','#00A896','#FB923C','#DC2626'];
  var top3 = weakPoints.slice(0,3);
  var html='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:6px">';
  allKPs.forEach(function(kp){
    var lvl = kp.mastery>=80?0:kp.mastery>=65?1:kp.mastery>=50?2:kp.mastery>=30?3:4;
    var bg=palette[lvl];
    html+='<div style="background:'+bg+';border-radius:6px;padding:8px 10px;font-size:11px;cursor:pointer" onclick="toast(\''+kp.grade.toUpperCase()+' · '+kp.name+'\\n掌握度: '+kp.mastery+'%\\n'+(kp.concept||'')+'\')">'+
      '<div style="font-weight:600;color:var(--navy);margin-bottom:2px">'+kp.name+'</div>'+
      '<div style="font-weight:700;color:'+palette[lvl]+'">'+kp.mastery+'%</div>'+
    '</div>';
  });
  html+='</div>';
  if(top3.length){
    html+='<div style="margin-top:12px;padding:12px;background:var(--coral-soft);border-radius:10px;font-size:12px;color:var(--coral)">';
    html+='<b>⚠️ 最薄弱知识点（建议优先练习）：</b><br>';
    top3.forEach(function(w,i)=>{ html+='<span style="display:inline-block;margin:3px 6px 3px 0;padding:3px 8px;background:white;border-radius:12px;font-weight:600">'+w.grade.toUpperCase()+'·'+w.kn+' ('+w.mastery+'%)</span>'; });
    html+='</div>';
  }
  return html;
}
function renderParentDashboard(pt){
  pt = pt || S.parentLastTab || 'overview';
  const o=S.overview||{stars:0,streak:0,weekGoal:5,weekDone:0,totalMin:0,avgAccuracy:70};
  const petAvatar=PETS&&PETS[S.pet.idx]?PETS[S.pet.idx].avatar:'';
  const gradeTxt=(S.math&&S.math.grade?S.math.grade+'年级':'3年级');
  const totalDays=Math.max(o.streak,Math.floor((S.streakHistory||[]).filter(x=>x).length*1.3));
  $('#parentBody').innerHTML=`
    <div class="parent-body">
      <div class="parent-head">
        <h2>👨‍👩‍👧 家长面板 <span>小探索家</span></h2>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="padding:6px 14px;border-radius:20px;background:linear-gradient(135deg,#00A896,#2FD1AE);color:white;font-size:12px;font-weight:800;display:flex;align-items:center;gap:6px">🔥 连续 ${o.streak} 天</span>
        </div>
      </div>
      <div class="parent-tabs">
        <div class="parent-tab active" data-pt="overview">📊 总览</div>
        <div class="parent-tab" data-pt="weak">🔥 漏洞检测</div>
        <div class="parent-tab" data-pt="week">📝 周报建议</div>
        <div class="parent-tab" data-pt="ai">🤖 AI 设置</div>
        <div class="parent-tab" data-pt="errors">🐛 错误日志</div>
        <div class="parent-tab" data-pt="profiles">👨‍👩‍👧 档案管理</div>
      </div>

      <div class="parent-section active" data-psec="overview">
        <div class="card" style="margin-bottom:16px;display:flex;align-items:center;gap:18px;padding:18px 22px">
          <div style="width:64px;height:64px;border-radius:20px;overflow:hidden;border:3px solid var(--teal);box-shadow:0 4px 12px rgba(0,168,150,.2);flex-shrink:0">
            <img src="${petAvatar}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.background='var(--teal-100)';this.style.display='none'">
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:18px;font-weight:900;color:var(--navy);margin-bottom:4px">${PETS&&PETS[S.pet.idx]?PETS[S.pet.idx].name:'宝贝'} <span style="font-size:12px;font-weight:600;color:var(--teal);background:var(--teal-soft);padding:3px 10px;border-radius:14px;margin-left:6px">${gradeTxt}</span></div>
            <div style="font-size:12px;color:var(--ink-500);display:flex;gap:16px;flex-wrap:wrap">
              <span>📅 学习总天数 <b style="color:var(--navy)">${totalDays}</b> 天</span>
              <span>🎯 本周目标 ${o.weekDone}/${o.weekGoal}</span>
              <span>🏆 徽章 <b style="color:var(--navy)">${(S.badges||[]).length}</b> 枚</span>
              <span>🔤 英语阶段 <b style="color:var(--navy)">${S.engStage||1}</b>/3</span>
            </div>
          </div>
          <button class="btn btn-ghost" onclick="toast('宝贝档案')">📋 档案</button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:16px">
          <div class="card" style="border-top:3px solid var(--teal)">
            <div style="font-size:12px;font-weight:700;color:var(--text-3);margin-bottom:10px">📅 今日一起练</div>
            <div id="todayPracticeItem" style="font-size:13px;color:var(--navy);line-height:1.7"></div>
          </div>
          <div class="card" style="border-top:3px solid var(--yellow)">
            <div style="font-size:12px;font-weight:700;color:var(--text-3);margin-bottom:10px">📚 教材进度同步</div>
            <div id="textbookProgress" style="font-size:13px;color:var(--navy);line-height:1.7"></div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">
          <div style="padding:12px;background:var(--teal-soft);border-radius:12px;text-align:center">
            <div style="font-size:22px;font-weight:900;color:var(--teal)">${S.engStage||1}</div>
            <div style="font-size:11px;color:var(--ink-600)">英语阶段</div>
          </div>
          <div style="padding:12px;background:#FEF3C7;border-radius:12px;text-align:center">
            <div style="font-size:22px;font-weight:900;color:#D97706">${S.eng&&S.eng.phonicsStage||1}</div>
            <div style="font-size:11px;color:var(--ink-600)">拼读阶段</div>
          </div>
          <div style="padding:12px;background:#FEE2E2;border-radius:12px;text-align:center">
            <div style="font-size:22px;font-weight:900;color:#DC2626">${(S.math&&S.math.moduleProgress&&Object.values(S.math.moduleProgress).filter(v=>v>=100).length)||0}</div>
            <div style="font-size:11px;color:var(--ink-600)">数学通关</div>
          </div>
        </div>

        <div class="chart-row">
          <div class="chart-card">
            <h4>📈 近7天学习时长<span class="sub">单位：分钟</span></h4>
            <div id="parentChartLine" class="chart-box"></div>
          </div>
          <div class="chart-card">
            <h4>🧩 各模块掌握度</h4>
            <div id="parentChartBar" class="chart-box small"></div>
          </div>
        </div>

        <div class="report-kpi-row" style="grid-template-columns:repeat(4,1fr);background:transparent;padding:0;backdrop-filter:none;gap:14px;margin:0">
          <div class="report-kpi" style="background:white;border:1px solid var(--ink-100);backdrop-filter:none;color:var(--navy)">
            <div class="rk-num up">${Math.floor(o.totalMin/60)}h${o.totalMin%60}m</div>
            <div class="rk-label" style="color:var(--ink-500)">总学习时长</div>
          </div>
          <div class="report-kpi" style="background:white;border:1px solid var(--ink-100);backdrop-filter:none;color:var(--navy)">
            <div class="rk-num up">${o.avgAccuracy}%</div>
            <div class="rk-label" style="color:var(--ink-500)">平均正确率</div>
          </div>
          <div class="report-kpi" style="background:white;border:1px solid var(--ink-100);backdrop-filter:none;color:var(--navy)">
            <div class="rk-num up">${o.stars}</div>
            <div class="rk-label" style="color:var(--ink-500)">累计星星</div>
          </div>
          <div class="report-kpi" style="background:white;border:1px solid var(--ink-100);backdrop-filter:none;color:var(--navy)">
            <div class="rk-num up">${o.streak}天</div>
            <div class="rk-label" style="color:var(--ink-500)">连续打卡</div>
          </div>
        </div>
      </div>

      <div class="parent-section" data-psec="weak">
        <div class="card" style="margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="font-size:15px;font-weight:800;color:var(--navy);margin:0">🌳 知识掌握全景图</h4>
            <span style="font-size:11px;color:var(--text-3)">点击知识点查看详情</span>
          </div>
          <div id="knowledgeTreeContainer"></div>
        </div>
        <div class="heatmap-wrap" style="margin-bottom:16px">
          <div class="heat-head">
            <h4 style="font-size:14px;font-weight:800;color:var(--navy);margin:0 0 8px">🔥 知识点掌握热力图</h4>
            <div class="heat-legend" style="display:flex;gap:10px;font-size:11px">
              <span><i style="background:#CFF6EE;display:inline-block;width:10px;height:10px;border-radius:2px;vertical-align:middle"></i> 掌握≥80</span>
              <span><i style="background:#5FE0C5;display:inline-block;width:10px;height:10px;border-radius:2px;vertical-align:middle"></i> 熟练60-80</span>
              <span><i style="background:#FB923C;display:inline-block;width:10px;height:10px;border-radius:2px;vertical-align:middle"></i> 薄弱60以下</span>
            </div>
          </div>
          <div id="heatmapContainer"></div>
        </div>
        <div id="weak