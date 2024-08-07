const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*『✦』El mensaje de despedida fue configurada con exito.*');
  } else throw `*『✦』Ingrese un mensaje para que salga al momento cuando alguien sale del grupo.*\n\nPuedes usar: *@user*, para mensionar a la persona.`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
