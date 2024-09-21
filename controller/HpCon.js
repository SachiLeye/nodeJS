const ph = {

    nom:(req, res)=>{
        res.render('index');
    },
    Maria:(req, res)=>{
        res.render('maria');
    },
    Sachi:(req, res)=>{
        res.render('sachi');
    },
    Lette:(req, res)=>{
        res.render('lette');
    },
    Leyesa:(req, res)=>{
        res.render('leyesa');
    }
};

module.exports = ph;

