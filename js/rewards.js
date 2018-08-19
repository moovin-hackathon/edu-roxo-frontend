var Rewards = {
    init : function() {
        Rewards.getLists();

        $('#rewardForm').submit(Rewards.submitNew);

        $('#deleteRewardForm').submit(Rewards.delete);
    },

    getLists : function() {
        $.ajax({
            url: "http://192.168.1.93:8080/rewards",
            dataType: 'json'
        }).success(function(data) {
            var item = '',
                linha = 0;
                console.log(data);
          
            $.each(data, function(id, value){
                linha++;
                item += '<tr>'+
                '<td>'+
                '<span class="custom-checkbox">'+
                '<input type="checkbox" id="checkbox'+linha+'" name="options[]" value="'+linha+'">'+
                '<label for="checkbox'+linha+'"></label>'+
                '</span>'+
                '</td>'+
                '<td>'+(value.image ? '<img src="'+value.image+'">' : '<div class="fa fa-image"></div>')+'</td>'+
                '<td>'+value.description+'</td>'+
                '<td>'+value.points+'</td>'+
                '<td>'+(value.status == 'available' ? 'Disponível' : 'Comprado')+'</td>'+
                '<td>'+
                '<a href="#deleteModal" data-id="'+value._id+'" class="delete delete-reward" data-toggle="modal"><i class="fa fa-times" data-toggle="tooltip" title="Deletar"></i></a>'+
                '</td>'+
                '</tr>';
            });

            $('#rewards-list').html(item);

            $('.delete-reward').click(function(){
                $('#deleteRewardForm').attr('data-id', $(this).attr('data-id'));
            });

        });
    },

    submitNew : function(){
        var dataJson = JSON.stringify($(this).serializeObject());
         $.ajax({
            url: "http://192.168.1.93:8080/rewards",
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
            url: "http://192.168.1.93:8080/rewards/"+id,
            method: 'DELETE'
        }).success(function(data) {
            
        });
    },

};
$(Rewards.init);