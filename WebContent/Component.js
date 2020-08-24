jQuery.sap.declare("MonthlyManagement.Component");
sap.ui.core.UIComponent.extend("MonthlyManagement.Component", {
	
	metadata : {
        stereotype 	: "component", 
        "abstract"	: true,  
        version 	: "1.0",   
        library 	: "MonthlyManagement",  // Required for CSS reference
        includes	: [ "css/styles.css" ], // CSS style reference     
        dependencies: { 			        // External dependencies
            libs 	: [                     // The libraries that component will be using
            	"sap.m", 
                "sap.ui.commons", 
                "sap.ui.ux3", 
                "sap.ui.table", 
                "sap.ui.layout" 
            ], 	            
            library	: "sap.ui.core",	    // What library belongs your component to              
        },        
	},	
	
	createContent : function() {

		// Create root view
		var oView = sap.ui.view({
			id 			: "app",
			viewName 	: "MonthlyManagement.view.App",
			type 		: "JS",
			viewData 	: { component : this }
		});
					
		// Set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone 	: jQuery.device.is.phone,
			listMode 	: (jQuery.device.is.phone) ? "None"   : "SingleSelectMaster",
			listItemType: (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");
			
		// Done
		return oView;
	}
});