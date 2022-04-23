    let q1_1 = document.querySelector('#q1_1')
    let q1_2 = document.querySelector('#q1_2')
    let q1_3 = document.querySelector('#q1_3')
    let q1_4 = document.querySelector('#q1_4')
    let q1_5 = document.querySelector('#q1_5')

    let q2_1 = document.querySelector('#q2_1')
    let q2_2 = document.querySelector('#q2_2')
    let q2_3 = document.querySelector('#q2_3')
    let q2_4 = document.querySelector('#q2_4')
    let q2_5 = document.querySelector('#q2_5')

    let q3_1 = document.querySelector('#q3_1')
    let q3_2 = document.querySelector('#q3_2')
    let q3_3 = document.querySelector('#q3_3')
    let q3_4 = document.querySelector('#q3_4')
    let q3_5 = document.querySelector('#q3_5')

    let q4_1 = document.querySelector('#q4_1')
    let q4_2 = document.querySelector('#q4_2')
    let q4_3 = document.querySelector('#q4_3')
    let q4_4 = document.querySelector('#q4_4')
    let q4_5 = document.querySelector('#q4_5')

    let q5_1 = document.querySelector('#q5_1')
    let q5_2 = document.querySelector('#q5_2')
    let q5_3 = document.querySelector('#q5_3')
    let q5_4 = document.querySelector('#q5_4')
    let q5_5 = document.querySelector('#q5_5')

    let q6_1 = document.querySelector('#q6_1')
    let q6_2 = document.querySelector('#q6_2')
    let q6_3 = document.querySelector('#q6_3')
    let q6_4 = document.querySelector('#q6_4')
    let q6_5 = document.querySelector('#q6_5')

    let q7_1 = document.querySelector('#q7_1')
    let q7_2 = document.querySelector('#q7_2')
    let q7_3 = document.querySelector('#q7_3')
    let q7_4 = document.querySelector('#q7_4')
    let q7_5 = document.querySelector('#q7_5')

    let q8_1 = document.querySelector('#q8_1')
    let q8_2 = document.querySelector('#q8_2')
    let q8_3 = document.querySelector('#q8_3')
    let q8_4 = document.querySelector('#q8_4')
    let q8_5 = document.querySelector('#q8_5')

    let resultado = document.querySelector('#resultado')
 let enviar = document.querySelector('#enviar')
 enviar.addEventListener('click', enviarResposta)


 function enviarResposta(){
     let pontos = 0
     let estrelas = " estrelas."

     if (q1_1.checked){
         pontos += 0.5
     } if (q1_2.checked){
         pontos += 0.4
     } if (q1_3.checked){
         pontos += 0.3
     } if (q1_4.checked){
         pontos += 0.2
     } if (q1_5.checked){
         pontos += 0.1
     }


     if (q2_1.checked){
        pontos += 0.5
    } if (q2_2.checked){
        pontos += 0.4
    } if (q2_3.checked){
        pontos += 0.3
    } if (q2_4.checked){
        pontos += 0.2
    } if (q2_5.checked){
        pontos += 0.1
    } 


     if (q3_1.checked){
        pontos += 0.5
    } if (q3_2.checked){
        pontos += 0.4
    } if (q3_3.checked){
        pontos += 0.3
    } if (q3_4.checked){
        pontos += 0.2
    } if (q3_5.checked){
        pontos += 0.1
    } 


    if (q4_1.checked){
        pontos += 0.5
    } if (q4_2.checked){
        pontos += 0.4
    } if (q4_3.checked){
        pontos += 0.3
    } if (q4_4.checked){
        pontos += 0.2
    } if (q4_5.checked){
        pontos += 0.1
    } 


    if (q5_1.checked){
        pontos += 0.5
    } if (q5_2.checked){
        pontos += 0.4
    } if (q5_3.checked){
        pontos += 0.3
    } if (q5_4.checked){
        pontos += 0.2
    } if (q5_5.checked){
        pontos += 0.1
    } 


    if (q6_1.checked){
        pontos += 0.5
    } if (q6_2.checked){
        pontos += 0.4
    } if (q6_3.checked){
        pontos += 0.3
    } if (q6_4.checked){
        pontos += 0.2
    } if (q6_5.checked){
        pontos += 0.1
    } 


    if (q7_1.checked){
        pontos += 0.5
    } if (q7_2.checked){
        pontos += 0.4
    } if (q7_3.checked){
        pontos += 0.3
    } if (q7_4.checked){
        pontos += 0.2
    } if (q7_5.checked){
        pontos += 0.1
    } 


    if (q8_1.checked){
        pontos += 0.5
    } if (q8_2.checked){
        pontos += 0.4
    } if (q8_3.checked){
        pontos += 0.3
    } if (q8_4.checked){
        pontos += 0.2
    } if (q8_5.checked){
        pontos += 0.1
    } 

    if (pontos <= 1){
        estrelas = " estrela."
    } if (pontos > 1){
        estrelas = " estrelas."
    }
    
     resultado.innerHTML = ("Obrigada pela avaliação. Você avaliou nosso produto em " + pontos * 1 + estrelas)
 }