import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import userRouter from './routes/userRouter.js'
import imageRouter from './routes/imageRoutes.js'



const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

const PORT = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('API WORKINg')
})

// APi

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);


app.listen(PORT, () => {
    
    console.log(`Server running on PORT ${PORT} `);
    
})
