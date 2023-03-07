let input = document.querySelector("input");
input.readOnly = true;

let btns = document.querySelectorAll("button");

let calcular = (operacao) =>  {
   return eval(operacao);
};

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.dataset.button !== "calcular") {
            input.value += btn.value;
        }else {
            let calculo = calcular(input.value);
            input.value = calculo;
        }

        if(btn.dataset.button === "reset"){
            if(input.value.length){
                input.value = input.value.substring(0, input.value.length -1);
            }
        }
    })
})



