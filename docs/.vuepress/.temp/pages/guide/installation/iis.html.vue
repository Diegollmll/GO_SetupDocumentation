<template><div><h1 id="final-configuration-steps" tabindex="-1"><a class="header-anchor" href="#final-configuration-steps"><span>Final Configuration Steps</span></a></h1>
<h2 id="iis-setup" tabindex="-1"><a class="header-anchor" href="#iis-setup"><span>IIS Setup</span></a></h2>
<ol>
<li>
<p>Open IIS Manager and create application pools:</p>
<ul>
<li>Go Portal</li>
<li>Go Generator</li>
<li>Go Modeler</li>
</ul>
</li>
<li>
<p>Configure each application pool:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Identity → Custom account</span>
<span class="line">Username: .\YourUsername (with backslash)</span>
<span class="line">Password: YourPassword</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="deploy-applications" tabindex="-1"><a class="header-anchor" href="#deploy-applications"><span>Deploy Applications</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Important</p>
<p>Before running any deployment scripts, always run <code v-pre>iisreset</code> first.</p>
</div>
<ol>
<li>Deploy Portal:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Reset IIS</span></span>
<span class="line">iisreset</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Run deployment scripts in order</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-portal<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploy_application.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-portal<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploy_runtime_libraries.cmd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Deploy Generator:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">iisreset</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployTaskPerformers.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Deploy Modeler:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">iisreset</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploydatabasescript.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-applications-in-iis" tabindex="-1"><a class="header-anchor" href="#configure-applications-in-iis"><span>Configure Applications in IIS</span></a></h2>
<ol>
<li>
<p>Create main website:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Site name: GO Applications</span>
<span class="line">Physical path: C:\inetpub\wwwroot\GOAPPS</span>
<span class="line">Port: 80</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Convert directories to applications:</p>
<ul>
<li>Right-click each directory</li>
<li>Convert to Application</li>
<li>Select corresponding application pool</li>
</ul>
</li>
</ol>
<h2 id="final-verification" tabindex="-1"><a class="header-anchor" href="#final-verification"><span>Final Verification</span></a></h2>
<ol>
<li>
<p>Access Portal:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://localhost/go-meta-portal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Login with default credentials:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Username: Admin</span>
<span class="line">Password: Admin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Create a test application:</p>
<ul>
<li>Click 'New Application'</li>
<li>Enter test details</li>
<li>Verify database creation</li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Troubleshooting</p>
<p>If you encounter any issues:</p>
<ol>
<li>Check IIS Application Pool identities</li>
<li>Verify all databases are created</li>
<li>Check deployment logs</li>
<li>Try running <code v-pre>iisreset</code> again</li>
</ol>
</div>
</div></template>


