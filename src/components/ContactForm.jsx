import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xeoqevzl");
    if (state.succeeded) {
        return <p>Gracias por comunicarte con Juli G Pop!</p>;
    }

    return (
        <section id="contacto" className='relative h-screen w-full overflow-hidden'>

            <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-5'>
                
                {/* Formulario (izquierda) */}
                <form 
                    onSubmit={handleSubmit} 
                    className="md:w-1/2 w-[90%] h-[450px] flex flex-col gap-2 bg-white/5 p-6 rounded-xl ml-20 mt-10 md:mt-16"
                >
                    <label htmlFor="name" className="text-primary font-medium">
                        Nombre Completo
                    </label>
                    <input
                        className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
                        id="name"
                        type="text"
                        name="name"
                        required
                    />

                    <label htmlFor="email" className='text-primary font-medium'>
                        Email
                    </label>
                    <input
                        className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
                        id="email"
                        type="email"
                        name="email"
                        required
                    />

                    <label htmlFor="telefono" className='text-primary font-medium'>
                        Teléfono
                    </label>
                    <input
                        className='border border-gray-400 text-sm text-gray-500 rounded-md p-1'
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
                        className='h-[20%] border border-gray-400 text-sm text-gray-500 rounded-md p-1'
                        id="message"
                        name="message"
                        required
                    />

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button 
                        type="submit" 
                        disabled={state.submitting} 
                        className='mt-4 w-[30%] bg-primary text-white p-2 rounded-xl'
                    >
                        Enviar
                    </button>
                </form>

                {/* Título (derecha) */}
                <div className='md:w-1/2 text-center md:text-left flex items-center justify-center'>
                    <h2 className='text-2xl md:text-3xl font-medium text-primary'>
                        Consultas y contrataciones
                    </h2>
                </div>

            </div>
        </section>
    );
}

export default ContactForm;