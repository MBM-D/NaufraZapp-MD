let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`*INFORMACIÓN DEL GRUPO*
⌾ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ⌾
╭─• ➻ *ID:*
╰•➭ ${groupMetadata.id}

╭─• ➻ *NOMBRE:*
╰•➭ ${groupMetadata.subject}

╭─• ➻ *Participantes:*
╰•➭ ${participants.length} en total

╭─• ➻ *Creador del grupo:*
╰•➭ @${owner.split('@')[0]}

•─• ➻ *Administradores:*
${listAdmin}

╭─• ➻ *DESCRIPCIÓN:*
╰•➭ ${groupMetadata.desc?.toString() || 'Sin descripción.'}
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   

}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
handler.register = true
export default handler
