# Exercise no 3

Explore the ways of TDD!

> Try implementing functionality by writing tests first.
> Dont forget to check test coverage!

Start by:
- create new file under `src` directory named: `exercise3.ts` -> `src/exercise3.ts`
- create new file under `src/__test__` directory named: `exercise3.test.ts` -> `src/__test__/exercise3.test.ts`

## Task definition

Write a function that calculates final price of a product that end-user has to pay. 

Object definition of an object that function receives:

```typescript
type PaymentData = {
 tier: 'free' | 'premium' | 'freemium' | 'legacy',
 discount: '20%' | '33%' | '60%'| '55%' | '100%' | number,
 price: number,
 accountAge: number
}
```

In essence, there are 2 types of discounts. `PaymentData['discount']` and `PaymentData['accountAge']` - discount that gets calculated based on account age.
You can read more about `PaymentData['accountAge']` in the account age discount calculation section

### Rules for price calculation:

- `Free` tier is not eligible for any discounts;
- `Freemium` tier eligible for discount that does not exceed 10%;
  - `Freemium` tier is eligble for accountAge discount but it's bounded to 5%. 
- `Legacy` tier is eligible for discount that only equals to 42.0% (if it's greated or less than 42%, then it's not eligible);
  - `Legacy` tier is eligible for `accountAge` discount. But total discount should not exceed 90%.
- `Premium` tier has only one restiction - discount and accountAge discount should not exceed 47%;

#### Accumulation of discounts

Both eligible discount `(PaymentData['discount'])` & accountAge discount should be accumulated. In the case one is 3% and other is 5%, total discount should be 8% (unless it's bounded by tier constraints);

#### Account Age discount calculation

AccountAge discount calculation - for each year.

> each year is equal to 1.5%. However, if accountAge is a multiplier of 5, then we want to celebrate even more, and thus give out additional 5%.

Examles for accountAge discount:

- accountAge is 3:
> then it's 3 * 1.5% = 4.5%
- accountAge is 5:
> then it's 5 * 1.5% + 5% = 12.5%
- accountAge is 6:
> then it's 6 * 1.5% = 9%
- accountAge is 10:
> then it's 10 * 1.5% + 5% = 20%
