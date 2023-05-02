import { FormEvent, useEffect, useRef } from "react";
import "./Contact.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "axios";
import { axiosPrivate } from "../../services/axiosPrivate";

type FormData = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

function Contact() {
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

    const payload = {
      recipient: "djbokisha@gmail.com",
      sender: data.email,
      subject: "subject",
      message: data.message,
    };

    axiosPrivate.post(`${import.meta.env.VITE_URL}/auth/email`, payload)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 300) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-contact">
      <div className="left-contact-side">
        <div className="text-area-contact">
          <h1>BALKAN AI</h1>
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
