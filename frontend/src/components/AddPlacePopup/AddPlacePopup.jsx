import { memo, useEffect } from "react";
import useFormValidation from "../../utils/useFormValidation";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from '../Input/Input.jsx'

 const AddPlacePopup = memo (({ isOpen, onClose, onAddPlace }) => {
  const { values, error, isValid, isInputValid, handleChange, reset } = useFormValidation();

useEffect(() => {
  if(isOpen){
    reset()
  }
},[isOpen])

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({nameCardsInput: values.nameCardsInput,linkCardsInput: values.linkCardsInput });
  }

  return (
    <PopupWithForm
      name="popup_type_cards"
      title="Новое место"
      titleButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <Input
        type="text"
        required
        placeholder="Название"
        name="nameCardsInput"
        id="nameCardsInput"
        minLength={2}
        maxLength={40}
        autoComplete="off"
        onChange={handleChange}
        value={values.nameCardsInput }
        error = {error.nameCardsInput}
        isInputValid = {isInputValid.nameCardsInput}
      />
      <Input
        type="url"
        required
        placeholder="Ссылка на картинку"
        name="linkCardsInput"
        id="linkCardsInput"
        minLength={2}
        autoComplete="off"
        onChange={handleChange}
        value={values.linkCardsInput}
        error = {error.linkCardsInput}
        isInputValid = {isInputValid.linkCardsInput}
      />
    </PopupWithForm>
  );
})
export default AddPlacePopup;