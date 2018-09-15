import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery'
import { observeStickyEvents, unobserveStickyEvents, StickyEvent } from 'sticky-events'
import menu from './template/menu.html'

$(document).bind('DOMContentLoaded', main)

function main() {
    let subtitle = $('#menu').html()
    $('#menu').html(menu)
    $('#menu-subtitle').html(subtitle)
    $('#menu').addClass('row affix')
    //$('#menu').addClass('row sticky-events affix')
}
