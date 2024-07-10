sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("daniexamples.invoices.controller.MainView", {

            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen")
            },

            onFilter: function(oEvent) {

            },
            
            onClearFilters: function() {
                const oModelSelectionScreen = this.getView().getModel("selectionScreen");
                oModelSelectionScreen.setProperty("/CountryKey", "");
                oModelSelectionScreen.setProperty("/ShipName", "");
            }
        });
    });
