ReportArea"></div>
      </div>

      <div class="parent-section" data-psec="week">
        <div class="report-card" style="margin-bottom:16px">
          <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <div>
              <div style="font-size:11px;font-weight:700;letter-spacing:.2em;opacity:.8;margin-bottom:4px">WEEKLY REPORT</div>
              <h3 style="margin:0">📊 本周学习周报</h3>
            </div>
            <button class="btn btn-yellow" onclick="exportWeeklyReport()">📄 导出 CSV 报告</button>
          </div>
          <div class="report-kpi-row">
            <div class="report-kpi">
              <div class="rk-num up">${o.weekDone}/${o.weekGoal}</div>
              <div class="rk-label">本周任务完成</div>
            </div>
            <div class="report-kpi">
              <div class="rk-num up">${o.avgAccuracy}%</div>
              <div class="rk-label">正确率 ↑ 3.2%</div>
            </div>
            <div class="report-kpi">
              <div class="rk-num up">+${Math.max(12,Math.floor(o.stars*0.3))}</div>
              <div class="rk-label">本周获得星星</div>
            </div>
            <div class="report-kpi">
              <div class="rk-num up">${o.streak}天</div>
              <div class="rk-label">连续坚持</div>
            </div>
          </div>
          <div class="report-body">
            <h3>🌟 本周亮点与待提升</h3>
            <div class="report-list">
              <div class="report-item good">
                <div class="report-item-icon">✓</div>
                <div class="report-item-body">
                  <div class="report-item-title">数学：CPA 具象化思维提升明显</div>
                  <div class="report-item-desc">本周苹果模型、Bar Model 题目正确率达到 92%，较上周 ↑8%</div>
                </div>
              </div>
              <div class="report-item good">
                <div class="report-item-icon">✓</div>
                <div class="report-item-body">
                  <div class="report-item-title">英语：CVC 拼读突破</div>
                  <div class="report-item-desc">18 个 CVC 单词连续拼读成功，主动开口时长增加 15 分钟</div>
                </div>
              </div>
              <div class="report-item good">
                <div class="report-item-icon">✓</div>
                <div class="report-item-body">
                  <div class="report-item-title">专注力：单日最长 48 分钟</div>
                  <div class="report-item-desc">周六下午深度沉浸学习，解锁「专注小达人」成就</div>
                </div>
              </div>
              <div class="report-item bad">
                <div class="report-item-icon">!</div>
                <div class="report-item-body">
                  <div class="report-item-title">数学：通分最小公倍数找法需巩固</div>
                  <div class="report-item-desc">连续 5 道异分母加减题目出现公倍数错误，建议短除法专项训练</div>
                </div>
              </div>
              <div class="report-item bad">
                <div class="report-item-icon">!</div>
                <div class="report-item-body">
                  <div class="report-item-title">英语：th 咬舌音清浊混淆</div>
                  <div class="report-item-desc">think / this 单词对比练习中 40% 区分错误，需加强听力+口型练习</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="suggest-grid">
          <div class="suggest-card">
            <div class="suggest-ic">🔢</div>
            <h4>数学专项建议</h4>
            <p>① 每日 5 道通分专项（短除法找 LCM）<br/>② 新增 3 题多步应用题审题训练<br/>③ 周末复习面积单位换算进率表</p>
          </div>
          <div class="suggest-card y">
            <div class="suggest-ic">🔤</div>
            <h4>英语专项建议</h4>
            <p>① th 清浊对比听力 10 分钟/天<br/>② 魔法 e 闪卡游戏复习 3 轮<br/>③ 每日跟读 5 句现在进行时句型</p>
          </div>
          <div class="suggest-card c">
            <div class="suggest-ic">💪</div>
            <h4>身心健康建议</h4>
            <p>① 学习 25 分钟远眺 5 分钟（护眼）<br/>② 保证每日 30 分钟户外活动<br/>③ 周末安排 1 次亲子桌游时光</p>
          </div>
        </div>
      </div>

      <div class="parent-section" data-psec="ai">
        <div class="report-card" style="margin-bottom:16px">
          <div style="position:relative;z-index:2;margin-bottom:14px">
            <div style="font-size:11px;font-weight:700;letter-spacing:.2em;opacity:.8;margin-bottom:4px">AI CONFIG</div>
            <h3 style="margin:0">🤖 AI 对话引擎设置</h3>
            <p style="font-size:12px;color:var(--text-2);margin:6px 0 0">配置 DeepSeek API Key 后，口语伙伴的三位老师（Emma/Leo/Aria）将与孩子进行真正的 AI 自由对话。未配置或配置失败时，自动降级为分支对话树模式。</p>
          </div>

          <div style="position:relative;z-index:2;display:flex;flex-direction:column;gap:14px">
            <div>
              <label style="font-size:12px;font-weight:700;color:var(--navy);display:block;margin-bottom:6px">DeepSeek API Key</label>
              <div style="display:flex;gap:8px;align-items:center">
                <input type="password" id="deepseekKeyInput" placeholder="sk-..." value="${(S.apiConfig&&S.apiConfig.deepseekKey)||''}" style="flex:1;padding:10px 12px;border:1.5px solid var(--ink-200);border-radius:10px;font-size:13px;font-family:monospace;background:white;color:var(--navy);outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--ink-200)'">
                <button class="btn btn-ghost" id="toggleKeyVisibility" style="padding:10px 12px;font-size:12px;white-space:nowrap">👁 显示</button>
              </div>
              <div style="font-size:11px;color:var(--text-3);margin-top:6px;display:flex;align-items:center;gap:4px">
                <span>🔒 Key 仅保存在本机浏览器 localStorage，不会上传任何服务器</span>
              </div>
            </div>

            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button class="btn btn-yellow" id="testDeepseekKeyBtn" style="padding:10px 16px;font-size:13px;font-weight:700">🔌 测试连接</button>
              <button class="btn" id="saveDeepseekKeyBtn" style="padding:10px 16px;font-size:13px;font-weight:700;background:var(--teal);color:white">💾 保存</button>
              <button class="btn btn-ghost" id="clearDeepseekKeyBtn" style="padding:10px 16px;font-size:13px;font-weight:700">🗑 清除</button>
            </div>

            <div id="deepseekTestResult" style="display:none;padding:12px 14px;border-radius:10px;font-size:12px;font-weight:600;line-height:1.6"></div>

            <div style="background:var(--teal-soft);border-radius:10px;padding:12px 14px;font-size:11px;color:var(--navy);line-height:1.7">
              <div style="font-weight:800;margin-bottom:6px">📌 如何获取 DeepSeek API Key（注册送 10 元免费额度）</div>
              <div>① 访问 <a href="https://platform.deepseek.com" target="_blank" style="color:var(--teal);font-weight:700">platform.deepseek.com</a></div>
              <div>② 手机号注册登录（支持微信/抖音扫码）</div>
              <div>③ 点击左侧 "API Keys"，创建新密钥，复制以 <code style="background:rgba(0,0,0,.08);padding:1px 5px;border-radius:4px;font-family:monospace">sk-</code> 开头的字符串</div>
              <div>④ 粘贴到上方输入框，点击"测试连接"验证后保存</div>
              <div style="margin-top:6px;color:var(--text-2)">新用户注册送 10 元免费额度，足够孩子日常口语练习使用。当前模型：<code style="background:rgba(0,0,0,.08);padding:1px 5px;border-radius:4px;font-family:monospace">deepseek-chat</code>（V3.2，性价比高）</div>
            </div>
          </div>
        </div>
      </div>

      <div class="parent-section" data-psec="errors">
        <div class="card" style="margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="font-size:15px;font-weight:800;color:var(--navy)">🐛 错误日志</h4>
            <button class="export-btn" onclick="exportErrorLog()">📥 导出日志</button>
          </div>
          <div id="errorLogBody" style="max-height:300px;overflow-y:auto"><div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">加载中...</div></div>
        </div>
        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <h4 style="font-size:15px;font-weight:800;color:var(--navy)">❌ 错题本</h4>
            <button class="export-btn" onclick="exportWrongProblems()">📥 导出错题</button>
          </div>
          <div id="wrongProblemsBody" style="max-height:300px;overflow-y:auto"><div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">加载中...</div></div>
        </div>
      </div>

      <div class="parent-section" data-psec="profiles">
        <div class="card">
          <h4 style="font-size:15px;font-weight:800;color:var(--navy);margin-bottom:12px">👨‍👩‍👧 学员档案</h4>
          <div id="profilesList" style="display:flex;flex-direction:column;gap:8px"><div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">加载中...</div></div>
          <div id="deleteProfileNote" style="font-size:11px;color:var(--coral);margin-top:8px"></div>
        </div>
      </div>
    </div>`;
  const heatHtml=renderHeatmap();
  $('#heatmapContainer').innerHTML=heatHtml;
  if(pt==='overview'&&typeof echarts!=='undefined'){setTimeout(()=>initParentCharts(),80);}
  if(pt==='ai') ensureAiPanelBound();
  // 事件委托：避免每次渲染重复绑定
  let parentBodyEl=$('#parentBody');
  if(parentBodyEl){
    parentBodyEl.onclick=function(e){
      const tab=e.target.closest('.parent-tab');
      if(!tab)return;
      const pt=tab.dataset.pt;
      switchParentTab(pt);
    };
  }
  setTimeout(()=>initParentCharts(),320);
  if(pt!=='overview') switchParentTab(pt);
}
function switchParentTab(pt){
  S.parentLastTab=pt; saveState();
  const activeTab=$('.parent-tab.active');
  const activeSec=$('.parent-section.active');
  if(activeTab) activeTab.classList.remove('active');
  if(activeSec) activeSec.classList.remove('active');
  const tab=$(`.parent-tab[data-pt="${pt}"]`);
  const sec=$(`.parent-section[data-psec="${pt}"]`);
  if(tab) tab.classList.add('active');
  if(sec) sec.classList.add('active');
  if(pt==='errors'){renderErrorLog();renderWrongProblems();}
  if(pt==='profiles') renderProfiles();
  if(pt==='overview'&&typeof echarts!=='undefined') setTimeout(()=>initParentCharts(),80);
  if(pt==='ai') ensureAiPanelBound();
}
function ensureAiPanelBound(){
  const inp=$('#deepseekKeyInput');
  if(!inp) return;
  // 从状态加载已保存的 API Key
  if(S.apiConfig && S.apiConfig.deepseekKey) {
    inp.value = S.apiConfig.deepseekKey;
  }
  // 每次进入AI设置Tab都重新绑定按钮事件，防止绑定丢失
  bindAiConfigEvents();
}
function bindAiConfigEvents(){
  const toggleBtn=$('#toggleKeyVisibility');
  if(toggleBtn) toggleBtn.onclick=function(){
    const inp=$('#deepseekKeyInput');
    if(!inp) return;
    if(inp.type==='password'){inp.type='text';this.textContent='🙈 隐藏';}
    else{inp.type='password';this.textContent='👁 显示';}
  };
  const testBtn=$('#testDeepseekKeyBtn');
  if(testBtn) testBtn.onclick=testDeepseekKey;
  const saveBtn=$('#saveDeepseekKeyBtn');
  if(saveBtn) saveBtn.onclick=saveDeepseekKey;
  const clearBtn=$('#clearDeepseekKeyBtn');
  if(clearBtn) clearBtn.onclick=function(){
    if(!confirm('确定清除 API Key 吗？清除后口语将降级为分支对话模式。')) return;
    if(!S.apiConfig) S.apiConfig={};
    S.apiConfig.deepseekKey='';
    saveState();
    const inp=$('#deepseekKeyInput');
    if(inp) inp.value='';
    showDeepseekTestResult('error','已清除 API Key。口语伙伴将使用降级模式。');
  };
}
function showDeepseekTestResult(type,msg){
  const el=$('#deepseekTestResult');
  if(!el) return;
  el.style.display='block';
  if(type==='ok'){
    el.style.background='rgba(0,168,150,.12)';
    el.style.color='var(--teal)';
    el.style.border='1px solid rgba(0,168,150,.3)';
  }else if(type==='error'){
    el.style.background='rgba(220,38,38,.08)';
    el.style.color='#DC2626';
    el.style.border='1px solid rgba(220,38,38,.2)';
  }else{
    el.style.background='rgba(245,184,0,.12)';
    el.style.color='var(--yellow)';
    el.style.border='1px solid rgba(245,184,0,.3)';
  }
  el.innerHTML=msg;
}
async function testDeepseekKey(){
  const inp=$('#deepseekKeyInput');
  if(!inp) return;
  const key=inp.value.trim();
  if(!key){
    showDeepseekTestResult('error','⚠️ 请先输入 API Key');
    return;
  }
  if(!key.startsWith('sk-')){
    showDeepseekTestResult('error','⚠️ DeepSeek API Key 通常以 <code style="background:rgba(0,0,0,.08);padding:1px 5px;border-radius:4px">sk-</code> 开头，请检查是否复制完整');
    return;
  }
  const btn=$('#testDeepseekKeyBtn');
  const oldText=btn.textContent;
  btn.textContent='⏳ 测试中...';
  btn.disabled=true;
  showDeepseekTestResult('loading','🔍 正在连接 DeepSeek API...');
  try{
    const ctrl=new AbortController();
    const timeoutId=setTimeout(()=>ctrl.abort(),10000);
    let resp;
    try{
      resp=await fetch('https://api.deepseek.com/chat/completions',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+key
        },
        body:JSON.stringify({
          model:'deepseek-chat',
          messages:[{role:'user',content:'Say "OK" in one word.'}],
          max_tokens:5
        }),
        signal:ctrl.signal
      });
    }catch(e){
      clearTimeout(timeoutId);
      throw new Error(e.name==='AbortError'?'请求超时（10秒），请检查网络后重试':e.message);
    }
    clearTimeout(timeoutId);
    if(resp.ok){
      const data=await resp.json();
      const reply=data&&data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content;
      showDeepseekTestResult('ok','✅ 连接成功！AI 回复：<b>'+(reply||'OK')+'</b><br>点击"保存"即可启用 AI 自由对话。');
      speak(reply||'OK');
    }else if(resp.status===401){
      showDeepseekTestResult('error','❌ 认证失败：API Key 无效或已过期，请重新获取');
    }else if(resp.status===429){
      showDeepseekTestResult('error','⚠️ 请求过于频繁或额度已用完，请稍后再试');
    }else{
      showDeepseekTestResult('error','❌ 连接失败：HTTP '+resp.status);
    }
  }catch(e){
    showDeepseekTestResult('error','❌ 网络错误：'+(e.message||'无法连接到 DeepSeek API')+'<br>请检查网络或稍后重试');
  }finally{
    btn.textContent=oldText;
    btn.disabled=false;
  }
}
function saveDeepseekKey(){
  const inp=$('#deepseekKeyInput');
  if(!inp) return;
  const key=inp.value.trim();
  if(!key){
    showDeepseekTestResult('error','⚠️ 请先输入 API Key');
    return;
  }
  if(!S.apiConfig) S.apiConfig={};
  S.apiConfig.deepseekKey=key;
  saveState();
  showDeepseekTestResult('ok','✅ 已保存！口语伙伴的 AI 自由对话已启用。');
  toast('✅ API Key 已保存');
}

function renderErrorLog(){
  const el=$('#errorLogBody');
  if(!el)return;
  try{
    const raw=localStorage.getItem('quiqu_error_log');
    const logs=raw?JSON.parse(raw):[];
    if(!logs.length){el.innerHTML='<div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">暂无错误记录 ✅</div>';return;}
    el.innerHTML='<table class="error-log-table"><thead><tr><th>时间</th><th>错误信息</th><th>位置</th></tr></thead><tbody>'+logs.map(l=>`<tr><td class="err-time">${new Date(l.time).toLocaleString('zh-CN')}</td><td class="err-msg">${(l.msg||'').replace(/</g,'&lt;').slice(0,120)}</td><td class="err-url">${l.url?l.url.split('/').pop():''}:${l.line||''}</td></tr>`).join('')+'</tbody></table>';
  }catch(e){el.innerHTML='<div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">加载失败</div>';}
}

function renderWrongProblems(){
  const el=$('#wrongProblemsBody');
  if(!el)return;
  const wrong=(S.math&&S.math.wrongProblems)||[];
  if(!wrong.length){el.innerHTML='<div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">暂无错题记录 ✅</div>';return;}
  el.innerHTML='<table class="error-log-table"><thead><tr><th>#</th><th>题目</th><th>答案</th></tr></thead><tbody>'+wrong.slice(-20).reverse().map((w,i)=>`<tr><td class="err-time">${wrong.length-i}</td><td class="err-msg">${(w.q||'').replace(/</g,'&lt;').slice(0,100)}</td><td>${w.a||'?'}</td></tr>`).join('')+'</tbody></table>';
}

function renderProfiles(){
  const el=$('#profilesList');
  const delNote=$('#deleteProfileNote');
  if(!el)return;
  const profiles=S.profiles||{};
  const keys=Object.keys(profiles);
  if(keys.length<=1){delNote.textContent='至少保留一个档案';}
  else{delNote.textContent='';}
  el.innerHTML=keys.map(id=>{
    const p=profiles[id];
    const isActive=id===S.currentProfileId;
    const canDelete=keys.length>1;
    return `<div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;border:2px solid ${isActive?'var(--teal)':'var(--ink-200)'};${isActive?'background:var(--teal-soft)':''};cursor:pointer" onclick="switchProfile('${id}')">
      <div style="width:40px;height:40px;border-radius:50%;background:var(--teal-soft);display:flex;align-items:center;justify-content:center;font-size:20px">${isActive?'👑':''}</div>
      <div style="flex:1"><div style="font-size:14px;font-weight:700;color:var(--navy)">${p.name||'宝贝'}</div><div style="font-size:12px;color:var(--text-3)">年级：${p.grade||'3'}</div></div>
      <span style="font-size:11px;padding:3px 10px;border-radius:10px;background:${isActive?'var(--teal)':'var(--ink-200)'};color:white;font-weight:700">${isActive?'当前':'切换'}</span>
      ${canDelete?`<button onclick="event.stopPropagation();deleteProfile('${id}')" style="padding:4px 10px;border-radius:8px;border:1px solid var(--ink-200);background:white;font-size:11px;cursor:pointer;color:var(--text-3)">删除</button>`:''}
    </div>`;
  }).join('');
}

function exportErrorLog(){
  try{
    const raw=localStorage.getItem('quiqu_error_log');
    const logs=raw?JSON.parse(raw):[];
    if(!logs.length){toast('暂无错误日志');return;}
    let csv='时间,错误信息,URL,行号\n';
    logs.forEach(l=>{csv+=`"${l.time}","${(l.msg||'').replace(/"/g,'""')}","${l.url||''}",${l.line||''}\n`;});
    downloadCSV(csv,'奇趣学园_错误日志.csv');
    toast('✅ 错误日志已导出');
  }catch(e){toast('导出失败');}
}

