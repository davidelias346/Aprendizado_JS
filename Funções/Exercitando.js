function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);

Console.log(soma2(1));
Console.log(soma2(5));
Console.log(soma2(6));