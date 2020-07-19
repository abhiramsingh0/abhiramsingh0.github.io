document.addEventListener('DOMContentLoaded', () => {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").textContent = num2;
    let button = document.getElementById("butn")
    button.disabled = true
    input = document.getElementById("input")
    input.value = ''
    input.addEventListener('keyup', () => {
        if(document.getElementById("input").value.length > 0){
            button.disabled = false
        }
        else{
            button.disabled = true
        }
    })
    input.addEventListener('mouseup', () => {
        if(document.getElementById("input").value.length > 0){
            button.disabled = false
        }
        else{
            button.disabled = true
        }
    })

    button.addEventListener("click", () => {
        let scoreObj = document.getElementById("score");
        let score = Number(scoreObj.textContent);
        let inputObj = document.getElementById("input");
        let answer = Number(inputObj.value);
        inputObj.focus()
        if (answer == num1+num2){
            scoreObj.innerHTML = score+1;
            if (score+1 > 0){scoreObj.style.color = 'lime';}
            else if (score+1 == 0){scoreObj.style.color = 'black';}
            else{scoreObj.style.color = 'red';}
            if (score+1 == 5){
                alert('You won!! Restarting.')
                scoreObj.innerHTML = 0;
                scoreObj.style.color = 'black';
            }
        }
        else{
            scoreObj.innerHTML = score-1;
            if (score-1 > 0){scoreObj.style.color = 'lime';}
            else if (score-1 == 0){scoreObj.style.color = 'black';}
            else{scoreObj.style.color = 'red';}
            if (score-1 == -5){
                alert('You lost!! Restarting.')
                scoreObj.innerHTML = 0;
                scoreObj.style.color = 'black';
            }
        }
        document.getElementById("input").value = ''
        num1 = Math.floor(Math.random() * 11);
        num2 = Math.floor(Math.random() * 11);
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").textContent = num2;
        button.disabled = true
    })
}
)