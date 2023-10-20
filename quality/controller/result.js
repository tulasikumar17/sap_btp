sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("quality.controller.result", {
        onInit() {
			var url1 = "/sap/opu/odata/sap/ZTUL_ODATA_PRJ1_QUALITY_PORTAL_SRV";
			var d1 = [];
			var od1 = new sap.ui.model.odata.ODataModel(url1,true);
			od1.read("ZTUL_ODATA_QTY_RESULT_RECSet?$filterZinsNo eq '1000000001'",{
				context:null,
				urlParameter:null,
				async:false,
				success: function(oData, oResponse)
				{
					if(oData.hasOwnProperty("results")){
                        oData.results.forEach(function(innerobject){
                         var formatdate=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd-MM-yyyy"});
                         innerobject.Erstelldat=formatdate.format(innerobject.Erstelldat);
						 innerobject.Changeddatetime=formatdate.format(innerobject.Changeddatetime);
                                 d1.push(innerobject);
                        
                     });
                 }
				}
			});
			var jsonconv = new sap.ui.model.json.JSONModel();
			jsonconv.setData({
				"results":d1
			});
			this.getView().byId("Result").setModel(jsonconv);
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
