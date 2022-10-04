import { SimpleTextAlertType } from './AlertConfigTypes';
import SimpleTextAlert from './SimpleTextAlert';

interface ISimpleTextError {
  text?: string;
  onDismissAlert?: () => void;
}

const SimpleTextError = ({
  text = 'Something went wrong, please try again latter.',
  onDismissAlert,
}: ISimpleTextError) => (
  <SimpleTextAlert
    text={text}
    type={SimpleTextAlertType.ERROR}
    onDismissAlert={onDismissAlert}
  />
);

export default SimpleTextError;
