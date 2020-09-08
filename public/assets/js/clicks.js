$(() => {
    $("#addBurg").on("submit" , (event) => {
        event.preventDefault();

        const newBurg = {
            name: $("#ham").val().trim()
        };

        $.ajax("/api/burgers" , {
            type: "POST",
            data: newBurg
        }).then(() => {
            location.reload();
        })
    })

    $(".devour").on("click" , function(event){
        event.preventDefault();

        const id = $(this).attr("data-id");

        console.log($(this).attr("data-id"))

        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload();
        })
    })
})