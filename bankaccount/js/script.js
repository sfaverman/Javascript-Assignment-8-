/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var ownerName = "John", depositAmount ="$25,000", withdrawAmount;
window.addEventListener("load", function () {
    "use strict";

    $("btnName").onclick = function() {
        "use strict";
        ownerName = window.prompt('Enter your name');
        window.console.log(ownerName);
    };
    $("btnDeposit").onclick = function() {
        "use strict";
        depositAmount = window.prompt('Enter Deposit Amount','999.99');
        window.console.log(depositAmount);

    };
    $("btnWithdraw").onclick = function() {
        "use strict";
        withdrawAmount = window.prompt('Enter Withdraw Amount','999.99');
        window.console.log(withdrawAmount);
    };

    $("display").innerHTML = ownerName + " has a balance of "  + depositAmount;

});


