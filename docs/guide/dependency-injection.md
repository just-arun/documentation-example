# Dependency Injection

Dependency injection is an inversion of control (IoC) technique wherein you delegate instantiation of dependencies to the IoC container (in our case, the LeapJS runtime), instead of doing it in your own code imperatively.

Leap is built around the strong design pattern commonly known as Dependency injection. We recommend reading this good [article](https://martinfowler.com/articles/injection.html) by Martin Fowler to better understand the concept.

In the example below, Leap will resolve the userService by creating and returning an instance of userService (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property)

An example is shown below,

## @injectable
First we define an injectable dependency,
```ts
@injectable()
class Katana implements Weapon {
  public slash(): string {
    return 'slash!';
  }
}
```

Then we ask Leap to inject this into another class. 

::: tip Note
that the class into which we inject dependencies can also be injectable.
:::
```ts
@injectable()
class Ninja implements Warrior {
  constructor(@inject(() => Katana) private katana: Weapon) {}

  public fight(): string {
    return this.katana.slash();
  }
}
```
The technique shown above is called constructor-based injection, as dependencies are injected via the `constructor`.

And while constructor based injection is the **preferred approach**, there are some cases where property-based injection might be useful.

## @inject
If your parent/base class has multiple dependencies, passing them up all the chain through `super()` could be tedious. In such cases, you can use `@inject` at the property level
```ts
import { Injectable, Inject } from '@leapjs/common';

@injectable()
export class BaseConnection {
  @inject(Configuration)
  private readonly configuration: Configuration;
}
```