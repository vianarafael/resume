import React, { useState } from "react";

const AddressSideBarVisible = e => {
  e.preventDefault();
  console.log("da add bar");
  const node = document.querySelector(".side-address");
  node.classList.toggle("invisible");
};

const Contact = () => {
  let [postal, setPostal] = useState("");
  let [add, setAdd] = useState("");

  let [phone, setPhone] = useState("");
  let [mobile, setMobile] = useState("");

  let [email, setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [contactNumber, setContactNumber] = useState("");

  return (
    <React.Fragment>
      <div className="contacts">
        <div className="address" onClick={AddressSideBarVisible}>
          <p>{`〒 ${postal}`} </p>
          <p>{`現住所 ${add}`}</p>
        </div>
        <div className="phones">
          <p className="phone">{`電話 ${phone}`}</p>
          <p className="mobile">{`携帯 ${mobile}`}</p>
        </div>
        <p className="email">{`e-mail ${email}`}</p>
        <p className="contact">{`連絡先 ${contact}`}</p>
        <p className="contact-number">{`連絡先電話 ${contactNumber}`}</p>
      </div>

      <div className="side-address side invisible">
        <input
          type="text"
          placeholder="Código Postal"
          onChange={e => {
            e.preventDefault();
            setPostal(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Endereço"
          onChange={e => {
            e.preventDefault();
            setAdd(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Telefone Fixo"
          onChange={e => {
            e.preventDefault();
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Telefone celular"
          onChange={e => {
            e.preventDefault();
            setMobile(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={e => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={e => {
            e.preventDefault();
            setContact(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={e => {
            e.preventDefault();
            setContactNumber(e.target.value);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Contact;
