import { Request, Response } from 'express';
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {

  async handle(req: Request, res: Response) {
    const getLastThreeMessagesService = new GetLastThreeMessagesService();

    const result = await getLastThreeMessagesService.execute();

    return res.json(result);
  }

}

export { GetLastThreeMessagesController }