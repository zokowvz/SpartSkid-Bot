 // spartix sale skid j'vais te mettre des commentaires un peu partout parce que t'es un skid tu ne dois sûrement pas comprendre.
 // spartskid #v1, si il y a des erreurs mp zkw#1234 et si mon tag change rejoins discord.gg/lightgen. 
      // edit 19/02/22 : j'ai sauté avec LightGen, new serveur discord.gg/lgen.


// les constantes
const discord = require("discord.js");
const client = new discord.Client();
const token = require('./config.json');
const owner = require('./config.json');
const config = require('./config.json');
const color = require('./config.json');
const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');
const botlog = require('./config.json')
const prefix = config.prefix;
client.on('ready', () => {
  console.clear(),         
  console.log("\n\n\n\n                           [+]") + ( ` ${client.user.tag}` +  " connecté maître zokow")

// activité du bot
client.user.setPresence({ activity: { name: "SpartSkid", type: 1, url: "https://twitch.tv/zokowlive"}})
});

client.on('message', (message) => {
    const command = message.content;
    //si dans le message il y a le préfixe défini ci-dessus en "$" et le mot help dans le même message, alors : 
    if(command == prefix + "help"){                  
      const helpembed = new discord.MessageEmbed()
      .setTitle("\`🎐\`・ **Infos**")
      .setColor("BLUE")
       .setDescription(`> \`🥤\`・ **SpartSkid** \n> \`🌹\` ・ **prefix** : ${prefix} \n> \`🍔\` ・ **Développeur** : zokow `)
       .setColor(config.color)
       .addFields(    
        { name: '\u200B', value: '\u200B' },
        { name: `\`🛒\`・Mais qu'est ce que *SpartSkid*`, value: 'SpartSkid est un bot qui te permettra de vérifier les stats de skid du petit Spartix.', inline: true },
        )
        .addField("Des commandes sont disponibles ?", "Oui, et beaucoup a venir mais les commandes actuellement disponible sont affichées dans la page 2.", true )
        .setFooter("SpartSkid v1 - by zokow") 
       
       const cmd = new discord.MessageEmbed()
       .setTitle("\`🍟\`・ **Commandes**")
       .setColor(config.color)
       .addField("Help" , "\n\n`Cette commande te permet de mieux comprendre le bot.`")
       .addField("Soutien", "\n\n`Cette commande te permet de soutenir le créateur du bot.`")
       .addField("LightGen", "\n\n`Cette commande te permet de rejoindre le serveur principal.`")
       .addField("spartgothique", "\n\n`Cette commande te permet de permet de guetter la gothique de Spartix`")
       .addField("infobot", "\n\n`Cette commande te permet de voir les infos du bot.`")
       .addField("StatiSkid", "\n\n`Cette commande te permet de voir les statistiques du petit Spartix.`")
       .addField("SpartZemmour", "\n\n`Cette commande te permet de voir le couple goal entre Spartix et Zemmour.`")
       .addField("Ping", "\n\n`Cette commande te permet de voir la latance du bot.`")
       .addField("Clear", "\n\n`Cette commande te permet de clear un nombre défini de message.`")



       const pages = [
           helpembed,
           cmd,
           
   ]
   
   const emojiList = ["⏪", "⏩"];
   
   const timeout = '120000';
   
   pagination(message, pages, emojiList, timeout)
   console.log("\n [$]") + ("  commande Help executée")
  
     }

   // on souhaite définir legrospourcentageduskidspartix par un nombre random entre 1 et 100
    var legrospourcentageduskidspartix = Math.floor(Math.random() * 100) + 1;
      
      // on souhaite faire un embed qui affiche le pourcentage ci-dessus.
     if(command == prefix + "statiskid") {
       const embedstatiskiddugrosspartix = new MessageEmbed()
       .setTitle("StatiSkid")
       .setDescription(`**WOW**, Spartix est actuellement à **${legrospourcentageduskidspartix}%** de sa capacité **maximale** de **skidage**.`)
       .setColor(config.color)
       .setFooter("SpartSkid v1 - by zokow")
       message.channel.send(embedstatiskiddugrosspartix)
       console.log("\n [$]") + ("  commande StatiSkid executée")

    }

      // on souhaite faire une commande qui affiche les infos du bot
       if(command == prefix + "infobot") {
          const embedinfobot = new MessageEmbed() 
            .setTitle("InfoBot")
            .setURL("https://discord.gg/lightgen")
            .setDescription("> \`🥤\`・ **SpartSkid** \n> \`🍔\` ・**LightGen** : https://discord.gg/lightgen")
            .addFields(    
                { name: '\u200B', value: '\u200B' },
                { name: `\`🪐\`・Qui a développé *SpartSkid*  ?`, value: '*SpartSkid* est un bot développé par <@922101041997172756>', inline: true },
                { name: `\`🪁\`・Dans quel but ?`, value: `Le bot a été développé dans le but de permettre a tout le monde d'être informé des changements de Spartix.`, inline: true },
                )
            .setColor(config.color)
            .setFooter("SpartSkid v1 - by zokow")
          message.channel.send(embedinfobot)
          console.log("\n [$]") + ("  commande InfoBot executée")
        }
 

                  // on cherche a mettre en valeur la grosse gothique de spartix.
           
                  if(command == prefix + "spartgothique")
           {
              const lagrossegothiquedeguelassedespartixquiadesgrosseinscommemabite = new MessageEmbed()
              .setTitle("Spartix - Gothique")
              .setImage("https://media.discordapp.net/attachments/918833024207061003/933756506279641088/Screenshot_20220119-221841_Discord.jpg?width=463&height=489")
              .setDescription("Je vous présente sa magnifique **Gothique**, armé de son **rouge à lèvre** tah l'arme des meufs dans **Totally Spies**, c'est pas une **balle qui tue** mais un **bizou qui tue**. \n **Plus sérieusement**, elle est tout bonnement **déguelasse**, toute **laide**, nous pouvons donc dire que les goûts de spartix ** laisse à désirer**.")
              .setColor(config.color)
              .setFooter("SpartSkid v1 by zokow")
           message.channel.send(lagrossegothiquedeguelassedespartixquiadesgrosseinscommemabite)
           console.log("\n [$]") + ("  commande SpartGothique executée")
          }
  


          if(command == prefix + "soutien") {
            const soutienembed = new MessageEmbed()
            .setTitle("💰・Soutien")
            .setDescription("Salut, si tu veux aider les développeurs a améliorer le projet, tu peux donner de la moula via ce lien, même 1 centime : https://paypal.me/zokowvz")
            .setURL("https://paypal.me/zokowvz")
            .setColor(config.color)
            .setFooter("SpartSkid v1 - by zokow")
            message.channel.send(soutienembed)
            console.log("\n [$]") + ("  commande soutien executée")

          }
 

          if(command == prefix + "lightgen") {

            const lightgen = new MessageEmbed()
            .setTitle("🍔・LightGen")
            .setURL("https://discord.gg/lightgen")
            .setDescription("Tu peux nous rejoindre en cliquant sur le titre de l'embed !")
            .setThumbnail("")
            .setColor(config.color)
            .setFooter("SpartSkid v1 - by zokow")
            message.channel.send(lightgen)
            console.log("\n [$]") + ("  commande LightGen executée")
          }

          if(command == prefix + "spartzemmour"){
            const spartzemmour = new MessageEmbed()
            .setTitle("SpartZemmour")
            .setColor(config.color)
            .setThumbnail("https://cdn.discordapp.com/attachments/918833024207061003/933775724714786856/2Q.png")
            .setFooter("SpartSkid v1 - by zokow")
            .setDescription("Saviez-vous que Spartix porte un grand amour pour Zemmour ?")    
            message.channel.send(spartzemmour)
            console.log("\n [$]") + ("  commande SpartZemmour executée")
        }       
    
    if(command == prefix + "ping"){
      const pingembed = new MessageEmbed()
      .addField("Ping", `${message.createdAt - message.createdAt + "ms"}`, true)
      .addField("Latence", `${client.ws.ping}ms`, true)
      .setColor(config.color)
      message.channel.send(pingembed)
      console.log("\n [$]") + ("  commande Ping executée")


    }
        if(command == prefix + "reload"){
          if(message.author.id != config.owner) return message.channel.send("t'es pas owner du bot")
          if(config.owner === message.author.id === true) {         
                const reloadembed = new MessageEmbed()
                .setDescription("**Patientez, le bot est en train de redémarrer ...**")
                .setColor(config.color)
                let bot = message.client;
                const reloadembed2 = new MessageEmbed()
                .setDescription("**Le bot a redémarré avec succès !**")
                .setColor(config.color)
                message.channel.send(reloadembed).then(() => bot.destroy()).then(() => bot.login(config.token)).then(() => message.channel.send(reloadembed2)) 
                console.log("\n [$]") + ("  commande Reload executée")
 
                }
              } 
              if (message.content == config.prefix + 'help') {
                const logchannel = message.guild.channels.cache.get(config.botlog);
                 const LogHelpEmbed = new MessageEmbed()
                 .setTitle("Logs du Bot")
                 .setColor(config.color)
                 .setDescription(`<@${message.author.id}> **vient d'utiliser la commande Help**`)
                 .setThumbnail(message.author.displayAvatarURL({ format: 'gif'}))
                logchannel.send(LogHelpEmbed);
              }            
                
         
        
    
})



// on se login
client.login(config.token)
