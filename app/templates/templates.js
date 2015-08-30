angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("list.html","<div class=\"list\">\n    <div class=\"row listHead\">\n        <div class=\"col-sm-1\">\n            <p>Broj</p>\n        </div>\n        <div class=\"col-sm-2\">\n            <p>Datum</p>\n        </div>\n        <div class=\"col-sm-7\">\n            <p>Naručitelj</p>\n        </div>\n        <div class=\"col-sm-2\">\n            <p>Predstavnik</p>\n        </div>\n    </div>\n    <div class=\"row item\" ng-repeat=\"order  in orders | filter:helper.search\" ng-click=\"singleView(order._id)\">\n        <div class=\"col-sm-1 cen\">\n            <p>{{order._id}}</p>\n        </div>\n        <div class=\"col-sm-2 cen\">\n            <p>{{order.datum | date: \"dd.MM.yyyy\"}}</p>\n        </div>\n        <div class=\"col-sm-7\">\n            <p>{{order.narucitelj}}</p>\n        </div>\n        <div class=\"col-sm-2 cen\">\n            <p>{{order.predstavnik}}</p>\n        </div>\n    </div>\n    <!-- <div class=\"row\">\n        <div class=\"pagination\">\n            <span ng-repeat=\"n in [] | range: pagination.numPages\">\n            <button ng-click=\"pagination.toPageId(n)\" ng-class=\"{current: n == pagination.page}\">{{n + 1}}</button>\n        </span>\n        </div>\n    </div> -->\n</div>\n");
$templateCache.put("login.html","<div id=\"login\" >\n    <img id=\"logo\" src=\"images/logo-small.png\"/>\n    <div class=\"login\">\n        <google-plus-signin clientid=\"149439861547-1iu9p7h6tqg0fn1pumi6c0amtj72tmn2.apps.googleusercontent.com\"></google-plus-signin>\n        <div class=\"btn\" ng-click=\"anonimusLogin()\">Anonimni login</div>\n    </div>\n</div>\n");
$templateCache.put("new.html","<div class=\"row new\">\n    <div class=\"col-sm-12\">\n        <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\">\n                <label for=\"datum\" class=\"col-sm-2 control-label\">Datum</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" ui-date=\"dateOptions\" class=\"form-control\" id=\"datum\" placeholder=\"Datum\" ng-model=\"item.datum\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"narucitelj\" class=\"col-sm-2 control-label\">Naručitelj</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"narucitelj\" placeholder=\"Naručitelj\" ng-model=\"item.narucitelj\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"adresa\" class=\"col-sm-2 control-label\">Adresa</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"adresa\" placeholder=\"Adresa\" ng-model=\"item.adresa\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"datumod\" class=\"col-sm-2 control-label\">Datum izvođenja: Od</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"datumod\" ui-date=\"dateOptions\" placeholder=\"Od dana\" ng-model=\"item.datumOd\">\n                </div>\n                <label for=\"datumdo\" class=\"col-sm-1 control-label\">Do</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"datumdo\" ui-date=\"dateOptions\" placeholder=\"Do dana\" ng-model=\"item.datumDo\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"predstavnik\" class=\"col-sm-2 control-label\">Predstavnik</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"predstavnik\" placeholder=\"Predstavnik\" ng-model=\"item.predstavnik\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"telefon\" class=\"col-sm-2 control-label\">Telefon</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"telefon\" placeholder=\"Telefon\" ng-model=\"item.telefon\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"napomena\" class=\"col-sm-2 control-label\">Napomena</label>\n                <div class=\"col-sm-9\">\n                    <textarea id=\"napomena\" class=\"form-control\" rows=\"5\" ng-model=\"item.napomena\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-2\">\n                    <button type=\"submit\" class=\"btn btn-default\" ng-click=\"save()\"><i class=\"fa fa-floppy-o\"></i> Pospremi</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");
$templateCache.put("single.html","<div class=\"row single\">\n    <div class=\"col-xs-12\">\n        <p><span>Izvještaj o radu:</span> {{order.datum | date: \"yyyy\"}}. / BR. {{order.datum | date: \"yyyy\"}}-{{order._id}}</p>\n        <p>\n            Naručitelj:\n            <input ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.narucitelj\"/>\n            <span ng-if=\"!helper.edit\">{{order.narucitelj}}</span></p>\n        <p>\n            Predstavnik:\n            <input ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.predstavnik\"/>\n            <span ng-if=\"!helper.edit\">{{order.predstavnik}}</span></p>\n        <p>\n            Telefon:\n            <input ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.telefon\"/>\n            <span ng-if=\"!helper.edit\">{{order.telefon}}</span></p>\n        <p id=\'napomena\'>Napomena:<span> {{order.napomena}}</span></p>\n        <div class=\"bor\"><div class=\"in\"></div></div>\n        <p>Fakturiranje iz : <span>Venti d.o.o.</span> </p>\n        <p>Adresa:\n            <input ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.adresa\"/>\n            <span ng-if=\"!helper.edit\">{{order.adresa}}</span>\n        </p>\n        <p class=\"dates\">Posao obavljan od:\n             <span ng-if=\"!helper.edit\">{{order.datumOd | date: \"dd.MM.yyyy\"}}</span>\n            <input ui-date=\"dateOptions\" ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.datumOd\"/>\n            do:\n             <span ng-if=\"!helper.edit\"> {{order.datumDo | date: \"dd.MM.yyyy\"}}</span>\n             <input ui-date=\"dateOptions\" ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.datumDo\"/>\n        </p>\n        <p>U Varaždinu,\n            <input ui-date=\"dateOptions\" ng-if=\"helper.edit\" type=\"text\" ng-model=\"order.datum\"/>\n            <span ng-if=\"!helper.edit\">{{order.datum | date: \"dd.MM.yyyy\"}}</span>\n        </p>\n    </div>\n    <div class=\"col-xs-12\" ng-if=\"!helper.edit\">\n        <ul>\n            <li ng-click=\"reuse(order._id)\"><i class=\"fa fa-files-o\"></i> Koristi</li>\n            <li ng-click=\"edit(true)\"><i class=\"fa fa-pencil\"></i> Editiraj</li>\n            <li ng-click=\"downloadFile()\"><i class=\"fa fa-download\"></i> Preuzmi</li>\n        </ul>\n    </div>\n    <div class=\"col-xs-12\" ng-if=\"helper.edit\">\n        <ul>\n            <li ng-click=\"edit(false)\"><i class=\"fa fa-floppy-o\"></i> Pospremi</li>\n        </ul>\n    </div>\n</div>\n");}]);