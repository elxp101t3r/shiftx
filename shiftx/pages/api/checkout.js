import { initMongoose } from "../../lib/mongoose";

export default async function handler(req,res){
    await initMongoose();

    if(req.method !== 'POST'){
        res.body('Not post, but it wants post!').send();
        return;
    }

    res.json(req.method);
}