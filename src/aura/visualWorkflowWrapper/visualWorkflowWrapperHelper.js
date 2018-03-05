({
    navigateToSObject : function(cmp, outputVariables, sObjectIndex) {
        var urlEvent = $A.get("e.force:navigateToSObject");
        urlEvent.setParams({
            "recordId": outputVariables[sObjectIndex].value.Id,
            "isredirect": "true"
        });
        urlEvent.fire();
    },
    navigateToUrl : function(cmp, url) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": url
        });
        urlEvent.fire();
    }
})