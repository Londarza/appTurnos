import { Router } from "express";
import userRouter from "./userRoutes";
import appointmentsRouter from "./appointmentsRouter";
const router : Router = Router()


router.get('/', (req,res)=>{
    res.send('todo ok en index ')
})
router.use('/users',userRouter)
router.use('/appointments', appointmentsRouter)



export default router