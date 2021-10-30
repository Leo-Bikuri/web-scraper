const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
//Using axios express and cheerio npm packages
const app = express()

const url = '' //Enter url of the webpage
axios(url)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        //Used to look for specific elements or classes on the webpage
        $('.core', html).each(function(){
            const title = $(this).find('')
            const url = $(this).find('a').attr('href')//example looking for href in a tag
            articles.push({
                title,
                url
            })
        })
        console.log(html)
    }).catch(err => console.log(err))

app.listen(PORT , ()=> console.log('server running'))