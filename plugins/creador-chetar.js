const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `*『👾』Hola @${m.sender.split('@')[0]}, ahora tus recursos son limitados en este bot.*`, mentions: [m.sender]}, {quoted: m});
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].limit = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = /^(ilimitado|infiniy|chetar)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
