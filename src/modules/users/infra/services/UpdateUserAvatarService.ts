import path from 'path';
import fs from 'fs';

import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../typeorm/entities/User';

import uploadConfig from '../../../../config/upload';

import AppError from '../../../../shared/errors/AppError';

interface Request {
  user_id: string;
  avatarFilename: string;
}

interface Request {
  user_id: string;
  avatarFilename: string;
}
@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError(' Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      // deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExits = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExits) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    return user;
  }
}

export default UpdateUserAvatarService;
