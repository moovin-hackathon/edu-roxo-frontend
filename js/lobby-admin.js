var LobbyAdmin = {
    init : function() {
        LobbyAdmin.getLists();
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.91:8080/list_tasks",
            dataType: 'json'
        }).success(function(data) {
            var tabelaLinha = '',
                count = 0;

            $.each(data.tasks, function(id, value){
                count++;
                console.log(value);

                if(typeof(value.children) !== 'undefined'){
                    if(value.children.length == 0){
                        children = 'Nenhum';
                    } else {
                        children = value.children.join(', ');
                    }
                } else {
                    children = 'Nenhum';
                }

                tabelaLinha += '<tr>' +
                '<td>'+value.description+'</td>'+
                '<td>'+value.points+'</td>' +
                '<td>'+children+'</td>'+
                '<td><div class="btn-group btn-status" data-id="'+data._id+'" data-desc="'+value.description+'" role="group">'+
                '<button type="button" class="btn-done btn btn-default'+(value.status == 'done' ? ' btn-success' : ' btn-error')+'">Feito</button>'+
                '<button type="button" class="bt-not-done btn btn-default'+(value.status == 'not_done' ? ' btn-success' : ' btn-error')+'">Não feito</button>'+
                '</div></td>'+
                '</tr>';
            });

            $('#tasks-table').html(tabelaLinha);

            $('.delete-task').click(function(){
                $('#deleteTaskForm').attr('data-id', $(this).attr('data-id'));
            });

            $('.btn-status button').click(function(){
                var status = '';
                if($(this).hasClass('btn-done')){
                    status = 'done';
                } else {
                    status = 'not_done';
                }
                var dataJson = {task: {'status': status, 'description': $(this).parent().attr('data-desc') }};;
                $.ajax({
                    url: "http://192.168.1.91:8080/list_tasks/"+$(this).parent().attr('data-id'),
                    method: "POST",
                    data: JSON.stringify(dataJson),
                    contentType: "application/json;charset=utf-8",
                    dataType: 'json'
                }).success(function(data) {
                    LobbyAdmin.getLists();
                });
            });

        });
    },

};
$(LobbyAdmin.init);