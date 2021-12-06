import { Modal } from "antd";

const ModalComponent = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onCancel={props.onCancel}
      width={props.width}
      footer={props.footer || null}
      style={{ top: props.top }}
    >
      {props.children}
    </Modal>
  );
};

export default ModalComponent;
