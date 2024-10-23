export default function () {
  function toggleBodyClass(addRemoveClass: 'add' | 'remove', className: string) {
    const { body } = document;

    addRemoveClass === 'add' ? body.classList.add(className) : body.classList.remove(className);
  }

  return {
    toggleBodyClass,
  };
}
