var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const numeroPerfecto = {
    descripcion: "Encuentra los tres primeros numeros perfectos",
    perfectos: function(){

        var i=0;
        var j;
        var num=1;
        var divisores = [];
        var numPerfecto = [];
        var sum;
        var m = 0;
        var c;
        var div;
        var i=0;
        
        while (m<500) {
            sum = 0;
            c = 0;
            for (k = 1; k < num; k++) {
                div = num % k;
                if (div == 0) {
                    divisores[c]=k;
                    c++;
                }  
            }
            
            j = 0;
            if (c>0) {
                for (l of divisores) {
                    sum = sum + divisores[j];
                    j++;
                }
                console.log("suma del numero",num);
                console.log(divisores);
                console.log(sum);
            }

            j = 0;
            if (c>0) {
                for (l of divisores) {
                    divisores[j] = 0;
                    j++;
                }
                
            }
                  
            if (sum == num) {
                numPerfecto[i] = num;
                i++;
            }

            
            m++;
            num++;
        }
        resultado.value = numPerfecto[0] + ", " + numPerfecto[1] + ", " + numPerfecto[2];
    }

    

    
}


boton.addEventListener("click",numeroPerfecto.perfectos);