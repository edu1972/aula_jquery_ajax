function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        sucess: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro); // exemplo Ajax
            $("#bairro").html(response.bairro); // exemplo Ajax
            $("#localidade").html(response.localidade); // exemplo Ajax
            $("#uf").html(response.uf); // exemplo Ajax
            $("#titulo_cep").html("CEP" + response.titulo_cep); // exemplo Ajax
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
})