'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    changed: async (ctx) => {
        const { id } = ctx.params;
        //const result = await strapi.query('event').find({ id });
        const result = await strapi.services.event.findOne({ id });
        const emails = result.students.map(e => e.email);
        console.log(emails);
        await strapi.plugins['email'].services.email.send({
            to: emails,
            from: 'ryukazari@gmail.com',
            subject: 'Date of the event changed',
            text: 'Ola?',
            html: `
                <strong>adios</strong>
            `,
          });
        ctx.send("eehh?");
    }
};
