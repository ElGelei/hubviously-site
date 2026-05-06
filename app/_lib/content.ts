// HTML body content extracted from the original Hubviously design.
// Rendered via dangerouslySetInnerHTML to preserve the design exactly.

export const homeHtml = `<!-- ============== HERO ============== -->
<section class="hero" id="hero">
 <div class="hero-grid-bg" aria-hidden="true"></div>
 <div class="container hero-inner">
 <div class="hero-copy">
 <span class="eyebrow on-dark"><span class="dot"></span>For RevOps & HubSpot admins</span>
 <h1>
 Your HubSpot workflows<br>
 are a mess. <span class="accent">Now you can see why.</span>
 </h1>
 <p class="hero-sub">
 Hubviously maps every workflow, property and list in your portal into an interactive dependency graph. Spot loops, risks and hidden connections in seconds.
 </p>
 <div class="hero-ctas">
 <a href="#cta" class="btn btn-primary btn-lg">
 Connect your portal free
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
 </a>
 <a href="#how" class="btn btn-ghost-dark btn-lg">See a demo</a>
 </div>
 <div class="hero-meta">
 <span><span class="check">✓</span> Free forever for 1 portal</span>
 <span class="sep"></span>
 <span><span class="check">✓</span> Read-only access</span>
 <span class="sep"></span>
 <span><span class="check">✓</span> 30-second setup</span>
 </div>
 </div>
 <div class="hero-canvas-wrap">
 <div class="hero-canvas" id="heroCanvas"></div>
 </div>
 </div>
</section>

<!-- ============== PROBLEM ============== -->
<section class="alt" id="problem">
 <div class="container">
 <div class="section-head">
 <span class="eyebrow"><span class="dot"></span>The problem</span>
 <h2 class="section-title">If you can't see it,<br>you can't trust it.</h2>
 <p class="section-lede">Past 50 workflows, HubSpot stops being a tool and starts being a black box. Most teams don't realize the damage until a client tells them.</p>
 </div>
 <div class="problem-grid">
 <article class="problem-card">
 <div class="vis" id="probVis1"></div>
 <h3>200+ workflows, zero visibility</h3>
 <p>You know what each workflow does. You have no idea how they interact.</p>
 </article>
 <article class="problem-card">
 <div class="vis" id="probVis2"></div>
 <h3>Bugs you can't find</h3>
 <p>A contact gets 3 emails when it should get one. Good luck tracing that.</p>
 </article>
 <article class="problem-card">
 <div class="vis" id="probVis3"></div>
 <h3>Changes that break everything</h3>
 <p>You edit one workflow and three others stop working. You find out from a client.</p>
 </article>
 </div>
 </div>
</section>

<!-- ============== HOW IT WORKS ============== -->
<section id="how">
 <div class="container">
 <div class="section-head">
 <span class="eyebrow"><span class="dot"></span>How it works</span>
 <h2 class="section-title">Three steps. Zero config.</h2>
 <p class="section-lede">Read-only OAuth. We never touch your workflows we just read their structure and draw the map.</p>
 </div>
 <div class="steps">
 <div class="step">
 <span class="step-num">01 / Connect</span>
 <h3>Connect your HubSpot portal</h3>
 <p>OAuth, 30 seconds. We request read-only access to workflows, properties and lists.</p>
 <div class="step-vis">
 <div style="display:flex;align-items:center;gap:10px;color:var(--text);font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;">
 <span style="width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.18);"></span>
 OAuth → portal_id: 26885561
 </div>
 </div>
 </div>
 <div class="step">
 <span class="step-num">02 / Map</span>
 <h3>We map everything</h3>
 <p>Every workflow, property, list and trigger synced and indexed in under a minute.</p>
 <div class="step-vis" style="overflow:hidden;position:relative;">
 <svg viewBox="0 0 240 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block">
 <g font-family="'JetBrains Mono',ui-monospace,monospace" font-size="9" fill="#5b6473">
 <rect x="14" y="18" width="48" height="14" rx="3" fill="#fff" stroke="#E2E4E9"/><text x="38" y="28" text-anchor="middle">workflow</text>
 <rect x="14" y="40" width="48" height="14" rx="3" fill="#fff" stroke="#E2E4E9"/><text x="38" y="50" text-anchor="middle">property</text>
 <rect x="14" y="62" width="48" height="14" rx="3" fill="#fff" stroke="#E2E4E9"/><text x="38" y="72" text-anchor="middle">list</text>
 <path d="M 64 25 C 90 25, 100 40, 130 40" stroke="#E8501A" fill="none" stroke-width="1.5"/>
 <path d="M 64 47 C 90 47, 100 40, 130 40" stroke="#7c5cff" fill="none" stroke-width="1.5"/>
 <path d="M 64 69 C 90 69, 100 40, 130 40" stroke="#4ea1ff" fill="none" stroke-width="1.5"/>
 <rect x="130" y="32" width="92" height="16" rx="4" fill="#1A1A2E"/>
 <text x="176" y="43" text-anchor="middle" fill="#fff">graph indexed</text>
 </g>
 </svg>
 </div>
 </div>
 <div class="step">
 <span class="step-num">03 / Explore</span>
 <h3>See the full picture</h3>
 <p>Pan, zoom, click anything. Trace dependencies upstream and downstream in one canvas.</p>
 <div class="step-vis" style="position:relative;overflow:hidden;">
 <svg viewBox="0 0 240 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
 <g fill="none" stroke="#E8501A" stroke-width="1.2" opacity=".8">
 <path d="M30 40 C 70 40, 80 20, 120 20"/>
 <path d="M30 40 C 70 40, 80 60, 120 60"/>
 <path d="M120 20 C 160 20, 170 40, 210 40"/>
 <path d="M120 60 C 160 60, 170 40, 210 40"/>
 </g>
 <g>
 <rect x="14" y="32" width="32" height="16" rx="3" fill="#1A1A2E"/>
 <rect x="106" y="12" width="32" height="16" rx="3" fill="#1A1A2E"/>
 <rect x="106" y="52" width="32" height="16" rx="3" fill="#1A1A2E"/>
 <rect x="194" y="32" width="32" height="16" rx="3" fill="#E8501A"/>
 </g>
 </svg>
 </div>
 </div>
 </div>
 </div>
</section>

<!-- ============== FEATURES ============== -->
<section class="alt" id="features">
 <div class="container">
 <div class="section-head">
 <span class="eyebrow"><span class="dot"></span>Features</span>
 <h2 class="section-title">Everything you need to<br>untangle a portal.</h2>
 <p class="section-lede">Built by RevOps engineers who got tired of guessing. Every feature exists because someone shipped a bug they couldn't have seen.</p>
 </div>

 <div class="feat-grid">
 <article class="feat span-6">
 <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:32px;flex-wrap:wrap;">
 <div style="max-width:380px;">
 <span class="pill">canvas</span>
 <h3 style="margin-top:14px;">Dependency graph</h3>
 <p>One interactive canvas for every workflow, property and list. Pan, zoom, filter, focus. No more spreadsheets, no more screenshots.</p>
 </div>
 <div class="feat-vis" id="featCanvasVis" style="flex:1; min-width:300px; min-height:240px;"></div>
 </div>
 </article>

 <article class="feat">
 <span class="pill">⚠ cycles</span>
 <h3>Cycles &amp; chained workflows</h3>
 <p>We trace every enrollment path and flag infinite loops before they ship. Workflows that trigger other workflows are mapped end-to-end, so the cascade stops being a guess.</p>
 <div class="feat-vis" style="height:90px;">
 <svg viewBox="0 0 200 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
 <defs>
 <marker id="ar1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#E8501A"/></marker>
 </defs>
 <g fill="none" stroke="#E8501A" stroke-width="1.5" marker-end="url(#ar1)">
 <path d="M40 40 C 60 20, 100 20, 120 40" />
 <path d="M120 40 C 140 60, 100 80, 80 60" />
 <path d="M80 60 C 50 60, 30 50, 40 40" />
 </g>
 <g font-family="'JetBrains Mono',monospace" font-size="9" fill="#fff">
 <rect x="22" y="33" width="36" height="14" rx="3" fill="#1A1A2E"/><text x="40" y="43" text-anchor="middle">WF A</text>
 <rect x="106" y="33" width="36" height="14" rx="3" fill="#1A1A2E"/><text x="124" y="43" text-anchor="middle">WF B</text>
 <rect x="64" y="55" width="36" height="14" rx="3" fill="#1A1A2E"/><text x="82" y="65" text-anchor="middle">WF C</text>
 </g>
 </svg>
 </div>
 </article>

 <article class="feat">
 <span class="pill purple">suppression</span>
 <h3>Suppression risks</h3>
 <p>That midnight Slack panic when a contact stops getting emails? It's almost always a suppression list silently blocking another workflow. We surface every dead branch before delete day.</p>
 <div class="feat-vis" style="height:90px;">
 <svg viewBox="0 0 200 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
 <g fill="none" stroke-width="1.5">
 <path d="M30 40 L 90 40" stroke="#22c55e"/>
 <path d="M110 40 L 170 40" stroke="#E8501A" stroke-dasharray="4 3"/>
 </g>
 <g font-family="'JetBrains Mono',monospace" font-size="9" fill="#fff">
 <rect x="14" y="33" width="32" height="14" rx="3" fill="#1A1A2E"/><text x="30" y="43" text-anchor="middle">WF A</text>
 <rect x="84" y="20" width="32" height="40" rx="3" fill="#fff" stroke="#E8501A" stroke-width="1.5"/>
 <text x="100" y="44" text-anchor="middle" fill="#E8501A" font-size="14">⊘</text>
 <rect x="154" y="33" width="32" height="14" rx="3" fill="#1A1A2E" opacity=".4"/><text x="170" y="43" text-anchor="middle" opacity=".6">WF B</text>
 </g>
 </svg>
 </div>
 </article>

 <article class="feat">
 <span class="pill">team</span>
 <h3>Team access</h3>
 <p>Invite your team and share canvases with read or edit access. Everyone sees the same map, so the conversation moves from "what does this workflow do?" to "should we change it?"</p>
 <div class="feat-vis" style="display:flex;align-items:center;gap:0;height:90px;">
 <span class="avatar" style="margin-right:-8px;background:linear-gradient(135deg,#7c5cff,#4ea1ff);">JM</span>
 <span class="avatar" style="margin-right:-8px;background:linear-gradient(135deg,#22c55e,#84cc16);">RA</span>
 <span class="avatar" style="margin-right:-8px;">EB</span>
 <span class="avatar" style="margin-right:-8px;background:linear-gradient(135deg,#f472b6,#ec4899);">SL</span>
 <span style="width:36px;height:36px;border-radius:50%;background:#fff;border:1px dashed var(--border-strong);color:var(--text-muted);display:grid;place-items:center;font-size:13px;font-weight:600;">+5</span>
 </div>
 </article>

 <article class="feat">
 <span class="pill blue">filters</span>
 <h3>30+ filters</h3>
 <p>Every filter HubSpot gives you natively, plus the ones it doesn't: <em>workflows touching this property</em>, <em>list trigger upstream</em>, <em>enrollment cycles only</em>. Slice the canvas by status, object, action, owner, last edit.</p>
 <div class="feat-vis" style="display:flex;flex-wrap:wrap;gap:6px;">
 <span class="pill">All</span>
 <span class="pill purple">Active</span>
 <span class="pill blue">Contact</span>
 <span class="pill green">Deal</span>
 <span class="pill pink">Email send</span>
 <span class="pill purple">List add</span>
 <span class="pill">+24</span>
 </div>
 </article>

 <article class="feat">
 <span class="pill">open in HubSpot</span>
 <h3>One click to the editor</h3>
 <p>Every node deep-links to its native HubSpot editor. Diagnose on the canvas, fix in HubSpot, refresh. Stop hunting through portal tabs to find the workflow you were just looking at.</p>
 <div class="feat-vis" style="height:90px;display:flex;align-items:center;gap:10px;">
 <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:8px;background:#fff;font-family:'JetBrains Mono',monospace;font-size:12px;flex:1;min-width:0;">
 <span style="width:8px;height:8px;border-radius:50%;background:#E8501A;flex-shrink:0;"></span>
 <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">pre-onboarding bm</span>
 </div>
 <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-faint);flex-shrink:0;">→</span>
 <div style="display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid rgba(232,80,26,.4);border-radius:8px;background:rgba(232,80,26,.08);font-family:'JetBrains Mono',monospace;font-size:11px;color:#E8501A;flex-shrink:0;">
 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
 Open
 </div>
 </div>
 </article>

 <article class="feat">
 <span class="pill">multi-portal</span>
 <h3>Built for 1000+ workflows</h3>
 <p>Switch between client portals without losing your place. Hubviously holds up at 1,000+ workflows per portal, the scale where every other tool quietly gives up.</p>
 <div class="feat-vis" style="height:90px;display:flex;flex-direction:column;gap:6px;justify-content:flex-end;">
 <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:8px;background:#fff;font-family:'JetBrains Mono',monospace;font-size:12px;">
 <span style="width:8px;height:8px;border-radius:50%;background:#E8501A;"></span>hs-simple.com<span style="margin-left:auto;color:var(--text-faint);">53 wf</span>
 </div>
 <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:8px;background:#fff;font-family:'JetBrains Mono',monospace;font-size:12px;">
 <span style="width:8px;height:8px;border-radius:50%;background:#7c5cff;"></span>acme-corp.com<span style="margin-left:auto;color:var(--text-faint);">1,247 wf</span>
 </div>
 <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:8px;background:#fff;font-family:'JetBrains Mono',monospace;font-size:12px;">
 <span style="width:8px;height:8px;border-radius:50%;background:#4ea1ff;"></span>nimbus-labs.io<span style="margin-left:auto;color:var(--text-faint);">217 wf</span>
 </div>
 </div>
 </article>

 <article class="feat span-6" style="background:#1A1A2E;color:#fff;border-color:rgba(255,255,255,.08);">
 <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:32px;flex-wrap:wrap;">
 <div style="max-width:420px;">
 <span class="pill green">properties</span>
 <h3 style="margin-top:14px;color:#fff;">Property impact</h3>
 <p style="color:rgba(255,255,255,.65);">Click any HubSpot property and see every workflow that reads it and every workflow that writes it. Audit a property cascade before you rename, retype, or retire it. The "aha" moment when a five-year-old custom property turns out to feed eleven downstream workflows.</p>
 </div>
 <div class="feat-vis" style="flex:1;min-width:340px;height:240px;background:radial-gradient(circle at 50% 50%, #1c1c34 0%, #14142a 100%);border:1px solid rgba(255,255,255,.06);border-radius:10px;position:relative;overflow:hidden;">
 <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);background-size:18px 18px;"></div>
 <svg viewBox="0 0 600 240" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="position:relative;display:block;">
 <defs>
 <marker id="arPropW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#22c55e"/></marker>
 <marker id="arPropR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#4ea1ff"/></marker>
 </defs>
 <!-- WRITE side: 4 workflows on the left -->
 <g fill="none" stroke="#22c55e" stroke-width="1.4" marker-end="url(#arPropW)">
 <path d="M165 36 C 220 36, 240 110, 280 118"/>
 <path d="M165 88 C 220 88, 240 115, 280 120"/>
 <path d="M165 140 C 220 140, 240 125, 280 122"/>
 <path d="M165 192 C 220 192, 240 130, 280 124"/>
 </g>
 <!-- READ side: 5 workflows on the right -->
 <g fill="none" stroke="#4ea1ff" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arPropR)">
 <path d="M320 118 C 360 110, 380 24, 432 24"/>
 <path d="M320 120 C 360 88, 380 76, 432 76"/>
 <path d="M320 121 C 360 121, 380 128, 432 128"/>
 <path d="M320 122 C 360 154, 380 180, 432 180"/>
 <path d="M320 124 C 360 200, 380 232, 432 232"/>
 </g>
 <!-- left cluster nodes (writers) -->
 <g font-family="'JetBrains Mono',monospace" font-size="9" fill="#fff">
 <rect x="50" y="24" width="115" height="24" rx="4" fill="#1A1A2E" stroke="rgba(34,197,94,.35)"/><text x="60" y="40">form: signup</text>
 <rect x="50" y="76" width="115" height="24" rx="4" fill="#1A1A2E" stroke="rgba(34,197,94,.35)"/><text x="60" y="92">wf: lead_score</text>
 <rect x="50" y="128" width="115" height="24" rx="4" fill="#1A1A2E" stroke="rgba(34,197,94,.35)"/><text x="60" y="144">wf: pre-onboard</text>
 <rect x="50" y="180" width="115" height="24" rx="4" fill="#1A1A2E" stroke="rgba(34,197,94,.35)"/><text x="60" y="196">api: hubspot.io</text>
 </g>
 <!-- center: the property -->
 <g>
 <rect x="270" y="100" width="60" height="40" rx="6" fill="#22c55e" stroke="#22c55e" stroke-width="2"/>
 <text x="300" y="116" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a2d18" text-anchor="middle" font-weight="700">contact</text>
 <text x="300" y="130" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a2d18" text-anchor="middle" font-weight="700">.lifecycle</text>
 </g>
 <!-- right cluster nodes (readers) -->
 <g font-family="'JetBrains Mono',monospace" font-size="9" fill="#fff">
 <rect x="432" y="12" width="118" height="24" rx="4" fill="#1A1A2E" stroke="rgba(78,161,255,.35)"/><text x="442" y="28">wf: nurturing-bm</text>
 <rect x="432" y="64" width="118" height="24" rx="4" fill="#1A1A2E" stroke="rgba(78,161,255,.35)"/><text x="442" y="80">wf: re-engage 30d</text>
 <rect x="432" y="116" width="118" height="24" rx="4" fill="#1A1A2E" stroke="rgba(78,161,255,.35)"/><text x="442" y="132">list: active-mqls</text>
 <rect x="432" y="168" width="118" height="24" rx="4" fill="#1A1A2E" stroke="rgba(78,161,255,.35)"/><text x="442" y="184">wf: handoff-sales</text>
 <rect x="432" y="220" width="118" height="24" rx="4" fill="#1A1A2E" stroke="rgba(78,161,255,.35)"/><text x="442" y="236">report: pipeline</text>
 </g>
 </svg>
 <!-- legend -->
 <div style="position:absolute;left:14px;top:14px;display:flex;gap:14px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.65);">
 <span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:10px;height:2px;background:#22c55e;"></span>4 writes</span>
 <span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:10px;height:2px;background:#4ea1ff;border-top:2px dashed #4ea1ff;"></span>5 reads</span>
 </div>
 <div style="position:absolute;right:12px;bottom:10px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.45);">contact.lifecyclestage</div>
 </div>
 </div>
 </article>
 </div>
 </div>
</section>

<!-- ============== PRICING ============== -->
<section id="pricing">
 <div class="container">
 <div class="section-head">
 <span class="eyebrow"><span class="dot"></span>Pricing</span>
 <h2 class="section-title">Pricing built for admins,<br>not procurement teams.</h2>
 <p class="section-lede">Start free. Upgrade when you're ready. Lock in the launch price forever.</p>
 </div>
 <div class="pricing">
 <article class="plan">
 <span class="plan-name">Free</span>
 <span class="plan-price">$0<span class="per">/month</span></span>
 <p class="plan-tagline">For solo admins who want to see clearly.</p>
 <ul class="plan-feat-list">
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>1 portal</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>1 user</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Unlimited workflows</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Full canvas &amp; filters</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Cycle detection</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Basic side panel</li>
 </ul>
 <a href="#cta" class="btn btn-ghost">Get started free</a>
 </article>

 <article class="plan featured">
 <span class="plan-tag">Most popular</span>
 <span class="plan-launch-badge"><span class="pulse"></span>Launch price locks in forever</span>
 <span class="plan-name">Pro</span>
 <span class="plan-price"><span class="plan-price-was">$29</span>$19<span class="per">/month</span></span>
 <p class="plan-price-note">Early member price increases at public launch</p>
 <p class="plan-tagline" style="margin-top:18px;">For serious HubSpot admins.</p>
 <ul class="plan-feat-list">
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>1 portal</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>3 users</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Everything in Free</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Full asset navigation (emails, lists, forms, properties)</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Complete side panel</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>What happens if<span class="coming-soon">Soon</span></li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Journey<span class="coming-soon">Soon</span></li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Export<span class="coming-soon">Soon</span></li>
 </ul>
 <a href="#cta" class="btn btn-primary">Start for $19 →</a>
 </article>

 <article class="plan">
 <span class="plan-name">Agency</span>
 <span class="plan-price">$89<span class="per">/month</span></span>
 <p class="plan-tagline">For agencies managing multiple client portals.</p>
 <ul class="plan-feat-list">
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>5 portals</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>10 users</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Everything in Pro</li>
 <li><svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>AI Audit<span class="coming-soon">Soon</span></li>
 <li class="plan-divider"></li>
 <li class="plan-addon">+1 portal for $9/month</li>
 <li class="plan-addon">+1 user for $5/month</li>
 </ul>
 <a href="/contact" class="btn btn-ghost">Contact us</a>
 </article>
 </div>
 </div>
</section>

<!-- ============== SOCIAL PROOF ============== -->
<section class="alt tight" id="proof">
 <div class="container">
 <div class="proof">
 <div>
 <span class="eyebrow"><span class="dot"></span>Trusted by HubSpot admins at</span>
 <div class="logos" style="margin-top:24px;">
 <div class="logo-cell">Northwind</div>
 <div class="logo-cell">Vellum&nbsp;&amp;&nbsp;Co</div>
 <div class="logo-cell">Aperture</div>
 <div class="logo-cell">Karbon Labs</div>
 <div class="logo-cell">Hyperion</div>
 <div class="logo-cell">Quill RevOps</div>
 </div>
 </div>
 <div>
 <p class="quote">I found a loop that had been running for 8 months in 30 seconds.</p>
 <div class="quote-author">
 <span class="avatar">EB</span>
 <span><strong style="color:var(--text)">Emma Bouchard</strong> &middot; HubSpot Admin, Vellum &amp; Co</span>
 </div>
 </div>
 </div>
 </div>
</section>

<!-- ============== FINAL CTA ============== -->
<section class="final-cta tight" id="cta">
 <div class="container final-cta-inner">
 <span class="eyebrow on-dark"><span class="dot"></span>Ready when you are</span>
 <h2>Ready to see your<br>portal clearly?</h2>
 <p style="color:rgba(255,255,255,.65); font-size:18px; max-width:520px; text-wrap:pretty; margin:0;">
 Connect HubSpot in 30 seconds. We'll map every workflow, list and property and show you the cycles you didn't know existed.
 </p>
 <a href="#" class="btn btn-primary btn-lg">
 Connect free
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
 </a>
 <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.4);">No credit card · Free forever for 1 portal</span>
 </div>
</section>
`;

