document.addEventListener("DOMContentLoaded", function() {

    var canvas = document.getElementsByTagName("canvas")[0],
        ctx = canvas.getContext("2d");

    document.getElementById("canvas").addEventListener("click", function(e) {

        var input = document.getElementsByTagName("input")[0],
            input_text = input.value;

        //Input contains text
        if (!!input_text) {

            var input_del = input_text.replace(input_text.charAt(0), "");

            input.value = input_del;

            //Get mouse coordinates
            var mouseX = e.clientX - ctx.canvas.offsetLeft,
                mouseY = e.clientY - ctx.canvas.offsetTop,
                input_len = input_text.length;

            //Draw letter
            ctx.font = "35pt Vibur";
            ctx.fillStyle = "#BB1919";
            ctx.textAlign = "center";
            ctx.fillText(input_text.substring(0, 1), mouseX, mouseY + 20);
        }
    });

    document.getElementById("image-wrapper").addEventListener("click", function(e) {
        //Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});