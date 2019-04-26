/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


BankAccount = {

    	ownerArray: [],
        /* array format: [[name,balance],[name,balance], ...] */

		//deposit method
        deposit: function (name,amount) {
            "use strict";
            var i;
            window.console.log('add deposit ' + amount +  ' for ' + name);
			i = this.getName(name);
			this.ownerArray[i][1] += Number(amount);
			  window.console.log(this.ownerArray[i]);
			this.getBalance(i);

        }, // end deposit method

	   //withdraw method
        withdraw: function (name,amount) {
            "use strict";
            var i;
			window.console.log('withdraw ' + amount +  ' for ' + name);
			i = this.getName(name);
			if (Number(amount) > this.ownerArray[i][1] ) {
				window.alert("Insuffient funds to withdraw amount $" + amount);
			} else {
				this.ownerArray[i][1] -= Number(amount);
			}
			  window.console.log(this.ownerArray[i]);

			this.getBalance(i);
		},

		//getName method
		getName: function(name) {
            "use strict";
            var i, newAcct, found = false;
           	window.console.log('find owner ' + name + ' in ownerArray');
			if (this.ownerArray.length < 1) {
				window.console.log('owner array is empty');
				newAcct = [name,0];
				this.ownerArray.push(newAcct);
				//window.console.log(this.ownerArray[0]);
				return 0;
			} else {
                // not empty array
				window.console.log('array not empty, find ' + name);
				for (i = 0; i < this.ownerArray.length; i += 1) {
					if (this.ownerArray[i][0] === name) {
						found = true;
						return i;
					};
				}; // end for loop
				if (!found) {
				    window.console.log('create new owner in array');
					let newAcct = [name,0];
					this.ownerArray.push(newAcct);
					  window.console.log(this.ownerArray);
					return this.ownerArray.length - 1;
					};
			}; // end else - array not empty
		},

    	//get balance method
		getBalance: function(i) {
			//window.console.log("Get Balance started, i =" + i + " " + this.ownerArray[i][0] + " " + this.ownerArray[i][1]);

			$("display").innerHTML = "<strong>" + this.ownerArray[i][0] + "</strong>, your acount Balance is now <strong> $"  + this.ownerArray[i][1] + " </strong>.";

	    }
    }; //end BankAccount object



window.addEventListener("load", function () {
    "use strict";
	var ownerName, withdrawAmount;

     $("btnName").addEventListener("click", function() {
        "use strict";

        ownerName = window.prompt('Enter your name');
		ownerName = ownerName.charAt(0).toUpperCase() + ownerName.slice(1).toLowerCase();
        window.console.log(ownerName);
		$("welcome").innerHTML = '<strong>' + ownerName + '</strong>, Welcome to Bank ... <br> Please choose a transaction:';
		BankAccount.getBalance(BankAccount.getName(ownerName));

		// DEPOSIT BUTTON EVENT LISTENER
		$("btnDeposit").addEventListener("click", function() {
			"use strict";
            var depositAmount;

			depositAmount = window.prompt('Enter Deposit Amount','0.00');
			window.console.log(ownerName,depositAmount,typeof(depositAmount),isNaN(depositAmount));

			if (isNaN(depositAmount)) {
				window.alert("Please ender valid number ex 999.99");
				depositAmount = 0;
			};

			BankAccount.deposit(ownerName,depositAmount);
			return depositAmount;

     	});

		// WITHDRAW BUTTON EVENT LISTENER
		$("btnWithdraw").addEventListener("click", function(e) {
			"use strict";

            var withdrawAmount;
            window.console.log(e.target);

			withdrawAmount = window.prompt('Enter Withdraw Amount','0.00');

			window.console.log(ownerName,withdrawAmount);
			if (isNaN(withdrawAmount)) {
				window.alert("Please ender valid number ex 999.99");
				depositAmount = 0;
			};
			BankAccount.withdraw(ownerName,withdrawAmount);
			return withdrawAmount;
		});

		window.console.log('owner name =',ownerName);
		return ownerName;
    });

}); // end "load"


