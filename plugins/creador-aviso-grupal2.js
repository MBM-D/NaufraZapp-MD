const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
  const pesan = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!pesan) throw '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.';
  for (const i of anu) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '📣 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 𝐆𝐑𝐔𝐏𝐀𝐋 📣\n\n' + pesan',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`『✅』𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 *${anu.length}* 𝙂𝙧𝙪𝙥𝙤/𝙨\n\n• 𝙀𝙨𝙩𝙤 𝙥𝙪𝙚𝙙𝙚 𝙣𝙤 𝙚𝙣𝙫𝙞𝙖𝙧𝙨𝙚 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨...`);
};
handler.help = ['broadcastgroup', 'bcgc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(avisogrupo2)$/i;
handler.owner = true;

export default handler;