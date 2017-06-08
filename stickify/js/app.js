document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("canvas").addEventListener("click", function(e) {

        var canvas = document.getElementsByTagName("canvas")[0],
            input = document.getElementsByTagName("input")[0],
            input_text = input.value;

        if (!!input_text) {

            var ctx = canvas.getContext("2d"),
                input_del = input_text.replace(input_text.charAt(0), "");

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
});