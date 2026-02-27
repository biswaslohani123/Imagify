import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'


const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

const PORT = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('API WORKINg')
})

app.listen(PORT, () => {
    
    console.log(`Server running on PORT ${PORT} `);
    
})
