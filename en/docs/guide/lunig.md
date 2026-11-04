# Lunig

`lunig` is used to create object that may be:
- Characters
- Items
- Artifacts
- Or another stuff

## Syntax Example

```js
lunig "ObjectName" as object
```

> By default, `"ObjectName"` is the value of the property `.name` from `object`.

> `object` is global reference that may be used in execution time.


## Adding new properties

```js
lunig "Sky" as sky 
```

Above, I created an object called `"Sky"`, now I will put more properties conected to it, using your reference (`sky`). 

To do this, simply enter the property's name and your value, like the example below:

```js
lunig "Sky" as sky

sky.color = "blue"
sky.has_clouds = true
```

## Value's types

```js
lunig "Sky" as sky

sky.color = "Blue" // string
sky.has_cloud = true // boolean
sky.clock_time = 15.4 // float
sky.wind_speed = 30 // integer
sky.weather = ["Rain", "Storm", "Summer"] // array
```

## Nesting Lunig's

To nest two `lunig` is used the function `anki.:dumu()`, like the example below:

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})
```

It means that `cloud` is inside `sky`, and may be accessed from the signal `::`.

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})

silim(sky::cloud.name) // Cloud
silim(sky::cloud.color) // White
```

If you want change or create a new propery in `cloud`:

```js
lunig "Sky" as sky

sky.cloud = anki.:dumu({
	name: "Cloud",
	color: "White"
})

sky::cloud.color = "Blue" // White -> Blue
sky::cloud.stage = "Full" // Adding a new property
```

## Dimmene (Categories)

Categories are important to organize characters, items and worlds, and to do it in *Zigurate*, is used `.:dimma`. 

Firstly, create the categories with `dimma`: 

```js
anki.:dimma("Day")
anki.:dimma("Night")
```

After, connect them to `lunig`'s created using `to`:

```js
lunig "Cloud" as cloud to "Day"
lunig "Sun" as sun to "Day"

lunig "Moon" as moon to "Night"
lunig "Star" as star to "Night"
```

Now, we have two categories: `"Day"` and `"Night"`, with this you can:

#### 1. Get `lunig` by category's name

```js
uda day = anki.:get_dimma("Day")

silim(day::sun.name) // Sun
silim(day::cloud.name) // Cloud 
```

#### 2. Getting category's name by `lunig`

```js
uda dimma_name = anki.:get_dimma_lunig(sun.name)

silim(dimma_name.name) // Day
```

#### 3. Getting all categories existent

```js
uda all = anki.:dimmene() // Array

silim(all)
```

#### 4. Compare if a `lunig` is from one specific category

```js
if anki.:is_from_dimma(cloud, "Day"):
	silim("From the day")
else:
	silim("not")
```