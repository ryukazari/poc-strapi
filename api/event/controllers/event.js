'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    changed: async (ctx) => {
        try{
            const { id } = ctx.params;
            const result = await strapi.services.event.findOne({ id });
            const emails = result.students.map(e => e.email);
            await strapi.services.email.send(emails);
            ctx.send({ ok: true, message: 'Correos enviados.' });
        } catch(err) {
            strapi.log.error(`Error sending email`, err)
            ctx.send({ error: 'Error sending email' })
        }
    }
};
