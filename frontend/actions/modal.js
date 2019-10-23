export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, followed) => {
  return {
    type: OPEN_MODAL,
    modal,
    followed
  };
};

export const closeModal = () => ({
  type: CLOSE_MODAL
});
