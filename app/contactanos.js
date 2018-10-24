/** @jsx React.DOM */
(function () {
    'use strict';

    var Contacto = React.createClass({
        propTypes: {
            datosContacto: React.PropTypes.array.isRequired
        },
        render: function () {
            return <div>
                <h1>Contáctanos</h1>
                {this.props.datosContacto.map(function (b) {
                    return <DatosContacto informacion={b} />
                })}
            </div>;
        }
    });

    var DatosContacto = React.createClass({
        propTypes: {
            informacion: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div>
                <h3>
                    {this.props.informacion}
                </h3>
            </div>;
        }
    });

    React.renderComponent(<Contacto datosContacto={["Teléfono: 312 203 8198", "Correo: jumaos1989@gmail.com"]} />,
        document.getElementById('contact-us'));
})();