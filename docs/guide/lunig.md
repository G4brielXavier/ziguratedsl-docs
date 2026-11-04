# Lunig

`lunig` é usado para criar objetos que podem ser:
- Personagens
- Itens
- Artefatos
- ou outra coisa.

## Sintaxe

```js
lunig "ObjectName" as object
```

> Por padrão, `"ObjectName"` é o valor da propriedade `.name` do objeto (`object`).

> `object` é uma referência global que pode ser usada em tempo de execução. 


## Novas propriedades

```js
lunig "Sky" as sky 
```

Acima, eu criei uma objeto chamado `"Sky"`, agora eu vou colocar mais propriedades ligadas a ele, usando sua referência (`sky`).

Para isso, basta colocar o nome da propriedade e o seu valor, como no exemplo abaixo:

```js
lunig "Sky" as sky

sky.color = "blue"
sky.has_clouds = true
```

## Tipos de Valores

```js
lunig "Sky" as sky

sky.color = "Blue" // string
sky.has_cloud = true // boolean
sky.clock_time = 15.4 // float
sky.wind_speed = 30 // integer
sky.weather = ["Rain", "Storm", "Summer"] // array
```

## Aninhando Lunig's

Para aninhar dois `lunig` é usado a função `.:dumu()`, como no exemplo abaixo:

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})
```

Isso significa que a `cloud` está dentro de `sky`, e pode ser acessado a partir do sinal `::`.

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})

silim(sky::cloud.name) // Cloud
silim(sky::cloud.color) // White
```

Se você quiser mudar ou criar uma nova propriedade no `cloud`:

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})

sky::cloud.color = "Blue" // White -> Blue
sky::cloud.stage = "Full" // Adding a new property
```

## Dimmene (Categorias)

Categorias é importante para organizar personagens, itens e mundos, e pra fazer isso no *Zigurate*, usa-se `.:dimma`.

Primeiramente, crie as categorias com `dimma`:

```js
anki.:dimma("Day")
anki.:dimma("Night")
```

Depois, ligue a categoria criada aos `lunig`'s criados usando `to`.

```js
lunig "Cloud" as cloud to "Day"
lunig "Sun" as sun to "Day"

lunig "Moon" as moon to "Night"
lunig "Star" as star to "Night"
```

Agora, nós temos duas categorias: `"Day"` e `"Night"`, com isso você pode:

#### 1. Pegar as `lunig` pelo nome da categoria

```js
uda day = anki.:get_dimma("Day")

silim(day::sun.name) // Sun
silim(day::cloud.name) // Cloud 
```

#### 2. Pegando o nome da categoria pela `lunig`

```js
uda dimma_name = anki.:dimma_by_lunig(sun.name)

silim(dimma_name.name) // Day
```

#### 3. Pegando todos as categorias

```js
uda all = anki.:dimmene() // Array

silim(all)
```

#### 4. Compare se a `lunig` é de uma categoria:

```js
if anki.:is_from_dimma(cloud, "Day"):
	silim("From the day")
else:
	silim("not")
```