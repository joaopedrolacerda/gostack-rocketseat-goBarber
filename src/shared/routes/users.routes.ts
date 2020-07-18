import { Router } from 'express';

import multer from 'multer';
import CreateUserService from '../../modules/users/services/CreateUserServices';

import uploadConfig from '../../config/upload';

import ensureAuthenticated from '../infra/http/ensureAuthenticated';
import UpdateUserAvatarService from '../../modules/users/services/UpdateUserAvatarService';

// : Rota receber a requisição, chamar outro arquivo, devolver uma resposta
const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const UpdateUserAvatar = new UpdateUserAvatarService();

    const user = await UpdateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;
    response.json({ user });
  },
);
export default usersRouter;
