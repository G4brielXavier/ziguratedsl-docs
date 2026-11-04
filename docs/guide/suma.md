# Suma (Comparação)

O `suma` é um *if statement* do Zigurate usado para fazer comparações e executar funções especificos dependendo da condição em tempo de execução.

## Sintaxe

```js
suma true {
    // código se for verdadeiro
} li {
    // código se for falso
}
```


## Operadores Relacionais

| Operador | Descrição | Para
|---|---|---|
|`is`| Usado para verificar igualdade | `string`, `int`, `float`, `bool` |
|`is_not`| Usado para verificar desigualdade | `string`, `int`, `float`, `bool` |
|`is_more`| Se é maior que | `int`, `float` |
|`is_less`| Se é menor que | `int`, `float` |
|`is_more_eq`| Se é maior ou igual a | `int`, `float` |
|`is_less_eq`| Se é menor ou igual a | `int`, `float` |


## Operadores Lógicos

| Operador | Descrição |
|---|---|
| `a and b` | Se as duas condições (`a` e `b`) forem verdadeiras, executa. |
| `a or b` | Se qualquer uma das duas condições (`a` e `b`) forem verdadeiras, executa. |


## Exemplo

Com tipo *bool*:

```js
uda is_active = true

suma is_active is true {
    silim("It's active!")
} li {
    silim("It's not active!")
}
```

Com tipo *string*:

```js
uda name = "gilgamesh"

suma name is "uruk" {
    silim("It's Uruk")
} li {
    silim("It's not Uruk!")
}
```

Com tipo *integer*:

```js
uda a = 10

suma a is_more 10 {
    silim("Correct!")
} li {
    silim("Incorrect!")
}
```


Com tipo *floating*:

```js
uda a = 2.5

suma a is_less_eq 5.5 {
    silim("Correct!")
} li {
    silim("Incorrect!")
}
```


Comparando com `uda` como referência de valor:

```js
uda target = 100
uda current = 50

suma current is_more_eq target {
    silim("Completed!")
} li {
    silim("Incompleted!")
}
```