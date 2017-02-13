(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function() {
    var _0x9919x1, _0x9919x2, _0x9919x3, _0x9919x4, _0x9919x5, _0x9919x6, _0x9919x7, _0x9919x8 = true;
    _0x9919x9();
    _0x9919xc();

    function _0x9919x9() {
        _0x9919x1 = window['innerWidth'];
        _0x9919x2 = window['innerHeight'];
        _0x9919x7 = {
            x: 0,
            y: _0x9919x2
        };
        _0x9919x3 = document['getElementById']('top');
        _0x9919x3['style']['height'] = _0x9919x2 + 'px';
        _0x9919x4 = document['getElementById']('low-poly');
        _0x9919x4['width'] = _0x9919x1;
        _0x9919x4['height'] = _0x9919x2;
        _0x9919x5 = _0x9919x4['getContext']('2d');
        _0x9919x6 = [];
        for (var _0x9919xa = 0; _0x9919xa < _0x9919x1 * 0.5; _0x9919xa++) {
            var _0x9919xb = new _0x9919x11();
            _0x9919x6['push'](_0x9919xb)
        };
        _0x9919xf()
    }

    function _0x9919xc() {
        window['addEventListener']('scroll', _0x9919xd);
        window['addEventListener']('resize', _0x9919xe)
    }

    function _0x9919xd() {
        if (document['body']['scrollTop'] > _0x9919x2) {
            _0x9919x8 = false
        } else {
            _0x9919x8 = true
        }
    }

    function _0x9919xe() {
        _0x9919x1 = window['innerWidth'];
        _0x9919x2 = window['innerHeight'];
        _0x9919x3['style']['height'] = _0x9919x2 + 'px';
        _0x9919x4['width'] = _0x9919x1;
        _0x9919x4['height'] = _0x9919x2
    }

    function _0x9919xf() {
        if (_0x9919x8) {
            _0x9919x5['clearRect'](0, 0, _0x9919x1, _0x9919x2);
            for (var _0x9919x10 in _0x9919x6) {
                _0x9919x6[_0x9919x10]['draw']()
            }
        };
        requestAnimationFrame(_0x9919xf)
    }

    function _0x9919x11() {
        var _0x9919x12 = this;
        (function() {
            _0x9919x12['pos'] = {};
            _0x9919x13();
            console['log'](_0x9919x12)
        })();

        function _0x9919x13() {
            _0x9919x12['pos']['x'] = Math['random']() * _0x9919x1;
            _0x9919x12['pos']['y'] = _0x9919x2 + Math['random']() * 100;
            _0x9919x12['alpha'] = 0.1 + Math['random']() * 0.3;
            _0x9919x12['scale'] = 0.1 + Math['random']() * 0.3;
            _0x9919x12['velocity'] = Math['random']()
        }
        this['draw'] = function() {
            if (_0x9919x12['alpha'] <= 0) {
                _0x9919x13()
            };
            _0x9919x12['pos']['y'] -= _0x9919x12['velocity'];
            _0x9919x12['alpha'] -= 0.0005;
            _0x9919x5['beginPath']();
            _0x9919x5['arc'](_0x9919x12['pos']['x'], _0x9919x12['pos']['y'], _0x9919x12['scale'] * 10, 0, 2 * Math['PI'], false);
            _0x9919x5['fillStyle'] = 'rgba(255,255,255,' + _0x9919x12['alpha'] + ')';
            _0x9919x5['fill']()
        }
    }
})()

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent'])) {
    $('#video')['css']({
        "\x64\x69\x73\x70\x6C\x61\x79": 'none'
    })
};
$(window)['load'](function() {
    $('.loader-icon')['delay'](100)['fadeOut']();
    $('#page-loader')['delay'](300)['fadeOut']('slow');

});
(function(_0x5944x1) {
    'use strict';
    window['sr'] = new scrollReveal({
        reset: true,
        move: '10px',
        mobile: false
    })
})();

