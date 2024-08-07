const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*『❌』Ingrese un enlace grupal por favor, por ejemplo:*\n\n#join https://chat.whatsapp.com/Elot5C62z0AGvxwZjXsW4j\n#unete https://chat.whatsapp.com/Elot5C62z0AGvxwZjXsW4j';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*『✅』El bot se ha unido al grupo exitosamente.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*『📦』El enlace del grupo fue enviado a los propietarios del bot, tenga paciencia, tendra una respuesta lo antes posible.*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*『👋🏻』Hola, hay una solicitud de una persona que quiere un bot para su grupo.*\n\n• *Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n• *Enlace grupal:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '*『❌』Ocurrio un error, intente de nuevo.*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|unete|unirte$/i;
handler.register = true
export default handler;