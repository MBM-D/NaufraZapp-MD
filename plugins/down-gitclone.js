import fetch from 'node-fetch'

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `『✦』𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗 𝙫𝙖𝙡𝙞𝙙𝙤.`, m )
if (!regex.test(args[0])) conn.reply(m.chat, `『✦』𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙪𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙪𝙣 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙙𝙚 𝙪𝙣 𝙗𝙤𝙩.`, m)

let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.reply(m.chat, `『✦』𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨...`, m )
conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone']
handler.tags = ['descargas']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i

handler.limit = true
handler.register = true

export default handler
