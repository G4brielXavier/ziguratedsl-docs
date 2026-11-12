# About Projects

Create projects to each one of your worlds in Zigurate is a recommended way, because allow:
- Better organization 
- Preview
- Modularization
- Expansion


## Creating a project

To create a new Zigurate project, just use the command below:

```cmd
enki create project_name
```

It will create the following structure:

```
project_name/ 
	├── world/ 
	│   └── main.zi 
	└── Enki.yaml
```

The `main.zi`'s content is this:

```js
silim("Hello World!")
```

To execute it, just use: `enki run` without specify the path/file, because the compiler make this verification based in `Enki.yaml`'s existence.


## About `Enki.yaml`

`Enki.yaml` is a `yaml` file that defines a folder as *ZigurateProject*, your default content is:

```yaml
name: "project_name"
description: ""
creator: ["creator_name"]
stage: "1"

main: "world/main.zi"

galam:
```

Now, I will explain each property:
- **name:** Represents the Zigurate project's name (your world)
- **description:** A brief description about what is your project
- **creator:** A lista of all project creator's name
- **state:** The current status of the project (like version)
- **main:** The main file that will be executed by `enki run`
- **galam:** module path's list that can to pass by `enki galam` 



## Creating modules

To expand your project or organize your `.zi` files in categories if you are using modularizing.

Imagine that your project's structure is like this:

```
project_name/ 
	├── world/ 
	│   └── main.zi 
	└── Enki.yaml
```

You want to create a folder only for characters (`characters`) and another to locals (`worlds`), then:

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

And in the folder you put `.zi` files.

In `gilgamesh.zi`:

```js
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"
```

In `uruk.js`:

```js
lunig "Uruk" as uruk
uruk.years = 5700
```

Now, you can execute them in two ways:
- By path, example: `enki run ./world/worlds/uruk.zi`
- By `main.zi`, using `maru`

if you want all the remaining files be executed and used in `maru.zi`, use `maru`, to execute only one, is by path.

For example, in `main.zi`:

```js
maru "worlds/uruk.zi"
maru "characters/gilgamesh.zi"

silim(gilgamesh.name) // Gilgamesh
silim(uruk.years) // 5700
```

> If you want to know more about `maru`, [click here](../../../en/docs/guide/maru.md).

## Using `galam` to convert (JSON)

Remember of `galam` in `Enki.yaml` file, we will use it now, let's assume that your have the following structure:

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

After that, open your `Enki.yaml` and put the folders that you want to be converted: 

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

After execute:

```ps
enki galam
```

It will open each folder and execute each `.zi` file that is inside and in the end convert the data in *JSON* and create a `.json` file with the same original `.zi` file name.

After this, will be created a folder called `base` inside project's root.

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

> A comment: the folders `characters` and `worlds` will not be replicated to `base` in convertion moment, because this action is responsible by `anki.:dimme` function that will be available in future beta updates.