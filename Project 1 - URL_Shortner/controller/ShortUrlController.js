import { Url } from '../models/Urls.js';
import shortid from 'shortid';

export const ShortUrlController = async (req, res) => {
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:3004/${shortCode}`;

    // save to database
    const new_url = new Url({
        shortCode,
        longUrl,

    });
    await new_url.save();
    console.log('New URL saved to database ✅', new_url);
    res.render('index.ejs', { title: 'Shorten App', shortUrl });




}

export const getOriginalUrl = async (req, res) => {
    const shortCode = req.params.shortCode;
// find on database
const originalUrl = await Url.findOne({shortCode});

if(!originalUrl){
    return res.status(404).json({message: 'Url not found'});
}
else{
    res.redirect(originalUrl.longUrl);
}
   
}