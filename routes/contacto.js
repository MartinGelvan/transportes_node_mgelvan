var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contacto', {
        isContacto: true
    }); // view/contacto.hbs
})

router.post('/', async function (req, res, next) {
    //console.log(req.body)


    //capturando los datos
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var comentarios = req.body.comentarios;
    //onsole.log(req.body.nombre);

    var obj = {
        to: 'madstnadagadaeadlvn@gmail.com',
        subject: 'Contacto desde la pagina web',
        html: nombre + " se contacto a traves de la web y quiere saber mas info a este correo: " + email + "<br> Su tel es: " + tel + " . Su comentario es: " + comentarios + "."

    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }) // finaliza el transport

    var info = await transport.sendMail(obj);

    res.render('contacto', {
        message: 'Mensaje enviado correctamente',
        isContacto: true
    })

}); // finaliza router.post




module.exports = router;