const handler = async (m) => {
m.reply(`❮✅❯ » 𝘾𝙝𝙖𝙩 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!\n\n• 𝙏𝙤𝙙𝙤𝙨 𝙥𝙪𝙚𝙙𝙚𝙣 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩.`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.botAdmin = true
handler.admin = true
export default handler;
