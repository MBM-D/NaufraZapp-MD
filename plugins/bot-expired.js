export async function all(m) {

if (!m.isGroup)

return

let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
await conn.reply(m.chat, '『✦』Adios a todos, se terminó el tiempo de quedarme aqui 👋🏻')
await conn.groupLeave(m.chat)
chats.expired = null

}

}
