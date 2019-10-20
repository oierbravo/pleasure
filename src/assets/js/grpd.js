(function($) {
  $(document).ready(function() {
          $(document).euCookieLawPopup().init({
              cookiePolicyUrl : 'http://www.biko2.com/',
              popupPosition : 'bottomright',
              colorStyle : 'default',
              compactStyle : false,
              popupTitle : '¿¡Galletita!?',
              popupText : 'Utilizamos cookies para tener estadisticas sobre las visitas.',
              buttonContinueTitle : 'Acepto',
              buttonLearnmoreTitle : 'Más información',
              buttonLearnmoreOpenInNewWindow : true,
              agreementExpiresInDays : 30,
              autoAcceptCookiePolicy : false,
              htmlMarkup : $('.eupopup-container')
            });
        });
    
}(jQuery));