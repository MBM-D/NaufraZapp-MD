const handler = (m) => {
  const msgs = global.db.data.msgs;
  m.reply(`
*『📦 COSAS GUARDADAS 📦』*

• Aqui esta la lista de las cosas que guardan...

${Object.keys(msgs).map((v) => '' + v).join('\n')}*
`.trim());
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'list' + v);
handler.tags = ['database'];
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/;
export default handler;
