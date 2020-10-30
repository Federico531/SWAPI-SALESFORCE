public with sharing class SwapiController {
  /*  @AuraEnabled
    espublic static List<Expense__c> getExpens() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, Amount__c, Client__c, Date__c,
                Reimbursed__c, CreatedDate
                FROM Expense__c];
    } */
    @AuraEnabled
    public static Contact saveExpense(Contact contact) {
        // Perform isUpdateable() checking first, then
        upsert contact;
        return contact;
    } 
    @AuraEnabled
    public static List<Contact> getCharacters() {
        // Check to make sure all fields are accessible to this user
        String[] fieldsToCheck = new String[] {
            'Name', 'Height__c', 'Gender__c', 'Haircolor__c',
                'Eyecolor__c', 'URL__c', 'Planet__c', 'Characternumber__c'
                };
                    Map<String,Schema.SObjectField> fieldDescribeTokens =
                    Schema.SObjectType.Contact.fields.getMap();
        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }
        // OK, they're cool, let 'em through
        return [SELECT Name, Height__c, Gender__c, Haircolor__c,
                Eyecolor__c, URL__c, Planet__c, Characternumber__c
                FROM Contact];
    }
}
