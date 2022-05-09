const express = require('express')
const router = express.Router()
const Temperature = require('../models/Temperature')

const SECRET = 'luan';

const jwt = require('jsonwebtoken')

const expressValidator = require('express-validator')

const UserSchema = require('../models/Users')
const auth = require('../middlewares/auth')

const validate = [
    expressValidator.check('temperature').isLength({min: 1}).withMessage('Field temperature can not be null'),
    expressValidator.check('temperature').isNumeric().withMessage('Field temperature should be a number')
]

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).end();

        res.userId = decoded.userId;
        next();
    })
}

router.get('/',verifyJWT, (req, res) => {
    
    Temperature.find().then(temperatures => {
        res.status(200).send(temperatures);
        
    }).catch(error => {
        res.status(500).send(error)
    })
})

router.get('/:id', (req, res) => {

    Temperature.findById(req.params.id)
    .then(temperature => {
        res.status(200).send(temperature)
    }).catch(error => {
        res.status(404);
    })

})

router.post('/', [validate], (req, res) => {

    const erros = expressValidator.validationResult(req);
    if(!erros.isEmpty()){
        return res.status(422).send({erros: erros.array()})
    }

    const temperature = new Temperature({
        temperature: req.body.temperature
    })

    temperature.save()
    .then(result => {
        res.status(201).send(result)
    })
})



router.post('/login', auth, (req, res) => {

    Temperature.find().then(temperatures => {
        const token = jwt.sign({userId: 1}, SECRET, {expiresIn: 300})
        return res.json({auth: true, token})

    }).catch(error => {
        res.status(404).end;
    })
})
 

router.delete('/', (req, res) => {
    
    Temperature.deleteMany().then(result => {
        res.status(200).send()
    });
})

router.delete('/query', (req, res) => {
    
    Temperature.findByIdAndDelete(req.query.id)
    .then(result => {
        res.status(200).send(result)
    }).catch( error => {
        res.status(404).send()
    })
})

router.put('/:value', (req, res) => {
    const pathValue = req.params.value

    Temperature.findById(req.query.id).then(temperature => {
        temperature.temperature = pathValue
        temperature.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })

})

module.exports = router;
