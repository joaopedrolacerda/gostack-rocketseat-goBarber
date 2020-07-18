import { Request, Response } from 'express';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import { container } from 'tsyringe';

export default class UserAvatarController {
  async update(request: Request, response: Response): Promise<Response> {
    const UpdateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await UpdateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;
    return response.json({ user });
  }
}
