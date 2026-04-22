interface InputTextProps{
    label: string;
    nama: string;
    error?: string; 
    register: any;
}

export const InputText: React.FC<InputTextProps> = ({label, nama, error, register}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
        <label htmlFor={nama}>{label}</label>
        <input 
        type="text"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2"
        {...register(nama, { required: `${label} harus diisi` })}
        placeholder={`Masukan ${label.toLowerCase()} anda`}/>
        {error && <p className="text-red-500">{error}</p>}    
        </div>

    )
}