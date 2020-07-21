import { inject, injectable } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

injectable();
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailProvider')
    private MailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    this.MailProvider.sendMail(
      email,
      'pedido de recuperação de senha recebido',
    );
  }
}

export default SendForgotPasswordEmailService;
