import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} Hola`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `『📣』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m)
console.log(`『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)
}}
handler.command = ['bard', 'gemini']
handler.help = ['bard', 'gemini']
handler.tags = ['herramientas']

handler.premium = false

export default handler
