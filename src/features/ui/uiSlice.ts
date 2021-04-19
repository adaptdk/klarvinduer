import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useTypedSelector, RootState } from '@app/store'

type ModalViewTypes = 'signup' | 'login' | 'forgot_password'

interface UIState {
  displayMainMenu: boolean
  displayModal: boolean
  displaySidebar: boolean
  modalView: ModalViewTypes
}

const initialState: UIState = {
  displayMainMenu: true,
  displayModal: false,
  displaySidebar: false,
  modalView: 'login',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMainMenu: (state) => {
      state.displayMainMenu = true
    },
    closeMainMenu: (state) => {
      state.displayMainMenu = false
    },
    toggleMainMenu: (state) => {
      state.displayMainMenu = !state.displayMainMenu
    },
    openModal: (state) => {
      state.displayModal = true
    },
    closeModal: (state) => {
      state.displayModal = false
    },
    setModalView: (state, action: PayloadAction<ModalViewTypes>) => {
      state.modalView = action.payload
    },
    openSidebar: (state) => {
      state.displaySidebar = true
    },
    closeSidebar: (state) => {
      state.displaySidebar = false
    },
    toggleSidebar: (state) => {
      state.displaySidebar = !state.displaySidebar
    },
  },
})

const { actions, reducer } = uiSlice

// Actions
export const {
  closeMainMenu,
  closeModal,
  closeSidebar,
  openMainMenu,
  openModal,
  openSidebar,
  setModalView,
  toggleMainMenu,
  toggleSidebar,
} = actions

const selectUI = (state: RootState) => state.ui

export const useUI = (): UIState => useTypedSelector(selectUI)

export default reducer
