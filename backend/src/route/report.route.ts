import { Router } from "express";
import { ReportController } from "../controller/report.controller";
const ReportRouter = Router();

ReportRouter.post("/", ReportController.send_report);

export { ReportRouter };
