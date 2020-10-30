({
 clickCreate: function(component, event, helper) {

        //component.find('aura:id')
        let validContact = component.find('contactform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validContact){
            // Create the new contact
            let newContact = component.get("v.newContact");
            console.log("Create Character: " + JSON.stringify(newContact));
            helper.createContact(component, newContact);
        }
    }
})
