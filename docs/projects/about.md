# Sobre Projetos

Criar projetos para cada um de seus mundos no Zigurate é uma prática recomendada, pois permite:
- Organização melhor
- Pre-visualização
- Modularização
- Expansão

## Criando um projeto

Para criar um novo projeto no Zigurate, basta usar o comando abaixo:

```cmd
enki create project_name
```

Ele vai criar a seguinte estrutura:

```
project_name/ 
	├── world/ 
	│   └── main.zi 
	└── Enki.yaml
```

O conteúdo do `main.zi` é esse:

```js
silim("Hello World!")
```

Para executar, basta usar: `enki run` sem especificar o caminho/arquivo, porque o compilador faz essa verificação a partir da existência de `Enki.yaml`.


## Sobre `Enki.yaml`

O `Enki.yaml` é o arquivo `.yaml` que define a pasta em um *ZigurateProject*, o seu conteúdo é:

```yaml
name: "project_name"
description: ""
creator: ["creator_name"]
stage: "1"

main: "world/main.zi"

galam:
```

Agora, vou explicar cada propriedade:
- **name:** Representa o nome do projeto Zigurate (seu mundo)
- **description:** Uma breve descrição sobre o que é o projeto
- **creator:** A lista de todos os nomes dos criadores do projeto
- **stage:** O estágio em que o mundo/projeto se encontra (tipo versão)
- **main:** O arquivo principal que será executado pelo `enki run`
- **galam:** Uma lista de caminhos de módulos que podem passar pelo ``galam``.


## Criando Módulos

Para expandir seu projeto ou organizar seus `.zi` em categorias se usa a modularização.

Imagine que seu projeto é assim:

```
project_name/ 
	├── world/ 
	│   └── main.zi 
	└── Enki.yaml
```

Você quer criar uma pasta somente para personagens (`characters`) e outra para os locais (`worlds`), então:

```
project_name/ 
	├── world/ 
	│   └── characters/ 
	│   │    └── gilgamesh.zi 
	│   └── worlds/ 
	│   │    └── uruk.zi 
	│   └── main.zi 
	└── Enki.yaml
```

Nas pastas você coloca os arquivos `.zi`.

No `gilgamesh.zi`:

```js
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"
```

No `uruk.js`:

```js
lunig "Uruk" as uruk
uruk.years = 5700
```

Agora, você pode executá-los de duas formas:
- Pelo caminho, por exemplo: `enki run ./world/worlds/uruk.zi`
- Pelo `main.zi`, usando `maru`

Caso você queira que todo o restante dos arquivos seja executado e usado em `main.zi`, é usado `maru`, para executar apenas um, é pelo caminho.

Por exemplo, no `main.zi`:

```js
maru "worlds/uruk.zi"
maru "characters/gilgamesh.zi"

silim(gilgamesh.name) // Gilgamesh
silim(uruk.years) // 5700
```

> Caso queira saber mais sobre `maru`, [clique aqui](../guide/maru.md)

## Exportando com `galam` (JSON)

Lembra do `galam` no arquivo `Enki.yaml`, nós vamos usa-lo agora, vamos supor que você a seguinte estrutura de projeto:

```
project_name/ 
	├── world/ 
	│   └── characters/ 
	│   │    └── gilgamesh.zi 
	│   └── worlds/ 
	│   │    └── uruk.zi 
	│   └── main.zi 
	└── Enki.yaml
```

Após isso, abra o seu `Enki.yaml` e coloque as pastas que você quer que sejam convertidas:

```yaml
name: "project_name"
description: ""
creator: ["creator_name"]
stage: "1"

main: "world/main.zi"

# Aqui
galam:
- "world/characters"
- "world/worlds"
```

Depois execute:

```ps
enki galam
```

Ele irá abrir cada pasta e executar cada um dos arquivos `.zi` que estiverem dentro e no fim converter os dados em *JSON* e criar um arquivo `.json` com o mesmo nome do arquivo `.zi` original.

Após isso, será criado uma pasta chamada `base` dentro da raiz do projeto.

```
project_name/ 
	├── base/ 
	│   └── gilgamesh.json 
	│   └── uruk.json 
	├── world/ 
	│   └── characters/ 
	│   │    └── gilgamesh.zi 
	│   └── worlds/ 
	│   │    └── uruk.zi 
	│   └── main.zi 
	└── Enki.yaml
```

> Uma observação: As pastas `characters` e `worlds` não vão ser replicadas ao `base` no momento da conversão, pois essa ação é responsável pela função `anki.:dimme` que vai estar disponível em futuras atualizações beta.