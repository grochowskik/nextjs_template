import { textFieldStyles } from './TextField.styles';

type TextFieldProps = {
  label: string;
  value: string;
};

const TextField = ({ label, value }: TextFieldProps) => {
  const { wrapper, labelStyle, valueStyle } = textFieldStyles;
  return (
    <div className={wrapper}>
      <div className={labelStyle}>
        <span>{label}</span>
      </div>
      <div className={valueStyle}>
        <span>{value || 'None'}</span>
      </div>
    </div>
  );
};
export default TextField;
