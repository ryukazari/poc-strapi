'use strict'

module.exports = {
    send: async (emails) => {
        const emailOptions = {
            to: emails,
            subject: 'This is a test',
            html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
        }
        await strapi.plugins['email'].services.email.send(emailOptions);
    }
}