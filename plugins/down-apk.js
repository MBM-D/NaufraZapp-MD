import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {

if (!text) return conn.reply(m.chat, '『✦』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙖𝙥𝙠 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙗𝙪𝙨𝙘𝙖𝙧.', m )

try {
 
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let response = `『✦』𝙉𝙤𝙢𝙗𝙧𝙚: ${data5.name}\n\n『✦』𝙋𝙖𝙜𝙞𝙣𝙖:\n${data5.package}\n\n『✦』𝙐𝙡𝙩𝙞𝙢𝙖 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣:\n${data5.lastup}\n\n『✦』𝙋𝙚𝙨𝙤/𝙏𝙖𝙢𝙖𝙣̃𝙤: ${data5.size}`
await conn.sendMessage(m.chat, { text: response, contextInfo: { externalAdReply: { title: data5.name, body: wm, sourceUrl: md, thumbnailUrl: data5.icon, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   

 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '『✦』𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤.', m )
}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m})
} catch {
return conn.reply(m.chat, '『✦』𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙗𝙪𝙨𝙘𝙖𝙧 𝙚𝙡 𝙖𝙥𝙠.', m )
}    
}

handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i

export default handler
