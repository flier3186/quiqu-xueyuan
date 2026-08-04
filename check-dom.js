const http = require('http');
http.get('http://localhost:8080/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('=== DOM 结构检查 ===\n');

    // 找所有 data-view 属性
    const viewMatches = data.match(/data-view="[^"]+"/g) || [];
    const uniqueViews = [...new Set(viewMatches)];
    console.log('data-view 属性:');
    uniqueViews.forEach(m => console.log('  ', m));

    // 找 nav 相关
    const navMatches = data.match(/<nav[^>]*>/g) || data.match(/class="nav"[^>]*>/g) || [];
    console.log('\nnav 元素:', navMatches.length);
    navMatches.slice(0, 3).forEach(m => console.log('  ', m.substring(0, 100)));

    // 找 panel-card
    const panels = data.match(/class="panel-card"/g) || [];
    console.log('\npanel-card 数量:', panels.length);

    // 找 parent 相关
    const parentMatch = data.match(/data-view="parent"/) || data.match(/id="parent"/) || data.match(/data-section="parent"/);
    console.log('\nparent 相关元素:', parentMatch ? parentMatch[0] : '未找到');

    // 找 DeepSeek 相关
    const deepseekCount = (data.match(/deepseek/gi) || []).length;
    console.log('DeepSeek 关键词出现次数:', deepseekCount);
  });
});
