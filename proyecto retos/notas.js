var notas_ar = [];
        var n = 0;

        function guardar() {
            var nota = parseInt(notas.value);
            n++;
            console.log(nota);
            if (nota >= 0 && nota <= 100) {
                notas_ar.push (nota);
                console.log(notas_ar);
            } else {
                alert("Nota ingresada debe estar entre 0 y 100");
            }   
        }

        function calcular() {
            var total = 0;
            var media = 0;
            var resultado = document.getElementById("resultados"); 
            var media1 = document.getElementById("media1");
            var resultado1 = document.getElementById("resultado1");

            j=0;

            for (var i of notas_ar) {
                total= total + notas_ar[j];
                j++;
                resultado.innerHTML+="Nota "+ j +" es:"+ notas_ar[j-1]+"<br>";
                
            }
            if (total>=0) {
                media=total/j;
                console.log(media);
            } else {
                alert("No hay notas para calcular");
            }

            media1.innerHTML = media;

            if (media>=0 && media<=59) 
            {
                puntuacion1.innerHTML="E";
                console.log(puntuacion1.value);
            } 
            else if (media>=60 && media<=69) 
            {
                puntuacion1.innerHTML="D";
            } 
            else if (media>=70 && media<=79) 
            {
                puntuacion1.innerHTML="C";
            } 
            else if (media>=80 && media<=89) 
            {
                puntuacion1.innerHTML="B";
            } 
            else if (media>=90 && media<=100)
            {
                puntuacion1.innerHTML="A";
            }
            else{
                alert("Media no esta en el rango 0-100");
            }
            
        
    }