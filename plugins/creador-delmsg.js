const handler = async (m, {command, usedPrefix, text}) => {
  const which = command.replace(/eliminar/i, '');
  if (!text) throw `*『❌』Use el comando: ${usedPrefix}list${which} para ver la lista.*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*『⚠️』El archivo con el nombre: '${text}' no existe.*`;
  delete msgs[text];
  m.reply(`*『✅』Se ha eliminado correctamente el archivo: '${text}' en este bot.*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'del' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