function exportWrongProblems(){
  try{
    const wrong=(S.math&&S.math.wrongProblems)||[];
    if(!wrong.length){toast('暂无错题记录');return;}
    let csv='序号,题目,答案\n';
    wrong.forEach((w,i)=>{csv+=`${i+1},"${(w.q||'').replace(/"/g,'""')}","${w.a||''}"\n`;});
    downloadCSV(csv,'奇趣学园_错题本.csv');
    toast('✅ 错题本已导出');
  }catch(e){toast('导出失败');}
}

function exportWeeklyReport(){
  try{
    const o=S.overview||{};
    const now=new Date();
    const dateStr=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
    let csv='奇趣学园 学习报告\n';
    csv+=`生成日期,${dateStr}\n\n`;
    csv+=`指标,数值\n`;
    csv+=`累计星星,${o.stars||0}\n`;
    csv+=`连续学习天数,${o.streak||0}\n`;
    csv+=`本周目标,${o.weekGoal||5}\n`;
    csv+=`本周完成,${o.weekDone||0}\n`;
    csv+=`总学习时长(分钟),${o.totalMin||0}\n`;
    csv+=`平均正确率(%),${o.avgAccuracy||0}\n\n`;
    csv+=`错题记录\n`;
    csv+=`序号,题目,答案\n`;
    const wrong=(S.math&&S.math.wrongProblems)||[];
    wrong.forEach((w,i)=>{csv+=`${i+1},"${(w.q||'').replace(/"/g,'""')}","${w.a||''}"\n`;});
    downloadCSV(csv,'奇趣学园_学习报告_'+dateStr+'.csv');
    toast('✅ 学习报告已导出');
  }catch(e){toast('导出失败');}
}

