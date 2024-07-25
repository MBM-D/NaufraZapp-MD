var handler = async (m, { conn, usedPrefix, command}) => {

let Reglas = `
• ✖️✨ 𝙍𝙀𝙂𝙇𝘼𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏 ✨✖️ •

*⏭️Aqui tienes algunas reglas y consejos de uso para tu bot👇*

☞Este bot puede ser utilizado por cualquier usuario del grupo 
☞No se debe mencionar a este bot en un grupo
☞No debes hacer llamdas ni video llamadas al bot
☞Para evitar que el not de vaya a soporte recomiendo no sobre pasar los 300 comandos diarios con el bot
☞No agregar el bot a grupos sin consentimiento 
☞Si quieres este bot en tu grupo activo 24/7 puedes hablarme al siguiente número: https://wa.me/message/KIUNXLJZRMSJK1
☞Este bot no almacena información importante de ningun tipo de persona
☞Si un comando no funciona o da error, dejar de usarlo y reportarlo con los creadores del bot
☞Evitar utilizar el comando *add* para agregar gente, ya que eso también causa que el bot se suspendido

💥Para mas información del bot les invito a seguir su canal oficial en WhatsApp💥
`
.trim()
await conn.reply(m.chat, Reglas, fkontak, m )

}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp

handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
