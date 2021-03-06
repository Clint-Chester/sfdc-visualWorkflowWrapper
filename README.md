# Visual Workflow Wrapper

<p><b>UPDATE:</b> Since the Winter '19 Release, you can now expose Flows to Guest Users in Communities natively, and the Summer '18 Release allowed for local actions so that you could control navigation with Lightning components. Therefore this isn't that useful anymore! However will keep this up for historical / relic purposes.</p>

<p>The Visual Workflow Wrapper is designed to provide additional functionality that wasn't delivered with the standard Flows component prior to the Winter '19 Release. This wrapper provides the following features:</p>
        <ul>
        	<li>Expose Flows to Guest Users in Communities</li>
                <li>Set the return location of the Flow to a URL or sObject record</li>
        </ul>

<a href="https://githubsfdeploy.herokuapp.com?owner=Clint-Chester&repo=sfdc-visualWorkflowWrapper&ref=master">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

<h2>Set Return Location</h2>
<p>There are a number of options that can be set to control the return behaviour of the Flow. This is controlled through the 'redirectOptions' attribute.</p>
<h3>URL</h3>
<p>Using the 'urlName' variable, set the desired URL you wish the Flow to navigate to once finished.</p>
<h3>sObject</h3>
<p>Using the 'sObjectVariableName' variable, set this variable to the name of the sObject Variable you created in the Flow you wish to navigate to. It will look for the ID value of the sObject Variable.</p>
<h3>Dynamic Routing</h3>
<p>There are instances where you may require a dynamic return location for the Visual Workflow implemented. This will require you to choose the 'Dynamic Routing' option in the Redirect Options list.</p>
<p>To ensure Dynamic Routing works successfully in the Visual Workflow Wrapper, it will require you to create the following standard variables as 'Output Only' in your Visual Workflow:</p>
<ul>
        <li>RedirectOption - set the data type as 'Text'. In the flow, set this variable to either 'sObject' or 'URL'.</li>
    <li>UrlOption - set the data type as 'Text'. In the flow, set this variable to the URL you wish to navigate to. This value is used if the redirect option is set to 'URL'.</li>
    <li>SObjectVariableOption - set the data type as 'Text'. In the flow, set this variable to the name of the sObject Variable created in the Flow you wish to navigate to. It will look for the ID value of the sObject Variable. This value is used if the redirect option is set to 'sObject'.</li>
</ul>
<p>Throughout the Visual Workflow you have configured, set these three variables to the desired redirect navigation outcome.</p>
