const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const locale = require("./src/_data/i18n/locale");
const fs = require("fs"); 
module.exports = function (eleventyConfig) {
  // add plugin syntaxHighlighth
  eleventyConfig.addPlugin(syntaxHighlight);

  // Browsersync
  // Redirect from root to default language root during --serve
  // Can also be handled by netlify.toml?
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync('docs/404.html');

        bs.addMiddleware('*', (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
        });
      }
    } 
  });


  //copy css
  eleventyConfig.addPassthroughCopy("./src/css");
  //copy img
  eleventyConfig.addPassthroughCopy("./src/img");
  //copy manifest
  eleventyConfig.addPassthroughCopy("./src/manifest.json");

/**
 * Demo collection 
 * 
 * //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "en").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
      //return b.data.order - a.data.order; // sort by order - descending
      //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });
 */

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderDescEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "en").sort(function(a, b) {
      return b.data.order - a.data.order; // sort by order - descending
    });

  });

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "en").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderDescEl", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "el").sort(function(a, b) {
      return b.data.order - a.data.order; // sort by order - descending
    });

  });

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEl", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "el").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};