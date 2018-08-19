var Tasks = {
    init : function() {
        Tasks.getLists();

        $('#formTask').submit(Tasks.submitNewTask);

        $('#deleteTaskForm').submit(Tasks.deleteTask);
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.91:8080/model_tasks",
            dataType: 'json'
        }).success(function(data) {
            
            var tabelaLinha = '',
                count = 0;

            $.each(data, function(id, value){
                count++;
                tabelaLinha += '<tr>' +
                '<td>'+
                '<span class="custom-checkbox">'+
                '<input type="checkbox" id="checkbox'+count+'" name="options[]" value="'+count+'">'+
                '<label for="checkbox'+count+'"></label>'+
                '</span>'+
                '</td>'+
                '<td>'+value.description+'</td>'+
                '<td>'+value.points+'</td>' +
                '<td>'+(value.children.length == 0 ? 'Nenhum' : value.children.join(', '))+'</td>'+
                '<td>'+
                '<a href="#deleteModal" data-id="'+value._id+'" class="delete delete-task" data-toggle="modal"><i class="fa fa-times" data-toggle="tooltip" title="Deletar"></i></a>'+
                '</td>'+
                '</tr>';
            });

            $('#tasks-table').html(tabelaLinha);

            $('.delete-task').click(function(){
                $('#deleteTaskForm').attr('data-id', $(this).attr('data-id'));
            });

        });
    },

    submitNewTask : function(){
        var dataJson = JSON.stringify($(this).serializeObject());
         $.ajax({
            url: "http://192.168.1.91:8080/model_tasks",
            method: "POST",
            data: dataJson,
            contentType: "application/json;charset=utf-8",
            dataType: 'json'
        }).success(function(data) {
            
        });
        // return false;
    },

    deleteTask : function(){
        var id = $(this).attr('data-id');
         $.ajax({
            url: "http://192.168.1.91:8080/model_tasks/"+id,
            method: 'DELETE'
        }).success(function(data) {
            
        });
    },

};
$(Tasks.init);