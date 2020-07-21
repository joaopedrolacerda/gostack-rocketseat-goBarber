# Recuperação de senha

**RF**

- o usuário deve poder recuperar sua senha utilizando o e-mail
- o usuário deve poder receber um e-mail com intruções de recuperação de senha
- o usuário deve poder resetar sua senha;

**RNF**

- utulizar mailtrap para testar envio em ambiente dev;
- utilizar amazon SES para envios em produção;
- o envio de e-mail deve acontecer em segundo plano (background job)

**RN**

- o link enviado por email para resetar senha, deve expirar em 2h;
- o usuário precisa confirmar a nova senha ao resetar sua senha

# atualização do perfil

**RF**

- o usuário deve poder atualizar seu nome, email e senha.

**RN**

- o usuário não pode alterar seu email para um email já utilizado.

- para atualizar sua senha o usuário deve informar sua senha antiga.

- para atualizar a sua senha o usuário precisa confirmar a nova senha.

# painel do prestador

**RF**

- o usuário deve poder listar seus agendamentos em um dia especifico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos para o prestador no dia devem ser armazenados no cache
- As notificações do prestador devem ser armazenadas no mongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando socketIO

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mes com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponives em um dia especifico de um prestador;
- O usuário deve poder realizar de um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos deve estar disponiveis entre 8h ás 18h(Primeiro horário as 8h, ultimo as 17h);
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviços consigo mesmo
