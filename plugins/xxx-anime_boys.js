import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime-boy/hot-${command}.json`)).data  
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `❮❌❯ » 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨.`
let haha = await res[Math.floor(res.length * Math.random())] 
   
conn.sendButton(m.chat, `⛩️😏 *_Boys_* 😏⛩️`.trim(), wm, haha, [['𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `${usedPrefix + command}`]], null, null, m)    
}
handler.command = handler.help = ['endeavor', 'takeda', 'asuma']
handler.tags = ['hots']
handler.private = true
handler.register = true
export default handler
