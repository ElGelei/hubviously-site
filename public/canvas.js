// Hubviously programmatic canvas mockups
// Builds an original "workflow dependency graph" visual.
// We never use any HubSpot brand or distinctive UI; this is our own canvas product.

(function() {
 // ---- Hero canvas: dark mode product shot ----
 function buildHeroCanvas() {
 const el = document.getElementById('heroCanvas');
 if (!el) return;
 el.innerHTML = `
 <div style="background:#1A1A2E; padding: 0; border-radius: 16px 16px 0 0; overflow: hidden;">
 <!-- top toolbar -->
 <div style="display:flex; align-items:center; gap:0; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,.06); background: #14142a;">
 <div style="display:flex; gap:6px; margin-right: 14px;">
 <span style="width:10px;height:10px;border-radius:50%;background:#3a3a5a;"></span>
 <span style="width:10px;height:10px;border-radius:50%;background:#3a3a5a;"></span>
 <span style="width:10px;height:10px;border-radius:50%;background:#3a3a5a;"></span>
 </div>
 <button style="display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:rgba(255,255,255,.7);font:500 12px 'JetBrains Mono',monospace;">
 ← Dashboard
 </button>
 <span style="margin-left:14px;font-weight:600;font-size:13px;color:#fff;">Hubviously</span>
 <span style="margin-left:8px;font:500 12px 'JetBrains Mono',monospace;color:rgba(255,255,255,.45);">hs-simple.com</span>
 <div style="margin-left:auto;display:flex;align-items:center;gap:14px;font:500 12px 'JetBrains Mono',monospace;color:rgba(255,255,255,.55);">
 <span><span style="width:6px;height:6px;display:inline-block;background:#7c5cff;border-radius:50%;margin-right:6px;"></span>53 Workflows</span>
 <span><span style="width:6px;height:6px;display:inline-block;background:#4ea1ff;border-radius:50%;margin-right:6px;"></span>44 Emails</span>
 <span><span style="width:6px;height:6px;display:inline-block;background:#22c55e;border-radius:50%;margin-right:6px;"></span>7 Forms</span>
 <span><span style="width:6px;height:6px;display:inline-block;background:#f472b6;border-radius:50%;margin-right:6px;"></span>75 Lists</span>
 <span style="color:rgba(255,255,255,.4);">738 Properties</span>
 <button style="height:28px;padding:0 10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:rgba(255,255,255,.7);font:500 12px 'JetBrains Mono',monospace;">Reset canvas</button>
 <button style="display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;background:rgba(232,80,26,.18);border:1px solid rgba(232,80,26,.4);border-radius:6px;color:#ff8a5c;font:500 12px 'JetBrains Mono',monospace;">⟳ Sync portal</button>
 </div>
 </div>
 <!-- filter bar -->
 <div style="display:flex; align-items:center; gap:8px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,.06); font:500 12px 'JetBrains Mono',monospace; color: rgba(255,255,255,.55);">
 <span style="color:rgba(255,255,255,.35); margin-right:4px;">STATUS</span>
 <span style="padding:4px 10px;border-radius:5px;background:rgba(232,80,26,.18);color:#ff8a5c;">All</span>
 <span style="padding:4px 10px;">Active</span>
 <span style="padding:4px 10px;">Inactive</span>
 <span style="padding:4px 10px;">Deleted</span>
 <span style="margin-left:14px; padding:4px 10px;">Objects ▾</span>
 <span style="margin-left:6px; padding:4px 10px; background:rgba(232,80,26,.12); color:#ff8a5c; border-radius:5px;">⚠ 2 Cycles</span>
 <span style="margin-left:6px; padding:4px 10px;">Hide isolated</span>
 <span style="margin-left:6px; padding:4px 10px;">≡ Advanced filters</span>
 </div>
 <!-- canvas -->
 <div style="position:relative; height: 460px; background:
 radial-gradient(circle at center, #1c1c34 0%, #14142a 100%);
 background-image:
 radial-gradient(circle at center, #1c1c34 0%, #14142a 100%),
 radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
 background-size: cover, 24px 24px;
 background-blend-mode: normal, overlay;
 ">
 ${buildGraph(true)}
 <!-- legend -->
 <div style="position:absolute; left:14px; bottom:14px; display:flex; gap:14px; font:500 11px 'JetBrains Mono',monospace; color:rgba(255,255,255,.55);">
 ${legendItems()}
 </div>
 <!-- minimap -->
 <div style="position:absolute; right:14px; bottom:14px; width: 160px; height: 96px; background:#0e0e22; border:1px solid rgba(255,255,255,.08); border-radius:6px; padding:8px; display:flex;flex-wrap:wrap;gap:3px; overflow:hidden;">
 ${miniDots()}
 </div>
 <!-- zoom -->
 <div style="position:absolute; left:14px; top:14px; display:flex;flex-direction:column;gap:0;background:#0e0e22;border:1px solid rgba(255,255,255,.08);border-radius:6px;overflow:hidden;">
 <button style="width:24px;height:24px;background:transparent;border:none;color:rgba(255,255,255,.6);font-size:14px;line-height:1;">+</button>
 <button style="width:24px;height:24px;background:transparent;border:none;color:rgba(255,255,255,.6);font-size:14px;line-height:1;border-top:1px solid rgba(255,255,255,.08);">−</button>
 </div>
 </div>
 </div>
 `;
 }

 function legendItems() {
 const items = [
 ['#4ea1ff','Contact'],['#7c5cff','Company'],['#E8501A','Deal'],
 ['#22c55e','Ticket'],['#f472b6','Conversation'],['#fbbf24','Lead'],
 ['#a78bfa','User'],['#34d399','Task']
 ];
 return items.map(([c,l]) => `<span><span style="width:8px;height:8px;display:inline-block;background:${c};border-radius:2px;margin-right:5px;vertical-align:middle;"></span>${l}</span>`).join('') +
 `<span style="margin-left:10px;color:rgba(255,255,255,.35);">--- Suppression risk</span>` +
 `<span style="margin-left:10px;color:rgba(255,255,255,.35);">Prop → list trigger</span>` +
 `<span style="margin-left:10px; padding:3px 8px; background:rgba(232,80,26,.18); color:#ff8a5c; border-radius:4px;">⚠ 2 WFs in cycle</span>`;
 }

 function miniDots() {
 let html = '';
 for (let i = 0; i < 84; i++) {
 const c = ['#7c5cff','#4ea1ff','#E8501A','#22c55e','rgba(255,255,255,.18)','rgba(255,255,255,.18)'][Math.floor(Math.random()*6)];
 html += `<span style="width:14px;height:6px;background:${c};border-radius:1px;display:inline-block;"></span>`;
 }
 return html;
 }

 // SVG dependency graph (original drawing, not a HubSpot UI)
 function buildGraph(dark) {
 const nodes = [
 // [id, x, y, label, type, status]
 ['n1', 70, 150, 'first list trigger', 'contact', 'ok'],
 ['n2', 240, 80, 'list b', 'list', 'ok'],
 ['n3', 240, 150, 'unnamed workflow\n2024-04-15 17:31:08', 'contact', 'ok'],
 ['n4', 240, 230, 'create x hubspot\nbooking - bm', 'deal', 'cycle'],
 ['n5', 420, 80, 'unnamed workflow\n2024-08-22 15:01:38', 'contact', 'ok'],
 ['n6', 420, 150, 'sync x eu', 'deal', 'ok'],
 ['n7', 420, 230, 'test 04 restart', 'contact', 'ok'],
 ['n8', 600, 80, 'long subscription', 'deal', 'ok'],
 ['n9', 600, 150, 'pre-onboarding bm', 'deal', 'ok'],
 ['n10', 600, 230, 'workflow new branding \n× post-onboarding 1m', 'deal', 'ok'],
 ['n11', 600, 310, 'properties: nurturing\n[2]', 'contact', 'ok'],
 ['n12', 800, 150, 'group bm: nurturing \nfirst call', 'deal', 'cycle'],
 ['n13', 800, 230, 'workflow bm: nurturing \nfirst call', 'deal', 'ok'],
 ['n14', 800, 310, 'workflow bm: × playing \n× field 1d-1d', 'deal', 'ok'],
 ['n15', 980, 230, 'nurturing second phase\n closed first call', 'deal', 'ok'],
 ['n16', 1100, 90, 'unnamed wf\n2024-12-31', 'contact', 'iso'],
 // bottom isolated
 ['n17', 220, 410, 'reassign company info\ncloud:closed', 'company', 'iso'],
 ['n18', 380, 410, 'update before deals', 'deal', 'iso']
 ];
 const edges = [
 ['n1','n2','#7c5cff'],
 ['n1','n3','#E8501A'],
 ['n1','n4','#E8501A'],
 ['n2','n5','#7c5cff'],
 ['n3','n5','#E8501A'],
 ['n3','n6','#E8501A'],
 ['n3','n7','#E8501A'],
 ['n4','n7','#E8501A'],
 ['n4','n11','#E8501A'],
 ['n5','n8','#7c5cff'],
 ['n6','n9','#E8501A'],
 ['n6','n10','#E8501A'],
 ['n7','n10','#E8501A'],
 ['n9','n12','#E8501A'],
 ['n9','n13','#E8501A'],
 ['n10','n13','#4ea1ff'],
 ['n10','n14','#4ea1ff'],
 ['n11','n14','#7c5cff'],
 ['n12','n15','#E8501A'],
 ['n13','n15','#E8501A'],
 ['n14','n15','#E8501A'],
 // suppression risk dashed
 ['n8','n16','rgba(255,255,255,.25)','dash'],
 // bottom isolated pair
 ['n17','n18','#fbbf24']
 ];

 const W = 1180, H = 460;
 const pillColor = {contact:'#4ea1ff',company:'#7c5cff',deal:'#E8501A',list:'#f472b6'};
 const nodeBg = dark ? '#2a2a48': '#ffffff';
 const nodeBorder = dark ? '#3d3d63': '#E2E4E9';
 const nodeText = dark ? '#fff': '#111827';
 const nodeSub = dark ? 'rgba(255,255,255,.55)': '#5b6473';

 const NW = 150, NH = 44;
 function nodePos(id) { return nodes.find(n=>n[0]===id); }

 let edgeSvg = '';
 edges.forEach(([a,b,col,style]) => {
 const A = nodePos(a), B = nodePos(b);
 if (!A || !B) return;
 const x1 = A[1] + NW, y1 = A[2] + NH/2;
 const x2 = B[1], y2 = B[2] + NH/2;
 const cx = (x1+x2)/2;
 const path = `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
 const dash = style === 'dash' ? 'stroke-dasharray="4 4"': '';
 edgeSvg += `<path d="${path}" stroke="${col}" stroke-width="1.4" fill="none" opacity=".75" ${dash}/>`;
 });

 let nodeSvg = '';
 nodes.forEach(([id,x,y,label,type,status]) => {
 const lines = label.split('\n');
 const ring = status === 'cycle' ? `<rect x="${x-2}" y="${y-2}" width="${NW+4}" height="${NH+4}" rx="8" fill="none" stroke="#E8501A" stroke-width="1.4" opacity=".7"/>`: '';
 nodeSvg += `
 ${ring}
 <rect x="${x}" y="${y}" width="${NW}" height="${NH}" rx="6" fill="${nodeBg}" stroke="${nodeBorder}" stroke-width="1"/>
 <rect x="${x+8}" y="${y+7}" width="42" height="13" rx="3" fill="${pillColor[type] || '#4ea1ff'}" opacity=".18"/>
 <text x="${x+29}" y="${y+16}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="8" fill="${pillColor[type] || '#4ea1ff'}" font-weight="600">${type.toUpperCase()}</text>
 ${lines.map((ln,i) => `<text x="${x+8}" y="${y+30 + i*9}" font-family="Inter,system-ui,sans-serif" font-size="${i===0?9:8}" font-weight="${i===0?600:400}" fill="${i===0?nodeText:nodeSub}">${ln.length>22?ln.slice(0,22)+'…':ln}</text>`).join('')}
 <circle cx="${x+NW-12}" cy="${y+12}" r="2.5" fill="${status==='cycle' ? '#E8501A': '#22c55e'}"/>
 `;
 });

 return `
 <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block;position:absolute;inset:0;">
 ${edgeSvg}
 ${nodeSvg}
 </svg>
 `;
 }

 // ---- Feature canvas mini ----
 function buildFeatCanvas() {
 const el = document.getElementById('featCanvasVis');
 if (!el) return;
 el.innerHTML = `
 <div style="background:#1A1A2E; border-radius: 12px; height: 240px; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,.06);">
 <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);background-size: 18px 18px;"></div>
 ${buildGraph(true)}
 </div>
 `;
 }

 // ---- Problem visual mocks ----
 function buildProblemVis() {
 // 1: 200+ workflows / spaghetti
 const v1 = document.getElementById('probVis1');
 if (v1) {
 let dots = '';
 for (let i=0;i<14;i++) for (let j=0;j<26;j++) {
 const lit = Math.random() < 0.6;
 dots += `<span style="width:6px;height:6px;background:${lit?'#1A1A2E':'#E2E4E9'};border-radius:1px;"></span>`;
 }
 v1.innerHTML = `<div style="position:absolute;inset:12px;display:grid;grid-template-columns:repeat(26, 1fr);gap:3px;mask-image:linear-gradient(135deg, #000 40%, transparent 85%);-webkit-mask-image:linear-gradient(135deg, #000 40%, transparent 85%);">${dots}</div>
 <div style="position:absolute;right:10px;bottom:10px;font:600 11px 'JetBrains Mono',monospace;color:#E8501A;background:#fff;padding:5px 9px;border-radius:5px;box-shadow:0 2px 8px rgba(17,24,39,.12), 0 0 0 1px var(--border);">214 wf</div>`;
 }
 // 2: triple email send (3 envelopes to one contact)
 const v2 = document.getElementById('probVis2');
 if (v2) {
 v2.innerHTML = `
 <svg viewBox="0 0 240 130" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block">
 <g font-family="Inter,sans-serif" font-size="10" fill="#5b6473">
 <text x="22" y="36" text-anchor="middle">WF #1</text>
 <text x="22" y="68" text-anchor="middle">WF #2</text>
 <text x="22" y="100" text-anchor="middle">WF #3</text>
 </g>
 <g fill="none" stroke="#E8501A" stroke-width="1.4">
 <path d="M44 32 C 110 32, 130 65, 200 65"/>
 <path d="M44 64 L 200 64"/>
 <path d="M44 96 C 110 96, 130 65, 200 65"/>
 </g>
 <g>
 <rect x="200" y="48" width="32" height="32" rx="4" fill="#fff" stroke="#E8501A" stroke-width="1.5"/>
 <text x="216" y="69" text-anchor="middle" font-size="14" fill="#E8501A">✉</text>
 <text x="216" y="34" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="600" fill="#E8501A">×3</text>
 </g>
 </svg>`;
 }
 // 3: edit one breaks others
 const v3 = document.getElementById('probVis3');
 if (v3) {
 v3.innerHTML = `
 <svg viewBox="0 0 240 130" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block">
 <g font-family="'JetBrains Mono',monospace" font-size="9">
 <rect x="14" y="50" width="60" height="30" rx="4" fill="#1A1A2E"/>
 <text x="44" y="69" text-anchor="middle" fill="#fff">edited</text>
 </g>
 <g fill="none" stroke-width="1.4">
 <path d="M74 65 C 110 65, 110 30, 150 30" stroke="#dc2626" stroke-dasharray="4 3"/>
 <path d="M74 65 C 110 65, 110 65, 150 65" stroke="#dc2626" stroke-dasharray="4 3"/>
 <path d="M74 65 C 110 65, 110 100, 150 100" stroke="#dc2626" stroke-dasharray="4 3"/>
 </g>
 <g font-family="'JetBrains Mono',monospace" font-size="9">
 <rect x="150" y="18" width="76" height="22" rx="4" fill="#fff" stroke="#dc2626"/>
 <text x="188" y="33" text-anchor="middle" fill="#dc2626">⚠ broken</text>
 <rect x="150" y="54" width="76" height="22" rx="4" fill="#fff" stroke="#dc2626"/>
 <text x="188" y="69" text-anchor="middle" fill="#dc2626">⚠ broken</text>
 <rect x="150" y="90" width="76" height="22" rx="4" fill="#fff" stroke="#dc2626"/>
 <text x="188" y="105" text-anchor="middle" fill="#dc2626">⚠ broken</text>
 </g>
 </svg>`;
 }
 }

 function init() {
 buildHeroCanvas();
 buildFeatCanvas();
 buildProblemVis();
 }
 if (document.readyState === 'loading') {
 document.addEventListener('DOMContentLoaded', init);
 } else {
 init();
 }
})();
