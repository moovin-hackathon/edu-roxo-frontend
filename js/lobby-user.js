var LobbyUser = {
    init : function() {
        LobbyUser.getLists();
        LobbyUser.getProfile();
    },

    getLists : function() {

        var url = new URL(window.location.href);
        var profileId = url.searchParams.get('profileId');

        if (!profileId) {
            return false
        }

        $.ajax({
            url: "http://192.168.1.91:8080/profiles/" + profileId,
            dataType: 'json'
        }).success(function(profile) {

            $.ajax({
                url: "http://192.168.1.91:8080/list_tasks/" + profile.name,
                dataType: 'json'
            }).success(function(data) {
                var item = '';
                $.each(data.tasks, function(id, value){
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

                $('#user-tasks-lists').html(item);

            });
        });
    },
    getProfile : function() {
        var url = new URL(window.location.href);
        var profileId = url.searchParams.get('profileId');

        if (!profileId) {
            return false
        }

        $.ajax({
            url: "http://192.168.1.91:8080/profiles/" + profileId,
            dataType: 'json'
        }).success(function(profile) {

            $('#profileName').html(profile.name).attr('data-id', profileId);

            if (profile.type === 'child') {
                $('#profilePoints').parent().parent().show()
                $('#profilePoints').html(profile.points)

                const hrefRewards = $('#profileRewardsLink').attr('href') + '?profileId=' + profileId
                $('#profileRewardsLink').attr('href', hrefRewards)
                $('#profileRewardsLink').parent().show()

                const hrefListTasks = $('#listTasksLink').attr('href') + '?profileId=' + profileId
                $('#listTasksLink').attr('href', hrefListTasks)
                $('#listTasksLink').parent().show()
            }
        });
    },

};
$(LobbyUser.init);