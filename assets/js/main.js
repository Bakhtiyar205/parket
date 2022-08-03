

$(document).ready(function(){
    // Tabs
    let saleComponent = $(".sale-component");
    let thirdCards = $(".third-cards");
    $(saleComponent).click(function(e){
        e.preventDefault();
        for (let i = 0; i < saleComponent.length; i++) {
            $(saleComponent[i]).removeClass("sale-component-active");
            $(thirdCards[i]).addClass("d-none");
            $(thirdCards[i]).removeClass("d-block");
        }
        
        $(this).addClass("sale-component-active");
        let index = saleComponent.index($(this));
        $(thirdCards[index]).removeClass("d-none");
    })
  
  });