import { Router } from "express";
import { ReportController } from "../controller/report.controller";
const ReportRouter = Router();

ReportRouter.get("/", ReportController.get_report);

export { ReportRouter };
