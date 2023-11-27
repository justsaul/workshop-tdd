# Exercise no 2

Explore the ways of TDD!

> Try implementing functionality by writing tests first.

Start by:
- create new file under `src` directory named: `exercise2.ts` -> `src/exercise2.ts`
- create new file under `src/__test__` directory named: `exercise2.test.ts` -> `src/__test__/exercise2.test.ts`

## Task definition

### Part 1

Write a function (in examples we will call as `generateMarker` that accepts such object

```typescript
type Marker = {
  mark: 'TDD',
  count: number
}
```
and based on object properties, it returns `Marker['mark']` repeated in the string for amount of `Market['count']` times. Mark in the string should be separated by SPACE `(' ')`

For example:

``` typescript
generateMarker({ mark: 'TDD', count: 2})
```

should produce such string `TDD TDD`
> generateMarker({ mark: 'TDD', count: 2}) === 'TDD TDD'

### Part 2

`generateMarker` got a signature face-lift. Now it accepts such object

```typescript
type Marker = {
  mark: 'TDD',
  count: number
  symbolToJoinBy?: '-' | '_' | '.'
}
```

Same rules applies as before, however, now marker string should respect `symbolToJoinBy` property. If symbol is not passed, we should fallback to SPACE `(' ')` as before.

For example: 
``` typescript
generateMarker({ mark: 'TDD', count: 2, symbolToJoinBy: '_'})
```

should produce such string `TDD_TDD`

### Part 3

`generateMarker` signature have changed once again. Now it accepts such object


```typescript
type Marker = {
  mark: 'TDD',
  count: number
  symbolToJoinBy?: '-' | '_' | '.',
  reject?: boolean
}
```

`reject` is optional parameter (should be set to false by default), that when toggled on uses SPACE `(' ')` instead of `symbolToJoinBy` to concatinate the string.
If we encounter case where reject is set as true but there is no `symbolToJoinBy` we should `throw Error`


### Bonus part

handle reject & symbolToJoinBy mismatch from typescript end, such that we wouldn't have to throw error.
