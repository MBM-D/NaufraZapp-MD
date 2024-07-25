let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.reply(m.chat, `❮❕❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧 𝙡𝙖 𝙙𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙘𝙪𝙖𝙣𝙙𝙤 𝙪𝙣 𝙥𝙖𝙧𝙩𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙨𝙚 𝙨𝙖𝙡𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎:\n@user (Mensionar al usuario)\n\n• 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙐𝙎𝙊:\n${usedPrefix + command} Adios @user, tenga lindo dia 👋🏻`, fkontak, m)  
} else throw `❮✅❯ » 𝙇𝙖 𝙙𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙛𝙪𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`
}
handler.command = ['setbye', 'despedida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.register = true
export default handler
