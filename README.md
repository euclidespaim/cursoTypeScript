# 🚀 Projeto TypeScript - Curso Modular

Este projeto faz parte de um curso completo de TypeScript, voltado para quem já tem boa base em JavaScript e deseja dominar TS de forma progressiva, com teoria e prática organizadas por módulos.

---

## 📚 Estrutura do Projeto

```bash
typescript-estudos/
├── src/
│   ├── modulo1/
│   ├── modulo2/
│   ├── modulo3/
│   └── modulo4/
├── dist/
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

Cada módulo contém exercícios práticos e exemplos baseados nos tópicos estudados, incluindo:

- Tipos primitivos
- Inferência
- Funções tipadas
- Objetos e interfaces
- E muito mais…

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [nodemon](https://nodemon.io/)
- VS Code (opcional)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Scripts disponíveis

| Script         | Descrição                                                                 |
|----------------|--------------------------------------------------------------------------|
| `npm run build` | Compila os arquivos TypeScript para a pasta `dist/`                      |
| `npm start`     | Executa o arquivo compilado `dist/index.js`                              |
| `npm run dev`   | Usa `nodemon + ts-node` para rodar um arquivo `.ts` automaticamente a cada alteração (ex: `src/modulo4/objetos.ts`) |

---

## 🧪 Rodando exemplos

Para compilar e rodar os arquivos manualmente:

```bash
npx tsc
node dist/moduloX/arquivo.js
```

Ou direto com `ts-node`:

```bash
npx ts-node src/moduloX/arquivo.ts
```

---

## ✅ Progresso dos Módulos

- ✅ Módulo 1 — Introdução ao TypeScript  
- ✅ Módulo 2 — Tipos Primitivos e Inferência  
- ✅ Módulo 3 — Funções Tipadas  
- ✅ Módulo 4 — Objetos e Tipagem Estruturada  
- 🔜 Módulo 5 — Arrays, Tuplas e Enums

---

## 🧙‍♂️ Autor

**Euclides Paim**  
Professor | Desenvolvedor | Aventureiro TypeScript

> Este projeto faz parte de um curso modular, organizado com carinho, código limpo e foco pedagógico. Compartilhe, forke, brinque e experimente!

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.