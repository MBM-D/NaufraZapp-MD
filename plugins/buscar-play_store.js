import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙡𝙜𝙪𝙣𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙚𝙣 𝙋𝙡𝙖𝙮𝙎𝙩𝙤𝙧𝙚.";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `『🪐』𝙄𝙣𝙫𝙖𝙡𝙞𝙙𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣.`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
`𝗡𝗼𝗺𝗯𝗿𝗲 » ${v.title}
𝗖𝗿𝗲𝗮𝗱𝗼𝗿 » ${v.developer}
𝗣𝗿𝗲𝘀𝗶𝗼 » ${v.priceText}
𝗣𝘂𝗻𝘁𝘂𝗮𝗰𝗶𝗼𝗻 » ${v.scoreText}
𝗘𝗻𝗹𝗮𝗰𝗲 » ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
