interface InputProps {
  label?: string;
  className?: string;
  type: string;
  value?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  className,
  type,
  value,
  id,
  name,
  autoComplete,
  required,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={className}
      />
    </div>
  );
}
