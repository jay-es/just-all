const just = require("./index.js");

const isFunction = (fn) => typeof fn === "function";

describe("all methods are functions", () => {
  it("Collections", () => {
    expect(isFunction(just.diff)).toBeTruthy();
    expect(isFunction(just.diffApply)).toBeTruthy();
    expect(isFunction(just.compare)).toBeTruthy();
    expect(isFunction(just.clone)).toBeTruthy();
    expect(isFunction(just.pluckIt)).toBeTruthy();
    expect(isFunction(just.flush)).toBeTruthy();
  });

  it("Objects", () => {
    expect(isFunction(just.extend)).toBeTruthy();
    expect(isFunction(just.merge)).toBeTruthy();
    expect(isFunction(just.values)).toBeTruthy();
    expect(isFunction(just.entries)).toBeTruthy();
    expect(isFunction(just.pick)).toBeTruthy();
    expect(isFunction(just.omit)).toBeTruthy();
    expect(isFunction(just.filterObject)).toBeTruthy();
    expect(isFunction(just.mapObject)).toBeTruthy();
    expect(isFunction(just.mapValues)).toBeTruthy();
    expect(isFunction(just.mapKeys)).toBeTruthy();
    expect(isFunction(just.reduceObject)).toBeTruthy();
    expect(isFunction(just.isEmpty)).toBeTruthy();
    expect(isFunction(just.isCircular)).toBeTruthy();
    expect(isFunction(just.isPrimitive)).toBeTruthy();
    expect(isFunction(just.safeGet)).toBeTruthy();
    expect(isFunction(just.safeSet)).toBeTruthy();
    expect(isFunction(just.typeOf)).toBeTruthy();
    expect(isFunction(just.flipObject)).toBeTruthy();
  });

  it("Arrays", () => {
    expect(isFunction(just.cartesianProduct)).toBeTruthy();
    expect(isFunction(just.unique)).toBeTruthy();
    expect(isFunction(just.flattenIt)).toBeTruthy();
    expect(isFunction(just.index)).toBeTruthy();
    expect(isFunction(just.insert)).toBeTruthy();
    expect(isFunction(just.intersect)).toBeTruthy();
    expect(isFunction(just.compact)).toBeTruthy();
    expect(isFunction(just.last)).toBeTruthy();
    expect(isFunction(just.tail)).toBeTruthy();
    expect(isFunction(just.random)).toBeTruthy();
    expect(isFunction(just.shuffle)).toBeTruthy();
    expect(isFunction(just.split)).toBeTruthy();
    expect(isFunction(just.splitAt)).toBeTruthy();
    expect(isFunction(just.partition)).toBeTruthy();
    expect(isFunction(just.permutations)).toBeTruthy();
    expect(isFunction(just.range)).toBeTruthy();
    expect(isFunction(just.remove)).toBeTruthy();
    expect(isFunction(just.union)).toBeTruthy();
    expect(isFunction(just.zipIt)).toBeTruthy();
    expect(isFunction(just.groupBy)).toBeTruthy();
  });

  it("Statistics", () => {
    expect(isFunction(just.mean)).toBeTruthy();
    expect(isFunction(just.median)).toBeTruthy();
    expect(isFunction(just.memoize)).toBeTruthy();
    expect(isFunction(just.mode)).toBeTruthy();
    expect(isFunction(just.percentile)).toBeTruthy();
    expect(isFunction(just.variance)).toBeTruthy();
    expect(isFunction(just.stdev)).toBeTruthy();
    expect(isFunction(just.skewness)).toBeTruthy();
  });

  it("Strings", () => {
    expect(isFunction(just.template)).toBeTruthy();
    expect(isFunction(just.truncate)).toBeTruthy();
    expect(isFunction(just.prune)).toBeTruthy();
    expect(isFunction(just.squash)).toBeTruthy();
    expect(isFunction(just.leftPad)).toBeTruthy();
    expect(isFunction(just.rightPad)).toBeTruthy();
    expect(isFunction(just.camelCase)).toBeTruthy();
    expect(isFunction(just.kebabCase)).toBeTruthy();
    expect(isFunction(just.snakeCase)).toBeTruthy();
    expect(isFunction(just.pascalCase)).toBeTruthy();
    expect(isFunction(just.capitalize)).toBeTruthy();
    expect(isFunction(just.replaceAll)).toBeTruthy();
  });

  it("Numbers", () => {
    expect(isFunction(just.clamp)).toBeTruthy();
    expect(isFunction(just.isPrime)).toBeTruthy();
    expect(isFunction(just.modulo)).toBeTruthy();
  });

  it("Functions", () => {
    expect(isFunction(just.compose)).toBeTruthy();
    expect(isFunction(just.curryIt)).toBeTruthy();
    expect(isFunction(just.demethodize)).toBeTruthy();
    expect(isFunction(just.flip)).toBeTruthy();
    expect(isFunction(just.partialIt)).toBeTruthy();
    expect(isFunction(just.debounceIt)).toBeTruthy();
    expect(isFunction(just.throttle)).toBeTruthy();
    expect(isFunction(just.once)).toBeTruthy();
  });
});
