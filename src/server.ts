import createApp from './application/app'

const app = createApp()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`)	    
})