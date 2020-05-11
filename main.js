        function showresults() {
            var system = document.getElementById("system").value;
            //stats
            var gender = parseInt(document.getElementById("gender").value);
            var age = parseInt(document.getElementById("age").value);
            var activity = parseInt(document.getElementById('activity').value);
            if (system == "Imperial") {
                var height = (parseInt(document.getElementById("height-1").value) * 12 + parseInt(document.getElementById("height-2").value)) * 2.54;
                var weight = parseInt(document.getElementById("weight").value) / 2.205;
            }
            if (system == "Metric") {
                var height = parseInt(document.getElementById("height-1").value) * 100 + parseInt(document.getElementById("height-2").value);
                var weight = parseInt(document.getElementById("weight").value);
            }
            // is filled?
            if(age.toString() == "NaN" || weight.toString() == "NaN" || height.toString() == "NaN"){
               document.getElementById("warning-slot").style.display = "block";
            }else{
               document.getElementById("warning-slot").style.display = "none";
            // bmi
            var bmi = (weight / (height * height)) * 10000;
            if (bmi < 18.5) {
                var level = "Underweight";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                var level = "Normal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                var level = "Overweight";
            } else if (bmi >= 30) {
                var level = "Obese";
            }
            // bmr
            // 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day)
            var bmr = Math.round(((10 * weight + 6.25 * height - 5 * age + gender) * activity) / 1000);
            //update info
            document.getElementById("bmi-number").innerHTML = bmi.toFixed(1).toLocaleString();
            document.getElementById("bmi-level").innerHTML = level;
            document.getElementById("bmr-result").innerHTML = bmr.toLocaleString();
            document.getElementById("result").style.display = "block";
            }
        }
        function updatesystem() {
            var system = document.getElementById("system").value;
            if (system == "Imperial") {
                document.getElementById("weight-measurement-system").innerHTML = "lb(s)";
                document.getElementById("height-1").placeholder = "Height (ft)";
                document.getElementById("height-2").placeholder = "Height (in)";
            } else if (system == "Metric") {
                document.getElementById("weight-measurement-system").innerHTML = "kg(s)";
                document.getElementById("height-1").placeholder = "Height (m)";
                document.getElementById("height-2").placeholder = "Height (cm)";
            }
        }