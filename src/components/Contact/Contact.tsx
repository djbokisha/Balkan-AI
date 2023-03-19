import { FormEvent, useEffect, useRef } from "react";
import "./Contact.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnmeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current!.value;
    const surname = surnmeRef.current!.value;
    const email = emailRef.current!.value;
    const message = messageRef.current!.value;

    console.log(name, surname, email, message);
    formRef.current?.reset();
  };

  const schema: ZodType<FormData> = z.object({
    name: z.string().min(2).max(30),
    surname: z.string().min(2).max(30),
    email: z.string().email(),
    message: z.string().min(2).max(500),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="container-contact">
      <div className="left-contact-side">
        <div className="text-area-contact">
          <h1>BALKAN AI</h1>

          <p>PIB: 112371254 Delatnost: 4791 Matični broj: 66058336</p>

          <p>Tel: +381638765730 </p>
          <p>Email: support@balkanai.com</p>

          <p>Adresa: Zemunska 22 / 1. Sprat Interfon: 8 Novi Beograd 11070</p>
        </div>
      </div>
      <div className="right-contact-side">
        <div className="container-form">
          <form onSubmit={handleSubmit(submitData)}>
            <h1>KONTAKT</h1>
            <div className="name-surname">
              <div className="name">
                <label htmlFor="">Ime</label>
                <input type="text" placeholder="" {...register("name")} />
                {errors.name && (
                  <span className="error-span"> {errors.name.message}</span>
                )}
              </div>

              <div className="surname">
                <label htmlFor="">Prezime</label>
                <input type="text" placeholder="" {...register("surname")} />
                {errors.surname && (
                  <span className="error-span"> {errors.surname.message}</span>
                )}
              </div>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="" {...register("email")} />
              {errors.email && (
                <span className="error-span"> {errors.email.message}</span>
              )}
            </div>
            <p>Poruka</p>

            <div className="textarea">
              <textarea
                className="textarea-form"
                id="text"
                cols={40}
                rows={10}
                {...register("message")}
              ></textarea>

              <button type="submit" className="btn-send">
                Posalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