function downloadCSV(csv,filename){
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============ 数据持久化层 ============ */
const STORAGE_KEY='ququxv4_state_v1';
const PROFILE_META_KEY='quiqu_profiles_meta';
const defaultState={
  overview:{stars:42,streak:7,weekGoal:6,weekDone:3,totalMin:486,avgAccuracy:87},
  math:{grade:'3',wrongProblems:[],moduleProgress:{cpa:65,bar:45,area:35,fract:25,wp:50,kg:30},mastery:{}},
  eng:{grade:'3',sub:'vocab',favoriteWords:[],learnedWords:128,phonicsStage:2},
  pet:{idx:0,level:5,exp:210,hunger:85,mood:92,clean:76,coins:138},
  speak:{teacher:'Emma',topic:'daily'},
  badges:[],
  streakHistory:Array(30).fill(0).map((_,i)=>i<7?1:Math.random()>.4?1:0),
  // ===== 学习引擎扩展（v4 新增，不破坏原有字段） =====
  study:{lastDate:'',todayTime:0,totalTime:0,sessions:[],dailyRecords:{},weeklyPlans:{}},
  answerLog:[],
  currentSession:null,
  // ===== V5 新增字段（不修改原有字段，只新增） =====
  reviewQueue:[],            // 间隔复习队列
  lastSession:null,          // 断点续学 {subject, stage, knowledgePoint, time}
  sceneTheme:{date:'',theme:'',words:[]},  // 每日场景主线
  apiConfig:{deepseekKey:''},  // AI API 配置（用户在设置中输入）
  engStage:1,                 // 英语三阶段：1=输入主导 2=引导输出 3=自主输出
  game:{spellBest:0,challengeBest:0},  // 闯关游戏最高分
  // ===== 多孩档案 =====
  currentProfileId:'default',
  profiles:{
    default:{name:'宝贝',avatarIdx:0,grade:'3',createdAt:Date.now()},
  }
};
function loadState(){try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));return s?{...defaultState,...s}:defaultState;}catch{return defaultState}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(S))}
let S=loadState();

