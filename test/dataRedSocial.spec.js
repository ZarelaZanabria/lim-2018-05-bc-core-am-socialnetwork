
describe('data', () => {

  it('debería exponer función guardarDataCorreo en objeto global', () => {
    assert.isFunction(guardarDataCorreo);
  });

  it('debería exponer función guardarData en objeto global', () => {
    assert.isFunction(guardarData);
  });

  it('debería exponer función validateEmail en objeto global', () => {
    assert.isFunction(validateEmail);
  });


  it("Deberia tener las claves de alojamiento inesperado ", function() {
    var config = new Config(
      {
        name: "throwaway",
        public: "public",
        ignore: ["**/.*"],
        rewrites: [],
        redirects: [],
        headers: [],
      },
      {}
    );

    expect(config.data.hosting).to.have.property("public", "public");
    expect(config.data.hosting).to.have.property("ignore");
    expect(config.data.hosting).to.have.property("rewrites");
    expect(config.data.hosting).to.have.property("redirects");
    expect(config.data.hosting).to.have.property("headers");
  });

   
  });

});


describe("Config", function() {
  describe("#new", function() {
    it("should hoist legacy hosting keys", function() {
      var config = new Config(
        {
          name: "throwaway",
          public: "public",
          ignore: ["**/.*"],
          rewrites: [],
          redirects: [],
          headers: [],
        },
        {}
      );

      expect(config.data.hosting).to.have.property("public", "public");
      expect(config.data.hosting).to.have.property("ignore");
      expect(config.data.hosting).to.have.property("rewrites");
      expect(config.data.hosting).to.have.property("redirects");
      expect(config.data.hosting).to.have.property("headers");
    });

    it("should not hoist if hosting key is present", function() {
      var config = new Config(
        {
          name: "throwaway",
          hosting: { public: "." },
          rewrites: [],
        },
        {}
      );

      expect(config.data.hosting).to.have.property("public", ".");
      expect(config.data.hosting).not.to.have.property("rewrites");
    });
  });

  describe("#importLegacyHostingKeys", function() {
    it("should respect non-overlapping keys in hosting", function() {
      var redirects = [{ source: "/foo", destination: "/bar.html", type: 301 }];
      var rewrites = [{ source: "**", destination: "/index.html" }];
      var config = new Config(
        {
          rewrites: rewrites,
          hosting: {
            redirects: redirects,
          },
        },
        {}
      );

      config.importLegacyHostingKeys();
      expect(config.get("hosting.redirects")).to.eq(redirects);
      expect(config.get("hosting.rewrites")).to.eq(rewrites);
    });
  });

  describe("#_parseFile", function() {
    it("should load a cjson file", function() {
      var config = new Config({}, { cwd: _fixtureDir("config-imports") });
      expect(config._parseFile("hosting", "hosting.json").public).to.equal(".");
    });

    it("should error out for an unknown file", function() {
      var config = new Config({}, { cwd: _fixtureDir("config-imports") });
      expect(function() {
        config._parseFile("hosting", "i-dont-exist.json");
      }).to.throw("Imported file i-dont-exist.json does not exist");
    });

    it("should error out for an unrecognized extension", function() {
      var config = new Config({}, { cwd: _fixtureDir("config-imports") });
      expect(function() {
        config._parseFile("hosting", "unsupported.txt");
      }).to.throw("unsupported.txt is not of a supported config file type");
    });
  });

  describe("#_materialize", function() {
    it("should assign unaltered if an object is found", function() {
      var config = new Config({ example: { foo: "bar" } }, {});
      expect(config._materialize("example").foo).to.equal("bar");
    });

    it("should prevent top-level key duplication", function() {
      var config = new Config({ rules: "rules.json" }, { cwd: _fixtureDir("dup-top-level") });
      expect(config._materialize("rules")).to.deep.equal({ ".read": true });
    });
  });
});

