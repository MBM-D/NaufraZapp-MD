import fetch from 'node-fetch'
import axios from 'axios'
import instagramGetUrl from 'instagram-url-direct'
import { instagram } from '@xct007/frieren-scraper'
import { instagramdl } from '@bochilteam/scraper'
 
var handler = async (m, {conn, args, command, usedPrefix}) => {
 
if (!args[0]) return conn.reply(m.chat, `『✦』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙫𝙖𝙡𝙞𝙙𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`, fkontak, m )
conn.reply(m.chat, `『✦』𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤...`, fkontak, m )

try {

let apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`
let responsel = await axios.get(apiUrll)
let resultl = responsel.data
for (const item of resultl.message) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text()
let tXXxt = `『✅』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤`.trim()
conn.sendFile(m.chat, item._url, null, tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
} 
} catch { 
try { 
let datTa = await instagram.v1(args[0])
for (const urRRl of datTa) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let tXXxt = `『✅』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤`.trim()
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
}
} catch {
try {
let resultss = await instagramGetUrl(args[0]).url_list[0]
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `『✅』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
} catch {
try {
let resultssss = await instagramdl(args[0])
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt4 = `『✅』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤`.trim()
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
} catch {
try {
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `『✅』𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
} catch {
return conn.reply(m.chat, '『✦』𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤.', fkontak, m )
}}}}} 

}
handler.help = ['ig']
handler.tags = ['descargas']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i

handler.register = true
handler.limit = true

export default handler
