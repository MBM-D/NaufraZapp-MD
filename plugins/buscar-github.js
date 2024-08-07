import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} MultiBot-OFC`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  const str = json.items.map((repo, index) => {
  return `
• *ʀᴇᴘᴏsɪᴛᴏʀɪᴏ: ${1 + index}*
» ɴᴏᴍʙʀᴇ: ${repo.full_name}
» ᴇɴʟᴀᴄᴇ: ${repo.html_url}
» ᴄʀᴇᴀᴅᴏ ᴇɴ: ${formatDate(repo.created_at)}
» ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴇɴ: ${formatDate(repo.updated_at)}
» ɢɪᴛᴄʟᴏɴᴇ: git clone ${repo.clone_url}
» ᴇsᴛʀᴇʟʟᴀs: ${repo.stargazers_count} 
» ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:
${repo.description}
`.trim()}).join('\n\n⋄ •───────────────• ⋄\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
