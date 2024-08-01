let handler = async (m, { conn, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
conn.reply(m.chat, `❮✅❯ » 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`, m)
}
handler.command = /^setdesk|setdesc|newdesc|descripción|descripcion$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
