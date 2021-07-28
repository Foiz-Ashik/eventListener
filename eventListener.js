      var num1 = document.getElementById('num1');
      var num2 = document.getElementById('num2');
      var answerField = document.getElementById('answerField');
      var form =  document.getElementById('percentageCalc');

      var myCalc = function() {                  
			var a = Number(document.getElementById("num1").value);
			var b = Number(document.getElementById("num2").value)/100;
			alert(a*b);
      }

		form.addEventListener('submit', myCalc)
		{
          
		}