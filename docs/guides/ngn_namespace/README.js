Ext.data.JsonP.ngn_namespace({"guide":"<h1>The NGN Namespace</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/ngn_namespace-section-1'>Purpose &amp; Goals</a></li>\n<li><a href='#!/guide/ngn_namespace-section-2'>Usage</a></li>\n<li><a href='#!/guide/ngn_namespace-section-3'>Alternative Namespace Name</a></li>\n<li><a href='#!/guide/ngn_namespace-section-4'>Loading the NGN Namespace</a></li>\n<li><a href='#!/guide/ngn_namespace-section-5'>Inspiration</a></li>\n</ol>\n</div>\n\n<p>The NGN namespace is a special <a href=\"http://en.wikipedia.org/wiki/Don't_repeat_yourself\">DRY</a>-like class responsible for loading the\nframework into the <a href=\"http://nodejs.org/api/globals.html#globals_global\">node.js global namespace</a>.</p>\n\n<p>NGN is designed to be a base framework for many kinds of <em>applications</em>. It provides a rich feature set, including\nan Enterprise Service Bus (ESB), pooled datasource connections (DSN), and access to system resources like mail servers, loggers, etc.</p>\n\n<h2 id='ngn_namespace-section-1'>Purpose &amp; Goals</h2>\n\n<p>NGN attempts to simplify programming of behind-the-scenes application logic. It is a framework for <em>applications</em>. It's intended for\nhelping organize and abstract logic in a DRY-like manner. It is ideally suited for rapid application development.</p>\n\n<p>NGN is <strong>not</strong> meant to be a foundation for building independent node modules, though it does leverage many modules.</p>\n\n<h2 id='ngn_namespace-section-2'>Usage</h2>\n\n<p>Using NGN is a one-line (<code>require('NGN');</code>) include in your main executable.</p>\n\n<p><strong>app.js</strong></p>\n\n<pre><code> require('NGN'); // &lt;-- That's it!\n\n var userDB = new <a href=\"#!/api/NGN.datasource.MongoDB\" rel=\"NGN.datasource.MongoDB\" class=\"docClass\">NGN.datasource.MongoDB</a>();\n\n <a href=\"#!/api/NGN-method-createDatasource\" rel=\"NGN-method-createDatasource\" class=\"docClass\">NGN.createDatasource</a>('users',userDB);\n\n var www = require('./myWebServer.js');\n\n www.listen(80);\n</code></pre>\n\n<p>The code above loads the framework in the first line. The remainder of the code registers a MongoDB instance as a user data store\nand launches a web server defined in <code>myWebServer.js</code>. This code would be executed from the CLI as would any other node.js application:</p>\n\n<pre><code> node app.js\n</code></pre>\n\n<p>The framework is then available in any other file. For example, the code of <code>myWebServer.js</code> might look like:</p>\n\n<p><strong>myWebServer.js</strong></p>\n\n<pre><code> var express = require('express');\n var app     = express.createServer();\n var db      = <a href=\"#!/api/NGN-method-getDatasource\" rel=\"NGN-method-getDatasource\" class=\"docClass\">NGN.getDatasource</a>('users');\n\n app.get('/user/:id',function(req,res){\n     db.find(..., callback);\n });\n\n modules.exports = app;\n</code></pre>\n\n<h2 id='ngn_namespace-section-3'>Alternative Namespace Name</h2>\n\n<p>If you're concerned about naming/dependency conflicts in the node.js <code>global</code> scope, or simply want to customize how the framework is reference,\nit can be configured to use an alternative name.</p>\n\n<pre><code> require('NGN')('app');\n\n // Create a DSN with the new reference.\n app.createDatasource('users',userDB);\n</code></pre>\n\n<p>The <code>global</code> scope of node.js is case sensitive, so NGN automatically creates a lowercase and uppercase convenience scope\n(i.e. <code>app</code> and <code>APP</code> in the above example).</p>\n\n<h2 id='ngn_namespace-section-4'>Loading the NGN Namespace</h2>\n\n<p>NGN generates the entire namespace by looping through the directories of the <code>ngn</code> directory\nand performing operations (<code>require</code>) on each file found within the framework.</p>\n\n<p>It recursively loops through the <code>ngn/lib</code> directory, adding each directory as a sub-namespace,\nand each file as an element of the appropriate namespace.</p>\n\n<p>For example, let's assume NGN/lib/user exists as shown below. This directory contains files Person.js and Login.js.</p>\n\n<pre><code>&gt; ngn\n    &gt; lib\n        &gt; user\n            - Person.js\n            - Login.js\n</code></pre>\n\n<p>NGN recognizes <code>user</code> is a directory and creates a subspace for it (i.e. <a href=\"#!/api/NGN-method-app\" rel=\"NGN-method-app\" class=\"docClass\">NGN.app</a>). It then loops through\nthe <code>user</code> directory and requires each <code>.js</code> file it encounters. In this case, it would automatically\ngenerate two classes: <code>NGN.app.Person</code> and <code>NGN.app.Login</code>. As a result, developers can use a sugar syntax like:</p>\n\n<pre><code>var Person = new NGN.app.Person({ first:'John', last:'Doe' });\nvar Login  = new NGN.app.Login({ type:'facebook', id:'1234567890' });\n</code></pre>\n\n<p>It is important to note that the <code>lib</code> directory contains three files in the root, with the rest of the core API\nbeing contained in <code>ngn/lib</code> subdirectories. These files include <code>BaseClass.js</code>, <code>NGN.js</code> (this file), and <code>NGN.Global.js</code>.</p>\n\n<p>All files in the <code>lib</code> directory are included with the following exceptions:</p>\n\n<h3>BaseClass.js</h3>\n\n<p>This file is not included directly in the namespace because it is a common construct used to establish\nJavaScript inheritance. There is nothing specific to application logic in this file.</p>\n\n<h3>NGN.Global.js</h3>\n\n<p>This is an extension of <code>BaseClass.js</code> (#Class). This is the core object the API is built on. Any extensions to the API\nextend this class. However; it itself is not part of the application logic of the API. It is only a construct.</p>\n\n<h3>NGN.js</h3>\n\n<p>This is responsible for creating the namespace dynamically, and is not necessary after the namespace\nis constructed.</p>\n\n<h2 id='ngn_namespace-section-5'>Inspiration</h2>\n\n<p>NGN was inspired by ColdFusion. There's really nothing similar to ColdFusion coding, but it is inspired by the administration\nsystem. ColdFusion allows developers to define data sources, mail servers, etc in the administration. Developers can then\nleverage these \"global features\" in their applications while many common/tedious tasks are performed automatically.</p>\n\n<p>There are several differences from the concepts of ColdFusion, the major one being this framework isolates applications. Another\nmajor difference is it does not attempt to manage physical resources, such as clustering across servers, session sharing, etc.\nNGN leaves those decisions up to the web/network engineer. Of course, the framework could be extended to do this, but will not\ndo so by default due to the incredible variances in web infrastructure.</p>\n","title":"NGN Namespace"});