// 多孩档案：保存档案元数据
function saveProfileMeta(){
  try{localStorage.setItem(PROFILE_META_KEY,JSON.stringify((S._profileMeta)||{}));}catch(e){}
}
function loadProfileMeta(){try{const m=JSON.parse(localStorage.getItem(PROFILE_META_KEY));if(m)S._profileMeta=m;}catch(e){}}
loadProfileMeta();

// 切换档案
function switchProfile(id){
  if(id===S.currentProfileId) return;
  // 保存当前档案进度到profiles
  if(!S.profiles[S.currentProfileId]) S.profiles[S.currentProfileId]={name:'宝贝'+S.currentProfileId,grade:S.math.grade,avatarIdx:S.pet.idx,createdAt:S.profiles[S.currentProfileId]&&S.profiles[S.currentProfileId].createdAt||Date.now()};
  else S.profiles[S.currentProfileId].grade=S.math.grade;
  S.profiles[S.currentProfileId].avatarIdx=S.pet.idx;
  S.currentProfileId=id;
  saveState();
  saveProfileMeta();
  // 加载目标档案
  const p=S.profiles[id]||{};
  S.math.grade=p.grade||'3';
  S.pet.idx=p.avatarIdx||0;
  currentMathGrade=S.math.grade;
  render();
  toast(`👋 已切换到 ${p.name||'宝贝'}`);
}
// 新增档案
function addProfile(name){
  const id='p'+Date.now();
  S.profiles[id]={name,avatarIdx:0,grade:'3',createdAt:Date.now()};
  S.currentProfileId=id;
  saveState();
  saveProfileMeta();
  currentMathGrade='3';
  render();
  toast(`✅ 已创建新档案：${name}`);
}
// 删除档案（不能删除最后一个）
function deleteProfile(id){
  const keys=Object.keys(S.profiles);
  if(keys.length<=1){toast('至少保留一个档案');return;}
  if(id===S.currentProfileId){
    const next=keys.find(k=>k!==id)||keys[0];
    S.currentProfileId=next;
  }
  delete S.profiles[id];
  saveState();
  saveProfileMeta();
  render();
  toast(`已删除档案`);
}
function setStar(n,msg=''){S.overview.stars+=n;saveState();toast(`⭐ +${n}${msg?' · '+msg:''}`);}
function addBadge(id,name,icon){if(S.badges.find(b=>b.id===id))return;S.badges.push({id,name,icon,ts:Date.now()});saveState();toast(`🏆 解锁徽章：${name}`);}
function markWordFav(w){const i=S.eng.favoriteWords.indexOf(w);if(i>=0)S.eng.favoriteWords.splice(i,1);else S.eng.favoriteWords.push(w);saveState();return i<0;}

/* ============ 英语板块辅助函数 ============ */
const GRAMMAR_PILLS={
  simple:{name:'一般现在时',rule:'描述习惯、事实、真理。第三人称单数动词加-s/-es。I/You/We/They + 动词原形；He/She/It + 动词s形。',sentences:[
    {en:'I <b>go</b> to school every day.',cn:'我每天上学。'},
    {en:'She <b>likes</b> apples very much.',cn:'她非常喜欢苹果。'},
    {en:'The sun <b>rises</b> in the east.',cn:'太阳从东方升起。'},
    {en:'Do you <b>play</b> football on weekends?',cn:'你周末踢足球吗？'},
  ]},
  continuous:{name:'现在进行时',rule:'描述此刻正在发生的动作。结构：be(am/is/are) + 动词-ing。I am / You are / He is / She is / It is / We are / They are + V-ing。',sentences:[
    {en:'I <b>am reading</b> a book now.',cn:'我现在正在看书。'},
    {en:'Look! The cat <b>is sleeping</b> on the sofa.',cn:'看！猫正在沙发上睡觉。'},
    {en:'They <b>are playing</b> basketball.',cn:'他们正在打篮球。'},
    {en:'What <b>are you doing</b> right now?',cn:'你现在在做什么？'},
  ]},
  comparative:{name:'比较级',rule:'两者比较用比较级。单音节词+er（taller），多音节词前加more（more beautiful），不规则变化good→better, bad→worse。',sentences:[
    {en:'Tom is <b>taller than</b> Jack.',cn:'汤姆比杰克高。'},
    {en:'This book is <b>more interesting</b> than that one.',cn:'这本书比那本更有趣。'},
    {en:'I feel <b>better</b> today.',cn:'我今天感觉好多了。'},
    {en:'Which is <b>bigger</b>, the sun or the moon?',cn:'太阳和月亮哪个更大？'},
  ]},
};

