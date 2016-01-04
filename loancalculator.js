// JavaScript Document
function runCheck(loanAmt, yrs)
		{
			var result = 0;
			
			if(loanAmt < 1000 || isNaN(loanAmt))
			{
			result = 1;
			}
			if(yrs < 1 || yrs > 25 || isNaN(yrs))
			{
			result = 2;
			}
			if((loanAmt < 1000 || isNaN(loanAmt)) && (yrs < 1 || yrs > 25 || isNaN(yrs)))
			{
			result = 3;
			}   
			return result;
		}	
		
		function getInterestRate(num1)
		{
			var loanInput = num1;
			var interestRate = 4.25;
			if(loanInput > 100000)
			{
				interestRate = interestRate + 2.5;
			}
			else if(loanInput > 50000 && loanInput < 100001)
			{
				interestRate = interestRate + 3.5;
			}
			else if(loanInput > 10000 && loanInput < 50001)
			{
				interestRate = interestRate + 4.5;
			}
			else
			{
				interestRate = interestRate + 5.5;
			}
			return interestRate;
		}
		
		function getInterest(interest, loanAmt, yrs)
		{
			var interestAmount = yrs * (loanAmt / 100 * interest);
			return interestAmount;
		}
		
		function getMonthPremiums(totalLoan, loanPeriod)
		{
			var noOfMonths = loanPeriod * 12;
			var monthlyPrems = totalLoan / noOfMonths;
			return monthlyPrems;
		}
		
		function getProtectionPremiums(loanAmt)
		{
			protPrem = loanAmt * 0.05;
			return protPrem;
		}
		
		
		function formReset()
{
document.getElementById("calculator_form").reset();
}
		
		function resetFormat()
{
document.getElementById("loan").className = "inputbox";
document.getElementById("loanAdvice").className = "adviceHidden";
document.getElementById("period").className = "inputbox";
document.getElementById("periodAdvice").className = "adviceHidden";
document.getElementById("output1").innerHTML = "";
document.getElementById("output2").innerHTML = "";
document.getElementById("output3").innerHTML = "";
document.getElementById("output4").innerHTML = "";
}

		
		function buttonClicked()
		{
			resetFormat();
			var la = parseInt(document.getElementById("loan").value);
			var pd = parseInt(document.getElementById("period").value);
			var checkInputs = runCheck(la, pd);
			if(checkInputs == 0)
			{
				var intRate = getInterestRate(la);
				var intAmount = getInterest(intRate, la, pd);
				if(document.getElementById("protected").selectedIndex == 0)
				{
					var protAmount = getProtectionPremiums(la);
				}
				else
				{
					var protAmount = 0;
				}
				var totalAmount = la + intAmount + protAmount;
				var monthlyRepayments = getMonthPremiums(totalAmount, pd);
				document.getElementById("output1").innerHTML =  intRate + "%";
				document.getElementById("output2").innerHTML =  "&#163;" + intAmount.toFixed(2);
				document.getElementById("output3").innerHTML =  "&#163;" + totalAmount.toFixed(2);
				document.getElementById("output4").innerHTML =  "&#163;" + monthlyRepayments.toFixed(2);

			}
			else if(checkInputs == 1)
			{
			document.getElementById("loan").className = "inputerror";
			document.getElementById("loanAdvice").className = "adviceVisible";
			}
			else if(checkInputs == 2)
			{
			document.getElementById("period").className = "inputerror";
			document.getElementById("periodAdvice").className = "adviceVisible";
			}
			else if(checkInputs == 3)
			{
			document.getElementById("loan").className = "inputerror";
			document.getElementById("loanAdvice").className = "adviceVisible";
			document.getElementById("period").className = "inputerror";
			document.getElementById("periodAdvice").className = "adviceVisible";
			}
		}
	