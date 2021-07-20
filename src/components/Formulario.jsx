import { Container, IconButton } from "@material-ui/core";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, {  useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import '../Styles/formulario.css'


const Formulario = () => {

  const form = useRef(null);
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/checkout/payment");
  }

  return (
    <Container className="Information-content">
      <div className="Information-head">
        <h2>Information</h2>
      </div>
      <div className="Inforation-form">
        <form ref={form}>
          <input type="text" placeholder="Nombre Completo" name="name" />
          <input type="text" placeholder="Apellido Completo" name="apellido" />
          <input type="text" placeholder="Correo Eletronico" name="email" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Ciuda" name="city" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Telefono" name="phone" />
          <input type="text" placeholder="Codigo postal" name="cp" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Inforation-back">
          <Link to="/"><AiOutlineArrowLeft/>Regresar</Link>
        </div>
        <div className="Information-next">
          <IconButton  className='Information_buttom' type="button" onClick={handleSubmit}>
            pagar
          </IconButton>
        </div>
      </div>
     
    </Container>
  );
};
export default Formulario;