const ClientEmbed = require("../ClientEmbed");
const Emojis = require("../../utils/Emojis");

module.exports = class Command {
  constructor(options = {}, client) {
    this.client = client;

    this.name = options.name;
    this.aliases = options.aliases || [];
    this.category = options.category || "Nenhuma";
    this.description = options.description || "Nenhuma";
    this.usage = options.usage || "Nenhuma";
  }

  async _run(context) {
    try {
      await this.ON(context);

      await this.run(context);
    } catch (err) {
      this.error(context, err);
    }
  }

  error(context, error) {
    const { command, author, guild, message } = context;

    const EMBED = new ClientEmbed()
      .setAuthor({
        name: author.globalName || author.username,
        iconURL: author.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(`### - Detectei um Erro em um Comando.`)
      .addFields([
        {
          name: `${Emojis.Diamond} Autor`,
          value: `- **${author.globalName || author.username}**\n- ID: **${
            author.id
          }**`,
          inline: true,
        },
        {
          name: `${Emojis.Diamond} Servidor`,
          value: `- **${guild.name}**\n- ID: **${guild.id}**`,
          inline: true,
        },
        {
          name: `${Emojis.Diamond} Informações`,
          value: `- Comando: **${command.name}**\n- Erro: **${error.message}**`,
        },
      ]);

    console.log(error); // Retorna o erro completo dentro do seu console.

    message.reply({ embeds: [EMBED] });
  }

  ON(context) {
    return (this.utils = true);

    // return this.utils ? CommandUtils.util(context, this.utils) : true;
  }
};
