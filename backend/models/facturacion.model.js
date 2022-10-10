module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define("factura", {
        identificador: {
            type: Sequelize.STRING
        },
        proveedor: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Factura;
}