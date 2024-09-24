import createApp from './application/app'
import { AppDataSource } from './data-source'

const app = createApp()
const port = process.env.PORT


AppDataSource.initialize().then(async () =>{
    app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`)	    
    })
    console.log('Database connected')
}).catch((error) => {
    console.log('Error connecting to database', error)
})
