import './sass/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

import menu from './template/menu.html'

$(document).bind('DOMContentLoaded', set_template)

function set_template() {
    let subtitle = $('#menu').html()
    $('#menu').html(menu)
    $('#menu-subtitle').html(subtitle)
    $('#menu').addClass('row affix')
}