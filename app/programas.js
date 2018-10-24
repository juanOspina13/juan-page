/** @jsx React.DOM */
(function () {
    'use strict';

    var Programas = React.createClass({
        propTypes: {
        },
        render: function () {
            return <div>
                {
                    this.props.datos.map(function (b) {
                        return <Programa
                            imagen={b.imagen}
                            href={b.href}
                            contenido={b.contenido}
                            titulo={b.titulo} />
                    })
                }
            </div>
                ;
        }
    });

    var Programa = React.createClass({
        propTypes: {
            titulo: React.PropTypes.string.isRequired,
            imagen: React.PropTypes.string.isRequired,
            contenido: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div href={this.props.href} className="col-md-4 col-xs-12 work"><img className="img-responsive" src={"./assets/images/" + this.props.imagen} alt=""></img>
                <div className="overlay"></div>
                <div className="work-content">
                    <span>{this.props.titulo}</span>
                    <h3>{this.props.contenido}</h3>
                    <div className="work-link">
                        <a href={this.props.href} target="_blank">
                            <i className="fa fa-external-link"></i>
                        </a>

                    </div>
                </div> </div>;
        }
    });

    React.renderComponent(<Programas datos={[
        {
            href: "http://ejefit.com/smart_crm/smart-crm-front/",
            // href: "http://megastore.pythonanywhere.com",
            imagen: "work1.jpg",
            contenido: "¿Quieres vender más y tener más felices a tus clientes?",
            titulo: "Administración y gestión de clientes"
        },
        {
            href: "#",
            imagen: "work2.jpg",
            contenido: "¿Te gustaría tener un poderoso sistema de facturación que te permita facturar inclusive desde tu smartphone ?",
            titulo: "Sistema facturación"
        },
        {
            href: "#",
            imagen: "work3.jpg",
            contenido: "¿Tu empresa necesita un programa para hacer mejor su labor?",
            titulo: "Software 100% a la medida"
        }
    ]} />,
        document.getElementById('software-content'));
})();
