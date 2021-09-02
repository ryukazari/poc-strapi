'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    changed: async (ctx) => {
        try{
            const { id } = ctx.params;
            //const result = await strapi.query('event').find({ id });
            const result = await strapi.services.event.findOne({ id });
            const emails = result.students.map(e => e.email);
            console.log(emails);
            const emailOptions = {
                to: emails,
                subject: 'This is a test',
                html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
            }
            await strapi.plugins['email'].services.email.send(emailOptions);
            ctx.send("eehh?");
        } catch(err) {
            strapi.log.error(`Error sending email`, err)
            ctx.send({ error: 'Error sending email' })
        }
    }
};
