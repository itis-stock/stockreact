import classes from "../Modal.module.scss";
import ModalAccountGroup from "./ModalAccountGroup.tsx";
import ModalAccountCourse from "./ModalAccountCourse.tsx";
import ModalAccountSemester from "./ModalAccountSemester.tsx";

export default function ModalGroup() {
  return (
    <div className={classes["modalGroup"]}>
      <ModalAccountGroup />
      <ModalAccountCourse />
      <ModalAccountSemester />
    </div>
  );
}
