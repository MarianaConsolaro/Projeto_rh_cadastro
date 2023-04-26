import Images from "./images";
import { Form, Label, Input, Row, Col } from "reactstrap";

export default function ListagemFiltro(){

return(
        
    <>
       
    <Images/>
    
    <body>
    <div>
    
        <h4>CONSULTA DE CURRÍCULOS</h4>
   
        <br/>

        <h5>Informe o CFP:</h5>

        
        <body>
               
        <Form>    
       
            <div className="form-group row">
            <Label for="CPF" className="col-sm-2.5 col-form-label">CPF</Label>
            <div className="col-sm-12">
            <Input type="text" className="form-control" id="" placeholder="Digite o número do documento"/>
            </div>
            </div>
                
        <br />
            <input class="button-buscar" type="button" value="Buscar"></input> 
        </Form>  
    
        </body>

    </div>         
    </body>

    </>

)}