$(function() {
    var _0x5944x2 = 'Jan 01, 2022 00:01:01';
    $('.countdown')['countdown']({
        date: _0x5944x2,
        render: function(_0x5944x3) {
            $(this['el'])['html']('<div>' + this['leadingZeros'](_0x5944x3['days'], 3) + ' <span>days</span></div><div class=\'border_clock\'>' + this['leadingZeros'](_0x5944x3['hours'], 2) + ' <span>hours</span></div><div class=\'border_clock\'>' + this['leadingZeros'](_0x5944x3['min'], 2) + ' <span>minutes</span></div><div class=\'border_clock\'>' + this['leadingZeros'](_0x5944x3['sec'], 2) + ' <span>seconds</span></div>')
        }
    })
});
$(function() {
    $('#submit')['click'](function() {
        $('#ajax-contact-form')['validate']({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                msg: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: '<i class=\'fa fa-exclamation-triangle name\'></i>'
                },
                email: {
                    required: '<i class=\'fa fa-exclamation-triangle email\'></i>',
                    email: '<i class=\'fa fa-exclamation-triangle email\'></i>'
                },
                msg: {
                    required: '<i class=\'fa fa-exclamation-triangle message\'></i>'
                }
            },
            submitHandler: function(_0x5944x4) {
                var _0x5944x5 = $('input#name')['val']();
                var _0x5944x6 = $('input#email')['val']();
                var _0x5944x7 = $('textarea#msg')['val']();
                var _0x5944x8 = '&name=' + _0x5944x5 + '&email=' + _0x5944x6 + '&msg=' + _0x5944x7;
                $['ajax']({
                    type: 'POST',
                    url: 'php/contact.php',
                    data: _0x5944x8,
                    success: function(_0x5944x3) {
                        if (_0x5944x3 === 'OK') {
                            $('#ajax-contact-form')['find']('input[type=text], input[type=email], textarea')['val']('')
                        };
                        if (_0x5944x3 == 'OK') {
                            result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>'
                        } else {
                            result = _0x5944x3
                        };
                        $('#note')['html'](result)
                    }
                });
                return false
            }
        })
    })
});
$('#ajaxChimp')['ajaxChimp']({
    language: 'eng',
    url: 'http://stevedogs.us9.list-manage.com/subscribe/post?u=df0aa2ea10f32337b29b342d4&id=41ddc569b4'
});
$['ajaxChimp']['translations']['eng'] = {
    "\x73\x75\x62\x6D\x69\x74": 'Submitting...',
    0: '<i class="fa fa-check"></i> We will be in touch soon!',
    1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
    2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
};

var latitude = -37.8132,
    longitude = 144.963,
    map_zoom = 10;
var is_internetExplorer11 = navigator['userAgent']['toLowerCase']()['indexOf']('trident') > -1;
var marker_url = (is_internetExplorer11) ? 'images/icon-location.png' : 'images/icon-location.png';
var main_color = '#2d313f',
    saturation_value = -20,
    brightness_value = -10;
var style = [{
    elementType: 'labels',
    stylers: [{
        saturation: saturation_value
    }]
}, {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'road.local',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{
        visibility: 'off'
    }]
}, {
    featureType: 'transit',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'poi.government',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'poi.sport_complex',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'poi.attraction',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'poi.business',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'transit',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'transit.station',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'landscape',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
        hue: main_color
    }, {
        visibility: 'on'
    }, {
        lightness: brightness_value
    }, {
        saturation: saturation_value
    }]
}];
var map_options = {
    center: new google['maps'].LatLng(latitude, longitude),
    zoom: map_zoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google['maps']['MapTypeId']['ROADMAP'],
    scrollwheel: false,
    styles: style
};
var map = new google['maps'].Map(document['getElementById']('google-container'), map_options);
var marker = new google['maps'].Marker({
    position: new google['maps'].LatLng(latitude, longitude),
    map: map,
    title: 'Melbourne, Australia',
    visible: true,
    icon: marker_url
});
google['maps']['event']['addDomListener'](window, 'resize', function() {
    var _0x5944x17 = map['getCenter']();
    google['maps']['event']['trigger'](map, 'resize');
    map['setCenter'](_0x5944x17)
});

function CustomZoomControl(_0x5944x19, map) {
    var _0x5944x1a = document['getElementById']('zoom-in'),
        _0x5944x1b = document['getElementById']('zoom-out');
    _0x5944x19['appendChild'](_0x5944x1a);
    _0x5944x19['appendChild'](_0x5944x1b);
    google['maps']['event']['addDomListener'](_0x5944x1a, 'click', function() {
        map['setZoom'](map['getZoom']() + 1)
    });
    google['maps']['event']['addDomListener'](_0x5944x1b, 'click', function() {
        map['setZoom'](map['getZoom']() - 1)
    })
}
var zoomControlDiv = document['createElement']('div');
var zoomControl = new CustomZoomControl(zoomControlDiv, map);
map['controls'][google['maps']['ControlPosition']['LEFT_TOP']]['push'](zoomControlDiv)