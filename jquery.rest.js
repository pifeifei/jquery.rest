(function(global){
  if ( typeof global.jQuery === "undefined") {
    throw new Error( "jQuery requires" );
  }

  jQuery = global.jQuery;
  jQuery.rest = jQuery.rest || {};
  jQuery.each( [ "get", "post", "put", "delete", "patch" ], function( _i, method ) {
    jQuery.rest[ method ] = function( url, data, callback, type ) {

      // Shift arguments if data argument was omitted
      if ( jQuery.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      // The url can be an options object (which then must have .url)
      return jQuery.ajax( jQuery.extend( {
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject( url ) && url ) );
    };
  });
})(typeof window !== "undefined" ? window : this);
