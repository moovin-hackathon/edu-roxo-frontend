var Cruds = {
    init : function() {
        $('table td input[type="checkbox"]').click(Cruds.showDeleteSelected);

        Cruds.selectAllCheckbox();
        
    },

    showDeleteSelected : function(){
        console.log($('table td input[type="checkbox"]:checked').length);
        if($('table td input[type="checkbox"]:checked').length == 0){
            $('#deleteTask').hide();
        } else {
             $('#deleteTask').show();
        }
    },

    selectAllCheckbox : function() {
        // Select/Deselect checkboxes
        var checkbox = $('table tbody input[type="checkbox"]');
        $("#selectAll").click(function(){
            if(this.checked){
                checkbox.each(function(){
                    this.checked = true;                        
                });
                $('#deleteTask').show();
            } else{
                checkbox.each(function(){
                    this.checked = false;                        
                });
                $('#deleteTask').hide();
            } 
        });
        checkbox.click(function(){
            if(!this.checked){
                $("#selectAll").prop("checked", false);
            }
        });
    },

};
$(Cruds.init);