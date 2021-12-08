# Gerenciador de Tarefas


### Backend (api):

Entrar na pasta da api
    $cd task-manager-api

Install dependencies:
    $ yarn 

Configurar .env seguindo o .env.example

Após iniciar o docker e instalar o postgress.
Run psql in docker:
    $ docker compose build

    $ docker compose up -d

Agora com o banco de dados iniciado podemos apenas rodar as migrations.
Run migrations:
    $ yarn typeorm migration:run

Run project in dev mode:
    $ yarn dev:server


### Frontend 

Entrar na pasta do frontend
    $ cd my-tasks

Install dependencies:
    $ yarn 

Iniciar 
    $ yarn start 
    
<small>Lembrando que o yarn pode ser substituído pelo npm, rodando praticamente os mesmos comandos.</small>

### Features 
- [x] Listar todas as tarefas
- [x] Procurar tarefa por nome (selecionando apenas a primeira)
- [x] Criar tarefas
- [x] Atualizar tarefas
- [x] Deletar Tarefa
- [ ] Testes integrados
- [ ] Testes mockados
