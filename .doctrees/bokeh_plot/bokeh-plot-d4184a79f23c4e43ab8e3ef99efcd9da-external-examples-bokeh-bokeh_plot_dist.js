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
    
      
      
    
      var element = document.getElementById("efbf960e-87e6-4927-89fe-4d4f11682acb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'efbf960e-87e6-4927-89fe-4d4f11682acb' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;bb91dece-5b08-40de-ba06-9c66f284ee3c&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;ObTIdr6fij97FK5H4Xq0P6jGSzeJQcA/JQaBlUOLzD/y0k1iEFjJPy/dJAaBlcM/SgwCK4cWuT+JQWDl0CKrPxkEVg4tsp0//Knx0k1ikD956SYxCKx8P/p+arx0k2g/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59482&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59481&quot;}},&quot;id&quot;:&quot;59469&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59421&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59455&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59428&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59502&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59417&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59439&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59425&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59407&quot;},{&quot;id&quot;:&quot;59438&quot;}]},&quot;id&quot;:&quot;59490&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59430&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59441&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59455&quot;},{&quot;id&quot;:&quot;59456&quot;},{&quot;id&quot;:&quot;59457&quot;},{&quot;id&quot;:&quot;59458&quot;},{&quot;id&quot;:&quot;59459&quot;},{&quot;id&quot;:&quot;59460&quot;}]},&quot;id&quot;:&quot;59462&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59443&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59477&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59500&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59451&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59454&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59410&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59493&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59508&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59507&quot;}},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59485&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59486&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59487&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59489&quot;}},&quot;id&quot;:&quot;59488&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59460&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59502&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59452&quot;}},&quot;id&quot;:&quot;59451&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59500&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59448&quot;}},&quot;id&quot;:&quot;59447&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59472&quot;}]},&quot;id&quot;:&quot;59484&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59508&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59482&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59479&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59445&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59447&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59450&quot;},{&quot;id&quot;:&quot;59454&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59451&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59488&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59493&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59462&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59439&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59443&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59441&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59445&quot;}},&quot;id&quot;:&quot;59438&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59416&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59419&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59469&quot;}},&quot;id&quot;:&quot;59473&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59452&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59430&quot;}},&quot;id&quot;:&quot;59426&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59484&quot;}]},&quot;id&quot;:&quot;59483&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59429&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59412&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59447&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59450&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59469&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59470&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59471&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59473&quot;}},&quot;id&quot;:&quot;59472&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59481&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59448&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59414&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59424&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59408&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59471&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59485&quot;}},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59461&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59479&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59421&quot;}},&quot;id&quot;:&quot;59420&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59420&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59423&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59461&quot;}},&quot;id&quot;:&quot;59457&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59474&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59427&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59456&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59470&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59486&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59507&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59424&quot;},{&quot;id&quot;:&quot;59425&quot;},{&quot;id&quot;:&quot;59426&quot;},{&quot;id&quot;:&quot;59427&quot;},{&quot;id&quot;:&quot;59428&quot;},{&quot;id&quot;:&quot;59429&quot;}]},&quot;id&quot;:&quot;59431&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59477&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59417&quot;}},&quot;id&quot;:&quot;59416&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59459&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59416&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59419&quot;},{&quot;id&quot;:&quot;59423&quot;},{&quot;id&quot;:&quot;59483&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59420&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59472&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59474&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59431&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59408&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59412&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59410&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59414&quot;}},&quot;id&quot;:&quot;59407&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59458&quot;,&quot;type&quot;:&quot;SaveTool&quot;}],&quot;root_ids&quot;:[&quot;59490&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"bb91dece-5b08-40de-ba06-9c66f284ee3c","root_ids":["59490"],"roots":{"59490":"efbf960e-87e6-4927-89fe-4d4f11682acb"}}];
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