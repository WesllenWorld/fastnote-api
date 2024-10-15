import createApp from '../application/app'
import { AppDataSource } from '../db/data-source'
//import "reflect-metadata"

const app = createApp()
const port = process.env.PORT


AppDataSource.initialize().then(async () => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
}).catch((error) => {
    console.log(error)
})
