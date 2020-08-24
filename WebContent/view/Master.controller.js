jQuery.sap.require("sap.m.MessageBox");	
sap.ui.controller("MonthlyManagement.view.Master", {

	pressNextPage: function(evt) {	
        // Navigation to detail page
		var context = evt.getSource().getBindingContext();
		this.nav.to("Details", context);    // to() is defined in 'App.controller.js'
	},

	pressGetMaterial : function(evt) {
		this.call_ModelFile();
	},
	
	call_ModelFile: function(){		
		
        // Calling model json file for data reference
		var sample = $.sap.getModulePath("MonthlyManagement", "/model/sampleData.json");
		var oModel = new sap.ui.model.json.JSONModel(sample);
		
		// Set JSONModeloutput to ListControl
		var list = this.getView().byId("idList1");
		list.setModel(oModel);
	}
});