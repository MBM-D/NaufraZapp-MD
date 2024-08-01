const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror|jadibot/i

let handler = m => m
handler.before = async function (m, { conn, isOwner, isROwner }) {
if (m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regexWithPrefix = new RegExp(`^${prefix.source}\\s?${comandos.source}`, 'i')
if (regexWithPrefix.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
return await conn.reply(m.chat, `❮⚠️❯ » \`𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 / 𝘼𝙑𝙄𝙎𝙊\`\n\n- _Hola usuario(a)_ @${m.sender.split`@`[0]}, _esta prohibido hablar privadamente con el bot._\n• _Puedes entrar al chat general en la comunidad para hablar ahi. ( no se permiten bots )\n • ${grupo1}\n\n- *_o tambien puedes entrar al grupo oficial del bot, para usar sus comandos._*\n• https://chat.whatsapp.com/EpQRslGep33GTHzd6LlRpm\n\n> Se te bloqueara el contacto en este chat.`, m, { mentions: [m.sender] })  
await this.updateBlockStatus(m.sender, 'block')
}
return !1
} 
export default handler
