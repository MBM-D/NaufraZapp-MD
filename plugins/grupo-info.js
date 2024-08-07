let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`*INFORMACI?N DEL GRUPO*
? ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ©¬ ?
¨q©¤? ? *ID:*
¨t?? ${groupMetadata.id}

¨q©¤? ? *NOMBRE:*
¨t?? ${groupMetadata.subject}

¨q©¤? ? *Participantes:*
¨t?? ${participants.length} en total

¨q©¤? ? *Creador del grupo:*
¨t?? @${owner.split('@')[0]}

?©¤? ? *Administradores:*
${listAdmin}

¨q©¤? ? *DESCRIPCI?N:*
¨t?? ${groupMetadata.desc?.toString() || 'Sin descripci¨®n.'}
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   

}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
handler.register = true
export default handler
