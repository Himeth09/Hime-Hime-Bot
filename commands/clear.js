module.exports = {
  name: 'clear',
  description: 'clears inputted # of messages',
  async execute(message, args) {
    if (!args[0]) return message.reply("woah bro, u been caught slackin', enter in the number of messages u wanna clear along with the !clear command");
    if (isNaN(args[0])) return message.reply("damn bro u got played, that ain't a real number try again");

    if (args[0] > 100) return message.reply("chill bruh, don't go trying to delete more than 100 messages. At that point just delete the channel yeah?");
    if (args[0] < 1) return message.reply("jeez bro, if u didn't want to delete any messages why did u even call me? Enter a number greater than 0 next time and stop wasting my time");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
      message.channel.send("Congrats bro, u just deleted "+ args[0] + " messages!");
    });
  }
}
