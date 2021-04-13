// Collections {}[]
export { diff } from "just-diff";
// export { diffApply } from "just-diff-apply";
// export * as compare from "just-compare";
export * as clone from "just-clone";
// export * as pluckIt from "just-pluck-it";
// export * as flush from "just-flush";
export function diffApply(obj: any, diff: any, pathConverter: any): any;
export function compare(value1: any, value2: any): boolean;
export function pluckIt(collection: any, propertyName: any): {};
export function flush(collection: any): {};

// Objects {}
export * as extend from "just-extend";
// export * as merge from "just-merge";
// export * as values from "just-values";
// export * as entries from "just-entries";
export * as pick from "just-pick";
// export * as omit from "just-omit";
// export * as filterObject from "just-filter-object";
// export * as mapObject from "just-map-object";
export * as mapValues from "just-map-values";
// export * as mapKeys from "just-map-keys";
// export * as reduceObject from "just-reduce-object";
// export * as isEmpty from "just-is-empty";
// export * as isCircular from "just-is-circular";
// export * as isPrimitive from "just-is-primitive";
export * as safeGet from "just-safe-get";
export * as safeSet from "just-safe-set";
// export * as typeOf from "just-typeof";
// export * as flipObject from "just-flip-object";
export function merge(obj1: object, ...objs: object[]): object;
export function values(obj: any): any[];
export function entries(obj: any): any[][];
export function omit(obj: any, remove: any, ...args: any[]): {};
export function filterObject(obj: any, predicate: any): {};
export function mapObject(obj: any, predicate: any): {};
export function mapKeys(obj: any, predicate: any): {};
export function reduceObject(obj: any, predicate: any, ...args: any[]): any;
export function isEmpty(obj: any): boolean;
export function isCircular(obj: any): boolean;
export function isPrimitive(obj: any): boolean;
export function typeOf(obj: any): any;
export function flipObject(obj: any): {};

// Arrays []
// export * as cartesianProduct from "just-cartesian-product";
// export * as unique from "just-unique";
// export * as flattenIt from "just-flatten-it";
// export * as index from "just-index";
// export * as insert from "just-insert";
// export * as intersect from "just-intersect";
// export * as compact from "just-compact";
// export * as last from "just-last";
// export * as tail from "just-tail";
// export * as random from "just-random";
// export * as shuffle from "just-shuffle";
// export * as split from "just-split";
// export * as splitAt from "just-split-at";
// export * as partition from "just-partition";
// export * as permutations from "just-permutations";
// export * as range from "just-range";
// export * as remove from "just-remove";
// export * as union from "just-union";
// export * as zipIt from "just-zip-it";
// export * as groupBy from "just-group-by";
export function cartesianProduct(arr: any): any;
export function unique(arr: any, sorted: any, strings: any): any[];
export function flattenIt(arr: any): any[];
export function index(arr: any, key: any): {};
export function insert(arr1: any, arr2: any, index: any, ...args: any[]): any;
export function intersect(arr1: any, arr2: any): any[];
export function compact(arr: any): any[];
export function last(arr: any): any;
export function tail(arr: any): any[];
export function random(arr: any): any;
export function shuffle(arr: any, options: any): any[];
export function split(arr: any, n: any): any[][];
export function splitAt(arr: any, n: any): any[][];
export function partition(arr: any, fn: any): any[][];
export function permutations(arr: any): any;
export function range(start: any, stop: any, step: any): any[];
export function remove(arr1: any, arr2: any): any[];
export function union(arr1: any, arr2: any): any[];
export function zipIt(...args: any[]): any[][];
export function groupBy(arr: any, cb: any): {};

// Statistics Σ
// export * as mean from "just-mean";
// export * as median from "just-median";
// export * as memoize from "just-memoize";
// export * as mode from "just-mode";
// export * as percentile from "just-percentile";
// export * as variance from "just-variance";
// export * as stdev from "just-stdev";
// export * as skewness from "just-skewness";
export function mean(arr: any, ...args: any[]): number;
export function median(arr: any, ...args: any[]): any;
export function memoize(
  callback: any,
  resolver: any
): {
  (...args: any[]): any;
  cache: {};
};
export function mode(arr: any, ...args: any[]): number | number[];
export function percentile(arr: any, percentileValue: any): any;
export function variance(arr: any, ...args: any[]): number;
export function stdev(arr: any, ...args: any[]): number;
export function skewness(arr: any, ...args: any[]): number;

// Strings ""
// export * as template from "just-template";
// export * as truncate from "just-truncate";
// export * as prune from "just-prune";
// export * as squash from "just-squash";
// export * as leftPad from "just-left-pad";
// export * as rightPad from "just-right-pad";
// export * as camelCase from "just-camel-case";
// export * as kebabCase from "just-kebab-case";
export * as snakeCase from "just-snake-case";
// export * as pascalCase from "just-pascal-case";
// export * as capitalize from "just-capitalize";
// export * as replaceAll from "just-replace-all";
export function template(string: any, data: any): any;
export function truncate(str: any, length: any, end: any): any;
export function prune(str: any, length: any, end: any): any;
export function squash(str: any, squashEscapeSequences: any): any;
export function leftPad(str: any, length: any, padStr: any, ...args: any[]): string;
export function rightPad(str: any, length: any, padStr: any, ...args: any[]): string;
export function camelCase(str: any, options: any): string;
export function kebabCase(str: any): any;
export function pascalCase(str: any): string;
export function capitalize(str: any): string;
export function replaceAll(str: any, subStr: any, newSubStr: any, ...args: any[]): string;

// Numbers +-
// export * as clamp from "just-clamp";
// export * as isPrime from "just-is-prime";
// export * as modulo from "just-modulo";
export function clamp(b1: any, n: any, b2: any): number;
export function isPrime(number: any): boolean;
export function modulo(n: any, d: any): any;

// Functions =>
// export * as compose from "just-compose";
// export * as curryIt from "just-curry-it";
// export * as demethodize from "just-demethodize";
// export * as flip from "just-flip";
// export * as partialIt from "just-partial-it";
export * as debounceIt from "just-debounce-it";
export * as throttle from "just-throttle";
// export * as once from "just-once";
export function compose(fn1: any, fn2: any, ...args: any[]): (...args: any[]) => any;
export function curryIt(fn: any, arity: any): (...args: any[]) => any;
export function demethodize(fn: any): (thisValue: any, ...args: any[]) => any;
export function flip(fn: any): (...args: any[]) => any;
export function partialIt(fn: any, ...args: any[]): any;
export function once(fn: any): (...args: any[]) => any;
