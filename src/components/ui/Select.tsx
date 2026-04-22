interface SelectProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, name, register, error, options }) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={name}>{label}</label>
            <select
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-0"
                {...register(name, { required: `${label} harus diisi` })}
            >
                <option value="">Pilih {label.toLowerCase()}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500"> {error}</p>}
        </div>
    )
}