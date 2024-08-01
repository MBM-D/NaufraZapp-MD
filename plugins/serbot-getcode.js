import fs from "fs"
let handler = async (m, { conn, usedPrefix }) => {
    
    let session = m.sender.split('@')[0]
    if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `❌ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙚𝙨 𝙥𝙖𝙧𝙖 𝙎𝙪𝙗 𝘽𝙤𝙩𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨...`, m)
    else {
    await conn.reply(m.chat, `✅ 𝙉𝙪𝙚𝙫𝙤 𝙘𝙤𝙙𝙞𝙜𝙤 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝙨𝙪 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.`, m)
    global.conn.reply(conn.user.jid, `${usedPrefix}serbot ${Buffer.from(fs.readFileSync("./NaufraBotSession/" + session + "/creds.json"), "utf-8").toString("base64")}`, m)

    }
}
handler.help = ['getcode']
handler.tags = ['bebot']
handler.command = ['getcode']
handler.owner = true

export default handler
