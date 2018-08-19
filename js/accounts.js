var Accounts = {
    init : function() {
        Accounts.getLists();

        $('#userForm').submit(Accounts.submitNew);

        $('#deleteUserForm').submit(Accounts.delete);
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.93:8080/profiles",
            dataType: 'json'
        }).success(function(data) {
            var item = '',
                linha = 0;
          
            $.each(data, function(id, value){
                linha++;
                item += '<tr>'+
                '<td>'+
                '<span class="custom-checkbox">'+
                '<input type="checkbox" id="checkbox'+linha+'" name="options[]" value="'+linha+'">'+
                '<label for="checkbox'+linha+'"></label>'+
                '</span>'+
                '</td>'+
                '<td>'+value.name+'</td>'+
                '<td>'+value.type+'</td>'+
                '<td>'+value.points+'</td>'+
                '<td>'+
                '<a href="#deleteModal" data-id="'+value._id+'" class="delete" data-toggle="modal"><i class="fa fa-times" data-toggle="tooltip" title="Deletar"></i></a>'+
                '</td>'+
                '</tr>';
            });

            $('#accounts-list').html(item);

        });
    },

    submitNew : function(){
        var dataJson = JSON.stringify($(this).serializeObject());
         $.ajax({
            url: "http://192.168.1.93:8080/profiles",
            method: "POST",
            data: dataJson,
            contentType: "application/json;charset=utf-8",
            dataType: 'json'
        }).success(function(data) {
            
        });
    },

    delete : function(){
        var id = $(this).attr('data-id');
         $.ajax({
            url: "http://192.168.1.93:8080/profiles/"+id,
            method: 'DELETE'
        }).success(function(data) {
            
        });
    },

};
$(Accounts.init);