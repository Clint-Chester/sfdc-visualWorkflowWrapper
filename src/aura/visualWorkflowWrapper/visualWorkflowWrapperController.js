({
    init : function (cmp) {
        // Find the component whose aura:id is "flowData"
        var flow = cmp.find("flowData");
        var flowName = cmp.get("v.flowName");
        // In that component, start your flow. Reference the flow's Unique Name.
        flow.startFlow(flowName);
    },
    handleStatusChange : function (cmp, event) {
        if(event.getParam("status") === "FINISHED") {
            var redirectMethod = cmp.get("v.redirectOptions");
            if(redirectMethod !== "None") {
                if(redirectMethod === "sObject") {
                    var sObjectVariableName = cmp.get("v.sObjectVariableName");
                    var outputVariables = event.getParam("outputVariables");
                    for(var i = 0; i < outputVariables.length; i+=1) {
                        if(outputVariables[i].name === sObjectVariableName) {
                            var urlEvent = $A.get("e.force:navigateToSObject");
                            urlEvent.setParams({
                                "recordId": outputVariables[i].value.Id,
                                "isredirect": "true"
                            });
                            urlEvent.fire();
                        }
                    }
                }
                if(redirectMethod === "URL") {
                    var urlEvent = $A.get("e.force:navigateToURL");
                    urlEvent.setParams({
                        "url": cmp.get("v.urlName")
                    });
                    urlEvent.fire();
                }
            }
        }
    }
})