var etanol, gasolina;

function Calcular()
{
    gasolina = parseFloat(FrmComb.txtGasolina.value.replace(",","."));
    etanol = parseFloat(FrmComb.txtEtanol.value.replace(",","."));
    console.log(gasolina,etanol)
    if(etanol < 0.7 * gasolina) {
        return alert("É mais vantajoso abastecer com etanol");
    }

    else if(etanol > 0.7 * gasolina) {
        return alert("É mais vantajoso abastecer com gasolina");
    }

    else {
        return alert("Pode ser abastecido qualquer combúsitvel que existirá a mesma vantagem");
    }
}