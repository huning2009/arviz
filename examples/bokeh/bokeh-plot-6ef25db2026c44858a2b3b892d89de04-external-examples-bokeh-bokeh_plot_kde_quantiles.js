(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f7402e8f-6129-454b-a9dc-fa3b79b26048");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7402e8f-6129-454b-a9dc-fa3b79b26048' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js": "YobFyzPeVUsFQydHkJGsJL1kyfHnWxOlPc3EwaV22TmBaeGoXHLWx5aRRVPS9xlE", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js": "NuAg9+TcTQQqvQCTtkCneRrpkTiMhhfiq0KHiBzx8ECiKiLWXHN6i6ia3q7b3eHu", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js": "uMVqQc8JqHitD67bXTn9a06Mrk3EiHRaZ18EJENQenAKJ/KL71SakdXYomZQpGRr", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js": "u+eGuEXC8aw0VSCm2mH+b/tQEAitUOYiR1H6SuIVEdUmXsf4vN8m/SmXpmjb7U/X"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;1d3663bb-a41f-45eb-bbe2-f002d805993d&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61897&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61869&quot;}},&quot;id&quot;:&quot;61873&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61876&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61850&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;CmzdRAZUtj/i+5/R1Fe3P7uLYl6jW7g/kxsl63FfuT9rq+d3QGO6P0M7qgQPZ7s/HMtskd1qvD/0Wi8erG69P8zq8ap6cr4/pXq0N0l2vz8/hTviCz3APyvNnCjzvsA/FxX+btpAwT8DXV+1wcLBP/CkwPuoRMI/3OwhQpDGwj/INIOId0jDP7R85M5eysM/oMRFFUZMxD+MDKdbLc7EP3lUCKIUUMU/ZZxp6PvRxT9R5Mou41PGPz0sLHXK1cY/PSwsdcrVxj89LCx1ytXGP1Hkyi7jU8Y/ZZxp6PvRxT95VAiiFFDFP4wMp1stzsQ/oMRFFUZMxD+0fOTOXsrDP8g0g4h3SMM/3OwhQpDGwj/wpMD7qETCPwNdX7XBwsE/FxX+btpAwT8rzZwo877APz+FO+ILPcA/pXq0N0l2vz/M6vGqenK+P/RaLx6sbr0/HMtskd1qvD9DO6oED2e7P2ur53dAY7o/kxsl63FfuT+7i2Jeo1u4P+L7n9HUV7c/CmzdRAZUtj8KbN1EBlS2Pw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[50]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvm1NRCQL/z++bU1EJAv/P45ajGMyy/8/CSYU8JJAAEB3QJ1dfJsAQH0ZoZF68gBAdWDH0L1HAUC1DIiohZwBQFfCJkxx8QFA0UjBTnVHAkBZCs6XiZ4CQNjLSanC+gJA6FWh9bZdA0AumHSDssUDQMMMasOUNwRAPVM4J7izBEDxx3RKjj0FQBdHlSrl0gVARmv8+xV3BkCPBlECtikHQIKXDb8q7QdA/0Y9dIrBCECV8OAB/6oJQL5M6bl5oApAWi/E7B+lC0AAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[50]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61897&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61896&quot;}},&quot;id&quot;:&quot;61874&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61845&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61887&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61838&quot;}},&quot;id&quot;:&quot;61837&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61851&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61848&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61875&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61854&quot;}},&quot;id&quot;:&quot;61849&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61829&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[308]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[308]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61899&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61898&quot;}},&quot;id&quot;:&quot;61879&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61842&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61831&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61881&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61898&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61864&quot;}},&quot;id&quot;:&quot;61868&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61874&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61875&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61876&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61878&quot;}},&quot;id&quot;:&quot;61877&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61855&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61845&quot;},{&quot;id&quot;:&quot;61846&quot;},{&quot;id&quot;:&quot;61847&quot;},{&quot;id&quot;:&quot;61848&quot;},{&quot;id&quot;:&quot;61849&quot;},{&quot;id&quot;:&quot;61850&quot;},{&quot;id&quot;:&quot;61851&quot;},{&quot;id&quot;:&quot;61852&quot;}]},&quot;id&quot;:&quot;61902&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61846&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61874&quot;}},&quot;id&quot;:&quot;61878&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61892&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61841&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61844&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61854&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61880&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;61902&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;61903&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61853&quot;}},&quot;id&quot;:&quot;61847&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61893&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61884&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61852&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61837&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61840&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61879&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61880&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61881&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61883&quot;}},&quot;id&quot;:&quot;61882&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61879&quot;}},&quot;id&quot;:&quot;61883&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61889&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61842&quot;}},&quot;id&quot;:&quot;61841&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61871&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61887&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61837&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61840&quot;},{&quot;id&quot;:&quot;61844&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61841&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61867&quot;},{&quot;id&quot;:&quot;61872&quot;},{&quot;id&quot;:&quot;61877&quot;},{&quot;id&quot;:&quot;61882&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61884&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61855&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61829&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61833&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61831&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61835&quot;}},&quot;id&quot;:&quot;61828&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61894&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61864&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61865&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61866&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61868&quot;}},&quot;id&quot;:&quot;61867&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61895&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61833&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61838&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61889&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61828&quot;},0,0]]},&quot;id&quot;:&quot;61901&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61899&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61845&quot;},{&quot;id&quot;:&quot;61846&quot;},{&quot;id&quot;:&quot;61847&quot;},{&quot;id&quot;:&quot;61848&quot;},{&quot;id&quot;:&quot;61849&quot;},{&quot;id&quot;:&quot;61850&quot;},{&quot;id&quot;:&quot;61851&quot;},{&quot;id&quot;:&quot;61852&quot;}]},&quot;id&quot;:&quot;61855&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61835&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61865&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;61903&quot;},{&quot;id&quot;:&quot;61901&quot;}]},&quot;id&quot;:&quot;61904&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;p8DcQwmL0T619HmOS0FwPx15US0aP4A/4Pdlk45diD9RO718AT6QP7J6x687TZQ/FLrR4nVcmD91+dsVsGucP3X52xWwa5w/dfnbFbBrnD8UutHidVyYP7J6x687TZQ/UTu9fAE+kD/g92WTjl2IPx15US0aP4A/tfR5jktBcD+nwNxDCYvRPqfA3EMJi9E+&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[18]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5AWUJA0hlAfkBZQkDSGUAkeh7iOrkaQEdLkw3eihtAwE2LpHVCHEAuGPOUn9gcQL5HSxM3SB1AjqQnAlaMHUBZaoZIRaMdQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[18]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61893&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61892&quot;}},&quot;id&quot;:&quot;61864&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61866&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61896&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61869&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61870&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61871&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61873&quot;}},&quot;id&quot;:&quot;61872&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;axxzJHU9oD8cPPg9EkWiP8xbfVevTKQ/fXsCcUxUpj8um4eK6VuoP966DKSGY6o/j9qRvSNrrD8/+hbXwHKuP/gMTvguPbA/0JwQhf1AsT+pLNMRzESyP4G8lZ6aSLM/WUxYK2lMtD8y3Bq4N1C1PzLcGrg3ULU/MtwauDdQtT9ZTFgraUy0P4G8lZ6aSLM/qSzTEcxEsj/QnBCF/UCxP/gMTvguPbA/P/oW18Byrj+P2pG9I2usP966DKSGY6o/LpuHiulbqD99ewJxTFSmP8xbfVevTKQ/HDz4PRJFoj9rHHMkdT2gP2sccyR1PaA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[30]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWWi9+puQxAFZaL36m5DECQl16COt0NQA/x0vXUEg9ApZsm5Y8uEEDzgO3CJN0QQEEQqa9clxFAiaLZjgxdEkBcVR7kIDATQFDWw5jBDhRA7DSQ01v3FEALr757t+oVQJJl4e5V5RZAknJKuWziF0DbXhku5t0YQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[30]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61895&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61894&quot;}},&quot;id&quot;:&quot;61869&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61870&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61853&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;}],&quot;root_ids&quot;:[&quot;61904&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"1d3663bb-a41f-45eb-bbe2-f002d805993d","root_ids":["61904"],"roots":{"61904":"f7402e8f-6129-454b-a9dc-fa3b79b26048"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();