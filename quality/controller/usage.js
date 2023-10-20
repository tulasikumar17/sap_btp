sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("quality.controller.usagedec", {
        onInit() {
			var url1 = "/sap/opu/odata/SAP/ZTUL_ODATA_PRJ_QTY_USAGE2_SRV";
			var result1;
			var od1 = new sap.ui.model.odata.ODataModel(url1,true);
			od1.read("ZTUL_ODATA_QTY_USAGE_DECISION2Set?$filterZPlant eq '0001'",{
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
			this.getView().byId("Usage_dec").setModel(jsonconv);
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
