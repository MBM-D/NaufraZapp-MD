import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `Hola usuario/a, gracias por estar aqui
bienvenido/a a *NaufraZapp-MD*

- Para ver el menu, use el comando:
*#menu*
`, m, fpay, )


user.pc = new Date * 1
}
