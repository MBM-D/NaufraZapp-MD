var handler = async (m, {conn, args, usedPrefix, command}) => {

const isClose = { 
'open': 'not_announcement', 
'close': 'announcement', 
'abierto': 'not_announcement', 
'cerrado': 'announcement', 
'abrir': 'not_announcement', 
'cerrar': 'announcement', 
'desbloquear': 'unlocked', 
'bloquear': 'locked' 
}[(args[0] || '')]

if (isClose === undefined) { return conn.reply(m.chat, `• Seleccione los botones por favor.`, fkontak, m )

}
await conn.groupSettingUpdate(m.chat, isClose)
{ conn.reply(m.chat, '✅ *Configurado correctamente*', fkontak, m ) }

}
handler.help = ['agroup open / close', 'agrupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(agroup|agrupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler
