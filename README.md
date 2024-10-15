# Fastnote 

FastNote é uma API para gerenciamento de notas e tags de usuários, construída com Node.js, Express, TypeORM e PostgreSQL. Este projeto tem funcionalidades para CRUD de notas, tags e usuários, permitindo que os usuários autenticados possam gerenciar suas próprias notas.

## Funcionalidades

### Usuários:
* Criação, leitura, atualização e exclusão de usuários.
* Validação de email e UUID para garantir consistência.

### Notas:
* CRUD de notas associadas a usuários.
* Suporte para associação de múltiplas tags a uma nota.

### Tags:
* CRUD de tags associadas a usuários.
* Relação Many-to-One entre tags e usuários.

## Tecnologias utilizadas

* Node.js - Para o backend em JavaScript.
* Express - Framework minimalista para rotas e middleware.
* TypeORM - ORM para interagir com o banco de dados.
* PostgreSQL - Banco de dados relacional.
* TypeScript - Tipagem estática para o desenvolvimento mais seguro e robusto.
* class-validator - Para validação de DTOs.
* Vercel - Para deploy da API.

## Instalação

1. **Clone o repositório**

```
git clone https://github.com/WesllenWorld/fastnote-api.git
```

2. **Instale as dependências**

```
npm install
```

3. **Configure as variáveis de ambiente**

4. **Compile o projeto TypeScript**

```
npm run build
```

5. **Inicie o servidor**

```
npm run start
```

## Variáveis de ambiente

* DB_DATABASE: Define o nome do banco de dados ao qual a aplicação se conecta.
* DB_USERNAME: O nome de usuário usado para autenticar a conexão com o banco de dados.
* DB_PASSWORD: A senha associada ao usuário do banco de dados.
* DB_HOST: O endereço do servidor do banco de dados, geralmente configurado como localhost para desenvolvimento local.
* DB_PORT: O número da porta onde o servidor de banco de dados está rodando. Para PostgreSQL, a porta padrão é 5432.
* DB_TYPE: Define o tipo do sistema de gerenciamento de banco de dados. Neste caso, está configurado como postgres para utilizar o PostgreSQL.
* synchronize: Uma flag que determina se o TypeORM deve sincronizar automaticamente o esquema do banco de dados sempre que a aplicação for executada. Geralmente, é configurada como false em ambientes de produção para evitar alterações indesejadas no esquema.
* PORT: Define a porta onde o servidor da aplicação será executado.

## Scripts Disponíveis

* npm run build - Compila o TypeScript para JavaScript utilizando tsup (pasta dist).
* npm run start - Inicia o servidor Express na pasta dist.
* npm run start:dev - Inicia o servidor em modo de desenvolvimento com tsx.
* npm run start:watch - Inicia o servidor em modo de desenvolvimento e reinicia caso algum arquivo seja alterado
* npm run start:dist - Roda os scripts dist e start.

## Configuração do tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Rotas

### Notas

- **GET /api/notes/:userId**  
  Retorna todas as notas de um usuário específico.  
  **Controller**: `getAllNotesByUserIdController`

- **GET /api/notes/:userId/:noteId**  
  Retorna uma nota específica de um usuário.  
  **Controller**: `getNoteByUserIdController`

- **GET /api/notes/:userId/:noteId/tags**  
  Retorna as tags associadas a uma nota específica.  
  **Controller**: `getTagsByNoteIdController`

- **GET /api/notes/:userId/tags/:tagId**  
  Retorna todas as notas associadas a uma tag específica.  
  **Controller**: `getNotesByTagIdController`

- **POST /api/notes/:userId**  
  Cria uma nova nota para um usuário.  
  **Controller**: `postNoteController`

- **DELETE /api/notes/:userId/:noteId**  
  Deleta uma nota específica de um usuário.  
  **Controller**: `deleteNoteByIdController`

- **PUT /api/notes/:userId/:noteId**  
  Atualiza uma nota específica de um usuário.  
  **Controller**: `updateNoteController`

### Tags

- **GET /api/tags/:userId**  
  Retorna todas as tags de um usuário.  
  **Controller**: `getAllTagsByUserIdController`

- **GET /api/tags/:userId/:tagId**  
  Retorna uma tag específica de um usuário.  
  **Controller**: `getTagByUserIdController`

- **GET /api/tags/:userId/name/:tagName**  
  Retorna uma tag específica de um usuário pelo nome da tag.  
  **Controller**: `getTagByUserIdAndTagNameController`

- **GET /api/tags/:userId/color/:tagColor**  
  Retorna todas as tags de um usuário que têm uma cor específica.  
  **Controller**: `getTagsByUserIdAndColorController`

- **POST /api/tags/:userId**  
  Cria uma nova tag para um usuário.  
  **Controller**: `postTagController`

- **DELETE /api/tags/:userId/:tagId**  
  Deleta uma tag específica de um usuário.  
  **Controller**: `deleteTagByIdController`

- **PUT /api/tags/:userId/:tagId**  
  Atualiza uma tag específica de um usuário.  
  **Controller**: `updateTagController`

### Usuários

- **GET /api/users/:userId**  
  Retorna um usuário específico pelo seu ID.  
  **Controller**: `getUserByIdController`

- **POST /api/users**  
  Cria um novo usuário.  
  **Controller**: `postUserController`

- **DELETE /api/users/:userId**  
  Deleta um usuário específico.  
  **Controller**: `deleteUserByIdController`

- **PUT /api/users/:userId**  
  Atualiza um usuário específico.  
  **Controller**: `updateUserController`
