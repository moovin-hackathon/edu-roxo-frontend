var Index = {
    init : function() {
        // Index.getAlgumaCoisa();
    },

    userlogin : function(){
        console.log('ola mundo');
    },

    // getAlgumaCoisa : function() {
        // $.ajax({
        //     url: "http://192.168.1.91:8080/task",
        //     dataType: 'json'
        // }).success(function(data) {
        //     console.log(data);
            // var tabelaLinha = '',
            //     linha = 0;

            // var objects = {
            //     1: {
            //         'descricao' : 'Lavar Louça',
            //         'pontos' : '20',
            //         'nome' : 'Fulano',
            //         'status' : 1
            //     },
            //     2: {
            //         'descricao' : 'Arrumar cama',
            //         'pontos' : '10',
            //         'nome' : 'Beltrano',
            //         'status' : 2
            //     },
            //     3: {
            //         'descricao' : 'Escovar os dentes',
            //         'pontos' : '5',
            //         'nome' : 'Beltrano',
            //         'status' : 1
            //     }
            // }

            // $.each(objects, function(id, value){
            //     tabelaLinha += '<tr>' +
            //     '<td>'+value.descricao+'</td>'+
            //     '<td align="center">'+value.pontos+'</td>' +
            //     '<td>'+value.nome+'</td>'+
            //     '<td>'+
            //     '<select class="form-control status-task">'+
            //     '<option'+(value.status == 1 ? ' selected="selected"' : '')+'>Pendente</option>'+
            //     '<option'+(value.status == 2 ? ' selected="selected"': '')+'>Feito</option>'+
            //     '<option'+(value.status == 3 ? ' selected="selected"': '')+'>Não feito</option>'+
            //     '</select>'+
            //     '</td>'+
            //     '</tr>';
            // });

            // $('#task-lists').html(tabelaLinha);

        // });
    // }

};
$(Index.init);