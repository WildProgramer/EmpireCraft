export class TemplateController{


  changingNavbarWithSize(ngZone, width){



    window.onresize = (e) =>
    {

      ngZone.run(() => {

        width = window.innerWidth;


      });
    };

    if(width <= 992){

      console.log("small");
      return false;

    }else{
      console.log("big one");
      return true;



    }

  }



}
