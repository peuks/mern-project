/**
 * All SyncRoutes should be set up here
 */

import { Router } from "express";
import { syncOrders } from "../controllers/syncController.js";



const router = Router();

// 
router.get("/orders", syncOrders);



export default router;
