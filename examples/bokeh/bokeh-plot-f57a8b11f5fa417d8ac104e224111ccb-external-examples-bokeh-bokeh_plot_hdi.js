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
    
      
      
    
      var element = document.getElementById("d868df00-42ed-4448-803a-cf5ed690bc3b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd868df00-42ed-4448-803a-cf5ed690bc3b' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;fc4fb93d-142c-486b-921b-5f666d696a0e&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60924&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60963&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60931&quot;}},&quot;id&quot;:&quot;60925&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60955&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60916&quot;}},&quot;id&quot;:&quot;60915&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60957&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60920&quot;}},&quot;id&quot;:&quot;60919&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60916&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60932&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60913&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60915&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60918&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60923&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60911&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;1Nf01b2TAcBmc8r4CH0BwIqqdT6fTwHAr+EghDUiAcDTGMzJy/QAwPhPdw9ixwDAHYciVfiZAMBBvs2ajmwAwGb1eOAkPwDAiiwkJrsRAMBex57Xosj/v6c19WLPbf+/8KNL7vsS/786EqJ5KLj+v4OA+ARVXf6/zO5OkIEC/r8VXaUbrqf9v17L+6baTP2/qDlSMgfy/L/xp6i9M5f8vzoW/0hgPPy/g4RV1Izh+7/M8qtfuYb7vxZhAuvlK/u/X89YdhLR+r+oPa8BP3b6v/KrBY1rG/q/OhpcGJjA+b+EiLKjxGX5v832CC/xCvm/FmVfuh2w+L9g07VFSlX4v6hBDNF2+ve/8q9iXKOf9787Hrnnz0T3v4SMD3P86fa/zvpl/iiP9r8WabyJVTT2v2DXEhWC2fW/qUVpoK5+9b/ys78r2yP1vzwiFrcHyfS/hJBsQjRu9L/O/sLNYBP0vxdtGVmNuPO/YNtv5Lld87+pScZv5gLzv/O3HPsSqPK/PCZzhj9N8r+FlMkRbPLxv84CIJ2Yl/G/F3F2KMU88b9h38yz8eHwv6pNIz8eh/C/87t5ykos8L94VKCr7qLvvwoxTcJH7e6/ng362KA37r8w6qbv+YHtv8LGUwZTzOy/VKMAHawW7L/mf60zBWHrv3pcWkpeq+q/DDkHYbf16b+eFbR3EEDpvzDyYI5piui/ws4NpcLU579Wq7q7Gx/nv+iHZ9J0aea/emQU6c2z5b8MQcH/Jv7kv54dbhaASOS/MvoaLdmS47/E1sdDMt3iv1azdFqLJ+K/6I8hceRx4b96bM6HPbzgvw5Je56WBuC/QEtQat+h3r9kBKqXkTbdv4i9A8VDy9u/rHZd8vVf2r/UL7cfqPTYv/joEE1aide/HKJqegwe1r9AW8SnvrLUv2QUHtVwR9O/jM13AiPc0b+whtEv1XDQv6h/VroOC86/8PEJFXM0y79AZL1v113Iv4DWcMo7h8W/0EgkJaCwwr9Adq//CLS/v8BaFrXRBrq/YD99appZtL/AR8g/xlitvwARlqpX/qG/AGmPVaSPir8Aczn/FdqCP4CTABX0EKA/gMoyqmJrqz+ggLKf6GKzPwCcS+ofELk/gLfkNFe9vj9w6b4/RzXCPzB3C+XiC8U/4ARYin7ixz+QkqQvGrnKP1Ag8dS1j80/ANcevSgz0D/gHcWPdp7RP7hka2LECdM/kKsRNRJ11D9w8rcHYODVP0g5XtqtS9c/KIAErfu22D8Ax6p/SSLaP9gNUVKXjds/uFT3JOX43D+Qm533MmTeP3DiQ8qAz98/pBR1Tmed4D8QOMg3DlPhP4BbGyG1COI/7H5uCly+4j9cosHzAnTjP8jFFN2pKeQ/NOlnxlDf5D+kDLuv95TlPxAwDpmeSuY/gFNhgkUA5z/sdrRr7LXnP1iaB1WTa+g/yL1aPjoh6T804a0n4dbpP6QEARGIjOo/EChU+i5C6z98S6fj1ffrP+xu+sx8rew/WJJNtiNj7T/ItaCfyhjuPzTZ84hxzu4/oPxGchiE7z8IEM2t3xzwP76hdiKzd/A/djMgl4bS8D8sxckLWi3xP+JWc4AtiPE/mugc9QDj8T9QesZp1D3yPwgMcN6nmPI/vp0ZU3vz8j90L8PHTk7zPyzBbDwiqfM/4lIWsfUD9D+a5L8lyV70P1B2aZqcufQ/BggTD3AU9T++mbyDQ2/1P3QrZvgWyvU/LL0Pbeok9j/iTrnhvX/2P5jgYlaR2vY/UHIMy2Q19z8GBLY/OJD3P76VX7QL6/c/dCcJKd9F+D8qubKdsqD4P+JKXBKG+/g/mNwFh1lW+T9Qbq/7LLH5PwYAWXAADPo/vJEC5dNm+j90I6xZp8H6Pyq1Vc56HPs/4kb/Qk53+z+Y2Ki3IdL7P05qUiz1LPw/Bvz7oMiH/D++jaUVnOL8P3IfT4pvPf0/KrH4/kKY/T/iQqJzFvP9P5bUS+jpTf4/Tmb1XL2o/j8G+J7RkAP/P7qJSEZkXv8/chvyuje5/z+V1s2XBQoAQHGfIlJvNwBAS2h3DNlkAEAnMczGQpIAQAP6IIGsvwBA3cJ1OxbtAEC5i8r1fxoBQJVUH7DpRwFAbx10alN1AUBK5sgkvaIBQErmyCS9ogFAbx10alN1AUCVVB+w6UcBQLmLyvV/GgFA3cJ1OxbtAEAD+iCBrL8AQCcxzMZCkgBAS2h3DNlkAEBxnyJSbzcAQJXWzZcFCgBAchvyuje5/z+6iUhGZF7/Pwb4ntGQA/8/Tmb1XL2o/j+W1Evo6U3+P+JConMW8/0/KrH4/kKY/T9yH0+Kbz39P76NpRWc4vw/Bvz7oMiH/D9OalIs9Sz8P5jYqLch0vs/4kb/Qk53+z8qtVXOehz7P3QjrFmnwfo/vJEC5dNm+j8GAFlwAAz6P1Bur/sssfk/mNwFh1lW+T/iSlwShvv4Pyq5sp2yoPg/dCcJKd9F+D++lV+0C+v3PwYEtj84kPc/UHIMy2Q19z+Y4GJWkdr2P+JOueG9f/Y/LL0Pbeok9j90K2b4Fsr1P76ZvINDb/U/BggTD3AU9T9QdmmanLn0P5rkvyXJXvQ/4lIWsfUD9D8swWw8IqnzP3Qvw8dOTvM/vp0ZU3vz8j8IDHDep5jyP1B6xmnUPfI/mugc9QDj8T/iVnOALYjxPyzFyQtaLfE/djMgl4bS8D++oXYis3fwPwgQza3fHPA/oPxGchiE7z802fOIcc7uP8i1oJ/KGO4/WJJNtiNj7T/sbvrMfK3sP3xLp+PV9+s/EChU+i5C6z+kBAERiIzqPzThrSfh1uk/yL1aPjoh6T9YmgdVk2voP+x2tGvstec/gFNhgkUA5z8QMA6ZnkrmP6QMu6/3lOU/NOlnxlDf5D/IxRTdqSnkP1yiwfMCdOM/7H5uCly+4j+AWxshtQjiPxA4yDcOU+E/pBR1Tmed4D9w4kPKgM/fP5CbnfcyZN4/uFT3JOX43D/YDVFSl43bPwDHqn9JIto/KIAErfu22D9IOV7arUvXP3Dytwdg4NU/kKsRNRJ11D+4ZGtixAnTP+AdxY92ntE/ANcevSgz0D9QIPHUtY/NP5CSpC8auco/4ARYin7ixz8wdwvl4gvFP3Dpvj9HNcI/gLfkNFe9vj8AnEvqHxC5P6CAsp/oYrM/gMoyqmJrqz+AkwAV9BCgPwBzOf8V2oI/AGmPVaSPir8AEZaqV/6hv8BHyD/GWK2/YD99appZtL/AWha10Qa6v0B2r/8ItL+/0EgkJaCwwr+A1nDKO4fFv0BkvW/XXci/8PEJFXM0y7+of1a6DgvOv7CG0S/VcNC/jM13AiPc0b9kFB7VcEfTv0BbxKe+stS/HKJqegwe1r/46BBNWonXv9Qvtx+o9Ni/rHZd8vVf2r+IvQPFQ8vbv2QEqpeRNt2/QEtQat+h3r8OSXuelgbgv3pszoc9vOC/6I8hceRx4b9Ws3Raiyfiv8TWx0My3eK/MvoaLdmS47+eHW4WgEjkvwxBwf8m/uS/emQU6c2z5b/oh2fSdGnmv1arursbH+e/ws4NpcLU578w8mCOaYrov54VtHcQQOm/DDkHYbf16b96XFpKXqvqv+Z/rTMFYeu/VKMAHawW7L/CxlMGU8zsvzDqpu/5ge2/ng362KA37r8KMU3CR+3uv3hUoKvuou+/87t5ykos8L+qTSM/Hofwv2HfzLPx4fC/F3F2KMU88b/OAiCdmJfxv4WUyRFs8vG/PCZzhj9N8r/ztxz7Eqjyv6lJxm/mAvO/YNtv5Lld878XbRlZjbjzv87+ws1gE/S/hJBsQjRu9L88Iha3B8n0v/KzvyvbI/W/qUVpoK5+9b9g1xIVgtn1vxZpvIlVNPa/zvpl/iiP9r+EjA9z/On2vzseuefPRPe/8q9iXKOf97+oQQzRdvr3v2DTtUVKVfi/FmVfuh2w+L/N9ggv8Qr5v4SIsqPEZfm/OhpcGJjA+b/yqwWNaxv6v6g9rwE/dvq/X89YdhLR+r8WYQLr5Sv7v8zyq1+5hvu/g4RV1Izh+786Fv9IYDz8v/GnqL0zl/y/qDlSMgfy/L9ey/um2kz9vxVdpRuup/2/zO5OkIEC/r+DgPgEVV3+vzoSonkouP6/8KNL7vsS/7+nNfViz23/v17HnteiyP+/iiwkJrsRAMBm9XjgJD8AwEG+zZqObADAHYciVfiZAMD4T3cPYscAwNMYzMnL9ADAr+EghDUiAcCKqnU+n08BwGZzyvgIfQHA1Nf01b2TAcA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60961&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60960&quot;}},&quot;id&quot;:&quot;60942&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60957&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60955&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60915&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60918&quot;},{&quot;id&quot;:&quot;60922&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60919&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60945&quot;},{&quot;id&quot;:&quot;60950&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60952&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60933&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60907&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60911&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60909&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60913&quot;}},&quot;id&quot;:&quot;60906&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60928&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60923&quot;},{&quot;id&quot;:&quot;60924&quot;},{&quot;id&quot;:&quot;60925&quot;},{&quot;id&quot;:&quot;60926&quot;},{&quot;id&quot;:&quot;60927&quot;},{&quot;id&quot;:&quot;60928&quot;},{&quot;id&quot;:&quot;60929&quot;},{&quot;id&quot;:&quot;60930&quot;}]},&quot;id&quot;:&quot;60933&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60909&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60930&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60931&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60952&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60929&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60932&quot;}},&quot;id&quot;:&quot;60927&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60962&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60942&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60943&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60944&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60946&quot;}},&quot;id&quot;:&quot;60945&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60907&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;QTwfs3KqAcDYgzIRgE4BwDGSWxicdv6/F86TnvKy/L8nPOts8lP8vyim7Zg1Mvy/30R7L9VU+r+SU9sVUdH4v8gbsKLdzfi/bdAKRUAj+L/mNZPGlCL2v+UqSyeDdPW/BPqN+mzG9L/OzRdDl9jzv3T9Ckk9afK/XSF0eQEg8r/joYLEmt3xv8YBQDJYx/G/dqqCmnSt8L8/IeCZlvzvv7GlW9UUb++/SxDifpKM7b8sLci6TVPsv7QHh/bydeu/ZTq1sr9m679Sa7FbKMjqv9gXTEZuwuq/tS5fII+i6r/k79lRxRznv9GQ5nCSFee/b1EGS+uK5b9ysB/LA/Hiv3ufCXkm3+G/KI32W+Cl4b+3KPumS7bgvxSBHPDy3t+/BYBrLL/d379MPILpc93fv9HJPkQNN9+/WH6Vafm51b8CcpudqWDTv/ehY8ZyGtO/uY7d2SJg0L+zXlOfthrPv7dCjEL6uc6/y5iSN+x7zL/kroDQNP3Jv5l2PxAkI8a/yC1gIP0jvL8Sc3qkJaC0vxopW9dKRKu/3vMR5qzZnb/6+KMIgwSdv9LSlRmldYq/9ju78T+3lT8nyUygB5qmP/vUlxqHRac/QNRtUTRvqz9rEUj9iASuPz/QdD9OprQ/y801pkYDtj/kO5gFygHEPxZvx1+WrcU/ZwVSSbqKyT8OZjsv+ybQPzjUzbJKZ9M/jYk16TKD2D+TnwfzOBzdP221Ufp6LN8/0ouPpiwK4D8goTzEr+zgP1rqA4dMO+E/R9EAeL/m4T+3eQYC3uLiP/BIDMlXSOM/1aCHnZNq4z+ysWwQZ+PjP8C/h7C99uQ/ybZKdoeS5j/1N42o9Z3mP/wwXQ69n+g/cHhDyi7B6D+o385tSsboP2HDh4Ojz+s/CZPJA6L87D9eKKC5Z5TtP+rgfBBISu4/2L/S66cY8D+xYjbRE0XwPyfnuyXzn/A/yUla4Ngu8T8cYYzO0mfxP/pTcInoLvI/3rkTzk0h8z+q0O8TtvX0P1vLesbvQvU/auulRB6g9z8hqdwnuz/6P2L/02CTCv4/SubIJL2iAUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;fofBmRqr7D9Q+Jrd/2LtP+g20vOxxPA/9Bi2sIam8T/sYYrJBtbxP+wsiTPl5vE/kF1CaJXV8j83VhJ1V5fzPxzypy4RmfM/ypd63V/u8z8NZbacte70P45qWmy+RfU//gK5gsmc9T8ZGXRetBP2P0aBelthy/Y/Uu9FQ//v9j8Or76dMhH3Px3/3+ZTHPc/xaq+skWp9z+w94dZ2gD4P5QWqco6JPg/7XtHYNuc+D+19E2RLOv4PxM+XkKDIvk/Z7FSE1Am+T8spRPp9U35Pwr6bG5kT/k/UzToN1xX+T8HhImrzjj6P8xbxmObOvo/pGs+LUWd+j/kEzgNv0P7PyGYvWE2iPs/tlwC6YeW+z/SNUEWbdL7P95v/KEhBPw//49yGkgE/D92uM+CUQT8P8YmeFceGfw/NVDN0sBI/T/AkUzM6pP9P8GLM6exnP0/KU7EpPvz/T8VygqWVA7+P9U711tgFP4/c9aGPEE4/j8S9feyLGD+P5YI/L7Nnf4/kv78FuAe/z9nLNzS/lr/P1yTotTukv8/GNwzpkzE/z8OuO759sX/Py1q5lqK5f8/PLvxP7cVAECSmUAPNC0AQKovNQ6LLgBAqNuiaN42AEAjkPoRCTwAQEHT/TiZUgBAN9eYGg1YAEDfwSxQDqAAQHk7/rJsrQBAK5BK0lXMAEBhtvOybwIBQETdLKt0NgFAmViTLjOIAUD5eTCPw9EBQFcbpa/H8gFAevHRlEUBAkAklIf4lR0CQEt94JBpJwJAKRoA79c8AkA3z0DAW1wCQB6JIfkKaQJAG/Swc1JtAkA2lg3ibHwCQPj3ELbXngJA2VbJ7lDSAkD/phG1vtMCQCCmy6H3EwNADm9I2SUYA0D127lNyRgDQGz4cHD0eQNAYTJ5QJSfA0AMBTT3jLIDQB2cDwJJyQNA9q/0+ikGBECsmE30RBEEQMr5bsn8JwRAcpIWOLZLBEBHGKOz9FkEQP4UXCK6iwRAeO6Ec1PIBEAq9PuEbT0FQNeynvG7UAVA2nopkQfoBUBIKvfJ7o8GQNj/NNikggdAJXNkkl7RCEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60963&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60962&quot;}},&quot;id&quot;:&quot;60947&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60926&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60942&quot;}},&quot;id&quot;:&quot;60946&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60943&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60944&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60947&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60948&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60949&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60951&quot;}},&quot;id&quot;:&quot;60950&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60960&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60948&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60961&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60947&quot;}},&quot;id&quot;:&quot;60951&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60919&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60922&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60949&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60920&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;60906&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"fc4fb93d-142c-486b-921b-5f666d696a0e","root_ids":["60906"],"roots":{"60906":"d868df00-42ed-4448-803a-cf5ed690bc3b"}}];
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