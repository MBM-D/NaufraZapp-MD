if (!m.isGroup && !isROwner) {  
//const bot = global.db.data.users[m.sender] || {};
if (global.db.data.settings[numBot].antiPrivate) {
conn.sendMessage(m.chat, {text: `❮⚠️❯ » \`𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 / 𝘼𝙑𝙄𝙎𝙊\`\n\n- _Hola usuario(a)_ @${m.sender.split`@`[0]}, _esta prohibido hablar privadamente con el bot._\n• _Puedes entrar al chat general en la comunidad para hablar ahi. ( no se permiten bots )\n • ${grupo1}\n\n- *_o tambien puedes entrar al grupo oficial del bot, para usar sus comandos._*\n• ${grupo2}\n\n> Se te bloqueara el contacto en este chat.`, mentions: [m.sender], }, {quoted: m}) 
await delay(2 * 2000) 
await conn.updateBlockStatus(m.chat, 'block')   
return 
}}
