let Presence = (await import(global.baileys)).default
let handler  = async (m, { conn, args, text }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
if (!text) return conn.reply(m.chat, `❮❕❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
conn.reply(m.chat, `❮✅❯ » 𝙉𝙤𝙢𝙗𝙧𝙚 𝙜𝙧𝙪𝙥𝙖𝙡 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`, fkontak, m)
} catch (e) { 
throw `El nombre del grupo no debe de contener mas de 100 características.`
}}
handler.command = /^(setname|newnombre|nuevonombre)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler 
