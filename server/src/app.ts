import express, { Application, Request, Response } from 'express'
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app: express.Application = express();
const cors = require('cors');
const path = require('path');

app.get('/', (req: Request, res: Response) => {
    res.send('hello graphQL');
})

// Allow corss-origin
app.use(cors())

//** Setup GrapQL server */
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))


//** Set PORT */
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
