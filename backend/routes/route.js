
import express from "express"
import { getAllCard,getCard,createCard} from "../controllers/controller.js";


const router = express.Router();

router.post('/',createCard);
router.get('/',getAllCard);
router.get('/:title', getCard);

export default router;