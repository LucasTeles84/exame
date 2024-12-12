
API RESTful para gerenciamento de usuários e missões, construída com Node.js, Express e TypeORM com PostgreSQL.

Tecnologias
- Node.js
- Express
- TypeORM
- PostgreSQL
- Bcrypt
- JSON Web Token (JWT)
Instalação
1. Clone o repositório:
   git clone https://github.com/seuusuario/meu-projeto.git](https://github.com/LucasTeles84/exame.git)

2. Navegue até o diretório:
   cd EXAME

3. Instale as dependências:
   npm install

4. Crie um arquivo .env com as variáveis:
   DATABASE_URL=postgresql://usuario:senha@host:porta/nome_do_banco
   JWT_SECRET=sua_chave_secreta
   PORT=3000

 Uso
Inicie o servidor:
npm start

Acesse a API em http://localhost:3000.

## Endpoints Principais
- **Registrar Usuário**: POST /register
- **Login**: POST /login
- **Criar Missão**: POST /missoes
- **Listar Missões**: GET /missoes
- **Excluir Missão**: DELETE /missoes/:id
