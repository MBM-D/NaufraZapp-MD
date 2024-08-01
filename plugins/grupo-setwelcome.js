let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.reply(m.chat, esmsMT.setWell(), estilo, m)
} else throw `${esmsMT['setWell2']()}`
}
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.register = true
export default handler
