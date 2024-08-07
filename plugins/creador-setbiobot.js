let handler = async (m, { conn, text }) => {
   if (!text) throw `*『🪐』Ingrese un texto para cambiar la biografía del bot.*`
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `*『✅』Se ha cambiado la biografía del bot con exito.*`, m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler