var Lobby = {
    init : function() {
        Lobby.getAlgumaCoisa();

        $('table .btn-group button').click(Lobby.changeStatus);
    },

    userlogin : function(){
        console.log('ola mundo');
    },

    getAlgumaCoisa : function() {
        // $.ajax({
        //     url: "http://192.168.1.91:8080/task",
        //     dataType: 'json'
        // }).success(function(data) {
        //     console.log(data);
            var tabelaLinha = '',
                linha = 0;

            var objects = {
                1: {
                    'descricao' : 'Lavar Louça',
                    'pontos' : '20',
                    'nome' : 'Fulano',
                    'status' : 0
                },
                2: {
                    'descricao' : 'Arrumar cama',
                    'pontos' : '10',
                    'nome' : 'Beltrano',
                    'status' : 2
                },
                3: {
                    'descricao' : 'Escovar os dentes',
                    'pontos' : '5',
                    'nome' : 'Beltrano',
                    'status' : 1
                }
            }

            $.each(objects, function(id, value){
                tabelaLinha += '<tr>' +
                '<td>'+value.descricao+'</td>'+
                '<td>'+value.pontos+'</td>' +
                '<td>'+value.nome+'</td>'+
                '<td><div class="btn-group" role="group">'+
                '<button type="button" class="btn btn-default'+(value.status == 1 ? ' btn-success' : ' btn-error')+'">Feito</button>'+
                '<button type="button" class="btn btn-default'+(value.status == 2 ? ' btn-success' : ' btn-error')+'">Não feito</button>'+
                '</div></td>'+
                '</tr>';
            });

            $('#task-lists').html(tabelaLinha);

        // });
    },

    changeStatus : function(){
        $(this).parent().find('button').removeClass('btn-success');
        $(this).addClass('btn-success');
    },

    requestPassword : function(){
        // A implementar
        window.location.href = 'lobby-admin.html';
    }

};
$(Lobby.init);