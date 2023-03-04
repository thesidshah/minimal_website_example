import React, {useState} from 'react';
export default function Homepage()  {
    const [loaded, setLoaded] = useState(false);
    const lines = ["programs.","blogs.","poems.", "stories."];
    
    
     function text_writer(){
        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
          };
          
          TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
          
            if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
          
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
          
            var that = this;
            var delta = 300 - Math.random() * 100;
          
            if (this.isDeleting) { delta /= 2; }
          
            if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
            }
          
            setTimeout(function() {
              that.tick();
            }, delta);
          };
          window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtRotate(elements[i], toRotate.split(","), period);
              }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
          };
        }
        text_writer();

    return(
        <>
        
        <div id="home" className={`flex w-full h-screen gap-5 items-center justify-center relative flex-col md:flex-row  `}>
            
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
                <div className=" flex flex-col w-full mt-8">
                <p className="text-4xl text-gray-400">Hi, I'm</p>
                <h1 className="text-6xl font-bold">Siddhant Shah</h1>
                 <h4 className='text-4xl '>and I write <span
                    className="txt-rotate"
                    data-period="200"
                    data-rotate={lines}
                    ></span></h4>
                </div>
                </div>
                </div>
                </>
            );
    }