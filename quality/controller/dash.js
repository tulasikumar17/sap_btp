sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("quality.controller.dashboard", {
        onInit() {
        },
        onClick1:function(){
            window.console.log("login success");
            var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("Route_incident");
    },
    onClick2:function(){
            window.console.log("login success");
            var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("Route_inspection");
    },
    onClick3:function(){
            window.console.log("login success");
            var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("Route_result");
    },
    onClick4:function(){
        window.console.log("login success");
        var oR = sap.ui.core.UIComponent.getRouterFor(this);
        oR.navTo("Route_usagerec");
},
    logout:function(){
            var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("Route_login");
    }
      });
    }
  );
