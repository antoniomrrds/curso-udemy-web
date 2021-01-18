const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 6',function() {
    console.log('Executando tarefa 1!',new Date().getSeconds())
})//primeiro e segundos, minutos ,horas,dia do mes, mes,dia da semana 

setTimeout(function(){
    tarefa1.cancel()//para cancelar a tarefa usasse o .cancel 
    console.log('Cancelando a Tarefa 1!')
},20000)//tempo ta em milisegundos
//setImmediate
//setInterval
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek= [new schedule.Range(1,6)]
regra.hour = 9
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra,function(){

    console.log('Executando Tarefa 2!',new Date().getSeconds())
})