const tl = gsap.timeline();
tl.to('.screenloading', {
  opacity: 0,
  delay: 2,
  duration: 1,
  onComplete: () => {
    TweenLite.delayedCall(0, animations);
    function animations() {
      const animationTime = .8;
      // const header = document.querySelector('header');
      // gsap.from(header, {
      //   scrollTrigger: {
      //     trigger: header,
      //     start: 'center bottom',
      //   },
      //   y: -20,
      //   opacity: 0,
      //   duration: animationTime,
      // });

      // const mainh1 = document.querySelector('main h1');
      // gsap.from(mainh1, {
      //   scrollTrigger: {
      //     trigger: mainh1,
      //     start: 'center bottom',
      //   },
      //   y: 20,
      //   opacity: 0,
      //   duration: animationTime,
      // });

      // const mainp = document.querySelector('main p');
      // gsap.from(mainp, {
      //   scrollTrigger: {
      //     trigger: mainp,
      //     start: 'center bottom',
      //   },
      //   y: 20,
      //   delay: 1,
      //   opacity: 0,
      //   duration: animationTime,
      // });

      // const mainbutton = document.querySelector('main .button');
      // gsap.from(mainbutton, {
      //   scrollTrigger: {
      //     trigger: mainbutton,
      //     start: 'center bottom',
      //   },
      //   y: 20,
      //   delay: 1.5,
      //   opacity: 0,
      //   duration: animationTime,
      // });

      const section21 = document.querySelector('#sec21');
      gsap.from(section21, {
        scrollTrigger: {
          trigger: section21,
          start: 'center bottom',
        },
        y: 20,
        opacity: 0,
        duration: animationTime,
      });

      const section22 = document.querySelector('#sec22');
      gsap.from(section22, {
        scrollTrigger: {
          trigger: section22,
          start: 'center bottom',
        },
        y: 20,
        delay: 1,
        opacity: 0,
        duration: animationTime,
      });

      const section23 = document.querySelector('#sec23');
      gsap.from(section23, {
        scrollTrigger: {
          trigger: section23,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.5,
        opacity: 0,
        duration: animationTime,
      });

      const section24 = document.querySelector('#sec24');
      gsap.from(section24, {
        scrollTrigger: {
          trigger: section24,
          start: 'center bottom',
        },
        y: 20,
        delay: 2,
        opacity: 0,
        duration: animationTime,
      });

      const section31 = document.querySelector('#sec31');
      gsap.from(section31, {
        scrollTrigger: {
          trigger: section31,
          start: 'center bottom',
        },
        x: -20,
        delay: .5,
        opacity: 0,
        duration: animationTime,
      });

      const section32 = document.querySelector('#sec32');
      gsap.from(section32, {
        scrollTrigger: {
          trigger: section32,
          start: 'center bottom',
        },
        x: 20,
        delay: .75,
        opacity: 0,
        duration: animationTime,
      });

      const section33 = document.querySelector('#sec33');
      gsap.from(section33, {
        scrollTrigger: {
          trigger: section33,
          start: 'center bottom',
        },
        x: 20,
        delay: 1,
        opacity: 0,
        duration: animationTime,
      });

      const section34 = document.querySelector('#sec34');
      gsap.from(section34, {
        scrollTrigger: {
          trigger: section34,
          start: 'center bottom',
        },
        x: 20,
        delay: 1.25,
        opacity: 0,
        duration: animationTime,
      });

      const section35 = document.querySelector('#sec35');
      gsap.from(section35, {
        scrollTrigger: {
          trigger: section35,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.5,
        opacity: 0,
        duration: animationTime,
      });

      const section41 = document.querySelector('#sec41');
      gsap.from(section41, {
        scrollTrigger: {
          trigger: section41,
          start: 'center bottom',
        },
        y: 20,
        delay: .5,
        opacity: 0,
        duration: animationTime,
      });

      const section42 = document.querySelector('#sec42');
      gsap.from(section42, {
        scrollTrigger: {
          trigger: section42,
          start: 'center bottom',
        },
        y: 20,
        delay: .75,
        opacity: 0,
        duration: animationTime,
      });

      const section43 = document.querySelector('#sec43');
      gsap.from(section43, {
        scrollTrigger: {
          trigger: section43,
          start: 'center bottom',
        },
        y: 20,
        delay: 1,
        opacity: 0,
        duration: animationTime,
      });

      const section44 = document.querySelector('#sec44');
      gsap.from(section44, {
        scrollTrigger: {
          trigger: section44,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.25,
        opacity: 0,
        duration: animationTime,
      });

      const section45 = document.querySelector('#sec45');
      gsap.from(section45, {
        scrollTrigger: {
          trigger: section45,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.5,
        opacity: 0,
        duration: animationTime,
      });

      const section46 = document.querySelector('#sec46');
      gsap.from(section46, {
        scrollTrigger: {
          trigger: section46,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.75,
        opacity: 0,
        duration: animationTime,
      });

      const section51 = document.querySelector('#sec51');
      gsap.from(section51, {
        scrollTrigger: {
          trigger: section51,
          start: 'center bottom',
        },
        y: 20,
        delay: .5,
        opacity: 0,
        duration: animationTime,
      });

      const section52 = document.querySelector('#sec52');
      gsap.from(section52, {
        scrollTrigger: {
          trigger: section52,
          start: 'center bottom',
        },
        y: 20,
        delay: 1,
        opacity: 0,
        duration: animationTime,
      });

      const section53 = document.querySelector('#sec53');
      gsap.from(section53, {
        scrollTrigger: {
          trigger: section53,
          start: 'center bottom',
        },
        y: 20,
        delay: 1.5,
        opacity: 0,
        duration: animationTime,
      });

      const workflow = document.querySelector('#workflow');
      gsap.from(workflow, {
        scrollTrigger: {
          trigger: workflow,
          start: 'center bottom',
        },
        y: 20,
        opacity: 0,
        duration: animationTime,
      });

      const contato = document.querySelector('#contato');
      gsap.from(contato, {
        scrollTrigger: {
          trigger: contato,
          start: 'center bottom',
        },
        y: 20,
        delay: 0,
        opacity: 0,
        duration: animationTime,
      }); 
    }
  }
});