export const contactHtml = `<main class="contact-wrap">
 <div class="contact-stack">
 <div class="contact-info" style="text-align:center;max-width:680px;margin:0 auto;">
 <span class="eyebrow"><span class="dot"></span>Talk to us</span>
 <h1 style="margin-top:12px;">Got a portal in distress?</h1>
 <p>Whether you want a demo, you're stuck on integration, or you're an agency with 30 client portals to map we want to hear from you. We answer within one business day.</p>
 </div>

 <section class="contact-block">
 <div class="contact-block-head">
 <span class="eyebrow"><span class="dot"></span>Book a demo</span>
 <h2 class="section-title" style="font-size:30px;">Pick a slot. We'll walk through your portal.</h2>
 <p class="section-lede" style="margin-top:8px;">15 minutes, screen-shared, no slides. Bring a portal you'd like us to map.</p>
 </div>
 <div class="meetings-iframe-container" data-src="https://meetings-eu1.hubspot.com/gbolnot/hubviously?embed=true"></div>
 </section>

 <div class="contact-divider"><span>or</span></div>

 <section class="contact-block">
 <div class="contact-block-head">
 <span class="eyebrow"><span class="dot"></span>Async</span>
 <h2 class="section-title" style="font-size:30px;">Send us a message</h2>
 <p class="section-lede" style="margin-top:8px;">Prefer email? Drop us a line at <a href="mailto:hello@hubviously.com" style="color:var(--primary);font-weight:600;">hello@hubviously.com</a> or use the form below.</p>
 </div>
 <div class="hs-form-wrap">
 <div class="hs-form-frame" data-region="eu1" data-form-id="17097d5f-8a4c-4102-9623-e661a7e99033" data-portal-id="26886561"></div>
 </div>
 </section>
 </div>
</main>
`;

