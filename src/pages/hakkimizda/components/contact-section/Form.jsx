import React from "react"
import { Icon } from "@iconify/react"
import sendCircle from "@iconify/icons-mdi/send-circle"

import "./form.css"

const formInputs = [
  { id: "name", type: "text", label: "İsminiz", placeholder: "John Doe" },
  {
    id: "tel",
    type: "tel",
    label: "Telefon Numaranız",
    placeholder: "+90 312 999 9999",
  },
  {
    id: "email",
    type: "email",
    label: "Mail adresiniz",
    placeholder: "you@example.com",
  },
  {
    id: "message",
    type: "textarea",
    label: "Mesajınız",
    placeholder: "Size nasıl yardımcı olabiliriz?",
  },
]

const Form = () => (
  <form className="info-form">
    <h2 className="info-form-h2">BİZE MESAJINIZI İLETİN</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="info-form-label">
        {input.label}

        {input.type === "textarea" ? (
          <textarea
            className="info-form-textarea"
            placeholder={input.placeholder}
          />
        ) : (
          <input
            className="info-form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="info-form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
