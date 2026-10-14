import {Router} from "express";
import {policiesController} from "../controllers/policiesController";

class PoliciesRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config(): void {
    this.router.get('/policies', policiesController.list);
    this.router.get('/policies/:id', policiesController.getOne);
  }
}
export const policiesRoutes = new PoliciesRoutes();
export default policiesRoutes.router;