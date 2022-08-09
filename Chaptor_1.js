//LOL, i started coding thinking it's an excercise w/0 solution....

const TAX_RATE = 0.1;
const accessPrice = 10;

function print(amt) {
console.log(String(amt));
}

phonePrice = Number(prompt("phone price ? "));
print(phonePrice);

phonePrice += phonePrice * TAX_RATE;
var finalPhonePrice = phonePrice;
print("Final Phone Price: $" + String(finalPhonePrice));


var bb = prompt("Enter your bank balance ");
print(bb);

var purchaseCount = 0;
var billAmt = 0;
var accessCount = 0;

function calculateBillAmt(purchaseCount, accessCount) {
	var total = (finalPhonePrice * purchaseCount);
	total += accessCount*accessPrice;
	return total;
}

var addAccess = "ask";

var exit = "done";

while(true) {
	if (bb >= finalPhonePrice) {
		bb -= finalPhonePrice;
		purchaseCount +=1;
		addAccess = prompt("Want to buy access. as well? please reply Y/N");
		if(addAccess === "Y") {
			if (bb > accessPrice) {
				accessCount += 1;
				bb -= accessPrice;
			}
			else {
				console.log("low balance");
				break;
			}
		}
		exit = prompt("are you done? please reply Y/N");
		if(exit === "Y") {
			print("Your bank balance now: $" + String(bb));;
			console.log("Your total bill amt. is: " + String(calculateBillAmt(purchaseCount, accessCount)));
			break;
		}
		print("Your bank balance now: $" + String(bb));;
	}
	else {
		console.log("low balance");
		break;
	}
}

console.log("Your total bill amt. is: " + String(calculateBillAmt(purchaseCount, accessCount)));