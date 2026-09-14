# geracaotech-fullcycle
curso geração tech 4.0 - full cycle - engenharia de software

## BAIXANDO A IMAGEM DOCKER
` docker pull hello-world`

## RODANDO A IMAGEM DOCKER
` docker run hello-world `

---

# Rodando o projeto Lista de tarefas
### Clone o projeto
` git clone https://github.com/pomptrash/geracaotech-fullcycle/ `
### Navegue até o repositório
` cd SEU-REPOSITORIO `
### Abra o repositório no VSCODE
` .code `
### No terminal do VSCODE, rode:
` docker run -d -p 8080:80 -v "${PWD}:/usr/share/nginx/html" --name meu-site nginx:alpine `
### Acesse no navegador:
` http://localhost:8080/ `



