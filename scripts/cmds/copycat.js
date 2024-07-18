module.exports = {
    echoActive: false,

    config: {
        name: 'copycat',
        aliases: ["cc"],
        version: '1.0',
        author: 'Cruizex',
        shortDescription: 'Copys messages in the group',
        category: 'utility',
        guide: {
            en: '{p}{n} on/off',
        }
    },

    onStart: async function ({ api, event }) {
        try {
            const threadID = event?.threadID;

            if (event?.body.toLowerCase().includes('echo on')) {
                this.echoActive = true;
                api.sendMessage('CopyCat activated ✅ I will now copy any message sent in the group.', threadID);
            } else if (event?.body.toLowerCase().includes('echo off')) {
                this.echoActive = false;
                api.sendMessage('CopyCat deactivated ⭕ I will stop copy messages.', threadID);
            }
        } catch (error) {
            console.error('Error in echo command:', error);
        }
    },

    onChat: async function ({ api, event }) {
        try {
            if (this.echoActive && !event?.body.toLowerCase().includes('echo off')) {
                api.sendMessage(event?.body, event?.threadID);
            }
        } catch (error) {
            console.error('Error in echo command:', error);
        }
    },
};
