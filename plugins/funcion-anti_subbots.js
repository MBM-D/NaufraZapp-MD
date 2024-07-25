//Creado por @MultiBot-OFC
//github: https://github.com/MultiBot-OFC

import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];
        
         if (!chat.antiExoticobot) {
            return
        }
        

        let botJid = global.conn.user.jid

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))
            
          if (isBotPresent) {
                setTimeout(async () => {
                    await m.reply(`❮👋🏻❯ » Como sub bot de NaufraZapp-MD, me saldre del grupo, tengan lindo dia.`)
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}
