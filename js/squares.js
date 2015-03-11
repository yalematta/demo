var squaresjs = function(width, height, cellWidth) {
    that = this;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = width;
    this.height = height;
    this.cellWidth = cellWidth;

    that.rendering = 0;

    this.drawSquare = function(sq) {
        var steps = 50;
        var fadeR = (255 - sq.r) / steps;
        var fadeG = (255 - sq.g) / steps;
        var fadeB = (255 - sq.b) / steps;

        that.rendering++;

        var i = 0;
        var interval = setInterval(function() {
            that.ctx.fillStyle = 'rgb(' + Math.round(sq.r + fadeR * i) + ',' + Math.round(sq.g + fadeG * i) + ',' + Math.round(sq.b + fadeB * i) + ')';

            that.ctx.fillRect(sq.x * that.cellWidth, sq.y * that.cellWidth, that.cellWidth, that.cellWidth);

            i++;



        }, 30);
    }

    this.createSquares = function(n) {

        var r, g, b;

        for (var i = 0; i < n; i++) {

            var sq = {
                x: Math.round(Math.random() * (that.width - that.cellWidth) / that.cellWidth),
                y: Math.round(Math.random() * (that.height - that.cellWidth) / that.cellWidth),
                r: Math.round(0 * 255),
                g: Math.round(0 * 255),
                b: Math.round(0 * 255)
            };

            that.drawSquare(sq);
        }
    };

    that.clearCanvas = function() {
        that.ctx.fillStyle = "white";
        that.ctx.fillRect(0, 0, that.width, that.height);
    }

    this.draw = function() {
        that.clearCanvas();

        function createSingleSquare(event) {
            var xPos, yPos;

            if (event.targetTouches != undefined) {
                xPos = Math.round(event.targetTouches[0].pageX / 10) * 10;
                yPos = Math.round(event.targetTouches[0].pageY / 10) * 10;
            } else {
                xPos = Math.round(event.pageX / 10) * 10;
                yPos = Math.round(event.pageY / 10) * 10;
            }

            var sq = {
                x: Math.round(Math.random() * (that.width - that.cellWidth) / that.cellWidth),
                y: Math.round(Math.random() * (that.height - that.cellWidth) / that.cellWidth),
                r: Math.round(0 * 255),
                g: Math.round(0 * 255),
                b: Math.round(0 * 255)
            };

            that.drawSquare(sq);

        }

        that.canvas.addEventListener('mousemove', createSingleSquare, false);
        that.canvas.addEventListener('touchstart', createSingleSquare, false);
        that.canvas.addEventListener('touchmove', createSingleSquare, false);

    };



    loop = setInterval(that.draw, 2500);

}
