Ext.data.JsonP.NGN_Base({"component":false,"html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n"]},"tagname":"class","extends":"Class","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":true,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"aside":[{"type":"guide","name":"class_system"}]},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"NGN.Base","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"createRef","id":"method-createRef"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"getFileFromPath","id":"method-getFileFromPath"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.Base","meta":{},"name":"on","id":"method-on"}],"event":[],"property":[{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><strong>NGN.Base</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/NGN' rel='NGN' class='docClass'>NGN</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/NGN.Email' rel='NGN.Email' class='docClass'>NGN.Email</a></div><div class='dependency'><a href='#!/api/NGN.datasource.Connection' rel='NGN.datasource.Connection' class='docClass'>NGN.datasource.Connection</a></div><div class='dependency'><a href='#!/api/NGN.http.API' rel='NGN.http.API' class='docClass'>NGN.http.API</a></div><div class='dependency'><a href='#!/api/NGN.http.Client' rel='NGN.http.Client' class='docClass'>NGN.http.Client</a></div><div class='dependency'><a href='#!/api/NGN.user.Login' rel='NGN.user.Login' class='docClass'>NGN.user.Login</a></div><div class='dependency'><a href='#!/api/NGN.user.Person' rel='NGN.user.Person' class='docClass'>NGN.user.Person</a></div><h4>Files</h4><div class='dependency'><a href='source/NGN.Base.html#NGN-Base' target='_blank'>NGN.Base.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/class_system'><img src='guides/class_system/icon.png' alt=''> The Class System</a></p>\n            </div>\n<p>This singleton exposes core business objects that node.js can use in an application. All NGN objects\ninherit this class. It should never be used directly in application logic, but it should be used to\nextend the NGN namespace/API.</p>\n\n<p>The factory provides common functionality that can be used throughout multiple objects in the\nextended API. It provides business logic that is more specific to NGN than the BaseClass.</p>\n\n<p>The following example is an extremely abbreviated version of the <a href=\"#!/api/NGN.user.Person\" rel=\"NGN.user.Person\" class=\"docClass\">NGN.user.Person</a> class.</p>\n\n<pre class='inline-example '><code><a href=\"#!/api/NGN.Base\" rel=\"NGN.Base\" class=\"docClass\">NGN.Base</a> = require('../<a href=\"#!/api/NGN.Base\" rel=\"NGN.Base\" class=\"docClass\">NGN.Base</a>');\n\nvar Person = <a href=\"#!/api/NGN.Base-method-extend\" rel=\"NGN.Base-method-extend\" class=\"docClass\">NGN.Base.extend</a>({\n    constructor: function( config ){\n        Person.super.constructor.call( this, config );\n           this.first = config.first  || 'Unknown';\n        this.last  = config.last   || 'Unknown';\n        this.middle= config.middle || null\n    },\n    describe: function() {\n        console.log('This is '+this.first+' '+(this.middle!==null?this.middle:'')+this.last);\n    },\n    register: function() {\n           // Register the user or save all attributes to a database.\n    }\n});\n\n// Create a module out of this.\nmodule.exports = Person;\n</code></pre>\n\n<p>The factory provides a foundation on which the other objects can be built. Using the <code>Person</code> in the example above,\na developer could create and register a new user with the following approach:</p>\n\n<pre class='inline-example '><code>var Person = new <a href=\"#!/api/NGN.user.Person\" rel=\"NGN.user.Person\" class=\"docClass\">NGN.user.Person</a>({ first:'John', last:'Doe' }); \n\nPerson.register();\n</code></pre>\n\n<p>NGN.<strong>user</strong>.Person is a dynamically constructed namespace, created primarily to more easily understand the business\nlogic of the API. <a href=\"#!/api/NGN\" rel=\"NGN\" class=\"docClass\">NGN</a> is responsible for constructing this namespace.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-prototype' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRef' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-createRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-createRef' class='name expandable'>createRef</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, Booean overwriteExisting</span> )</div><div class='description'><div class='short'>Creates a global variable. ...</div><div class='long'><p>Creates a global variable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The namespace to be created.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object which is being referenced.</p>\n</div></li><li><span class='pre'>overwriteExisting</span> : Booean<div class='sub-desc'><p>Recreate the namespace using the new object.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-fireError' class='name expandable'>fireError</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.Base-method-emit\" rel=\"NGN.Base-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the <a href=\"#!/api/NGN-property-BUS\" rel=\"NGN-property-BUS\" class=\"docClass\">NGN.BUS</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFileFromPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-getFileFromPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-getFileFromPath' class='name expandable'>getFileFromPath</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> path</span> )</div><div class='description'><div class='short'>Extracts the filename from the path. ...</div><div class='long'><p>Extracts the filename from the path. Supports URL/URI and filepath syntax.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.Base'>NGN.Base</span><br/><a href='source/NGN.Base.html#NGN-Base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.Base-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","name":"NGN.Base","aliases":{},"superclasses":["Class"],"requires":["NGN"],"id":"class-NGN.Base","subclasses":["NGN.datasource.Connection","NGN.Email","NGN.http.API","NGN.http.Client","NGN.user.Login","NGN.user.Person"],"files":[{"href":"NGN.Base.html#NGN-Base","filename":"NGN.Base.js"}]});