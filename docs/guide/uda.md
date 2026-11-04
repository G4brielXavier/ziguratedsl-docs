# Uda

É uma variável temporária usada apenas para armazenar um dado em tempo de execução.

## Sintaxe

```js
uda uda_name = value
```

## Exemplos

```js
uda name = "zigurate"
uda int_num = 979 
uda float_num = 9.9
uda on_the_way = true 
uda ideas = ["arrival"]

silim(name)
silim(int_num) 
silim(float_num)
silim(on_the_way) 
silim(ideas)
```


## "Cortando" um uda existente

`uda` fica vivo até o fim da execução, mas se você quiser "cortar" antes, use `anki.:kud()`

```js
uda temp = 10

silim(temp) // 10

anki.:kud(temp) // Cortado aqui

silim(temp) // Aqui vai dar erro de não encontrado
```


## Propriedades de um `lunig` em um `uda`

Você pode armazenar a propriedade de uma `lunig` como valor de um `uda`, por exemplo:

```js
lunig "Gilgamesh" as gilgamesh

// armazenando o nome de "gilgamesh"
uda name = gilgamesh.name

silim(name) // "Gilgamesh"
```

O `gilgamesh.name` é apenas um emprestimo imutável, se você tentar muda o valor de uma propriedade a partir do `uda`, ele só vai mudar o valor que está armazenado. Por exemplo:

```js
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"

uda city = gilgamesh.city
silim(city) // Uruk

city = "Eridu" // mudando para "Eridu"

silim(gilgamesh.city) // Uruk
silim(city) // Eridu
```

Para mudar a propriedade um `lunig` pelo `uda`, você deve usar um *modifier* chamado `@nisa`, veja no exemplo:

```js
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"

uda city = @nisa gilgamesh.city
city = "Eridu" // isso vai funcionar

silim(gilgamesh.city) // "Eridu" (valor original)
```
---


## Array dinâmicos

Array é uma sequência de valores com um tamanho dinâmico e tipo fixo (*type-fixed*).

```js
[1, 2, 3] // <-- Array of Integers
["dingir", "ziam"] // <-- Array of Strings
```

O tipo de valor de um array é definido através do tipo do primeiro valor dela:

```js
[1, 2, 3]

// '1' é um número inteiro, então os próximos valores devem ser números inteiros.
```

## Manipulando Arrays

Para manipular arrays, como inserção, remoção e leitura é usado algumas funções (`.:`):


## `.:push`

Para inserção de um novo elemento.

```js
uda names = ["dingir"]
names.:push("ziam")

silim(names) // ["dingir", "ziam"]
```

## `.:pop`

Para remoção de um elemento existente ou do último elemento.

```js
uda names = ["dingir", "ziam", "anki"]
names.:pop() // remove "anki"
names.:pop(0) // remove "dingir"

silim(names) // ["ziam"]
```

## `.:clear`

Para remover todos os elementos de uma lista.

```js
uda names = ["dingir", "ziam", "anki"]
names.:clear()

silim(names) // []
```

## Indexação com `[]`

Para indexar um elemento pela sua posição em uma lista é usado o básico com `[]`.

> No *Zigurate*, os arrays seguem a ordem clássica de indexação começando por `0`.

```js
[1, 2, 3, 4, 5] // <-- valores
 0  1  2  3  4 // <-- indíces (posição)
```

```js
uda names = ["eridu", "uruk", "ur"]

uda city = names[1]

silim(city) // uruk
```