function toggleFav(w,el){
  const added=markWordFav(w);
  const svg=el.querySelector('svg');
  if(added){
    el.style.background='var(--yellow-100)';
    svg.style.fill='var(--yellow)';
    toast(`已收藏 ${w} ⭐`);
  }else{
    el.style.background='var(--ink-50)';
    svg.style.fill='var(--ink-300)';
    toast(`已取消收藏 ${w}`);
  }
  renderSidePanel&&render('english');
}
function vocabPageChange(delta){
  if(!S.eng) S.eng = {};
  S.eng.vocabPage = Math.max(0, (S.eng.vocabPage || 0) + delta);
  saveState();
  render('english');
}
function flipFlash(i){
  const c=$('#flashCard'+i);
  if(c&&!c.classList.contains('known'))c.classList.toggle('flipped');
}
function unflipFlash(i){
  const c=$('#flashCard'+i);
  if(c)c.classList.remove('flipped');
}
function markFlashKnown(i){
  const c=$('#flashCard'+i);
  if(!c||c.classList.contains('known'))return;
  c.classList.add('known');
  c.classList.remove('flipped');
  flashKnownCount++;
  S.eng.learnedWords=Math.max(S.eng.learnedWords,flashKnownCount);
  saveState();
  const bar=$('#flashBar');const cnt=$('#flashCount');
  if(bar)bar.style.width=(flashKnownCount/4*100)+'%';
  if(cnt)cnt.textContent=`${flashKnownCount} / 4`;
  if(flashKnownCount===1)setStar(2,'认识1个单词');
  else if(flashKnownCount===2)setStar(2,'又认识1个');
  else if(flashKnownCount===3)setStar(2,'继续加油');
  else if(flashKnownCount===4){
    setStar(8,'闪卡挑战完成！');
    toast('🎉 闪卡记忆挑战完成！');
  }
}
// ===== 主题词汇闯关游戏 =====
let vgState={theme:null,pool:[],idx:0,score:0,quiz:[]};
function startVocabGame(themeId){
  if(typeof VOCAB_THEMES==='undefined')return;
  const theme=VOCAB_THEMES.find(t=>t.id===themeId);
  if(!theme||!theme.words.length)return;
  vgState={theme:themeId,pool:theme.words.slice(),idx:0,score:0,quiz:[]};
  // 生成 10 题（或全部词如果不足 10 个）
  var n=Math.min(10,theme.words.length);
  for(var i=0;i<n;i++){
    var correct=vgState.pool[Math.floor(Math.random()*vgState.pool.length)];
    var opts=[correct];
    while(opts.length<4){
      var w=vgState.pool[Math.floor(Math.random()*vgState.pool.length)];
      if(!opts.find(o=>o.w===w.w))opts.push(w);
    }
    // 打乱选项顺序
    opts.sort(function(){return Math.random()-0.5;});
    vgState.quiz.push({correct:correct,choices:opts});
  }
  var area=$('#vocabGameArea');
  if(area)area.style.display='block';
  var bar=$('#vocabThemeBar');
  if(bar)bar.style.display='none';
  if($('#vgTotal'))$('#vgTotal').textContent=n;
  renderVocabQuestion();
}
function renderVocabQuestion(){
  if(vgState.idx>=vgState.quiz.length){endVocabGame();return;}
  var q=vgState.quiz[vgState.idx];
  if($('#vgEmoji'))$('#vgEmoji').textContent=q.correct.emoji;
  if($('#vgIdx'))$('#vgIdx').textContent=vgState.idx+1;
  if($('#vgScore'))$('#vgScore').textContent=vgState.score;
  if($('#vgFeedback'))$('#vgFeedback').textContent='';
  var box=$('#vgChoices');
  if(box){
    box.innerHTML=q.choices.map(function(w,i){
      return '<button class="vg-choice" onclick="answerVocab('+i+')" style="padding:10px 20px;border-radius:12px;border:2px solid var(--ink-200);background:white;font-size:14px;font-weight:600;cursor:pointer;transition:all .15s;min-width:80px">'+w.w+'</button>';
    }).join('');
    box._choices=q.choices;
    box._correct=q.correct;
  }
  // 朗读单词
  try{speak(q.correct.w);}catch(e){}
}
function answerVocab(i){
  var box=$('#vgChoices');
  if(!box||!box._choices)return;
  var chosen=box._choices[i];
  var correct=box._correct;
  var fb=$('#vgFeedback');
  var btns=box.querySelectorAll('.vg-choice');
  btns.forEach(function(b){b.style.pointerEvents='none';});
  if(chosen.w===correct.w){
    vgState.score++;
    if(fb){fb.textContent='✅ 正确！'+correct.def.split('。')[0];fb.style.color='var(--teal)';}
    btns[i].style.background='var(--teal)';btns[i].style.color='white';btns[i].style.borderColor='var(--teal)';
    setStar(2,'词汇闯关正确');
  }else{
    if(fb){fb.textContent='❌ 答案是 "'+correct.w+'" - '+correct.def.split('。')[0];fb.style.color='var(--coral)';}
    btns[i].style.background='var(--coral)';btns[i].style.color='white';btns[i].style.borderColor='var(--coral)';
    btns.forEach(function(b,j){if(box._choices[j].w===correct.w){b.style.background='var(--teal)';b.style.color='white';b.style.borderColor='var(--teal)';}});
  }
  S.eng.learnedWords=Math.max(S.eng.learnedWords||0,vgState.score);
  saveState();
  setTimeout(function(){vgState.idx++;renderVocabQuestion();},1500);
}
function endVocabGame(){
  var area=$('#vocabGameArea');
  if(area){
    area.innerHTML='<div style="text-align:center;padding:40px"><div style="font-size:48px;margin-bottom:16px">🎉</div><div style="font-size:20px;font-weight:800;color:var(--navy)">闯关完成！</div><div style="font-size:16px;color:var(--teal);margin-top:8px">得分 '+vgState.score+' / '+vgState.quiz.length+'</div><button onclick="exitVocabGame()" style="margin-top:20px;padding:10px 24px;border-radius:12px;border:none;background:var(--teal);color:white;font-size:14px;font-weight:700;cursor:pointer">返回选择主题</button></div>';
  }
  if(vgState.score>=vgState.quiz.length)setStar(8,'词汇闯关全对！');
}
function exitVocabGame(){
  var area=$('#vocabGameArea');
  if(area)area.style.display='none';
  var bar=$('#vocabThemeBar');
  if(bar)bar.style.display='flex';
}
function switchGramPill(id){
  $$('#gramPills .gram-pill').forEach(p=>p.classList.toggle('active',p.dataset.pill===id));
  const g=GRAMMAR_PILLS[id];if(!g)return;
  const ruleEl=$('#gramContent .gram-rule');
  const sensEl=$('#gramSentences');
  if(ruleEl)ruleEl.innerHTML=`📖 <strong style="color:var(--yellow-700)">${g.name}规则：</strong>${g.rule}`;
  if(sensEl){
    sensEl.innerHTML=g.sentences.map((s,i)=>`<div class="gram-sen" id="gramSen${i}" onclick="playGramSen(${i},'${s.en.replace(/<[^>]+>/g,'').replace(/'/g,'')}')">
      <div class="gram-sen-num">${i+1}</div>
      <div class="gram-sen-body">${s.en}<span class="gram-sen-cn">${s.cn}</span></div>
      <div class="gram-sen-wave">
        <svg viewBox="0 0 60 24" preserveAspectRatio="none">
          <rect x="2" y="10" width="4" height="4" rx="2" fill="var(--teal)"><animate attributeName="y" values="4;14;4" dur="0.8s" repeatCount="indefinite"/></rect>
          <rect x="12" y="6" width="4" height="12" rx="2" fill="var(--teal)"><animate attributeName="y" values="2;16;2" dur="1s" repeatCount="indefinite"/></rect>
          <rect x="22" y="8" width="4" height="8" rx="2" fill="var(--teal)"><animate attributeName="y" values="6;12;6" dur="0.7s" repeatCount="indefinite"/></rect>
          <rect x="32" y="4" width="4" height="16" rx="2" fill="var(--teal)"><animate attributeName="y" values="2;14;2" dur="0.9s" repeatCount="indefinite"/></rect>
          <rect x="42" y="8" width="4" height="8" rx="2" fill="var(--teal)"><animate attributeName="y" values="4;14;4" dur="0.85s" repeatCount="indefinite"/></rect>
          <rect x="52" y="10" width="4" height="4" rx="2" fill="var(--teal)"><animate attributeName="y" values="6;12;6" dur="1.1s" repeatCount="indefinite"/></rect>
        </svg>
      </div>
    </div>`).join('');
  }
}
function playGramSen(i,text){
  const sen=$('#gramSen'+i);if(!sen)return;
  $$('.gram-sen').forEach(s=>s.classList.remove('playing'));
  sen.classList.add('playing');
  speak(text);
  setTimeout(()=>sen.classList.remove('playing'),2500);
}
function playListenAudio(text){
  speak(text);
  toast('🔊 正在播放听力音频...');
}
function checkListenBlank(i,ans){
  const inp=$('#listenInput'+i);
  const btn=$('#listenChk'+i);
  if(!inp||!btn)return;
  const val=inp.value.trim().toLowerCase();
  const correct=val===ans.toLowerCase();
  btn.classList.remove('correct','wrong');
  btn.classList.add(correct?'correct':'wrong');
  btn.textContent=correct?'✓ 正确':'✗ 再想想';
  if(correct){
    inp.style.borderColor='var(--teal)';
    inp.style.background='rgba(0,168,150,.25)';
    setStar(1,'听力答对');
    toast(`✅ 太棒了！正确答案：${ans}`);
  }else{
    inp.style.borderColor='#EF4444';
    inp.style.background='rgba(239,68,68,.15)';
    toast(`💡 提示：首字母是 ${ans[0].toUpperCase()}，共 ${ans.length} 个字母`);
  }
}

