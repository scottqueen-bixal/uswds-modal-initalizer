import React, { useEffect, useRef } from 'react';
import { modal } from '../node_modules/uswds/src/js/components';

export default function App() {
  const path = window.location.pathname;
  return (
    <>
      {(path === '/modal1' || path === '/') &&
        <>
          <ModalButton modalId="modal1">Open Modal</ModalButton>
          <Modal1 id="modal1" />
        </>
      }
      {path === '/modal2' &&
        <>
          <button
            type="button"
            className="usa-button"
            aria-controls="modal2"
            data-open-modal
          >
            Open Modal
          </button>
          <Modal2 id="modal2" />
        </>
      }
      {path === '/modal3' &&
        <>
          <ModalContainer>
            <button
              type="button"
              className="usa-button"
              aria-controls="modal3"
              data-open-modal
            >
              Open Modal
            </button>
            <div
              className="usa-modal"
              id="modal3"
              aria-labelledby="modal3-heading"
              aria-describedby="modal3-description"
            >
              <div className="usa-modal__content">
                <div className="usa-modal__main">
                  <h2 className="usa-modal__heading" id="modal3-heading">
                    Lorem
                  </h2>
                  <div className="usa-prose">
                    <p id="modal3-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae incidunt, sit eos reprehenderit, debitis culpa, omnis laboriosam repellat quas dolorem! Consequuntur nihil modi dolorum temporibus itaque? Pariatur, sunt itaque?</p>
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
              </div>
            </div>
          </ModalContainer>
        </>
      }
    </>
  );
}

const ModalButton = function ({ modalId, children }) {
  const modalButtonRef = useRef();
  useEffect(() => {
    const modalButtonElement = modalButtonRef.current;
    modal.on(modalButtonElement);
    return () => {
      modal.off(modalButtonElement);
    };
  });
  return (
    <button
      type="button"
      className="usa-button"
      aria-controls={modalId}
      data-open-modal
      ref={modalButtonRef}
    >
      {children}
    </button>
  );
}

const Modal1 = function ({ id }) {
  const modalRef = useRef();
  useEffect(() => {
    const modalElement = modalRef.current;
    modal.on(modalElement);
    return () => {
      modal.off(modalElement);
    };
  });
  // empty div because React will try to remove .usa-modal from this components parent, but USWDS already moved .usa-modal elsewhere
  return (
    <div style={{ display: 'none' }}>
      <div
        className="usa-modal"
        id={id}
        aria-labelledby={`${id}-heading`}
        aria-describedby={`${id}-description`}
        ref={modalRef}
      >
        <div className="usa-modal__content">
          <div className="usa-modal__main">
            <h2 className="usa-modal__heading" id={`${id}-heading`}>
              Lorem
            </h2>
            <div className="usa-prose">
              <p id={`${id}-description`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae incidunt, sit eos reprehenderit, debitis culpa, omnis laboriosam repellat quas dolorem! Consequuntur nihil modi dolorum temporibus itaque? Pariatur, sunt itaque?</p>
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
        </div>
      </div>
    </div>
  );
};
const Modal2 = function ({ id }) {
  const modalRef = useRef();
  useEffect(() => {
    const modalElement = modalRef.current;
    // initialize all modals (same as passing in document.body)
    modal.on();
    return () => {
      // de-initialize all modals (same as passing in document.body)
      modal.off();
      // remove modal wrapper element from document.body
      document.body.removeChild(modalElement.parentElement.parentElement);
    }
  });
  // empty div because React will try to remove .usa-modal from this components parent, but USWDS already moved .usa-modal elsewhere
  return (
    <div style={{ display: 'none' }}>
      <div
        className="usa-modal"
        id={id}
        aria-labelledby={`${id}-heading`}
        aria-describedby={`${id}-description`}
        ref={modalRef}
      >
        <div className="usa-modal__content">
          <div className="usa-modal__main">
            <h2 className="usa-modal__heading" id={`${id}-heading`}>
              Lorem
            </h2>
            <div className="usa-prose">
              <p id={`${id}-description`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae incidunt, sit eos reprehenderit, debitis culpa, omnis laboriosam repellat quas dolorem! Consequuntur nihil modi dolorum temporibus itaque? Pariatur, sunt itaque?</p>
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
        </div>
      </div>
    </div>
  );
};

const ModalContainer = function ({ children }) {
  const modalContainerRef = useRef();
  useEffect(() => {
    const modalContainerElement = modalContainerRef.current;
    const modalElements = modalContainerElement.querySelectorAll('.usa-modal');
    modal.on(modalContainerElement);
    return () => {
      modal.off(modalContainerElement);
      modalElements.forEach((modalElement) => {
        document.body.removeChild(modalElement.parentElement.parentElement);
      });
    };
  });
  return (
    <div ref={modalContainerRef}>{children}</div>
  );
};