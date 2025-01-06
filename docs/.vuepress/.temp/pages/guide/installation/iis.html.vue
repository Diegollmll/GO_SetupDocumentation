<template><div><h1 id="final-configuration-steps" tabindex="-1"><a class="header-anchor" href="#final-configuration-steps"><span>Final Configuration Steps</span></a></h1>
<h2 id="iis-setup" tabindex="-1"><a class="header-anchor" href="#iis-setup"><span>IIS Setup</span></a></h2>
<h3 id="create-main-website" tabindex="-1"><a class="header-anchor" href="#create-main-website"><span>Create Main Website</span></a></h3>
<ol>
<li>
<p>Open IIS Manager:</p>
<ul>
<li>Press Windows key and type &quot;IIS&quot;</li>
<li>Select &quot;Internet Information Services (IIS) Manager&quot;</li>
</ul>
</li>
<li>
<p>Delete Default Web Site:</p>
<ul>
<li>Expand server node</li>
<li>Expand &quot;Sites&quot;</li>
<li>Right-click &quot;Default Web Site&quot;</li>
<li>Select &quot;Remove&quot;</li>
</ul>
</li>
<li>
<p>Create GO Applications website:</p>
<ul>
<li>Right-click on &quot;Sites&quot;</li>
<li>Select &quot;Add Website&quot;</li>
<li>Configure:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Site name: GO Applications</span>
<span class="line">Physical path: C:\inetpub\wwwroot\GOAPPS</span>
<span class="line">Port: 80</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Click OK to create</li>
</ul>
</li>
</ol>
<h3 id="convert-directories-to-applications" tabindex="-1"><a class="header-anchor" href="#convert-directories-to-applications"><span>Convert Directories to Applications</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>After deployment, the necessary directories should already exist under your GO Applications website. Converting them to applications will automatically create their respective application pools.</p>
</div>
<ol>
<li>
<p>In IIS Manager:</p>
<ul>
<li>Expand &quot;Sites&quot;</li>
<li>Expand &quot;GO Applications&quot;</li>
<li>You should see directories:
<ul>
<li>go-meta-portal</li>
<li>go-meta-generator</li>
<li>go-meta-modeler</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Convert each directory to an application:</p>
<ul>
<li>Right-click on each directory</li>
<li>Select &quot;Convert to Application&quot;</li>
<li>Click OK (this will create the application pool automatically)</li>
</ul>
</li>
</ol>
<h3 id="configure-application-pool-settings" tabindex="-1"><a class="header-anchor" href="#configure-application-pool-settings"><span>Configure Application Pool Settings</span></a></h3>
<p>After converting the directories to applications, configure each application pool:</p>
<ol>
<li>
<p>Go to &quot;Application Pools&quot; in IIS Manager</p>
</li>
<li>
<p>For each application pool:</p>
<ul>
<li>Right-click on the pool</li>
<li>Select &quot;Advanced Settings&quot;</li>
<li>Under &quot;Process Model&quot; &gt; &quot;Identity&quot;</li>
<li>Click &quot;...&quot; button</li>
<li>Select &quot;Custom account&quot;</li>
<li>Click &quot;Set&quot;</li>
<li>Enter credentials:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Username: .\YourUsername  (Example: .\john.doe)</span>
<span class="line">Password: YourWindowsPassword</span>
<span class="line">Confirm password: YourWindowsPassword</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Click OK on all dialogs</li>
</ul>
</li>
</ol>
<h3 id="verify-setup" tabindex="-1"><a class="header-anchor" href="#verify-setup"><span>Verify Setup</span></a></h3>
<ol>
<li>
<p>Check website status:</p>
<ul>
<li>Click on &quot;GO Applications&quot; site</li>
<li>In right panel, click &quot;Start&quot; if not already started</li>
</ul>
</li>
<li>
<p>Check all applications:</p>
<ul>
<li>Verify each application shows under the GO Applications site</li>
<li>Verify each has its own application pool</li>
<li>Check physical paths are correct</li>
</ul>
</li>
<li>
<p>Check application pools:</p>
<ul>
<li>Select &quot;Application Pools&quot;</li>
<li>Verify all pools show &quot;Started&quot; status</li>
<li>Start any stopped pools</li>
</ul>
</li>
</ol>
<h2 id="deploy-and-verify-applications" tabindex="-1"><a class="header-anchor" href="#deploy-and-verify-applications"><span>Deploy and Verify Applications</span></a></h2>
<h3 id="deploy-components" tabindex="-1"><a class="header-anchor" href="#deploy-components"><span>Deploy Components</span></a></h3>
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
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-generator<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployTaskPerformers.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Deploy Modeler:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deployapplication.cmd</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploymodellerlibraries.bat</span>
<span class="line">C:<span class="token punctuation">\</span>Projects<span class="token punctuation">\</span>GenerativeObjects<span class="token punctuation">\</span>go-modeler<span class="token punctuation">\</span>go-application<span class="token punctuation">\</span>Scripts<span class="token punctuation">\</span>deploydatabasescript.bat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="verify-local-installation" tabindex="-1"><a class="header-anchor" href="#verify-local-installation"><span>Verify Local Installation</span></a></h3>
<ol>
<li>
<p>Open your browser and navigate to:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://localhost/go-meta-portal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>You should see the GO login page:</p>
<ul>
<li>If the page loads successfully, your deployment is working</li>
<li>Default credentials are:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Username: Admin</span>
<span class="line">Password: Admin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>After logging in, you should see the GO Portal dashboard</li>
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
<li>Clear browser cache and try again</li>
<li>Check Windows Event Viewer for specific errors</li>
</ol>
<p>If the page doesn't load:</p>
<ol>
<li>Verify you can ping localhost</li>
<li>Check if the application pool is running</li>
<li>Look for any stopped services in IIS</li>
<li>Verify URL rewrite module is installed correctly</li>
</ol>
</div>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>Now that you have GO running locally, you can proceed to:
<RouteLink to="/guide/development/first-app.html">Creating Your First GO Application</RouteLink> →</p>
</div></template>


