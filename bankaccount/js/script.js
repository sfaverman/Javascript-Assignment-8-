/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

BankAccount = {

    	ownerArray: [], // format: [[name,balance],[name,balance], ...]

		//deposit method
        deposit: function (name,amount) {
			window.console.log('add deposit ' + amount +  ' for ' + name);
			let i = this.getName(name);
			this.ownerArray[i][1] += Number(amount);
			window.console.log(this.ownerArray[i]);
			this.getBalance(i);

        }, // end deposit method

	   //withdraw method
        withdraw: function (name,amount) {
			window.console.log('withdraw ' + amount +  ' for ' + name);
			let i = this.getName(name);
			if (Number(amount) > this.ownerArray[i][1] ) {
				window.alert("Insuffient funds to withdraw amount $" + amount);
			} else {
				this.ownerArray[i][1] -= Number(amount);
			}
			window.console.log(this.ownerArray[i]);
			this.getBalance(i);
			//$("display").innerHTML = "<strong>" + this.ownerArray[i][0] + "</strong>, your acount Balance is now <strong>$"  + this.ownerArray[i][1] + " </strong>.";
		},

		//getName method
		getName: function(name) {
			window.console.log('find owner ' + name + ' in ownerArray');
			if (this.ownerArray.length < 1) {
				window.console.log('owner array is empty');
				let newAcct = [name,0];
				this.ownerArray.push(newAcct);
				window.console.log(this.ownerArray[0]);
				return 0;
			} else {
				var found = false;
				window.console.log('array not empty, find ' + name);
				for ( var i = 0; i < this.ownerArray.length; i += 1) {
					if (this.ownerArray[i][0] === name) {
						found = true;
						return i;
						};
				};
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
			$("display").innerHTML = "<strong>" + this.ownerArray[i][0] + "</strong>, your acount Balance is now <strong>$"  + this.ownerArray[i][1] + " </strong>.";
			//$("display").innerHTML = name + " has a balance of "  + balance;

	    }
    }; //end BankAccount object



window.addEventListener("load", function () {
    "use strict";
	var ownerName, depositAmount, withdrawAmount;

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
			depositAmount = window.prompt('Enter Deposit Amount','999.99');
			window.console.log(ownerName,depositAmount);
			BankAccount.deposit(ownerName,depositAmount);
			return depositAmount;

     	});
		// WITHDRAW BUTTON EVENT LISTENER
		$("btnWithdraw").addEventListener("click", function() {
			"use strict";
			withdrawAmount = window.prompt('Enter Withdraw Amount','999.99');
			window.console.log(ownerName,withdrawAmount);
			BankAccount.withdraw(ownerName,withdrawAmount);
			return withdrawAmount;
		});
		window.console.log('owner name =',ownerName);
		return ownerName;
    });



}); // end "load"


