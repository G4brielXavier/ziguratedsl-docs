# Gish (Enum)

Se você quiser definir valores fixos constantes e evitar erros de digitação, usa-se o conceitos de *Enumeração*. No *Zigurate*, quem é usado para fazer isso é o `gish`.

## Exemplo

```js
gish Rarity:
	- Common,
	- Rare,
	- Epic,
	- Legendary
	
lunig "Sword" as sword

sword.rarity = Rarity.Rare

silim(sword.rarity) // Rare
```

## Comparando `gish`

Caso você queira comparar o valor de um `uda` ou uma propriedade de um `lunig` que usa `gish`, é usado o `match`:

> inspirado no `match` do *Rust*.

```js
gish Rarity:
	- Common,
	- Rare,
	- Epic,
	- Legendary
	
uda rarity = Rarity.Common

match rarity:
    Rarity.Epic -> silim("It's epic.")
    ~ -> silim("It's other.")
```