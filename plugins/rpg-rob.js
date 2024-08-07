const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `❮🚀❯ » 𝙀𝙨𝙥𝙚𝙧𝙖 *${msToTime(time - new Date())}* 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙤𝙗𝙖𝙧.`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `❮👤❯ » 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`;
  if (!(who in global.db.data.users)) throw `❮❌❯ » 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return m.reply(`❮🐭❯ » 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 @${who.split`@`[0]} 𝙩𝙞𝙚𝙣𝙚 𝙢𝙚𝙣𝙤𝙨 𝙙𝙚 *${ro} xp*\n𝙣𝙤 𝙧𝙤𝙗𝙚𝙨 𝙖 𝙪𝙣 𝙥𝙤𝙗𝙧𝙚 😔`, null, {mentions: [who]});
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  m.reply(`❮✅❯ » 𝘼𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙧𝙤𝙗𝙖𝙧𝙩𝙚 *${rob} XP* 𝙖 @${who.split`@`[0]} 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
