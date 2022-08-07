

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

    // Nav Catalog Hover
    let catalogNav = $('#catalog-nav');
    let catalogCategories = $('#catalog-categories');
    let primaryUlNav = $('#primary-ul-nav');
    let catalogCategoriesClassList = document.getElementById('catalog-categories').classList;

    // Catalog Hover
    $(catalogNav).hover(function(e){
        catalogCategories.addClass("catalog-hover");
    })

    // Primary Ul Nav Mouse Leave
    $(primaryUlNav).mouseleave(function(e){
        debugger
        if(catalogCategoriesClassList.contains("catalog-hover")){
            catalogCategories.removeClass("catalog-hover");
        }
    })

    
    

  
  });