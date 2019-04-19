/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var ownerName = "John",
    depositAmount = 0,
    withdrawAmount = 0;


function bankAccount(ownerName,trans) {
    "use strict";
    var balance = 0, owner = ownerName;

    var Account = {
        //deposit method
        deposit: function (depositAmount) {
            balance += depositAmount;
            $("display").innerHTML = owner + " has a balance of "  + balance;
        },
        //withdraw method
        withdraw: function (withdrawAmount) {
            balance -= withdrawAmount;
            $("display").innerHTML = owner + " has a balance of "  + balance;
        }
    }; //end Account object

    if (trans === "deposit") {
        Account.deposit(depositAmount);
    } else if (trans === "withdraw") {
        Account.withdraw(withdrawAmount);
    }
     $("display").innerHTML = owner + " has a balance of "  + balance;

    return Account;
}
window.addEventListener("load", function () {
    "use strict";

    $("btnName").onclick = function() {
        "use strict";
        ownerName = window.prompt('Enter your name');
        window.console.log(ownerName);
        bankAccount(ownerName);
    };
    $("btnDeposit").onclick = function() {
        "use strict";
        depositAmount = window.prompt('Enter Deposit Amount','999.99');
        window.console.log(depositAmount);
        bankAccount(ownerName,"deposit");

    };
    $("btnWithdraw").onclick = function() {
        "use strict";
        withdrawAmount = window.prompt('Enter Withdraw Amount','999.99');
        window.console.log(withdrawAmount);
        bankAccount(ownerName,"withdraw");
    };


});


