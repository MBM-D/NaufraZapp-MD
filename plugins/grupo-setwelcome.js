const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*『✦』Se ha configurado el mensaje de bienvenida con exito.*');
  } else throw `*『✦』Ingrese el texto para cambiar la bienvenida del grupo cuando una persona entra al grupo.*\n\nPuedes usar estos textos para mensionar, mostrar la descripcion, o el nombre del grupo.\n*» @user (mención)*\n*» @group (nombre de grupo)*\n*» @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