export const privacyHtml = `<main class="legal">
 <div class="legal-inner">
 <span class="eyebrow"><span class="dot"></span>Legal</span>
 <h1 style="margin-top:8px;">Privacy Policy</h1>
 <p class="updated">Last updated: 5 May 2026</p>

 <p>Hubviously ("we", "us") provides a read-only visualization of your HubSpot portal. This page explains what we collect, how we use it, and the rights you have over your data.</p>

 <h2>Data we collect</h2>
 <ul>
 <li><strong>Account data.</strong> Your email, name and authentication tokens when you sign up.</li>
 <li><strong>Portal metadata.</strong> Workflow definitions, properties, lists and forms read via HubSpot's official OAuth scopes. We do <em>not</em> read contact records, deals, or any end-customer data.</li>
 <li><strong>Usage data.</strong> Anonymous analytics about which canvas filters are used, to improve the product.</li>
 </ul>

 <h2>How we use it</h2>
 <ul>
 <li>To render the dependency graph for your portal.</li>
 <li>To detect cycles, suppression risks, and structural issues.</li>
 <li>To send you transactional emails (sync alerts, billing).</li>
 </ul>
 <p>We never sell or share your data with third parties. We never train models on your portal metadata.</p>

 <h2>Storage</h2>
 <p>Data is stored encrypted at rest in EU-based infrastructure (Frankfurt region). We retain portal metadata only as long as the connection is active. When you disconnect, we delete it within 30 days.</p>

 <h2>Your rights</h2>
 <p>You can export, correct, or permanently delete your data at any time from <code>Settings → Account</code>, or by writing to <a href="mailto:privacy@hubviously.com">privacy@hubviously.com</a>. Under GDPR you have the right to access, rectify, erase, restrict, port, and object to processing.</p>

 <h2>Contact</h2>
 <p>For any privacy question, write to <a href="mailto:privacy@hubviously.com">privacy@hubviously.com</a> or use the <a href="/contact">contact form</a>.</p>
 </div>
</main>
`;

