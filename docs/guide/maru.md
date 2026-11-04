# Maru (Importação de Lunig's)

`maru` é usado para casos onde você queira usar um `lunig` criado em outro arquivo `.zi`.

Exemplo, você tem dois arquivos: `gilgamesh.zi` e `main.zi`.

```
my_project/ 
	├── world/ 
	│   └── gilgamesh.zi
	│   └── main.zi 
	└── Enki.yaml
```

> `maru` só funciona para `lunig`, `uda` é uma variável local então não pode ser usada externamente. Já o `gish` pode sim ser usado externamente com `baran`.

No `gilgamesh.zi`, eu crio um `lunig`:

```js
lunig "Gilgamesh" as gilgamesh

gilgamesh.city = "Uruk"
```

Agora, para usar esse `lunig` em outro arquivo como `main.zi`, primeiramente é importante entender como a **EnkiVM** funciona.

## Enki VM Pipeline

**EnkiVM** ter banco de dados global que armazena todos os `lunig`, `gish`, `uda` e outros criados.

Quando você executa `enki run`, ele lê o caminho `world/main.zi` (que vem do ``Enki.yaml``).

No `world/main.zi`, você tem:

```js
silim(gilgamesh.name)
```

Isso vai dar um erro, porque `gilgamesh` nunca foi criado, para resolver isso você precisa executar o arquivo onde o `gilgamesh` foi declarado com o `maru`:

```js
maru "world/gilgamesh.zi"
```

Você deve colocar o caminho até o arquivo como *string*, e principalmente declarar no topo do arquivo, porque o compilador lê as intruções de cima para baixo.

Agora, se você fizer isso:

```js
maru "world/gilgamesh.zi" // <-- Isso vai ser executado primeiro antes de continuar.

silim(gilgamesh.name) // Agora, existe uma lunig chamada "Gilgamesh", então executa a função.
```
