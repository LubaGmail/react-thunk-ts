import { InputHTMLAttributes, FC } from 'react';

import { FormInputLabel, Input, Group } from './input-form.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const InputForm: FC<FormInputProps> = ({ label, ...otherProps } ) => {
    // const {id, type, name, value, onChange} = otherProps

    return (<Group>
        <Input {...otherProps} />
        {label && (
          <FormInputLabel>
            {label}
          </FormInputLabel>
        )}
      </Group>

    )
}

export default InputForm