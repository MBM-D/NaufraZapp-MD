const handler = async (m, {conn, command, usedPrefix, text}) => {
  const which = command.replace(/ver/i, '');
  if (!text) throw `*『❌』Para ver la lista de mensajes guardados, use el comando: ${usedPrefix}list${which}*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*『🗃️』No existe ningun mensaje guardado con el nombre: '${text}'*`;
  const _m = await conn.serializeM(msgs[text]);
  await _m.copyNForward(m.chat, true);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'get' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
