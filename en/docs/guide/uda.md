# Uda

It's a temporary variable only used to store data in execution time.

## Syntax

```zi
uda uda_name = value
```

## Examples

```zi
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


## "Cutting" an existent Uda

`uda` stay alive until the end of execution, but if you want "cut" it before, use `anki.:kud()`:

```zi
uda temp = 10

silim(temp) // 10

anki.:kud(temp) // Cutted here

silim(temp) // This will cause an not found error
```


## `lunig`'s properties in `uda`

You can store a ``lunig``'s property as `uda`'s value, for example:

```zi
lunig "Gilgamesh" as gilgamesh

// storing gilgamesh's name
uda name = gilgamesh.name

silim(name) // "Gilgamesh"
```

The `gilgamesh.name` is just an immutable borrow, if you try to change the value of a property by `uda`, it will just change the value stored. For example:

```zi
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"

uda city = gilgamesh.city
silim(city) // Uruk

city = "Eridu" // changing to "Eridu"

silim(gilgamesh.city) // Uruk
silim(city) // Eridu
```

To change a `lunig`'s property by an `uda`, you must use a *modifier* called `@nisa`, see the example:

```zi
lunig "Gilgamesh" as gilgamesh
gilgamesh.city = "Uruk"

uda city = @nisa gilgamesh.city
city = "Eridu" // it will work

silim(gilgamesh.city) // "Eridu" (original data)
```


## Dynamic Array

Array is a sequence of values with dynamic size and type fixed.

```js
[1, 2, 3] //<-- Array of Integers
["dingir", "ziam"] //<-- Array of Strings
```

The value's type of an array is defined by your first value's type:

```js
[1, 2, 3]

// '1' is an integer number, so the next values MUST be integer numbers.
``` 

## Manipulating Arrays

To manipulate arrays, like insertion, remotion and reading, is used some functions (`.:`):

## `.:push`

To insertion of new elements.

```js
uda names = ["dingir"]
names.:push("ziam")

silim(names) // ["dingir", "ziam"]
```

## `.:pop`

To remotion of an existent element or last element.

```js
uda names = ["dingir", "ziam", "anki"]
names.:pop() // remove "anki"
names.:pop(0) // remove "dingir"

silim(names) // ["ziam"]
```


## `.:clear`

To remove all elements of an array.

```js
uda names = ["dingir", "ziam", "anki"]
names.:clear()

silim(names) // []
```


## Indexation with `[]`

To index an element by you position in the array, is used `[]`.

> *In Zigurate*, the arrays follow the classic sort of indexation, starting by 0.

```js
[1, 2, 3, 4, 5] // <-- values
 0  1  2  3  4 // <-- index (position)
```

```js
uda names = ["eridu", "uruk", "ur"]

uda city = names[1]

silim(city) // uruk
```