<template><div><h1 id="prerequisites-and-software-installation" tabindex="-1"><a class="header-anchor" href="#prerequisites-and-software-installation"><span>Prerequisites and Software Installation</span></a></h1>
<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">System Requirements</p>
<p>These requirements are mandatory. Installation will fail if these are not met.</p>
</div>
<h3 id="hardware-requirements" tabindex="-1"><a class="header-anchor" href="#hardware-requirements"><span>Hardware Requirements</span></a></h3>
<ul>
<li><strong>Processor</strong>:
<ul>
<li>Minimum: Intel Core i5 or equivalent</li>
<li>Recommended: Intel Core i7 or better</li>
</ul>
</li>
<li><strong>Memory</strong>:
<ul>
<li>Minimum: 16GB RAM</li>
<li>Recommended: 32GB RAM</li>
</ul>
</li>
<li><strong>Storage</strong>:
<ul>
<li>Minimum 50GB free disk space</li>
<li>SSD recommended for better performance</li>
</ul>
</li>
</ul>
<h3 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system"><span>Operating System</span></a></h3>
<ul>
<li>Windows operating system:
<ul>
<li>Windows 10 Pro (64-bit) or higher</li>
<li>Windows Server 2016 or higher</li>
</ul>
</li>
<li>For Linux/Mac users:
<ul>
<li>Must set up a Windows Virtual Machine</li>
<li>Ensure VM has direct access to required ports</li>
<li>Allocate at least 16GB RAM to VM</li>
</ul>
</li>
</ul>
<h2 id="software-installation" tabindex="-1"><a class="header-anchor" href="#software-installation"><span>Software Installation</span></a></h2>
<h3 id="_1-visual-studio-2022" tabindex="-1"><a class="header-anchor" href="#_1-visual-studio-2022"><span>1. Visual Studio 2022</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">IMPORTANT</p>
<p>Visual Studio 2022 Community Edition or higher is required.</p>
</div>
<ol>
<li>Download <a href="https://visualstudio.microsoft.com/vs/community/" target="_blank" rel="noopener noreferrer">Visual Studio Community Edition</a></li>
<li>During installation, select these workloads:
<ul>
<li>ASP.NET and web development</li>
<li>.NET desktop development</li>
<li>Data storage and processing</li>
</ul>
</li>
<li>Under Individual Components, ensure you have:
<ul>
<li>Git for Windows</li>
<li>GitHub Extensions for Visual Studio</li>
<li>Web development tools</li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Installation can take 30+ minutes depending on your internet speed.</p>
</div>
<h3 id="_2-sql-server-setup" tabindex="-1"><a class="header-anchor" href="#_2-sql-server-setup"><span>2. SQL Server Setup</span></a></h3>
<ol>
<li>
<p>SQL Server Express:</p>
<ul>
<li>Download <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">SQL Server Express</a></li>
<li>Choose Basic Installation Type</li>
<li>Use Default Instance (SQLEXPRESS)</li>
<li>Enable TCP/IP and Named Pipes Protocols</li>
<li>Configure for Windows Authentication Mode</li>
</ul>
</li>
<li>
<p>SQL Server Management Studio (SSMS):</p>
<ul>
<li>Download <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms" target="_blank" rel="noopener noreferrer">SSMS</a></li>
<li>Install with default settings</li>
</ul>
</li>
</ol>
<h3 id="_3-net-core-components" tabindex="-1"><a class="header-anchor" href="#_3-net-core-components"><span>3. .NET Core Components</span></a></h3>
<ol>
<li>Install <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">.NET Core SDK</a></li>
<li>Install <a href="https://dotnet.microsoft.com/download/dotnet/6.0" target="_blank" rel="noopener noreferrer">.NET Core Hosting Bundle</a></li>
<li>Verify installation in command prompt:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">dotnet <span class="token parameter variable">--version</span></span>
<span class="line">dotnet --list-sdks</span>
<span class="line">dotnet --list-runtimes</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_4-git-tools" tabindex="-1"><a class="header-anchor" href="#_4-git-tools"><span>4. Git Tools</span></a></h3>
<ol>
<li>
<p><a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">Git for Windows</a>:</p>
<ul>
<li>Choose &quot;Git from the command line and GUI&quot;</li>
<li>Set Visual Studio Code as default editor</li>
<li>Enable Git credential manager</li>
</ul>
</li>
<li>
<p>Optional: <a href="https://gitextensions.github.io/" target="_blank" rel="noopener noreferrer">Git Extensions</a></p>
</li>
</ol>
<h2 id="network-requirements" tabindex="-1"><a class="header-anchor" href="#network-requirements"><span>Network Requirements</span></a></h2>
<ul>
<li>Access to required ports:
<ul>
<li>Port 80 (HTTP)</li>
<li>Port 443 (HTTPS)</li>
<li>Port 1433 (SQL Server)</li>
</ul>
</li>
<li>Reliable internet connection</li>
<li>Ability to configure local IIS</li>
</ul>
<h2 id="required-permissions" tabindex="-1"><a class="header-anchor" href="#required-permissions"><span>Required Permissions</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Administrator Access</p>
<p>You must have administrator rights on your machine to complete the installation.</p>
</div>
<ul>
<li>Local administrator access</li>
<li>Ability to modify IIS settings</li>
<li>Permission to create and configure databases</li>
<li>Rights to modify system environment variables</li>
</ul>
<h2 id="pre-installation-checklist" tabindex="-1"><a class="header-anchor" href="#pre-installation-checklist"><span>Pre-Installation Checklist</span></a></h2>
<ul>
<li>[ ] Administrator access confirmed</li>
<li>[ ] Required hardware specifications met</li>
<li>[ ] Windows OS version verified</li>
<li>[ ] All required software downloaded</li>
<li>[ ] Network access and permissions verified</li>
<li>[ ] Required ports available</li>
<li>[ ] Sufficient disk space available</li>
</ul>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>Once prerequisites are met:</p>
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


