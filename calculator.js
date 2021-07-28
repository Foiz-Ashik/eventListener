      var num1 = document.getElementById('num1');
      var num2 = document.getElementById('num2');
      var answerField = document.getElementById('answerField');
      var form =  document.getElementById('percentageCalc');

      var myCalc = function() {                  
			var a = Number(document.getElementById("num1").value);
			var b = Number(document.getElementById("num2").value);
      var cal1 = a/b;
      var cal2 = cal1*100;
			alert(cal2);
      }

		form.addEventListener('submit', myCalc); {

    }
