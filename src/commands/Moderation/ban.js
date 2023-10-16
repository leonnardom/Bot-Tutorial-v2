const { Command, Emojis } = require("../../");

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(
      {
        name: "ban",
        aliases: ["banir"],
        category: "Moderation",
        usage: "ban <user> [reason]",
      },
      client
    );
  }

  async run({ message, args }) {
    if (!message.member.permissions.has("BanMembers"))
      // Verificação de permissão do usuário

      return message.reply(
        `${Emojis.Error} - ${message.author}, você não tem permissão de usar este comando.`
      );

    // if (!message.guild.me.permissions.has("BanMembers"))
    //   // Verificação de permissão do usuário

    //   return message.reply(
    //     `${Emojis.Error} - ${message.author}, você não tem permissão de usar este comando.`
    //   );

    const USER =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!USER)
      // Verifição se foi inserido um usuário

      return message.reply(
        `${Emojis.Error} - ${message.author}, insira um membro válido do servidor.`
      );

    let reason = args.slice(1).join(" ");

    if (!reason) reason = "Não Informado";

    if (!USER.bannable)
      // Verificação se o membro pode ser banido

      return message.reply(
        `${Emojis.Error} - ${message.author}, este membro não pode ser banido.`
      );

    if (USER.id === message.author.id)
      // Evitar se auto-banir

      return message.reply(
        `${Emojis.Error} - ${message.author}, você não pode se banir.`
      );

    message.reply(
      `${Emojis.Success} - ${message.author} baniu o usuário ${USER} com sucesso pelo motivo: **${reason}**.`
    );

    await USER.ban({
      reason: `${reason} - Banido por: ${message.author.globalName}`,
    }).catch((err) => console.log(err));
  }
};
