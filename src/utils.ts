/* eslint-disable no-param-reassign */
import { OrderType } from "./types";

/**
 * Sorts an array of strings in either ascending or descending order.
 * The sorting is done in place using the array's [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method.
 *
 * @param {string[]} iterable - The array of strings to be sorted.
 * @param {OrderType} order - The order in which to sort the array. Either "ASC" for ascending or "DESC" for descending.
 * @throws {Error} If the order is not "ASC" or "DESC".
 * @returns {string[]} The sorted array.
 */
export const sortInPlace = (iterable: string[], order: OrderType): string[] => {
  if (order === "ASC") {
    iterable.sort((a, b) => a.localeCompare(b));
  } else if (order === "DESC") {
    iterable.sort((a, b) => b.localeCompare(a));
  }
  return iterable;
};

/**
 * Filters the input array it in place to remove values based on the provided comparison function.
 * The filtering is done using the array's filter method.
 *
 * @template T
 * @param {T[]} it - The array to be filtered in place.
 * @param cmpFunction - The comparison function to determine which values to keep.
 * @returns {T[]} The filtered array after applying the comparison function.
 */
function filterInPlace<T>(
  it: T[],
  cmpFunction: (value: T, index: number, array: T[]) => boolean,
): T[] {
  const filtered = it.filter(cmpFunction);

  it.length = 0;
  it.push(...filtered);

  return it;
}

export const filterInPlaceByUnique = <T>(it: T[]) =>
  filterInPlace(it, (value: T, index: number, array: T[]) => {
    return array.indexOf(value) === index;
  });
