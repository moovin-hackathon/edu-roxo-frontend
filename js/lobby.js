var Lobby = {
    init : function() {
        Lobby.getLists();

        $('table .btn-group button').click(Lobby.changeStatus);
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.93:8080/profiles",
            dataType: 'json'
        }).success(function(data) {
            var item = '';
            $.each(data, function(id, value){
                item += '<div class="col">'+
                (value.type == 'admin' ? ('<a href="javascript:void(0)" class="thumbnail" data-target="#password" data-toggle="modal">') : ('<a href="lobby-user.html?user='+value._id+'" class="thumbnail">'))+
                '<div class="fa fa-user-circle"></div>'+
                '<div class="caption text-center">'+
                '<h3>'+value.name+'</h3>'+
                '</div>'+
                '</a>'+
                '</div>';
            });

            $('.users-thumbs').html(item);

        });
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