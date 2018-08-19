var Tasks = {
    init : function() {
        Tasks.getLists();

        $('#formTask').submit(Tasks.submitNewTask);

        $('#deleteTaskForm').submit(Tasks.deleteTask);
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.93:8080/model_tasks",
            dataType: 'json'
        }).success(function(data) {
            
            var tabelaLinha = '',
                count = 0;

            $.each(data, function(id, value){
                count++;
                

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
                '<td>'+
                '<span class="custom-checkbox">'+
                '<input type="checkbox" id="checkbox'+count+'" name="options[]" value="'+count+'">'+
                '<label for="checkbox'+count+'"></label>'+
                '</span>'+
                '</td>'+
                '<td>'+value.description+'</td>'+
                '<td>'+value.points+'</td>' +
                '<td>'+children+'</td>'+
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

        $.ajax({
            url: "http://192.168.1.93:8080/profiles",
            dataType: 'json'
        }).success(function(data) {
            var children = '',
                count = 0;
            $.each(data, function(id, value){
                count++;
                if(value.type != 'admin'){
                    children += '<div class="custom-checkbox"><input type="checkbox" name="children" id="custom-check-'+count+'" class="custom-control-input" value="'+value.name+'"/><label for="custom-check-'+count+'">'+value.name+'</label></div>';
                }
            });
            $('#childrenNames').append(children);
        });
            
    },

    submitNewTask : function(){
        var dataJson = $(this).serializeObject();
        if(typeof(dataJson.children) == 'string'){
            dataJson.children = [dataJson.children];
        }
        $.ajax({
            url: "http://192.168.1.91:8080/model_tasks",
            method: "POST",
            data: JSON.stringify(dataJson),
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