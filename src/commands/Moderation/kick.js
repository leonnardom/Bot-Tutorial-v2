const { Command, Emojis } = require("../../");

module.exports = class KickCommand extends Command {
  constructor(client) {
    super(
      {
        name: "kick",
        aliases: ["kick"],
        category: "Moderation",
        usage: "kick <user> [reason]",
      },
      client
    );
  }

  async run({ message, args }) {
    if (!message.member.permissions.has("KickMembers"))
      // Verificação de permissão do usuário

      return message.reply(
        `${Emojis.Error} - ${message.author}, você não tem permissão de usar este comando.`
      );

    // if (!message.guild.me.permissions.has("KickMembers"))
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

    if (!USER.kickable)
      // Verificação se o membro pode ser kickado

      return message.reply(
        `${Emojis.Error} - ${message.author}, este membro não pode ser kickado.`
      );

    if (USER.id === message.author.id)
      // Evitar se auto-banir

      return message.reply(
        `${Emojis.Error} - ${message.author}, você não pode se kickar.`
      );

    message.reply(
      `${Emojis.Success} - ${message.author} kickou o usuário ${USER} com sucesso pelo motivo: **${reason}**.`
    );

    await USER.kick({ reason }).catch((err) => console.log(err));
  }
};
