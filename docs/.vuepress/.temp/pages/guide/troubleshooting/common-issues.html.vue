<template><div><h1 id="common-installation-issues" tabindex="-1"><a class="header-anchor" href="#common-installation-issues"><span>Common Installation Issues</span></a></h1>
<p>This guide addresses frequently encountered issues during GO installation and provides practical solutions.</p>
<h2 id="visual-studio-setup" tabindex="-1"><a class="header-anchor" href="#visual-studio-setup"><span>Visual Studio Setup</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Visual Studio Installation Incomplete</p>
<p>Symptoms:</p>
<ul>
<li>Missing templates</li>
<li>Build tools unavailable</li>
<li>Incorrect .NET version</li>
</ul>
</div>
<p><strong>Solution:</strong></p>
<ol>
<li>Open Visual Studio Installer</li>
<li>Modify installation:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ ASP.NET and web development</span>
<span class="line">☐ .NET desktop development</span>
<span class="line">☐ Data storage and processing</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Repair installation if needed</li>
</ol>
<h2 id="sql-server-configuration" tabindex="-1"><a class="header-anchor" href="#sql-server-configuration"><span>SQL Server Configuration</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">SQL Server Connection Issues</p>
<p>Symptoms:</p>
<ul>
<li>Cannot connect to database</li>
<li>Windows Authentication fails</li>
<li>TCP/IP connection errors</li>
</ul>
</div>
<p><strong>Quick Fixes:</strong></p>
<ol>
<li>
<p>Enable TCP/IP:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SQL Server Configuration Manager →</span>
<span class="line">SQL Server Network Configuration →</span>
<span class="line">Protocols → Enable TCP/IP</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Configure Windows Authentication:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token comment">-- Check authentication mode</span></span>
<span class="line"><span class="token keyword">SELECT</span> SERVERPROPERTY<span class="token punctuation">(</span><span class="token string">'IsIntegratedSecurityOnly'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- 1 = Windows Authentication only</span></span>
<span class="line"><span class="token comment">-- 0 = Mixed Mode</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="iis-setup-issues" tabindex="-1"><a class="header-anchor" href="#iis-setup-issues"><span>IIS Setup Issues</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">IIS Configuration Problems</p>
<p>Symptoms:</p>
<ul>
<li>Application pools not starting</li>
<li>Website not accessible</li>
<li>URL Rewrite module errors</li>
</ul>
</div>
<p><strong>Solutions:</strong></p>
<ol>
<li>
<p>Verify IIS Features:</p>
<ul>
<li>Check all required IIS features are installed</li>
<li>Ensure URL Rewrite module is properly installed</li>
<li>Confirm .NET Core Hosting Bundle is installed</li>
</ul>
</li>
<li>
<p>Check Application Pool Settings:</p>
<ul>
<li>Verify identity settings are correct</li>
<li>Ensure proper .NET version is selected</li>
<li>Check start mode is set to &quot;AlwaysRunning&quot;</li>
</ul>
</li>
</ol>
<h2 id="file-permission-issues" tabindex="-1"><a class="header-anchor" href="#file-permission-issues"><span>File Permission Issues</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Access Denied Errors</p>
<p>Symptoms:</p>
<ul>
<li>Cannot write to GOAPPS directory</li>
<li>Deployment scripts fail</li>
<li>Runtime access errors</li>
</ul>
</div>
<p><strong>Solutions:</strong></p>
<ol>
<li>
<p>Set correct folder permissions:</p>
<ul>
<li>Grant full control to IIS_IUSRS group</li>
<li>Ensure application pool identity has access</li>
<li>Check permissions on GenerativeObjects folder</li>
</ul>
</li>
<li>
<p>Verify user permissions:</p>
<ul>
<li>Ensure running as administrator when needed</li>
<li>Check Windows user has proper rights</li>
<li>Verify SQL Server permissions</li>
</ul>
</li>
</ol>
<h2 id="getting-help" tabindex="-1"><a class="header-anchor" href="#getting-help"><span>Getting Help</span></a></h2>
<p>If you encounter issues not covered here:</p>
<ol>
<li>Check Windows Event Viewer for specific error messages</li>
<li>Review IIS logs for detailed information</li>
<li>Contact support team through basecamp</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Most installation issues can be resolved by ensuring proper permissions and correctly installing all required components.</p>
</div>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>For a complete list of error messages and their solutions, see:
<RouteLink to="/guide/troubleshooting/error-reference.html">Error Reference Guide</RouteLink> →</p>
</div></template>


