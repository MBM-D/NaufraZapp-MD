const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `*『✦』Mensione a la persona para darle Owner.*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'addowner':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '*『✦』El usuario ahora es un Owener en este bot.*', m);
      break;
    case 'delowner':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, '*✅️ Eliminado El Numero de la lista de owner correctamente.*', m);
      } else {
        await conn.reply(m.chat, '*⏳️El Numero No Está En La Lista De Owners.*', m);
      }
      break;
  }
};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;
