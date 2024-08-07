
import ws from 'ws';
async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map(conn => conn.user)])]
  let b = users.map((v, i) => `_*${i + 1}.*_ *${v.name}*\nwa.me/${v.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}bot`).join('\n')
 m.reply(`🗃️ 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗦𝗨𝗕 𝗕𝗢𝗧𝗦 🗃️\n\n- *Sub Bots activos:*\n•${users.length}\n\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n\n${b}`) 
  
}
handler.help = ['botlist']
handler.tags = ['botnz']
handler.command = ['listbot', 'listbots', 'bots', 'botsnz', 'botlist'] 

export default handler
