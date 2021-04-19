import { queryHelpers, buildQueries } from '@testing-library/react'

const queryAllByDataTestid = (c: HTMLElement, dataCyValue: any) =>
  queryHelpers.queryAllByAttribute('data-testid', c, dataCyValue)

const getMultipleError = (_: HTMLElement, dataCyValue: any) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`
const getMissingError = (_: HTMLElement, dataCyValue: any) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`

const [
  queryByDataTestid,
  getAllByDataTestid,
  getByDataTestid,
  findAllByDataTestid,
  findByDataTestid,
] = buildQueries(queryAllByDataTestid, getMultipleError, getMissingError)

export {
  queryByDataTestid,
  queryAllByDataTestid,
  getByDataTestid,
  getAllByDataTestid,
  findAllByDataTestid,
  findByDataTestid,
}
