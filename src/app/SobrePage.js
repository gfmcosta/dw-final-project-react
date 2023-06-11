import React, { Component } from 'react';
import './SobrePage.css'

class SobrePage extends Component {

    render(){

        return(
            <div className="main" style={{width:"45%", height:"fit-content", marginTop:"15%"}}>
                <div
                style={{display: "grid", justifyContent:"center",
                gridTemplateColumns: "400px 400px",
                gridTemplateRows: "500px",
                gap: "20px 100px",
                width:"100%"
                }}>
                    <div className="images" style={{gridRow:"1", gridColumn:"1"}}>
                            <img
                            src="https://media.discordapp.net/attachments/1021769556584300604/1117538328129065030/Screenshot_2023-05-17_151733.png?width=602&height=671"
                            alt="Product"
                            className="img-fluid"
                            style={{scale:"1.15", Height: "100%", objectFit:"contain"}}
                            />
                    </div>
                    <div className="images" style={{gridRow:"1", gridColumn:"2", width:"100%"}}>
                            <img
                            src="https://media.discordapp.net/attachments/1021769556584300604/1117539016821198878/887736d8-be23-492b-a84d-476454e80405.JPG?width=573&height=671"
                            alt="Product"
                            className="img-fluid"
                            style={{scale:"1.15", Height: "100%", width:"100%", objectFit:"contain"}}
                            />
                    </div>
                    <div className='left'><h2>JOÃO GONÇALVES</h2></div>
                    <div className='right'><h2>GONÇALO COSTA</h2></div>
                    <div className='left'><p>aluno23882@ipt.pt</p></div>
                    <div className='right'><p>aluno23692@ipt.pt</p></div>
                    <div className='left'><p>Computer Science and Engineering student aiming for a Cybersecurity career</p></div>
                    <div className='right'><p>Junior Software Engineer | Full Stack Developer | Ambassador @ Magma Studio</p></div>
                </div><br/><br/>
                <div style={{width:"100%", textAlign:"justify"}}><p>Este projeto visa a criação de duas aplicações Web | Uma aplicação web que permita aceder e manipular informação presente numa base de dados através de Web Services “Front-End e Web Services” | Uma aplicação web, em ambiente server side, onde os seus utilizadores acedam a informação diferenciada em função das suas características e permissões “programação lado servidor” |Loja online de Roupa 'Água Salgada' | Da autoria de Gonçalo Costa 23692 & João Gonçalves 23882</p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    };
}

export default SobrePage;