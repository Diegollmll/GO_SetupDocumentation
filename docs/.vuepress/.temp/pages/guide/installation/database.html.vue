<template><div><h1 id="database-and-application-setup" tabindex="-1"><a class="header-anchor" href="#database-and-application-setup"><span>Database and Application Setup</span></a></h1>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="final-database-verification" tabindex="-1"><a class="header-anchor" href="#final-database-verification"><span>Final Database Verification</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Important</p>
<p>After completing all database setup steps, verify you have these two databases in SQL Server Management Studio:</p>
<ul>
<li><code v-pre>GOPortal</code></li>
<li><code v-pre>GenerativeObjects-22212eeb-4b0c-4fc2-84e2-87ac2002de5f</code></li>
</ul>
<p>If either database is missing, review the previous steps and ensure all scripts were executed successfully.</p>
</div>
<h2 id="application-settings-configuration" tabindex="-1"><a class="header-anchor" href="#application-settings-configuration"><span>Application Settings Configuration</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Critical Step</p>
<p>This step is mandatory for GO to function properly. Each component requires specific configuration files.</p>
</div>
<h3 id="portal-settings-setup" tabindex="-1"><a class="header-anchor" href="#portal-settings-setup"><span>Portal Settings Setup</span></a></h3>
<ol>
<li>
<p>Navigate to the Portal project:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-portal<span class="token punctuation">\</span>GeneratedCode<span class="token punctuation">\</span>WebApplicationLayer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Create two files:</p>
<ul>
<li><code v-pre>appsettings.Development.json</code></li>
<li><code v-pre>appsettings.Production.json</code></li>
</ul>
</li>
<li>
<p>Add the following content to both files:</p>
</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"MainConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=.\\SQLEXPRESS01; initial catalog=GOPortal;integrated security=SSPI"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DefaultHostName"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ShowExceptionDetails"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DatabaseFactoryToUse"</span><span class="token operator">:</span> <span class="token string">"SqlServerDatabaseFactory"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DatabaseServerConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=.\\SQLEXPRESS01; integrated security=SSPI; TrustServerCertificate=True"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"MetamodelScriptsFolder"</span><span class="token operator">:</span> <span class="token string">"C:\\Projects\\GenerativeObjects\\GO-Metamodels"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// SMTP Configuration</span></span>
<span class="line">  <span class="token property">"SMTP"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPEmail"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPEmailToDisplay"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPUserName"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPPassword"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generator-settings-setup" tabindex="-1"><a class="header-anchor" href="#generator-settings-setup"><span>Generator Settings Setup</span></a></h3>
<ol>
<li>
<p>Navigate to the Generator project:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>GeneratedCode<span class="token punctuation">\</span>WebApplicationLayer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Create the same settings files with identical content:</p>
<ul>
<li><code v-pre>appsettings.Development.json</code></li>
<li><code v-pre>appsettings.Production.json</code></li>
</ul>
</li>
</ol>
<h3 id="modeler-settings-setup" tabindex="-1"><a class="header-anchor" href="#modeler-settings-setup"><span>Modeler Settings Setup</span></a></h3>
<ol>
<li>
<p>Navigate to the Modeler project:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>GeneratedCode<span class="token punctuation">\</span>WebApplicationLayer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Create the same settings files with identical content:</p>
<ul>
<li><code v-pre>appsettings.Development.json</code></li>
<li><code v-pre>appsettings.Production.json</code></li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Configuration Notes</p>
<ul>
<li>Replace <code v-pre>SQLEXPRESS01</code> with your SQL Server instance name if different</li>
<li>The SMTP settings can remain as placeholders for initial setup</li>
<li>Ensure the <code v-pre>MetamodelScriptsFolder</code> path matches your actual GO-Metamodels location</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Verify Setup</p>
<p>After configuration:</p>
<ol>
<li>Check SQL Server instance name matches your installation</li>
<li>Verify all paths exist</li>
<li>Confirm your connection strings are correct</li>
<li>Ensure you can connect to the databases</li>
</ol>
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
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># First reset IIS</span></span>
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


