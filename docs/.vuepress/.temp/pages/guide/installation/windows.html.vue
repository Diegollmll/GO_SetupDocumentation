<template><div><h1 id="windows-configuration" tabindex="-1"><a class="header-anchor" href="#windows-configuration"><span>Windows Configuration</span></a></h1>
<h2 id="iis-features-installation" tabindex="-1"><a class="header-anchor" href="#iis-features-installation"><span>IIS Features Installation</span></a></h2>
<h3 id="step-1-access-windows-features" tabindex="-1"><a class="header-anchor" href="#step-1-access-windows-features"><span>Step 1: Access Windows Features</span></a></h3>
<ol>
<li>Open Control Panel</li>
<li>Navigate to:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Programs > Programs and Features > Turn Windows features on or off</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>Or</li>
<li>Press <code v-pre>Windows + R</code>, type <code v-pre>optionalfeatures.exe</code>, and press Enter</li>
</ol>
<h3 id="step-2-enable-required-features" tabindex="-1"><a class="header-anchor" href="#step-2-enable-required-features"><span>Step 2: Enable Required Features</span></a></h3>
<p>Enable the following features:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Internet Information Services</span>
<span class="line"> ├─☐ Web Management Tools</span>
<span class="line"> │  ├─☐ IIS Management Console</span>
<span class="line"> │  ├─☐ IIS Management Scripts and Tools</span>
<span class="line"> │  └─☐ IIS Management Service</span>
<span class="line"> └─☐ World Wide Web Services</span>
<span class="line">    ├─☐ Application Development Features</span>
<span class="line">    │  ├─☐ .NET Extensibility 4.8</span>
<span class="line">    │  ├─☐ ASP.NET 4.8</span>
<span class="line">    │  ├─☐ ISAPI Extensions</span>
<span class="line">    │  └─☐ ISAPI Filters</span>
<span class="line">    ├─☐ Common HTTP Features (all)</span>
<span class="line">    └─☐ Security</span>
<span class="line">       ├─☐ Basic Authentication</span>
<span class="line">       └─☐ Windows Authentication</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You may need to restart your computer after enabling IIS features and before installing URL Rewrite Module to ensure all components are properly initialized.</p>
</div>
<h3 id="step-3-url-rewrite-module" tabindex="-1"><a class="header-anchor" href="#step-3-url-rewrite-module"><span>Step 3. URL Rewrite Module</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Prerequisites</p>
<p>IIS must be installed and configured BEFORE installing URL Rewrite Module. Complete the Windows Features setup first.</p>
</div>
<ol>
<li>After IIS installation, download <a href="https://www.iis.net/downloads/microsoft/url-rewrite" target="_blank" rel="noopener noreferrer">URL Rewrite for IIS</a> (x64 version)</li>
<li>Install with default settings</li>
<li>Verify in IIS Manager after installation</li>
</ol>
<h3 id="step-4-required-directories-setup" tabindex="-1"><a class="header-anchor" href="#step-4-required-directories-setup"><span>Step 4: Required Directories Setup</span></a></h3>
<ol>
<li>
<p>Create directories:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">C:\inetpub\wwwroot\GOAPPS</span>
<span class="line">C:\Program Files\GenerativeObjects</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Set directory permissions:</p>
<ul>
<li>Right-click each folder</li>
<li>Properties → Security → Edit</li>
<li>Add &quot;All Users&quot;</li>
<li>Grant Full Control</li>
<li>Click Apply and OK</li>
</ul>
</li>
</ol>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>After completing Windows configuration:</p>
<ol>
<li>Proceed to <RouteLink to="/guide/installation/database.html">Repositories and Database Setup</RouteLink></li>
<li>Continue with <RouteLink to="/guide/installation/iis.html">IIS Configuration</RouteLink></li>
</ol>
</div></template>


