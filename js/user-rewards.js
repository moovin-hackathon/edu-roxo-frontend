var UserRewards = {
    init : function() {
        UserRewards.getLists();
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.91:8080/rewards",
            dataType: 'json'
        }).success(function(data) {
            var item = '';
            $.each(data, function(id, value){
                item += '<div class="col-md-4">'+
                '<div class="thumbnail">'+
                (value.image ? '<img src="'+value.image+'"/>' : '<div class="image-task fa fa-image"></div>')+
                '<div class="caption text-center">'+
                '<h3>'+value.description+'</h3>'+
                '<span class="task-points"><strong>'+value.points+'</strong> pontos</span>'+
                '</div>'+
                '</div>'+
                '</div>';
            });

            $('#user-rewards-lists').html(item);

        });
    },

};
$(UserRewards.init);