module.exports = {
  name: 'reactionrole',
  description: "Gives a user a role when they react to a message",
  async execute(message, args, Discord, client) {
    const channel = '816852134519635992';
    const testersRole = message.guild.roles.cache.find(role => role.name === "Testers");

    const testersEmoji = '✅';
    let embed = new Discord.MessageEmbed()
      .setColor('#14f9ff')
      .setTitle('Da Rules')
      .setDescription("Just be cool\n\n" + `react with ${testersEmoji} to agree`)
      .setImage('https://media1.tenor.com/images/aec68d26e212601d152f191a79f072a5/tenor.gif?itemid=15835653')
      .setFooter('Welcome to hell bois <:sunglasses:817196164495441930>')
    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(testersEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;

      if(reaction.message.channel.id == channel){
        if(reaction.emoji.name === testersEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.add(testersRole);
        }
      }else{
        return;
      }
    });

    client.on('messageReactionRemove', async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;

      if(reaction.message.channel.id == channel){
        if(reaction.emoji.name === testersEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(testersRole);
        }
      }else{
        return;
      }
    });
  }
}
