'use client';
import {
  MouseEvent,
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import sendMail from "../../../emails";
import FormSubmission from "../../../emails/FormSubmission";

export interface input {
  type: string;
  placeholder: string;
  value: string;
  error: boolean;
}

interface textArea {
  value: string;
  error: boolean;
}

interface ContactType {
  name: input;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
  email: input;
  setEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  phone: input;
  setPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  message: textArea;
  setMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  submit: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ContactContext = createContext<ContactType | null>(null);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}
type Props = {
  children: ReactNode;
}
export function ContactProvider({children}: Props) {
  const [name, setName] = useState({
    type: 'text',
    placeholder: 'Name',
    value: '',
    error: false,
  })
  const [email, setEmail] = useState({
    type: 'email',
    placeholder: 'Email',
    value: '',
    error: false,
  })
  const [phone, setPhone] = useState({
    type: 'tel',
    placeholder: 'Phone',
    value: '',
    error: false,
  })
  const [message, setMessage] = useState({
    value: '',
    error: false,
  })
  function setNameValue(e: ChangeEvent<HTMLInputElement>) {
    setName({...name, value: e.target.value})
  }
  function setEmailValue(e: ChangeEvent<HTMLInputElement>) {
    setEmail({...email, value: e.target.value})
  }
  function setPhoneValue(e: ChangeEvent<HTMLInputElement>) {
    setPhone({...phone, value: e.target.value})
  }
  function setMessageValue(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage({...message, value: e.target.value})
  }
  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if(name.value === '') {
      setName({...name, error: true})
      return;
    }
    //check if either email or phone is filled out
    if (!isEmailValid(email.value) && !isPhoneValid(phone.value)) {
      setEmail({...email, error: true})
      setPhone({...phone, error: true})
      return;
    }
    //send email
  }
  useEffect(() => {
    if((isEmailValid(email.value) || isPhoneValid(phone.value)) && (email.error || phone.error)) {
      setEmail({...email, error: false})
      setPhone({...phone, error: false})
    }
  }, [email, phone])
  useEffect(() => {
    if(name.value.length > 0 && name.error) {
      setName({...name, error: false})
    }
  }, [name, name.value])
  return (
    <ContactContext.Provider value={{
      name,
      setName: setNameValue,
      email,
      setEmail: setEmailValue,
      phone,
      setPhone: setPhoneValue,
      message,
      setMessage: setMessageValue,
      submit
    }}>
      {children}
    </ContactContext.Provider>
  )
}



export default ContactContext;


function isEmailValid(email: string) {
  const regex = /\S+@\S+\.\S+/;
  console.log(regex.test(email))
  return regex.test(email);
}
function isPhoneValid(phone: string) {
  //test phone valid for now return true
  if(phone.length > 0) {
    return true;
  }
}
