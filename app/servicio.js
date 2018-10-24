/** @jsx React.DOM */
(function () {
    'use strict';
    
    var Servicios = React.createClass({
        propTypes: {
        },
        render: function () {
            return <div>
                {this.props.datos.map(function (b) {
                    return <Servicio 
                    icono={b.icono} 
                    contenido={b.contenido} 
                    titulo={b.titulo} />
                })}
            </div>;
        }
    });

    var Servicio = React.createClass({
        propTypes: {
            titulo: React.PropTypes.string.isRequired,
            icono: React.PropTypes.string.isRequired,
            contenido: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div className="col-md-4 col-sm-6">
                <div className="service">
                    <i className={"fa fa-" + this.props.icono}></i>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.contenido}</p>
                </div>
            </div>;
        }
    });

    React.renderComponent(<Servicios datos={[
        { 
            icono:"diamond", 
            contenido:"Realizamos soluciones para todo tipo de plataformas móviles",
            titulo: "Apps"
        },
        {
            icono: "rocket",
            contenido: "Desarrollamos aplicaciones de negocio y programas críticos para empresas.",
            titulo: "Desarrollo de Software"
        },
        {
            icono: "cogs",
            contenido: "Te podemos acompañar para que saques un excelente beneficio de tu inversión en TI.",
            titulo: "Consultoría"
        },        
    ]}/>,
        document.getElementById('servicios-content'));
})();
