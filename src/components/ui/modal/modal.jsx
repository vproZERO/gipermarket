import React from "react";
import { Dialog } from "@headlessui/react";
import { useLocation } from "react-router-dom";

const Modal = ({ children, close, isOpen }) => {
  const location = useLocation();
  React.useEffect(() => {
    close();
  }, [location.pathname]);
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-[#0000006b]">
        <Dialog.Panel className="md:py-12 md:px-20 rounded bg-white m-5 p-5">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
