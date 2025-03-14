(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-form-menu-open]'),
    closeModalBtn: document.querySelector('[data-form-menu-close]'),
    modal: document.querySelector('[data-form-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();