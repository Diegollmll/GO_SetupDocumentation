<template><div><h1 id="error-reference-guide" tabindex="-1"><a class="header-anchor" href="#error-reference-guide"><span>Error Reference Guide</span></a></h1>
<p>This guide covers common errors encountered during GO installation and their solutions.</p>
<h2 id="iis-configuration-errors" tabindex="-1"><a class="header-anchor" href="#iis-configuration-errors"><span>IIS Configuration Errors</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Error: HTTP Error 500.19</p>
<p>Internal Server Error: Cannot read configuration file</p>
</div>
<p><strong>Cause:</strong></p>
<ul>
<li>Incorrect IIS configuration</li>
<li>Missing permissions</li>
<li>Corrupt web.config</li>
</ul>
<p><strong>Solution:</strong></p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line"><span class="token comment"># Check IIS configuration</span></span>
<span class="line">1<span class="token punctuation">.</span> Verify application pool settings</span>
<span class="line">2<span class="token punctuation">.</span> Check folder permissions:</span>
<span class="line">   icacls <span class="token string">"C:\inetpub\wwwroot\GenerativeObjectsApplications"</span> <span class="token operator">/</span>grant <span class="token string">"IIS AppPool\GOApplicationPool:(OI)(CI)F"</span></span>
<span class="line">3<span class="token punctuation">.</span> Reset IIS:</span>
<span class="line">   iisreset</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="database-connection-errors" tabindex="-1"><a class="header-anchor" href="#database-connection-errors"><span>Database Connection Errors</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Error: Cannot open database &quot;GoPortal&quot; requested by the login</p>
<p>The login failed. Login failed for user 'IIS APPPOOL\GOApplicationPool'</p>
</div>
<p><strong>Cause:</strong></p>
<ul>
<li>SQL Server permissions</li>
<li>Incorrect connection string</li>
<li>SQL Server configuration</li>
</ul>
<p><strong>Solution:</strong></p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment">-- Grant necessary permissions</span></span>
<span class="line"><span class="token keyword">USE</span> <span class="token punctuation">[</span>GoPortal<span class="token punctuation">]</span></span>
<span class="line">GO</span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token punctuation">[</span>IIS APPPOOL\GOApplicationPool<span class="token punctuation">]</span> <span class="token keyword">FOR</span> LOGIN <span class="token punctuation">[</span>IIS APPPOOL\GOApplicationPool<span class="token punctuation">]</span></span>
<span class="line">GO</span>
<span class="line"><span class="token keyword">ALTER</span> ROLE db_datareader <span class="token keyword">ADD</span> MEMBER <span class="token punctuation">[</span>IIS APPPOOL\GOApplicationPool<span class="token punctuation">]</span></span>
<span class="line">GO</span>
<span class="line"><span class="token keyword">ALTER</span> ROLE db_datawriter <span class="token keyword">ADD</span> MEMBER <span class="token punctuation">[</span>IIS APPPOOL\GOApplicationPool<span class="token punctuation">]</span></span>
<span class="line">GO</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-pool-errors" tabindex="-1"><a class="header-anchor" href="#application-pool-errors"><span>Application Pool Errors</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Error: Application pool stopped unexpectedly</p>
<p>The worker process failed to initialize correctly</p>
</div>
<p><strong>Cause:</strong></p>
<ul>
<li>Incorrect identity settings</li>
<li>Missing permissions</li>
<li>Invalid .NET version</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>
<p>Check application pool configuration:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Verify identity (.\username format)</span>
<span class="line">- Ensure password is correct</span>
<span class="line">- Confirm .NET version settings</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Verify Windows Authentication:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Check IIS Authentication settings</span>
<span class="line">- Verify Windows credentials</span>
<span class="line">- Reset IIS if needed</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="url-rewrite-module-errors" tabindex="-1"><a class="header-anchor" href="#url-rewrite-module-errors"><span>URL Rewrite Module Errors</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Error: Module not found</p>
<p>Could not find the URL Rewrite Module</p>
</div>
<p><strong>Cause:</strong></p>
<ul>
<li>Module not installed</li>
<li>Incorrect installation</li>
<li>IIS restart required</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>
<p>Verify installation:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Check in IIS Manager for URL Rewrite module</span>
<span class="line">- Reinstall if missing</span>
<span class="line">- Run iisreset after installation</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Check web.config:</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RewriteModule<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="visual-studio-installation-errors" tabindex="-1"><a class="header-anchor" href="#visual-studio-installation-errors"><span>Visual Studio Installation Errors</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">Error: Missing Required Components</p>
<p>Required workload or component is not installed</p>
</div>
<p><strong>Cause:</strong></p>
<ul>
<li>Incomplete Visual Studio installation</li>
<li>Missing workloads</li>
<li>Corrupted installation</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>
<p>Using Visual Studio Installer:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Modify installation</span>
<span class="line">- Add missing workloads</span>
<span class="line">- Repair if needed</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Verify components:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- ASP.NET workload</span>
<span class="line">- .NET desktop development</span>
<span class="line">- Web development tools</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Installation Tips</p>
<p>Most installation errors can be resolved by:</p>
<ol>
<li>Running installers as Administrator</li>
<li>Ensuring proper permissions</li>
<li>Following the installation steps in order</li>
</ol>
</div>
</div></template>


