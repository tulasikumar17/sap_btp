sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("quality.controller.login", {
            onInit: function () {

            },
            onClick:function(){
                var url = "/sap/opu/odata/SAP/ZTUL_ODATA_PRJ1_QUALITY_PORTAL_SRV/";
                     var user=this.getView().byId("user").getValue();
                    var pass=this.getView().byId("pass").getValue();
                        window.console.log(pass);
                     var uri ="Zpassword='" + pass + "',Zusername='" + user + "'" ;
                     var a;
                     var oD = new sap.ui.model.odata.ODataModel(url,true);
                     oD.read("/ZTUL_ODATA_QTY_LOGINSet(" + uri + ")", {
                    
                     context: null,
                     urlParameter: null,
                     async: false,
                     success: function(oData, oResponse) {
                    
                     a = oData.Message;
                     }.bind(this)
                     });
                     window.console.log(a);
                     if (a ==='SUCCESS')
                     {
                    window.console.log("login success");
                    var oR = sap.ui.core.UIComponent.getRouterFor(this);
                    oR.navTo("Route_dash");
                    
                     }
                     else
                     {
                        window.console.log("login failed");
                     }
            }
           
        });
    });
