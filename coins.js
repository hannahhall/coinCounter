var coinPurse= {};
var leftover;

coinCounter= function(amount) {
	if (amount%0.25===0) {
		coinPurse.quarters= amount/0.25;
	} else {
		coinPurse.quarters= Math.floor(amount/0.25);
		leftover= amount - (coinPurse.quarters*0.25);
		leftover= leftover.toFixed(2);
	}
	if (leftover%0.10===0 && leftover>=0.10) {
		coinPurse.dimes= Math.floor(leftover/0.10);
	} else if (leftover>=0.10) {
		coinPurse.dimes= Math.floor(leftover/0.10);
		leftover-= coinPurse.dimes*0.10;
		leftover= leftover.toFixed(2);
	}
	if (leftover%0.05===0 && leftover>=0.05) {
		coinPurse.nickes= Math.floor(leftover/0.05);
	} else if (leftover>=0.05) {
		coinPurse.nickles= Math.floor(leftover/0.05);
		leftover-= coinPurse.nickles*0.05;
		leftover= leftover.toFixed(2);
	}
	if (leftover<0.05) {
		coinPurse.penny= Math.floor(leftover/0.01);
	}
}

coinCounter(2.34);
console.log(coinPurse);

