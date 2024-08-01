const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 60000;
  if (new Date - global.db.data.users[m.sender].lastwork < 60000) throw `*『✦』Regresa en: ${msToTime(time - new Date())}, para volver a aventurar.`;
  conn.sendMessage(m.chat, {text: `*『✦』Sales a la aventura: ${pickRandom(global.work)}*\n\n*Obtienes: ${hasil} de experiencia.*`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(work|trabajar|w)$/i
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
  'Eres un maestro alquimista, destilando misteriosas pociones en busca de secretos perdidos.',
  'Te conviertes en un intrépido cazador de tesoros, explorando lugares olvidados en busca de riquezas escondidas.',
  'Diriges un negocio de transmutación de metales, convirtiendo lo común en valiosos tesoros.',
  'Exploras antiguas ruinas y encuentras una reliquia valiosa que te otorga conocimientos ancestrales.',
  'Trabajas como mercenario en una guerra épica, enfrentándote a desafíos con tu habilidad y coraje.',
  'Eres un investigador de lo paranormal, descubriendo los secretos ocultos del mundo espiritual.',
  'Entrenas dragones para carreras, formando vínculos con estas majestuosas criaturas aladas.',
  'Te conviertes en el mejor herrero de la ciudad, forjando armas legendarias y artefactos poderosos.',
  'Descubres un bosque encantado lleno de criaturas mágicas, estableciendo una conexión única con la naturaleza.',
  'Eres un domador de bestias feroces, controlando a las criaturas más salvajes con tu dominio animal.',
  'Viajas en el tiempo y resuelves problemas históricos, influyendo en el destino de civilizaciones pasadas.',
  'Eres un asesor real, aportando sabiduría y consejo a gobernantes y líderes.',
  'Desarrollas tecnología futurista, impulsando la innovación y cambiando el rumbo del mundo.',
  'Eres un maestro en el arte de la persuasión, convenciendo a otros con tu elocuencia y astucia.',
  'Piloteas un mecha gigante en batallas épicas, defendiendo la tierra con tu destreza en la máquina de guerra.',
  'Diriges una granja de dragones, cuidando de estas majestuosas criaturas y criando dragones únicos.',
  'Eres un espía internacional, infiltrándote en organizaciones secretas y desenmascarando complots oscuros.',
  'Exploras el espacio y haces descubrimientos asombrosos que te otorgan una visión única del universo.',
  'Eres un mago de renombre, realizando trucos impresionantes y conjurando hechizos mágicos.',
  'Eres un científico loco, creando inventos extravagantes y experimentos inusuales.',
  'Defiendes el reino contra un ejército invasor, liderando ejércitos y demostrando tu valentía en la batalla.',
  'Eres un navegante audaz, explorando mares desconocidos y descubriendo islas llenas de tesoros.',
  'Eres un maestro en el arte del sigilo, moviéndote en las sombras y realizando misiones secretas.',
  'Eres un chef renombrado, creando platillos deliciosos que deleitan a los paladares de todo el mundo.',
  'Investigas crímenes complejos como un detective hábil, resolviendo misterios intrigantes.',
  'Eres un diplomático hábil, negociando tratados y alianzas para mantener la paz entre naciones.',
  'Eres un chamán poderoso, canalizando energías espirituales para curar y proteger.',
  'Desarrollas aplicaciones mágicas para dispositivos encantados, mejorando la vida de las personas con tus invenciones.',
  'Eres un campeón en torneos de lucha, demostrando tu destreza en el combate mano a mano.',
  'Eres un arquitecto visionario, diseñando ciudades futuristas y estructuras impresionantes.',
  'Eres un psíquico con habilidades sobrenaturales, explorando las mentes y prediciendo el futuro.',
  'Eres un famoso director de cine, creando historias épicas que cautivan a las audiencias.',
  'Eres un astrónomo y descubres un nuevo planeta, ampliando nuestro conocimiento del cosmos.',
  'Eres un experto en supervivencia, enfrentando los peligros del mundo con ingenio y valentía.',
  'Eres un músico talentoso que toca en conciertos masivos, llenando el aire con melodías cautivadoras.',
  'Eres un explorador submarino, sumergiéndote en las profundidades para descubrir tesoros olvidados.',
  'Eres un diseñador de moda reconocido, creando tendencias y vistiendo a las personas con tu estilo único.',
  'Eres un líder revolucionario, luchando por un mundo mejor y guiando a las masas hacia la libertad.',
  'Eres un médico que descubre una cura para una enfermedad mortal, salvando innumerables vidas.',
  'Eres un hacker informático, navegando por el ciberespacio y desvelando secretos digitales.',
  'Eres un jardinero botánico que encuentra una planta rara, desentrañando sus propiedades únicas.',
  'Eres un cazador de mitos, explorando leyendas y descubriendo la verdad detrás de los cuentos.',
  'Eres un arqueólogo que desentierra una ciudad antigua, revelando los secretos de civilizaciones pasadas.',
  'Eres un líder espiritual respetado, guiando a otros hacia la iluminación y la paz interior.',
  'Eres un jugador profesional, compitiendo en torneos de élite y demostrando tu habilidad en los juegos.',
  
];
