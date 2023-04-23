import { Form, Label, Input, FormGroup, FormText, Row, Col } from "reactstrap";

import Images from "./images";

export default function Cadastro(){

return(


    <>
    
        <Images/>

            
            <body>
                <div>

                <center>
                <h1>Cadastre seu currículo</h1>
                <p>Você pode preencher o formulário com os seus dados ou adicionar seu currículo através do último campo.</p>
                </center>

                <br/>
            
            <body>
                
                <h4>Dados Pessoais</h4>
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

                <br />
                
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

                        <div className="form-group row">
                            <Label for="DataDeNascimento" className="col-sm-2.5 col-form-label">Data de Nascimento</Label>
                            <div className="col-sm-12">
                            <Input type="date" className="form-control" id="" />
                            </div>
                        </div>
                </Col>
           
                <br />

                <Col>
                         <div className="form-group row">
                            <FormGroup tag="fieldset">                    
                            <Label for="Nome" className="col-sm-2 col-form-label">Gênero</Label>
                <Row>
                <Col xs="auto">
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio1" />{'Feminino'}
                            </Label>
                            </FormGroup>
                </Col>
                <Col>
                            <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio1" />{'Masculino'}          
                            </Label>
                            </FormGroup>
                </Col>
                </Row>
                            </FormGroup>
                            </div> 
                </Col>
                </Row>

            

            <br/>
            <Row>
            <Col>   
                            <div className="form-group row">
                            <Label for="Telefone" className="col-sm-2.5 col-form-label">Telefone</Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" id="" placeholder="Digite o telefone"/>
                            </div>
            </div>
            </Col> 

            <br/>

            <Col>
                            <div className="form-group row">
                            <Label for="Celular" className="col-sm-2.5 col-form-label">Celular</Label>
                            <div className="col-sm-12">
                            <Input type="text" className="form-control" id="" placeholder="Digite o celular"/>
                            </div>
                            </div>
            </Col>
            </Row>

            <br/>

            <Row>
            <Col>    
                    
                    <Label for="Deficiencia" className="col-sm-2.5 col-form-label">Possui alguma deficiência?</Label>
                    <div className="col-sm-12">
                    <select className="className=col-sm-12 custom-select deficiencia-opcao col-form-label" name="deficiencia">
                    <option value="todos">Deficiência </option>
                    <option value="brasil">Sim</option>
                    <option value="USA">Não </option>
                    </select>
                    </div>
                    
            </Col>
            
            <Col>
                    <Label for="Qual" className="col-sm-2.5 col-form-label">Qual deficiência possui?</Label>
                    <div className="col-sm-12">
                    <select className="custom-select deficiencia-opcao col-form-label " name="qual">
                    <option value="todos">Especifique a deficiência</option>
                    <option value="todos">Deficiência visual </option>
                    <option value="brasil">Deficiência Auditiva</option>
                    <option value="USA">Deficiência Motora </option>
                     <option value="USA">Outros </option>
                    </select>
                    </div>
                   
            </Col>         
            </Row>

             
            <br />
            <br />
                  
        
            {/* ENDEREÇO*/}

            <h4>Endereço</h4>

            <br />
           
            

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
                               
                        <div className="form-group row">
                        <Label for="Cep" className="col-sm-2.5 col-form-label">CEP</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" id="" placeholder="Digite o CEP"/>
                        </div>
                        </div>
                       
            
            </Col> 
            </Row> 

            <br/>

            <Row>
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
            

            <br/>
                    
            
              
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

            <Row>
            <Col>    

                        <div className="form-group row">
                        <Label for="Logradouro" className="col-sm-2.5 col-form-label">Logradouro</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" id="" placeholder=" Ex.: Rua Antonio da Costa, número 94"/>
                        </div>
                        </div>
            
                
            </Col> 
            </Row>

                 <br/>
                 <br/>
                    
            {/* FORMAÇÃO ACADEMICA*/}

            
            <h4>Formação Acadêmica</h4>
            <br/>
           

            <Row>
            <Col>

                    <div className="form-group row">
                    <div className="col-sm-12">  
                    <Label className="nivel-label" for="nivel">Nivel de Escolaridade</Label>
                    <select className="custom-select escolaridade-opcao col-form-label" name="nivel">
                    <option value="todos">Nível de Escolaridade</option>
                    <option value="ensino medio">Ensino Médio</option>
                    <option value="graduacao">Graduação</option>
                    <option value="pos graduacao">Pós Graduação </option>
                    <option value="mestrado">Mestrado </option>
                    <option value="doutorado">Doutorado </option>
                    </select>
                    </div>
                    </div>
                    
            </Col>

            <br/>
            <Col>

                    <div className="form-group row">
                    <div className="col-sm-12">
                    <Label className="area-label" for="area">Área de Formação</Label>
                    <select className="custom-select escolaridade-opcao col-form-label" name="area">
                    <option value="todos">Área de Formação</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="adm">Administração</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="gestao">Gestão</option>
                    </select>
                    </div>
                    </div>
                    
            </Col>
            </Row>
            <br/>

            <Row>
            <Col>   
           
                    <Label for="Nome" className="col-sm-2.5 col-form-label">Curso</Label>
                    <div className="col-sm-12">
                    <select className="custom-select escolaridade-opcao col-form-label" name="curso">
                    <option value="todos">Curso</option>
                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                    <option value="ciencia de dados">Ciência de Dados</option>
                    <option value="ciencia da computacao">Ciência da Computação </option>
                    <option value="sistemas de informacao">Sistemas de Informação</option>
                    </select>
                    </div>
            </Col> 
            <Col>       

                    <Label className="instituicao-label" for="instituicao">Instituição de Ensino</Label>
                    <select className="custom-select escolaridade-opcao col-form-label" name="instituicao">
                    <option value="todos">Insitituição de Ensino</option>
                    <option value="usp">Universidade de São Paulo</option>
                    <option value="unicamp">Universidade Estadual de Campinas</option>
                    <option value="ufrj">Universidade Estadual do Rio de Janeiro</option>
                    <option value="uam">Universidade Anhembi Morumbi</option>
                    </select>
            </Col>         
            </Row>        

            <br/>

            <Row>
            <Col>

        
                    <Label for="Nome" className="col-sm-2.5 col-form-label" >Status</Label>
                    <div className="col-sm-12">
                    <select className="custom-select status-opcao col-form-label" name="status">
                    <option value="todos">Status</option>
                    <option value="concluído">Concluído</option>
                    <option value="andamento">Em andamento</option>
                    </select>
                    </div>
                    

            </Col>
            </Row>

            <br />

            <Row>
            <Col>  
                    <div className="form-group row">
                    <Label for="Nome" className="col-sm-2.5 col-form-label">Data de Início</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" id="" />
                    </div>
                    </div>
            </Col>  
            <Col>        

                    <div className="form-group row">
                    <Label for="Nome" className="col-sm-2.5 col-form-label">Data de Conclusão</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" id="" />
                    </div>
                    </div>
                   
                    
            </Col>
            </Row>

            <br />

            <Row>
                    <Col>
                    <input class="button-adicionar" type="button" value="Adicionar Formação"></input>
                    </Col> 

            { /*<Row>
                    <div className="form-group row">
                    <Label className="adicionarformacao-label" for="adicionarformacao">Adicionar Formação</Label>
                    <div className="col-sm-12">
                    <select className="custom-select localizacao-opcao col-form-label" name="adicionarformacao">
                    <option value="todos">Todos </option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option> 
                    </select>
                    </div>
</div> */}
                              
            </Row>         

                    <br/>
                    <br/>

            {/* IDIOMAS*/}

            <h4>Idiomas</h4>
                <br/>
                

            <Row> 
            <Col>  

                    <div className="form-group row">
                    <div className="col-sm-11">
                    <div className="form-group row">
                    <Label className="idiomas-label" for="idiomas">Idioma</Label>
                    <select className="custom-select idiomas-opcao col-form-label" name="idiomas">
                    <option value=""></option>
                    <option value="ingles">Inglês</option>
                    <option value="espanhol">Espanhol </option>
                    <option value="frances">Francês</option>
                    <option value="outros">Outros</option>
                    </select>
                    </div>
                    </div>
                    </div>
            </Col>



            <br />

            <Col>       
                    
                    <div className="form-group row">
                    <div className="col-sm-12">
                    <div className="form-group row"></div>    
                    <Label className="nivel-label" for="idiomas">Nível de Fluência</Label>
                    <select className="custom-select idiomas-opcao col-form-label" name="nivel">
                    <option value=""></option>
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                    </select>
                    </div>
                    </div>
                    
            </Col> 
            </Row> 

            { /*<Row>
            <Col>          
                <div className="form-group row">
                    <Label className="adicionar-label" for="idiomas">Adicionar idioma?</Label>
                    <select className="custom-select idiomas-opcao col-form-label" name="adicionar">
                    <option value=""></option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                    </select>
                    </div> 
            </Col>            
            </Row>  */}  

            <br />

            <Row>
                    <Col>
                    <input class="button-adicionar" type="button" value="Adicionar Idioma"></input>
                    </Col> 
            </Row>              

            {/* EXPERIENCIA PROFISSIONAL*/}

            <br />
            <br />

            <h4>Experiência Profissional</h4>

            <br/>
              

            <Row>
            <Col>
                        <div className="form-group row">
                        <div className="col-sm-20">
                        <div className="form-group row">
                        <Label for="Cargo" className="col-sm-2.5 col-form-label">Cargo</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" id="" placeholder="Cargo"/>
                        </div>
                        </div>
                        </div>
                        </div>

                       
            </Col>  
            <Col>        

                        <div className="form-group row">
                        <Label for="Empresa" className="col-sm-2.5 col-form-label">Empresa</Label>
                        <div className="col-sm-12">
                        <Input type="text" className="form-control" id="" placeholder="Nome da empresa"/>
                        </div>
                        </div>

            </Col>  
            </Row>

            <br/> 

           
            <Row>
            <Col>  
                    <div className="form-group row">
                    <Label for="Nome" className="col-sm-2.5 col-form-label">Data de Início</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" id="" />
                    </div>
                    </div>
            </Col>  
            <Col>        

                    <div className="form-group row">
                    <Label for="Nome" className="col-sm-2.5 col-form-label">Data de Conclusão</Label>
                    <div className="col-sm-12">
                    <Input type="date" className="form-control" id="" />
                    </div>
                    </div>
                   
                    
            </Col>
            </Row>      

            <br />

            <Row>
            <Col>
                    <div className="form-group row">
                    <Label for="comentario" sm={2.5}>Comente aqui sua experiência profissional:</Label>
                    <Col sm={12}>
                    <Input type="textarea" name="text" id="comentario" />
                    </Col>
                    </div>
                    
            </Col>
            </Row>

            <br />

            <Row>
                    <Col>
                    <input class="button-adicionar" type="button" value="Adicionar Experiência"></input>
                    </Col> 
            </Row>   

            { /* <Col>
                    
                    <Label className="adicionarexperiencia-label" for="adicionarformacao">Adicionar Experiência?</Label>
                    <select className="custom-select localizacao-opcao col-form-label" name="adicionarexperiencia">
                    <option value="todos">Todos </option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option> 
                    </select>
                         
             </Col>
             </Row>
              */}
             <br/>
             <br/>

             {/* INTERESSE*/}

                <h4>Área de interesse profissional</h4>

                <br/>
                
            <Row> 
            <Col>  

                    <div className="form-group row">
                    <div className="col-sm-12">
                    <div className="form-group row">
                    <Label className="interesse-label" for="interesse">Qual a área de interesse:</Label>
                    <select className="custom-select interesse-opcao col-form-label" name="Interesse">
                    <option value=""></option>
                    <option value="backend">Back-end</option>
                    <option value="frontend">Front-end </option>
                    <option value="gestao">Gestão</option>
                    <option value="outros">Outros</option>
                    </select>
                    </div>
                    </div>
                    </div>
                    
            </Col>
            </Row>

            <br/>
            <br/>  

            {/* LINKEDIN*/}

                    <h4>Linkedin</h4>

                    <br/>
                  

                    <Row>
                    <Col>
                            <div className="form-group row">
                            <div className="col-sm-20">
                            <div className="form-group row">                           
                            <Input type="url" name="url" id="linkedin" placeholder="www.linkedin.com.br/" />
                            </div>
                            </div>
                            </div>
                    </Col>
                    </Row>

                    <br />
                    <br />

                     {/* UPLOAD*/}

                        <h4>Upload</h4>

                        <br />

                    <Row>
                            <div className="form-group row">
                            <div className="col-sm-20">
                            <div className="form-group row">
                            <Label for="Upload" className="col-sm-2 col-form-label"></Label>
                            <Input type="file" name="upload" id="Upload" />
                            <FormText color="muted">
                            Aqui você pode fazer o Upload do seu currículo.
                            </FormText>
                            </div>
                            </div>
                            </div>
                    </Row>
        
                    <br />
                    <br />

                    <Row>                    
                    <Col>                  
                    <input class="button-enviar" type="button" value="Enviar"></input> 
                    </Col>
                    </Row>


            </Form>
            
            </body>
            </div>
            </body>


            { /* <hr className= "largura-linha"/> */}


    </>
);

}