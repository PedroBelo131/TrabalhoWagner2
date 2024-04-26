/** @type{import('fastify').FastifyPluginAsync<>} */

import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function auth(app, options) {
    const users = app.mongo.db.collection('users');

    app.post('/auth', async (request, reply) => {
        //usuario do body da request
        let user = request.body;

        request.log.info(`Login for user ${user.username}`);

        // primeiro username = banco de dados
        let yourUser = await users.findOne({ username : user.username });
        
        let criptPass 

        if(yourUSer.username == user.username ){

            return {
                'x-access-token' : app.jwt.sign(user)
            }

        }
        //check login details
        delete user.password;
        
    });
}