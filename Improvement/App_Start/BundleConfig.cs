﻿using System.Web;
using System.Web.Optimization;

namespace Improvement
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/app.js")
                .Include("~/Scripts/Controllers/LandingPageController.js")
                .Include("~/Scripts/Controllers/ImprovementListController.js")
                .Include("~/Scripts/Controllers/EditImprovementController.js")
                .Include("~/Scripts/Controllers/ImprovementService.js")
                .Include("~/Scripts/Controllers/Configuration.js")
                .Include("~/Scripts/Controllers/OwnImprovementFilter.js")
                .Include("~/Scripts/ExpanderControl.js"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
