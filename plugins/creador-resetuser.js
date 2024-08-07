const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `*『⚠️』Por favor, etiquete/mensione a un usuario o escriba el numero.*`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `*『⚠️』Por favor, etiquete/mensione a un usuario o escriba el numero.*`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `*『❌』El participante: @${userNumber} no esta registrado en la base de datos, tiene que registrarse.*`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `*『✅』El participante: @${userNumber} fue reiniciado de sus recursos y datos en el bot con exito.*`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(restablecerdatos|deletedatauser|resetuser|borrardatos)$/i;
handler.rowner = true;
export default handler;
