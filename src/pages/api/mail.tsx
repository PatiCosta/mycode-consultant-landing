const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req,res) => {
   console.log('conectamos na api')
   console.log(process.env.SENDGRID_API_KEY)
   let sendTest = 0
   const body = JSON.parse(req.body)
   
   const message = `
   Nome: ${body.name}\r\n
   Número: (${body.ddd}) ${body.number}\r\n
   Email: ${body.email}\r\n
   Cidade: ${body.city}\r\n
   Estado: ${body.state}
   `;
   const data = {
      to:'patricia@awer.co',
      from: 'contato@awer.co',
      subject: `MY CODE - SEJA UM(A) CONSULTOR(A)`,
      text: message,
      html: message.replace(/\r\n/g,'<br>')
   }
   console.log("We're here")

   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })
   
   const message2 = 
   `Olá ${body.name} ☺ \r\n \r\n A My Code agradece o seu contato, retornaremos o mais breve possível!`

   const data2 = {
      to:`${body.email}`,
      from: 'contato@awer.co',
      subject: `MY CODE - SEJA UMA CONSULTORA`,
      text: message2,
      html: message2.replace(/\r\n/g,'<br>')
   }
   console.log("We're here 2")

   await mail.send(data2).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data2), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })

   console.log('Finalizando processo...')
   res.status(200).json({status: 'Ok'})
   // Criar lógica do If status not 200, retry
}