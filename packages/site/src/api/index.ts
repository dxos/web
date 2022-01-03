/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function sqrt(x: number): number {
    return Math.sqrt(x);
}

/**
 * Code blocks are great for examples
 *
 * ```typescript
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 */
 export class MyClass {}

interface Foo {
    member: boolean;
}
 
/**
 * Standard links:
 * link: {@link MyClass} or {@linkplain MyClass} or [[MyClass]]
 * 
 * linkplain: {@linkplain MyClass} or [[MyClass]]
 * 
 * linkcode {@linkcode MyClass} or [[`MyClass`]]
 *
 * Code links: (Puts Foo inside `<code>` tags)
 * {@linkcode Foo} or [[`Foo`]]
 */
export class Bar implements Foo {
    member;
    constructor() {
        this.member = true;
    }
}