const handler = async (m, { conn }) => {
  let txt = '';
try {    
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '*『👤』Participante.*' : '*『👤』Ex participante.*';
    const totalParticipants = participants.length;
    txt += `*『🥏』Grupo: ${i + 1}*
    *• Nombre:* ${await conn.getName(jid)}
    *• ID:* ${jid}
    *• Admin:* ${isBotAdmin ? 'Si' : 'No'}
    *• Estado:* ${participantStatus}
    *• Participantes:* ${totalParticipants}
    *• Enlace:* ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || '*『❌』Error al mostrar el link.*'}` : '*『⚠️』El bot no es admin en este grupo.*'}\n\n`;
  }
  m.reply(`*『👀』Aqui tienes la lista de los grupos que esta el bot.*\n\n*Totalidad: ${totalGroups}\n\n${txt}`.trim());
} catch {
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '*『👤』Participante.*' : '*『👤』Ex participante.*';
    const totalParticipants = participants.length;    
    txt += `*『🥏』Grupo: ${i + 1}*
    *• Nombre:* ${await conn.getName(jid)}
    *• ID:* ${jid}
    *• Admin:* ${isBotAdmin ? 'Si' : 'No'}
    *• Estado:* ${participantStatus}
    *• Participantes:* ${totalParticipants}
    *• Enlace:* ${isBotAdmin ? '*『❌』Error al mostrar el link.*' : '*『⚠️』El bot no es admin en este grupo.*'}\n\n`;
  }
  m.reply(`*『👀』Aqui tienes la lista de grupos que esta el bot.*\n\n*Totalidad:* ${totalGroups}\n\n${txt}`.trim());
 }    
};
handler.help = ['groups', 'grouplist'];
handler.tags = ['info'];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listgroup)$/i;
handler.rowner = true;
handler.private = true
export default handler;
