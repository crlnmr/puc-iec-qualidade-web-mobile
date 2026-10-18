# RESPOSTAS — Lab Playwright PWA

> Preencha **depois** de fazer os desafios (≈ 10 min). Respostas **curtas e suas** (3 a 6 linhas cada).
> Não precisa de texto bonito — precisa mostrar que você **entendeu o porquê**, não só o como.
> Vale 1 ponto (correção manual, no Canvas).

**Nome:** <sCarolina Maiã Rocha Micherino>
**Login do GitHub:** <seu login>
**Usei IA?** ( ) não · (X) sim — qual ferramenta e pra quê: <Utilizei o chat GPT para entender o padrão de como organizar o código segundo o que o exercicío solicitava. Utilizei também para deixar as respostas desse documento mais completas e objetivas>  *(usar é permitido; esconder não)*

---

### 1. Por que `await expect(locator).toHaveCount(12)` é melhor que `expect(await locator.count()).toBe(12)`?
*(Dica: o que cada um faz se a lista ainda estiver carregando? Pense no Bloco B e no F.)*

<O toHaveCount(12) aguarda automaticamente até que a quantidade de elementos apareça ou o timeout seja atingido. Já count() consulta a quantidade naquele momento, podendo retornar um valor incorreto se a tela ainda estiver carregando. Então ele é melhor porque reduz a necessidade de esperas fixas e torna os testes mais confiáveis.>

### 2. Por que o Bloco C desliga o Service Worker (`serviceWorkers: 'block'`) e o Bloco E mantém ligado?
*(Dica: o que o SW faz com o `fetch` do catálogo? E o que o teste offline precisa do SW?)*

<No Bloco C, o Service Worker é desligado para evitar que o cache interfira nas requisições dos mocks, deixando os testes de rede mais previsíveis. No Bloco E, ele precisa estar ativo e controlando a página para validar o cache, o funcionamento offline e a sincronização dos comentários quando a conexão retorna.>

### 3. No D3 você semeou favoritos pelo `localStorage` em vez de clicar nos corações. Qual o ganho? Qual o risco? Cite **um caso em que você NÃO semearia**.
*(Dica: o que o clique prova que a semente não prova?)*

<Ganho: preparar o estado inicial rapidamente, sem depender de cliques na interface.  
Risco: não validar se a funcionalidade de favoritar pela interface funciona corretamente.  
Não semearia: em um teste que verifica se clicar no coração adiciona o filme aos favoritos e persiste a alteração após recarregar a página.
>

### 4. Bloco F: quais eram os defeitos dos testes instáveis (F1a, F1b e F1d) e como você **provou** que ficaram estáveis?
*(Cite os comandos que rodou e o resultado.)*

<No F1a, a contagem era consultada imediatamente, sem aguardar os resultados da busca. No F1b, havia uma espera fixa com waitForTimeout e uma contagem imediata de elementos. No F1d, o teste dependia de um favorito criado por outro teste, violando o isolamento. As correções usaram espera automática e prepararam o estado inicial de forma independente. A estabilidade deve ser confirmada executando a suíte dez vezes e rodando o F1d isoladamente.

Validação

playwright test 06-flaky --repeat-each=10

Running 41 tests using 5 workers

  ✓   1 …tests/auth.setup.ts:9:1 › autentica e salva o storageState (274ms)
  ✓   2 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.1s)
  ✓   3 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.3s)
  ✓   4 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.4s)
  ✓   5 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.3s)
  ✓   6 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.1s)
  ✓   7 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (340ms)
  ✓   8 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (350ms)
  ✓   9 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (407ms)
  ✓  10 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (405ms)
  ✓  11 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.2s)
  ✓  12 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (487ms)
  ✓  13 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.2s)
  ✓  14 …nstável (conserte) › F1c. favoritar Matrix marca o coração (433ms)
  ✓  15 …nstável (conserte) › F1c. favoritar Matrix marca o coração (403ms)
  ✓  16 …nstável (conserte) › F1c. favoritar Matrix marca o coração (320ms)
  ✓  17 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (259ms)
  ✓  18 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (271ms)
  ✓  19 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (250ms)
  ✓  20 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (239ms)
  ✓  21 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (257ms)
  ✓  22 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.0s)
  ✓  23 …vel (conserte) › F1a. busca mostra 1 resultado pra "matrix" (1.0s)
  ✓  24 …el (conserte) › F1a. busca mostra 1 resultado pra "matrix" (992ms)
  ✓  25 …el (conserte) › F1a. busca mostra 1 resultado pra "matrix" (876ms)
  ✓  26 …el (conserte) › F1a. busca mostra 1 resultado pra "matrix" (846ms)
  ✓  27 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (347ms)
  ✓  28 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (364ms)
  ✓  29 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (375ms)
  ✓  30 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.1s)
  ✓  31 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.2s)
  ✓  32 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (422ms)
  ✓  33 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.2s)
  ✓  34 …tável (conserte) › F1b. carregar mais traz 12 filmes novos (437ms)
  ✓  35 …nstável (conserte) › F1c. favoritar Matrix marca o coração (326ms)
  ✓  36 …instável (conserte) › F1c. favoritar Matrix marca o coração (1.1s)
  ✓  37 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (252ms)
  ✓  38 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (243ms)
  ✓  39 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (263ms)
  ✓  40 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (236ms)
  ✓  41 … suíte instável (conserte) › F1d. favoritos mostra 1 filme (241ms)

  41 passed (11.1s)

npx playwright test 06-flaky -g "F1d"

Running 2 tests using 1 worker

  ✓  1 … tests/auth.setup.ts:9:1 › autentica e salva o storageState (278ms)
  ✓  2 …— suíte instável (conserte) › F1d. favoritos mostra 1 filme (341ms)

  2 passed (5.0s)

>

### 5. Seus mocks do Bloco C (C1–C4) dão confiança em quê — e **que bug real passaria batido** mesmo com todos eles verdes?
*(Dica: o que muda quando o backend é de verdade? Pense em contrato, formato, lentidão.)*

<Os mocks permitem validar cenários controlados: catálogo com dados específicos, erro HTTP, alteração da resposta e quantidade de requisições feitas pela busca. Porém, mesmo com todos os testes passando, um problema no backend real poderia passar despercebido, como uma mudança no formato dos dados, uma resposta lenta ou uma falha de integração entre frontend e backend.>

### 6. Missão livre: por que você escolheu **esse** fluxo? Que risco do produto ele cobre? O que ficou **sem** teste e por quê?

<Escolhi o fluxo de remoção de favoritos porque ele valida a atualização da lista, o estado vazio e a persistência após recarregar a página. Esses cenários cobrem o risco de o usuário remover um filme e ele continuar aparecendo ou retornar quando não deveria. Não testei todos os cenários possíveis, para manter o escopo focado nos comportamentos principais.>
