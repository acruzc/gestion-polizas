import {Request, Response} from "express";
import {Policy} from "../model/models"

let policies: Policy[] = [
  { id: "1", holder: "Ana López", type: "auto", status: "activa", premium: 127.5 },
  { id: "2", holder: "Javier García", type: "hogar", status: "expirada", premium: 238.8 },
  { id: "3", holder: "Rocío Martínez", type: "vida", status: "pendiente", premium: 74.3 },
];

class PoliciesController {
  public async list(req: Request, res: Response): Promise<void> {
    res.status(200).json(policies);
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const policy = policies.find(p => p.id === id);
    if (policy) {
      res.status(200).json(policy);
    } else {
      res.status(404).json({ message: "Esa póliza no existe" });
    }
  }

}

export const policiesController = new PoliciesController();