window.onload= function (){
    var paper = new Raphael( 0, 0, 800, 800);

    var backGround = paper.rect(0,0,800,800);

    backGround.attr({ fill: "black"});

    var first = paper.circle(400,400,30);
    first.attr({ fill: "white", stroke: '#123', 'stroke-width': 5});

    var second = paper.circle(500, 400, 30);
    second.attr({fill: "white", stroke: '#123', 'stroke-width': 5});


    var machine = paper.circle(400, 400, 160).attr({fill: '90-#f00-#00f', stroke: '#123', 'stroke-width': 10});

    //function generateCoords( r, centerx , centery){

        //var x = Math.random()*100;

        //var y = sqrt((r*r)-(x*x));

        //rand = random number;

        //if(rand%2 == 0){;
            //y = -y;
        //}
    //}
    
        //var[] coords = [x+centerx,y+centery]

        //return coords
    
    
        //var coords = generateCoords(250, 400, 400)

        function bounce_drop1() {

        first.animate({cx: (Math.random()*500), cy: (Math.random()*500)}, 500, 'ease-in');

        second.animate({cx: (Math.random()*500), cy: (Math.random()*500)}, 500, 'ease-out', bounce_up1);
        
        
        
    }

        function bounce_up1() {

        first.animate({cx: (Math.random()*500), cy: (Math.random()*500)}, 500, 'ease-in');

        second.animate({cx: (Math.random()*500), cy: (Math.random()*500)}, 500, 'ease-out', bounce_drop1);

            
    }


    bounce_drop1();

        function bounce_drop3() {

        //second.animate({cx: (Math.random()*200), cy: (Math.random()*200)}, 500, 'ease-in', bounce_up2);
        
    }

        function bounce_up2() {

        //second.animate({cx: (Math.random()*200), cy: (Math.random()*200)}, 500, 'ease-out', bounce_drop1);
            
    }


    bounce_drop3();

    


    

}