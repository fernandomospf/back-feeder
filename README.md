# Back-Feeder

<article>
    <h3>Objetivo</h3>
    A ideia do projeto surgiu no momento em que estavamos desenvolvendo nosso portifólio e sentimos a necessidade de ter algo que pudesse automatizar o processo de inserir novos projetos no portifólio.<br>
    E com isso pensamos em criar não só para nós, mas para todas as pessoas que quiserem utilizar.
    Após fazer o login e fazer a inserção de seus projeto, será gerado seu endpoins, e bastará fazer a requisição na API para ter todos seus projetos.<br>
    Exemplo: <strong>api url example</strong>
    <h3>Tecnologias</h3>
    <table>
        <thead>
            <tr>
                <td>Linguagens</td>
                <td>Framework</td>
            </tr>
        <thead>
        <tbody>
            <tr>
                <td><a href="https://nodejs.org/api/fs.html"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/></a></td>
                <td>Sequelize</td>
            </tr>
            </tr>
            <tr>
                <td><a href="https://www.alura.com.br/artigos/o-que-e-sql#:~:text=SQL%20significa%20Standard%20Query%20Language,SQL%20Server%2C%20entre%20muitos%20outros."><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"></a></td>
                <td>--------------</td>
            </tr>
              <tr>
                <td>
                <a href="https://www.npmjs.com/package/joi">JOI</a>
                </td>
                <td>--------------</td>
        </tbody>
    </table>
</article>
<br><br>

<details>
<summary><strong>Desenvolvedores</strong></summary>
<ul>
    <li>
        <strong>Eduardo Tatsuo Miyazaki</strong>
        <div>
            <a href="https://github.com/edtmi"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a><br>
            <a href="https://www.linkedin.com/in/eduardo-tatsuo-miyazaki/">  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
        </div>
    </li>
    <li>
        <strong>Fernando Mós</strong>
          <div>
            <a href="https://github.com/FernandoMos92"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a><br>
            <a href="https://www.linkedin.com/in/fernando-mos/">  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
        </div>
    </li>
    <li>
        <strong>Pedro Lima</strong>
          <div>
            <a href="https://github.com/PedroPDIN"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a><br>
            <a href="https://www.linkedin.com/in/in-pedrolima/">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
                </a>
        </div>
    </li>
   </ul>
</details><br><br>
   

<details>
    <summary><strong>1. Cadastrar usuário</strong></summary>
    <br>
    <ol>
        <li>
            <input type="checkbox" disabled />
            <strong>firstName</strong>: <span>- Min 4 caracteres;</span><br>
        </li>
        <li>
            <input type="checkbox" disabled /> <strong>lastName</strong>: 
            <span>- Min 4 caracteres;</span><br>
        </li>
        <li>
            <input type="checkbox" disabled /> <strong>username</strong>:
             <span>- Min 4 caracteres;</span></br>
        </li>
        <li>
            <input type="checkbox" disabled /> <strong>email</strong>: 
            <span>- Gerar token com username e armazenar;</span></br>
        </li>
        <li>
            <input type="checkbox" disabled /> <strong>password</strong>:
            <span>- Min 8 caracteres e ser alfa numérico;</span></br>
        </li>
        <li>
            <input type="checkbox" disabled /> <strong>turma</strong>:
            <span>- *NÃO OBRIGATÓRIO*;</span></br>
        </li>
    </ol>
</details></br>

<details>
    <summary><strong>2. Login usuário</strong></summary>
    </br>
    <ol>
        <li>
            <input type="checkbox" disabled />
            <strong>username</strong>: <span>- Decodar o token e verificar se é válido;</span><br>
        </li>
        <li>
            <input type="checkbox" disabled />
            <strong>password</strong><br>
        </li>
        <li>
            <input type="checkbox" disabled />
            <strong>lembrar a senha</strong></br>
        </li>
    </ol>
</details>