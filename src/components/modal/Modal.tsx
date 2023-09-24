import Sidebar from "./sidebar/Sidebar.tsx";
import classes from "./Modal.module.scss";
import ModalContent from "./content/ModalContent.tsx";
export default function Modal() {
  return (
    <div className={classes["modal"]}>
      <div className={classes["modal__window"]}>
        <Sidebar />
        <ModalContent />
      </div>
    </div>
  );
}
