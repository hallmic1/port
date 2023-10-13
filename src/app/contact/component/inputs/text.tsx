import {ChangeEvent} from "react";
import styles from './styles.module.scss';
import { input } from '@/app/contact/context';
interface Props {
  value: input;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function TextInput({
  value,
  setValue,
  }: Props) {
  return (
    <span className={styles.textInput}>
      <input
        type={value.type}
        value={value.value}
        onChange={(e) => setValue(e)}
        placeholder={value.placeholder}
        className={`${styles.textInput__input} ${value.error ? styles.textInput__input_error : ''}`}
      />
    </span>


  )
}
