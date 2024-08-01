let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`❮✅❯ » 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 𝙣𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧𝙖 𝙣𝙞𝙣𝙜𝙪𝙣 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|banexotic|banchat2$/i
handler.rowner = true
export default handler
