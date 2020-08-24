sap.ui.jsview("MonthlyManagement.view.App", {

	getControllerName: function () {
		return "MonthlyManagement.view.App";
	},
	
	createContent: function (oController) {
		
		// To avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// Create the application
		this.app = new sap.m.SplitApp();

		// Load the master page
		var master = sap.ui.xmlview("Master", "MonthlyManagement.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true); // true = left side of the panel
		//this.app.addMasterPage(master);
		
		// Load the empty page
		var empty = sap.ui.xmlview("Empty", "MonthlyManagement.view.Empty");
		this.app.addPage(empty, false); // false = right side of the panel
		//this.app.addDetailPage(empty);
		
		return this.app;
		
	}
});