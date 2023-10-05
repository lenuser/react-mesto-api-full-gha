import Form from '../Form/Form.jsx'
import Popup from '../Popup/Popup.jsx'


export default function PopupWithForm({name, title, titleButton,children,isOpen,onClose,onSubmit,isSend,isValid = true,
}) {
  return (

    <Popup
        name= {name}
        isOpen={isOpen}
        onClose={onClose}
    >
    <h2  className={`popup__title ${name === "popup_type_delete" && "popup__title_type_change"}`} >{title}</h2>
    <Form
         name= {name}
         titleButton={titleButton}
         children={children}
         onSubmit= {onSubmit}
         isSend={isSend}
         isValid={isValid}
     />
      </Popup> 


  )
}
