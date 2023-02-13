import Image from "next/image";

import { Head } from "../components/Head";
import { ThankYouCard } from "../components/ThankYou/Card";

import Logo from "../assets/images/logo.png";

export default function ThankYou() {
    return (
        <>
            <Head title="Obrigado" />
            <main className="bg-gradient-to-l from-[#016D6A] to-black h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-full w-full mx-auto max-w-4xl">
                    <Image
                        src={Logo}
                        alt="Logo Plano Liberdade"
                        quality={100}
                        className="mx-auto"
                    />
                    <p className="flex gap-4 items-center mx-auto font-semibold">Aulão 28 de fevereiro ás 19h00</p>
                    <h1
                        className="text-white text-2xl sm:text-6xl font-bold text-center p-4"
                    >Atenção! Sua inscrição não está confirmada...! <br /> Faltam apenas 2 passos para garantir sua vaga no Plano liberdade</h1>
                    <div className="flex sm:grid sm:grid-cols-2 gap-8 w-full p-4">
                        <ThankYouCard>
                            <h3 className="font-bold mb-4">1º Passo:</h3>
                            <p className="mb-4">Entre no grupo fechado de Whatsapp do Plano Liberdade. <b>As mensagens mais importantes serão enviadas por lá!</b></p>
                            <b className="mb-4">Clique no botão verde abaixo para entrar!</b>
                            <a
                                href="https://chat.whatsapp.com/invite/7ZQ5ZQ2ZQZQJQZQZQZQZQZ"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-primary-400 text-white text-center font-bold rounded-full p-3 uppercase hover:brightness-75 transition duration-200 ease-in-out"
                            >
                                Entrar no grupo fechado agora!
                            </a>
                        </ThankYouCard>
                        <ThankYouCard>
                            <h3 className="font-bold mb-4">2º Passo:</h3>
                            <p className="mb-4">Vá até seu e-mail cadastrado no Plano Liberdade e abra a mensagem que eu acabei de enviar para você!</p>
                            <b>Se não estiver em sua caixa de entrada procure em promoções ou spam!</b>
                        </ThankYouCard>
                    </div>
                </div>
            </main>
        </>
    );
}