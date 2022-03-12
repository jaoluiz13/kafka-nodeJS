import express from 'express';

const routes = express.Router();

routes.post('/certifications', async(req,res)=>{
    //chama o micro serviço
    const message = {
        user : {id : 1, name : 'João Luiz'},
        course:'Kafka com node',
        grade:5,
    }
    await req.producer.send({
        topic:'issue-certificate',
        messages:[
            {value: JSON.stringify(message)}
        ]
    })
    return res.json({ok:true});
});

export default routes;