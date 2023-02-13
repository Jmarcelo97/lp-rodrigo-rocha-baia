import Image from "next/image";

import { Input } from "../Input";

import Logo from "../../assets/images/logo.png";
import Calendar from "../../assets/images/calendar.png";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterFormData = {
    name: string;
    email: string;
}

export function HomeForm() {
    const { register, handleSubmit, formState } = useForm<RegisterFormData>();

    const handleRegister: SubmitHandler<RegisterFormData> = async (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center max-w-xl gap-4">
            <Image
                src={Logo}
                alt="Logo Plano Liberdade"
                quality={100}
                className="mx-auto"
            />
            <h1 className="text-3xl font-black text-center uppercase">
                <span className="text-primary-500">Sua independência financeira completa</span> está há 90 dias de distância!
            </h1>
            <h2 className="text-sm font-bold text-center">
                Liberte-se da falta de dinheiro e descubra como fazer mais de 10 mil reais por semana com um notebook e conexão com WiFi!
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Seu nome e sobrenome"
                    {...register("name", {
                        required: "Campo obrigatório",
                    })}
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="Seu e-mail"
                    {...register("email", {
                        required: "Campo obrigatório",
                    })}
                />
                <button
                    type="submit"
                    className="bg-primary-400 text-white font-bold rounded-full p-3 uppercase hover:brightness-75 transition duration-200 ease-in-out"
                    disabled={formState.isSubmitting}
                >
                    Me Inscrever para a liberdade
                </button>
            </form>
            <p
                className="flex gap-4 items-center mx-auto font-semibold"
            >
                <Image
                    src={Calendar}
                    alt="Desenho de um calendário"
                    quality={100}
                />
                Aulão 28 de fevereiro ás 19h00
            </p>
        </div>
    );
}