import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*『✦』Ingrese el texto para cambiar el nombre del grupo.*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*『✦』El nombre del grupo no puede tener mas de 100 caracteres.*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
