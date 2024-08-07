//import * as baileys from '@adiwajshing/baileys'
let baileys = (await import(global.baileys)).default

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw `『🪐』𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙪𝙣 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} ${grupo1}`
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
	if (pp) return conn.sendMessage(m.chat, { image: { url: pp }, caption: txt }, { quoted: m })
	let groupinfo = `ɪᴅ » *${data.id}*
ɴᴏᴍʙʀᴇ » *${data.subject}*
ᴄʀᴇᴀᴅᴏ ᴇɴ » *${data.creation}*
ᴀᴅᴍɪɴ ᴏғᴄ » *${data.owner}*

ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:
${data.desc}`
	await conn.reply(m.chat, groupinfo, m)
}
handler.command = /^(inspect)$/i
handler.register = true
export default handler

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] :
			// group.attrs.s_o ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.s_o).split('@')[0] :
			group.attrs.id.includes('-') ? 'wa.me/' + group.attrs.id.split('-')[0] : '',
		desc
	}
	return metadata
}
