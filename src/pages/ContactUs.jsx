import React, { useState } from 'react';


function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou executar outras ações.
    console.log(formData);
    // Limpe o formulário após o envio
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <form class='format-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: <br /></label>
          <input class='input-form'
            type="text"
            id="name"
            name="name"
            placeholder="Carla Mendes"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:<br /></label>
          <input class='input-form'
            type="email"
            id="email"
            name="email"
            placeholder="CarlaMendes@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Telefone (Informe também o DDD):<br /></label>
          <input class='input-form'
            type="text"
            id="subject"
            name="subject"
            placeholder="(38)988090807"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:<br /></label>
          <textarea class='text-area-form'
            id="message"
            name="message"
            placeholder="Escreva aqui sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button class='button-form' type="submit">Enviar</button>
      </form>
    </div>

  );
}

export default ContactUsForm;
