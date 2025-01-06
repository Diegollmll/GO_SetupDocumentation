<template><div><h1 id="repostiories-database-and-application-setup" tabindex="-1"><a class="header-anchor" href="#repostiories-database-and-application-setup"><span>Repostiories, Database and Application Setup</span></a></h1>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Before You Begin</p>
<p>Ensure you have:</p>
<ul>
<li>SQL Server installed</li>
<li>SQL Server Management Studio (SSMS)</li>
<li>Administrator access to SQL Server</li>
<li>Git installed and configured</li>
<li>SSH key set up in GitHub</li>
</ul>
</div>
<h2 id="repository-setup" tabindex="-1"><a class="header-anchor" href="#repository-setup"><span>Repository Setup</span></a></h2>
<h3 id="ssh-key-configuration" tabindex="-1"><a class="header-anchor" href="#ssh-key-configuration"><span>SSH Key Configuration</span></a></h3>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="clone-repositories" tabindex="-1"><a class="header-anchor" href="#clone-repositories"><span>Clone Repositories</span></a></h3>
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
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Clone GO Portal</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:generative-objects-org/go-portal.git go-portal</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Clone GO Generator</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:generative-objects-org/go-generator.git go-generator</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Clone GO Modeler</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:generative-objects-org/go-modeler.git go-modeler</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build-solutions" tabindex="-1"><a class="header-anchor" href="#build-solutions"><span>Build Solutions</span></a></h3>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="database-and-application-setup" tabindex="-1"><a class="header-anchor" href="#database-and-application-setup"><span>Database and Application Setup</span></a></h1>
<h2 id="prerequisites-1" tabindex="-1"><a class="header-anchor" href="#prerequisites-1"><span>Prerequisites</span></a></h2>
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
<p>Modify the CREATE DATABASE statement at the top of the script:</p>
</li>
</ol>
<ul>
<li>Original script might look like:<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">[</span>GOPortal<span class="token punctuation">]</span></span>
<span class="line">CONTAINMENT <span class="token operator">=</span> NONE</span>
<span class="line"><span class="token keyword">ON</span> <span class="token keyword">PRIMARY</span></span>
<span class="line">LOG <span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token comment">-- other settings</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Modify it to only keep the basic creation:<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">[</span>GOPortal<span class="token punctuation">]</span></span>
<span class="line">GO</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Keep all other script content below the CREATE DATABASE statement unchanged</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Only modify the CREATE DATABASE statement at the top. Leave all other parts of the script (table creation, data insertion, etc.) exactly as they are.</p>
</div>
<ol start="4">
<li>Execute the modified script to create and initialize the portal database</li>
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
<p>Execute <code v-pre>GoGenCodeGeneratorForGODatabaseScript.sql</code> in SQL Server Management Studio to create and initialize the generator database:</p>
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
<h3 id="identifying-your-sql-server-instance-name" tabindex="-1"><a class="header-anchor" href="#identifying-your-sql-server-instance-name"><span>Identifying Your SQL Server Instance Name</span></a></h3>
<ol>
<li>Open SQL Server Management Studio</li>
<li>Look at the server name you use to connect:
<ul>
<li>It might look like: <code v-pre>DESKTOP-58OTF2M\SQLEXPRESS</code></li>
<li>Or: <code v-pre>.\SQLEXPRESS</code></li>
<li>Or: <code v-pre>COMPUTERNAME\SQLEXPRESS01</code></li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Finding Your Instance Name</p>
<p>Your exact instance name is crucial for the connection strings to work. You can find it:</p>
<ul>
<li>In SQL Server Management Studio's connection dialog</li>
<li>At the top of SSMS window after connecting</li>
</ul>
</div>
<h3 id="portal-settings-setup" tabindex="-1"><a class="header-anchor" href="#portal-settings-setup"><span>Portal Settings Setup</span></a></h3>
<ol>
<li>
<p>Open the Portal solution in Visual Studio:</p>
<ul>
<li>Navigate to <code v-pre>C:\Projects\GenerativeObjects\go-portal</code></li>
<li>Open <code v-pre>GO.Portal.sln</code></li>
</ul>
</li>
<li>
<p>In Solution Explorer, navigate to the WebApplicationLayer project:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">C:\Projects\GenerativeObjects\go-portal\GeneratedCode\WebApplicationLayer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Locate the template files:</p>
<ul>
<li><code v-pre>appsettings.Development.orig.json</code></li>
<li><code v-pre>appsettings.Production.orig.json</code></li>
</ul>
</li>
<li>
<p>Create your settings files:</p>
<ul>
<li>Make a copy of <code v-pre>appsettings.Development.orig.json</code> and rename it to <code v-pre>appsettings.Development.json</code></li>
<li>Make a copy of <code v-pre>appsettings.Production.orig.json</code> and rename it to <code v-pre>appsettings.Production.json</code></li>
</ul>
</li>
<li>
<p>Add the following content to both files (replace INSTANCE_NAME with your SQL Server instance name):</p>
</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"MainConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=INSTANCE_NAME; initial catalog=GOPortal;integrated security=SSPI"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DefaultHostName"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ShowExceptionDetails"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DatabaseFactoryToUse"</span><span class="token operator">:</span> <span class="token string">"SqlServerDatabaseFactory"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"DatabaseServerConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=INSTANCE_NAME; integrated security=SSPI; TrustServerCertificate=True"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"MetamodelScriptsFolder"</span><span class="token operator">:</span> <span class="token string">"C:\\Projects\\GenerativeObjects\\GO-Metamodels"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// SMTP Configuration</span></span>
<span class="line">  <span class="token property">"SMTP"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPEmail"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPEmailToDisplay"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPUserName"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"SMTPPassword"</span><span class="token operator">:</span> <span class="token string">"TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, if your instance name is <code v-pre>DESKTOP-58OTF2M\SQLEXPRESS</code>, your connection strings would be:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"MainConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=DESKTOP-58OTF2M\\SQLEXPRESS; initial catalog=GOPortal;integrated security=SSPI"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"DatabaseServerConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=DESKTOP-58OTF2M\\SQLEXPRESS; integrated security=SSPI; TrustServerCertificate=True"</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Rebuild the Portal solution:
<ul>
<li>Right-click on the solution in Solution Explorer</li>
<li>Select &quot;Rebuild Solution&quot;</li>
<li>Verify the build succeeds without errors</li>
</ul>
</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">Note on Backslashes</p>
<p>When using a full instance name in JSON:</p>
<ul>
<li>Use double backslashes (<code v-pre>\\</code>) in the connection string</li>
<li>Single backslash in SSMS connection dialog</li>
</ul>
</div>
<h3 id="modeler-settings-setup" tabindex="-1"><a class="header-anchor" href="#modeler-settings-setup"><span>Modeler Settings Setup</span></a></h3>
<ol>
<li>
<p>Open the Modeler solution in Visual Studio:</p>
<ul>
<li>Navigate to <code v-pre>C:\Projects\GenerativeObjects\go-modeler</code></li>
<li>Open <code v-pre>GO.Application.sln</code></li>
</ul>
</li>
<li>
<p>In Solution Explorer, locate the template files in WebApplicationLayer:</p>
<ul>
<li><code v-pre>appsettings.Development.orig.json</code></li>
<li><code v-pre>appsettings.Production.orig.json</code></li>
</ul>
</li>
<li>
<p>Follow the same process as Portal to create and configure your settings files.</p>
</li>
<li>
<p>Rebuild the Modeler solution:</p>
<ul>
<li>Right-click on the solution in Solution Explorer</li>
<li>Select &quot;Rebuild Solution&quot;</li>
<li>Verify the build succeeds without errors</li>
</ul>
</li>
</ol>
<h3 id="generator-settings-setup" tabindex="-1"><a class="header-anchor" href="#generator-settings-setup"><span>Generator Settings Setup</span></a></h3>
<ol>
<li>
<p>Open the Generator solution in Visual Studio:</p>
<ul>
<li>Navigate to <code v-pre>C:\Projects\GenerativeObjects\go-generator</code></li>
<li>Open <code v-pre>GO.Generator.sln</code></li>
</ul>
</li>
<li>
<p>In Solution Explorer, locate the template files in WebApplicationLayer:</p>
<ul>
<li><code v-pre>appsettings.Development.orig.json</code></li>
<li><code v-pre>appsettings.Production.orig.json</code></li>
</ul>
</li>
<li>
<p>Follow the same process as Portal to create and configure your settings files.</p>
</li>
<li>
<p>Rebuild the Generator solution:</p>
<ul>
<li>Right-click on the solution in Solution Explorer</li>
<li>Select &quot;Rebuild Solution&quot;</li>
<li>Verify the build succeeds without errors</li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Configuration Notes</p>
<ul>
<li>Ensure you use your exact SQL Server instance name in connection strings</li>
<li>The SMTP settings can remain as placeholders for initial setup</li>
<li>Ensure the <code v-pre>MetamodelScriptsFolder</code> path matches your actual GO-Metamodels location</li>
</ul>
</div>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
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