export const termsHtml = `<main class="legal">
 <div class="legal-inner">
 <span class="eyebrow"><span class="dot"></span>Legal</span>
 <h1 style="margin-top:8px;">Terms of Service</h1>
 <p class="updated">Last updated: 5 May 2026</p>

 <p>By using Hubviously you agree to these terms. They are written to be readable; if anything is unclear, write to us.</p>

 <h2>Service</h2>
 <p>Hubviously provides a visualization layer on top of HubSpot portals. We render workflow, list and property metadata into an interactive graph. The service is provided "as is" without warranty of fitness for any particular purpose.</p>

 <h2>Account</h2>
 <p>You are responsible for keeping your credentials secure. You must be authorized to connect any HubSpot portal you map. We recommend using a dedicated HubSpot user with read-only scopes.</p>

 <h2>Acceptable use</h2>
 <ul>
 <li>Don't attempt to reverse-engineer the service.</li>
 <li>Don't use the service to scrape or extract third-party data.</li>
 <li>Don't connect a portal you do not own or administer.</li>
 </ul>

 <h2>Billing</h2>
 <p>Paid plans are billed monthly in advance. You can cancel any time from <code>Settings → Billing</code>; access continues until the end of the billing period. Refunds are issued on request within 14 days of the first paid charge.</p>

 <h2>Termination</h2>
 <p>We may suspend or terminate accounts that violate these terms or that put portal data at risk. On termination we delete portal metadata within 30 days.</p>

 <h2>Liability</h2>
 <p>To the extent permitted by law, our liability is limited to the amount you paid in the previous 12 months. Hubviously is not affiliated with HubSpot, Inc.</p>

 <h2>Contact</h2>
 <p>Questions about these terms: <a href="mailto:legal@hubviously.com">legal@hubviously.com</a>.</p>
 </div>
</main>
`;
