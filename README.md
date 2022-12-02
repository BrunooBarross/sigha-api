<p align="center">
  <h1 align="center">
    SIGHA API - Bruno Barros
  </h1>
</p>

## 💻 Tecnologias Utilizadas

- PostgreSQL
- TypeScript
- Express
- jwt
- bcrypt
- Joi
- AWS S3

---


## 👨🏻‍💻 Instalação

```bash

$ git clone https://github.com/BrunooBarross/sigha-api

$ crie um arquivo .env conforme específicado no .env-example -> É necessário conhecimentos sobre a Amazon S3

$ npm i

$ npx prisma migrate dev

$ npm run dev

```

## 🚀 API:

```yml
POST /signup
    - Rota para cadastro de usuários
    - headers: {}
    - body: {
        "userName": String - min 3 caracteres
        "email": email@dominio.com
        "password": String - min 4 caracteres
        
    }
```

```yml
POST /signin
    - Rota para realização de login
    - headers: {}
    - body: {
        "email": email@dominio.com
        "password": String - min 4 caracteres
    }
```

```yml
POST /documents (authenticated)
    - Rota que salva um documento
    - headers: { "Authorization": "Bearer ${token}" }
    - body: type FormData
    {
        "file": Arquivo - jpeg, pjpeg, jpg, png, pdf, gif
        "title": String
        "type": String 'Online' ou Presencial'
        "issueDate": Date
        "hours": number
    }
```

```yml
GET /documents (authenticated)
    - Rota que retorna os documentos do usuários
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```

```yml
GET /documents/search (authenticated)
    - Rota que retorna os codumentos baseado no título enviado via query params
    - headers: { "Authorization": "Bearer ${token}" }
    - queryParams: "?title=${title}"
    - body: {}
```

```yml
DELETE /documents (authenticated)
    - Deleta determinado documento através do seu id
    - headers: { "Authorization": "Bearer ${token}, id" }
    - body: {}
```

```yml
PUT /documents (authenticated)
    - Rota que atualiza um documento
    - headers: { "Authorization": "Bearer ${token}, id" }
    - body: {
        "file": O envio do arquivo é opcional - jpeg, pjpeg, jpg, png, pdf, gif
        "title": String
        "type": String 'Online' ou Presencial'
        "issueDate": Date
        "hours": number
    }
```
