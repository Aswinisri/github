import express from "express";
import Mail from "./emailmodel.js";
import connectDB from "./maildb.js";
import bcrypt from 'bcrypt';
const app = express();
app.use(express.json());
connectDB();

app.get("/api/mail",(req,res) => {
    try {
        res.status(200).send(mail);
      }
       catch (error) 
      {
        res.json({ message:"unable to created"});
      }
});
Mail
app.post('/api/register', async (req, res) => {
	const { mailid, password: Password } = req.body

	if (!mailid || typeof mailid !== 'string') {
		return res.json({ status: 'error', error: 'Invalid mailid' })
	}

	if (!Password || typeof Password !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (Password.length<6) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}
    if (Password.length==6) {
		return res.json({
			status: 'correct',
			message: 'valid password'
		})
	}

	const password = await bcrypt.hash(Password, 6)

	try {
		const response = await Mail.create({
			mailid,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (Password.length!=6) {
			// duplicate key
			return res.json({ msg:'password is too long' })
		}
		throw error
       
    }
    res.send({msg:"ok"});
    
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});