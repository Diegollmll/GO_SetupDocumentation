<template><div><h1 id="software-installation" tabindex="-1"><a class="header-anchor" href="#software-installation"><span>Software Installation</span></a></h1>
<p>This guide will help you install all required software components for GO development.</p>
<h2 id="visual-studio-2022" tabindex="-1"><a class="header-anchor" href="#visual-studio-2022"><span>Visual Studio 2022</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">IMPORTANT</p>
<p>Visual Studio 2022 Community Edition or higher is required for GO development.</p>
</div>
<h3 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h3>
<ol>
<li>
<p>Download Visual Studio 2022</p>
<ul>
<li>Visit <a href="https://visualstudio.microsoft.com/vs/community/" target="_blank" rel="noopener noreferrer">Visual Studio Downloads</a></li>
<li>Click &quot;Download Visual Studio Community 2022&quot;</li>
</ul>
</li>
<li>
<p>Run the installer and select these workloads:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ ASP.NET and web development</span>
<span class="line">☐ .NET desktop development</span>
<span class="line">☐ Data storage and processing</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Under Individual Components, ensure you have:</p>
<ul>
<li>Git for Windows</li>
<li>GitHub Extensions for Visual Studio</li>
<li>Web development tools</li>
</ul>
</li>
<li>
<p>Click Install and wait for completion</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Installation can take 30+ minutes depending on your internet speed and selected components.</p>
</div>
<h2 id="net-core-installation" tabindex="-1"><a class="header-anchor" href="#net-core-installation"><span>.NET Core Installation</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Prerequisites</p>
<p>.NET Core installation is required before configuring IIS</p>
</div>
<ol>
<li>
<p>Install .NET Core SDK:</p>
<ul>
<li>Download <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">.NET Core SDK</a></li>
<li>Run installer with default settings</li>
<li>Open command prompt and verify installation:</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">dotnet <span class="token parameter variable">--version</span></span>
<span class="line">dotnet --list-sdks</span>
<span class="line">dotnet --list-runtimes</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Install .NET Core Hosting Bundle:</p>
<ul>
<li>Download <a href="https://dotnet.microsoft.com/download/dotnet/6.0" target="_blank" rel="noopener noreferrer">.NET Core Hosting Bundle</a></li>
<li>Run installer with default settings</li>
<li>Open command prompt as administrator</li>
<li>Run IISReset:</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">iisreset</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="sql-server" tabindex="-1"><a class="header-anchor" href="#sql-server"><span>SQL Server</span></a></h2>
<h3 id="sql-server-express-installation" tabindex="-1"><a class="header-anchor" href="#sql-server-express-installation"><span>SQL Server Express Installation</span></a></h3>
<ol>
<li>
<p>Download SQL Server Express:</p>
<ul>
<li>Visit <a href="https://www.microsoft.com/en-us/Download/details.aspx?id=101064" target="_blank" rel="noopener noreferrer">SQL Server Downloads</a></li>
<li>Select the appropriate version for your system</li>
</ul>
</li>
<li>
<p>Run the installer and select:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Basic Installation Type</span>
<span class="line">☐ Default Instance (SQLEXPRESS)</span>
<span class="line">☐ Windows Authentication Mode</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Note your instance name (typically <code v-pre>SQLEXPRESS</code>)</p>
</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">Important Settings</p>
<p>Enable these features during installation:</p>
<ul>
<li>TCP/IP Protocol</li>
<li>Named Pipes Protocol</li>
<li>Windows Authentication</li>
</ul>
</div>
<h3 id="sql-server-management-studio-ssms" tabindex="-1"><a class="header-anchor" href="#sql-server-management-studio-ssms"><span>SQL Server Management Studio (SSMS)</span></a></h3>
<ol>
<li>
<p>Download SSMS:</p>
<ul>
<li>Visit <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms" target="_blank" rel="noopener noreferrer">SSMS Download Page</a></li>
<li>Click the download link for the latest version</li>
</ul>
</li>
<li>
<p>Install with default settings:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Install all features</span>
<span class="line">☐ Default installation path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="url-rewrite-module-installation" tabindex="-1"><a class="header-anchor" href="#url-rewrite-module-installation"><span>URL Rewrite Module Installation</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Prerequisites</p>
<p>IIS must be installed before installing URL Rewrite Module</p>
</div>
<ol>
<li>
<p>Download URL Rewrite:</p>
<ul>
<li>Visit <a href="https://www.iis.net/downloads/microsoft/url-rewrite" target="_blank" rel="noopener noreferrer">URL Rewrite Module</a></li>
<li>Download x64 version</li>
<li>Run installer</li>
</ul>
</li>
<li>
<p>Installation Steps:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Accept license terms</span>
<span class="line">☐ Install with default settings</span>
<span class="line">☐ Wait for completion</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Verify Installation:</p>
<ul>
<li>Open IIS Manager</li>
<li>Select any site</li>
<li>Look for &quot;URL Rewrite&quot; in the features view</li>
<li>If not visible, try:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">iisreset</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<h2 id="git-tools" tabindex="-1"><a class="header-anchor" href="#git-tools"><span>Git Tools</span></a></h2>
<h3 id="git-for-windows" tabindex="-1"><a class="header-anchor" href="#git-for-windows"><span>Git for Windows</span></a></h3>
<ol>
<li>
<p>Download Git:</p>
<ul>
<li>Visit <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">Git for Windows</a></li>
<li>The download should start automatically</li>
</ul>
</li>
<li>
<p>Installation options:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Git from the command line and GUI</span>
<span class="line">☐ Use Git from Git Bash only</span>
<span class="line">☐ Use Git and optional Unix tools</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Additional settings:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Default editor: Visual Studio Code</span>
<span class="line">☐ Default branch name: main</span>
<span class="line">☐ Git credential manager</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="git-extensions-optional-but-recommended" tabindex="-1"><a class="header-anchor" href="#git-extensions-optional-but-recommended"><span>Git Extensions (Optional but Recommended)</span></a></h3>
<ol>
<li>
<p>Download Git Extensions:</p>
<ul>
<li>Visit <a href="https://gitextensions.github.io/" target="_blank" rel="noopener noreferrer">Git Extensions</a></li>
<li>Click &quot;Download&quot;</li>
</ul>
</li>
<li>
<p>Install with default settings</p>
</li>
</ol>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>After installing all required software:</p>
<ol>
<li><RouteLink to="/guide/installation/windows.html">Configure Windows Features</RouteLink></li>
<li><RouteLink to="/guide/installation/database.html">Set up your Database</RouteLink></li>
<li><RouteLink to="/guide/installation/iis.html">Configure IIS</RouteLink></li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Need Help?</p>
<p>If you encounter any issues during installation, check the <RouteLink to="/guide/troubleshooting/common-issues.html">Troubleshooting Guide</RouteLink> or contact support.</p>
</div>
</div></template>


