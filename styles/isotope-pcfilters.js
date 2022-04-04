// external js: isotope.pkgd.js

// init Isotope
var $pcgrid = $('.pcgrid').isotope({
  itemSelector: '.photocard',
  layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  astropc: function() {
    var name = $(this).find('.group').text();
    return name.match( /astro$/ );
  },
  pmh: function() {
    var name = $(this).find('.member').text();
    return name.match( /rocky$/ );
  },
  kmj: function() {
    var name = $(this).find('.member').text();
    return name.match( /mj$/ );
  },
  pjw: function() {
    var name = $(this).find('.member').text();
    return name.match( /jinjin$/ );
  },
  ldm: function() {
    var name = $(this).find('.member').text();
    return name.match( /eunwoo$/ );
  },
  ysh: function() {
    var name = $(this).find('.member').text();
    return name.match( /sanha$/ );
  },
  mbpc: function() {
    var name = $(this).find('.member').text();
    return name.match( /bin$/ );
  },
  inclusion: function() {
    var name = $(this).find('.type').text();
    return name.match( /inclusion$/ );
  },
  pob: function() {
    var name = $(this).find('.type').text();
    return name.match( /pob$/ );
  },
  etc: function() {
    var name = $(this).find('.type').text();
    return name.match( /etc$/ );
  },
billliepc: function() {
    var name = $(this).find('.group').text();
    return name.match( /billlie$/ );
  },
  ksy: function() {
    var name = $(this).find('.member').text();
    return name.match( /siyoon$/ );
  },
  msa: function() {
    var name = $(this).find('.member').text();
    return name.match( /sua$/ );
  },
  khr: function() {
    var name = $(this).find('.member').text();
    return name.match( /haram$/ );
  },
  fts: function() {
    var name = $(this).find('.member').text();
    return name.match( /tsuki$/ );
  },
  ksh: function() {
    var name = $(this).find('.member').text();
    return name.match( /suhyeon$/ );
  },
  sheon: function() {
    var name = $(this).find('.member').text();
    return name.match( /sheon$/ );
  },
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $pcgrid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
