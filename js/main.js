alert("funcionou");

function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/14800390/json";
    console.log(cep);
    $.ajax({
        url: "https://viacep.com.br/ws/14800390/json",
        type: "GET",
        sucess: function(response) {
            console.log(response);
            alert(response, logradouro);

        }
    })
}