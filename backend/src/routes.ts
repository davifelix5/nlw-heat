import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { GetUserProfileController } from './controllers/GetUserProfileController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);
router.get('/messages/last-three', new GetLastThreeMessagesController().handle);

router.get('/user/profile', ensureAuthenticated, new GetUserProfileController().handle);

export { router }
