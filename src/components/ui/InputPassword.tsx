import { useState } from 'react';

interface InputPasswordProps{
    label: string;
    nama: string;
    error?: string; 
    register: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({label, nama, error, register}) => {
    const [show, setShow] = useState<boolean>(false);
    
    return (
        <div className="flex flex-col gap-1 mb-4 ">
        <label htmlFor="label">{label}</label>
        <input 
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-0"
        type={show ? "text" : "password"}
        {...register(nama, {required: `${label} harus diisi`})}
        placeholder={`Masukan ${label.toLowerCase()} anda`} />

        <button 
        type="button" 
        className="text-sm text-blue-500 mt-1"
        onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
        </button>
        {error && <p className="text-red-500"> {error}</p>}
    </div>

    )
}