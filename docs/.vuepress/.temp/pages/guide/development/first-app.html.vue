<template><div><h1 id="creating-your-first-go-application" tabindex="-1"><a class="header-anchor" href="#creating-your-first-go-application"><span>Creating Your First GO Application</span></a></h1>
<p>This guide walks you through creating your first GO application, from initial setup to running the application.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Before You Begin</p>
<p>Ensure you have:</p>
<ul>
<li>Completed GO installation</li>
<li>Verified deployment</li>
<li>Access to GO Meta Portal</li>
<li>Required permissions</li>
</ul>
</div>
<h2 id="creating-a-new-application" tabindex="-1"><a class="header-anchor" href="#creating-a-new-application"><span>Creating a New Application</span></a></h2>
<h3 id="step-1-access-go-meta-portal" tabindex="-1"><a class="header-anchor" href="#step-1-access-go-meta-portal"><span>Step 1: Access GO Meta Portal</span></a></h3>
<ol>
<li>Open your browser</li>
<li>Navigate to:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://localhost/GoMetaPortal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>Login with your credentials</li>
</ol>
<h3 id="step-2-create-new-application" tabindex="-1"><a class="header-anchor" href="#step-2-create-new-application"><span>Step 2: Create New Application</span></a></h3>
<ol>
<li>Click &quot;Applications&quot; tab</li>
<li>Click &quot;New Application&quot;</li>
<li>Fill in application details:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Application Name: MyFirstApp</span>
<span class="line">Meta modeler: GenerativeObjects</span>
<span class="line">Meta generator: Generative Objects Modeller Core Generation Models</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Click &quot;Save&quot;</li>
</ol>
<h2 id="application-configuration" tabindex="-1"><a class="header-anchor" href="#application-configuration"><span>Application Configuration</span></a></h2>
<h3 id="step-1-database-setup" tabindex="-1"><a class="header-anchor" href="#step-1-database-setup"><span>Step 1: Database Setup</span></a></h3>
<ol>
<li>
<p>Create application database:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> MyFirstApp<span class="token punctuation">;</span></span>
<span class="line">GO</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Configure connection:</p>
<ul>
<li>Open application settings</li>
<li>Set connection string:</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"MainConnectionString"</span><span class="token operator">:</span> <span class="token string">"data source=.\\SQLEXPRESS;initial catalog=MyFirstApp;integrated security=SSPI"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-2-basic-configuration" tabindex="-1"><a class="header-anchor" href="#step-2-basic-configuration"><span>Step 2: Basic Configuration</span></a></h3>
<ol>
<li>
<p>Open Membership settings:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Administration → Platform Configuration → Membership</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Configure authentication:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Security Provider: Application</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="creating-business-model" tabindex="-1"><a class="header-anchor" href="#creating-business-model"><span>Creating Business Model</span></a></h2>
<h3 id="step-1-create-entity" tabindex="-1"><a class="header-anchor" href="#step-1-create-entity"><span>Step 1: Create Entity</span></a></h3>
<ol>
<li>
<p>Navigate to:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Business Model → Entities → New</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Create Customer entity:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Name: Customer</span>
<span class="line">Internal Name: Customer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add fields:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Id (Auto-generated)</span>
<span class="line">- Name (Text)</span>
<span class="line">- Email (Text)</span>
<span class="line">- Phone (Text)</span>
<span class="line">- Status (Boolean)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-2-create-relations" tabindex="-1"><a class="header-anchor" href="#step-2-create-relations"><span>Step 2: Create Relations</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Entity Relations</p>
<p>Define how entities relate to each other</p>
</div>
<ol>
<li>Navigate to Entity Relations</li>
<li>Create relation:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Type: One to Many</span>
<span class="line">Parent: Customer</span>
<span class="line">Child: Order</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="creating-user-interface" tabindex="-1"><a class="header-anchor" href="#creating-user-interface"><span>Creating User Interface</span></a></h2>
<h3 id="step-1-create-form" tabindex="-1"><a class="header-anchor" href="#step-1-create-form"><span>Step 1: Create Form</span></a></h3>
<ol>
<li>
<p>Navigate to:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Presentation Elements → Forms → New</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Configure form:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Name: CustomerForm</span>
<span class="line">Entity: Customer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add form fields:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Name (TextBox)</span>
<span class="line">- Email (TextBox)</span>
<span class="line">- Phone (TextBox)</span>
<span class="line">- Status (Checkbox)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-2-create-grid" tabindex="-1"><a class="header-anchor" href="#step-2-create-grid"><span>Step 2: Create Grid</span></a></h3>
<ol>
<li>
<p>Navigate to:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Presentation Elements → Grids → New</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Configure grid:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Name: CustomerGrid</span>
<span class="line">Entity: Customer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add columns:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Name</span>
<span class="line">- Email</span>
<span class="line">- Status</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-3-create-page" tabindex="-1"><a class="header-anchor" href="#step-3-create-page"><span>Step 3: Create Page</span></a></h3>
<ol>
<li>
<p>Navigate to:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Presentation Elements → Pages → New</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Configure page:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Name: CustomerPage</span>
<span class="line">Master Page: One column</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Add elements:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- CustomerGrid</span>
<span class="line">- CustomerForm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="generating-the-application" tabindex="-1"><a class="header-anchor" href="#generating-the-application"><span>Generating the Application</span></a></h2>
<h3 id="step-1-generate-code" tabindex="-1"><a class="header-anchor" href="#step-1-generate-code"><span>Step 1: Generate Code</span></a></h3>
<ol>
<li>
<p>Click &quot;Generate&quot; button</p>
</li>
<li>
<p>Select options:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">☐ Generate All</span>
<span class="line">☐ Include Documentation</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Start generation</p>
</li>
</ol>
<h3 id="step-2-build-application" tabindex="-1"><a class="header-anchor" href="#step-2-build-application"><span>Step 2: Build Application</span></a></h3>
<ol>
<li>
<p>Open solution in Visual Studio</p>
</li>
<li>
<p>Build solution:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Build → Build Solution</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Fix any build errors</p>
</li>
</ol>
<h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h2>
<h3 id="step-1-deploy-application" tabindex="-1"><a class="header-anchor" href="#step-1-deploy-application"><span>Step 1: Deploy Application</span></a></h3>
<ol>
<li>
<p>Run deployment scripts:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">deployapplication.cmd</span>
<span class="line">deployservices.cmd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Configure IIS:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Create application in IIS</span>
<span class="line">- Set application pool</span>
<span class="line">- Configure authentication</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-2-database-update" tabindex="-1"><a class="header-anchor" href="#step-2-database-update"><span>Step 2: Database Update</span></a></h3>
<ol>
<li>
<p>Run database scripts:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">LiveUpdateDatabaseScript.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Verify database:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customer<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="testing-the-application" tabindex="-1"><a class="header-anchor" href="#testing-the-application"><span>Testing the Application</span></a></h2>
<h3 id="step-1-launch-application" tabindex="-1"><a class="header-anchor" href="#step-1-launch-application"><span>Step 1: Launch Application</span></a></h3>
<ol>
<li>
<p>Access application:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://localhost/MyFirstApp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Login with default credentials:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Username: Admin</span>
<span class="line">Password: Admin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="step-2-test-features" tabindex="-1"><a class="header-anchor" href="#step-2-test-features"><span>Step 2: Test Features</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Test Core Features</p>
<p>Verify basic CRUD operations</p>
</div>
<ol>
<li>
<p>Create new customer:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Click "New Customer"</span>
<span class="line">- Fill in details</span>
<span class="line">- Save</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>View customer list:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Open customer grid</span>
<span class="line">- Verify data display</span>
<span class="line">- Test sorting/filtering</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Update customer:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">- Select customer</span>
<span class="line">- Modify details</span>
<span class="line">- Save changes</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="common-issues" tabindex="-1"><a class="header-anchor" href="#common-issues"><span>Common Issues</span></a></h2>
<h3 id="generation-fails" tabindex="-1"><a class="header-anchor" href="#generation-fails"><span>Generation Fails</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Generation Issues</p>
<p>Common solutions:</p>
<ol>
<li>Check model validity</li>
<li>Verify database connection</li>
<li>Clear temporary files</li>
</ol>
</div>
<h3 id="build-errors" tabindex="-1"><a class="header-anchor" href="#build-errors"><span>Build Errors</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Build Problems</p>
<p>If build fails:</p>
<ol>
<li>Check references</li>
<li>Update NuGet packages</li>
<li>Clean solution</li>
</ol>
</div>
<h3 id="runtime-errors" tabindex="-1"><a class="header-anchor" href="#runtime-errors"><span>Runtime Errors</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Runtime Issues</p>
<p>Common fixes:</p>
<ol>
<li>Verify deployment</li>
<li>Check permissions</li>
<li>Review logs</li>
</ol>
</div>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h2>
<p>After creating your first application:</p>
<ol>
<li>Explore <RouteLink to="/guide/development/advanced-features.html">Advanced Features</RouteLink></li>
<li>Review <RouteLink to="/guide/development/best-practices.html">Best Practices</RouteLink></li>
<li>Learn about <RouteLink to="/guide/development/customization.html">Customization</RouteLink></li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Congratulations!</p>
<p>You've created your first GO application! Continue exploring more features to build more complex applications.</p>
</div>
</div></template>


