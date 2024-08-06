export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('hola')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`❮⚠️❯ » \`𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 / 𝘼𝙑𝙄𝙎𝙊\`\n\n- _Hola usuario(a)_ @${m.sender.split`@`[0]}, _esta prohibido hablar privadamente con el bot._\n• _Puedes entrar al chat general en la comunidad para hablar ahi. ( no se permiten bots )\n • ${grupo1}\n\n- *_o tambien puedes entrar al grupo oficial del bot, para usar sus comandos._*\n• ${grupo2}\n\n> Se te bloqueara el contacto en este chat.`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
