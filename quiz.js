let question = 1;
        let score = 0;
        let answered1 = false, answered2 = false, answered3 = false, answered4 = false, answered5 = false;

        function checkAnswer(q, button, correct) {
            switch (q) {
              case 1: if (answered1) return; answered1 = true; break;
              case 2: if (answered2) return; answered2 = true; break;
              case 3: if (answered3) return; answered3 = true; break;
              case 4: if (answered4) return; answered4 = true; break;
              case 5: if (answered5) return; answered5 = true; break;
            }

            let options = document.getElementById("q" + q).getElementsByTagName("button");
            for (let i = 0; i < options.length; i++) {
                options[i].style.backgroundColor = "";
            }

            button.style.backgroundColor = correct ? "lightgreen" : "lightcoral";
            if (correct) score++;
        }

        function next() {
            if (question < 5) {
                document.getElementById("q" + question).style.display = "none";
                question++;
                document.getElementById("q" + question).style.display = "block";
            }
        }

        function prev() {
            if (question > 1) {
                document.getElementById("q" + question).style.display = "none";
                question--;
                document.getElementById("q" + question).style.display = "block";
            }
        }

        function showScore() {
            document.getElementById("result").innerText = "Your score: " + score + "/5!";
        }
