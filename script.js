var scoreIncome = 0;
var scoreExpense = 0;
var expense_percentage = 0;
var income_item = 0;
var expense_item = 0;
document.getElementById("btn-light").addEventListener("click", addItem);

var d = new Date();
d.setFullYear(2020);
document.getElementById('setDate').innerHTML = d;

function addItem(){
	//Math.round((this.value / totalIncome) * 100)
	if(document.getElementById('plus-icon').selected === true){
		if(document.getElementById('add_val').value > 1){
			document.getElementById('demo_val_inc').style.backgroundColor = 'green';
			var description = document.getElementById('add_desc').value.charAt(0).toUpperCase() + document.getElementById('add_desc').value.slice(1);
			var value = parseFloat(document.getElementById('add_val').value);
			document.getElementById("demo_desc_inc").innerHTML += description + '<br/>';
			var a = document.getElementById("demo_val_inc").innerHTML += value + '<br/>';
			scoreIncome += value;
			document.getElementById('income-amount').innerHTML = scoreIncome + '.00';
			document.getElementById('add_desc').value = '';
			document.getElementById('add_val').value = '';
		}
		else{
			console.log('pressed');
		}
		
	}
	else if(document.getElementById('minus-icon').selected === true && document.getElementById('add_val').value && scoreIncome > 0){
			document.getElementById('demo_val_exp').style.backgroundColor = 'red';
			var description = document.getElementById('add_desc').value.charAt(0).toUpperCase() + document.getElementById('add_desc').value.slice(1);
			var value = parseFloat(document.getElementById('add_val').value);
			document.getElementById("demo_desc_exp").innerHTML += description + '<br/>';
			expense_percentage = Math.round((value / (scoreIncome - scoreExpense)) * 100);
			document.getElementById('add_desc').value = '';
			document.getElementById('add_val').value = '';
		
		if(scoreIncome - scoreExpense >= 0){
			document.getElementById('span-expense').value = expense_percentage;
			document.getElementById("demo_val_exp").innerHTML += value + ' ' + '(' + expense_percentage + '%' +  ')' + '<br/>';
		}
		else{
			document.getElementById("demo_val_exp").innerHTML += value + ' ' + '(' + '0%' + ')' + '<br/>';
		}
		scoreExpense += value;
		document.getElementById('expense-amount').innerHTML = scoreExpense + '.00';

	}
	budgetControl();
}

function budgetControl(){
	var avail_bug;
	avail_bug = scoreIncome - scoreExpense;
	if(avail_bug > 0){
		document.getElementById('available-budget').innerHTML = avail_bug + '.00';
	}
	else{
		document.getElementById('available-budget').innerHTML = '-' + '0' + '.00';
	}
}

document.getElementById("del-btn").addEventListener("click", myFunction);
function myFunction() {
	location.reload();
}