/**
 * lessons.js
 * Dados de todas as lições do módulo Python Essentials.
 * Cada objeto tem: id, title, desc, tag, theory[], tip, warning?, code
 */

const LESSONS = [
  // ── AULA 0: Artigo de instalação ──────────────────────────────────────────
  {
    id: 0,
    module: 1,
    title: "Instalação do Ambiente",
    desc: "Como instalar Python, VSCode e Jupyter Notebook para programar do zero.",
    tag: "início",
    type: "article",
    html: `
      <div class="art-eyebrow">Módulo 1 · Aula 0 — Configuração do Ambiente</div>
      <h2 class="art-title">Como Instalar Python, VSCode e Jupyter Notebook Para Programar do Zero</h2>
      <p class="art-lead">
        Antes de começarmos a programar de verdade, precisamos preparar nosso ambiente de desenvolvimento.
        Neste tópico você vai aprender passo a passo como instalar tudo que será necessário para programar
        em Python da forma correta, mesmo que nunca tenha mexido com programação antes.
      </p>

      <div class="art-install-list">
        <div class="art-install-title">Lista do que vamos instalar:</div>
        <ul>
          <li>🔗 Python</li>
          <li>🔗 VSCode</li>
          <li>🔗 Extensão Python</li>
          <li>🔗 Extensão Jupyter</li>
          <li>🔗 Extensões Adicionais</li>
        </ul>
      </div>

      <div class="art-section-head"><span class="art-pin">📍</span> Instalando o Python</div>
      <p class="art-p">O primeiro passo para começarmos nossa jornada na programação com Python é instalar a linguagem em nosso computador. Para isso, acesse o site oficial do Python e realize o download da versão estável mais recente disponível. Utilizar a versão mais atual garante acesso aos recursos mais modernos, além de correções de segurança e melhorias de desempenho.</p>

      <div class="art-callout art-callout-info art-callout-dl">🔗 <strong>Site para o Download:</strong> <a class="art-dl-btn" href="https://www.python.org/downloads/" target="_blank" rel="noopener">⬇️ python.org/downloads: Clique Aqui</a></div>

      <p class="art-p">Clique em <strong>Downloads</strong> como a IMAGEM 1 sugere.</p>
      <div class="art-img-block" data-src="images/img-01.png" data-label="IMAGEM 1: Página de Download do Python"></div>

      <p class="art-p">Escolha o Sistema Operacional que estiver utilizando, como na IMAGEM 2.</p>
      <div class="art-img-block" data-src="images/img-02.png" data-label="IMAGEM 2: Escolha do Sistema Operacional"></div>

      <div class="art-callout art-callout-info">🔦 Neste tópico, estarei demonstrando a instalação utilizando o sistema operacional <strong>Windows</strong>. Caso utilize Linux ou outro sistema, basta selecionar a opção correspondente na IMAGEM 2.</div>

      <p class="art-p">Após isso, você terá duas opções de versão, como mostra a IMAGEM 3. A primeira é a versão mais recente lançada. A segunda é a versão estável/recomendada, com maior compatibilidade. Para fins de aprendizado inicial, as diferenças práticas entre elas normalmente não são significativas.</p>
      <div class="art-img-block" data-src="images/img-03.png" data-label="IMAGEM 3: Versões disponíveis para download"></div>

      <div class="art-callout art-callout-warn">⚠️ <strong>Atenção:</strong> antes de clicar em instalar, marque a opção <strong>"Add Python to PATH"</strong>, como indica a IMAGEM 4. Essa configuração permitirá que seu sistema operacional reconheça o Python corretamente.</div>
      <div class="art-img-block" data-src="images/img-04.png" data-label='IMAGEM 4: Marcar "Add Python to PATH"'></div>

      <p class="art-p">Após marcar essa opção, prossiga normalmente com a instalação, o famoso <strong>"Next, Next, Next"</strong>.</p>
      <div class="art-img-block" data-src="images/img-05.png" data-label="IMAGEM 5: Processo de instalação"></div>

      <p class="art-p">Após finalizar, confirme se o Python foi instalado corretamente. Abra o <strong>CMD</strong> ou terminal e execute:</p>
      <div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>python --version
py --version</pre></div>
      <p class="art-p">Se tudo estiver correto, o terminal retornará a versão instalada do Python.</p>
      <div class="art-img-block" data-src="images/img-06.png" data-label="IMAGEM 6: Abrindo o terminal / CMD"></div>
      <div class="art-img-block" data-src="images/img-07.png" data-label="IMAGEM 7: Versão do Python retornada no terminal"></div>

      <div class="art-section-head"><span class="art-pin">📍</span> Instalando o VSCode</div>
      <p class="art-p">Com o Python instalado, nosso próximo passo é instalar o <strong>VSCode (Visual Studio Code)</strong>. O VSCode é um editor de código profissional amplamente utilizado por programadores no mundo inteiro e será o ambiente que utilizaremos para escrever, organizar e executar nossos códigos.</p>

      <div class="art-callout art-callout-info art-callout-dl">🔗 <strong>Site para o Download:</strong> <a class="art-dl-btn" href="https://code.visualstudio.com/" target="_blank" rel="noopener">⬇️ code.visualstudio.com: Clique Aqui</a></div>

      <p class="art-p">Selecione a versão correspondente ao seu sistema operacional e realize o download. Após isso, execute o instalador e prossiga com a instalação padrão, novamente o famoso <strong>"Next, Next, Next"</strong>.</p>
      <div class="art-img-block" data-src="images/img-08.png" data-label="IMAGEM 8: Download do VSCode"></div>
      <div class="art-img-block" data-src="images/img-09.png" data-label="IMAGEM 9: Instalação do VSCode"></div>
      <div class="art-img-block" data-src="images/img-10.png" data-label="IMAGEM 10: VSCode aberto após instalação"></div>

      <div class="art-section-head"><span class="art-pin">📍</span> Instalando a Extensão Python</div>
      <p class="art-p">Precisamos preparar o editor para trabalhar com Python. Instalaremos a extensão oficial da <strong>Microsoft</strong> que adiciona: reconhecimento de sintaxe, sugestões automáticas de código, integração com o interpretador, ferramentas de depuração e execução facilitada de scripts.</p>
      <p class="art-p">Abra o VSCode, clique em <strong>Extensões</strong> (<strong>Ctrl + Shift + X</strong>), pesquise por <strong>Python</strong> e clique em <strong>Install</strong> na extensão oficial da Microsoft.</p>

      <div class="art-callout art-callout-warn">☝️ <strong>Observação:</strong> no meu caso o botão aparece como "Switch to Pre-Release Version" por já ter o Python instalado. Na sua primeira instalação, aparecerá apenas o botão <strong>Install</strong>.</div>
      <div class="art-img-block" data-src="images/img-11.png" data-label="IMAGEM 11: Extensão Python no VSCode"></div>

      <div class="art-section-head"><span class="art-pin">📍</span> Instalando a Extensão Jupyter</div>
      <p class="art-p">A extensão <strong>Jupyter</strong> permitirá usar arquivos interativos chamados <strong>Notebooks</strong>, nos quais executamos códigos em blocos separados, o que facilita muito o aprendizado. Abra as Extensões (<strong>Ctrl + Shift + X</strong>), pesquise por <strong>Jupyter</strong>, selecione a versão oficial da Microsoft e clique em <strong>Install</strong>.</p>

      <div class="art-callout art-callout-warn">☝️ <strong>Observação:</strong> pequenas diferenças visuais podem ocorrer porque meu ambiente já está configurado. Na sua primeira instalação aparecerá o botão <strong>Install</strong> normalmente.</div>
      <div class="art-img-block" data-src="images/img-12.png" data-label="IMAGEM 12: Extensão Jupyter no VSCode"></div>

      <div class="art-section-head"><span class="art-pin">📍</span> Extensões Opcionais Recomendadas</div>
      <p class="art-p">Além das extensões principais, estas adicionais melhoram bastante a experiência de desenvolvimento:</p>

      <div class="art-ext-grid">
        <div class="art-ext-card"><div class="art-ext-name">🎨 Dracula Theme Official</div><div class="art-ext-desc">Tema visual moderno e agradável para longos períodos de estudo.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">📁 Material Icon Theme</div><div class="art-ext-desc">Ícones melhores para pastas e arquivos, tornando a navegação mais intuitiva.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">⚙️ Python Indent</div><div class="art-ext-desc">Auxilia na indentação correta, essencial para iniciantes em Python.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🌐 Python Environments</div><div class="art-ext-desc">Gerencia ambientes Python. Muito útil ao trabalhar com ambientes virtuais.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🐛 Python Debugger</div><div class="art-ext-desc">Executa em modo debug para identificar erros e comportamentos inesperados.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🧠 Pylance</div><div class="art-ext-desc">Autocompletar avançado, validação e sugestões inteligentes de código.</div></div>
      </div>

      <div class="art-img-block" data-src="images/img-13.png" data-label="IMAGEM 13: Dracula Theme"></div>
      <div class="art-img-block" data-src="images/img-14.png" data-label="IMAGEM 14: Material Icon Theme"></div>
      <div class="art-img-block" data-src="images/img-15.png" data-label="IMAGEM 15: Python Indent"></div>
      <div class="art-img-block" data-src="images/img-16.png" data-label="IMAGEM 16: Python Environments"></div>
      <div class="art-img-block" data-src="images/img-17.png" data-label="IMAGEM 17: Python Debugger"></div>
      <div class="art-img-block" data-src="images/img-18.png" data-label="IMAGEM 18: Pylance"></div>

      <div class="art-conclusion">
        <h3>📍 Conclusão do Primeiro Passo</h3>
        <p>Parabéns, o primeiro passo da sua jornada foi concluído com sucesso. Seu ambiente de desenvolvimento agora está totalmente preparado para iniciarmos nossos estudos práticos em Python.</p>
        <p>Lembre-se: não desista no primeiro obstáculo. Programação é uma habilidade construída com constância, prática e repetição. Um pequeno progresso diário, acumulado ao longo de meses e anos, gera resultados gigantescos no futuro.</p>
      </div>
    `,
  },

  {
    id: 0,
    module: 1,
    eyebrow: "Módulo 1 · Aula 1 — Primeiros Passos com Python",
    title: "Codando pela Primeira Vez",
    desc: "Seu primeiro contato com Python. Aprenda a exibir mensagens na tela com a função print().",
    tag: "início",
    theory: [
      {
        heading: "📌 O que é Python?",
        body: `Python é uma linguagem de programação de alto nível, interpretada e de propósito geral.
É amplamente usada em <b>segurança da informação</b>, análise de dados, automação e desenvolvimento web.
<br><br>
No contexto de segurança, Python é a linguagem padrão para escrever scripts de pentest, análise de malware e automação de processos.`,
      },
      {
        heading: "📓 Usando o Jupyter Notebook no VSCode",
        body: `Vamos escrever nossa primeira linha de código. Para isso, precisamos aprender a utilizar o Jupyter Notebook no VSCode.
<br><br>
Como estamos utilizando o Jupyter Notebook dentro do VSCode, esse processo fica muito mais simples para quem está começando.
<br><br>
Abra normalmente seu <strong>Visual Studio Code</strong>, que aprendemos a instalar no Tópico de Instalação.
<br><br>
<div class="art-img-block" data-src="images/img-20.png" data-label="IMAGEM 1: Abrindo o Visual Studio Code"></div>
<br>
No canto superior esquerdo, clique em <strong>File</strong> e em seguida em <strong>New File</strong>.
<br><br>
<div class="art-img-block" data-src="images/img-21.png" data-label="IMAGEM 2: File → New File"></div>
<br>
O VSCode perguntará qual tipo de arquivo você deseja criar. Clique na opção <strong>Jupyter Notebook</strong>. Após isso, o VSCode abrirá automaticamente um ambiente de Notebook interativo onde poderemos escrever e executar nossos códigos em pequenos blocos.
<br><br>
<div class="art-img-block" data-src="images/img-22.png" data-label="IMAGEM 3: Selecionando Jupyter Notebook"></div>
<div class="art-img-block" data-src="images/img-23.png" data-label="IMAGEM 4: Jupyter Notebook aberto no VSCode"></div>
<br>
Após abrir seu Jupyter Notebook, você perceberá que o ambiente possui dois botões principais para criação de novos blocos: <strong>+ Code</strong> e <strong>+ Markdown</strong>. Embora ambos criem novos blocos, cada um possui uma função completamente diferente.
<br><br>
<b>O botão + Code</b> é utilizado para criar um novo <strong>bloco de programação</strong>. Sempre que você quiser escrever comandos em Python, testar códigos, executar funções ou praticar programação, deverá utilizar esse tipo de bloco. Tudo que for código ou programação, utilize <strong>+ Code</strong>.
<br><br>
<div class="art-img-block" data-src="images/img-24.png" data-label="IMAGEM 5: Botão + Code"></div>
<br>
<b>Já o botão + Markdown</b> é utilizado para criar blocos de <strong>texto explicativo/documentação</strong>. Esse tipo de bloco não executa código, serve apenas para adicionar textos, anotações, títulos, observações ou explicações pessoais.
<br><br>
<div class="art-img-block" data-src="images/img-25.png" data-label="IMAGEM 6: Botão + Markdown"></div>
<br>
<div style="background: rgba(0,200,255,.06);border: 1px solid rgba(0,200,255,.2);border-left: 3px solid var(--accent);border-radius: 8px;padding: 12px 16px;font-size: 13px;color: var(--text);">
  Durante seus estudos, você provavelmente utilizará <strong>90% do tempo</strong> apenas o botão <strong>+ Code</strong>. O <strong>+ Markdown</strong> será mais útil futuramente, quando quiser organizar seus estudos e fazer anotações.
</div>`,
      },
      {
        heading: "📟 Escrevendo seu Primeiro Código",
        body: `Antes de continuarmos, precisamos aprender um comando extremamente importante que começará a aparecer constantemente daqui para frente.
<br><br>
<div style="background: rgba(0,200,255,.06);border: 1px solid rgba(0,200,255,.2);border-left: 3px solid var(--accent);border-radius: 8px;padding: 12px 16px;font-size: 13px;color: var(--text);">
  <b>Observação Importante:</b> O comando <code>print()</code> é um dos mais fundamentais do Python, você o utilizará em absolutamente todos os seus programas.
</div>
<br>
<b>Mas afinal, o que ele faz?</b><br><br>
De forma bem simples: <code>print()</code> serve para <b>mostrar informações na tela</b>.<br><br>
Sempre que quisermos exibir algum texto, número, variável ou resultado dentro do nosso programa, utilizaremos o comando <code>print()</code>.
<br><br>
<b>Por exemplo:</b><br><br>
<code>print("Olá, Mundo!")</code>
<br><br>
<div class="art-img-block" data-src="images/img-19.png" data-label="Execução do print() no Jupyter Notebook"></div>
<br><br>
Não entendeu? Vamos colocar mais alguns exemplos:
<br><br>
<code>print("Número 7")</code><br>
<code>print("O Resultado é 10")</code><br>
<code>print("O Aluno tirou Nota 10")</code>
<br><br>
<div class="art-img-block" data-src="images/img-26.png" data-label="Execução: print('Número 7')"></div>
<div class="art-img-block" data-src="images/img-27.png" data-label="Execução: print('O Resultado é 10')"></div>
<div class="art-img-block" data-src="images/img-28.png" data-label="Execução: print('O Aluno tirou Nota 10')"></div>
<br>
Ou seja, o <code>print()</code> basicamente retornará para a tela o resultado de tudo que você construiu, é o que quem estiver usando o seu sistema verá como resposta.`,
      },
    ],
    tip: "Em segurança, print() é muito usado para exibir logs de scripts de automação e resultados de varreduras.",
    code: `# Seu primeiro programa Python
print("Olá, Mundo!")
print("Bem-vindo ao PadilhaSec!")
print("Python é essencial para Segurança da Informação")
`,
  },

  {
    id: 1,
    module: 2,
    eyebrow: "Módulo 2 · Aula 0 — Variáveis",
    title: "Variáveis",
    desc: "Aprenda a armazenar informações em variáveis: o bloco fundamental de qualquer programa.",
    tag: "básico",
    theory: [
      {
        heading: "📦 O que é uma Variável?",
        body: `Uma variável é um <b>nome utilizado para armazenar um valor na memória do programa</b>, permitindo guardar e reutilizar informações durante toda a execução do código.
<br><br>
<code>nome = "Padilha"</code>`,
      },
      {
        heading: "💡 Explicando Melhor o que é Variável (Sem Técniques)",
        body: `Calma! Não se assuste. Acho que, para uma primeira explicação, o conceito ficou um pouco técnico demais, não é?
<br><br>
Então vamos utilizar uma <b>analogia excelente</b> para facilitar seu entendimento.
<br><br>
Hoje em dia praticamente todo mundo possui um celular, certo? E acredito que grande parte das pessoas utilize aplicativos de comunicação como WhatsApp, Telegram e outros semelhantes.
<br><br>
Agora pense comigo: quando você precisa ligar para alguém muito próximo, como por exemplo seu pai ou sua mãe, você digita manualmente o número inteiro deles toda vez?
<br><br>
Ou você simplesmente abre sua lista de contatos e procura diretamente pelo nome salvo na agenda, como <b>"Mãe"</b> ou <b>"Pai"</b>?
<br><br>
Muito provavelmente você utiliza o nome salvo, certo? Isso acontece porque seu celular <b>armazenou um valor na memória</b>. Toda vez que você seleciona o contato "Mãe", ele automaticamente associa esse nome ao número de telefone salvo na agenda, como mostra a imagem abaixo:
<br><br>
<div style="max-width: 300px;margin: 0 auto"><div class="art-img-block" data-src="images/img-29.png" data-label="Agenda de contatos do celular"></div></div>
<br>
Se fossemos representar isso por trás dos panos dentro da programação, seria como se o computador armazenasse essas informações exatamente desta maneira:
<br><br>
<code>mae = "9999-9999"</code><br>
<code>pai = "9888-8888"</code>
<br><br>
O mesmo acontece com qualquer outro contato da sua agenda.
<br><br>
Trazendo isso agora para o mundo da programação, uma variável funciona de forma muito parecida. Eu posso, por exemplo, associar a variável <code>meu_nome</code> ao valor <code>"Vinicius Padilha"</code>.
<br><br>
Da mesma forma que no seu celular você associou o nome "Mãe" ou "Pai" a determinado número de telefone, dentro do código eu posso associar um nome a determinado valor. Assim, toda vez que meu programa encontrar <code>meu_nome</code>, ele automaticamente entenderá que aquele nome representa o valor <code>"Vinicius Padilha"</code>.
<br><br>
<code>meu_nome = "Vinicius Padilha"</code>`,
      },
      {
        heading: "💡 Regras Básicas Para Criar Variáveis",
        body: `Agora que você já entendeu o conceito de variável, precisamos falar sobre algumas <b>regras importantes</b> na hora de criá-las. Embora possamos escolher praticamente qualquer nome, existem certas limitações que devem ser respeitadas para que o código funcione corretamente.
<br><br>
<b>👆 Primeira Regrinha</b><br>
Uma variável <b>não pode conter espaços</b> em seu nome. O Python interpreta o espaço como uma separação entre elementos. Caso precise usar mais de uma palavra, separe com underline (<code>_</code>).
<br><br>
<code><span class="code-err">meu nome = "Vinicius"  # ERRADO</span></code><br>
<code><span class="code-ok">meu_nome = "Vinicius"  # CORRETO</span></code>
<br><br>
<b>👆 Segunda Regrinha</b><br>
Uma variável <b>não pode começar com números</b>. Porém, números podem aparecer no meio ou final do nome.
<br><br>
<code><span class="code-err">1nome = "Vinicius"       # ERRADO</span></code><br>
<code><span class="code-ok">nome1 = "Vinicius"       # CORRETO</span></code><br>
<code><span class="code-ok">usuario2026 = "Padilha"  # CORRETO</span></code>
<br><br>
<b>👆 Terceira Regrinha</b><br>
Uma variável <b>não pode utilizar caracteres especiais</b> como <code>@</code> <code>#</code> <code>!</code> <code>%</code> <code>&</code>.
<br><br>
<code><span class="code-err">@nome = "Vinicius"  # ERRADO</span></code><br>
<code><span class="code-err">#nome = "Vinicius"  # ERRADO</span></code><br>
<code><span class="code-err">!nome = "Vinicius"  # ERRADO</span></code><br>
<code><span class="code-err">nome% = "Vinicius"  # ERRADO</span></code><br>
<code><span class="code-err">nome& = "Vinicius"  # ERRADO</span></code>
<br><br>
<b>👆 Quarta Regrinha</b><br>
O Python <b>diferencia letras maiúsculas de minúsculas</b>. Embora pareçam iguais visualmente, para o Python essas são duas variáveis completamente diferentes.
<br><br>
<code>nome = "Vinicius"</code><br>
<code>Nome = "Padilha"</code>`,
      },
      {
        heading: "💡 Boas Práticas ao Nomear Variáveis",
        body: `Além das regras obrigatórias, existem também <b>boas práticas</b> utilizadas no mercado. Sempre tente dar nomes <b>claros e objetivos</b> para suas variáveis. Evite nomes genéricos; prefira nomes que expliquem claramente o que está sendo armazenado. Isso torna seu código muito mais organizado e fácil de entender futuramente.
<br><br>
<code><span class="code-err">x = "Vinicius"           # NÃO RECOMENDADO</span></code><br>
<code><span class="code-err">a = 10                   # NÃO RECOMENDADO</span></code><br>
<code><span class="code-err">teste = "Padilha"        # NÃO RECOMENDADO</span></code><br>
<code><span class="code-ok">nome_usuario = "Vinicius" # RECOMENDADO</span></code><br>
<code><span class="code-ok">idade_usuario = 27        # RECOMENDADO</span></code><br>
<code><span class="code-ok">saldo_conta = 1500        # RECOMENDADO</span></code>`,
      },
      {
        heading: "✋ Mão na Massa: 4 Exemplos Práticos",
        body: `Agora que você já entendeu o conceito de variáveis e suas regras básicas, chegou a hora de colocar a mão no código e testar tudo na prática.
<br><br>
Lembrando que ao final de cada módulo temos uma lista de exercícios para você colocar o aprendizado em prática de verdade, saindo dominando o conteúdo e já podendo aplicar no mundo real.
<br><br>
<b>👆 Guardando Seu Nome</b><br>
Vamos começar com algo simples: armazenar seu nome dentro de uma variável.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>meu_nome = "Coloque seu nome aqui"
print("Meu nome é:", meu_nome)</pre></div>
<div class="art-img-block" data-src="images/img-30.png" data-label="Exemplo 1: Guardando Seu Nome"></div>
<br>
<b>👆 Guardando Sua Idade</b><br>
Agora vamos armazenar um número dentro de uma variável.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>minha_idade = 27
print("Tenho", minha_idade, "anos")</pre></div>
<div class="art-img-block" data-src="images/img-31.png" data-label="Exemplo 2: Guardando Sua Idade"></div>
<br>
<b>👆 Guardando Cidade e Estado</b><br>
Vamos trabalhar com mais de uma variável ao mesmo tempo.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>cidade = "São Paulo"
estado = "SP"
print("Moro em", cidade, "-", estado)</pre></div>
<div class="art-img-block" data-src="images/img-32.png" data-label="Exemplo 3: Guardando Cidade e Estado"></div>
<br>
<b>👆 Guardando Variáveis Sobre Você</b><br>
Um exercício mais pessoal: use tudo que aprendeu e crie variáveis com suas próprias informações.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = "Vinicius Padilha"
idade = 27
profissao = "Analista de Segurança"
print(nome, "tem", idade, "anos e é", profissao)</pre></div>
<div class="art-img-block" data-src="images/img-33.png" data-label="Exemplo 4: Guardando Variáveis Sobre Você"></div>
<br>
<b>👆 Misturando Diversos Tipos de Informação</b><br>
Agora vamos juntar tudo em um único exemplo.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome_usuario   = "Vinicius Padilha"
idade_usuario  = 27
cidade_usuario = "São Paulo"
profissao_usuario = "Analista de Segurança"
ativo = True

print("Nome:", nome_usuario)
print("Idade:", idade_usuario)
print("Cidade:", cidade_usuario)
print("Profissão:", profissao_usuario)
print("Conta ativa:", ativo)</pre></div>
<div class="art-img-block" data-src="images/img-34.png" data-label="Exemplo 5: Misturando Diversos Tipos de Informação"></div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# ✋ Guardando Seu Nome
meu_nome = "Coloque seu nome aqui"
print("Meu nome é:", meu_nome)

# ✋ Guardando Sua Idade
minha_idade = 0  # Substitua pelo seu número
print("Tenho", minha_idade, "anos")

# ✋ Guardando Cidade e Estado
cidade = "São Paulo"
estado = "SP"
print("Moro em", cidade, "-", estado)

# ✋ Variáveis Sobre Você
nome = "Seu Nome"
idade = 0
profissao = "Sua Profissão"
print(nome, "tem", idade, "anos e é", profissao)

# ✋ Misturando Diversos Tipos de Informação
nome_usuario  = "Vinicius Padilha"
idade_usuario = 27
cidade_usuario = "São Paulo"
profissao_usuario = "Analista de Segurança"
ativo = True

print("Nome:", nome_usuario)
print("Idade:", idade_usuario)
print("Cidade:", cidade_usuario)
print("Profissão:", profissao_usuario)
print("Conta ativa:", ativo)
`,
  },

  {
    id: 2,
    module: 2,
    eyebrow: "Módulo 2 · Aula 1 — Tipos de Variáveis",
    title: "Tipos de Variáveis",
    desc: "Entenda os tipos fundamentais de variáveis: int, string, float e boolean.",
    tag: "básico",
    theory: [
      {
        heading: "🏷️ O que são Tipos de Variáveis?",
        body: `Uma <b>variável</b> é um nome que armazena um valor na memória do programa, permitindo guardar e reutilizar informações durante a execução do código. Isso já aprendemos no módulo anterior, certo?
<br><br>
<div style="background: rgba(0,200,255,.06);border: 1px solid rgba(0,200,255,.2);border-left: 3px solid var(--accent);border-radius: 8px;padding: 12px 16px;font-size: 13px;color: var(--text);">
  💡 <b>Relembrando:</b> Se eu coloquei que <code>nome = "Padilha"</code>, então toda vez que no meu código eu digitar a variável <code>nome</code>, quando o código for executado aparecerá <code>"Padilha"</code>.
</div>
<br>
Agora vamos aprender os <b>tipos de variáveis</b>, ou seja, que tipo de valor uma variável pode armazenar.`,
      },
      {
        heading: "int → Inteiro",
        headingClass: "type-heading",
        body: `Utilizado para armazenar números inteiros, sem casas decimais.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000
type(faturamento)</pre></div>
<div class="art-img-block" data-src="images/img-35.png" data-label="int: Resultado: int"></div>`,
      },
      {
        heading: "string → Texto",
        headingClass: "type-heading",
        body: `Utilizado para armazenar qualquer tipo de texto. O valor deve estar entre aspas.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = "Qualquer Texto"
type(faturamento)</pre></div>
<div class="art-img-block" data-src="images/img-36.png" data-label="string: Resultado: str"></div>`,
      },
      {
        heading: "float → Ponto Flutuante",
        headingClass: "type-heading",
        body: `Utilizado para armazenar números com parte decimal.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000.00
type(faturamento)</pre></div>
<div class="art-img-block" data-src="images/img-37.png" data-label="float: Resultado: float"></div>`,
      },
      {
        heading: "bool → True ou False",
        headingClass: "type-heading",
        body: `Utilizado para armazenar apenas dois valores possíveis: verdadeiro ou falso.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = True
type(faturamento)</pre></div>
<div class="art-img-block" data-src="images/img-38.png" data-label="bool: Resultado: bool"></div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Tipos de dados em Python
faturamento_int    = 1000
faturamento_str    = "Qualquer Texto"
faturamento_float  = 1000.00
faturamento_bool   = True

print(type(faturamento_int))
print(type(faturamento_str))
print(type(faturamento_float))
print(type(faturamento_bool))
`,
  },

  {
    id: 3,
    module: 2,
    eyebrow: "Módulo 2 · Aula 2 — Operações Aritméticas",
    title: "Operações Aritméticas",
    desc: "Aprenda a realizar cálculos matemáticos em Python com os operadores aritméticos.",
    tag: "básico",
    theory: [
      {
        heading: "➕ O que são Operações Aritméticas?",
        body: `Operações aritméticas em Python são comandos usados para realizar <b>cálculos matemáticos</b> com números. Existem diversas operações disponíveis, porém as mais utilizadas e importantes são: <code>adição (+)</code>, <code>subtração (−)</code>, <code>multiplicação (*)</code>, <code>divisão (/)</code> e <code>módulo (%)</code>.
<br><br>
<div style="background: rgba(0,200,255,.06);border: 1px solid rgba(0,200,255,.2);border-left: 3px solid var(--accent);border-radius: 8px;padding: 12px 16px;font-size: 13px;color: var(--text);">
  💡 Todas as ordens de operações aritméticas seguem exatamente como funciona na matemática.
</div>`,
      },
      {
        heading: "💨 Soma",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(1 + 1)</pre></div>
<div class="art-img-block" data-src="images/im1.png" data-label="Soma: print(1 + 1)"></div>`,
      },
      {
        heading: "💨 Subtração",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(1 - 1)</pre></div>
<div class="art-img-block" data-src="images/im2.png" data-label="Subtração: print(1 - 1)"></div>`,
      },
      {
        heading: "💨 Multiplicação",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(1 * 1)</pre></div>
<div class="art-img-block" data-src="images/im3.png" data-label="Multiplicação: print(1 * 1)"></div>`,
      },
      {
        heading: "💨 Divisão",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(1 / 1)</pre></div>
<div class="art-img-block" data-src="images/im4.png" data-label="Divisão: print(1 / 1)"></div>`,
      },
      {
        heading: "💨 Módulo / Resto de Divisão",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(1 % 1)</pre></div>
<div class="art-img-block" data-src="images/im5.png" data-label="Módulo: print(1 % 1)"></div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Operações Aritméticas em Python
print(1 + 1)   # Soma
print(1 - 1)   # Subtração
print(1 * 1)   # Multiplicação
print(1 / 1)   # Divisão
print(1 % 1)   # Módulo / Resto
`,
  },

  {
    id: 4,
    module: 2,
    eyebrow: "Módulo 2 · Aula 3 — Strings",
    title: "Strings",
    desc: "Aprenda a trabalhar com textos em Python: concatenação, verificação e manipulação de strings.",
    tag: "básico",
    theory: [
      {
        heading: "📝 O que é uma String?",
        body: `Uma <b>string</b> em Python é um tipo de dado usado para representar <b>textos</b>, formada por uma sequência de caracteres entre aspas (simples, duplas ou triplas).
<br><br>
<code>"Olá, Mundo!"</code><br>
<code>'Vinicius Padilha'</code><br>
<code>"""Texto com múltiplas linhas"""</code>`,
      },
      {
        heading: "💡 Concatenar",
        headingClass: "type-heading",
        body: `Concatenar é <b>juntar dois ou mais textos em uma única frase</b>. É como pegar pedacinhos de texto separados e encaixar um depois do outro, formando uma mensagem completa.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print("Meu nome é: " + "Padilha")</pre></div>
<div class="art-img-block" data-src="images/im6.png" data-label="Concatenação de strings"></div>`,
      },
      {
        heading: "💡 in",
        headingClass: "type-heading",
        body: `O <code>in</code> serve para perguntar ao Python se um pedacinho de texto existe dentro de outro texto maior. É como <b>procurar uma palavra dentro de uma frase</b>.
<br><br>
<div style="background: rgba(0,200,255,.06);border: 1px solid rgba(0,200,255,.2);border-left: 3px solid var(--accent);border-radius: 8px;padding: 10px 14px;font-size: 13px;color: var(--text);margin-bottom: 12px;">
  💡 <b>Case Sensitive</b>: faz diferença se a letra é minúscula ou maiúscula. Para o Python, <code>"padilha"</code> e <code>"Padilha"</code> são textos diferentes, porque um começa com <code>p</code> minúsculo e o outro começa com <code>P</code> maiúsculo.
</div>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando 1:</div>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print("Meu nome é: " in "Padilha")</pre></div>
<div class="art-img-block" data-src="images/imm1.png" data-label="in: Resultado False"></div>
<div style="background: rgba(248,81,73,.08);border: 1px solid rgba(248,81,73,.25);border-radius: 6px;padding: 6px 14px;font-size: 13px;color: #f85149;display: inline-block;margin-bottom: 16px;">Resultado: False</div>
<br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando 2:</div>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print("Meu nome é:" in "Meu nome é: Padilha")</pre></div>
<div class="art-img-block" data-src="images/imm2.png" data-label="in: Resultado True"></div>
<div style="background: rgba(56,189,101,.08);border: 1px solid rgba(56,189,101,.25);border-radius: 6px;padding: 6px 14px;font-size: 13px;color: #38bd65;display: inline-block;">Resultado: True</div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Concatenação de strings
print("Meu nome é: " + "Padilha")

# Verificando se texto está contido em outro
print("Meu nome é: " in "Padilha")           # False
print("Meu nome é:" in "Meu nome é: Padilha") # True
`,
  },

  {
    id: 5,
    module: 2,
    eyebrow: "Módulo 2 · Aula 4 — Input",
    title: "Input",
    desc: "Aprenda a receber dados digitados pelo usuário durante a execução do programa.",
    tag: "básico",
    theory: [
      {
        heading: "⌨️ O que é o Input?",
        body: `O <code>input()</code> é uma função do Python que permite <b>receber dados digitados pelo usuário</b> durante a execução do programa.
<br><br>
Serve para <b>interagir com o usuário</b>, capturando informações como nome, idade, números, escolhas ou qualquer texto digitado. Com esses dados, o programa pode tomar decisões, fazer cálculos ou personalizar a saída.
<br><br>
É assim que seu sistema consegue interagir com a pessoa quando precisa pegar alguma informação, como um nome, idade, e-mail ou até dados de um cadastro.
<br><br>
Ou seja, o programa pergunta, o usuário responde, e depois o Python pode usar essa resposta dentro do código.`,
      },
      {
        heading: "💡 Exemplo de Input",
        headingClass: "type-heading",
        body: `<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>input("Qual seu Nome?")</pre></div>
<div class="art-img-block" data-src="images/in1.png" data-label="Exemplo de Input simples"></div>
<div class="art-img-block" data-src="images/in2.png" data-label="Input aguardando digitação do usuário"></div>
<br>
A imagem acima mostra o código rodando: primeiro ele <b>pergunta o nome da pessoa</b>, no caso, o usuário digitou <code>"Padilha"</code>. Após ser respondido, o Python <b>absorve o nome digitado</b> e o retorna como resultado do <code>input()</code>.`,
      },
      {
        heading: "💡 Input utilizando Variável",
        headingClass: "type-heading",
        body: `Agora utilizaremos o <code>input()</code> com a <b>variável</b> que aprendemos neste módulo.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = input("Qual seu Nome?")
print(nome)</pre></div>
<div class="art-img-block" data-src="images/inn1.png" data-label="Input armazenado em variável"></div>`,
      },
      {
        heading: "💡 Input com Operações Aritméticas + Variável",
        headingClass: "type-heading",
        body: `Agora vamos juntar tudo que aprendemos neste módulo: o <code>input()</code>, as <b>variáveis</b> e as <b>operações aritméticas</b>. O usuário responde dois números, armazenamos cada um em uma variável e somamos os valores.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>primeironumero = int(input("Escreva um número:"))
segundonumero  = int(input("Escreva um número:"))
print(primeironumero + segundonumero)</pre></div>
<div class="art-img-block" data-src="images/inn2.png" data-label="Input com soma de inteiros"></div>
<br>
No exemplo acima, no momento da pergunta o usuário respondeu <code>5</code> no primeiro <code>input()</code> e <code>5</code> no segundo <code>input()</code>. O Python somou os dois valores e retornou o resultado <code>10</code>.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 10px 14px;font-size: 13px;color: #e3b341;">
  ⚠️ <b>Obs:</b> foi utilizado o <code>int()</code> para o código deduzir que queremos somar <b>números inteiros</b> e não strings. Não se preocupe com o <code>int()</code> agora, você vai aprender sobre ele ainda neste módulo. Por enquanto, foque apenas em entender como o <code>input()</code> funciona.
</div>`,
      },
      {
        heading: "💡 Input com String + Variável",
        headingClass: "type-heading",
        body: `Agora utilizaremos o <code>input()</code> junto com <b>strings</b> e <b>variáveis</b> que aprendemos neste módulo. O usuário responde com seu primeiro e segundo nome, cada um armazenado em uma variável, e o Python concatena as duas strings formando o nome completo.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>primeiro_nome = input("Primeiro Nome: ")
segundo_nome  = input("Segundo Nome: ")
print(primeiro_nome + " " + segundo_nome)</pre></div>
<div class="art-img-block" data-src="images/inn3.png" data-label="Input com concatenação de strings"></div>
<br>
No exemplo acima, no primeiro <code>input()</code> o usuário digitou <code>"Vinicius"</code> e no segundo digitou <code>"Padilha"</code>. O Python concatenou as duas strings e exibiu o nome completo.
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 10px 14px;font-size: 13px;color: #e3b341;">
  ⚠️ <b>Obs:</b> foi utilizada uma string vazia <code>" "</code> para colocar espaço entre as strings, garantindo que o nome ficasse separado corretamente.
</div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Exemplo 1: Input simples
input("Qual seu Nome?")

# Exemplo 2: Input com variável
nome = input("Qual seu Nome? ")
print(nome)

# Exemplo 3: Input com soma de inteiros
primeironumero = int(input("Escreva um número: "))
segundonumero  = int(input("Escreva um número: "))
print(primeironumero + segundonumero)

# Exemplo 4: Input com concatenação de strings
primeiro_nome = input("Primeiro Nome: ")
segundo_nome  = input("Segundo Nome: ")
print(primeiro_nome + " " + segundo_nome)
`,
  },

  {
    id: 7,
    module: 2,
    eyebrow: "Módulo 2 · Aula 5 — Mistura de Variáveis",
    title: "Mistura de Variáveis",
    desc: "Aprenda a converter variáveis entre tipos para misturar strings, inteiros e outros dados.",
    tag: "básico",
    theory: [
      {
        heading: "⚠️ Tipos Incompatíveis",
        body: `O Python <b>não permite misturar tipos incompatíveis</b> diretamente em algumas operações, especialmente quando você tenta somar, concatenar ou formatar valores de tipos diferentes.
<br><br>
O Python gosta que cada coisa esteja no seu lugar. <b>Texto é texto. Número é número.</b> Então, quando tentamos misturar os dois diretamente, às vezes ele fica confuso e não consegue continuar.
<br><br>
Por exemplo, ao tentar concatenar uma string com um número inteiro diretamente:
<br><br>
<div style="background: rgba(240,200,0,.08);border: 1px solid rgba(240,200,0,.2);border-radius: 6px;padding: 6px 12px;font-size: 12px;color: #e3b341;display: inline-block;margin-bottom: 8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000
print("O Faturamento da Loja Foi:" + faturamento)</pre></div>
<div class="art-img-block" data-src="images/erro.png" data-label="Erro ao misturar string com inteiro"></div>
<br>
<div style="background: rgba(248,81,73,.06);border: 1px solid rgba(248,81,73,.25);border-left: 3px solid #f85149;border-radius: 8px;padding: 14px 16px;margin-bottom: 12px;">
  <div style="font-size: 11px;color: #f85149;font-weight: 700;letter-spacing: .6px;margin-bottom: 10px;">🚨 MENSAGEM DE ERRO:</div>
  <code style="background: #0d1117;color: #f85149;padding: 8px 12px;border-radius: 6px;display: block;font-size: 13px;margin-bottom: 14px;border: 1px solid rgba(248,81,73,.2);">TypeError: can only concatenate str (not "int") to str</code>
  <div style="font-size: 13px;color: var(--text);line-height: 1.7;">
    <b>O que significa esse erro? 🤔</b><br><br>
    O Python está te dizendo:<br>
    <span style="color: #fb923c;font-style: italic;display: block;margin: 8px 0 8px 12px;">"Oi! Eu só sei juntar <b>texto</b> com <b>texto</b>. Mas você pediu pra eu juntar <b>texto com número</b>, e eu não faço isso sozinho, não! 😅"</span>
    <b>TypeError</b> = erro de tipo. Aparece quando você tenta fazer uma operação entre tipos que o Python não sabe combinar. Aqui, o <code style="background: #0d1117;border: 1px solid rgba(0,200,255,.18);">+</code> tentou juntar uma <b>str</b> (texto) com um <b>int</b> (número inteiro), e o Python simplesmente não aceita isso no automático. 🧩<br><br>
    Mas calma! Tem solução, e você vai aprender agora. 👇
  </div>
</div>`,
      },
      {
        heading: "💡 Convertendo para String com str()",
        headingClass: "type-heading",
        body: `No exemplo abaixo, temos a variável <code>faturamento</code> com o valor <b>1000</b> (um número inteiro). Queremos exibir a mensagem <b>"O Faturamento da Loja Foi: 1000"</b>, mas como vimos antes, não podemos concatenar texto com número diretamente. A solução é envolver o <code>faturamento</code> com <code>str()</code>, convertendo o número para texto antes de juntar:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000
print("O Faturamento da Loja Foi:" + str(faturamento))</pre></div>
<div class="art-img-block" data-src="images/erro1.png" data-label="Resultado com str()"></div>
<br>
<div style="background:rgba(56,189,101,.06);border:1px solid rgba(56,189,101,.25);border-left:3px solid #38bd65;border-radius:8px;padding:14px 16px;margin-bottom:12px;">
  <div style="font-size:11px;color:#38bd65;font-weight:700;letter-spacing:.6px;margin-bottom:10px;">✅ FUNCIONOU!</div>
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    <b>O que o str() fez aqui? 🤔</b><br><br>
    O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">str()</code> pegou o número <b>1000</b> e o transformou em texto <b>"1000"</b>. Agora os dois são do mesmo tipo: texto com texto! O Python conseguiu juntar tudo sem reclamar. 🎉<br><br>
    Pensa assim: é como traduzir. O número falava "português dos números" e a string falava "português de texto". O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">str()</code> fez a tradução para que os dois conseguissem se entender. 🔤
  </div>
</div>`,
      },
      {
        heading: "💡 Convertendo para Inteiro com int()",
        headingClass: "type-heading",
        body: `No exemplo abaixo, a variável <code>numero</code> guarda o valor <b>"10"</b> — repare nas aspas, isso significa que é um <b>texto</b>, não um número. Se tentarmos somar <b>"10" + 5</b> diretamente, o Python vai reclamar porque texto e número não se misturam. Então, usamos o <code>int()</code> para <b>converter o texto em número inteiro</b> primeiro, e só depois fazemos a soma:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>numero = "10"
resultado = int(numero) + 5
print(resultado)</pre></div>
<div class="art-img-block" data-src="images/erro2.png" data-label="Resultado com int()"></div>
<br>
<div style="background:rgba(56,189,101,.06);border:1px solid rgba(56,189,101,.25);border-left:3px solid #38bd65;border-radius:8px;padding:14px 16px;margin-bottom:12px;">
  <div style="font-size:11px;color:#38bd65;font-weight:700;letter-spacing:.6px;margin-bottom:10px;">✅ FUNCIONOU!</div>
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    <b>O que o int() fez aqui? 🤔</b><br><br>
    A variável <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">numero</code> guardava o valor <b>"10"</b> como <b>texto</b> (string). O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">int()</code> transformou esse texto em um <b>número inteiro de verdade</b>. Aí sim o Python conseguiu fazer a conta <b>10 + 5</b> e retornar <b>15</b>. 🔢<br><br>
    Pensa assim: <b>"10"</b> como texto é só um símbolo visual, como escrever "dez" num papel. O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">int()</code> transforma esse símbolo num número de verdade, que o Python consegue usar para contas. 🧮
  </div>
</div>`,
      },
    ],
    practice: "Agora abra seu VSCode e teste com os exemplos apresentados.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Erro: misturando tipos incompatíveis
faturamento = 1000
# print("O Faturamento da Loja Foi:" + faturamento)  # Isso gera erro!

# Correto: convertendo para string
print("O Faturamento da Loja Foi:" + str(faturamento))

# Convertendo string para inteiro
numero = "10"
resultado = int(numero) + 5
print(resultado)
`,
  },

  {
    id: 8,
    module: 2,
    eyebrow: "Módulo 2 · Aula 6 — F-String",
    title: "F-String",
    desc: "Aprenda a maneira mais atual e simples de formatar e exibir variáveis dentro de textos no Python.",
    tag: "básico",
    theory: [
      {
        heading: "📌 O que é F-String?",
        body: `A <b>F-String</b> é uma forma mais simples, moderna e organizada de montar textos no Python.
<br><br>
Antes, quando queríamos juntar textos com variáveis, era comum usar o <code>+</code>, exatamente como aprendemos a fazer nos módulos de <b>Operações Aritméticas</b> e <b>Strings</b>. Isso deixava o código mais chato de escrever, principalmente quando tinha texto, número e várias informações misturadas. Era tipo ficar montando a frase por pedaços:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>"Meu nome é " + nome + " e tenho " + idade + " anos"</pre></div>
Com a F-String, isso fica muito mais natural. Você escreve a frase quase como ela vai aparecer na tela e coloca as variáveis dentro de <code>{}</code>.
<br><br>
O <b><code>f</code></b> antes das aspas avisa para o Python:
<br><br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);margin-bottom:14px;">
  💡 <i>"Dentro desse texto, eu vou usar variáveis."</i>
</div>
Então, em vez de montar a frase pedacinho por pedacinho, a F-String deixa você escrever tudo de um jeito mais <b>limpo, bonito e fácil de entender</b>.
<br><br>
Veja os exemplos abaixo:`,
      },
      {
        heading: "✏️ Exemplo 1: Exibindo um Nome",
        headingClass: "type-heading",
        body: `No exemplo abaixo, temos a variável <code>nome</code> guardando o texto <b>"Padilha"</b>. Com a F-String, conseguimos inserir esse nome diretamente dentro da mensagem, sem concatenar nada com <code>+</code>:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = "Padilha"
print(f"Olá, {nome}! Seja bem-vindo.")</pre></div>
<div class="art-img-block" data-src="images/ihul1.png" data-label="F-String: Exemplo 1"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O Python encontrou o <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">{nome}</code> dentro da string, buscou o valor guardado na variável <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">nome</code> e o colocou no lugar, exibindo a mensagem completa na tela. <b>Simples assim.</b> 🎯
  </div>
</div>`,
      },
      {
        heading: "✏️ Exemplo 2: Variáveis Numéricas",
        headingClass: "type-heading",
        body: `Um dos maiores benefícios da F-String é que ela aceita <b>qualquer tipo de variável</b> diretamente, sem precisar do <code>str()</code>. No exemplo abaixo, inserimos um número inteiro dentro do texto sem nenhuma conversão:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000
custo = 400
lucro = faturamento - custo
print(f"Faturamento: {faturamento} | Custo: {custo} | Lucro: {lucro}")</pre></div>
<div class="art-img-block" data-src="images/ihul2.png" data-label="F-String: Exemplo 2"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    Percebe como ficou mais limpo? Três variáveis numéricas inseridas direto no texto, <b>sem nenhum <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">str()</code>, sem nenhum <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">+</code></b>. O Python substituiu cada <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">{}</code> pelo valor correspondente e exibiu tudo em uma linha só. 🧩
  </div>
</div>`,
      },
      {
        heading: "✏️ Exemplo 3: Expressão Dentro das Chaves",
        headingClass: "type-heading",
        body: `As chaves <code>{}</code> da F-String aceitam não só variáveis, mas também <b>expressões matemáticas e operações diretamente</b>. O Python calcula o resultado e já insere o valor final na string:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nota1 = 8
nota2 = 9
print(f"A média do aluno foi: {(nota1 + nota2) / 2}")</pre></div>
<div class="art-img-block" data-src="images/ihul3.png" data-label="F-String: Exemplo 3"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O Python calculou <b>(8 + 9) / 2 = 8.5</b> dentro das próprias chaves e já colocou o resultado na mensagem. Você não precisou criar uma variável extra nem fazer a conta antes. Isso é o poder da F-String: <b>expressões e variáveis direto no texto, do jeito que você pensa</b>. 🧮
  </div>
</div>`,
      },
    ],
    practice: "Agora abra seu VSCode e reescreva os exemplos anteriores do módulo usando F-String no lugar do str() e da concatenação com +.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `nome = "Padilha"
print(f"Olá, {nome}! Seja bem-vindo.")

faturamento = 1000
custo = 400
lucro = faturamento - custo
print(f"Faturamento: {faturamento} | Custo: {custo} | Lucro: {lucro}")

nota1 = 8
nota2 = 9
print(f"A média do aluno foi: {(nota1 + nota2) / 2}")
`,
  },

  {
    id: 9,
    module: 2,
    eyebrow: "Módulo 2 · Aula 7 — Mudança do Tipo de Variável",
    title: "Mudança do Tipo de Variável",
    desc: "Aprenda a converter variáveis para o tipo correto usando int(), float() e str() junto com input().",
    tag: "básico",
    theory: [
      {
        heading: "📌 O que é Mudança de Tipo?",
        body: `Às vezes, ao trabalhar com variáveis, elas não estão no tipo certo para o que precisamos fazer. O Python é rigoroso com isso: se os tipos não forem compatíveis, ele não consegue realizar a operação e gera um erro, como aprendemos no módulo de <b>Mistura de Variáveis</b>.
<br><br>
Isso acontece bastante quando usamos o <code>input()</code>, que aprendemos nos módulos anteriores. O <code>input()</code> <b>sempre retorna texto</b>, mesmo que o usuário tenha digitado um número. Então, se quisermos fazer contas ou comparações com esse valor, precisamos primeiro <b>converter para o tipo correto</b>.
<br><br>
Fazemos isso envolvendo o <code>input()</code> com a função de conversão desejada:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>int(input("..."))    # converte para inteiro
float(input("..."))  # converte para decimal
str(input("..."))    # mantém como texto (já é o padrão)</pre></div>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);">
  💡 Nos exemplos abaixo, além de fazer a conversão, usamos <code>type()</code> para confirmar qual é o tipo da variável depois da conversão. Isso ajuda a entender exatamente o que está acontecendo.
</div>`,
      },
      {
        heading: "🔢 Convertendo para Inteiro: int()",
        headingClass: "type-heading",
        body: `No exemplo abaixo, o usuário digita sua idade. Como o <code>input()</code> retorna texto, usamos o <code>int()</code> para converter para número inteiro. O <code>type()</code> confirma que a variável é do tipo <b>int</b> após a conversão:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = int(input("Digite sua idade: "))
print(f"Idade: {idade} {type(idade)}")</pre></div>
<div class="art-img-block" data-src="images/cast1.png" data-label="Conversão para int com input()"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O usuário digitou um número, mas o <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">input()</code> capturou como texto. O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">int()</code> transformou esse texto em um <b>número inteiro de verdade</b>, e o <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">type()</code> confirmou: <b>class 'int'</b>. Agora essa variável pode ser usada em qualquer operação matemática. 🔢
  </div>
</div>`,
      },
      {
        heading: "💧 Convertendo para Decimal: float()",
        headingClass: "type-heading",
        body: `Quando o valor pode ter casas decimais, como altura, peso ou temperatura, usamos <code>float()</code> no lugar de <code>int()</code>. No exemplo abaixo, o usuário digita a idade e ela é armazenada como número decimal:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = float(input("Digite sua idade: "))
print(f"Sua idade é: {idade} {type(idade)}")</pre></div>
<div class="art-img-block" data-src="images/cast2.png" data-label="Conversão para float com input()"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">float()</code> converteu o texto digitado para um <b>número com casas decimais</b>, e o <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">type()</code> confirmou: <b>class 'float'</b>. Mesmo que o usuário digitasse um número inteiro como <b>25</b>, o Python armazenaria como <b>25.0</b> para preservar o formato decimal. 💧
  </div>
</div>`,
      },
      {
        heading: "🔤 Mantendo como Texto: str()",
        headingClass: "type-heading",
        body: `O <code>input()</code> já retorna texto por padrão, mas é uma boa prática usar o <code>str()</code> explicitamente quando você quer deixar claro que a variável é uma string. Isso torna o código mais legível e intencional:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = str(input("Digite seu nome: "))
print(f"Nome: {nome}, {type(nome)}")</pre></div>
<div class="art-img-block" data-src="images/cast3.png" data-label="Conversão para str com input()"></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">type()</code> confirmou: <b>class 'str'</b>. O nome digitado foi capturado e armazenado como texto, exatamente como esperado. Usar <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">str()</code> explicitamente é uma boa prática de quem escreve código organizado e fácil de entender. 🔤
  </div>
</div>`,
      },
    ],
    practice: "Abra seu VSCode e teste os três exemplos. Tente também converter um input() para float() e fazer uma operação matemática com ele.",
    exercises: "Caso queira uma lista de exercícios com mais de 100 exercícios + 5 Exercícios Bônus de dificuldade elevada baseados nesses temas, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Convertendo para inteiro
idade = int(input("Digite sua idade: "))
print(f"Idade: {idade} {type(idade)}")

# Convertendo para decimal
altura = float(input("Digite sua altura: "))
print(f"Sua altura é: {altura} {type(altura)}")

# Mantendo como texto
nome = str(input("Digite seu nome: "))
print(f"Nome: {nome}, {type(nome)}")
`,
  },

  {
    id: 10,
    module: 2,
    title: "Exercícios",
    desc: "Lista completa de exercícios do Módulo 2 para praticar tudo que foi aprendido.",
    tag: "exercícios",
    type: "article",
    html: `
      <div class="art-eyebrow">Módulo 2 · Exercícios</div>
      <h2 class="art-title">Lista de Exercícios do Módulo 2</h2>
      <p class="art-lead">
        Coloque em prática tudo o que aprendeu no Módulo 2. Os exercícios estão organizados por tema e separados em níveis de dificuldade.
      </p>

      <div class="art-callout art-callout-info">
        📓 Os exercícios completos com mais de <strong>100 questões + 5 Exercícios Bônus</strong> de dificuldade elevada estão disponíveis no material de apoio do módulo.
      </div>

      <div class="art-callout art-callout-warn" style="line-height:1.8;display:block;">
        💡 <strong>O conteúdo de estudo é sempre gratuito.</strong> Eu cobro apenas pela lista de exercícios, que é a parte prática do módulo. É ali que você vai treinar, errar, corrigir e realmente fixar o que aprendeu. Você até pode pedir para uma I.A gerar exercícios para você, mas esta lista foi pensada com cuidado para este momento exato da sua jornada, usando apenas o que foi ensinado neste módulo e focando no que você precisa praticar agora.
      </div>

      <div class="art-callout" style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.3);border-left:3px solid #a78bfa;line-height:1.8;display:block;">
        🚀 <strong>Todo valor arrecadado é reinvestido neste projeto.</strong> Cada compra contribui diretamente para o crescimento do canal <strong>PadilhaSec</strong> no YouTube e para o desenvolvimento contínuo desta GuideLine de Cibersegurança e seus Fundamentos. O objetivo é simples: criar conteúdo de qualidade, gratuito e acessível para quem quer entrar na área de segurança da informação, sem precisar pagar fortunas por isso. Sua contribuição mantém esse projeto vivo e crescendo. 🙏
      </div>

      <div class="art-callout art-callout-success" style="line-height:1.8;display:block;">
        💚 O mais importante: <strong>o curso é 100% gratuito.</strong> Todo o conteúdo de estudo está disponível sem custo algum. A lista de exercícios é opcional — é uma forma de praticar de verdade e, se quiser, dar uma pequena força para manter esse projeto vivo e crescendo.
      </div>

      <div class="art-sales-block">
        <p class="art-sales-heading">Se quiser a lista, você pode escolher de duas formas:</p>

        <div class="art-sales-options">
          <div class="art-sales-option art-sales-option-avulso">
            <div class="art-sales-option-badge art-sales-badge-avulso">💡 Só este módulo</div>
            <div class="art-sales-option-title">📦 Compra Avulsa — Apenas os Exercícios do Módulo 2</div>
            <div class="art-sales-option-desc">
              Quer praticar somente o conteúdo que você acabou de estudar?<br>
              Compre apenas a lista deste módulo, sem precisar pagar pelos outros materiais.
            </div>
            <div class="art-sales-price art-sales-price-avulso">R$ 7<span>,00</span></div>
            <a href="https://pay.hotmart.com/J105568239T" target="_blank" class="art-btn-avulso art-btn-pulse-orange">
              Comprar Lista de Exercício do Módulo 2 → [AVULSO]
            </a>
          </div>

          <div class="art-sales-option art-sales-option-premium">
            <div class="art-sales-option-badge">⭐ Melhor opção</div>
            <div class="art-sales-option-title">🚀 Lista Premium — Todos os Módulos</div>
            <div class="art-sales-option-desc">
              Pague uma única vez e tenha acesso às listas de exercícios de <strong>todos os módulos</strong>, incluindo os próximos que ainda serão lançados.<br><br>
              Novos conteúdos e novas listas serão adicionados conforme o projeto evolui.<br><br>
              Além de economizar mais de <strong>R$ 150,00</strong> em comparação com a compra avulsa, você também ajuda a manter o projeto vivo e crescendo.
            </div>
            <div class="art-sales-price art-sales-price-premium">R$ 50<span>,00</span></div>
            <a href="https://pay.hotmart.com/M105569964M" target="_blank" class="art-btn-premium art-btn-pulse-purple">
              Comprar Lista de Exercício de Todos os Módulos → [PREMIUM]
            </a>
          </div>
        </div>
      </div>

      <div class="art-section-head"><span class="art-pin">📍</span> Temas Cobertos</div>
      <div class="art-ext-grid">
        <div class="art-ext-card"><div class="art-ext-name">📦 Variáveis</div><div class="art-ext-desc">Criação, nomenclatura, boas práticas e exemplos práticos.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🔣 Tipos de Variáveis</div><div class="art-ext-desc">int, str, float, bool — identificar e usar cada tipo corretamente.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">➕ Operações Aritméticas</div><div class="art-ext-desc">Soma, subtração, multiplicação, divisão e módulo.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🔤 Strings</div><div class="art-ext-desc">Concatenação, operador in e manipulação de textos.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">⌨️ Input</div><div class="art-ext-desc">Capturar dados do usuário e trabalhar com as respostas.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🔀 Mistura de Variáveis</div><div class="art-ext-desc">TypeError, str(), int() e conversão de tipos.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">✨ F-String</div><div class="art-ext-desc">Formatação moderna de textos com variáveis e expressões.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🔄 Mudança de Tipo</div><div class="art-ext-desc">int(), float() e str() com input() na prática.</div></div>
      </div>
    `,
  },

  // ── MÓDULO 3 ──────────────────────────────────────────────────────────────
  {
    id: 0,
    module: 3,
    eyebrow: "Módulo 3 · Aula 0 — Comparadores",
    title: "Comparadores",
    desc: "Aprenda a comparar valores no Python usando símbolos que retornam verdadeiro ou falso.",
    tag: "básico",
    theory: [
      {
        heading: "🤔 O Que São Comparadores?",
        body: `💡 Comparadores são símbolos usados para <b>comparar valores</b>.<br>
💡 Eles sempre retornam apenas duas respostas possíveis: <b>True (verdadeiro)</b> ou <b>False (falso)</b>.
<br><br>
Para você entender melhor, vamos fazer uma analogia.
<br><br>
Imagine que você está jogando um jogo e aparece a pergunta: <i>"Você tem mais de 18 anos?"</i> Para responder isso, o código precisa realizar uma comparação com o número 18, que é a idade em que nos tornamos maiores de idade.
<br><br>
Essas comparações são feitas usando os seguintes símbolos:
<br><br>
<code>==</code> Igual a<br>
<code>!=</code> Diferente de<br>
<code>&gt;</code> Maior que<br>
<code>&gt;=</code> Maior ou igual a<br>
<code>&lt;</code> Menor que<br>
<code>&lt;=</code> Menor ou igual a
<br><br>
<div style="background:rgba(248,81,73,.08);border:1px solid rgba(248,81,73,.35);border-left:3px solid var(--red);border-radius:var(--radius);padding:13px 16px;font-size:14px;color:#cdd9e5;line-height:1.8;">
⚠️ <b>Atenção!</b> Para comparações, o correto é utilizar <b>dois sinais de igual <code>==</code></b> e não apenas um <code>=</code>. Veja a diferença:
<br><br>
<b>Exemplo errado:</b> usando um único <code>=</code>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">idade = 18</span>   <span class="code-comment"># Isso NÃO é comparação!</span>
             <span class="code-comment"># Isso está SETANDO uma variável (que aprendemos no Módulo 2)</span>
             <span class="code-comment"># O Python vai guardar o valor 18 dentro de "idade"</span></pre></div>
<b>Exemplo correto:</b> usando <code>==</code> para comparar
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-ok">idade == 18</span>  <span class="code-comment"># Isso SIM é uma comparação!</span>
             <span class="code-comment"># O Python vai verificar se "idade" é igual a 18</span>
             <span class="code-comment"># E vai retornar True ou False como resposta</span></pre></div>
Resumindo: <code>=</code> <b>guarda</b> um valor. <code>==</code> <b>compara</b> dois valores. São coisas completamente diferentes!
</div>
<br>
Veja mais dois exemplos para fixar de vez:
<br><br>
<b>Pessoa menor de idade (retorna False):</b>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = 15          <span class="code-comment"># guardando a idade da pessoa (ela tem 15 anos)</span>

print(idade == 18)  <span class="code-comment"># False</span>
                    <span class="code-comment"># O Python comparou 15 com 18</span>
                    <span class="code-comment"># 15 NÃO é igual a 18, então a resposta é False</span></pre></div>
<b>Pessoa maior de idade (retorna True):</b>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = 20          <span class="code-comment"># guardando a idade da pessoa (ela tem 20 anos)</span>

print(idade == 18)  <span class="code-comment"># False (20 não é IGUAL a 18)</span>
print(idade >= 18)  <span class="code-comment"># True  (20 é MAIOR OU IGUAL a 18, então pode entrar!)</span></pre></div>
O <b>True</b> e o <b>False</b> que você vê como resultado são chamados de <b>booleanos</b>. São como uma luzinha que acende ou apaga: ou a comparação é verdadeira, ou não é. Simples assim!`,
      },
      {
        heading: "",
        headingClass: "hidden-heading",
        body: `<div class="art-callout art-callout-info" style="display:block;">
✋ <b>Agora vamos colocar a mão na massa!</b> Veja os exemplos abaixo e tente acompanhar o raciocínio de cada comparação. Quanto mais você praticar, mais natural isso vai ficando.
</div>`,
      },
      {
        heading: "💡 Igual: ==",
        body: `O <code>==</code> verifica se dois valores são <b>iguais entre si</b>.
<br><br>
<div class="art-callout" style="background:rgba(248,81,73,.08);border:1px solid rgba(248,81,73,.35);border-left:3px solid var(--red);display:block;line-height:1.8;">
⚠️ <b>Atenção!</b> Como falamos, o IGUAL aqui são <b>2 sinais de igual <code>==</code></b> e não apenas um <code>=</code>, como mencionado anteriormente nesta mesma aula.
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>5 == 5   <span class="code-comment"># True  (5 é igual a 5? Sim!)</span>
5 == 3   <span class="code-comment"># False (5 é igual a 3? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 10
b = 10

print(a == b)  <span class="code-comment"># True (10 é igual a 10)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 10
b = 5

print(a == b)  <span class="code-comment"># False (10 não é igual a 5)</span></pre></div>`,
      },
      {
        heading: "💡 Diferente: !=",
        body: `O <code>!=</code> verifica se dois valores são <b>diferentes entre si</b>. É o oposto do <code>==</code>.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>5 != 3   <span class="code-comment"># True  (5 é diferente de 3? Sim!)</span>
5 != 5   <span class="code-comment"># False (5 é diferente de 5? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 8
b = 3

print(a != b)  <span class="code-comment"># True (8 é diferente de 3)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 7
b = 7

print(a != b)  <span class="code-comment"># False (7 não é diferente de 7)</span></pre></div>`,
      },
      {
        heading: "💡 Maior que: >",
        body: `O <code>></code> verifica se o valor da esquerda é <b>maior</b> que o da direita.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>10 > 3   <span class="code-comment"># True  (10 é maior que 3? Sim!)</span>
2  > 7   <span class="code-comment"># False (2 é maior que 7? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 15
b = 8

print(a > b)  <span class="code-comment"># True (15 é maior que 8)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 3
b = 9

print(a > b)  <span class="code-comment"># False (3 não é maior que 9)</span></pre></div>`,
      },
      {
        heading: "💡 Menor que: <",
        body: `O <code><</code> verifica se o valor da esquerda é <b>menor</b> que o da direita.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>2 < 5   <span class="code-comment"># True  (2 é menor que 5? Sim!)</span>
9 < 1   <span class="code-comment"># False (9 é menor que 1? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 4
b = 10

print(a < b)  <span class="code-comment"># True (4 é menor que 10)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 12
b = 6

print(a < b)  <span class="code-comment"># False (12 não é menor que 6)</span></pre></div>`,
      },
      {
        heading: "💡 Maior ou Igual: >=",
        body: `O <code>>=</code> verifica se o valor da esquerda é <b>maior ou igual</b> ao da direita. Ou seja, passa nos dois casos: se for maior, ou se for exatamente igual.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>10 >= 10   <span class="code-comment"># True  (10 é maior ou igual a 10? Sim, é igual!)</span>
10 >= 11   <span class="code-comment"># False (10 é maior ou igual a 11? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 10
b = 10

print(a >= b)  <span class="code-comment"># True (10 é igual a 10, então passa)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 7
b = 10

print(a >= b)  <span class="code-comment"># False (7 não é maior ou igual a 10)</span></pre></div>`,
      },
      {
        heading: "💡 Menor ou Igual: <=",
        body: `O <code><=</code> verifica se o valor da esquerda é <b>menor ou igual</b> ao da direita.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>3 <= 3   <span class="code-comment"># True  (3 é menor ou igual a 3? Sim, é igual!)</span>
4 <= 2   <span class="code-comment"># False (4 é menor ou igual a 2? Não!)</span></pre></div>
<br>
<b>Resultado True:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 3
b = 5

print(a <= b)  <span class="code-comment"># True (3 é menor ou igual a 5)</span></pre></div>
<br>
<b>Resultado False:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 8
b = 4

print(a <= b)  <span class="code-comment"># False (8 não é menor ou igual a 4)</span></pre></div>`,
      },
      {
        heading: "✋ Mão na Massa: Testando Tudo Junto",
        body: `Agora vamos juntar todos os comparadores em um único exemplo para você ver como eles funcionam na prática:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>a = 10
b = 5

print(a == b)   <span class="code-comment"># False (10 igual a 5? Não)</span>
print(a != b)   <span class="code-comment"># True  (10 diferente de 5? Sim)</span>
print(a > b)    <span class="code-comment"># True  (10 maior que 5? Sim)</span>
print(a < b)    <span class="code-comment"># False (10 menor que 5? Não)</span>
print(a >= b)   <span class="code-comment"># True  (10 maior ou igual a 5? Sim)</span>
print(a <= b)   <span class="code-comment"># False (10 menor ou igual a 5? Não)</span></pre></div>
<br>
Percebeu o padrão dos exemplos? Conseguiu entender como cada comparador funciona? Isso é muito importante para as próximas aulas — cada conceito que vem a seguir depende exatamente do que você acabou de ver aqui.`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico Exercícios deste módulo.",
    code: `# Testando os comparadores
a = 10
b = 5

print(a == b)   # False
print(a != b)   # True
print(a > b)    # True
print(a < b)    # False
print(a >= b)   # True
print(a <= b)   # False`,
  },

  {
    id: 1,
    module: 3,
    eyebrow: "Módulo 3 · Aula 1 — Aprendendo IF",
    title: "Condições com IF",
    desc: "Aprenda a dar inteligência ao seu programa tomando decisões com base em condições.",
    tag: "intermediário",
    theory: [
      {
        heading: "🚦 Antes de Tudo: O Que Já Sabemos?",
        body: `Até aqui você já aprendeu muita coisa!
<br><br>
Todo programa tem um <b>início</b>, um <b>meio</b> e um <b>fim</b>. Você já sabe guardar informações em variáveis, fazer contas, trabalhar com textos, pegar dados do usuário e muito mais.
<br><br>
Mas olha só: até agora, todo programa que você escreveu seguia sempre o mesmo caminho, linha por linha, do começo ao fim, <b>sem desvios</b>.
<br><br>
E se a gente precisasse que o programa tomasse uma <b>decisão</b>?`,
      },
      {
        heading: "🚗 Uma Analogia Para Ficar Fácil",
        body: `Imagina que você está programando um carro para andar até o fim de uma avenida.
<br><br>
Nessa avenida tem <b>2 cruzamentos com sinaleiro</b>. Se o seu programa não souber lidar com isso, o carro vai passar no vermelho e causar um acidente!
<br><br>
É aí que entram as <b>condições</b>. Com elas, você consegue dizer pro carro o que fazer dependendo da situação:
<br><br>
🔴 <b>"Se o sinal estiver vermelho, pare o carro."</b><br>
🟡 <b>"Se o sinal estiver amarelo, reduza a velocidade e pare."</b><br>
🟢 <b>"Se o sinal estiver verde, pode seguir em frente."</b>
<br><br>
Isso é exatamente o que o <code>if</code> faz no Python: ele permite que o seu programa <b>tome decisões</b> dependendo de uma condição.`,
      },
      {
        heading: "📌 O Que é o IF?",
        body: `Antes de ver o código, vamos entender o conceito com calma.
<br><br>
💡 O <code>if</code> é uma <b>estrutura de decisão</b>. Ele permite que o seu programa <b>escolha um caminho</b> baseado em uma condição.
<br><br>
💡 <b>IF = SE</b> em inglês. Ou seja: <i>"se algo for verdadeiro, faça isso."</i>
<br><br>
💡 O <code>if</code> verifica uma <b>condição</b>. Se essa condição for <b>verdadeira (True)</b>, ele executa o bloco de código. Se for <b>falsa (False)</b>, ele simplesmente ignora aquele bloco e segue em frente.
<br><br>
Pensa assim: é como quando você olha para o céu antes de sair de casa. <b>Se estiver chovendo</b>, você pega o guarda-chuva. Se não estiver, você sai sem ele. O programa pensa da mesma forma!
<br><br>
A estrutura básica é esta:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>if condição:
    # código que roda SE a condição for verdadeira</pre></div>
<br>
Agora veja um exemplo real, usando um comparador:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = 20

if idade >= 18:
    print("Você é maior de idade!")</pre></div>
Se <code>idade</code> for maior ou igual a 18, o Python executa a linha de dentro. Isso é o <code>if</code> em ação: ele usou um comparador (<code>>=</code>) para tomar uma decisão.
<br><br>
<div class="art-callout art-callout-warn">⚠️ Repare no dois pontos <code>:</code> no final da linha do <code>if</code>. Eles são obrigatórios. Sem eles, o Python vai retornar um erro e o programa não vai rodar.</div>
<br><br>
💡 O código que fica <b>dentro do if</b> precisa ter um recuo para a direita. Aperte <b>Tab</b> uma vez antes de escrever a linha. Isso se chama <b>indentação</b> e é a forma que o Python usa para saber o que pertence ao <code>if</code> e o que não pertence.`,
      },
      {
        heading: "✋ Mão na Massa: Exemplos Práticos",
        body: `Vamos ver o <code>if</code> funcionando de verdade!
<br><br>
<b>👆 Exemplo 1: Verificando a Idade</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = 18

if idade >= 18:
    print("Você é maior de idade!")</pre></div>
Se a variável <code>idade</code> for maior ou igual a 18, a mensagem aparece. Se não for, o programa simplesmente não faz nada.
<br><br>
<b>👆 Exemplo 2: Verificando uma Senha</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>senha_correta = "python123"
senha_digitada = input("Digite sua senha: ")

if senha_digitada == senha_correta:
    print("Acesso liberado! ✅")</pre></div>
<br>
<b>👆 Exemplo 3: O Sinaleiro do Carro</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>sinal = input("Qual a cor do sinal? ")

if sinal == "vermelho":
    print("Pare o carro!")

if sinal == "amarelo":
    print("Reduza a velocidade!")

if sinal == "verde":
    print("Pode seguir em frente!")</pre></div>
<br>
Percebeu que usamos <b>3 ifs separados</b>? Cada um verifica uma condição diferente. Nas próximas aulas veremos o <code>elif</code> e o <code>else</code> para deixar isso ainda mais poderoso!`,
      },
      {
        heading: "⚠️ Relembrando: Erros que Você Não Deve Cometer",
        headingClass: "warning-heading",
        body: `Já falei duas vezes nessa aula e vou falar pela terceira: existem dois erros que vão quebrar o seu programa se você esquecer.
<br><br>
<b>1. Não esqueça os dois pontos no final da linha do if</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">if idade >= 18   <span class="code-comment"># ERRADO: faltou o dois pontos</span></span>
<span class="code-ok">if idade >= 18:  <span class="code-comment"># CORRETO</span></span></pre></div>
<br>
<b>2. Não esqueça a indentação: 4 espaços ou uma vez Tab</b>
<br><br>
O <code>if</code> sozinho não faz nada. O que ele executa é o código que vem logo abaixo, recuado para dentro. O Python usa esse recuo para saber o que pertence ao <code>if</code> e o que não pertence. Sem o recuo, o programa quebra.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">if idade >= 18:
print("Maior!")  <span class="code-comment"># ERRADO: sem recuo</span></span>

<span class="code-ok">if idade >= 18:
    print("Maior!")  <span class="code-comment"># CORRETO: 4 espaços ou Tab</span></span></pre></div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Testando o Sinaleiro
sinal = input("Qual a cor do sinal? ")

if sinal == "vermelho":
    print("Pare o carro!")

if sinal == "amarelo":
    print("Reduza a velocidade!")

if sinal == "verde":
    print("Pode seguir em frente!")`,
  },

  // ─── MÓDULO 3 · AULA 2 — ELSE ────────────────────────────────────────────────
  {
    id: 2,
    module: 3,
    eyebrow: "Módulo 3 · Aula 2 — Aprendendo Else",
    title: "Condições com ELSE",
    desc: "Aprenda o que fazer quando a condição do IF é falsa: o else executa o caminho alternativo.",
    tag: "intermediário",
    theory: [
      {
        heading: "🔄 Relembrando: O Que o IF Faz?",
        body: `Na aula anterior você aprendeu que o <code>if</code> verifica uma condição. Se ela for verdadeira, o bloco de código dentro dele é executado. Se for falsa, o Python simplesmente ignora e segue em frente.
<br><br>
Lembra do exemplo do sinaleiro? Usamos o <code>if</code> para verificar a cor do sinal. Mas repara que naquele exemplo, se o sinal não fosse vermelho, o programa simplesmente não fazia nada. Ficava em silêncio.
<br><br>
Agora pensa num caso mais real: um carro que precisa decidir entre <b>parar ou seguir</b> dependendo do sinal. Não existe uma terceira opção. Ou para, ou segue.
<br><br>
<h4 style="margin:0 0 12px; color:#cdd9e5;">↔️ Uma Analogia Para Ficar Fácil</h4>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>sinal = "vermelho"  <span class="code-comment"># guardamos a cor do sinal numa variável</span>

if sinal == "vermelho":              <span class="code-comment"># perguntamos: o sinal é vermelho?</span>
    print("Pare o carro!")           <span class="code-comment"># SIM (True): executa essa linha</span>
else:                                <span class="code-comment"># NÃO (False): cai aqui</span>
    print("Pode seguir em frente!")  <span class="code-comment"># e executa essa linha</span></pre></div>
<br>
O programa <b>SEMPRE</b> vai executar um ou outro. Se a condição for verdadeira, entra no <code>if</code>. Se for falsa, entra no <code>else</code>. Nunca os dois. Nunca nenhum.
<br><br>
É exatamente isso que o <code>else</code> faz.`,
      },
      {
        heading: "📌 O Que é o ELSE?",
        body: `O <code>else</code> significa <b>"senão"</b> em inglês.
<br><br>
💡 O <code>if</code> testa uma condição. <b>Se a condição for verdadeira</b>, o Python executa o bloco do <code>if</code>. <b>Se a condição for falsa</b>, o Python pula para o <code>else</code> e executa o que está lá.
<br><br>
A estrutura básica é esta:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>if condição:
    # executa SE a condição for verdadeira
else:
    # executa SE a condição for falsa</pre></div>
<br>
Veja um exemplo real com números:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>idade = 15

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")</pre></div>
Se <code>idade</code> for maior ou igual a 18, o <code>if</code> executa. Se não for, o <code>else</code> executa. Simples assim.
<br><br>
<div class="art-callout art-callout-warn">⚠️ O <code>else</code> não tem condição. Ele não precisa de nenhum comparador. Ele simplesmente executa quando o <code>if</code> não executa.</div>`,
      },
      {
        heading: "✋ Mão na Massa: Exemplos Práticos",
        body: `Vamos ver o <code>else</code> funcionando de verdade!
<br><br>
<b>👆 Exemplo 1: Meta de Vendas</b>
<br><br>
Uma empresa precisa vender 50.000 unidades para bater a meta. Vamos verificar se isso aconteceu:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>meta = 50000          <span class="code-comment"># definimos o valor da meta</span>
qtde_vendida = 53000  <span class="code-comment"># definimos quantas unidades foram vendidas</span>

if qtde_vendida >= meta:                               <span class="code-comment"># vendemos mais do que a meta?</span>
    print(f"Batemos a meta! Vendemos {qtde_vendida}")  <span class="code-comment"># SIM: executa isso</span>
else:                                                  <span class="code-comment"># NÃO: cai aqui</span>
    print(f"Nao batemos a meta. Meta era {meta}")</pre></div>
<br>
<b>👆 Exemplo 2: Pontuacao no Jogo</b>
<br><br>
Um jogador precisa de pelo menos 1000 pontos para passar de fase:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>pontuacao = 750   <span class="code-comment"># pontuacao que o jogador fez</span>
minimo = 1000     <span class="code-comment"># pontuacao minima para passar de fase</span>

if pontuacao >= minimo:        <span class="code-comment"># o jogador atingiu o minimo?</span>
    print("Passou de fase!")   <span class="code-comment"># SIM: executa isso</span>
else:                          <span class="code-comment"># NÃO: cai aqui</span>
    print("Tente novamente!")</pre></div>
<br>
<b>👆 Exemplo 3: Temperatura</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>temperatura = 38   <span class="code-comment"># temperatura registrada</span>

if temperatura >= 37:              <span class="code-comment"># a temperatura esta acima do normal?</span>
    print("Pessoa com febre!")     <span class="code-comment"># SIM: executa isso</span>
else:                              <span class="code-comment"># NÃO: cai aqui</span>
    print("Temperatura normal!")</pre></div>`,
      },
      {
        heading: "⚠️ Relembrando: Erros que Você Não Deve Cometer",
        headingClass: "warning-heading",
        body: `Dois pontos e indentação continuam sendo obrigatórios, tanto no <code>if</code> quanto no <code>else</code>.
<br><br>
<b>1. O else também precisa de dois pontos no final</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">pontuacao = 750

if pontuacao >= 1000<span class="code-comment">   # ERRADO: faltou o : no if</span>
    print("Passou de fase!")
else<span class="code-comment">               # ERRADO: faltou o : no else</span>
    print("Tente novamente!")</span>

<span class="code-ok">pontuacao = 750

if pontuacao >= 1000<span class="code-warn">:</span>  <span class="code-comment"> # CORRETO: dois pontos no if</span>
    print("Passou de fase!")
else<span class="code-warn">:</span>                  <span class="code-comment"> # CORRETO: dois pontos no else</span>
    print("Tente novamente!")</span></pre></div>
<br>
<b>2. O bloco do else também precisa de indentação</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">else:
print("Menor!")  <span class="code-comment"># ERRADO: sem recuo</span></span>

<span class="code-ok">else:
    print("Menor!")  <span class="code-comment"># CORRETO: 4 espaços ou Tab</span></span></pre></div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Testando o else
meta = 50000
qtde_vendida = 53000

if qtde_vendida >= meta:
    print(f"Batemos a meta! Vendemos {qtde_vendida} unidades")
else:
    print(f"Nao batemos a meta. Vendemos {qtde_vendida} de {meta}")`,
  },

  // ─── MÓDULO 3 · AULA 3 — ELIF ────────────────────────────────────────────────
  {
    id: 3,
    module: 3,
    eyebrow: "Módulo 3 · Aula 3 — Aprendendo Elif",
    title: "Condições com ELIF",
    desc: "Aprenda a criar mais de dois caminhos para o seu programa com o elif.",
    tag: "intermediário",
    theory: [
      {
        heading: "🔄 Relembrando: IF e ELSE",
        body: `Até aqui você aprendeu que o <code>if</code> verifica uma condição, e o <code>else</code> executa quando essa condição é falsa.
<br><br>
Mas e quando você tem <b>mais de duas possibilidades</b>? E se precisar verificar três, quatro ou cinco situações diferentes?
<br><br>
É aí que entra o <code>elif</code>.`,
      },
      {
        heading: "🎯 Uma Analogia Para Ficar Fácil",
        body: `Imagina que você está num concurso de notas musicais e o juiz precisa classificar cada participante.
<br><br>
Não é só "passou ou reprovou". Existem vários níveis: Ouro, Prata, Bronze, e Eliminado. Para cada faixa de pontuação, o resultado é diferente.
<br><br>
Com só <code>if</code> e <code>else</code> você consegue verificar <b>duas</b> possibilidades. Com o <code>elif</code>, você consegue verificar <b>quantas quiser</b>, uma por vez, em ordem.
<br><br>
Veja como ficaria no código:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>pontuacao = 820   <span class="code-comment"># participante fez 820 pontos</span>

if pontuacao >= 900:       <span class="code-comment"># 820 é maior ou igual a 900? NÃO — pula</span>
    print("Ouro")
elif pontuacao >= 750:     <span class="code-comment"># 820 é maior ou igual a 750? SIM — executa e para</span>
    print("Prata")
elif pontuacao >= 600:     <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    print("Bronze")
else:                      <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    print("Eliminado")</pre></div>
<br>
O Python testa cada condição de cima para baixo usando o valor real de <code>pontuacao</code>. Na primeira que for verdadeira, executa e ignora todo o resto.
<br><br>
E como vimos nas aulas anteriores: mesmo que <b>nenhuma</b> condição seja verdadeira, o <code>else</code> sempre executa. Então algo <b>sempre</b> será executado. O programa nunca fica sem resposta.`,
      },
      {
        heading: "📌 O Que é o ELIF?",
        body: `O <code>elif</code> é uma palavra-chave do Python que significa <b>"senão, se"</b>. É uma combinação de <code>else</code> + <code>if</code>.
<br><br>
💡 O <code>elif</code> é usado quando você tem <b>mais de duas possibilidades</b>. Ele permite criar três, quatro ou mais caminhos diferentes para o seu programa.
<br><br>
A estrutura básica é esta:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>if condição_1:
    # executa se condição_1 for verdadeira
elif condição_2:
    # executa se condição_1 for falsa E condição_2 for verdadeira
else:
    # executa se nenhuma das anteriores for verdadeira</pre></div>
<br>
Veja um exemplo real:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nota = 85   <span class="code-comment"># nota do aluno</span>

if nota >= 90:       <span class="code-comment"># 85 é maior ou igual a 90? NÃO — pula</span>
    print("A")
elif nota >= 80:     <span class="code-comment"># 85 é maior ou igual a 80? SIM — executa e para</span>
    print("B")
elif nota >= 70:     <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    print("C")
else:                <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    print("Reprovado")</pre></div>
<br>
O Python testa as condições <b>de cima para baixo</b>, uma por vez. Quando encontra a primeira verdadeira, executa aquele bloco e ignora todos os outros.
<br><br>
<div class="art-callout art-callout-warn">⚠️ A ordem dos <code>elif</code> importa muito. O Python para na primeira condição verdadeira que encontrar. Se você colocar as condições na ordem errada, o resultado vai estar errado.</div>`,
      },
      {
        heading: "✋ Mão na Massa: Exemplos Práticos",
        body: `Vamos ver o <code>elif</code> funcionando de verdade!
<br><br>
<b>👆 Exemplo 1: Velocidade do Carro</b>
<br><br>
Um radar verifica a velocidade do carro e classifica a multa:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>velocidade = 95   <span class="code-comment"># velocidade registrada pelo radar</span>

if velocidade <= 60:        <span class="code-comment"># 95 é menor ou igual a 60? NÃO — pula</span>
    print("Sem multa")
elif velocidade <= 80:      <span class="code-comment"># 95 é menor ou igual a 80? NÃO — pula</span>
    print("Multa leve")
elif velocidade <= 100:     <span class="code-comment"># 95 é menor ou igual a 100? SIM — executa e para</span>
    print("Multa media")
else:                       <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    print("Multa grave")</pre></div>
<br>
<b>👆 Exemplo 2: Bonus de Vendas</b>
<br><br>
A empresa tem uma meta de 20.000 unidades. Se o vendedor não atingir a meta, não ganha bonus. Se ultrapassar o dobro da meta, ganha 7% de bonus. Se atingir a meta sem dobrar, ganha 3%:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>meta = 20000   <span class="code-comment"># meta de vendas do vendedor</span>
vendas = 51000 <span class="code-comment"># total que ele vendeu</span>

if vendas < meta:                   <span class="code-comment"># 51000 é menor que 20000? NÃO — pula</span>
    print("Nao ganhou bonus")
elif vendas > (meta * 2):           <span class="code-comment"># 51000 é maior que 40000? SIM — executa e para</span>
    bonus = 0.07 * vendas           <span class="code-comment"># calcula 7% do total vendido</span>
    print(f"Ganhou {bonus} de bonus")
else:                               <span class="code-comment"># nunca chega aqui, já parou no elif acima</span>
    bonus = 0.03 * vendas
    print(f"Ganhou {bonus} de bonus")</pre></div>
<br>
O dobro da meta é 40.000. Como 51.000 é maior que 40.000, o <code>elif</code> executa e o vendedor ganha 7% de bonus.`,
      },
      {
        heading: "⚠️ Relembrando: Erros que Você Não Deve Cometer",
        headingClass: "warning-heading",
        body: `As mesmas regras do <code>if</code> e do <code>else</code> se aplicam ao <code>elif</code>.
<br><br>
<b>1. Dois pontos obrigatórios no elif também</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">elif nota >= 80   <span class="code-comment"># ERRADO: faltou o dois pontos</span></span>
<span class="code-ok">elif nota >= 80:  <span class="code-comment"># CORRETO</span></span></pre></div>
<br>
<b>2. Indentação obrigatória no bloco do elif</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">elif nota >= 80:
print("B")  <span class="code-comment"># ERRADO: sem recuo</span></span>

<span class="code-ok">elif nota >= 80:
    print("B")  <span class="code-comment"># CORRETO: 4 espaços ou Tab</span></span></pre></div>
<br>
<b>3. A ordem dos elif importa</b>
<br><br>
O Python testa de cima para baixo e para na primeira condição verdadeira. Coloque sempre as condições mais específicas primeiro:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-err">nota = 85

if nota >= 70:        <span class="code-comment"># 85 >= 70? SIM — Python para AQUI e imprime "C"</span>
    print("C")        <span class="code-comment"># ERRADO: aluno com 85 merecia "B", mas recebeu "C"</span>
elif nota >= 80:      <span class="code-comment"># nunca chega aqui, o if acima já executou</span>
    print("B")</span>

<span class="code-ok">nota = 85

if nota >= 80:        <span class="code-comment"># 85 >= 80? SIM — Python para AQUI e imprime "B"</span>
    print("B")        <span class="code-comment"># CORRETO: condição mais específica vem primeiro</span>
elif nota >= 70:      <span class="code-comment"># nunca chega aqui, o if acima já executou</span>
    print("C")</span></pre></div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Testando o elif
meta = 20000
vendas = 51000

if vendas < meta:
    print("Nao ganhou bonus")
elif vendas > (meta * 2):
    bonus = 0.07 * vendas
    print(f"Ganhou {bonus} de bonus")
else:
    bonus = 0.03 * vendas
    print(f"Ganhou {bonus} de bonus")`,
  },

  // ─── MÓDULO 3 · AULA 4 — OPERADORES LÓGICOS ──────────────────────────────────
  {
    id: 4,
    module: 3,
    eyebrow: "Módulo 3 · Aula 4 — Operadores Lógicos",
    title: "Operadores Lógicos: AND e OR",
    desc: "Aprenda a combinar duas ou mais condições dentro de um if usando and e or.",
    tag: "intermediário",
    theory: [
      {
        heading: "🔄 Relembrando: O Que Já Sabemos?",
        body: `Até aqui você aprendeu a usar o <code>if</code>, o <code>else</code> e o <code>elif</code> para tomar decisões no seu programa. Você também aprendeu os comparadores:
<br><br>
<code>==</code> (Igual) &nbsp; <code>!=</code> (Diferente) &nbsp; <code>></code> (Maior que) &nbsp; <code><</code> (Menor que) &nbsp; <code>>=</code> (Maior ou igual) &nbsp; <code><=</code> (Menor ou igual)
<br><br>
Mas até agora, cada <code>if</code> verificava <b>apenas uma condição por vez</b>. Olha o exemplo:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>salario = 5000

if salario > 3000:         <span class="code-comment"> ◀ essa é a única condição sendo verificada</span>
    print("Salario alto")</pre></div>
<br>
Esse <code>if</code> só faz <b>uma pergunta</b>: o salário é maior que 3000? Só isso.
<br><br>
Mas e se precisássemos verificar <b>duas coisas ao mesmo tempo</b>? Por exemplo: o salário é maior que 3000 <b>e</b> a pessoa trabalha há mais de 1 ano?
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>salario = 5000
anos_empresa = 2

if salario > 3000:         <span class="code-comment"> ◀ ainda só verifica UMA coisa</span>
    print("Ok")            <span class="code-comment"> # mas e os anos de empresa? Ignorado!</span></pre></div>
<br>
Com o que você sabe hoje, não dá para verificar as duas ao mesmo tempo num único <code>if</code>. É aí que entram os <b>operadores lógicos</b>.`,
      },
      {
        heading: "🤝 O Que São Operadores Lógicos?",
        body: `Operadores lógicos são usados para <b>combinar duas ou mais condições</b> dentro de um mesmo <code>if</code>.
<br><br>
Pensa assim: às vezes uma condição sozinha não é suficiente para tomar uma decisão. No dia a dia isso acontece o tempo todo:
<br><br>
Para dirigir um carro você precisa ter <b>habilitação E o carro precisa ter combustível</b>. Só a habilitação não basta.<br><br>
Para entrar numa promoção do supermercado você precisa ser <b>cadastrado OU ter o cupom</b>. Qualquer um dos dois serve.<br><br>
Para sacar dinheiro no caixa eletrônico você precisa ter <b>o cartão E saber a senha</b>. Um sem o outro não funciona.<br><br>
Para ganhar desconto na academia você precisa ser <b>estudante OU ter mais de 60 anos</b>. Um dos dois já é suficiente.
<br><br>
É exatamente isso que o Python faz com os operadores lógicos: ele combina duas condições e decide o que executar baseado no resultado.
<br><br>
Os dois principais operadores lógicos são:
<br><br>
💻 <code>and</code> — as <b>duas</b> condições precisam ser verdadeiras<br>
💻 <code>or</code> — <b>pelo menos uma</b> das condições precisa ser verdadeira`,
      },
      {
        heading: "💻 AND: { As Duas Precisam Ser Verdadeiras }",
        body: `O <code>and</code> em inglês significa <b>"e"</b>. Ele exige que <b>todas</b> as condições sejam verdadeiras ao mesmo tempo.
<br><br>
Pensa assim: para você entrar num show, precisa ter <b>ingresso E documento</b>. Se tiver só um dos dois, não entra. Os dois precisam ser verdadeiros.
<br><br>
Veja no código: um funcionário ganha bonus apenas se ele bateu a meta dele <b>e</b> a loja também bateu a meta:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>meta_funcionario = 10000   <span class="code-comment"># meta individual do funcionário</span>
meta_loja = 250000         <span class="code-comment"># meta total da loja</span>
vendas_funcionario = 11000 <span class="code-comment"># o que o funcionário vendeu</span>
vendas_loja = 251000       <span class="code-comment"># o que a loja vendeu no total</span>

if vendas_funcionario > meta_funcionario and vendas_loja > meta_loja:
    <span class="code-comment"># Python verifica a 1ª condição: 11000 > 10000? SIM (True)</span>
    <span class="code-comment"># Python verifica a 2ª condição: 251000 > 250000? SIM (True)</span>
    <span class="code-comment"># True AND True = True — as duas são verdadeiras, entra no if!</span>
    bonus = 0.03 * vendas_funcionario  <span class="code-comment"># calcula 3% das vendas do funcionário</span>
    print(f"Bonus do funcionario foi de {bonus}")  <span class="code-comment"># imprime o resultado</span>
else:
    <span class="code-comment"># se qualquer uma das duas for falsa, cai aqui</span>
    print("Funcionario nao ganhou o bonus")</pre></div>
<br>
Repare que dentro do bloco do <code>if</code> tem <b>duas linhas</b>, não só um <code>print</code>. A primeira calcula o valor do bonus (<code>bonus = 0.03 * vendas_funcionario</code>) e a segunda imprime o resultado. Você pode colocar quantas linhas precisar dentro de um bloco: fazer contas, guardar valores em variáveis, imprimir, tudo junto.
<br><br>
No exemplo acima, as duas condições foram verdadeiras:
<br><br>
✅ O funcionário bateu a meta dele (11000 > 10000)<br>
✅ A loja bateu a meta dela (251000 > 250000)
<br><br>
Como as <b>duas são verdadeiras</b>, o Python entrou no <code>if</code> e o funcionário recebeu o bonus.
<br><br>
Agora imagina que o funcionário bateu a meta, mas a loja não:
<br><br>
✅ O funcionário bateu a meta dele (11000 > 10000)<br>
❌ A loja não bateu a meta (200000 > 250000? Não)
<br><br>
Nesse caso o Python cairia no <code>else</code> e o funcionário não ganharia o bonus. Com o <code>and</code>, <b>basta uma das condições ser falsa</b> para o <code>if</code> não executar. As <b>duas</b> precisam ser verdadeiras ao mesmo tempo.`,
      },
      {
        heading: "💻 OR: { Basta Uma Ser Verdadeira }",
        body: `O <code>or</code> em inglês significa <b>"ou"</b>. Ele exige que <b>pelo menos uma</b> das condições seja verdadeira.
<br><br>
Pensa assim: para ganhar desconto na farmácia, você precisa ter <b>cartão fidelidade ou ser cliente há mais de 1 ano</b>. Basta ter um dos dois para ganhar o desconto. Se tiver os dois, melhor ainda. Mas basta um.
<br><br>
Nesse exemplo, o funcionário ganha bonus se atingiu a nota mínima de avaliação <b>ou</b> se bateu as metas de venda. Qualquer uma das duas situações já é suficiente:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nota_funcionario = 8       <span class="code-comment"># nota da avaliação do funcionário</span>
meta_nota = 9              <span class="code-comment"># nota mínima para ganhar bonus pela avaliação</span>
meta_funcionario = 10000   <span class="code-comment"># meta de vendas individual</span>
vendas_funcionario = 11000 <span class="code-comment"># o que o funcionário vendeu</span>

if nota_funcionario >= meta_nota or vendas_funcionario > meta_funcionario:
    <span class="code-comment"># Python verifica a 1ª parte: 8 >= 9? NÃO (False)</span>
    <span class="code-comment"># Python verifica a 2ª parte: 11000 > 10000? SIM (True)</span>
    <span class="code-comment"># False OR True = True — basta UMA ser verdadeira, entra no if!</span>
    bonus = 0.03 * vendas_funcionario  <span class="code-comment"># calcula 3% das vendas do funcionário</span>
    print(f"Bonus do funcionario foi: {bonus}")  <span class="code-comment"># imprime o resultado</span>
else:
    <span class="code-comment"># só cai aqui se as DUAS partes forem falsas ao mesmo tempo</span>
    print("Funcionario nao ganhou o bonus")</pre></div>
<br>
No exemplo acima, a nota não era suficiente, mas as vendas foram batidas:
<br><br>
❌ Nota 8 >= 9? Não<br>
✅ Vendas 11000 > 10000? Sim
<br><br>
Como o <code>or</code> precisa que <b>pelo menos uma seja verdadeira</b>, o <code>if</code> executou e o funcionário ganhou o bonus.
<br><br>
Agora imagina que a nota também não fosse boa e as vendas também não tivessem sido batidas:
<br><br>
❌ Nota 8 >= 9? Não<br>
❌ Vendas 8000 > 10000? Não
<br><br>
Nesse caso cairia no <code>else</code>. Com o <code>or</code>, o <code>else</code> só executa quando <b>todas as condições são falsas ao mesmo tempo</b>.`,
      },
      {
        heading: "⚠️ Resumindo: AND vs OR",
        headingClass: "warning-heading",
        body: `É fácil confundir os dois. Use essa lógica simples para lembrar:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-comment"># AND: as DUAS precisam ser verdadeiras</span>
<span class="code-ok">if tem_ingresso and tem_documento:   <span class="code-comment"># só entra com os dois</span>
    print("Pode entrar!")</span>

<span class="code-comment"># OR: basta UMA ser verdadeira</span>
<span class="code-ok">if e_estudante or tem_mais_de_60_anos:  <span class="code-comment"># qualquer um dos dois dá desconto</span>
    print("Tem desconto!")</span></pre></div>
<br>
<b>AND</b> é mais restrito: exige tudo.<br>
<b>OR</b> é mais flexível: basta um.`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# Testando AND e OR
meta_funcionario = 10000
meta_loja = 250000
vendas_funcionario = 11000
vendas_loja = 251000

if vendas_funcionario > meta_funcionario and vendas_loja > meta_loja:
    bonus = 0.03 * vendas_funcionario
    print(f"Bonus do funcionario foi de {bonus}")
else:
    print("Funcionario nao ganhou o bonus")`,
  },

  // ─── MÓDULO 3 · AULA 5 — IF NO MUNDO REAL ────────────────────────────────────
  {
    id: 5,
    module: 3,
    eyebrow: "Módulo 3 · Aula 5 — Blocos, Identação e Verificação",
    title: "Blocos, Identação e Verificação",
    desc: "Entenda o que são blocos de código, como aninhar condições e como validar dados do usuário.",
    tag: "básico",
    theory: [
      {
        heading: "⚠️ Por Que Essa Aula é Importante?",
        body: `Nas últimas aulas você aprendeu os Comparadores, o <code>if</code>, o <code>else</code>, o <code>elif</code>, o <code>and</code> e o <code>or</code>. São ferramentas poderosas. Mas usá-las errado pode fazer o seu programa quebrar, se comportar de forma inesperada ou aceitar dados que não deveria aceitar.
<br><br>
Esta aula é sobre <b>entender como o Python organiza o código por dentro</b> e como usar essas estruturas com segurança. O conteúdo aqui é de <b>extrema importância</b> para quem quer evitar erros e ter boas práticas desde o início.
<br><br>
E vale lembrar: você não precisa ser um programador Python trabalhando com código o dia inteiro para se beneficiar disso. Python aqui é um <b>fundamento para Cibersegurança</b>. Entender como o código funciona, como as condições se comportam e como os dados podem ser validados ou manipulados é exatamente o que faz diferença na hora de analisar vulnerabilidades, automatizar tarefas e entender como sistemas funcionam por dentro.`,
      },
      {
        heading: "📦 O Que é um Bloco de Código?",
        body: `Você já usou blocos várias vezes sem saber que eles tinham esse nome. Vamos entender o que são.
<br><br>
Um <b>bloco</b> é um conjunto de linhas de código que pertencem a uma mesma estrutura. Tudo que fica dentro de um <code>if</code>, <code>else</code>, <code>elif</code> ou qualquer outra estrutura do Python forma um bloco.
<br><br>
O Python identifica o que faz parte de um bloco pela <b>indentação</b> (o recuo com Tab ou 4 espaços). Tudo que está recuado no mesmo nível pertence ao mesmo bloco.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>if idade >= 18:
    print("Maior de idade")   <span class="code-comment"> ◀ esse print está dentro do bloco do if</span>
    print("Pode entrar")      <span class="code-comment"> ◀ esse também — mesmo recuo, mesmo bloco</span>
print("Fim do programa")      <span class="code-comment"> ◀ esse NÃO — sem recuo, fora do bloco</span></pre></div>
<br>
Além do <code>if</code> e do <code>else</code>, outros exemplos de estruturas que criam blocos são:
<br><br>
<code>for</code>, <code>while</code>, funções com <code>def</code> e <code>class</code>. Você vai aprender cada um deles nos próximos módulos.`,
      },
      {
        heading: "🪆 IF Dentro de IF: Aninhamento",
        body: `Você sabia que dá para colocar um <code>if</code> dentro de outro <code>if</code>? Isso se chama <b>aninhamento</b>.
<br><br>
Pensa assim: primeiro você verifica uma coisa. Se for verdadeira, aí dentro você verifica outra coisa mais específica. É como uma decisão dentro de outra decisão.
<br><br>
Exemplo do dia a dia: para receber um bônus numa aplicação financeira, primeiro o rendimento precisa ser maior que a meta. Se for, aí verificamos se ele foi muito alto ou só um pouco acima da meta para decidir qual taxa aplicar:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>meta = 0.05        <span class="code-comment"># meta mínima de rendimento</span>
taxa = 0           <span class="code-comment"># taxa começa em zero</span>
rendimento = 0.10  <span class="code-comment"># rendimento que aconteceu</span>

if rendimento > meta:             <span class="code-comment"># 0.10 > 0.05? SIM — entra aqui</span>
    if rendimento > 0.20:         <span class="code-comment"> ◀ if DENTRO do if: 0.10 > 0.20? NÃO — pula</span>
        taxa = 0.04
        print(f"A Taxa foi de: {taxa}")
    else:                         <span class="code-comment"># cai aqui pois o if interno foi falso</span>
        taxa = 0.02
        print(f"A Taxa foi de: {taxa}")
else:                             <span class="code-comment"># se rendimento não bateu nem a meta</span>
    taxa = 0
    print(f"A Taxa foi de: {taxa}")</pre></div>
<br>
Com <code>rendimento = 0.10</code>:
<br><br>
✅ 0.10 > 0.05? Sim — entra no <code>if</code> externo<br>
❌ 0.10 > 0.20? Não — cai no <code>else</code> interno<br>
✅ Resultado: taxa = 0.02
<br><br>
O bloco interno só é verificado se o bloco externo já for verdadeiro. Se o rendimento não tivesse batido a meta, o Python nem olharia para o <code>if</code> interno.`,
      },
      {
        heading: "🛡️ Validando Dados com IF: Evitando Erros",
        body: `Quem nunca entrou num site ou aplicativo que te obrigava a não deixar um campo vazio, ou que só aceitava números num campo específico? Isso não acontece por mágica. Por baixo, tem um <code>if</code> verificando o que foi digitado antes de deixar o programa continuar.
<br><br>
Esse é um dos usos mais importantes do <code>if</code> no mundo real: <b>verificar se o usuário preencheu os campos corretamente</b> antes de fazer qualquer cálculo ou ação.
<br><br>
Imagina que o programa pede o faturamento e o custo da loja. Se o usuário apertar Enter sem digitar nada, o campo vai ficar vazio. Tentar fazer um cálculo com um campo vazio vai quebrar o programa.
<br><br>
O <code>if</code> consegue verificar isso antes de qualquer coisa:
<br><br>
<b>👆 Forma 1: Verificando se o campo está vazio com <code>==</code></b>
<br><br>
Antes de ver o código, presta atenção nesse detalhe: o <code>""</code> (duas aspas duplas sem nada dentro) representa um campo <b>vazio</b>. Como você já aprendeu, tudo entre aspas é uma String. Quando não tem nada entre elas, é uma String vazia, ou seja, o usuário não digitou nada.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = input("Qual foi o faturamento da loja esse mes? ")
custo = input("Qual foi o custo da loja esse mes? ")

if faturamento == "" or custo == "":   <span class="code-comment"># faturamento ou custo estão vazios ("")?</span>
    print("Preencha o faturamento e o custo corretamente")  <span class="code-comment"># pede para preencher novamente</span>
else:
    lucro = int(faturamento) - int(custo)  <span class="code-comment"># converte para número e calcula</span>
    print(f"O lucro da loja foi de {lucro} reais")</pre></div>
<br>
Se o usuário apertar Enter sem digitar nada, a variável vai guardar <code>""</code>, uma String vazia. O <code>if</code> compara cada campo com <code>""</code> usando o <code>==</code> e, se qualquer um estiver vazio, o programa avisa para preencher corretamente. Se os dois tiverem algum valor digitado, ele calcula o lucro.
<br><br>
<b>👆 Exemplo 2: Validação com Elif</b>
<br><br>
Agora além de validar os campos vazios, o programa também classifica o resultado da loja usando <code>elif</code>:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = input("Qual foi o faturamento da loja esse mes? ")
custo = input("Qual foi o custo da loja esse mes? ")

if faturamento == "" or custo == "":         <span class="code-comment"># algum campo ficou vazio?</span>
    print("Preencha os campos corretamente")  <span class="code-comment"># pede para preencher novamente</span>
elif int(faturamento) > int(custo):          <span class="code-comment"># faturamento maior que custo?</span>
    lucro = int(faturamento) - int(custo)
    print(f"A loja teve lucro de {lucro} reais")
elif int(faturamento) == int(custo):         <span class="code-comment"># faturamento igual ao custo?</span>
    print("A loja nao teve lucro nem prejuizo, ficou no zero a zero")
else:                                        <span class="code-comment"># faturamento menor que custo</span>
    prejuizo = int(custo) - int(faturamento)
    print(f"A loja teve prejuizo de {prejuizo} reais")</pre></div>
<br>
Primeiro o programa protege contra campos vazios. Se os dois tiverem valor, aí sim ele verifica o resultado: lucro, empate ou prejuízo.`,
      },
      {
        heading: "⚠️ Lembre Sempre: Blocos Precisam de Indentação",
        headingClass: "warning-heading",
        body: `Quanto mais estruturas você aninhar (if dentro de if, for dentro de if, etc.), mais recuos vão aparecendo. Cada nível precisa de mais 4 espaços ou um Tab:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>if rendimento > meta:       <span class="code-comment"># nível 1</span>
    if rendimento > 0.20:   <span class="code-comment"># nível 2 — 4 espaços</span>
        taxa = 0.04         <span class="code-comment"># nível 3 — 8 espaços</span>
        print(taxa)</pre></div>
<br>
Cada nível de aninhamento adiciona mais um recuo. Se errar o recuo em qualquer nível, o Python vai retornar um erro.
<br><br>
Mas fique tranquilo. Quando isso acontecer, o Python vai apontar exatamente onde está o problema, dizendo que a identação está errada. Fica ainda mais fácil de identificar e corrigir se você tiver instalado os plugins que ensinamos lá no Módulo 1 — eles destacam visualmente os níveis de identação direto no editor.`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# IF dentro de IF
meta = 0.05
taxa = 0
rendimento = 0.10

if rendimento > meta:
    if rendimento > 0.20:
        taxa = 0.04
        print(f"A Taxa foi de: {taxa}")
    else:
        taxa = 0.02
        print(f"A Taxa foi de: {taxa}")
else:
    taxa = 0
    print(f"A Taxa foi de: {taxa}")`,
  },

  // ─── MÓDULO 3 · EXERCÍCIOS ────────────────────────────────────────────────────
  {
    id: 6,
    module: 3,
    title: "Exercícios",
    desc: "Lista completa de exercícios do Módulo 3 para praticar tudo que foi aprendido.",
    tag: "exercícios",
    type: "article",
    html: `
      <div class="art-eyebrow">Módulo 3 · Exercícios</div>
      <h2 class="art-title">Lista de Exercícios do Módulo 3</h2>
      <p class="art-lead">
        Coloque em prática tudo o que aprendeu no Módulo 3. Os exercícios estão organizados por tema e separados em níveis de dificuldade.
      </p>

      <div class="art-callout art-callout-info">
        📓 Os exercícios completos com questões práticas e desafios bônus estão disponíveis no material de apoio do módulo.
      </div>

      <div class="art-callout art-callout-warn" style="line-height:1.8;display:block;">
        💡 <strong>O conteúdo de estudo é sempre gratuito.</strong> Eu cobro apenas pela lista de exercícios, que é a parte prática do módulo. É ali que você vai treinar, errar, corrigir e realmente fixar o que aprendeu. Você até pode pedir para uma I.A gerar exercícios para você, mas esta lista foi pensada com cuidado para este momento exato da sua jornada, usando apenas o que foi ensinado neste módulo e focando no que você precisa praticar agora.
      </div>

      <div class="art-callout" style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.3);border-left:3px solid #a78bfa;line-height:1.8;display:block;">
        🚀 <strong>Todo valor arrecadado é reinvestido neste projeto.</strong> Cada compra contribui diretamente para o crescimento do canal <strong>PadilhaSec</strong> no YouTube e para o desenvolvimento contínuo desta GuideLine de Cibersegurança e seus Fundamentos. O objetivo é simples: criar conteúdo de qualidade, gratuito e acessível para quem quer entrar na área de segurança da informação, sem precisar pagar fortunas por isso. Sua contribuição mantém esse projeto vivo e crescendo. 🙏
      </div>

      <div class="art-callout art-callout-success" style="line-height:1.8;display:block;">
        💚 O mais importante: <strong>o curso é 100% gratuito.</strong> Todo o conteúdo de estudo está disponível sem custo algum. A lista de exercícios é opcional — é uma forma de praticar de verdade e, se quiser, dar uma pequena força para manter esse projeto vivo e crescendo.
      </div>

      <div class="art-sales-block">
        <p class="art-sales-heading">Se quiser a lista, você pode escolher de duas formas:</p>

        <div class="art-sales-options">
          <div class="art-sales-option art-sales-option-avulso">
            <div class="art-sales-option-badge art-sales-badge-avulso">💡 Só este módulo</div>
            <div class="art-sales-option-title">📦 Compra Avulsa — Apenas os Exercícios do Módulo 3</div>
            <div class="art-sales-option-desc">
              Quer praticar somente o conteúdo que você acabou de estudar?<br>
              Compre apenas a lista deste módulo, sem precisar pagar pelos outros materiais.
            </div>
            <div class="art-sales-price art-sales-price-avulso">R$ 7<span>,00</span></div>
            <a href="https://pay.hotmart.com/N105653018K" target="_blank" class="art-btn-avulso art-btn-pulse-orange">
              Comprar Lista de Exercício do Módulo 3 → [AVULSO]
            </a>
          </div>

          <div class="art-sales-option art-sales-option-premium">
            <div class="art-sales-option-badge">⭐ Melhor opção</div>
            <div class="art-sales-option-title">🚀 Lista Premium — Todos os Módulos</div>
            <div class="art-sales-option-desc">
              Pague uma única vez e tenha acesso às listas de exercícios de <strong>todos os módulos</strong>, incluindo os próximos que ainda serão lançados.<br><br>
              Novos conteúdos e novas listas serão adicionados conforme o projeto evolui.<br><br>
              Além de economizar mais de <strong>R$ 150,00</strong> em comparação com a compra avulsa, você também ajuda a manter o projeto vivo e crescendo.
            </div>
            <div class="art-sales-price art-sales-price-premium">R$ 50<span>,00</span></div>
            <a href="https://pay.hotmart.com/M105569964M" target="_blank" class="art-btn-premium art-btn-pulse-purple">
              Comprar Lista de Exercício de Todos os Módulos → [PREMIUM]
            </a>
          </div>
        </div>
      </div>

      <div class="art-section-head"><span class="art-pin">📍</span> Temas Cobertos</div>
      <div class="art-ext-grid">
        <div class="art-ext-card"><div class="art-ext-name">🔍 Comparadores</div><div class="art-ext-desc">==, !=, >, &lt;, >= e &lt;= para comparar valores e retornar True ou False.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🚦 IF</div><div class="art-ext-desc">Estruturas de decisão: executar código condicionalmente com base em uma condição.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">↔️ ELSE</div><div class="art-ext-desc">O caminho alternativo quando a condição do IF é falsa.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🎯 ELIF</div><div class="art-ext-desc">Múltiplos caminhos: verificar mais de duas possibilidades em sequência.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🤝 AND e OR</div><div class="art-ext-desc">Combinar duas ou mais condições dentro de um mesmo IF.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">📦 Blocos e Identação</div><div class="art-ext-desc">Como o Python organiza o código por dentro e os níveis de recuo.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🪆 IF Aninhado</div><div class="art-ext-desc">Colocar um IF dentro de outro para verificar condições em camadas.</div></div>
        <div class="art-ext-card"><div class="art-ext-name">🛡️ Validação de Dados</div><div class="art-ext-desc">Verificar se o usuário preencheu os campos corretamente antes de calcular.</div></div>
      </div>
    `,
  },

  // ─── MÓDULO 4 · AULA 0 — ÍNDICE E TAMANHO DE STRING ─────────────────────────
  {
    id: 0,
    module: 4,
    eyebrow: "Módulo 4 · Aula 0 — Índice e Tamanho de String",
    title: "Índice e Tamanho de String",
    desc: "Aprenda como acessar caracteres individuais de uma string usando índices e como descobrir o tamanho de um texto com len().",
    tag: "básico",
    theory: [
      {
        heading: "📌 O Que é um Índice?",
        body: `Imagine uma fila de pessoas numeradas. A primeira pessoa é o número <b>0</b>, a segunda é o número <b>1</b>, a terceira é o número <b>2</b>, e assim por diante.
<br><br>
Em Python, uma string funciona exatamente assim: cada caractere tem uma posição chamada de <b>índice</b>. E o mais importante: <span style="background:rgba(0,200,255,.12);border:1px solid rgba(0,200,255,.35);border-radius:4px;padding:2px 8px;color:var(--accent);font-weight:700;">a contagem começa no 0, não no 1</span>.
<br><br>
Veja o exemplo com a palavra <b>HACK</b>:
<br><br>
<div style="overflow-x:auto;margin-bottom:4px;">
<table style="border-collapse:collapse;font-family:var(--font-mono);font-size:13px;">
  <thead>
    <tr>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;background:rgba(0,200,255,.08);color:var(--accent);">Letra</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;background:rgba(0,200,255,.08);color:var(--accent);">H</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;background:rgba(0,200,255,.08);color:var(--accent);">A</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;background:rgba(0,200,255,.08);color:var(--accent);">C</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;background:rgba(0,200,255,.08);color:var(--accent);">K</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;color:#8b949e;">Índice</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;color:#e6edf3;text-align:center;">0</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;color:#e6edf3;text-align:center;">1</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;color:#e6edf3;text-align:center;">2</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 20px;color:#e6edf3;text-align:center;">3</td>
    </tr>
  </tbody>
</table>
</div>
<br>
O <b>H</b> está na posição <b>0</b>, o <b>A</b> na posição <b>1</b>, o <b>C</b> na posição <b>2</b> e o <b>K</b> na posição <b>3</b>.`,
      },
      {
        heading: "🔑 Acessando Caracteres de uma String na Prática",
        body: `Agora que você já entendeu como o índice funciona, vamos colocar isso em prática!
<br><br>
Para pegar uma letra específica de uma string, você escreve o nome da variável seguido do <b>índice entre colchetes</b>. É como se você dissesse para o Python: <b>"me dá o caractere que está nessa posição"</b>.
<br><br>
A estrutura é sempre essa:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>variavel[indice]</pre></div>
<br>
Veja abaixo, passo a passo, como puxar cada letra da palavra <b>HACK</b>:
<br><br>
<b>Quer pegar somente o <span style="color:var(--accent);">H</span>? O H está na posição 0:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "HACK"
print(texto[0])   <span class="code-comment"># o índice 0 é onde o H está guardado</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">H</span></div>
<br>
<b>Quer pegar somente o <span style="color:var(--accent);">A</span>? O A está na posição 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(texto[1])   <span class="code-comment"># o índice 1 é onde o A está guardado</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">A</span></div>
<br>
<b>Quer pegar somente o <span style="color:var(--accent);">C</span>? O C está na posição 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(texto[2])   <span class="code-comment"># o índice 2 é onde o C está guardado</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">C</span></div>
<br>
<b>Quer pegar somente o <span style="color:var(--accent);">K</span>? O K está na posição 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>print(texto[3])   <span class="code-comment"># o índice 3 é onde o K está guardado</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">K</span></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.8;">
    Perceba que a lógica é sempre a mesma: você informa o índice da posição que quer, e o Python devolve o caractere que está ali. Não importa o tamanho do texto, o raciocínio nunca muda.
  </div>
</div>`,
      },
      {
        heading: "📏 Descobrindo o Tamanho com <code>len()</code>",
        body: `E você sabia que dá para descobrir <b>o tamanho exato de uma string</b>, ou seja, quantos caracteres ela tem, em uma linha só?
<br><br>
Isso é mais útil do que parece. Pensa comigo: como um sistema sabe se uma senha tem o mínimo de 8 caracteres? Como um formulário sabe se o campo foi deixado em branco? Como uma ferramenta de segurança sabe se um log está dentro do tamanho esperado?
<br><br>
A resposta para tudo isso é a função <code>len()</code>. Ela conta <b>todos os caracteres</b> da string: letras, números, espaços, pontos, arrobas, tudo que estiver dentro das aspas.
<br><br>
Veja os exemplos:
<br><br>
<b>Exemplo 1: Descobrindo o tamanho de uma palavra</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "HACK"
print(len(texto))   <span class="code-comment"># conta as letras H, A, C, K</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">4</span></div>
<br>
<b>Exemplo 2: Verificando o tamanho de uma senha</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>senha = "Python@2024"
print(len(senha))   <span class="code-comment"># conta todos os caracteres, incluindo @ e números</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">11</span></div>
<br>
<b>Exemplo 3: Verificando o tamanho de um e-mail</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"
print(len(email))   <span class="code-comment"># conta tudo: letras, arroba e ponto</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">14</span></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.8;">
    O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">len()</code> é uma das funções mais usadas no dia a dia. Sempre que precisar saber o tamanho de um texto, seja para validar dados, checar senhas ou analisar logs, ele vai estar lá.
  </div>
</div>`,
      },
      {
        heading: "✋ Mão na Massa: Índice e Tamanho de E-mail",
        body: `Vamos aplicar tudo em um exemplo real usando um endereço de e-mail:
<br><br>
<div style="overflow-x:auto;margin-bottom:4px;">
<table style="border-collapse:collapse;font-family:var(--font-mono);font-size:11px;">
  <thead>
    <tr>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">Letra</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">l</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">i</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">a</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">@</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">g</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">a</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">i</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">l</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">.</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">c</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">o</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#8b949e;">Índice</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">0</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">1</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">2</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">3</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">4</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">5</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">6</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">7</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">8</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">9</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">10</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">11</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">12</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">13</td>
    </tr>
  </tbody>
</table>
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"

print(email[5])      <span class="code-comment"># g (a letra na posição 5 é o 'g' do gmail)</span>
print(len(email))    <span class="code-comment"># 14 (o e-mail tem 14 caracteres no total)</span></pre></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">email[5]</code> retornou <b>'g'</b> porque a posição 5 é exatamente o início do domínio <b>gmail</b>. E <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">len(email)</code> retornou <b>14</b> porque o e-mail tem 14 caracteres no total, contando letras, arroba e ponto.
  </div>
</div>
<br>
<div class="art-callout art-callout-warn" style="display:block;line-height:1.8;">⚠️ <strong>Atenção:</strong> não confunda a <b>quantidade</b> de caracteres com uma <b>posição de índice</b>. <code style="background:#0d1117;border:1px solid rgba(240,200,0,.18);">len(email)</code> retornou <b>14</b> porque esse é o total de caracteres, mas o <b>último índice válido</b> é <b>13</b> (<code style="background:#0d1117;border:1px solid rgba(240,200,0,.18);">email[13]</code>), já que a contagem dos índices começa em <b>0</b>. Ou seja, <code style="background:#0d1117;border:1px solid rgba(240,200,0,.18);">len(texto)</code> é sempre um número a mais do que o último índice.</div>`,
      },
      {
        heading: "⚠️ O Índice Sempre Começa no Zero!",
        headingClass: "warning-heading",
        body: `Esse é o erro mais comum de quem está começando: tentar acessar o primeiro caractere usando o índice 1.
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "HACK"

<span class="code-err">print(texto[1])   <span class="code-comment"># ERRADO para pegar o 'H': retorna 'A'</span></span>
<span class="code-ok">print(texto[0])   <span class="code-comment"># CORRETO: retorna 'H' (o índice começa no zero!)</span></span></pre></div>
<br>
Lembre: a primeira posição é sempre o índice <b>0</b>. O segundo caractere é o <b>1</b>. E assim por diante.`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `email = "lima@gmail.com"

print(email[0])      # l (primeira letra)
print(email[4])      # @ (o arroba)
print(email[5])      # g (inicio do gmail)
print(len(email))    # 14 (tamanho total)`,
  },

  // ─── MÓDULO 4 · AULA 1 — ÍNDICE NEGATIVO E PEDAÇO DE TEXTO ──────────────────
  {
    id: 1,
    module: 4,
    eyebrow: "Módulo 4 · Aula 1 — Índice Negativo e Pedaço de Texto",
    title: "Índice Negativo e Pedaço de Texto",
    desc: "Aprenda a acessar caracteres pelo final da string com índices negativos e a extrair partes de um texto com slicing.",
    tag: "básico",
    theory: [
      {
        heading: "📌 Relembrando: O Que é o Índice?",
        body: `Na aula anterior aprendemos que cada letra de uma string tem uma posição chamada <b>índice</b>, e que essa contagem começa no <b>0</b>.
<br><br>
Mas existe uma segunda forma de contar: do final para o início, usando <span style="background:rgba(167,139,250,.15);border:1px solid rgba(167,139,250,.4);border-radius:4px;padding:2px 8px;color:#a78bfa;font-weight:700;">números negativos</span>.
<br><br>
Veja o exemplo com a palavra <b>HACKER</b>:
<br><br>
<div style="overflow-x:auto;margin-bottom:4px;">
<table style="border-collapse:collapse;font-family:var(--font-mono);font-size:13px;">
  <thead>
    <tr>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">Letra</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">H</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">A</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">C</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">K</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">E</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;background:rgba(0,200,255,.08);color:var(--accent);">R</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#8b949e;">Índice +</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">0</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">1</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">2</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">3</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">4</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#e6edf3;text-align:center;">5</td>
    </tr>
    <tr>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#8b949e;">Índice -</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-6</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-5</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-4</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-3</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-2</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:8px 16px;color:#a78bfa;text-align:center;">-1</td>
    </tr>
  </tbody>
</table>
</div>
<br>
Quando usamos o índice <b>-1</b>, o Python nos dá o <b>último caractere</b> da string. O índice <b>-2</b> dá o penúltimo, e assim por diante.`,
      },
      {
        heading: "🔑 Acessando do Final com Índice Negativo",
        body: `Isso é muito útil na prática! Imagine que você precisa pegar o último caractere de um texto mas não sabe exatamente o tamanho dele. Com o índice negativo você conta a partir do final, sem precisar saber o tamanho total.
<br><br>
Veja como os índices positivos e negativos se encontram na mesma string:
<br><br>
<div style="overflow-x:auto;margin-bottom:4px;">
<table style="border-collapse:collapse;font-family:var(--font-mono);font-size:11px;">
  <thead>
    <tr>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">Letra</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">l</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">i</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">a</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">@</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">g</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">a</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">i</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">l</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">.</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">c</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">o</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;background:rgba(0,200,255,.08);color:var(--accent);">m</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#8b949e;">Índice</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">0</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">1</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">2</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">3</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">4</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">5</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">6</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">7</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">8</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">9</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">10</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">11</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">12</td>
      <td style="border:1px solid rgba(0,200,255,.2);padding:5px 9px;color:#e6edf3;text-align:center;">13</td>
    </tr>
    <tr>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#8b949e;">Índice negativo</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-14</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-13</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-12</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-11</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-10</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-9</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-8</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-7</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-6</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-5</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-4</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-3</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-2</td>
      <td style="border:1px solid rgba(167,139,250,.3);padding:5px 9px;color:#a78bfa;text-align:center;">-1</td>
    </tr>
  </tbody>
</table>
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"

print(email[-1])   <span class="code-comment"># m (último caractere)</span>
print(email[-3])   <span class="code-comment"># c (terceiro do final: c-o-m)</span>
print(email[-4])   <span class="code-comment"># . (quarto do final: .-c-o-m)</span></pre></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O índice <b>-1</b> sempre pega o <b>último caractere</b>, sem precisar saber o tamanho da string. Isso é muito prático quando você não sabe quantas letras o texto tem!
  </div>
</div>`,
      },
      {
        heading: "✂️ Pedaço de Texto: Slicing",
        body: `O <b>slicing</b> (fatiamento) permite extrair um trecho inteiro da string de uma vez. Funciona assim:
<br><br>
<code>texto[:indice]</code> retorna tudo do começo <b>até</b> o índice indicado, sem incluir ele.<br><br>
<code>texto[indice:]</code> retorna tudo a partir do índice indicado <b>até o final</b>.
<br><br>
<div style="background:rgba(240,200,0,.07);border:1px solid rgba(240,200,0,.25);border-radius:8px;padding:14px 16px;line-height:1.9;font-size:13px;color:var(--text);">
  <b style="color:#e3b341;">Sempre que estiver confundindo, lembre assim:</b>
  <br><br>
  <code>texto[:indice]</code> o número fica à direita dos dois pontos. Você vai <span style="background:rgba(248,81,73,.15);border:1px solid rgba(248,81,73,.4);border-radius:4px;padding:1px 7px;color:#f85149;font-weight:700;">ATÉ</span> aquela posição, mas ela não entra no resultado. Guarde a palavra <span style="background:rgba(248,81,73,.15);border:1px solid rgba(248,81,73,.4);border-radius:4px;padding:1px 7px;color:#f85149;font-weight:700;">ATÉ</span>: chegou naquele índice, parou antes.
  <br><br>
  <div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"
print(email[:4])   <span class="code-comment"># vai ATÉ o índice 4, sem incluir o 4</span>
                   <span class="code-comment"># índices 0, 1, 2, 3 entram. Índice 4 (@) fica de fora</span></pre></div>
  <div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">lima</span></div>
  <code>texto[indice:]</code> o número fica à esquerda dos dois pontos. Você começa <span style="background:rgba(63,185,80,.12);border:1px solid rgba(63,185,80,.35);border-radius:4px;padding:1px 7px;color:#3fb950;font-weight:700;">A PARTIR</span> daquele índice, e ele entra no resultado. Guarde a palavra <span style="background:rgba(63,185,80,.12);border:1px solid rgba(63,185,80,.35);border-radius:4px;padding:1px 7px;color:#3fb950;font-weight:700;">A PARTIR</span>: começa naquele índice e traz tudo.
  <br><br>
  <div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"
print(email[5:])   <span class="code-comment"># A PARTIR do índice 5, inclusive</span>
                   <span class="code-comment"># o índice 5 (g) entra e traz tudo até o final</span></pre></div>
  <div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">gmail.com</span></div>
</div>
<br><br>
<b>Mais um Exemplo</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "lima@gmail.com"

print(email[:2])   <span class="code-comment"># li (do começo até posição 2, sem incluir o 2)</span>
print(email[5:])   <span class="code-comment"># gmail.com (da posição 5 até o final)</span></pre></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    <b>email[:2]</b> pegou os índices 0 e 1, resultando em <b>'li'</b>.<br><br>
    <b>email[5:]</b> pegou do índice 5 até o fim, resultando em <b>'gmail.com'</b>.
  </div>
</div>`,
      },
      {
        heading: "⚠️ O Índice Final do Slicing Nunca é Incluído",
        headingClass: "warning-heading",
        body: `Vamos reforçar mais uma vez para você não confundir.
<br><br>
Existe uma diferença muito grande quando o índice vem <b>antes dos dois pontos</b> e quando ele vem <b>depois dos dois pontos</b>. Essa diferença muda completamente o que o Python vai retornar, e é exatamente por isso que tanta gente se confunde no começo.
<br><br>
Se você sair desta aula entendendo isso, pode ter certeza: você está à frente da maioria. Não é exagero. A maioria das pessoas passa semanas com dúvida nesse ponto. Então presta atenção, porque o que vem a seguir vai deixar isso cristalino de vez.
<br><br>
Quando você escreve <code>texto[:3]</code>, o índice vem <b>depois</b> dos dois pontos. Você vai <span style="background:rgba(248,81,73,.15);border:1px solid rgba(248,81,73,.4);border-radius:4px;padding:1px 7px;color:#f85149;font-weight:700;">ATÉ</span> a posição 3, mas ela não entra no resultado:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "PYTHON"

print(texto[:3])   <span class="code-comment"># posições 0, 1 e 2 entram. Índice 3 (H) fica de fora</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">PYT</span></div>
Quando você escreve <code>texto[3:]</code>, o índice vem <b>antes</b> dos dois pontos. Você começa <span style="background:rgba(63,185,80,.12);border:1px solid rgba(63,185,80,.35);border-radius:4px;padding:1px 7px;color:#3fb950;font-weight:700;">A PARTIR</span> da posição 3, e ela entra no resultado:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "PYTHON"

print(texto[3:])   <span class="code-comment"># índice 3 (H) entra e traz tudo até o final</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">HON</span></div>
<br>
Pensa assim: o número da esquerda é o <b>ponto de início</b> (incluído), ou seja, <span style="background:rgba(63,185,80,.12);border:1px solid rgba(63,185,80,.35);border-radius:4px;padding:1px 7px;color:#3fb950;font-weight:700;">A PARTIR</span> daquele índice. O número da direita é o <b>ponto de parada</b> (não incluído), ou seja, <span style="background:rgba(248,81,73,.15);border:1px solid rgba(248,81,73,.4);border-radius:4px;padding:1px 7px;color:#f85149;font-weight:700;">ATÉ</span> aquele índice.`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `email = "lima@gmail.com"

# Indice positivo
print(email[0])    # l (primeiro caractere)
print(email[4])    # @ (o arroba)

# Indice negativo
print(email[-1])   # m (ultimo caractere)
print(email[-3])   # c (terceiro do final)

# Slicing
print(email[:4])   # lima (do comeco ate posicao 4)
print(email[5:])   # gmail.com (da posicao 5 ate o final)`,
  },

  // ─── MÓDULO 4 · AULA 2 — OPERAÇÕES COM STRING ────────────────────────────────
  {
    id: 2,
    module: 4,
    eyebrow: "Módulo 4 · Aula 2 — Operações com String",
    title: "Operações com String",
    desc: "Aprenda as principais operações que podem ser feitas com textos em Python: converter, juntar, verificar e substituir.",
    tag: "básico",
    theory: [
      {
        heading: "📌 O Que São Operações com String?",
        body: `Operações com string são todas as ações que podemos realizar para <b>manipular, transformar, analisar ou combinar textos</b> em uma linguagem de programação.
<br><br>
Aqui estão as principais operações disponíveis no Python:
<br><br>
<ul style="line-height:2.2;color:var(--text);padding-left:20px;">
  <li><code>str()</code> - Transforma um número em String</li>
  <li><code>in</code> - Verifica se um texto está contido dentro de outro</li>
  <li><code>+</code> - Concatena Strings (junta textos)</li>
  <li><code>f""</code> e <code>{}</code> - Substitui valores dentro de uma string pelos valores de uma variável</li>
</ul>
<div style="background:rgba(210,100,0,.08);border:1px solid rgba(210,100,0,.35);border-left:3px solid #e3783d;border-radius:8px;padding:14px 16px;margin-top:4px;line-height:1.9;font-size:13px;color:var(--text);">
  <b style="color:#e3783d;">Atenção: não utilizaremos esses dois abaixo no nosso código.</b> Mas é importante que você saiba o que são, pois o Python durante <b>muitos anos</b> utilizou esse formato para substituir strings e números por variáveis. Se você pegar algum código legado por aí, vai saber exatamente do que se trata.
  <br><br>
  <code>%s</code> - Substitui textos por uma variável (formato antigo)<br>
  <code>%d</code> - Substitui números decimais por uma variável (formato antigo)
</div>`,
      },
      {
        heading: "🔢 Transformando Número em String com <code>str()</code>",
        body: `O Python é rigoroso com tipos: você <b>não pode misturar texto com número diretamente</b>. Se tentar juntar os dois sem conversão, o programa quebra com um erro.
<br><br>
É aí que entra o <code>str()</code>. Ele pega um número e <b>transforma em texto</b>, permitindo que você junte com outras strings sem problema nenhum.
<br><br>
<b>Comando:</b> <code>str(numero)</code>
<br><br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);line-height:1.8;">
  Sempre que você precisar colocar um número dentro de um texto usando o <code>+</code>, envolva o número com <code>str()</code>. Sem isso, o Python não sabe como juntar os dois.
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>porta = 443
protocolo = "HTTPS"

print(protocolo + " usa a porta " + str(porta))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">HTTPS usa a porta 443</span></div>
<br>
Sem o <code>str()</code> em volta de <code>porta</code>, o Python retornaria um erro, pois estaria tentando juntar uma string com um número inteiro.`,
      },
      {
        heading: "🔎 Verificando se um Texto Está Dentro de Outro com <code>in</code>",
        body: `Imagina que você precisa saber se uma determinada palavra existe dentro de um texto. Fazer isso manualmente, lendo letra por letra, seria impossível em escala. O Python resolve isso em uma linha com o operador <code>in</code>.
<br><br>
O <code>in</code> verifica se um texto está contido dentro de outro e retorna sempre <b>True</b> ou <b>False</b>. Simples assim.
<br><br>
<b>Comando:</b> <code>"texto_buscado" in variavel</code>
<br><br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);line-height:1.8;">
  Na Cibersegurança isso é extremamente útil. Você pode verificar automaticamente se um log de sistema contém palavras como <b>"ERRO"</b>, <b>"falha"</b> ou <b>"acesso negado"</b> sem precisar ler cada linha manualmente.
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>log = "ERRO: falha de autenticacao detectada"

print("ERRO" in log)     <span class="code-comment"># True (a palavra ERRO está no log)</span>
print("SUCESSO" in log)  <span class="code-comment"># False (a palavra SUCESSO não está no log)</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">True</span><br><span style="color:#3fb950;">False</span></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O primeiro print retornou <b>True</b> porque a palavra "ERRO" existe dentro do log. O segundo retornou <b>False</b> porque "SUCESSO" não está em nenhuma parte do texto.
  </div>
</div>
<br>
<b>Atenção: o <code>in</code> é Case Sensitive</b>
<br><br>
O <code>in</code> diferencia letras maiúsculas de minúsculas. Isso significa que <code>"erro"</code> e <code>"ERRO"</code> são coisas completamente diferentes para o Python:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>log = "ERRO: falha de autenticacao detectada"

print("ERRO" in log)   <span class="code-comment"># True (maiúsculo, igual ao que está no log)</span>
print("erro" in log)   <span class="code-comment"># False (minúsculo, não bate com "ERRO")</span>
print("Erro" in log)   <span class="code-comment"># False (só o E maiúsculo, ainda não bate)</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;">
  <span style="color:#3fb950;">True</span><br>
  <span style="color:#f85149;">False</span><br>
  <span style="color:#f85149;">False</span>
</div>
<br>
<div style="background:rgba(248,81,73,.06);border:1px solid rgba(248,81,73,.25);border-left:3px solid #f85149;border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);line-height:1.8;">
  Se o texto que você está buscando não tiver exatamente o mesmo padrão de maiúsculas e minúsculas do texto onde está procurando, o Python vai retornar <b>False</b>. Para evitar esse problema, uma boa prática é converter tudo para minúsculo antes de comparar usando o <code>casefold()</code>, que você vai aprender nos próximos tópicos.
</div>`,
      },
      {
        heading: "➕ Concatenando Strings (Juntando Strings) com <code>+</code>",
        body: `Às vezes você precisa juntar dois ou mais textos em um só. Para isso existe a <b>concatenação</b>, feita com o operador <code>+</code>.
<br><br>
É como colar pedaços de papel: você pega um texto, coloca o <code>+</code>, e junta com outro texto. O resultado é um único texto combinado.
<br><br>
<b>Comando:</b> <code>texto1 + texto2</code>
<br><br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);line-height:1.8;">
  Lembre: você só pode concatenar string com string. Se um dos lados for número, precisa converter com <code>str()</code> antes, como vimos acima.
</div>
<br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>usuario = "admin"
dominio = "@empresa.com"

email_completo = usuario + dominio
print(email_completo)</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">admin@empresa.com</span></div>`,
      },
      {
        heading: "✨ Substituindo Valores em Strings com F-String",
        body: `O <b>f-string</b> é a forma moderna e recomendada de inserir valores de variáveis dentro de um texto no Python. Em vez de ficar concatenando com <code>+</code> e convertendo com <code>str()</code>, você coloca a variável diretamente dentro da string.
<br><br>
<b>Comando:</b> <code>f"texto {variavel} texto"</code>
<br><br>
Basta colocar um <code>f</code> antes das aspas, assim: <code>f" "</code>, e usar <code>{}</code> com o nome da variável dentro. O Python substitui automaticamente pelo valor dela.
<br><br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--text);line-height:1.8;">
  O f-string funciona com qualquer tipo de variável: texto, número inteiro, decimal. Não precisa de <code>str()</code>, não precisa de <code>+</code>. É simples, limpo e direto.
</div>
<br>
<b>Exemplo 1: inserindo uma variável de texto dentro da string</b>
<br><br>
O Python substitui o <code>{nome}</code> diretamente pelo valor da variável, sem precisar de nenhum <code>+</code> ou <code>str()</code>:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = "Vinicius"

print(f"Olá, {nome}! Seja bem-vindo.")</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">Olá, Vinicius! Seja bem-vindo.</span></div>
<b>Exemplo 2: inserindo uma variável numérica</b>
<br><br>
Perceba que <code>porta</code> é um número inteiro, mas o f-string o insere no texto sem precisar converter com <code>str()</code>:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>porta = 443

print(f"Conexão estabelecida na porta {porta}.")</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">Conexão estabelecida na porta 443.</span></div>
<b>Exemplo 3: inserindo várias variáveis ao mesmo tempo</b>
<br><br>
Você pode colocar quantas variáveis quiser dentro da mesma string, cada uma dentro do seu <code>{}</code>:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>usuario = "admin"
porta = 443
protocolo = "HTTPS"

print(f"Usuário: {usuario} | Protocolo: {protocolo} | Porta: {porta}")</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">Usuário: admin | Protocolo: HTTPS | Porta: 443</span></div>`,
      },
      {
        heading: "🕰️ %s e %d: O Formato Antigo (Legado)",
        body: `O <code>%s</code> e o <code>%d</code> eram a forma antiga de inserir valores dentro de strings no Python, antes da chegada do <code>f-string</code>.
<br><br>
<b>Você ainda pode encontrar esse formato em códigos antigos</b>, por isso é importante saber reconhecê-lo. Mas hoje em dia usamos o f-string, que é mais limpo e legível.
<br><br>
<b>Exemplo com %s (substitui texto):</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>usuario = "admin"

print("O usuário é: %s" % usuario)</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">O usuário é: admin</span></div>
<b>Exemplo com %d (substitui número inteiro):</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1000

print("O faturamento foi de: %d" % faturamento)</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">O faturamento foi de: 1000</span></div>
<b>Juntando os dois (mais de uma variável precisa de parênteses):</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>usuario = "admin"
faturamento = 1000

print("Usuário: %s | Faturamento: %d" % (usuario, faturamento))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:16px;"><span style="color:#3fb950;">Usuário: admin | Faturamento: 1000</span></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    <b>%s</b> substitui textos. <b>%d</b> substitui números inteiros. Quando tiver mais de uma variável, coloque todas entre parênteses separadas por vírgula. Mas lembre: isso é <b>formato legado</b>. No nosso próprio código usamos sempre o <b>f-string</b>.
  </div>
</div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `# str(): numero para texto
porta = 443
protocolo = "HTTPS"
print(protocolo + " usa a porta " + str(porta))

# in: verificar se esta contido
log = "ERRO: falha de autenticacao"
print("ERRO" in log)     # True
print("SUCESSO" in log)  # False

# +: concatenar strings
usuario = "admin"
dominio = "@empresa.com"
print(usuario + dominio)

# f-string: a forma moderna
faturamento = 1000
lucro = 500
print(f"Faturamento: {faturamento} | Lucro: {lucro}")`,
  },

  // ─── MÓDULO 4 · AULA 3 — MÉTODOS DE STRINGS ─────────────────────────────────
  {
    id: 3,
    module: 4,
    eyebrow: "Módulo 4 · Aula 3 — Métodos de Strings",
    title: "Métodos de Strings",
    desc: "Conheça as funções prontas do Python para manipular textos: transformar, verificar, buscar, substituir e dividir strings.",
    tag: "intermediário",
    theory: [
      {
        heading: "🗂️ Sumário: Métodos Deste Módulo",
        body: `Clique no método para ir direto na explicação, sem precisar rolar a aula inteira.
<br><br>
<div style="overflow-x:auto;margin-bottom:4px;">
<table style="border-collapse:collapse;font-size:13px;width:100%;">
  <thead>
    <tr>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 14px;background:rgba(0,200,255,.08);color:var(--accent);text-align:left;">Método</th>
      <th style="border:1px solid rgba(0,200,255,.2);padding:8px 14px;background:rgba(0,200,255,.08);color:var(--accent);text-align:left;">O que faz</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-capitalize" onclick="event.preventDefault();document.getElementById('m-capitalize').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">capitalize()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Deixa só a primeira letra maiúscula, resto minúsculo.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-title" onclick="event.preventDefault();document.getElementById('m-title').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">title()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Deixa a primeira letra de cada palavra maiúscula.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-upper" onclick="event.preventDefault();document.getElementById('m-upper').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">upper()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Transforma tudo em maiúsculas.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-casefold" onclick="event.preventDefault();document.getElementById('m-casefold').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">casefold()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Transforma tudo em minúsculas (melhor que lower() para comparar).</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-isalpha" onclick="event.preventDefault();document.getElementById('m-isalpha').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">isalpha()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">True se o texto tiver só letras.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-isalnum" onclick="event.preventDefault();document.getElementById('m-isalnum').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">isalnum()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">True se o texto tiver só letras e/ou números.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-isnumeric" onclick="event.preventDefault();document.getElementById('m-isnumeric').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">isnumeric()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">True se o texto tiver só números.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-startswith" onclick="event.preventDefault();document.getElementById('m-startswith').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">startswith()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">True se o texto começa com o valor informado.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-endswith" onclick="event.preventDefault();document.getElementById('m-endswith').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">endswith()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">True se o texto termina com o valor informado.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-find" onclick="event.preventDefault();document.getElementById('m-find').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">find()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Acha a posição de um texto dentro de outro (-1 se não achar).</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-count" onclick="event.preventDefault();document.getElementById('m-count').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">count()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Conta quantas vezes um valor aparece.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-replace" onclick="event.preventDefault();document.getElementById('m-replace').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">replace()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Substitui um trecho de texto por outro.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-strip" onclick="event.preventDefault();document.getElementById('m-strip').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">strip()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Remove espaços (ou caracteres) do início e do fim.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-split" onclick="event.preventDefault();document.getElementById('m-split').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">split()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Divide o texto em uma lista, usando um delimitador.</td></tr>
    <tr><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;"><a href="#m-splitlines" onclick="event.preventDefault();document.getElementById('m-splitlines').scrollIntoView({behavior:'smooth',block:'start'});" style="color:var(--accent);font-family:var(--font-mono);font-weight:700;text-decoration:none;">splitlines()</a></td><td style="border:1px solid rgba(0,200,255,.15);padding:8px 14px;color:#cdd9e5;">Divide o texto em uma lista, por quebras de linha.</td></tr>
  </tbody>
</table>
</div>`,
      },
      {
        heading: "📌 O Que São Métodos de Strings?",
        body: `Métodos de strings são <b>funções prontas</b>, já embutidas no Python, que servem para <b>manipular, transformar e analisar textos</b>.
<br><br>
Eles são chamados usando um <b>ponto</b> após a variável ou string:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python"
print(texto.upper())   <span class="code-comment"># PYTHON (transforma tudo em maiúsculo)</span></pre></div>
<br>
Você escreve o nome da variável, um ponto, o nome do método e os parênteses. O Python já faz todo o trabalho por você.`,
      },
      {
        heading: "🔤 Transformação de Texto: capitalize(), title(), upper(), casefold()",
        body: `Esses métodos mudam a forma como o texto aparece: letras maiúsculas, minúsculas, capitalização.
<br><br>
<div id="m-capitalize" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">capitalize()</b> coloca a primeira letra em maiúscula e todo o resto em minúscula.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "teste"
print(texto.capitalize())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">Teste</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "PYTHON É INCRIVEL"
print(texto.capitalize())   <span class="code-comment"># apenas o P fica maiúsculo, resto vai para minúsculo</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">Python é incrivel</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "cibersegurança"
print(texto.capitalize())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">Cibersegurança</span></div>

<div id="m-title" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">title()</b> coloca a primeira letra de <b>cada palavra</b> em maiúscula.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "vinicius padilha"
print(texto.title())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">Vinicius Padilha</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python para segurança"
print(texto.title())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">Python Para Segurança</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "fundamentos de cibersegurança"
print(texto.title())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">Fundamentos De Cibersegurança</span></div>

<div id="m-upper" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">upper()</b> transforma todo o texto em letras maiúsculas.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "vinicius"
print(texto.upper())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">VINICIUS</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python"
print(texto.upper())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">PYTHON</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "admin@empresa.com"
print(texto.upper())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">ADMIN@EMPRESA.COM</span></div>

<div id="m-casefold" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">casefold()</b> transforma todo o texto em letras minúsculas. É mais completo que <code>lower()</code> e recomendado para comparações.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "VINICIUS"
print(texto.casefold())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">vinicius</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Python"
print(texto.casefold())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">python</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "ADMIN@EMPRESA.COM"
print(texto.casefold())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">admin@empresa.com</span></div>`,
      },
      {
        heading: "✅ Verificação de Conteúdo: isalpha(), isalnum(), isnumeric(), startswith(), endswith()",
        body: `Esses métodos verificam o conteúdo de uma string e retornam sempre <b>True</b> ou <b>False</b>.
<br><br>
<div id="m-isalpha" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">isalpha()</b> verifica se o texto é feito apenas de letras. Qualquer número, espaço ou símbolo retorna False.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Vinicius"
print(texto.isalpha())   <span class="code-comment"># só letras</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Vinicius123"
print(texto.isalpha())   <span class="code-comment"># tem números</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#f85149;">False</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Vinicius Padilha"
print(texto.isalpha())   <span class="code-comment"># tem espaço</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#f85149;">False</span></div>

<div id="m-isalnum" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">isalnum()</b> verifica se o texto é feito de letras e/ou números (sem espaços ou símbolos).
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Python3"
print(texto.isalnum())   <span class="code-comment"># letras e número, sem símbolo</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Python 3"
print(texto.isalnum())   <span class="code-comment"># tem espaço</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#f85149;">False</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "senha@123"
print(texto.isalnum())   <span class="code-comment"># tem o símbolo @</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#f85149;">False</span></div>

<div id="m-isnumeric" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">isnumeric()</b> verifica se o texto é feito apenas de números.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "123"
print(texto.isnumeric())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "12.3"
print(texto.isnumeric())   <span class="code-comment"># ponto não é considerado número</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#f85149;">False</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "12 3"
print(texto.isnumeric())   <span class="code-comment"># espaço no meio</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#f85149;">False</span></div>

<div id="m-startswith" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">startswith()</b> verifica se a string começa com um determinado texto.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "VINICIUS"
print(texto.startswith("VINI"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "admin@empresa.com"
print(email.startswith("admin"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python"
print(texto.startswith("java"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#f85149;">False</span></div>

<div id="m-endswith" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">endswith()</b> verifica se a string termina com um determinado texto.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>arquivo = "script.py"
print(arquivo.endswith(".py"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "admin@hotmail.com"
print(email.endswith(".com"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">True</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>arquivo = "script.py"
print(arquivo.endswith(".txt"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#f85149;">False</span></div>`,
      },
      {
        heading: "🔍 Busca, Contagem e Substituição: find(), count(), replace()",
        body: `<div id="m-find" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">find()</b> procura um texto dentro de outro e retorna a posição (índice) onde foi encontrado. Se não encontrar, retorna <b>-1</b>.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "teste.teste@hotmail.com"
print(texto.find("@"))   <span class="code-comment"># posição do @</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">11</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python"
print(texto.find("y"))   <span class="code-comment"># posição da letra y</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">1</span></div>
<b>Exemplo 3: quando não encontra, retorna -1</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "admin"
print(texto.find("z"))   <span class="code-comment"># a letra z não existe no texto</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#f85149;">-1</span></div>

<div id="m-count" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">count()</b> conta quantas vezes um valor aparece dentro da string.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "teste.teste@hotmail.com"
print(texto.count("t"))   <span class="code-comment"># quantas vezes a letra t aparece</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">5</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "banana"
print(texto.count("a"))   <span class="code-comment"># quantas vezes a letra a aparece</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">3</span></div>
<b>Exemplo 3: quando não existe, retorna 0</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python"
print(texto.count("z"))   <span class="code-comment"># a letra z não existe</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">0</span></div>

<div id="m-replace" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">replace()</b> substitui um trecho de texto por outro dentro da string.
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "1000.00"
print(texto.replace(".", ","))   <span class="code-comment"># troca ponto por vírgula</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">1000,00</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "admin@hotmail.com"
print(email.replace("hotmail", "gmail"))   <span class="code-comment"># troca o domínio</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">admin@gmail.com</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "Python é bom"
print(texto.replace("bom", "incrivel"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;"><span style="color:#3fb950;">Python é incrivel</span></div>`,
      },
      {
        heading: "✂️ Limpeza e Divisão de Texto: strip(), split(), splitlines()",
        body: `<div id="m-strip" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">strip()</b> remove espaços (ou outros caracteres) do início e do final da string. Muito útil para limpar dados digitados pelo usuário.
</div>
<b>Exemplo 1: removendo espaços</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "   VINICIUS   "
print(texto.strip())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">VINICIUS</span></div>
<b>Exemplo 2: limpando entrada do usuário</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>nome = "   admin   "
print(nome.strip())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">admin</span></div>
<b>Exemplo 3: removendo um caractere específico</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "...texto..."
print(texto.strip("."))   <span class="code-comment"># remove os pontos do início e do final</span></pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">texto</span></div>

<div id="m-split" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">split()</b> divide uma string em várias partes usando um delimitador. O resultado é uma lista.
</div>
<b>Exemplo 1: dividindo pelo @</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>email = "vinicius@hotmail.com"
print(email.split("@"))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">['vinicius', 'hotmail.com']</span></div>
<b>Exemplo 2: dividindo por vírgula</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = "python,java,javascript"
print(texto.split(","))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">['python', 'java', 'javascript']</span></div>
<b>Exemplo 3: dividindo um IP por ponto</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>ip = "192.168.1.1"
print(ip.split("."))</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:24px;"><span style="color:#3fb950;">['192', '168', '1', '1']</span></div>

<div id="m-splitlines" style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;scroll-margin-top:20px;">
  <b style="color:var(--yellow);">splitlines()</b> divide um texto em partes de acordo com as quebras de linha (Enter).
</div>
<b>Exemplo 1:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>texto = """Ola, Bom Dia
quero falar com voce
Hoje
Beleza?"""
print(texto.splitlines())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">['Ola, Bom Dia', 'quero falar com voce', 'Hoje', 'Beleza?']</span></div>
<b>Exemplo 2:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>log = """2024-01-01 ERRO: falha
2024-01-01 INFO: sistema ok
2024-01-01 ALERTA: tentativa de acesso"""
print(log.splitlines())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;margin-bottom:12px;"><span style="color:#3fb950;">['2024-01-01 ERRO: falha', '2024-01-01 INFO: sistema ok', '2024-01-01 ALERTA: tentativa de acesso']</span></div>
<b>Exemplo 3:</b>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>endereco = """Rua das Flores
Numero 42
Sao Paulo"""
print(endereco.splitlines())</pre></div>
<div style="background:#0d1117;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 6px 6px;padding:8px 16px;font-family:var(--font-mono);font-size:12px;line-height:1.8;">
<span style="color:#3fb950;">['Rua das Flores', 'Numero 42', 'Sao Paulo']</span></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    O <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">split()</code> e o <code style="background:#0d1117;border:1px solid rgba(0,200,255,.18);">splitlines()</code> retornam uma <b>lista</b> de strings. Vamos aprender sobre listas nos próximos módulos!
  </div>
</div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `texto = "vinicius padilha"

# Transformacao
print(texto.capitalize())    # Vinicius padilha
print(texto.title())         # Vinicius Padilha
print(texto.upper())         # VINICIUS PADILHA
print(texto.casefold())      # vinicius padilha

# Verificacao
print("vinicius".isalpha())  # True
print("abc123".isalnum())    # True
print("123".isnumeric())     # True

# Busca e substituicao
email = "vinicius@hotmail.com"
print(email.find("@"))       # 8
print(email.count("i"))      # 2
print(email.replace("hotmail", "gmail"))

# Limpeza e divisao
print("  texto  ".strip())
print(email.split("@"))`,
  },

  // ─── MÓDULO 4 · AULA 4 — FORMATAÇÃO DE NÚMEROS ───────────────────────────────
  {
    id: 4,
    module: 4,
    eyebrow: "Módulo 4 · Aula 4 — Formatação de Números",
    title: "Formatação de Números",
    desc: "Aprenda a controlar como números são exibidos: casas decimais, separadores de milhar, porcentagem, hexadecimal e muito mais.",
    tag: "intermediário",
    theory: [
      {
        heading: "📌 O Que é Formatação de Números?",
        body: `Formatação de números é o processo de <b>alterar a forma como um valor numérico é exibido</b>, sem mudar seu valor real, para torná-lo mais legível, padronizado ou adequado a um contexto específico.
<br><br>
No Python, usamos essa formatação dentro do <b>f-string</b>. A sintaxe é simples: depois da variável, colocamos <b>dois pontos</b> seguidos do formatador desejado:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>valor = 1234567.89

print(f"{valor:,}")      <span class="code-comment"># 1,234,567.89 (vírgula como separador de milhar)</span>
print(f"{valor:.2f}")    <span class="code-comment"># 1234567.89 (2 casas decimais fixas)</span></pre></div>
<br>
Aqui estão todos os formatadores disponíveis:
<br><br>
<ul style="line-height:2.2;color:var(--text);padding-left:20px;">
  <li><code>:&lt;</code> - Alinha o texto à esquerda</li>
  <li><code>:&gt;</code> - Alinha o texto à direita</li>
  <li><code>:^</code> - Alinha o texto ao centro</li>
  <li><code>:+</code> - Coloca o sinal na frente do número (positivo ou negativo)</li>
  <li><code>:,</code> - Vírgula como separador de milhar</li>
  <li><code>:_</code> - Underscore como separador de milhar</li>
  <li><code>:e</code> - Formato científico</li>
  <li><code>:.Nf</code> - Número com N casas decimais fixas</li>
  <li><code>:x</code> - Formato hexadecimal minúsculo</li>
  <li><code>:X</code> - Formato hexadecimal maiúsculo</li>
  <li><code>:%</code> - Formato percentual</li>
</ul>`,
      },
      {
        heading: "💰 Separador de Milhar e Casas Decimais",
        body: `Os formatadores mais usados no dia a dia são para exibir valores monetários e números com casas decimais fixas.
<br><br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:,</b> coloca vírgula como separador de milhar.
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>faturamento = 1500000

print(f"{faturamento:,}")   <span class="code-comment"># 1,500,000</span></pre></div>
<br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:_</b> coloca underscore como separador de milhar.
</div>
<br><br>
<div class="art-code-block"><pre>print(f"{faturamento:_}")   <span class="code-comment"># 1_500_000</span></pre></div>
<br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:.Nf</b> exibe o número com N casas decimais fixas.
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>preco = 49.9

print(f"{preco:.2f}")   <span class="code-comment"># 49.90 (sempre 2 casas decimais)</span>
print(f"{preco:.4f}")   <span class="code-comment"># 49.9000 (sempre 4 casas decimais)</span></pre></div>`,
      },
      {
        heading: "📊 Porcentagem, Sinal e Formato Científico",
        body: `<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:%</b> exibe o número como percentual (multiplica por 100 e adiciona o símbolo %).
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>taxa = 0.05

print(f"{taxa:%}")     <span class="code-comment"># 5.000000% (multiplica por 100 automaticamente)</span>
print(f"{taxa:.1%}")   <span class="code-comment"># 5.0% (com 1 casa decimal)</span></pre></div>
<br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:+</b> coloca o sinal sempre na frente do número, seja positivo ou negativo.
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>lucro = 500
prejuizo = -200

print(f"{lucro:+}")    <span class="code-comment"># +500</span>
print(f"{prejuizo:+}") <span class="code-comment"># -200</span></pre></div>
<br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:e</b> exibe o número em notação científica.
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>numero = 1500000

print(f"{numero:e}")   <span class="code-comment"># 1.500000e+06</span></pre></div>`,
      },
      {
        heading: "🎨 Formato Hexadecimal",
        body: `O formato hexadecimal é muito usado na área de tecnologia: cores em CSS, endereços de memória, criptografia, análise de binários e muito mais.
<br><br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:x</b> converte um número inteiro para hexadecimal em <b>letras minúsculas</b>.
</div>
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>cor = 255

print(f"{cor:x}")   <span class="code-comment"># ff</span></pre></div>
<br>
<div style="background:rgba(227,179,65,.12);border:1px solid rgba(227,179,65,.45);border-left:4px solid var(--yellow);border-radius:8px;padding:10px 16px;font-size:13px;color:var(--text);margin-bottom:16px;">
  <b style="color:var(--yellow);">:X</b> converte para hexadecimal em <b>letras maiúsculas</b>.
</div>
<br><br>
<div class="art-code-block"><pre>print(f"{cor:X}")   <span class="code-comment"># FF</span></pre></div>
<br>
<div style="background:rgba(0,200,255,.06);border:1px solid rgba(0,200,255,.2);border-left:3px solid var(--accent);border-radius:8px;padding:14px 16px;">
  <div style="font-size:13px;color:var(--text);line-height:1.7;">
    Em Cibersegurança você vai ver hexadecimal com frequência: análise de pacotes de rede, exploração de memória, hashes e payloads. Saber converter e ler valores em hex é uma habilidade fundamental.
  </div>
</div>`,
      },
      {
        heading: "⚠️ Relembrando a Sintaxe Completa",
        headingClass: "warning-heading",
        body: `O formatador sempre fica dentro do f-string, após os dois pontos, dentro das chaves:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre><span class="code-ok">f"{variavel:formatador}"   <span class="code-comment"># CORRETO</span></span>
<span class="code-err">f"{variavel} :formatador"  <span class="code-comment"># ERRADO: os dois pontos precisam ser dentro das chaves</span></span></pre></div>
<br>
Você pode também combinar mais de um formatador. Por exemplo, separador de milhar com casas decimais fixas:
<br><br>
<div style="background:rgba(240,200,0,.08);border:1px solid rgba(240,200,0,.2);border-radius:6px;padding:6px 12px;font-size:12px;color:#e3b341;display:inline-block;margin-bottom:8px;">💿 Comando:</div>
<div class="art-code-block"><pre>valor = 1234567.5

print(f"{valor:,.2f}")   <span class="code-comment"># 1,234,567.50 (milhar + 2 casas decimais)</span></pre></div>`,
      },
    ],
    exercises: "Caso queira uma lista de exercícios baseados neste tema, vá para o tópico <strong>Exercícios</strong> deste módulo.",
    code: `valor = 1500000.5

# Separador de milhar
print(f"{valor:,}")      # 1,500,000.5
print(f"{valor:_}")      # 1_500_000.5

# Casas decimais
print(f"{valor:.2f}")    # 1500000.50

# Combinando
print(f"{valor:,.2f}")   # 1,500,000.50

# Porcentagem
taxa = 0.05
print(f"{taxa:.1%}")     # 5.0%

# Sinal
print(f"{500:+}")        # +500
print(f"{-200:+}")       # -200

# Hexadecimal
print(f"{255:x}")        # ff
print(f"{255:X}")        # FF`,
  },
];
