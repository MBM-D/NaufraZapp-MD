const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*『⚠️』Ingrese un prefijo por favor, por ejemplo: ${usedPrefix + command} /`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`*『✅』Se ha actualizado el prefijo del bot a: ${text}*`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
