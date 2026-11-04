# Maru (Lunig's Importation)

The `maru` is used when you want execute another specific file before the current file and use a external `lunig`.

Example, you have two files (`gilgamesh.zi` and `main.zi`) in your project:

```
my_project/ 
	├── world/ 
	│   └── gilgamesh.zi
	│   └── main.zi 
	└── Enki.yaml
```

> Attention: `maru` only works to `lunig`, a `uda` or `gish` created externally is not used to other files, to make it is used another function (`baran`) 

In `gilgamesh.zi`, I create a `lunig`:

```js
lunig "Gilgamesh" as gilgamesh

gilgamesh.city = "Uruk"
```

Now, to use it in another file as `main.zi`, firstly is important understand how **EnkiVM** works.

## Enki VM Pipeline

**EnkiVM** have a global HashMap that stores `lunig`, `gish`, `uda`, `dimma` and others.

When you run `enki run`, it read the `world/main.zi` (you can change it in `Enki.yaml` file):

Example, inside of `main.zi`, you have:

```js
silim(gilgamesh.name)
```

That will cause an error, because `gilgamesh` never was created before, to solve it, you need execute the file where `gilgamesh` was declared with `maru`: 

```js
maru "world/gilgamesh.zi"
```

You must set the file path as string (Verify if path is correct to work), and mainly, **it must be in the top of the file**, because **EnkiVM** execute your instructions from top to bottom.

Now, if you make this:

```js
maru "world/gilgamesh.zi" // <-- it will be executed firsly, when finish, continue

silim(gilgamesh.name) // now, exists a lunig called "gilgamesh"
```
