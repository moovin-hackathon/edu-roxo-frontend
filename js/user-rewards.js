var UserRewards = {
    init : function() {
        UserRewards.getLists();
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.93:8080/rewards/available",
            dataType: 'json'
        }).success(function(data) {
            var item = '';
            $.each(data, function(id, value){
                item += '<div class="col-md-4">'+
                '<div class="thumbnail">'+
                '<div class="floating-buy">Comprar</div>'+
                (value.image ? '<img src="'+value.image+'"/>' : '<div class="image-task fa fa-image"></div>')+
                '<div class="caption text-center">'+
                '<h3>'+value.description+'</h3>'+
                '<span class="task-points"><strong>'+value.points+'</strong> pontos</span>'+
                '</div>'+
                '</div>'+
                '</div>';
            });

            $('#user-rewards-lists').html(item);

            $('.floating-buy').click(function(){
                var dataId = $(this).attr('data-id');
                $.ajax({
                    url: "http://192.168.1.93:8080/rewards/"+dataId+'/',
                    method: "POST",
                    contentType: "application/json;charset=utf-8",
                    dataType: 'json'
                }).success(function(data) {
                    
                });
            })

        });
    },

};
$(UserRewards.init);