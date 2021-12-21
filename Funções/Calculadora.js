function calculadora(){
    const operacao = prompt("Escolha uma operação:\n\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão Real\n 5-Divisão Inteira\n 6-Potenciação");

    if(!operacao || operacao > 6){
        alert("Operação Inválida, tente novamente!");
        calculadora();
    }else{
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("\nInsira o segundo valor: "));
        let resultado;

        if(!n1 || !n2){
            alert("Parâmentros inválidos");
            calculadora();
        }else{
            function soma (){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function subtracao (){
                resultado = n1 - n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function multiplicacao (){
                resultado = n1 * n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divisaoReal (){
                resultado = n1 / n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divisaoInt (){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
        
            function potenciacao (){
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            
        function novaOperacao() {
            let opcao = prompt("Deseja fazer uma nova operação?\n\n 1-SIM\n 2-NÃO");
        
            if(opcao == '1'){
                calculadora();
            }else if(opcao == '2'){
                alert("Até mais!!");
            }else{
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        
        }
        
            switch(operacao){
                case '1': 
                    soma();
                    break;
        
                case '2': 
                    subtracao();
                    break;
        
                case '3': 
                    multiplicacao();
                    break;
        
                case '4': 
                    divisaoReal();
                    break;
        
                case '5': 
                    divisaoInt();
                    break;
        
                case '6': 
                    potenciacao();
                    break;
        
                default: 
                    alert("Insira um valor válido!");
            }   
        
        }

    }    
            
}

calculadora();