let _currentListenItems=[];
let _currentListenIdx=-1;

function startListenExercise(idx){
  const allItems=typeof LISTENING_DATA!=='undefined'&&LISTENING_DATA||[];
  const gradeNum=parseInt(currentEngGrade)||3;
  _currentListenItems=allItems.filter(i=>i.grade==gradeNum).sort((a,b)=>a.level-b.level);
  if(idx<0||idx>=_currentListenItems.length) return;
  _currentListenIdx=idx;
  renderListenExercise(_currentListenItems[idx]);
}

function renderListenExercise(item){
  const area=$('#listenExerciseArea');
  if(!area)return;
  if(!item){area.innerHTML='';return;}
  const qCount=item.questions?item.questions.length:0;
  const playBtn=`<button onclick="speak(${JSON.stringify(item.text)});toast('🔊 正在播放...')" style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:20px;border:none;background:var(--teal);color:white;font-size:14px;font-weight:700;cursor:pointer;transition:all var(--dur-base)">🔊 播放音频</button>`;
  const qHTML=item.questions?item.questions.map((q,i)=>`
    <div class="card" style="margin-bottom:12px;padding:16px">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:12px">
        <div style="width:28px;height:28px;border-radius:50%;background:var(--teal-soft);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:var(--teal);flex-shrink:0">${i+1}</div>
        <div style="font-size:14px;color:var(--navy);font-weight:600;line-height:1.5">${q.q}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-left:38px">
        ${q.options.map((opt,oi)=>`<div class="listen-opt" id="lopt_${i}_${oi}" onclick="selectListenOpt(${i},${oi},${q.answer})" style="padding:10px 14px;border-radius:10px;border:2px solid var(--ink-200);font-size:14px;color:var(--navy);cursor:pointer;transition:all 0.2s;font-weight:500">${opt}</div>`).join('')}
      </div>
      <div id="listenExplain_${i}" style="margin-top:10px;padding:10px 14px;border-radius:8px;font-size:13px;color:var(--text-3);display:none"></div>
    </div>`).join(''):`<div style="text-align:center;padding:30px;color:var(--text-3)">暂无练习题</div>`;
  area.innerHTML=`
    <div class="card" style="margin-bottom:16px;padding:18px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="font-size:36px">${item.type==='dialogue'?'💬':item.type==='story'?'📖':item.type==='song'?'🎵':'🎧'}</div>
        <div style="flex:1">
          <div style="font-size:17px;font-weight:800;color:var(--navy)">${item.title}</div>
          <div style="font-size:13px;color:var(--text-2);margin-top:3px">${item.type==='dialogue'?'情景对话':'故事阅读'} · ${item.duration||'~1min'}</div>
        </div>
        ${playBtn}
      </div>
    </div>
    <div class="card" style="padding:16px;margin-bottom:16px">
      <div style="font-size:13px;color:var(--text-2);margin-bottom:10px">📖 听力原文</div>
      <div style="padding:12px 16px;background:var(--ink-50);border-radius:10px;font-size:14px;line-height:1.8;color:var(--ink-700);font-family:'Inter',sans-serif">${item.text}</div>
      <div style="margin-top:8px;font-size:13px;color:var(--ink-500);line-height:1.7">${item.cn||''}</div>
    </div>
    <div style="font-size:15px;font-weight:800;color:var(--navy);margin-bottom:12px">📝 听力理解（${qCount}题）</div>
    ${qHTML}
    <div id="listenResult" style="text-align:center;padding:20px;font-size:18px;font-weight:800;color:var(--teal);display:none"></div>
    <div style="display:flex;gap:10px;margin-top:12px;justify-content:center">
      <button onclick="renderListenList()" style="padding:8px 20px;border-radius:20px;border:2px solid var(--ink-200);background:white;font-size:13px;font-weight:700;color:var(--navy);cursor:pointer">← 返回列表</button>
    </div>`;
}

function selectListenOpt(qi,oi,correctIdx){
  const opts=document.querySelectorAll(`[id^="lopt_${qi}_"]`);
  if(opts[oi].dataset.answered) return;
  opts[oi].dataset.answered='1';
  const isCorrect=oi===correctIdx;
  opts[oi].style.borderColor=isCorrect?'var(--teal)':'#EF4444';
  opts[oi].style.background=isCorrect?'rgba(0,168,150,.15)':'rgba(239,68,68,.15)';
  opts[oi].style.color=isCorrect?'var(--teal)':'#EF4444';
  const expl=document.getElementById('listenExplain_'+qi);
  if(expl){
    const item=_currentListenItems[_currentListenIdx];
    const q=item.questions[qi];
    expl.textContent='💡 '+q.cn;
    expl.style.display='block';
    expl.style.background=isCorrect?'rgba(0,168,150,.1)':'rgba(239,68,68,.1)';
    expl.style.color=isCorrect?'var(--teal)':'#EF4444';
  }
  opts.forEach((o,i)=>{if(i!==oi){o.style.opacity='0.4';o.style.cursor='default';}});
  // 检查是否全部答完
  const allDone=opts.length>0&&Array.from(opts).every(o=>o.dataset.answered==='1');
  if(allDone){
    const answered=opts.length;
    const answeredCorrect=Array.from(opts).filter(o=>o.dataset.answered==='1').length;
    // 计算本轮正确数
    const area=$('#listenExerciseArea');
    const resultEl=$('#listenResult');
    if(resultEl){
      resultEl.style.display='block';
      resultEl.textContent=`🎉 完成！${answeredCorrect}/${answered} 正确`;
      setStar(answeredCorrect*2,'听力练习');
      toast(`🎉 听力练习完成！答对 ${answeredCorrect}/${answered}`);
    }
  }
}

