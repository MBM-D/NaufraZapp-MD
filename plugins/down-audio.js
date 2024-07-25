import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `❮🚀❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙤 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n• *${usedPrefix + command} https://youtu.be/B5bp0Zt0Jss?si=mpraK8fQJQWfLtqS*`, fkontak, m)
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `❮☁️❯ » 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙚𝙨𝙚 𝙣𝙪𝙢𝙚𝙧𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧 𝙙𝙚𝙡 *1* 𝙖𝙡 *${matchingItem.urls.length}*`;
}} else {
throw `❮❕❯ » 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙪𝙣𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙚𝙣 𝙋𝙡𝙖𝙮𝙇𝙞𝙨𝙩\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}playlist Erika lundmoen - yad*`;
}} else {
throw `❮❕❯ » 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙪𝙣𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙚𝙣 𝙋𝙡𝙖𝙮𝙇𝙞𝙨𝙩\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}playlist Erika lundmoen - yad*`;
}}}  
await conn.reply(m.chat, `❮🚀❯ » 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤...`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch (e) {
await conn.reply(m.chat, `❮⚠️❯ » 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, fkontak, m)
console.log(`❮❌❯ » 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
handler.limit = 1
handler.register = true
export default handler

/*import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙤 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n• *${usedPrefix + command} https://youtu.be/B5bp0Zt0Jss?si=mpraK8fQJQWfLtqS*\n• *${usedPrefix + command} Erika lundmoen - yad*`, fkontak, m)
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `᥀·࣭࣪̇˖🔢◗ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙚𝙨𝙚 𝙣𝙪𝙢𝙚𝙧𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧 𝙙𝙚𝙡 *1* 𝙖𝙡 *${matchingItem.urls.length}*`;
}} else {
throw `᥀·࣭࣪̇˖☁️◗ 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙪𝙣𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙚𝙣 𝙋𝙡𝙖𝙮𝙇𝙞𝙨𝙩\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}playlist Erika lundmoen - yad*`;
}} else {
throw `᥀·࣭࣪̇˖☁️◗ 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙪𝙣𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙚𝙣 𝙋𝙡𝙖𝙮𝙇𝙞𝙨𝙩\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}playlist Erika lundmoen - yad*`;
}}}  
await conn.reply(m.chat, esmsMT.espereAudio(), fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch (e) {
await conn.reply(m.chat, `${esmsMT['bError1']()} ${usedPrefix + command} ${esmsMT['reporteError']()}`, fkontak, m)
console.log(`${esmsMT['bError3']()} ${esmsMT['dPLAYs'](usedPrefix)}`)
console.log(e)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
handler.register = true
export default handler
*/