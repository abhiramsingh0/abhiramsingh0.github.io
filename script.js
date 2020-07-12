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
        let score = Number(document.getElementById("score").textContent);
        let answer = Number(document.getElementById("input").value);
        if (answer == num1+num2){
            document.getElementById("score").innerHTML = score+1;
        }
        else{
            document.getElementById("score").innerHTML = score-1;
        }
        if (score == 4){
            alert('You won!! Restarting.')
            document.getElementById("score").innerHTML = 0;
        }
        else if (score == -4){
            alert('You lost!! Restarting.')
            document.getElementById("score").innerHTML = 0;
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