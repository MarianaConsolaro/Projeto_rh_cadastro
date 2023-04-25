import Images from "./images";
import { Form, Label, Input, Row, Col } from "reactstrap";

export default function ListagemFiltro(){

    return(
    
    
        <>
        
            <Images/>
    
                
                <body>
                    <div>
    
                    <center>
                    <h1>Encontre seu currículo</h1>
                    </center>
    
                    <br/>

                    <body>
                
                <h4>Preencha todos os campos abaixo:</h4>
                <br />
               
                <Form>    
                <Row>
                <Col>
                        <div className="form-group row">
                            <Label for="Nome" className="col-sm-2.5 col-form-label">Nome </Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" id="" placeholder="Digite o primeiro nome"/>
                            </div>
                        </div>
                </Col>

                <br/>
                <Col>
                         <div className="form-group row">
                            <Label for="Sobrenome" className="col-sm-2.5 col-form-label">Sobrenome </Label>
                             <div className="col-sm-12">
                            <Input type="text" className="form-control" id="" placeholder="Digite o sobrenome"/>
                            </div>
                        </div>
                </Col>
                </Row>

                <br/>

                <Row>
                <Col>  
                        <div className="form-group row">
                             <Label for="CPF" className="col-sm-2.5 col-form-label">CPF</Label>
                            <div className="col-sm-12">
                             <Input type="text" className="form-control" id="" placeholder="Digite o CPF"/>
                            </div>
                        </div>
                </Col>

                <Col>
                        <div className="form-group row">
                             <Label for="Email" className="col-sm-2.5 col-form-label">E-mail</Label>
                             <div className="col-sm-12">
                             <Input type="text" className="form-control" id="" placeholder="Digite o e-mail"/>
                            </div>
                        </div>

                </Col>  
                </Row>

                 <br/>

            <Row>
            <Col>
                  
                  <Label className="col-sm-2.5 col-form-label" for="pais">País</Label>
                  <div className="col-sm-12">
                  <select className="custom-select localizacao-opcao col-form-label" name="pais">
                  <option value="todos">País</option>
                  <option value="brasil">Brasil</option>
                  <option value="USA">USA </option>
                  <option value="Canada">Canada </option>
                  </select>
                  </div>
                  
                  
            </Col> 
            <Col>

                <Label className="col-sm-2.5 col-form-label" for="estado">UF</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao col-form-label" name="estado">
                    <option value="todos">UF</option>
                    <option value="SP">SP </option>
                    <option value="RJ">RJ </option>
                    <option value="MG">MG </option>
                    </select>
                    </div>
                        
            </Col>
            <Col>  

                    <Label className="col-sm-2.5 col-form-label" for="cidade">Cidade</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao col-form-label" name="cidade">
                    <option value="todos">Cidade</option>
                    <option value="Sao Paulo">São Paulo </option>
                    <option value="Rio de Janeiro">Rio de Janeiro </option>
                    <option value="Belo horizonte">Belo horizonte </option>
                    </select>
                    </div>
                   
            </Col>
            </Row>

            <br />
            
            <br />
                <br />

                    <Row>                    
                    <Col>                  
                    <input class="button-buscar" type="button" value="Buscar"></input> 
                    </Col>
                    </Row>
                 </Form>  
                </body>

                
                    </div>
                    
                    

                </body>

                </>

)}