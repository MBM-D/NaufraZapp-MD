import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `Hola usuario/a, gracias por estar aqui
bienvenido/a a *NaufraZapp-Beta*

❤️ Tu nombre:
• ${nombre}

👀 ¿Quieres ser un sub bot?
puedes usar el comando:

Por codigo de 8 dígitos:
*#serbot --code*

Por código QR:
*#serbot*

Si quieres contactar con soporte, o con el creador, usa estos comandos:

Creador:
*#naufrago*

Soporte NaufraZapp-Beta:
*#soporte*
`, m, fpay, )


user.pc = new Date * 1
}
