// Collections {}[]
export { diff } from "just-diff";
export { diffApply } from "just-diff-apply";
import compare from "just-compare";
import clone from "just-clone";
import pluckIt from "just-pluck-it";
import flush from "just-flush";
export { compare, clone, pluckIt, flush };

// Objects {}
import extend from "just-extend";
import merge from "just-merge";
import values from "just-values";
import entries from "just-entries";
import pick from "just-pick";
import omit from "just-omit";
import filterObject from "just-filter-object";
import mapObject from "just-map-object";
import mapValues from "just-map-values";
import mapKeys from "just-map-keys";
import reduceObject from "just-reduce-object";
import isEmpty from "just-is-empty";
import isCircular from "just-is-circular";
import isPrimitive from "just-is-primitive";
import safeGet from "just-safe-get";
import safeSet from "just-safe-set";
import typeOf from "just-typeof";
import flipObject from "just-flip-object";
export {
  extend,
  merge,
  values,
  entries,
  pick,
  omit,
  filterObject,
  mapObject,
  mapValues,
  mapKeys,
  reduceObject,
  isEmpty,
  isCircular,
  isPrimitive,
  safeGet,
  safeSet,
  typeOf,
  flipObject,
};

// Arrays []
import cartesianProduct from "just-cartesian-product";
import unique from "just-unique";
import flattenIt from "just-flatten-it";
import index from "just-index";
import insert from "just-insert";
import intersect from "just-intersect";
import compact from "just-compact";
import last from "just-last";
import tail from "just-tail";
import random from "just-random";
import shuffle from "just-shuffle";
import split from "just-split";
import splitAt from "just-split-at";
import partition from "just-partition";
import permutations from "just-permutations";
import range from "just-range";
import remove from "just-remove";
import union from "just-union";
import zipIt from "just-zip-it";
import groupBy from "just-group-by";
export {
  cartesianProduct,
  unique,
  flattenIt,
  index,
  insert,
  intersect,
  compact,
  last,
  tail,
  random,
  shuffle,
  split,
  splitAt,
  partition,
  permutations,
  range,
  remove,
  union,
  zipIt,
  groupBy,
};

// Statistics Σ
import mean from "just-mean";
import median from "just-median";
import memoize from "just-memoize";
import mode from "just-mode";
import percentile from "just-percentile";
import variance from "just-variance";
import stdev from "just-stdev";
import skewness from "just-skewness";
export { mean, median, memoize, mode, percentile, variance, stdev, skewness };

// Strings ""
import template from "just-template";
import truncate from "just-truncate";
import prune from "just-prune";
import squash from "just-squash";
import leftPad from "just-left-pad";
import rightPad from "just-right-pad";
import camelCase from "just-camel-case";
import kebabCase from "just-kebab-case";
import snakeCase from "just-snake-case";
import pascalCase from "just-pascal-case";
import capitalize from "just-capitalize";
import replaceAll from "just-replace-all";
export {
  template,
  truncate,
  prune,
  squash,
  leftPad,
  rightPad,
  camelCase,
  kebabCase,
  snakeCase,
  pascalCase,
  capitalize,
  replaceAll,
};

// Numbers +-
import clamp from "just-clamp";
import isPrime from "just-is-prime";
import modulo from "just-modulo";
export { clamp, isPrime, modulo };

// Functions =>
import compose from "just-compose";
import curryIt from "just-curry-it";
import demethodize from "just-demethodize";
import flip from "just-flip";
import partialIt from "just-partial-it";
import debounceIt from "just-debounce-it";
import throttle from "just-throttle";
import once from "just-once";
export {
  compose,
  curryIt,
  demethodize,
  flip,
  partialIt,
  debounceIt,
  throttle,
  once,
};
