let handler = async(m, { conn, command }) => {

let text = `*『📣』El owner: @${m.sender.split`@`[0]} solicito una reunion, importante ingresar el grupo de admins.*

> *NaufraZapp-MD*`
m.reply('*『✅』Se ha enviado el mensaje para los owners del bot.*')
for (let [jid] of global.contactos.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '10000000', text, m)

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler