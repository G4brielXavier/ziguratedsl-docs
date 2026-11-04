# Gish (Enums)

If you want define constant-fixed values and avoid typing erros, is used *Enumeration*'s concept. In *Zigurate*, who is used to make it is `gish`.

## Example

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

## Comparing `gish`

if you want compare `uda`'s value or a `lunig`'s property that use `gish`, is used `match`.

Caso você queira comparar o valor de um `uda` ou uma propriedade de um `lunig` que usa `gish`, é usado o `match`.

> *Inspired in `match` from Rust.*

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