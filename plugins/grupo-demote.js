const handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {

  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `『🪐』Use el comando de esta manera:

Para quitar el admin a un administrador asignado, mensione al admin. Por ejemplo:
${usedPrefix}quitaradmin @tag*
`, m);
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `『🪐』𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙙𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣.`, m);

  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'demote');
    conn.reply(m.chat, `『✅』Se le ha quitado el admin al usuario con éxito.`, m);
  }
};
handler.help = ['*593xxx*', '*@usuario*', '*responder chat*'].map((v) => 'demote ' + v);
handler.tags = ['group'];
handler.command = /^(demote|quitarpoder|quitaradmin)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;