import { store } from '@test/test-utils'
import {
  openSidebar,
  setModalView,
  toggleMainMenu,
  toggleSidebar,
  closeMainMenu,
  closeModal,
  closeSidebar,
  openMainMenu,
  openModal,
} from '@features/ui/uiSlice'

const { dispatch, getState } = store
const getUiState = () => getState().ui

describe('Sidebar', () => {
  const getState = () => getUiState().displaySidebar
  let state = getState()

  test('It is closed by default', () => {
    expect(state).toBeFalsy()
  })

  test('It can be toggled', () => {
    dispatch(toggleSidebar())
    state = getState()
    expect(state).toBeTruthy()

    dispatch(toggleSidebar())
    state = getState()
    expect(state).toBeFalsy()
  })

  test('It can open', () => {
    dispatch(openSidebar())
    state = getState()
    expect(state).toBeTruthy()
  })

  test('It can close', () => {
    dispatch(closeSidebar())
    state = getState()
    expect(state).toBeFalsy()
  })
})

describe('Modal', () => {
  const getModalState = () => getUiState().displayModal
  const getModalView = () => getUiState().modalView

  let modalState = getModalState()
  let modalView = getModalView()

  test('The modal state has the correct defaults', () => {
    expect(modalState).toBeFalsy()
    expect(modalView).toBe('login')
  })

  test('It can open', () => {
    dispatch(openModal())
    modalState = getModalState()
    expect(modalState).toBeTruthy()
  })

  test('It can close', () => {
    dispatch(closeModal())
    modalState = getModalState()
    expect(modalState).toBeFalsy()
  })

  test('It can switch view', () => {
    dispatch(setModalView('forgot_password'))
    modalView = getModalView()
    expect(modalView).toBe('forgot_password')
  })
})

describe('Main menu', () => {
  const getState = () => getUiState().displayMainMenu
  let state = getState()

  test('It is closed by default', () => {
    expect(state).toBeFalsy()
  })

  test('It can be toggled', () => {
    dispatch(toggleMainMenu())
    state = getState()
    expect(state).toBeTruthy()

    dispatch(toggleMainMenu())
    state = getState()
    expect(state).toBeFalsy()
  })

  test('It can open', () => {
    dispatch(openMainMenu())
    state = getState()
    expect(state).toBeTruthy()
  })

  test('It can close', () => {
    dispatch(closeMainMenu())
    state = getState()
    expect(state).toBeFalsy()
  })
})
