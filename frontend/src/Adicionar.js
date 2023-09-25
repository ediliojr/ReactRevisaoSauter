import React, { Component } from 'react';
import { variables } from './Variables';

export class Adicionar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // populado com dados do API
            users: [],
            // variaveis usadas para janela de modificação
            modalTitle: "",          
            UserId:0,
            
            UserNumero: "",
            UserRevisao:"",
            UserOperador:"",
            UserProduto:"",
            UserMaquina:"",
            UserMetros:"",
            UserPeso: "",
            UserCliente:"",
            UserNumDefeitos: "",
            UserRefugo:"",
            UserLotes:"",
            UserUrdideira:"",
            UserData_cadastro: new Date(),
        };

        // bind createClick function to the component instance
        this.createClick = this.createClick.bind(this);
    }

    createClick() {
     
        fetch(variables.API_URL, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                // UserId: this.state.UserId,
                // UserNome: this.state.UserNome,
                // UserSobrenome: this.state.UserSobrenome,
                // UserEmail: this.state.UserEmail,
                // UserData_nascimento: this.state.UserData_nascimento,
                // UserData_cadastro: this.state.currentDate,
                UserNumero: '9900' + this.state.UserNumero,
                UserRevisao: this.state.UserRevisao,
                UserOperador: this.state.UserOperador,
                UserProduto: this.state.UserProduto,
                UserFornecedor: this.state.UserFornecedor,
                UserFio: this.state.UserFio,
                UserCorFio: this.state.UserCorFio,
                UserBob: this.state.UserBob,
                UserQtdFio: this.state.UserQtdFio,
                UserBarra: this.state.UserBarra,
                UserMaquina: this.state.UserMaquina,
                UserRolos: this.state.UserRolos,
                UserMetros: this.state.UserMetros,
                UserUrdideira: this.state.UserUrdideira,
                UserData_cadastro: this.state.currentDate,
                
                 
            }
            )

        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Falha');
            })
    }

    render() {
        const {
            users,
            UserId,
            UserNumero,
            UserRevisao,
            UserOperador,
            UserProduto,
            
            UserMaquina,
            UserMetros,
            UserPeso,
            UserCliente,
            UserNumDefeitos,
            UserRefugo,
            UserLotes,
         
        } = this.state;

        return (
            
            <div className="form-group">
                <br></br>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Numero</span>
                                <input type="text" className="form-control" placeholder='Numero'
                                    value={UserNumero}
                                    onChange={(e) => this.setState({ UserNumero: e.target.value })}
                                ></input>
                                
                                <span className="input-group-text">Revisadora</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserRevisao}
                                            onChange={(e) => this.setState({ UserRevisao: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Produto...</option>
                                            <option value="1">Revisadora 1 </option>
                                            <option value="2">Revisadora 2</option>
                                            <option value="3">Revisadora 3</option>
                                            {/* Add more options here */}
                                        </select>
                                  
                                     
                                        <span className="input-group-text">Operador</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserOperador}
                                            onChange={(e) => this.setState({ UserOperador: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                
                                            <option value="">Selecione </option>
                                            <option value="Willian">Willian</option>
                                            <option value="Fabricio">Fabricio</option>
                                            <option value="Letica">Letica</option>
                                            <option value="Janete">Janete</option>
                                            <option value="Judith">Judith</option>
                                            
                                          
                                          
                                            {/* Add more options here */}
                                        </select>
                                    
                                    <div className="input-group mb-3"></div>
                                    
                    

                                
                

                                
                                <span className="input-group-text">Produto	</span>
                                <input type="text" className="form-control" 
                                value={UserProduto}
                                onChange={(e) => this.setState({ UserProduto: e.target.value })}></input>

                                
                        

                                <div className="input-group mb-3"></div>
                                           <span className="input-group-text">Maquinas</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserMaquina}
                                            onChange={(e) => this.setState({ UserMaquina: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Maquina...</option>
                                            <option value="1">M1 </option>
                                            <option value="3">M3</option>
                                            <option value="4">M4</option>
                                            <option value="5">M5 </option>
                                            <option value="6">M6</option>
                                            <option value="7">M7</option>
                                            <option value="8">M8 </option>
                                            <option value="9">M9</option>
                                            <option value="10">M10</option>
                                            <option value="11">M11 </option>
                                            <option value="12">M12</option>
                                            <option value="14">M14</option>
                                            <option value="15">M15 </option>
                                            {/* Add more options here */}
                                        </select>
                                    
                                

                                
                                <span className="input-group-text">Peso	</span>
                                <input type="text" className="form-control" 
                                value={UserPeso}
                                onChange={(e) => this.setState({ UserPeso: e.target.value })}></input>

                                
                                <span className="input-group-text">Metros	</span>
                                <input type="text" className="form-control" 
                                value={UserMetros}
                                onChange={(e) => this.setState({ UserMetros: e.target.value })}></input>

                                


                                <button type="button"
                                    className="btn btn-primary float-start" onClick={() => this.createClick()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>


            {/* )} */}
        </div>

    )
    }}
