import { queryHelpers, buildQueries } from '@testing-library/react'

const queryAllByDataTestid = (c: HTMLElement, dataTestidValue: any) =>
  queryHelpers.queryAllByAttribute('data-testid', c, dataTestidValue)

const getMultipleError = (_: HTMLElement, dataTestidValue: any) =>
  `Found multiple elements with the data-cy attribute of: ${dataTestidValue}`
const getMissingError = (_: HTMLElement, dataTestidValue: any) =>
  `Unable to find an element with the data-cy attribute of: ${dataTestidValue}`

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
