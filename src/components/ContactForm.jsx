import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import backgroundImage from '/assets/fondo-blanco.png';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xeoqevzl");
    if (state.succeeded) {
        return <p>Gracias por comunicarte con Juli G Pop!</p>;
    }

    return (
        <section id="contacto" className="relative h-screen w-full overflow-hidden">
            <img src={backgroundImage} className='absolute inset-0 w-full h-full object-cover object-center z-0'></img>
            <div className='w-full' >
                {/* Título */}
                <div className="xs:text-center text-center ">
                    <h2 className="relative top-20 text-center text-2xl md:text-2xl font-medium text-primary">Contacta a Juli G Pop</h2>
                </div>
                <form onSubmit={handleSubmit} className='relative top-[100px] w-[75%] sm:w-[75%] md:w-[65%] lg:w-[45%] h-[450px] flex flex-col gap-2 shadow-lg shadow-primary backdrop-blur-sm bg-white/30 p-6 rounded-xl mx-auto'>
                    <label htmlFor="name" className='text-primary font-medium'>
                        Nombre Completo
                    </label>
                    <input
                        className='border border-text-gray-600 text-sm text-gray-500 rounded-md p-1'
                        id="name"
                        type="text" 
                        name="name"
                        required
                    />
                    <label htmlFor="email" className='text-primary font-medium'>
                        Email
                    </label>
                    <input
                        className='border border-text-gray-600 text-sm text-gray-500 rounded-md p-1'
                        id="email"
                        type="email" 
                        name="email"
                        required
                    />
                    <label htmlFor="telefono" className='text-primary font-medium'>
                        Teléfono
                    </label>
                    <input
                        className='border border-text-gray-600 text-sm text-gray-500 rounded-md p-1'
                        id="telefono"
                        type="tel" 
                        name="telefono"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message" className='text-primary font-medium'>
                        Mensaje
                    </label>
                    <textarea
                        className='h-[20%] border border-text-gray-600 text-sm text-gray-500 rounded-md p-1'
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting} className='relative top-5 w-[30%] bg-primary text-white p-2 rounded-xl'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;