import React from 'react';
import './About.css';

const About =({persona})=> {

    //console.log(persona.name)
    
    
    

    return(
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={persona.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{persona.name} {persona.lastname}</h5>
                        <p class="card-text">About: {persona.name} is a fictional character from the GOT universe. He is {persona.age} years old.</p>
                        <p class="card-text"><small class="text-body-secondary"> Sobre él:  {persona.likescss? 'Le gusta Css' : 'No le gusta Css'}, {persona.likewarg?'le encanta hacer Warg':'Prefiere quedarse postrado'} </small></p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export {About}