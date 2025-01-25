import PropTypes from 'prop-types';

const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  maxLength,
  max,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          max={max}
        />
      )}
      {error && <small className="form-error">{error}</small>}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  max: PropTypes.string,
};

export default FormField;
