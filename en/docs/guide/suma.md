# Suma (Comparisons)

`Suma` is an *if-statement* of Zigurate used to do comparisons and execute specific functions depending on the condition in execution time.

## Syntax

```js
suma true {
    // code if is true
} li {
    // code if is false
}
```


## Relational Operators

| Operator | Description | For
|---|---|---|
|`is`| Used to verify equality | `string`, `int`, `float`, `bool` |
|`is_not`| Used to verify inequality | `string`, `int`, `float`, `bool` |
|`is_more`| If is more than | `int`, `float` |
|`is_less`| If is less than | `int`, `float` |
|`is_more_eq`| If is more or equal to | `int`, `float` |
|`is_less_eq`| If is less or equal to | `int`, `float` |


## Logical Operators

| Operator | Description |
|---|---|
| `a and b` | If the two conditions (`a` e `b`) is true, execute. |
| `a or b` | If any of the conditions (`a` e `b`) is true, execute. |


## Example

With type *boolean*:

```js
uda is_active = true

suma is_active is true {
    silim("It's active!")
} li {
    silim("It's not active!")
}
```

With type *string*:

```js
uda name = "gilgamesh"

suma name is "uruk" {
    silim("It's Uruk")
} li {
    silim("It's not Uruk!")
}
```

With type *integer*:

```js
uda a = 10

suma a is_more 10 {
    silim("Correct!")
} li {
    silim("Incorrect!")
}
```

With type *floating*:

```js
uda a = 2.5

suma a is_less_eq 5.5 {
    silim("Correct!")
} li {
    silim("Incorrect!")
}
```

Comparing with `uda` as value's reference:

```js
uda target = 100
uda current = 50

suma current is_more_eq target {
    silim("Completed!")
} li {
    silim("Incompleted!")
}
```


