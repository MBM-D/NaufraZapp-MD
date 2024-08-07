const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '『📣』Las restricciones no estan activas.';
  const kicktext = `*『👀』Mensione a la persona que quiere eliminar del grupo.*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('『🏷️』Etiquete, mensione o responda al mensaje del participante para eliminarlo.');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('*『📣』El bot no puede eliminarse.*');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `*『✅』El participante: @${mentioned.split('@')[0]}, ha sido eliminado exitosamente.*`;
    const error1 = `*『❌』El participante: @${mentioned.split('@')[0]}, es el creador del grupo, no puede ser eliminado.*`;
    const error2 = `*『👀』El participante: @${mentioned.split('@')[0]}, ya fue eliminado o salio del grupo.*`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `『❌』No fue posible eliminar al participante.`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|ban|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
