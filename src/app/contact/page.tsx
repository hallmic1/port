'use client';
import styles from './styles.module.scss'
import {useContact} from "@/app/contact/context";
import TextInput from "@/app/contact/component/inputs/text";

export default function Contact() {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    submit
  } = useContact();
  return (
    <main className={styles.Contact}>
        <h1>Contact Me!</h1>
        <form className={styles.Contact__form}>
          <TextInput value={name} setValue={setName} />
          <TextInput value={email} setValue={setEmail} />
          <TextInput value={phone} setValue={setPhone} />
          <button
            type={"submit"}
            onClick={(e) => submit(e)}
            className={styles.Contact__form__submit}
          >
            Submit
          </button>
        </form>
    </main>
  )
}