function renderListenList(){
  _currentListenIdx=-1;
  render();
}

/* ============ 徽章定义 ============ */
const BADGES=[
  {id:'first_word',name:'初次发音',icon:'🗣️',cond:()=>true},
  {id:'week_streak_7',name:'周冠军',icon:'🔥',cond:()=>S.overview.streak>=7},
  {id:'phonics_stage3',name:'拼读大师',icon:'🔤',cond:()=>S.eng.phonicsStage>=3},
  {id:'math_cpa_100',name:'CPA达人',icon:'🧩',cond:()=>S.math.moduleProgress.cpa>=100},
  {id:'vocab_100',name:'百词斩',icon:'📚',cond:()=>S.eng.learnedWords>=100},
  {id:'eng_stage2',name:'开口说英语',icon:'🗣️',cond:()=>(S.engStage||1)>=2},
  {id:'eng_stage3',name:'自信说英语',icon:'🎤',cond:()=>(S.engStage||1)>=3},
];

/* ============ 路由 & 初始化 ============ */
let currentView='overview';
let currentMathGrade=S.math.grade;
let currentEngGrade=S.eng.grade;
let currentEngSub=S.eng.sub;
if(!['vocab','phonics','phrases','grammar','listen'].includes(currentEngSub)){currentEngSub='vocab';S.eng.sub='vocab';saveState();}
currentPhonicsStage=S.eng.phonicsStage;
let flashKnownCount=0;

// 渲染今日一起练
function renderTodayPractice(){
  const today=new Date();const dateStr=`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  const engStage=S.engStage||1;
  const phonicsStage=S.eng.phonicsStage||1;
  const practiceItems=[
    {subject:'math',name:'数学',icon:'📐',target:engStage>=2?'完成3道今日数学题':'完成5道数学练习',done:true},
    {subject:'eng',name:'英语',icon:'🔤',target:phonicsStage>=2?'跟读5个自然拼读音':'学习3个新单词',done:true},
    ...(engStage>=2?[{subject:'speak',name:'口语',icon:'🗣️',target:'和Emma老师对话1轮',done:false}]:[]),
  ];
  const doneCount=practiceItems.filter(p=>p.done).length;
  $('#todayPracticeItem').innerHTML=practiceItems.map(p=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--ink-100)"><span>${p.icon}</span><span style="flex:1">${p.name}：${p.target}</span><span>${p.done?'✅':'⏳'}</span></div>`).join('')+`<div style="font-size:11px;color:var(--text-3);margin-top:8px;text-align:center">今日 ${doneCount}/${practiceItems.length} 项完成</div>`;
}

// 渲染教材进度
function renderTextbookProgress(){
  const gradeMap={'2a':'二上','2b':'二下','3a':'三上','3b':'三下','4a':'四上','4b':'四下','5a':'五上','5b':'五下','6a':'六上','6b':'六下'};
  const currentGrade=gradeMap[S.math.grade]||S.math.grade;
  const units=(MATH_BY_GRADE&&MATH_BY_GRADE[S.math.grade]&&MATH_BY_GRADE[S.math.grade].units)||[];
  const doneUnits=units.filter(u=>u.level==='done').length;
  const currentUnit=units.find(u=>u.level==='current');
  const engUnits=['词汇','自然拼读','日常短语','语法','听力'];
  const engStageName={1:'输入主导期',2:'引导输出期',3:'自主输出期'}[(S.engStage||1)];
  $('#textbookProgress').innerHTML=`<div style="margin-bottom:8px"><b>📐 数学</b>：${currentGrade} · 已完成${doneUnits}单元${currentUnit?' · 当前：'+currentUnit.name:''}</div><div><b>🔤 英语</b>：${S.eng.grade}年级 · 阶段${S.engStage||1}（${engStageName}） · 已学词${S.eng&&S.eng.learnedWords||0}</div>`;
}

function switchView(view){
  if(!document.startViewTransition){
    currentView=view;S[view==='math'?'math':view==='english'?'eng':'pet']=S[view==='math'?'math':view==='english'?'eng':'pet'];
    $$('.nav-tab').forEach(t=>t.classList.toggle('active',t.dataset.view===view));
    render();return;
  }
  document.startViewTransition(()=>{
    currentView=view;
    $$('.nav-tab').forEach(t=>t.classList.toggle('active',t.dataset.view===view));
    render();
  });
  // 进入英语板块时显示今日场景横幅
  if(view==='english'){
    setTimeout(showSceneBanner,100);
  }
}

function render(){
  const area=$('#contentArea');
  if(currentView==='overview')area.innerHTML=renderOverview();
  else if(currentView==='math')area.innerHTML=renderMath(currentMathGrade);
  else if(currentView==='english')area.innerHTML=renderEnglish(currentEngGrade,currentEngSub);
  else if(currentView==='speak'){area.innerHTML=renderSpeak();bindSpeakEvents();}
  else if(currentView==='game')area.innerHTML=renderGameHub();
  else if(currentView==='pet')area.innerHTML=renderPet();
  updatePetAvatar();
  bindDynamicEvents();
}

