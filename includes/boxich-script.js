
var _chkBoxich = function(data){
    if(typeof(Boxich) == 'undefined') setTimeout(function(){ _chkBoxich(data); }, 1000);
    else Boxich.getQuestion(data);
};

var _boxichWP = function(_kw, _kwt, _category, _color, _target, apiKey){

    function getBoxich(_kw, _kwt, _category, _color, _target, apiKey){
        var data = {target: document.querySelector('.' +_target), kwt:document.querySelector('.' +_target).parentNode};
        if(_kw != null && _kw != 'null'){
            _kw = _kw.split(',');
            for(var _k in _kw) _kw[_k] = _kw[_k].trim();
            data.keywords = _kw;
        }
        if(_category != null && _category != 'null') data.category = parseInt(_category);
        if(_color != null && _color != 'null') data.color = _color;
        _chkBoxich(data);
    }

    if(document.querySelector('#boxich_api') == null){
        var s = document.createElement('script');
        s.apiKey = apiKey;
        s.id = 'boxich_api';
        s.onload = function(){ getBoxich(_kw, _kwt, _category, _color, _target, apiKey); };
        s.src = 'http://boxich.a2hosted.com/boxich/boxApi';
        document.querySelector('head').appendChild(s);
    }
    else getBoxich(_kw, _kwt, _category, _color, _target, apiKey);


};

