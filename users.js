import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "ashu",
        lastName: "srini",
        age: 23
    }
]
router.get('/', (req,res) => {
    console.log(users);
    res.send('hello');
});

export default router;