const Modal = function ({ name }) {
  return (
    <>
    <a
      href={`#${name}-heading`}
      className="usa-button"
      aria-controls={`${name}`}
      data-open-modal
    >Open {name}</a>
    <div
      className="usa-modal"
      id={name}
      aria-labelledby={`${name}-heading`}
      aria-describedby={`${name}-description`}
    >
    <div className="usa-modal__content">
      <div className="usa-modal__main">
        <h2 className="usa-modal__heading" id={`${name}-heading`}>
          Are you sure you want to continue?
        </h2>
        <div className="usa-prose">
          <p id={`${name}-description`}>
            You have unsaved changes that will be lost.
          </p>
        </div>
        <div className="usa-modal__footer">
          <ul className="usa-button-group">
            <li className="usa-button-group__item">
              <button type="button" className="usa-button" data-close-modal>
                Continue without saving
              </button>
            </li>
            <li className="usa-button-group__item">
              <button
                type="button"
                className="usa-button usa-button--unstyled padding-105 text-center"
                data-close-modal
              >
                Go back
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="usa-button usa-modal__close"
        aria-label="Close this window"
        data-close-modal
      >
        <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
          {/* <use xlink:href="/assets/img/sprite.svg#close"></use> */}
        </svg>
      </button>
    </div>
  </div>
  </>
  );
};

export default Modal;
