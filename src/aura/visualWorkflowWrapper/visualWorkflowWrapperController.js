({
    init : function (cmp) {
        // Find the component whose aura:id is "flowData"
        var flow = cmp.find("flowData");
        var flowName = cmp.get("v.flowName");
        // In that component, start your flow. Reference the flow's Unique Name.
        flow.startFlow(flowName);
    },
    handleStatusChange : function (cmp, event, helper) {
        if(event.getParam("status") === "FINISHED") {
            //Check which redirect method was set
            var redirectMethod = cmp.get("v.redirectOptions");
            if(redirectMethod !== "None") {
                //If redirect method set at the component level is 'URL' then navigate to the specified URL
                if(redirectMethod === "URL") {
                    helper.navigateToUrl(cmp, cmp.get("v.urlName"));
                }
                //sObject and Dynamic Routing require the output variables from the flow
                var outputVariables = event.getParam("outputVariables");
                //If redirect method set at the component level is 'sObject' then navigate to the specified sObject
                if(redirectMethod === "sObject") {
                    helper.navigateToSObject(cmp, outputVariables, outputVariables.map(function(e){return e.name}).indexOf(cmp.get("v.sObjectVariableName")));
                }
                //If redirect method set at the component level is 'Dynamic Routing' retrieve the variables from the flow to identify the redirect method
                if(redirectMethod === "Dynamic Routing") {
                    //Get the dynamic redirect option
                    var redirectOption = outputVariables[outputVariables.map(function(e){return e.name}).indexOf('RedirectOption')].value;
                    if(redirectOption === "URL"){
                        helper.navigateToUrl(cmp, outputVariables[outputVariables.map(function(e){return e.name}).indexOf('UrlOption')].value);
                    }
                    if(redirectOption === "sObject") {
                        //Get the sObject variable name that needs to be retrieved
                        var sObjectVariableName = outputVariables[outputVariables.map(function(e){return e.name}).indexOf('SObjectVariableOption')].value;
                        helper.navigateToSObject(cmp, outputVariables, outputVariables.map(function(e){return e.name}).indexOf(sObjectVariableName));
                    }
                }
            }
        }
    }
})