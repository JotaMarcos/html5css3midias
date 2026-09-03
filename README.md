# Estilização de Páginas Web — HTML5 e CSS3

Projeto prático desenvolvido na disciplina **Desenvolvimento Web I**, do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS), da Faculdade de Tecnologia SENAC Amazonas (FATESE).

O projeto consolida, em uma página única, as técnicas de estilização de imagens e vídeos apresentadas em aula, com ênfase em soluções responsivas e reutilizáveis, aplicáveis a qualquer imagem ou vídeo, incluindo conteúdo incorporado do YouTube.

HTML5 e CSS3 são responsáveis pela estrutura e pela apresentação visual, enquanto o **JavaScript é utilizado exclusivamente para as ações de interatividade**, como a navegação manual do carrossel por meio dos botões de seta, mantendo a separação de responsabilidades entre as três linguagens (Web Standards).

## Funcionalidades

- Estrutura HTML5 semântica (`header`, `main`, `section`, `footer`).
- Seção inicial (`hero`) com fundo em efeito parallax.
- Galeria de imagens responsiva, com efeito de destaque ao passar o cursor.
- Vídeo nativo HTML5, com capa (`poster`) e controles.
- Incorporação responsiva de vídeo do YouTube, mantendo a proporção 16:9 em qualquer resolução.
- Carrossel automático de imagens, construído apenas com CSS3 (`@keyframes`).
- Carrossel manual de imagens, com navegação por setas, cuja interatividade é implementada em JavaScript (arquivo `js/carrossel.js`).
- Formulário de contato reaproveitando a base de estilo original da disciplina.
- Responsividade em abordagem mobile-first, por meio de `media queries`.
- Suporte à preferência de redução de movimento (`prefers-reduced-motion`), desativando animações e o efeito parallax para usuários sensíveis a movimento.

## Tecnologias utilizadas

- HTML5
- CSS3 (variáveis customizadas, Flexbox, Grid, `@keyframes`, `aspect-ratio`)
- JavaScript (ES5, sem dependências externas)

## Estrutura do projeto

```
pratica-web/
├── index.html
├── style.css
├── js/
│   └── carrossel.js
└── roteiro-pratica-1h.md
```

## Como executar

1. Clonar o repositório.
2. Abrir a pasta do projeto no Visual Studio Code.
3. Iniciar o arquivo `index.html` com a extensão Live Server.

Não há dependências externas a serem instaladas.

## Roteiro da prática

O arquivo `roteiro-pratica-1h.md` descreve o passo a passo utilizado para a construção do projeto, organizado em sete etapas, com carga horária total de uma hora.

## Referências bibliográficas

- ZELDMAN, Jeffrey; MARCOTTE, Ethan. *Designing with Web Standards*. 3. ed. Berkeley: New Riders, 2010.
- MARCOTTE, Ethan. Responsive Web Design. *A List Apart*, maio 2010.
- KEITH, Jeremy. *HTML5 for Web Designers*. 2. ed. Nova York: A Book Apart, 2016.
- MEYER, Eric A.; WEYL, Estelle. *CSS: The Definitive Guide*. 4. ed. Sebastopol: O'Reilly Media, 2017.
- W3C — World Wide Web Consortium. *CSS Specifications* e *Web Content Accessibility Guidelines (WCAG)*.

## Instituição

Faculdade de Tecnologia SENAC Amazonas (FATESE) — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS), 2º Período.
