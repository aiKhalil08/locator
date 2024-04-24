const about = (req, res) => {
    res.render('index', { title: 'About us' });
}

module.exports = {about};