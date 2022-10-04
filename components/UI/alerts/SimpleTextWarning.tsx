import { SimpleTextAlertType } from './AlertConfigTypes';
import SimpleTextAlert from './SimpleTextAlert';

interface ISimpleTextWarning {
  text: string;
  onDismissAlert?: () => void;
}

const SimpleTextWarning = ({ text, onDismissAlert }: ISimpleTextWarning) => (
  <SimpleTextAlert
    text={text}
    type={SimpleTextAlertType.WARNING}
    onDismissAlert={onDismissAlert}
  />
);

export default SimpleTextWarning;
