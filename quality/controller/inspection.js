sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("quality.controller.inspection", {
        onInit() {
			var url1 = "/sap/opu/odata/SAP/ZTUL_ODATA_PRJ_QTY_INSPECTION_SRV";
			var result1;
			var od1 = new sap.ui.model.odata.ODataModel(url1,true);
			od1.read("ZTULASI_ODATA_QTY_INSPECTIONSet?$filter=ZinsNo eq '10000000014'",{
				context:null,
				urlParameter:null,
				async:false,
				success: function(oData, oResponse)
				{
					result1 = oData.results;
				}
			});
			var jsonconv = new sap.ui.model.json.JSONModel();
			jsonconv.setData({
				"results":result1
			});
			this.getView().byId("Inspection").setModel(jsonconv);
		},
		logout:function(){
				var oR = sap.ui.core.UIComponent.getRouterFor(this);
				oR.navTo("Route_login");
		},
		back:function(){
				var oR = sap.ui.core.UIComponent.getRouterFor(this);
				oR.navTo("Route_dash");
		}
      });
    }
  );
