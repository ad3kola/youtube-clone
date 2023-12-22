import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  value: ModalStateProps;
}

interface ModalStateProps {
  modalState: boolean;
}

const initialState: InitialStateProps = {
  value: {
    modalState: false,
  } as ModalStateProps,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.value.modalState = true;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
