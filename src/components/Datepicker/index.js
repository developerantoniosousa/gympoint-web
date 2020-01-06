import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt)

export default function DatePicker({ name, minDate, value, onChange, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function handleChange(date) {
    setSelected(date)
    onChange(date)
  }

  return (
    <>
      <ReactDatePicker
        {...rest}
        locale="pt"
        minDate={minDate}
        name={fieldName}
        ref={ref}
        value={value}
        selected={selected}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.defaulProps = {
  minDate: null,
  value: new Date(),
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.instanceOf(Date)
}
