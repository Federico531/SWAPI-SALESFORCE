({
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        // c.getAccounts va directo a SwapiController.apxc
        let action = component.get("c.getContacts");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
                
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    
    handleUpdateContact: function(component, event, helper) {
        let updatedExp = event.getParam("contact");
        helper.updateContact(component, updatedExp);
    },
    handleCreateContact: function(component, event, helper) {
        let newContact = event.getParam("contact");
        helper.createContact(component, newContact);
        alert("Contacto guardado")
    },
})
