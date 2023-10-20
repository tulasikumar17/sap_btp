sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ehsm.controller.riskasses", {
            onInit() {
                var url1 = "/sap/opu/odata/SAP/ZTUL_ODATA_PRJ2_EHSM_PORTAL_SRV";
                var result1;
                var od1 = new sap.ui.model.odata.ODataModel(url1,true);
                od1.read("ZTULASI_ODATA_EHSM_RISK_ASMTSet?$filter=IRecno eq '1000001'",{
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
                this.getView().byId("RiskAsses").setModel(jsonconv);
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
    });
