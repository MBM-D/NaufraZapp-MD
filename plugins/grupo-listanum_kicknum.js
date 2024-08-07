/*              Codigo Creado Por Bruno Sobrino
      (https://github.com/diegojadibot/SakuraBotLite-MD)
*/

const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*『✦』Ingrese el numero iniciar por favor, por ejemplo: ${usedPrefix + command} 54*`);
  if (isNaN(args[0])) return m.reply(`*『✦』Ingrese el numero iniciar por favor, por ejemplo: ${usedPrefix + command} 54*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*『✦』No hay ningun numero de: +${lol}*`);
  const numeros = ps.map((v)=> '» @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum': case 'listnum':
      conn.reply(m.chat, `『✦』Lists de numeros: +${lol}\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*『✦』Las restricciones no estan activas.*');
      if (!isBotAdmin) return m.reply('*『✦』El bot debe de ser admin para usar esta funcion.*');
      conn.reply(m.chat, `*『✦』Eliminando usuarios +${lol}...*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `『✦』El participante: @${user.split('@')[0]} ya fue eliminado o a salido del grupo.`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('『✦』Error en el comando.');
      }
      break;
  }
};
handler.command = /^(listanum|kicknum|listnum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
