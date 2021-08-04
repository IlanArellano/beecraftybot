const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "anuncio",
  description:
    "Este será un anuncio, recibe como primer parametro el titulo, y como segundo parametro la descripcion",
  args: true,
  execute(message, args) {
    let titulo = "";
    let anuncio = "";
    let tituloInicio = 0;
    let tituloFinal = 0;
    let anuncioInicio = 0;
    let anuncioFinal = 0;
    if (args.length > 0) {
      if (args.length === 1) {
        return message.channel.send(
          "Debes escribir una descripcion de tu anuncio"
        );
      }
      const newArgs = args.filter(
        (init) =>
          init.startsWith('"') ||
          init.endsWith('"') ||
          init.startsWith('"') ||
          init.endsWith('"')
      );

      if (
        newArgs.length % 2 == !0 ||
        newArgs.length === 0 ||
        newArgs.indexOf(args[1]) === 0
      ) {
        return message.channel.send(
          "Ha ocurrido un error de Sintaxis, checa bien lo que estas escribiendo"
        );
      }
      if (args[0].startsWith('"')) {
        tituloInicio = args.indexOf(newArgs[0]);
        tituloFinal = args.indexOf(newArgs[1]);
        anuncioInicio = args.indexOf(newArgs[2]);
        anuncioFinal = args.indexOf(newArgs[3]);
        if (
          anuncioInicio === -1 ||
          anuncioFinal === -1 ||
          tituloInicio === -1 ||
          tituloFinal === -1
        ) {
          return message.channel.send("Ha ocurrido un error inesperado");
        }
        if (
          (args[anuncioInicio].startsWith('"') &&
            args[anuncioFinal].endsWith('"')) ||
          (args[anuncioInicio].startsWith(`'`) &&
            args[anuncioFinal].endsWith(`'`))
        ) {
          titulo = args.slice(tituloInicio, tituloFinal + 1).join(" ");
          titulo = titulo.substring(1, titulo.length - 1);
          anuncio = args.slice(anuncioInicio, anuncioFinal + 1).join(" ");
          anuncio = anuncio.substring(1, anuncio.length - 1);
        }
      } else {
        tituloInicio = args[0];
        anuncioInicio = args.indexOf(newArgs[0]);
        anuncioFinal = args.indexOf(newArgs[1]);
        if (
          (args[anuncioInicio].startsWith('"') &&
            args[anuncioFinal].endsWith('"')) ||
          (args[anuncioInicio].startsWith(`'`) &&
            args[anuncioFinal].endsWith(`'`))
        ) {
          titulo = tituloInicio;
          anuncio = args.slice(anuncioInicio, anuncioFinal + 1).join(" ");
          anuncio = anuncio.substring(1, anuncio.length - 1);
        }
      }

      const anuncioEmbed = new MessageEmbed();
      anuncioEmbed.setTitle(titulo);
      anuncioEmbed.setDescription(anuncio);
      return message.channel.send(anuncioEmbed);
    }
    message.channel.send("adfd");
  },
};
