/**/
// Retornando a Hora

let horas = new Date()
document.write(horas.getHours())
document.write("<br><br>")

// Retornando os minutos

let minutos = new Date()
document.write(horas.getMinutes())
document.write("<br><br>")

// Retornando os segundos

let segundos = new Date()
document.write(horas.getSeconds())
document.write("<br><br>")


// Setando a Hora

let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours())
document.write("<br><br>")

// Setando os minutos

let minutos1 = new Date()
minutos1.setMinutes(minutos1.getMinutes()+3)
document.write(minutos1.getMinutes())
document.write("<br><br>")

// Setando os segundos

let segundos1 = new Date()
segundos1.setSeconds(segundos1.getSeconds()+3)
document.write(segundos1.getSeconds())
document.write("<br><br>")

// Usando o setTimeout

function bem_vindo(){
    alert("Bem Vindo")
}
setTimeout(bem_vindo,1000)


