import fs from 'fs';

let handler = async (m, { text }) => {
  if (!text) throw `*『❌』Por favor, ingrese el nombre de la imagen y el formato deseado, por ejemplo:* #saveimage naufra.jpg`;
  if (!m.quoted || !m.quoted.fileSha256) throw `*『⚠️』Responda a una imagen o envie una imagen para guardarlo.*`;
  let media = await m.quoted.download();
  /*o donde quieras guardar las imágenes*/
  const path = `src/${text}`;
  await fs.writeFileSync(path, media);
  m.reply(`*『✅』Se ha guardado la imagen con el nombre:* ${path}`);
};

handler.help = ['saveimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(saveimage|sp)$/i;
handler.owner = true;

export default handler;