/* ============ 视图工具：Bento栅格 + 3D卡片 + 浮动宠物 ============ */
function badgeDots(){
  return (S.badges.length?`<span style="position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--coral);color:white;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center">${S.badges.length}</span>`:'');
}
function bindDynamicEvents(){
  // 顶部 nav
  $$('.nav-tab').forEach(t=>t.onclick=()=>switchView(t.dataset.view));
  // 数学年级
  $$('#mathGrades .grade-pill').forEach(p=>p.onclick=async()=>{
    const grade=p.dataset.grade;
    currentMathGrade=grade;S.math.grade=grade;
    // 同步到当前档案
    if(S.profiles[S.currentProfileId]) S.profiles[S.currentProfileId].grade=grade;
    saveState();
    // 懒加载该年级数据
    const targetGrade = grade + (grade==='2'?'b':(grade==='3'?'a':''));
    if(targetGrade && !MATH_BY_GRADE[targetGrade]){
      await loadGrade(targetGrade);
    }
    $$('#mathGrades .grade-pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    render();
  });
  // 英语年级
  $$('#engGrades .grade-pill').forEach(p=>p.onclick=()=>{
    currentEngGrade=p.dataset.grade;S.eng.grade=currentEngGrade;saveState();
    flashKnownCount=0;
    $$('#engGrades .grade-pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    render();
  });
  // 英语子tab
  $$('#engSubtabs .sub-tab').forEach(t=>t.onclick=()=>{
    const sub = t.dataset.sub;
    if(sub === 'v5flow'){
      S.eng.useV5 = true;
      S.eng.sub = 'v5flow';
    } else {
      S.eng.useV5 = false;
      currentEngSub = sub;
      S.eng.sub = sub;
    }
    flashKnownCount=0;
    saveState();
    render();
  });
  // 短语场景
  $$('#sceneTabs .scene-tab').forEach(t=>t.onclick=()=>{
    $$('#sceneTabs .scene-tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const scene=t.dataset.scene;
    $('#phraseGrid').innerHTML=PHRASE_BANK[scene].map(p=>renderPhraseCard(p)).join('');
  });
  // 拼读阶段切换
  $$('#phonicsStages .phonics-stage').forEach(s=>s.onclick=()=>{
    currentPhonicsStage=parseInt(s.dataset.stage);S.eng.phonicsStage=currentPhonicsStage;saveState();
    $$('#phonicsStages .phonics-stage').forEach(x=>x.classList.remove('active'));
    s.classList.add('active');
    render();
  });
  // 3D 卡片微交互
  $$('.tilt-card').forEach(el=>{
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      el.style.transform=`perspective(900px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg) translateY(-2px)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transform='';});
  });
  // 家长面板按钮绑定（每次重新绑定保证点击有反应）
  const parentBtn=$('#parentBtn');
  if(parentBtn) parentBtn.onclick=openParentPanel;
  const parentClose=$('#parentClose');
  if(parentClose) parentClose.onclick=()=>{disposeParentCharts();$('#parentModal').classList.remove('show')};
  const parentModal=$('#parentModal');
  if(parentModal) parentModal.onclick=(e)=>{if(e.target.id==='parentModal'){disposeParentCharts();$('#parentModal').classList.remove('show')}};
}

// ===== 场景横幅 & 场景音频 =====
function showSceneBanner(){
  try{
    const banner=$('#engSceneBanner');
    if(!banner)return;
    const scene=typeof SceneManager!=='undefined'&&SceneManager.getToday?SceneManager.getToday(S.currentProfileId||'default'):null;
    if(!scene)return;
    banner.style.display='flex';
    banner.style.flexDirection='column';
    const iconEl=$('#engSceneIcon');
    const nameEl=$('#engSceneName');
    const wordsEl=$('#engSceneWords');
    if(iconEl)iconEl.textContent=scene.icon;
    if(nameEl)nameEl.textContent=scene.name;
    if(wordsEl)wordsEl.textContent='关键词：'+scene.words.slice(0,6).join(' · ')+((scene.phrases||[]).length?'  ·  '+scene.phrases[0]:'');
  }catch(e){}
}

function playEngSceneAudio(){
  try{
    const scene=typeof SceneManager!=='undefined'&&SceneManager.getToday?SceneManager.getToday(S.currentProfileId||'default'):null;
    if(!scene)return;
    const text=(scene.phrases||[]).join('. ')+'. '+scene.grammar;
    speak(text);
    toast('🔊 播放场景对话...');
  }catch(e){toast('音频播放失败');}
}


// 初始化
document.addEventListener('DOMContentLoaded',()=>{
  // 注册 PWA Service Worker
  if('serviceWorker' in navigator){
    try{ navigator.serviceWorker.register('sw.js').catch(()=>{}); }catch(e){}
  }
  // 解锁音频引擎：监听首次用户手势（click/touchstart），触发空 utterance 解锁移动端音频
  const _unlockOnce = ()=>{ unlockAudio(); document.removeEventListener('click',_unlockOnce); document.removeEventListener('touchstart',_unlockOnce); };
  document.addEventListener('click',_unlockOnce);
  document.addEventListener('touchstart',_unlockOnce);
  // 语音列表异步加载完成后刷新标记
  if('speechSynthesis' in window){
    try{ speechSynthesis.onvoiceschanged = ()=>{ _speakVoicesReady = true; }; }catch(e){}
  }
  $('#parentBtn').onclick=openParentPanel;
  $('#parentClose').onclick=()=>{disposeParentCharts();$('#parentModal').classList.remove('show')};
  $('#parentModal').onclick=(e)=>{if(e.target.id==='parentModal'){disposeParentCharts();$('#parentModal').classList.remove('show')}};
  $('#micToggle').onclick=function(){
    this.classList.toggle('active');
    toast(this.classList.contains('active')?'语音模式开启':'语音模式关闭');
  };
  // 注入浮动宠物
  const pet=document.createElement('div');
  pet.innerHTML=`
    <div id="floatingPet" style="position:fixed;bottom:24px;right:24px;z-index:90;cursor:pointer;transition:transform var(--dur-base) var(--ease-spring)"
      onmouseover="this.style.transform='scale(1.08) translateY(-4px)'"
      onmouseout="this.style.transform=''"
      onclick="switchView('pet')">
      <div style="width:88px;height:88px;border-radius:28px;background:white;box-shadow:var(--shadow-xl);padding:6px;position:relative;border:1.5px solid var(--teal-200)">
        <img src="${(S.pet&&PETS[S.pet.idx])?PETS[S.pet.idx].avatar:''}" style="width:100%;height:100%;object-fit:cover;border-radius:22px" alt="pet">
        <div style="position:absolute;top:-8px;right:-8px;width:28px;height:28px;border-radius:50%;background:var(--yellow);color:var(--navy-800);font-weight:900;font-size:13px;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md)">Lv${S.pet.level}</div>
        <div style="position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);background:var(--teal);color:white;font-size:10px;font-weight:700;padding:3px 10px;border-radius:10px;white-space:nowrap;box-shadow:var(--shadow-sm)">点我去乐园</div>
      </div>
    </div>`;
  document.body.appendChild(pet);
  render();
  setTimeout(()=>toast('👋 欢迎回来！今天也要加油哦！'),400);
  // 自动检查徽章
  setTimeout(()=>{BADGES.forEach(b=>{if(b.cond())addBadge(b.id,b.name,b.icon);});},2000);
  // 英语三阶段升级检测
  setTimeout(()=>{if(typeof SpeakEngineV5!=='undefined'&&SpeakEngineV5.checkStageUpgrade){SpeakEngineV5.checkStageUpgrade();}},2500);
  // 断点续学恢复
  if(S.lastSession&&S.lastSession.subject&&Date.now()-S.lastSession.time<86400000){
    setTimeout(()=>{
      const subj=S.lastSession.subject==='math'?'数学':'英语';
      const stageText=(S.lastSession.stage&&{review:'昨日回顾',discovery:'引导发现',practice:'正式解题',explain:'数形讲解',challenge:'挑战模式',summary:'总结'}[S.lastSession.stage])||'上一步';
      if(confirm(`📖 发现${subj}学习未完成任务（${stageText||'上一步'}）\n\n是否继续上次进度？`)){
        switchView(S.lastSession.subject);
      }
    },3000);
  }
});
