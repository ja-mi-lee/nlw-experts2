const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2,
    },
    {
      pergunta: "O que o operador '===' faz em comparações em JavaScript?",
      respostas: [
        "Compara valor e tipo",
        "Compara apenas valor",
        "Compara apenas tipo",
      ],
      correta: 0,
    },
    {
      pergunta: "Como você acessa o terceiro elemento de um array em JavaScript?",
      respostas: [
        "array[2]",
        "array.third()",
        "array[3]",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Oriented Module",
        "Document Object Model",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "toInt()",
        "parseInt()",
        "convertInt()",
      ],
      correta: 1,
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "def minhaFuncao() {}",
        "var minhaFuncao = function() {}",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método é usado para remover o primeiro elemento de um array em JavaScript?",
      respostas: [
        "removeFirst()",
        "shift()",
        "pop()",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'addEventListener' é usado para fazer em JavaScript?",
      respostas: [
        "Alterar o estilo de um elemento",
        "Adicionar um ouvinte de eventos a um elemento",
        "Criar uma nova variável",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
      respostas: [
        "'let' permite reatribuição, 'const' não permite reatribuição",
        "'let' é usado para arrays, 'const' para objetos",
        "'const' é usado para números, 'let' para strings",
      ],
      correta: 0,
    },
  ];
  const quiz=document.querySelector('#quiz')
  //"#" identifica o ID referência
  const template= document.querySelector('template')
  //document:modela os dados para JS
  //querySelector:função de pesquisa
  //template selecionada para que suas informações sejam substituídas pelas novas informações que irão compor o quiz
  const corretas = new Set()
  //Set()-conjunto para objetos específicos(não se pode repetir as informações contidas)
  const totalDePerguntas = perguntas.length
  //length faz a somatória de todos os itens a partir do 1
  const mostrarTotal = document.querySelector('#acertos span')
  //seleciona o espaço para que seja substituído pelos novos valores
  mostrarTotal.textContent = corretas.size = ' de ' + totalDePerguntas
  //atribui o novo valor para o campo
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    //quizItem=conteúdo da template, clonei os conteúdos da template dentro dele.
    quizItem.querySelector('h3').textContent= item.pergunta
    //Mudar o título da minha pergunta, mudar o meu título com o título que ta dentro da template, como título ta dentro do "h3", ele se torna a referência
  
    for(let resposta of item.respostas){
      const dt=quizItem.querySelector('dl dt').cloneNode(true)
      //('dl dt')-dentro de um "dl" procura um "dt".
      dt.querySelector('span').textContent=resposta
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      //setAttribute-função que exige dois valores para que ela funcione nome e valor
      //no JS qualquer tipo de dado se transforma em um objeto
      //indexOf- função que pesquisa o índice do item específico(acessa o array e identifica pela sequência)
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //Atribui o novo valor para o input criado no código HTMl, isso possibilitará a identificação de cada resposta ao ser selecionada.
        
        dt.querySelector('input').onchange = (event) => {
        //onchange(espera uma função)
        //'()=>' arrow function
        const estaCorreta = event.target.value == item.correta
        //event.target.value-click
        //'==' atribui uma comparação sem considerar o tipo da variável(ou ta certa ou ta errada(true ou false))
        corretas.delete(item)
        //Se ele encontrar o item, ele deleta, mas como tem uma outra condição mais a frente, ele só vai deletar se a da frente n for executada
        if(estaCorreta){
          corretas.add(item)
          //add função, ta interligada com o Set() que foi criado lá em cima, toda vez que o item tiver certo ele vai fazer a contagem.
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        //atribui o novo valor para o campo
      }
      quizItem.querySelector('dl').appendChild(dt)
      }
      quizItem.querySelector('dl dt').remove()
  
      quiz.appendChild(quizItem)
      //Colocar um "filho", dentro do "quiz" se coloca o "quizItem"
      //O que for coletado pelo "quizItem"(ele coleta a template), será posto no que é a estrutura origem(estrutura total, que envolve o input)
    
  }