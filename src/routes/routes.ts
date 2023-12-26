import express from 'express';
import URL from '../models/urlModel';

const router = express.Router();

router.post('/shorten', async (req, res) => {
    try{
        const url = new URL({ completeURL: req.body.completeURL });
        await url.save();
        res.redirect('/');
    }catch(error){
        res.status(500).send('Invalid URL');
    }
});

router.get('/', async (req, res) => {
    try{
        const urls = await URL.find();
        res.render('index', { urls });
    }catch(error){
        res.status(500).send('Server error');
    }
});

router.get('/:shortURL', async (req, res) => {
    try{
        const shortURL = req.params.shortURL;
        const url = await URL.findOne({ shortURL });
        if(!url){
            return res.status(400).send('URL not found');
        }
    }catch(error){
        res.status(500).send('URL not found');
    }
})