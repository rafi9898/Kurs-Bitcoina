$(function() {
   
    let ValueResult = $('#bitValue');
    let convert = $('#convert').val();
    let aconvert = $('.aconvert');
    let adecrease = $('.adecrease');
    
    $('#convert').on('change', otherCurrency);
    
    
    
    fetch('https://api.cryptonator.com/api/ticker/btc-pln')
    .then((res) => res.json())
    .then((data) => {
        let value = Math.round(data.ticker.price * 100) / 100;
        let decrease = Math.round(data.ticker.change * 100) / 100;
        ValueResult.html(value + ' ' + convert);
        aconvert.text(convert);
        
        if(decrease >= 0){
          adecrease.text('+' + decrease + ' ' + convert); 
        }
        
        else {
          adecrease.text(decrease + ' ' + convert);  
        }
        
    })
    
    .catch((err) => console.log(err));
    
    
    
    function otherCurrency() {
        let currency = $('#convert').val();
        
        fetch('https://api.cryptonator.com/api/ticker/btc-'+currency)
        .then((res) => res.json())
        .then((data) => {
        let value = Math.round(data.ticker.price * 100) / 100;
        let decrease = Math.round(data.ticker.change * 100) / 100;
        ValueResult.html(value + ' ' + currency);
        aconvert.text(currency);
        
        if(decrease >= 0){
          adecrease.text('+' + decrease + ' ' + currency); 
        }
        
        else {
          adecrease.text(decrease + ' ' + currency);  
        }
        
    })
    
    .catch((err) => console.log(err));
        
    }
});