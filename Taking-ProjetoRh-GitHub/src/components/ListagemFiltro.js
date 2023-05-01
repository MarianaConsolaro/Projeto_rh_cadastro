// import Images from "./images";
import { Form, Label, Input, Row, Col } from "reactstrap";
import BarraMenu from "./barramenu";
import Curriculo from "./curriculo";
import { useState } from "react";

export default function ListagemFiltro(){
const [showFields, setShowFields] = useState(false);


return(
        
    <>
       
    <BarraMenu/>
    
    <body>
    <div>
    
        <h4>CONSULTA DE CURRÍCULOS</h4>
   
        <br/>

        <h5>Informe o CPF:</h5>

        
        <body>
               
        <Form>    
       
            <div className="form-group row">
            <Label for="CPF" className="col-sm-2.5 col-form-label">CPF</Label>
            <div className="col-sm-11">
            <Input type="text" className="form-control" id="" placeholder="Digite o número do documento"/>
            </div>
            </div>
                
        <br />
            
            <input class="button-pesquisa" type="button" onClick={() => setShowFields(true)} value="Pesquisar"></input>

        </Form>  
    
        </body>

    </div>         
    </body>
         <hr class= "largura-linha"/>
         
    {showFields && <> <Curriculo/>

    <body>    
        <Form>
        <input class="button-editar" type="button" value="Editar"></input> 
        </Form>
    </body>
    </>
}


    

    </>

)}