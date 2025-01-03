<template><div><h2 id="ssh-key-configuration" tabindex="-1"><a class="header-anchor" href="#ssh-key-configuration"><span>SSH Key Configuration</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Prerequisites</p>
<p>Before cloning repositories, you must set up SSH authentication:</p>
</div>
<ol>
<li>Generate SSH key:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Open Git Bash and run:</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">"your_email@example.com"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Press Enter to accept default file location</span></span>
<span class="line"><span class="token comment"># Enter a secure passphrase when prompted</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Add SSH key to ssh-agent:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Start ssh-agent</span></span>
<span class="line"><span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Add your SSH private key</span></span>
<span class="line">ssh-add ~/.ssh/id_ed25519</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>Add SSH key to GitHub:</p>
<ul>
<li>Copy the public key content:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">cat</span> ~/.ssh/id_ed25519.pub</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>Go to GitHub Settings → SSH and GPG keys</li>
<li>Click &quot;New SSH key&quot;</li>
<li>Paste your public key</li>
<li>Click &quot;Add SSH key&quot;</li>
</ul>
</li>
<li>
<p>Test SSH connection:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="repository-setup" tabindex="-1"><a class="header-anchor" href="#repository-setup"><span>Repository Setup</span></a></h2>
<ol>
<li>Create projects directory:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> C:<span class="token punctuation">\</span>Projects</span>
<span class="line"><span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Projects</span>
<span class="line"><span class="token function">mkdir</span> GenerativeObjects</span>
<span class="line"><span class="token builtin class-name">cd</span> GenerativeObjects</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Clone repositories:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Clone Portal</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token operator">&lt;</span>https://github.com/generative-objects-org/go-portal<span class="token operator">></span> go-portal</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Clone Generator</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token operator">&lt;</span>https://github.com/generative-objects-org/go-generator<span class="token operator">></span> go-generator</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Clone Modeler</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token operator">&lt;</span>https://github.com/generative-objects-org/go-modeler<span class="token operator">></span> go-modeler</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="building-solutions" tabindex="-1"><a class="header-anchor" href="#building-solutions"><span>Building Solutions</span></a></h2>
<ol>
<li>Open and build go-portal:</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Open go-portal solution in Visual Studio</span>
<span class="line">- Build solution (make sure build succeeds)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Open and build go-generator:</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Open go-generator solution in Visual Studio</span>
<span class="line">- Build solution (make sure build succeeds)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Open and build go-modeler:</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Open go-modeler solution in Visual Studio</span>
<span class="line">- Build solution (make sure build succeeds)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="database-setup" tabindex="-1"><a class="header-anchor" href="#database-setup"><span>Database Setup</span></a></h1>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Before You Begin</p>
<p>Ensure you have:</p>
<ul>
<li>SQL Server installed</li>
<li>SQL Server Management Studio (SSMS)</li>
<li>Administrator access to SQL Server</li>
</ul>
</div>
<h2 id="create-databases" tabindex="-1"><a class="header-anchor" href="#create-databases"><span>Create Databases</span></a></h2>
<ol>
<li>Open SQL Server Management Studio</li>
<li>Connect using Windows Authentication:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Server type: Database Engine</span>
<span class="line">Server name: .\SQLEXPRESS (or your instance name)</span>
<span class="line">Authentication: Windows Authentication</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="initialize-databases" tabindex="-1"><a class="header-anchor" href="#initialize-databases"><span>Initialize Databases</span></a></h2>
<h3 id="portal-database-setup" tabindex="-1"><a class="header-anchor" href="#portal-database-setup"><span>Portal Database Setup</span></a></h3>
<ol>
<li>
<p>Navigate to the Portal SQL scripts directory:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">C:\Projects\GenerativeObjects\go-portal\SQL\</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Open <code v-pre>CreateGoPortalWithData.sql</code> in SQL Server Management Studio</p>
</li>
<li>
<p>At the top of the script, keep only the basic CREATE DATABASE statement:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> GoPortal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Remove any additional configurations (like containment settings)</p>
</li>
<li>
<p>Execute the modified script to create and initialize the portal database</p>
</li>
</ol>
<h3 id="generator-database-setup" tabindex="-1"><a class="header-anchor" href="#generator-database-setup"><span>Generator Database Setup</span></a></h3>
<ol>
<li>
<p>Ensure you have the latest version from Git:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator</span>
<span class="line"><span class="token function">git</span> pull</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Navigate to the SQL scripts directory:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">C:\Projects\GenerativeObjects\go-generator\SQL\</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Execute <code v-pre>GoGenCodeGeneratorForGODatabaseScript.sql</code> to create and initialize the generator database:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment">-- Run the complete initialization script</span></span>
<span class="line"><span class="token string">"GoGenCodeGeneratorForGODatabaseScript.sql"</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>Final Database Verification</p>
<div class="hint-container warning">
<p class="hint-container-title">Important</p>
<p>After completing all database setup steps, verify you have these two databases in SQL Server Management Studio:</p>
<p>GOPortal</p>
<p>GenerativeObjects-22212eeb-4b0c-4fc2-84e2-87ac2002de5f</p>
<p>If either database is missing, review the previous steps and ensure all scripts were executed successfully.</p>
</div>
<h2 id="deployment-process" tabindex="-1"><a class="header-anchor" href="#deployment-process"><span>Deployment Process</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Important</p>
<p>Before running any deployment scripts, you must reset IIS:</p>
<ol>
<li>Open Command Prompt as Administrator</li>
<li>Run the command: <code v-pre>iisreset</code></li>
</ol>
</div>
<ol>
<li>Deploy Portal:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># First reset IIS as administrator</span></span>
<span class="line">iisreset</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Then run deployment scripts in order:</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-portal<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploy_application.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-portal<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploy_runtime_libraries.cmd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Deploy Generator (run in order):</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Deploy application</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Deploy libraries</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Deploy task performers</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployTaskPerformers.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Deploy Modeler (run in order):</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Deploy application</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Deploy libraries</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Deploy database script</span></span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploydatabasescript.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>After database setup:</p>
<ol>
<li><RouteLink to="/guide/installation/iis.html">Configure IIS</RouteLink></li>
<li><RouteLink to="/guide/deployment/setup.html">Deploy Application</RouteLink></li>
<li><RouteLink to="/guide/deployment/verification.html">Verify Installation</RouteLink></li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Database Maintenance</p>
<p>Remember to:</p>
<ul>
<li>Set up regular backups</li>
<li>Monitor database growth</li>
<li>Keep scripts updated</li>
</ul>
</div>
</div></template>


