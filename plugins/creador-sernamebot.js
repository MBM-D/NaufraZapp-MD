let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*『👀』Ingrese un texto para cambiar el nombre del bot.*`
  try {
    await conn.updateProfileName(text)
    m.reply('*『✅』Se ha cambiado el nombre del bot con éxito.*')
  } catch (e) {
    console.log(e)
    throw `*『⚠️』No fue posible cambiar el nombre del bot.*`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true
export default handler