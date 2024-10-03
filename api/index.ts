import cookiePerser from 'cookie-parser';
import express from 'express'
import cors from 'cors'


const app = express();

app.use(cors({credentials: true, origin: process.env.CLIENT_URL}));
app.use(cookiePerser());

app.get('/', (req,res) => res.send('working good'))

app.listen(3000, () => console.log('Server is running on port 3000'))
