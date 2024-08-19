import Cards from '../models/cards.js';
import { v4 } from 'uuid';

const createCard = async (req,res) => {
    try {
        const {title, description} = req.body;
        const id = v4();
        const card = new Cards({id : id,title : title, description : description});
        await card.save();
        res.status(201).json({data : card});
    } catch (error) {
        res.status(500).json({message : "server error", error : error})
    }
}

const getAllCard = async(req,res) => {
    try {
        const cards = await Cards.find();
        res.status(200).json({data : cards})
    } catch (error) {
        res.status(500).json({message : "server error", error : error});
    }
}

const getCard =  async (req,res) => {
    try {
        const {title} = req.params;
        console.log(title)
        const card = await Cards.findOne({title : title});
        if(!card){
            return res.status(404).json({message : "Card not found"});
        }
        res.status(200).json({data : card})
    } catch (error) {
        res.status(500).json({message : "server error", error : error});
    }
}

export  {
    getAllCard,getCard,createCard
}