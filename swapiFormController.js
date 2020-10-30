({
 clickCreate: function(component, event, helper) {
        /*component.find('expenseform')
        obtiene referencia a la matriz de los campos <lightning:input>
        que requieren la validación. Si el Id. es único,
        la referencia devuelve el componente. En este caso,
        el Id. no es único y la referencia devuelve una matriz de componentes.
        */
        /*
          El método reduce() de JavaScript reduce la matriz a un solo valor capturado
          por validSoFar, el cual es verdadero hasta que se encuentra un campo no válido,
          lo que cambia validSoFar a falso. Un campo no válido puede ser un campo 
          obligatorio vacío o un campo con un número inferior al número mínimo 
          especificado entre muchos otros.
         */
        //component.find('aura:id')
        let validExpense = component.find('characterform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            let newCharacter = component.get("v.newCharacter");
            console.log("Create Character: " + JSON.stringify(newCharacter));
            helper.createExpense(component, newCharacter);
        }
    }
})
