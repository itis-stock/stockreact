import classes from "../Modal.module.scss";
import ModalAccountLinked from "./ModalAccountLinked.tsx";
import ModalAccountTelegram from "./ModalAccountTelegram.tsx";
import ModalAccountHidden from "./ModalAccountHidden.tsx";
import ModalAccountDisplay from "./ModalAccountDisplay.tsx";
import ModalAccountDescription from "./ModalAccountDescription.tsx";
import ModalAccountStatus from "./ModalAccountStatus.tsx";
import ModalAccountPhoto from "./ModalAccountPhoto.tsx";
import ModalAccountBackground from "./ModalAccountBackground.tsx";
import ModalAccountMat from "./ModalAccountMat.tsx";

export default function ModalAccount() {
  return (
    <div className={classes["modalContent__account"]}>
      <ModalAccountLinked />
      <ModalAccountTelegram />
      <ModalAccountHidden />
      <ModalAccountDisplay />
      <ModalAccountDescription />
      <ModalAccountStatus />
      <ModalAccountPhoto />
      <ModalAccountBackground />
      <ModalAccountMat />
    </div>
  );
}
